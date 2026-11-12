/* =========================================================================
   LESSON SCRIPT — single source of truth for every spoken line.
   ---------------------------------------------------------------------------
   • UI components DISPLAY these exact strings.
   • src/utils/narration.js wraps them in styled segments for playback.
   • scripts/generate_audio.js reads ALL_PHRASES to pre-generate the MP3s.
   Because all three read the same strings, on-screen text and audio can
   never drift apart (1:1 parity).

   CONTENT POLICY: only paragraphs and questions are narrated.
   Titles, headings and labels live in the components and are NEVER spoken.
   ========================================================================= */
import { ALL_PRACTICE_PHRASES } from '../data/practiceQuestions.js';

export const WONDER = {
  paragraph:
    "Leo and his family enjoy a dinner whose menu prices add up to $100. Leo expects to pay $100, or maybe $109 with 9 percent GST. But the bill says $119.90!",
  question:
    "Where did the extra money come from? How do restaurants and shops work out the final price you pay?"
};

export const STORY = [
  {
    body: "GST stands for Goods and Services Tax. It is a tax added to the price of most things we buy, and the money goes to the government to pay for schools, hospitals and roads. In Singapore, GST is 9 percent.",
    style: 'statement'
  },
  {
    body: "To find the GST, take 9 percent of the price before GST. A pair of headphones costs $50 before GST. 9 percent of 50 is 0.09 times 50, which is $4.50 of GST.",
    style: 'emphasis'
  },
  {
    body: "The price you pay is the price before GST plus the GST. Here's a shortcut: you pay 100 percent plus 9 percent, which is 109 percent. Multiply by 1.09! 50 times 1.09 is $54.50.",
    style: 'statement'
  },
  {
    body: "Many restaurants add a 10 percent service charge first. Then GST is charged on the price PLUS the service charge. So the menu price is multiplied by 1.1 and then by 1.09.",
    style: 'thinking'
  },
  {
    body: "Leo's mystery is solved! The food cost $100. The service charge of 10 percent made it $110. Then 9 percent GST on $110 is $9.90. So the total is $119.90, not $109!",
    style: 'encouragement'
  },
  {
    body: "Sometimes a price already includes GST. To find the price before GST, divide by 1.09. A phone sold for $218 including GST was $218 divided by 1.09, which is $200 before GST. So the GST was $18.",
    style: 'emphasis'
  },
  {
    body: "With a discount, take the discount off first, then add GST to the lower price. A $80 jacket at 25 percent off costs $60, and 9 percent GST makes it $65.40. You pay GST only on what you actually spend!",
    style: 'statement'
  },
  {
    body: "Brilliant! You can now calculate GST, find totals with the 1.09 multiplier, handle service charges, remove GST from a price and combine GST with discounts. Step into the lab to build GST, run a restaurant bill and crack tax puzzles!",
    style: 'celebration'
  }
];

export const SIMULATE = {
  1: "Build the GST with coins! Add coins until the GST is exactly 9 percent of the price. Then find the total you pay.",
  2: "Welcome to the restaurant! Add each dish to the bill, then work out the service charge, the GST and the final total.",
  3: "Be a tax detective! Follow the chains forwards and backwards to solve real GST puzzles."
};

export const SIMULATE_GUIDANCE = [
  // Station 1
  {
    desc: "Headphones cost $50 before GST. Add coins until the GST is exactly 9% of the price, then find the total you pay.",
    hint: "9% of $50 = 0.09 × 50 = $4.50. Total = $50 + $4.50, or $50 × 1.09."
  },
  {
    desc: "A pair of football boots costs $120 before GST. Build the GST with coins, then find the total.",
    hint: "0.09 × 120 = $10.80. Total = $120 × 1.09."
  },
  {
    desc: "A bicycle costs $340 before GST. Build the exact GST, then find what Leo pays.",
    hint: "10% of $340 is $34, and 1% is $3.40. So 9% is $34 − $3.40 = $30.60."
  },
  // Station 2
  {
    desc: "Leo and Mia order lunch. Add each dish to the bill. The restaurant adds a 10% service charge, then 9% GST.",
    hint: "Subtotal = $40. Service charge = $4. GST = 9% of $44. Total = $40 × 1.1 × 1.09."
  },
  {
    desc: "The family orders four dishes. Build the bill and work out the service charge, GST and total.",
    hint: "Subtotal = $60. Service charge = $6. GST = 9% of $66 = $5.94."
  },
  {
    desc: "This is the dinner from the Wonder! Build the bill and find out why it came to $119.90.",
    hint: "Subtotal = $100. Service charge = $10. GST = 9% of $110 = $9.90. Total = $119.90."
  },
  // Station 3
  {
    desc: "A phone is sold for $218, and that price already includes 9% GST. Run the chain backwards to find the price before GST.",
    hint: "Before × 1.09 = 218, so before = 218 ÷ 1.09."
  },
  {
    desc: "An $80 jacket is 25% off. GST is added to the sale price. Follow the chain to find what Ava pays.",
    hint: "25% off leaves 75%: 80 × 0.75 = 60. Then 9% of $60 = $5.40."
  },
  {
    desc: "GST rose from 8% to 9% in 2024. Compare the price of a $300 TV under both rates.",
    hint: "300 × 1.08 and 300 × 1.09. The difference is 1% of 300."
  }
];

export const REFLECT = {
  question:
    "Why does a restaurant bill with a 10 percent service charge and 9 percent GST come to more than 19 percent extra? Explain it to Robo with your own example!"
};

export const FEEDBACK = {
  splitDone: "Awesome! Your GST is exactly right!",
  buildDone: "Great work! The restaurant bill is perfect!",
  reverseDone: "Brilliant! You cracked the tax puzzle!",
  tryAgain: "Not quite. Try again!",
  practiceCorrect: "Correct! Excellent work with GST!",
  practiceWrong: "Not quite!",
  lessonDone: "Outstanding reflection! Lesson complete!"
};

/** Every phrase that should exist as a pre-generated MP3, with its voice style. */
export const ALL_PHRASES = [
  { text: WONDER.paragraph, style: 'statement' },
  { text: WONDER.question, style: 'question' },
  ...STORY.map(s => ({ text: s.body, style: s.style })),
  { text: SIMULATE[1], style: 'instruction' },
  { text: SIMULATE[2], style: 'instruction' },
  { text: SIMULATE[3], style: 'question' },
  ...SIMULATE_GUIDANCE.flatMap(g => [
    { text: g.desc, style: 'instruction' },
    { text: g.hint, style: 'thinking' }
  ]),
  { text: REFLECT.question, style: 'thinking' },
  { text: FEEDBACK.splitDone, style: 'celebration' },
  { text: FEEDBACK.buildDone, style: 'celebration' },
  { text: FEEDBACK.reverseDone, style: 'celebration' },
  { text: FEEDBACK.tryAgain, style: 'encouragement' },
  { text: FEEDBACK.practiceCorrect, style: 'celebration' },
  { text: FEEDBACK.practiceWrong, style: 'encouragement' },
  { text: FEEDBACK.lessonDone, style: 'celebration' },
  ...ALL_PRACTICE_PHRASES
];
