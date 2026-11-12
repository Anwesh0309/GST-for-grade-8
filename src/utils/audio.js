/* =========================================================================
   AUDIO ENGINE — ElevenLabs "Alice" narration pipeline with Single Player
   Voice: Alice (Clear, Engaging Educator) — Voice ID: Xb7hH8MSUJpSbSDYk0k2
   Model: eleven_multilingual_v2
   ---------------------------------------------------------------------------
   1. Cache check   → audioMap[text] (pre-generated static MP3, zero latency)
   2. Dynamic fetch → /api/elevenlabs dev proxy, then direct ElevenLabs API
   3. Last resort   → browser speechSynthesis with spoken pronunciation rules
   ---------------------------------------------------------------------------
   GUARANTEES:
   • ZERO audio overlap: Exactly ONE audio element across the entire module.
   • ZERO phase leakage: stopNarration() immediately silences everything and
     cancels any queued speech or audio promises.
   • PERFECT PRONUNCIATION: Currency, percentages, and math symbols are spoken
     naturally as words ("dollars", "cents", "percent", "times", "divided by").
   ========================================================================= */
import { audioMap } from './audioMap.js';

export const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2';
export const MODEL_ID = 'eleven_multilingual_v2';
const API_KEY = import.meta.env.VITE_ELEVENLABS_API_KEY || '';

// Per-style ElevenLabs settings (rate/pitch are used by the browser fallback)
export const STYLE_SETTINGS = {
  celebration:   { stability: 0.12, similarity_boost: 0.45, style: 0.75, use_speaker_boost: true, rate: 1.04, pitch: 1.15 },
  encouragement: { stability: 0.16, similarity_boost: 0.50, style: 0.65, use_speaker_boost: true, rate: 1.0,  pitch: 1.08 },
  question:      { stability: 0.20, similarity_boost: 0.55, style: 0.55, use_speaker_boost: true, rate: 0.98, pitch: 1.06 },
  emphasis:      { stability: 0.16, similarity_boost: 0.50, style: 0.60, use_speaker_boost: true, rate: 0.96, pitch: 1.04 },
  thinking:      { stability: 0.24, similarity_boost: 0.60, style: 0.35, use_speaker_boost: true, rate: 0.92, pitch: 0.98 },
  statement:     { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true, rate: 1.0,  pitch: 1.0 },
  instruction:   { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true, rate: 1.0,  pitch: 1.0 }
};

const settingsFor = style => STYLE_SETTINGS[style] || STYLE_SETTINGS.statement;

export let audioMuted = false;
let elevenLabsDisabled = false; // flips on auth/quota errors so we stop retrying
const urlCache = new Map();     // `${style}|${text}` -> Promise<string|null>
let currentQueue = 0;

// SINGLETON AUDIO ELEMENT: Exactly one Audio element exists in memory
let globalAudio = null;
function getGlobalAudio() {
  if (!globalAudio && typeof window !== 'undefined') {
    globalAudio = new Audio();
  }
  return globalAudio;
}

/* ----------------------- Pronunciation Normalizer ----------------------- */
/**
 * Normalizes symbols, currencies, percentages, and math operators
 * so speech synthesis pronounces them perfectly in English.
 */
export function spokenPronunciation(text) {
  if (!text) return '';
  return text
    // Currency: $119.90 -> 119 dollars and 90 cents
    .replace(/\$(\d+)\.(\d{2})\b/g, '$1 dollars and $2 cents')
    .replace(/\$(\d+)\.(\d)\b/g, '$1 dollars and $20 cents')
    .replace(/\$(\d+)\b/g, '$1 dollars')
    // Percentages: 9% -> 9 percent
    .replace(/(\d+(?:\.\d+)?)%/g, '$1 percent')
    // Mathematical operators
    .replace(/\s*×\s*/g, ' times ')
    .replace(/\s*÷\s*/g, ' divided by ')
    .replace(/\s*[−–—]\s*/g, ' minus ')
    .replace(/\s*=\s*/g, ' equals ')
    .replace(/\s*\+\s*/g, ' plus ')
    // Range: Q1–10 -> Question 1 to 10
    .replace(/\bQ(\d+)[–-](\d+)\b/gi, 'Questions $1 to $2')
    // Simplify clean whitespace
    .replace(/\s+/g, ' ')
    .trim();
}

/* ---------------------------- URL resolution ---------------------------- */
async function fetchElevenLabs(text, style) {
  if (elevenLabsDisabled) return null;
  const s = settingsFor(style);
  const body = JSON.stringify({
    text,
    model_id: MODEL_ID,
    voice_settings: {
      stability: s.stability,
      similarity_boost: s.similarity_boost,
      style: s.style,
      use_speaker_boost: s.use_speaker_boost
    }
  });

  const attempts = [];
  if (import.meta.env.DEV) {
    attempts.push({ url: `/api/elevenlabs/v1/text-to-speech/${VOICE_ID}`, headers: {} });
  }
  if (API_KEY) {
    attempts.push({
      url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      headers: { 'xi-api-key': API_KEY }
    });
  }

  for (const a of attempts) {
    try {
      const res = await fetch(a.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'audio/mpeg', ...a.headers },
        body
      });
      if (res.ok) {
        const blob = await res.blob();
        if (blob.size > 0 && /audio|octet/.test(blob.type || 'audio/mpeg')) {
          return URL.createObjectURL(blob);
        }
      } else if (res.status === 401 || res.status === 402 || res.status === 429) {
        if (a.headers['xi-api-key']) elevenLabsDisabled = true;
      }
    } catch (e) {
      /* network / CORS error */
    }
  }
  return null;
}

