import React, { useState, useEffect } from 'react';
import { BgSymbols } from '../components/TopNav.jsx';
import { narrate, stopNarration } from '../utils/audio.js';
import { simulateStationIntro, simulateActivityGuidance, simulateActivityHint, feedbackNarration } from '../utils/narration.js';
import { GstBar, PriceTag, Chain, money, C_PRICE, C_GST, C_SC } from '../components/GstDiagram.jsx';

/* =========================================================================
   SIMULATION STATIONS — Goods & Services Tax (Grade 8)
   Station 1 · GST Coin Builder  → SEE what 9% of a price looks like
   Station 2 · Restaurant Bill   → TRY it: service charge, then GST
   Station 3 · Tax Detective     → APPLY: remove GST, discounts, rate change
   ========================================================================= */

const GST = 9;
const parseVal = str => {
  const s = String(str ?? '').replace(/[$,%\s]/g, '');
  return s === '' ? NaN : Number(s);
};
const near = (str, want, tol = 0.006) => { const v = parseVal(str); return Number.isFinite(v) && Math.abs(v - want) <= tol; };
const r2 = v => Math.round(v * 100) / 100;

/* ------------------------------------------------------------------------
   STATION DATA
   ------------------------------------------------------------------------ */
const STATION_ACTIVITIES = {
  1: [
    {
      id: 1,
      title: "Activity 1: Headphones",
      desc: "Headphones cost $50 before GST. Add coins until the GST is exactly 9% of the price, then find the total you pay.",
      icon: "🎧",
      price: 50,
      fields: [['total', 'Total price with GST ($)', 54.5], ['mult', 'Multiplier', 1.09]],
      hint: "9% of $50 = 0.09 × 50 = $4.50. Total = $50 + $4.50, or $50 × 1.09."
    },
    {
      id: 2,
      title: "Activity 2: Football Boots",
      desc: "A pair of football boots costs $120 before GST. Build the GST with coins, then find the total.",
      icon: "⚽",
      price: 120,
      fields: [['total', 'Total price with GST ($)', 130.8], ['mult', 'Multiplier', 1.09]],
      hint: "0.09 × 120 = $10.80. Total = $120 × 1.09."
    },
    {
      id: 3,
      title: "Activity 3: Bicycle",
      desc: "A bicycle costs $340 before GST. Build the exact GST, then find what Leo pays.",
      icon: "🚲",
      price: 340,
      fields: [['total', 'Total price with GST ($)', 370.6], ['mult', 'Multiplier', 1.09]],
      hint: "10% of $340 is $34, and 1% is $3.40. So 9% is $34 − $3.40 = $30.60."
    }
  ],
  2: [
    {
      id: 1,
      title: "Activity 1: Lunch for Two",
      desc: "Leo and Mia order lunch. Add each dish to the bill. The restaurant adds a 10% service charge, then 9% GST.",
      icon: "🍜",
      dishes: [{ name: 'Laksa', icon: '🍜', price: 14 }, { name: 'Chicken rice', icon: '🍗', price: 12 }, { name: 'Two drinks', icon: '🧋', price: 14 }],
      hint: "Subtotal = $40. Service charge = $4. GST = 9% of $44. Total = $40 × 1.1 × 1.09."
    },
    {
      id: 2,
      title: "Activity 2: Family Dinner",
      desc: "The family orders four dishes. Build the bill and work out the service charge, GST and total.",
      icon: "🍲",
      dishes: [{ name: 'Chilli crab', icon: '🦀', price: 28 }, { name: 'Fried rice', icon: '🍚', price: 12 }, { name: 'Vegetables', icon: '🥬', price: 10 }, { name: 'Dessert', icon: '🍧', price: 10 }],
      hint: "Subtotal = $60. Service charge = $6. GST = 9% of $66 = $5.94."
    },
    {
      id: 3,
      title: "Activity 3: Leo's Birthday Feast",
      desc: "This is the dinner from the Wonder! Build the bill and find out why it came to $119.90.",
      icon: "🎂",
      dishes: [{ name: 'Pizza', icon: '🍕', price: 36 }, { name: 'Pasta', icon: '🍝', price: 24 }, { name: 'Salad', icon: '🥗', price: 16 }, { name: 'Birthday cake', icon: '🎂', price: 24 }],
      hint: "Subtotal = $100. Service charge = $10. GST = 9% of $110 = $9.90. Total = $119.90."
    }
  ],
  3: [
    {
      id: 1,
      title: "Activity 1: Remove the GST",
      desc: "A phone is sold for $218, and that price already includes 9% GST. Run the chain backwards to find the price before GST.",
      icon: "📱",
      rows: [{ label: 'Phone', nodes: [{ key: 'before', caption: 'before GST' }, { given: 218, caption: 'with GST' }], edges: ['+9% (×1.09)'] }],
      fields: [['before', 'Price before GST ($)', 200], ['gst', 'GST included ($)', 18]],
      done: "🎉 $218 ÷ 1.09 = $200, so the GST was $18. (9% of $218 is $19.62 — that's the wrong base!)",
      hint: "Before × 1.09 = 218, so before = 218 ÷ 1.09."
    },
    {
      id: 2,
      title: "Activity 2: Discount, Then GST",
      desc: "An $80 jacket is 25% off. GST is added to the sale price. Follow the chain to find what Ava pays.",
      icon: "🧥",
      rows: [{ label: 'Jacket', nodes: [{ given: 80, caption: 'marked' }, { key: 'sale', caption: 'after 25% off' }, { key: 'pay', caption: 'with GST' }], edges: ['×0.75', '×1.09'] }],
      fields: [['sale', 'Sale price ($)', 60], ['gstAmt', 'GST on the sale price ($)', 5.4], ['pay', 'Ava pays ($)', 65.4]],
      done: "🎉 $80 × 0.75 = $60, then × 1.09 = $65.40. GST is charged only on what she actually spends!",
      hint: "25% off leaves 75%: 80 × 0.75 = 60. Then 9% of $60 = $5.40."
    },
    {
      id: 3,
      title: "Activity 3: When GST Went Up",
      desc: "GST rose from 8% to 9% in 2024. Compare the price of a $300 TV under both rates.",
      icon: "📺",
      rows: [
        { label: 'At 8% GST', nodes: [{ given: 300, caption: 'before GST' }, { key: 'old', caption: 'total' }], edges: ['×1.08'] },
        { label: 'At 9% GST', nodes: [{ given: 300, caption: 'before GST' }, { key: 'new', caption: 'total' }], edges: ['×1.09'] }
      ],
      fields: [['old', 'Total at 8% ($)', 324], ['new', 'Total at 9% ($)', 327], ['diff', 'Extra cost ($)', 3]],
      done: "🎉 $324 → $327: just 1% of $300 = $3 more for the TV.",
      hint: "300 × 1.08 and 300 × 1.09. The difference is 1% of 300."
    }
  ]
};

