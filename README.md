# GST Quest — Goods & Services Tax (Grade 8 Math)

An interactive, gamified educational web application aligned with the Singapore MOE Grade 8 Mathematics curriculum on **Goods and Services Tax (GST)**, percentage calculations, restaurant service charges, reverse GST, and discounts.

---

## 🌟 Key Features

1. **Phase 1 · Wonder:** Introduces real-world dinner bill mystery ($100 menu price becoming $119.90 with 10% service charge and 9% GST).
2. **Phase 2 · Story:** 8 interactive visual narrative slides teaching GST concepts, multipliers ($1.09$), service charges, and discounts.
3. **Phase 3 · Simulate:** 3 interactive simulation labs:
   - *Station 1 (GST Coin Builder):* Build exactly 9% GST using coins.
   - *Station 2 (Restaurant Bill):* Calculate subtotal, 10% service charge, and 9% GST.
   - *Station 3 (Tax Detective):* Reverse GST chains and discount calculations.
4. **Phase 4 · Practice:** 10 themed game worlds with 10 distinct questions each (100 questions total) with progressive difficulty, live hints, diagrams, and score/streak tracking.
5. **Phase 5 · Reflect:** Scoreboard review and conceptual reflection question.
6. **Narration & Audio Pipeline:** Pre-generated ElevenLabs Alice (`eleven_multilingual_v2`) narration with intelligent fallback and pronunciation normalizer.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
```

---

## 🎙️ Audio Pipeline

The application includes offline pre-generated `.mp3` narration in `public/assets/audio/` mapped via `src/utils/audioMap.js`.

To generate or refresh audio files with ElevenLabs:
1. Add your ElevenLabs API key to `.env.local`:
   ```bash
   VITE_ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
   ```
2. Run the generator script:
   ```bash
   npm run audio:generate
   ```