/** Resolve a playable URL for a phrase: static asset first, then ElevenLabs. */
export function getAudioUrl(text, style = 'statement') {
  if (!text) return Promise.resolve(null);
  if (audioMap[text]) return Promise.resolve(audioMap[text]);
  const key = `${style}|${text}`;
  if (!urlCache.has(key)) {
    const p = fetchElevenLabs(text, style).then(url => {
      if (!url) urlCache.delete(key);
      return url;
    });
    urlCache.set(key, p);
  }
  return urlCache.get(key);
}

/* ------------------------------- Voice Picking ------------------------------- */
function pickVoice() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  return (
    voices.find(v => /female|alice|zira|samantha|victoria|google us english|jenny|natural/i.test(v.name)) ||
    voices.find(v => v.lang && v.lang.startsWith('en')) ||
    voices[0]
  );
}
let ttsVoice = null;
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => { ttsVoice = pickVoice(); };
  ttsVoice = pickVoice();
}

/* --------------------------- Fallback Speech ---------------------------- */
function fallbackSpeech(seg, queueId) {
  return new Promise(resolve => {
    if (queueId !== currentQueue || audioMuted || typeof window === 'undefined' || !('speechSynthesis' in window) || !seg.text) {
      return resolve();
    }

    try {
      window.speechSynthesis.cancel();
    } catch (e) {}

    const spokenText = spokenPronunciation(seg.text);
    const cfg = settingsFor(seg.style);
    const utter = new SpeechSynthesisUtterance(spokenText);
    if (ttsVoice) utter.voice = ttsVoice;
    utter.rate = cfg.rate;
    utter.pitch = cfg.pitch;

    let settled = false;
    const finish = () => {
      if (!settled) {
        settled = true;
        utter.onend = null;
        utter.onerror = null;
        resolve();
      }
    };

    utter.onend = finish;
    utter.onerror = finish;

    if (queueId === currentQueue && !audioMuted) {
      window.speechSynthesis.speak(utter);
    } else {
      finish();
    }
  });
}

/* --------------------------- Audio Playback ---------------------------- */
function playUrl(url, seg, queueId) {
  return new Promise(resolve => {
    if (queueId !== currentQueue || audioMuted) return resolve();

    const audio = getGlobalAudio();
    if (!audio) return resolve();

    let settled = false;
    const cleanup = () => {
      audio.onended = null;
      audio.onerror = null;
      audio.onpause = null;
    };

    const done = () => {
      if (!settled) {
        settled = true;
        cleanup();
        resolve();
      }
    };

    audio.onended = done;
    audio.onerror = () => {
      cleanup();
      if (queueId === currentQueue && !audioMuted) {
        fallbackSpeech(seg, queueId).then(done);
      } else {
        done();
      }
    };

    audio.src = url;
    audio.currentTime = 0;

    audio.play().catch(err => {
      cleanup();
      // If paused or aborted by stopNarration(), DO NOT fall back to speech!
      if (queueId !== currentQueue || audioMuted || (err && err.name === 'AbortError')) {
        done();
      } else {
        fallbackSpeech(seg, queueId).then(done);
      }
    });
  });
}

export function setMuted(m) {
  audioMuted = m;
  if (m) stopNarration();
}

/**
 * Stop all active narration immediately.
 * Pauses single audio element, removes listeners, resets source, and cancels speech.
 */
export function stopNarration() {
  currentQueue++;

  if (globalAudio) {
    try {
      globalAudio.onended = null;
      globalAudio.onerror = null;
      globalAudio.onpause = null;
      globalAudio.pause();
      globalAudio.currentTime = 0;
      globalAudio.removeAttribute('src');
      globalAudio.load();
    } catch (e) {}
  }

  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
}

/**
 * Play an array of segments in order.
 * A newer narrate() call immediately cancels older ones without overlapping.
 */
export async function narrate(segments, autoplay = true) {
  if (!autoplay || audioMuted) return;
  stopNarration();
  const myQueue = ++currentQueue;
  const list = (Array.isArray(segments) ? segments : [segments]).filter(s => s && s.text);
  if (!list.length) return;

  let pending = getAudioUrl(list[0].text, list[0].style);
  for (let i = 0; i < list.length; i++) {
    const url = await pending;
    if (myQueue !== currentQueue || audioMuted) return;

    // Eager preload of next segment while this plays
    pending = i + 1 < list.length ? getAudioUrl(list[i + 1].text, list[i + 1].style) : null;

    if (url) {
      await playUrl(url, list[i], myQueue);
    } else {
      await fallbackSpeech(list[i], myQueue);
    }

    if (myQueue !== currentQueue || audioMuted) return;
  }
}

/* --------------------------- Segment helpers ---------------------------- */
export const say = text => ({ text, style: 'statement' });
export const ask = text => ({ text, style: 'question' });
export const cheer = text => ({ text, style: 'celebration' });
export const encourage = text => ({ text, style: 'encouragement' });
export const emphasize = text => ({ text, style: 'emphasis' });
export const think = text => ({ text, style: 'thinking' });
export const celebrate = text => ({ text, style: 'celebration' });
export const instruct = text => ({ text, style: 'instruction' });