export function SimulatePhase({ muted, onNext }) {
  const [station, setStation] = useState(1);
  const [actIdx, setActIdx] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Station 1
  const [coins, setCoins] = useState(0);
  const [ans1, setAns1] = useState({});
  const [ok1, setOk1] = useState({});

  // Station 2
  const [added, setAdded] = useState([]);
  const [ans2, setAns2] = useState({});
  const [ok2, setOk2] = useState({});

  // Station 3
  const [ans3, setAns3] = useState({});
  const [ok3, setOk3] = useState({});

  const currentActivity = STATION_ACTIVITIES[station][actIdx];
  const say = list => narrate(list, !muted);

  useEffect(() => {
    setShowHint(false);
    setFeedback(null);
    setCoins(0);
    setAns1({});
    setOk1({});
    setAdded([]);
    setAns2({});
    setOk2({});
    setAns3({});
    setOk3({});
  }, [station, actIdx]);

  useEffect(() => {
    if (actIdx === 0) {
      narrate(simulateStationIntro(station), !muted);
    } else {
      narrate(simulateActivityGuidance(currentActivity), !muted);
    }
    return () => stopNarration();
  }, [station, actIdx, muted]);

  /* ---------- Station 1: GST Coin Builder ---------- */
  const s1 = station === 1 ? currentActivity : null;
  const want1 = s1 ? r2((s1.price * GST) / 100) : 0;
  const gstOk = s1 ? Math.abs(coins - want1) < 0.005 : false;
  const addCoin = d => { setCoins(c => Math.max(0, r2(c + d))); setFeedback(null); };
  const coinPct = s1 ? (coins / s1.price) * 100 : 0;
  const check1 = () => {
    stopNarration();
    const ok = {};
    s1.fields.forEach(([k, , v]) => { ok[k] = near(ans1[k], v, 0.005); });
    setOk1(ok);
    if (gstOk && Object.values(ok).every(Boolean)) {
      setFeedback({ success: true, text: `🎉 9% of ${money(s1.price)} = ${money(want1)}. Total = ${money(s1.price)} × 1.09 = ${money(s1.price + want1)}` });
      say(feedbackNarration.splitDone());
    } else {
      setFeedback({ success: false, text: !gstOk ? (coins > want1 ? 'Too many coins! The GST is more than 9%.' : 'Not enough coins yet — keep building the GST.') : 'GST is right! Now check the red boxes.' });
      say(feedbackNarration.tryAgain());
    }
  };

  /* ---------- Station 2: Restaurant Bill ---------- */
  const s2 = station === 2 ? currentActivity : null;
  const sub2 = s2 ? s2.dishes.reduce((a, d) => a + d.price, 0) : 0;
  const want2 = { sub: sub2, sc: r2(sub2 * 0.1), gst: r2(sub2 * 1.1 * 0.09), total: r2(sub2 * 1.1 * 1.09) };
  const allAdded = s2 ? added.length === s2.dishes.length : false;
  const addDish = i => { if (!added.includes(i)) { setAdded(a => [...a, i]); setFeedback(null); } };
  const billRows = [['sub', 'Subtotal ($)'], ['sc', 'Service charge 10% ($)'], ['gst', 'GST 9% ($)'], ['total', 'TOTAL ($)']];
  const check2 = () => {
    stopNarration();
    const ok = {};
    billRows.forEach(([k]) => { ok[k] = near(ans2[k], want2[k]); });
    setOk2(ok);
    if (Object.values(ok).every(Boolean)) {
      setFeedback({ success: true, text: `🎉 ${money(sub2)} × 1.1 × 1.09 = ${money(want2.total)} — that's ${r2(((want2.total - sub2) / sub2) * 100)}% extra, not 19%!` });
      say(feedbackNarration.buildDone());
    } else {
      setFeedback({ success: false, text: !ok.sub ? 'Add up the dishes first.' : !ok.sc ? 'Service charge = 10% of the subtotal.' : !ok.gst ? 'GST is 9% of (subtotal + service charge)!' : 'Total = subtotal + service charge + GST.' });
      say(feedbackNarration.tryAgain());
    }
  };

  /* ---------- Station 3: Tax Detective ---------- */
  const s3 = station === 3 ? currentActivity : null;
  const val3 = k => s3.fields.find(f => f[0] === k)[2];
  const rows3 = s3 ? s3.rows.map(r => ({
    ...r,
    nodes: r.nodes.map(n => (n.given !== undefined ? { label: money(n.given), caption: n.caption } : { label: ok3[n.key] ? money(val3(n.key)) : '?', ok: ok3[n.key], caption: n.caption }))
  })) : [];
  const check3 = () => {
    stopNarration();
    const ok = {};
    s3.fields.forEach(([k, , v]) => { ok[k] = near(ans3[k], v, 0.005); });
    setOk3(ok);
    if (Object.values(ok).every(Boolean)) {
      setFeedback({ success: true, text: s3.done });
      say(feedbackNarration.reverseDone());
    } else {
      setFeedback({ success: false, text: 'Check the red boxes. Multiply along the arrows; divide by 1.09 to remove GST.' });
      say(feedbackNarration.tryAgain());
    }
  };

  /* ---------- Navigation ---------- */
  const nextActivity = () => {
    stopNarration();
    if (actIdx < 2) {
      setActIdx(i => i + 1);
    } else if (station < 3) {
      setStation(s => s + 1);
      setActIdx(0);
    } else {
      onNext();
    }
  };

  const prevActivity = () => {
    stopNarration();
    if (actIdx > 0) {
      setActIdx(i => i - 1);
    } else if (station > 1) {
      setStation(s => s - 1);
      setActIdx(2);
    }
  };

  const STATIONS = [
    { n: 1, icon: '🪙', name: 'Station 1: GST Coin Builder', sub: 'Build exactly 9%' },
    { n: 2, icon: '🍽️', name: 'Station 2: Restaurant Bill', sub: 'Service charge, then GST' },
    { n: 3, icon: '🕵️', name: 'Station 3: Tax Detective', sub: 'Remove GST & combine' }
  ];

  const inputCls = ok =>
    `bg-[#14082c] border-2 rounded-xl px-3 py-2 text-white font-display font-900 text-base text-center outline-none w-24 shadow-inner ${
      ok === true ? 'border-emerald-400' : ok === false ? 'border-rose-400' : 'border-cyan-400/70 focus:border-amber-400'
    }`;

  const toggleHint = () => {
    setShowHint(h => {
      const next = !h;
      if (next) {
        narrate(simulateActivityHint(currentActivity), !muted);
      } else {
        stopNarration();
      }
      return next;
    });
  };

  const hintBtn = (
    <button
      onClick={toggleHint}
      className="bg-purple-900/80 hover:bg-purple-800 border border-purple-400/50 text-purple-200 font-display font-900 text-xs px-3 py-2 rounded-xl transition cursor-pointer"
    >
      💡 Hint
    </button>
  );

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-3 sm:p-5 relative overflow-hidden select-none z-10">
      <BgSymbols />

      {/* Main Simulation Stations Glass Card Container */}
      <div className="w-full max-w-6xl max-h-[94vh] bg-[#160b36]/95 border-2 border-purple-400/40 rounded-3xl p-5 sm:p-7 shadow-2xl backdrop-blur-md flex flex-col items-center fade-in-up z-20 my-auto overflow-hidden">
        {/* Cyan Accent Bar */}
        <div className="w-24 h-2 bg-cyan-400 rounded-full mb-2.5 shadow-[0_0_18px_rgba(56,189,248,0.85)] shrink-0" />

        {/* Card Header Title */}
        <h2 className="font-display font-900 text-2xl sm:text-3xl text-white flex items-center gap-3 mb-3.5 shrink-0">
          <span className="text-3xl sm:text-4xl">🧪</span>
          <span>Simulation Stations</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 w-full items-stretch flex-1 min-h-0 overflow-hidden">
          {/* Left Column: Station Sidebar Tabs */}
          <div className="md:col-span-4 flex flex-col justify-between gap-3 shrink-0">
            <div className="flex flex-col gap-3.5">
              {STATIONS.map(s => (
                <button
                  key={s.n}
                  onClick={() => {
                    stopNarration();
                    setStation(s.n);
                    setActIdx(0);
                  }}
                  className={`p-4 sm:p-5 rounded-2xl border-2 flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                    station === s.n
                      ? 'border-cyan-400 bg-[#1e2852] text-white shadow-[0_0_22px_rgba(56,189,248,0.4)] scale-[1.02]'
                      : 'border-purple-500/25 bg-[#13082b]/80 text-slate-300 hover:border-cyan-400/50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0 ${
                      station === s.n ? 'bg-cyan-500/30 text-cyan-300' : 'bg-white/10 text-white'
                    }`}>
                      {s.icon}
                    </div>
                    <div>
                      <p className="font-display font-900 text-base sm:text-lg leading-tight">{s.name}</p>
                      <p className="text-xs font-extrabold text-slate-300 mt-0.5">{s.sub}</p>
                    </div>
                  </div>
                  <span className="text-base">🔓</span>
                </button>
              ))}
            </div>

            {/* Bottom Left CTA Button */}
            <button
              onClick={() => {
                stopNarration();
                onNext();
              }}
              className="btn-gold font-display font-900 text-base sm:text-lg py-4 px-6 shadow-[0_0_25px_rgba(250,204,21,0.65)] hover:scale-105 transition mt-2 w-full flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Go to Practice Phase!</span>
              <span>→</span>
            </button>
          </div>

          {/* Right Column: Interactive Simulation Box */}
          <div className="md:col-span-8 bg-[#13092e]/95 border-2 border-purple-400/35 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-inner flex-1 min-h-0 overflow-hidden">
            <div className="flex flex-col flex-1 min-h-0 justify-between">
              {/* Header Row */}
              <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-3 shrink-0 gap-3">
                <h3 className="font-display font-900 text-xl sm:text-2xl text-cyan-300 flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">{currentActivity.icon}</span>
                  <span>{currentActivity.title}</span>
                </h3>
                <span className="font-display font-900 text-xs sm:text-sm text-slate-200 bg-white/10 px-4 py-1 rounded-full border border-white/15 shrink-0">
                  Activity {actIdx + 1} of 3
                </span>
              </div>

              {/* Activity Description */}
              <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-extrabold mb-3 shrink-0">
                {currentActivity.desc}
              </p>

              {/* ===================== STATION 1: GST COIN BUILDER ===================== */}
              {station === 1 && (
                <div className="flex gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-4 shadow-xl flex-1 min-h-0">
                  <div className="flex-1 min-w-0 min-h-0 flex flex-col gap-2 overflow-y-auto">
                    <div className="flex items-center justify-between shrink-0">
                      <span className="bg-[#14082c] rounded-full px-3 py-1 border border-white/10 text-sm font-900 text-sky-200">{s1.icon} Price before GST: {money(s1.price)}</span>
                      <span className="bg-[#14082c] rounded-full px-3 py-1 border border-amber-400/50 text-sm font-900 text-amber-300">GST so far: {money(coins)}</span>
                    </div>
                    <svg viewBox="0 20 360 110" className="w-full flex-1 min-h-[90px]">
                      <GstBar y={56} h={40} fs={13} segments={[
                        { pct: 100, label: `Price ${money(s1.price)} = 100%`, color: C_PRICE },
                        { pct: Math.min(25, coinPct), label: `${coinPct ? +coinPct.toFixed(2) : 0}%`, color: gstOk ? '#4ade80' : coins > want1 ? '#f87171' : C_GST }
                      ]} />
                      <line x1={16 + (109 / 130) * 328} y1="48" x2={16 + (109 / 130) * 328} y2="104" stroke="#fff" strokeWidth="2" strokeDasharray="4 3" />
                      <text x={16 + (109 / 130) * 328} y="122" fill="#fff" fontSize="11" fontWeight="900" textAnchor="middle">9% mark</text>
                    </svg>
                    <div className="flex flex-wrap justify-center gap-1.5 shrink-0">
                      {[10, 1, 0.1, 0.01].map(d => (
                        <button key={d} onClick={() => addCoin(d)} className="h-8 min-w-[44px] px-1.5 rounded-full bg-amber-400/90 hover:bg-amber-300 border-2 border-amber-200 text-slate-950 text-xs font-900 cursor-pointer shadow">+{d >= 1 ? `$${d}` : `${Math.round(d * 100)}¢`}</button>
                      ))}
                      {[-1, -0.1, -0.01].map(d => (
                        <button key={d} onClick={() => addCoin(d)} className="h-8 min-w-[40px] px-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-900 cursor-pointer">−{d <= -1 ? `$${-d}` : `${Math.round(-d * 100)}¢`}</button>
                      ))}
                      <button onClick={() => { setCoins(0); setFeedback(null); }} className="h-8 px-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-900 cursor-pointer">Reset</button>
                    </div>
                  </div>

                  <div className="w-60 sm:w-64 shrink-0 flex flex-col gap-1 min-h-0 overflow-y-auto">
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">① Build the GST</p>
                    <div className={`rounded-xl px-3 py-1.5 border-2 text-xs font-900 ${gstOk ? 'bg-emerald-950/60 border-emerald-400/60 text-emerald-200' : 'bg-rose-950/40 border-rose-400/40 text-rose-200'}`}>{gstOk ? '✔' : '✗'} GST is exactly 9%</div>
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">② Find the total</p>
                    {s1.fields.map(([k, lab]) => (
                      <div key={k} className="bg-[#14082c] rounded-xl px-2 py-1 border-2 border-amber-400/40 flex items-center gap-2">
                        <span className="text-xs font-900 text-amber-300 flex-1 leading-tight">{lab}</span>
                        <input type="number" value={ans1[k] ?? ''} onChange={e => setAns1(a => ({ ...a, [k]: e.target.value }))} onKeyDown={e => e.key === 'Enter' && check1()} className={inputCls(ok1[k]) + ' !w-20 !py-0.5'} />
                      </div>
                    ))}
                    <div className="flex gap-2">
                      <button onClick={check1} className="btn-gold flex-1 text-sm font-900 px-3 py-2">Check ✨</button>
                      {hintBtn}
                    </div>
                  </div>
                </div>
              )}

              {/* ===================== STATION 2: RESTAURANT BILL ===================== */}
              {station === 2 && (
                <div className="flex gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-4 shadow-xl flex-1 min-h-0">
                  <div className="flex-1 min-w-0 min-h-0 flex flex-col gap-2 overflow-y-auto">
                    <div className="flex gap-1.5 justify-center shrink-0 flex-wrap">
                      {s2.dishes.map((d, i) => (
                        <button key={d.name} onClick={() => addDish(i)}
                          className={`flex-1 min-w-[78px] max-w-[120px] rounded-2xl px-2 py-1.5 border-2 flex flex-col items-center transition cursor-pointer ${added.includes(i) ? 'bg-emerald-950/50 border-emerald-400/60 opacity-70' : 'bg-[#14082c] border-cyan-400/60 hover:-translate-y-1'}`}>
                          <span className="text-2xl">{d.icon}</span>
                          <span className="text-[10px] font-900 text-white leading-tight text-center">{d.name}</span>
                          <span className="text-xs font-900 text-amber-300">{money(d.price)}</span>
                          <span className="text-[10px] font-900 text-cyan-300">{added.includes(i) ? '✔ added' : 'tap to add'}</span>
                        </button>
                      ))}
                    </div>
                    <div className="flex-1 min-h-0 bg-[#f8fafc] text-slate-900 rounded-xl px-3 py-2 font-mono text-xs shadow-inner overflow-y-auto">
                      <p className="text-center font-900 tracking-widest">🍽️ TABLE BILL</p>
                      <p className="text-center text-[10px] text-slate-500">- - - - - - - - - - - - - - - - -</p>
                      {added.length === 0 && <p className="text-center text-slate-400">Tap dishes to add them…</p>}
                      {added.map(i => <div key={i} className="flex justify-between"><span>{s2.dishes[i].name}</span><span>{money(s2.dishes[i].price)}</span></div>)}
                      {allAdded && (
                        <>
                          <p className="text-center text-[10px] text-slate-500">- - - - - - - - - - - - - - - - -</p>
                          {billRows.map(([k, lab]) => (
                            <div key={k} className={`flex justify-between ${k === 'total' ? 'font-900 text-sm' : ''} ${k === 'sc' ? 'text-pink-600' : k === 'gst' ? 'text-amber-600' : ''}`}>
                              <span>{lab.replace(' ($)', '')}</span><span>{ok2[k] ? money(want2[k]) : '$ ?'}</span>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div>

                  <div className="w-60 sm:w-64 shrink-0 flex flex-col gap-1 min-h-0 overflow-y-auto">
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">Complete the bill</p>
                    {!allAdded && <p className="text-xs font-bold text-slate-400 italic">Add every dish to the bill first.</p>}
                    {allAdded && billRows.map(([k, lab]) => (
                      <div key={k} className="bg-[#14082c] rounded-xl px-2 py-1 border-2 border-amber-400/40 flex items-center gap-2">
                        <span className="text-xs font-900 text-amber-300 flex-1 leading-tight">{lab}</span>
                        <input type="number" value={ans2[k] ?? ''} onChange={e => setAns2(a => ({ ...a, [k]: e.target.value }))} onKeyDown={e => e.key === 'Enter' && check2()} className={inputCls(ok2[k]) + ' !w-20 !py-0.5'} />
                      </div>
                    ))}
                    <p className="text-[11px] font-bold text-slate-400 italic">GST is charged on the subtotal PLUS the service charge.</p>
                    <div className="flex gap-2">
                      <button onClick={check2} disabled={!allAdded} className="btn-gold flex-1 text-sm font-900 px-3 py-2 disabled:opacity-40">{allAdded ? 'Check ✨' : 'Add all dishes'}</button>
                      {hintBtn}
                    </div>
                  </div>
                </div>
              )}

              {/* ===================== STATION 3: TAX DETECTIVE ===================== */}
              {station === 3 && (
                <div className="flex gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-4 shadow-xl flex-1 min-h-0">
                  <div className="flex-1 min-w-0 min-h-0 flex flex-col items-center justify-center">
                    <svg viewBox={`0 0 360 ${rows3.length * 110 + 10}`} className="w-full max-h-full">
                      {rows3.map((r, i) => (
                        <g key={i}>
                          <text x="10" y={i * 110 + 22} fill={i ? C_PRICE : C_SC} fontSize="14" fontWeight="900">{r.label}</text>
                          <Chain nodes={r.nodes} edges={r.edges} y={i * 110 + 46} fs={15} />
                        </g>
                      ))}
                    </svg>
                  </div>

                  <div className="w-60 sm:w-64 shrink-0 flex flex-col gap-1 min-h-0 overflow-y-auto">
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">Crack the case</p>
                    {s3.fields.map(([k, lab]) => (
                      <div key={k} className="bg-[#14082c] rounded-xl px-2 py-1 border-2 border-amber-400/40 flex items-center gap-2">
                        <span className="text-xs font-900 text-amber-200 flex-1 leading-tight">{lab}</span>
                        <input type="number" value={ans3[k] ?? ''} onChange={e => setAns3(a => ({ ...a, [k]: e.target.value }))} onKeyDown={e => e.key === 'Enter' && check3()} className={inputCls(ok3[k]) + ' !w-20 !py-0.5'} />
                      </div>
                    ))}
                    <div className="flex gap-2">
                      <button onClick={check3} className="btn-gold flex-1 text-sm font-900 px-3 py-2">Check ✨</button>
                      {hintBtn}
                    </div>
                  </div>
                </div>
              )}

              {/* Hint + feedback strip */}
              {showHint && (
                <div className="p-2.5 mt-2 bg-amber-950/90 border border-amber-400/50 text-amber-200 rounded-xl text-xs sm:text-sm font-bold w-full text-center fade-in-up shrink-0">
                  💡 {currentActivity.hint}
                </div>
              )}
              {feedback && (
                <div className={`p-2.5 mt-2 rounded-2xl text-sm font-900 w-full text-center shadow-xl shrink-0 fade-in-up ${
                  feedback.success ? 'bg-emerald-950/90 text-emerald-300 border-2 border-emerald-400/60' : 'bg-rose-950/90 text-rose-300 border-2 border-rose-400/60'
                }`}>
                  {feedback.text}
                </div>
              )}
            </div>

            {/* Bottom Activity Step Buttons */}
            <div className="flex items-center justify-between border-t border-white/15 pt-3 mt-3 shrink-0">
              <button
                onClick={prevActivity}
                disabled={station === 1 && actIdx === 0}
                className="bg-[#1c0d3a]/90 hover:bg-[#2c1859] border-2 border-white/25 text-white font-display font-900 text-sm sm:text-base px-6 py-2.5 rounded-full cursor-pointer transition disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
              >
                ← Previous Activity
              </button>

              <button
                onClick={nextActivity}
                className="btn-gold text-sm sm:text-base font-900 px-8 py-2.5 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition cursor-pointer"
              >
                <span>{station === 3 && actIdx === 2 ? 'Go to Practice Phase' : 'Next Activity'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
