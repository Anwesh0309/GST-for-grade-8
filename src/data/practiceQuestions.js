/* =========================================================================
   PRACTICE QUESTIONS BANK — Grade 8 Goods and Services Tax (GST)
   10 Themed Worlds × 10 Questions = 100 Distinct Questions with Hints
   Standard: 9% GST, 10% Service Charge
   ========================================================================= */

const RULES = {
  gst: "✦ GST = 9% OF THE PRICE",
  total: "✦ TOTAL = PRICE × 1.09",
  mult: "✦ 100% + 9% = 109%",
  sc: "✦ SERVICE CHARGE FIRST, THEN GST",
  reverse: "✦ BEFORE GST = TOTAL ÷ 1.09",
  disc: "✦ DISCOUNT FIRST, THEN GST",
  rate: "✦ GST ÷ PRICE × 100",
  mixed: "✦ COMPREHENSIVE MASTERY"
};

export const RAW_PRACTICE_WORLDS = [
  // World 0: Tax Town (Q1–10, Diff 1)
  [
    {
      id: 1,
      rule: RULES.gst,
      prompt: "A pair of headphones costs $50 before GST. How much is the 9% GST?",
      hint: "Multiply $50 by 0.09 to find the 9% GST.",
      options: ["$4.50", "$5.00", "$4.00", "$9.00"],
      answer: "$4.50",
      explanation: "9% of $50 = 0.09 × 50 = $4.50.",
      diagramData: { type: 'bar', segments: [{ pct: 100, label: '$50 = 100%', color: '#38bdf8' }, { pct: 9, label: '9% = $4.50', color: '#facc15' }] }
    },
    {
      id: 2,
      rule: RULES.gst,
      prompt: "A backpack costs $40 before GST. How much is the 9% GST?",
      hint: "Multiply $40 by 0.09 to find the 9% GST.",
      options: ["$3.60", "$4.00", "$3.20", "$4.60"],
      answer: "$3.60",
      explanation: "9% of $40 = 0.09 × 40 = $3.60.",
      diagramData: { type: 'bar', segments: [{ pct: 100, label: '$40 = 100%', color: '#38bdf8' }, { pct: 9, label: '9% = $3.60', color: '#facc15' }] }
    },
    {
      id: 3,
      rule: RULES.gst,
      prompt: "A football costs $30 before GST. How much is the 9% GST?",
      hint: "Multiply $30 by 0.09 to find the 9% GST.",
      options: ["$2.70", "$3.00", "$2.50", "$3.70"],
      answer: "$2.70",
      explanation: "9% of $30 = 0.09 × 30 = $2.70.",
      diagramData: { type: 'bar', segments: [{ pct: 100, label: '$30 = 100%', color: '#38bdf8' }, { pct: 9, label: '9% = $2.70', color: '#facc15' }] }
    },
    {
      id: 4,
      rule: RULES.gst,
      prompt: "A desk lamp costs $20 before GST. How much is the 9% GST?",
      hint: "Multiply $20 by 0.09 to find the 9% GST.",
      options: ["$1.80", "$2.00", "$1.50", "$2.80"],
      answer: "$1.80",
      explanation: "9% of $20 = 0.09 × 20 = $1.80.",
      diagramData: { type: 'bar', segments: [{ pct: 100, label: '$20 = 100%', color: '#38bdf8' }, { pct: 9, label: '9% = $1.80', color: '#facc15' }] }
    },
    {
      id: 5,
      rule: RULES.gst,
      prompt: "A board game costs $25 before GST. How much is the 9% GST?",
      hint: "Multiply $25 by 0.09 to find the 9% GST.",
      options: ["$2.25", "$2.50", "$2.00", "$3.25"],
      answer: "$2.25",
      explanation: "9% of $25 = 0.09 × 25 = $2.25.",
      diagramData: { type: 'bar', segments: [{ pct: 100, label: '$25 = 100%', color: '#38bdf8' }, { pct: 9, label: '9% = $2.25', color: '#facc15' }] }
    },
    {
      id: 6,
      rule: RULES.gst,
      prompt: "A pair of trainers costs $100 before GST. How much is the 9% GST?",
      hint: "9% of $100 is 0.09 times 100, which is $9.",
      options: ["$9.00", "$10.00", "$8.00", "$9.90"],
      answer: "$9.00",
      explanation: "9% of $100 = 0.09 × 100 = $9.00.",
      diagramData: { type: 'bar', segments: [{ pct: 100, label: '$100 = 100%', color: '#38bdf8' }, { pct: 9, label: '9% = $9.00', color: '#facc15' }] }
    },
    {
      id: 7,
      rule: RULES.gst,
      prompt: "A video game costs $60 before GST. How much is the 9% GST?",
      hint: "Multiply $60 by 0.09 to find the 9% GST.",
      options: ["$5.40", "$6.00", "$5.00", "$6.40"],
      answer: "$5.40",
      explanation: "9% of $60 = 0.09 × 60 = $5.40.",
      diagramData: { type: 'bar', segments: [{ pct: 100, label: '$60 = 100%', color: '#38bdf8' }, { pct: 9, label: '9% = $5.40', color: '#facc15' }] }
    },
    {
      id: 8,
      rule: RULES.gst,
      prompt: "A watch costs $120 before GST. How much is the 9% GST?",
      hint: "Multiply $120 by 0.09 to find the 9% GST.",
      options: ["$10.80", "$12.00", "$10.00", "$11.80"],
      answer: "$10.80",
      explanation: "9% of $120 = 0.09 × 120 = $10.80.",
      diagramData: { type: 'bar', segments: [{ pct: 100, label: '$120 = 100%', color: '#38bdf8' }, { pct: 9, label: '9% = $10.80', color: '#facc15' }] }
    },
    {
      id: 9,
      rule: RULES.gst,
      prompt: "A bicycle helmet costs $80 before GST. How much is the 9% GST?",
      hint: "Multiply $80 by 0.09 to find the 9% GST.",
      options: ["$7.20", "$8.00", "$7.00", "$8.20"],
      answer: "$7.20",
      explanation: "9% of $80 = 0.09 × 80 = $7.20.",
      diagramData: { type: 'bar', segments: [{ pct: 100, label: '$80 = 100%', color: '#38bdf8' }, { pct: 9, label: '9% = $7.20', color: '#facc15' }] }
    },
    {
      id: 10,
      rule: RULES.gst,
      prompt: "A book set costs $70 before GST. How much is the 9% GST?",
      hint: "Multiply $70 by 0.09 to find the 9% GST.",
      options: ["$6.30", "$7.00", "$6.00", "$7.30"],
      answer: "$6.30",
      explanation: "9% of $70 = 0.09 × 70 = $6.30.",
      diagramData: { type: 'bar', segments: [{ pct: 100, label: '$70 = 100%', color: '#38bdf8' }, { pct: 9, label: '9% = $6.30', color: '#facc15' }] }
    }
  ],

  // World 1: Receipt Road (Q11–20, Diff 1)
  [
    {
      id: 11,
      rule: RULES.total,
      prompt: "Leo buys a backpack priced at $50 before GST. What is the total price including 9% GST?",
      hint: "Multiply $50 by 1.09 to get the total price with GST.",
      options: ["$54.50", "$59.00", "$55.00", "$50.90"],
      answer: "$54.50",
      explanation: "$50 × 1.09 = $54.50 (including $4.50 GST).",
      diagramData: { type: 'tag', label: 'BEFORE GST', value: '$50.00', col: '#38bdf8' }
    },
    {
      id: 12,
      rule: RULES.total,
      prompt: "Emma buys a watch priced at $100 before GST. What is the total price including 9% GST?",
      hint: "9% of $100 is $9, so add $9 to $100.",
      options: ["$109.00", "$119.00", "$100.90", "$108.00"],
      answer: "$109.00",
      explanation: "$100 × 1.09 = $109.00 (including $9.00 GST).",
      diagramData: { type: 'tag', label: 'BEFORE GST', value: '$100.00', col: '#38bdf8' }
    },
    {
      id: 13,
      rule: RULES.total,
      prompt: "Alex buys a desk lamp priced at $30 before GST. What is the total price including 9% GST?",
      hint: "Multiply $30 by 1.09 to get the total price with GST.",
      options: ["$32.70", "$39.00", "$33.00", "$32.00"],
      answer: "$32.70",
      explanation: "$30 × 1.09 = $32.70 (including $2.70 GST).",
      diagramData: { type: 'tag', label: 'BEFORE GST', value: '$30.00', col: '#38bdf8' }
    },
    {
      id: 14,
      rule: RULES.total,
      prompt: "Sophia buys headphones priced at $60 before GST. What is the total price including 9% GST?",
      hint: "Multiply $60 by 1.09 to get the total price with GST.",
      options: ["$65.40", "$69.00", "$66.00", "$64.50"],
      answer: "$65.40",
      explanation: "$60 × 1.09 = $65.40 (including $5.40 GST).",
      diagramData: { type: 'tag', label: 'BEFORE GST', value: '$60.00', col: '#38bdf8' }
    },
    {
      id: 15,
      rule: RULES.total,
      prompt: "Jack buys a football priced at $20 before GST. What is the total price including 9% GST?",
      hint: "9% of $20 is $1.80, so add $1.80 to $20.",
      options: ["$21.80", "$29.00", "$22.00", "$20.90"],
      answer: "$21.80",
      explanation: "$20 × 1.09 = $21.80 (including $1.80 GST).",
      diagramData: { type: 'tag', label: 'BEFORE GST', value: '$20.00', col: '#38bdf8' }
    },
    {
      id: 16,
      rule: RULES.total,
      prompt: "Maya buys a video game priced at $80 before GST. What is the total price including 9% GST?",
      hint: "Multiply $80 by 1.09 to find the total with GST.",
      options: ["$87.20", "$89.00", "$88.00", "$86.50"],
      answer: "$87.20",
      explanation: "$80 × 1.09 = $87.20 (including $7.20 GST).",
      diagramData: { type: 'tag', label: 'BEFORE GST', value: '$80.00', col: '#38bdf8' }
    },
    {
      id: 17,
      rule: RULES.total,
      prompt: "Lucas buys a water bottle priced at $10 before GST. What is the total price including 9% GST?",
      hint: "9% of $10 is $0.90, so the total is $10.90.",
      options: ["$10.90", "$19.00", "$11.00", "$10.09"],
      answer: "$10.90",
      explanation: "$10 × 1.09 = $10.90 (including $0.90 GST).",
      diagramData: { type: 'tag', label: 'BEFORE GST', value: '$10.00', col: '#38bdf8' }
    },
    {
      id: 18,
      rule: RULES.total,
      prompt: "Harper buys trainers priced at $120 before GST. What is the total price including 9% GST?",
      hint: "Multiply $120 by 1.09 to find the total price with GST.",
      options: ["$130.80", "$132.00", "$129.00", "$130.00"],
      answer: "$130.80",
      explanation: "$120 × 1.09 = $130.80 (including $10.80 GST).",
      diagramData: { type: 'tag', label: 'BEFORE GST', value: '$120.00', col: '#38bdf8' }
    },
    {
      id: 19,
      rule: RULES.total,
      prompt: "Noah buys a board game priced at $40 before GST. What is the total price including 9% GST?",
      hint: "Multiply $40 by 1.09 to find the total price with GST.",
      options: ["$43.60", "$49.00", "$44.00", "$43.00"],
      answer: "$43.60",
      explanation: "$40 × 1.09 = $43.60 (including $3.60 GST).",
      diagramData: { type: 'tag', label: 'BEFORE GST', value: '$40.00', col: '#38bdf8' }
    },
    {
      id: 20,
      rule: RULES.total,
      prompt: "Chloe buys a calculator priced at $25 before GST. What is the total price including 9% GST?",
      hint: "Multiply $25 by 1.09 to get the total price with GST.",
      options: ["$27.25", "$29.00", "$28.00", "$27.50"],
      answer: "$27.25",
      explanation: "$25 × 1.09 = $27.25 (including $2.25 GST).",
      diagramData: { type: 'tag', label: 'BEFORE GST', value: '$25.00', col: '#38bdf8' }
    }
  ],

  // World 2: Multiplier Mall (Q21–30, Diff 2)
  [
    {
      id: 21,
      rule: RULES.mult,
      prompt: "GST is 9%. Which single decimal number do you multiply a price by to get the total with GST?",
      hint: "100% plus 9% equals 109%, which as a decimal is 1.09.",
      options: ["1.09", "0.09", "1.90", "0.91"],
      answer: "1.09",
      explanation: "100% + 9% = 109% = 1.09.",
      diagramData: { type: 'chain', nodes: [{ label: '100%' }, { label: '109%' }], edges: ['+9%'] }
    },
    {
      id: 22,
      rule: RULES.mult,
      prompt: "GST is 7%. Which single decimal number do you multiply a price by to get the total with GST?",
      hint: "100% plus 7% equals 107%, which as a decimal is 1.07.",
      options: ["1.07", "0.07", "1.70", "0.93"],
      answer: "1.07",
      explanation: "100% + 7% = 107% = 1.07.",
      diagramData: { type: 'chain', nodes: [{ label: '100%' }, { label: '107%' }], edges: ['+7%'] }
    },
    {
      id: 23,
      rule: RULES.mult,
      prompt: "GST is 8%. Which single decimal number do you multiply a price by to get the total with GST?",
      hint: "100% plus 8% equals 108%, which as a decimal is 1.08.",
      options: ["1.08", "0.08", "1.80", "0.92"],
      answer: "1.08",
      explanation: "100% + 8% = 108% = 1.08.",
      diagramData: { type: 'chain', nodes: [{ label: '100%' }, { label: '108%' }], edges: ['+8%'] }
    },
    {
      id: 24,
      rule: RULES.mult,
      prompt: "Sales tax is 10%. Which single decimal number do you multiply a price by to get the total with tax?",
      hint: "100% plus 10% equals 110%, which as a decimal is 1.10.",
      options: ["1.10", "0.10", "1.01", "0.90"],
      answer: "1.10",
      explanation: "100% + 10% = 110% = 1.10.",
      diagramData: { type: 'chain', nodes: [{ label: '100%' }, { label: '110%' }], edges: ['+10%'] }
    },
    {
      id: 25,
      rule: RULES.mult,
      prompt: "Sales tax is 5%. Which single decimal number do you multiply a price by to get the total with tax?",
      hint: "100% plus 5% equals 105%, which as a decimal is 1.05.",
      options: ["1.05", "0.05", "1.50", "0.95"],
      answer: "1.05",
      explanation: "100% + 5% = 105% = 1.05.",
      diagramData: { type: 'chain', nodes: [{ label: '100%' }, { label: '105%' }], edges: ['+5%'] }
    },
    {
      id: 26,
      rule: RULES.total,
      prompt: "A jacket costs $80 before 9% GST. Using the multiplier 1.09, what is the total price?",
      hint: "Multiply $80 by 1.09 to find the total.",
      options: ["$87.20", "$88.00", "$89.00", "$86.50"],
      answer: "$87.20",
      explanation: "$80 × 1.09 = $87.20.",
      diagramData: { type: 'tag', label: 'BEFORE GST', value: '$80.00', col: '#38bdf8' }
    },
    {
      id: 27,
      rule: RULES.total,
      prompt: "A keyboard costs $40 before 9% GST. Using the multiplier 1.09, what is the total price?",
      hint: "Multiply $40 by 1.09 to find the total.",
      options: ["$43.60", "$44.00", "$45.00", "$42.80"],
      answer: "$43.60",
      explanation: "$40 × 1.09 = $43.60.",
      diagramData: { type: 'tag', label: 'BEFORE GST', value: '$40.00', col: '#38bdf8' }
    },
    {
      id: 28,
      rule: RULES.total,
      prompt: "A computer mouse costs $30 before 9% GST. Using the multiplier 1.09, what is the total price?",
      hint: "Multiply $30 by 1.09 to find the total.",
      options: ["$32.70", "$33.00", "$34.00", "$31.90"],
      answer: "$32.70",
      explanation: "$30 × 1.09 = $32.70.",
      diagramData: { type: 'tag', label: 'BEFORE GST', value: '$30.00', col: '#38bdf8' }
    },
    {
      id: 29,
      rule: RULES.total,
      prompt: "A power bank costs $50 before 9% GST. Using the multiplier 1.09, what is the total price?",
      hint: "Multiply $50 by 1.09 to find the total.",
      options: ["$54.50", "$55.00", "$59.00", "$53.50"],
      answer: "$54.50",
      explanation: "$50 × 1.09 = $54.50.",
      diagramData: { type: 'tag', label: 'BEFORE GST', value: '$50.00', col: '#38bdf8' }
    },
    {
      id: 30,
      rule: RULES.total,
      prompt: "A printer costs $200 before 9% GST. Using the multiplier 1.09, what is the total price?",
      hint: "Multiply $200 by 1.09 to find the total.",
      options: ["$218.00", "$220.00", "$219.00", "$216.00"],
      answer: "$218.00",
      explanation: "$200 × 1.09 = $218.00.",
      diagramData: { type: 'tag', label: 'BEFORE GST', value: '$200.00', col: '#38bdf8' }
    }
  ],

  // World 3: Hawker Harbour (Q31–40, Diff 2)
  [
    {
      id: 31,
      rule: RULES.total,
      prompt: "Liam buys chicken rice for $6 and a juice for $4 before GST. What is the total price including 9% GST?",
      hint: "Add $6 and $4 to get $10, then multiply by 1.09.",
      options: ["$10.90", "$11.00", "$10.50", "$11.90"],
      answer: "$10.90",
      explanation: "($6 + $4) × 1.09 = $10 × 1.09 = $10.90.",
      diagramData: { type: 'bar', segments: [{ pct: 60, label: '$6 Rice', color: '#38bdf8' }, { pct: 40, label: '$4 Juice', color: '#f472b6' }, { pct: 9, label: '+9% GST', color: '#facc15' }] }
    },
    {
      id: 32,
      rule: RULES.total,
      prompt: "Ava buys laksa for $7 and iced tea for $3 before GST. What is the total price including 9% GST?",
      hint: "Add $7 and $3 to get $10, then multiply by 1.09.",
      options: ["$10.90", "$11.00", "$10.70", "$11.80"],
      answer: "$10.90",
      explanation: "($7 + $3) × 1.09 = $10 × 1.09 = $10.90.",
      diagramData: { type: 'bar', segments: [{ pct: 70, label: '$7 Laksa', color: '#38bdf8' }, { pct: 30, label: '$3 Tea', color: '#f472b6' }, { pct: 9, label: '+9% GST', color: '#facc15' }] }
    },
    {
      id: 33,
      rule: RULES.total,
      prompt: "Mason buys noodles for $8 and dumplings for $12 before GST. What is the total price including 9% GST?",
      hint: "Add $8 and $12 to get $20, then multiply by 1.09.",
      options: ["$21.80", "$22.00", "$21.60", "$22.80"],
      answer: "$21.80",
      explanation: "($8 + $12) × 1.09 = $20 × 1.09 = $21.80.",
      diagramData: { type: 'bar', segments: [{ pct: 40, label: '$8 Noodles', color: '#38bdf8' }, { pct: 60, label: '$12 Dumplings', color: '#f472b6' }, { pct: 9, label: '+9% GST', color: '#facc15' }] }
    },
    {
      id: 34,
      rule: RULES.total,
      prompt: "Ella buys roti prata for $5 and teh tarik for $5 before GST. What is the total price including 9% GST?",
      hint: "The subtotal is $10. Multiply $10 by 1.09.",
      options: ["$10.90", "$11.00", "$10.50", "$11.50"],
      answer: "$10.90",
      explanation: "($5 + $5) × 1.09 = $10 × 1.09 = $10.90.",
      diagramData: { type: 'bar', segments: [{ pct: 50, label: '$5 Prata', color: '#38bdf8' }, { pct: 50, label: '$5 Teh', color: '#f472b6' }, { pct: 9, label: '+9% GST', color: '#facc15' }] }
    },
    {
      id: 35,
      rule: RULES.total,
      prompt: "James buys fish soup for $9 and fruit for $6 before GST. What is the total price including 9% GST?",
      hint: "Add $9 and $6 to get $15, then multiply by 1.09.",
      options: ["$16.35", "$16.50", "$16.00", "$17.35"],
      answer: "$16.35",
      explanation: "($9 + $6) × 1.09 = $15 × 1.09 = $16.35.",
      diagramData: { type: 'bar', segments: [{ pct: 60, label: '$9 Soup', color: '#38bdf8' }, { pct: 40, label: '$6 Fruit', color: '#f472b6' }, { pct: 9, label: '+9% GST', color: '#facc15' }] }
    },
    {
      id: 36,
      rule: RULES.total,
      prompt: "Mia buys satay for $15 and drinks for $5 before GST. What is the total price including 9% GST?",
      hint: "The subtotal is $20. Multiply $20 by 1.09.",
      options: ["$21.80", "$22.00", "$21.50", "$22.50"],
      answer: "$21.80",
      explanation: "($15 + $5) × 1.09 = $20 × 1.09 = $21.80.",
      diagramData: { type: 'bar', segments: [{ pct: 75, label: '$15 Satay', color: '#38bdf8' }, { pct: 25, label: '$5 Drinks', color: '#f472b6' }, { pct: 9, label: '+9% GST', color: '#facc15' }] }
    },
    {
      id: 37,
      rule: RULES.total,
      prompt: "Logan buys a burger meal for $12 and dessert for $8 before GST. What is the total price including 9% GST?",
      hint: "Add $12 and $8 to get $20, then multiply by 1.09.",
      options: ["$21.80", "$22.00", "$21.40", "$22.40"],
      answer: "$21.80",
      explanation: "($12 + $8) × 1.09 = $20 × 1.09 = $21.80.",
      diagramData: { type: 'bar', segments: [{ pct: 60, label: '$12 Burger', color: '#38bdf8' }, { pct: 40, label: '$8 Dessert', color: '#f472b6' }, { pct: 9, label: '+9% GST', color: '#facc15' }] }
    },
    {
      id: 38,
      rule: RULES.total,
      prompt: "Charlotte buys pasta for $14 and soup for $6 before GST. What is the total price including 9% GST?",
      hint: "The subtotal is $20. Multiply $20 by 1.09.",
      options: ["$21.80", "$22.00", "$21.50", "$22.80"],
      answer: "$21.80",
      explanation: "($14 + $6) × 1.09 = $20 × 1.09 = $21.80.",
      diagramData: { type: 'bar', segments: [{ pct: 70, label: '$14 Pasta', color: '#38bdf8' }, { pct: 30, label: '$6 Soup', color: '#f472b6' }, { pct: 9, label: '+9% GST', color: '#facc15' }] }
    },
    {
      id: 39,
      rule: RULES.total,
      prompt: "Oliver buys two lunches at $15 each before GST. What is the total price including 9% GST?",
      hint: "Two lunches cost $30. Multiply $30 by 1.09.",
      options: ["$32.70", "$33.00", "$32.00", "$34.00"],
      answer: "$32.70",
      explanation: "2 × $15 = $30. $30 × 1.09 = $32.70.",
      diagramData: { type: 'tag', label: '2 LUNCHES', value: '$30.00', col: '#38bdf8' }
    },
    {
      id: 40,
      rule: RULES.total,
      prompt: "Sophia buys three snacks at $10 each before GST. What is the total price including 9% GST?",
      hint: "Three snacks cost $30. Multiply $30 by 1.09.",
      options: ["$32.70", "$33.00", "$32.50", "$33.90"],
      answer: "$32.70",
      explanation: "3 × $10 = $30. $30 × 1.09 = $32.70.",
      diagramData: { type: 'tag', label: '3 SNACKS', value: '$30.00', col: '#38bdf8' }
    }
  ],

  // World 4: Service Street (Q41–50, Diff 2)
  [
    {
      id: 41,
      rule: RULES.sc,
      prompt: "A lunch costs $20. The cafe adds a 10% service charge, then 9% GST. How much is the 10% service charge?",
      hint: "10% of $20 is $2.00.",
      options: ["$2.00", "$1.80", "$2.20", "$0.20"],
      answer: "$2.00",
      explanation: "10% of $20 = 0.10 × 20 = $2.00.",
      diagramData: { type: 'chain', nodes: [{ label: '$20.00', caption: 'food' }, { label: '$2.00', caption: '10% service' }], edges: ['×0.10'] }
    },
    {
      id: 42,
      rule: RULES.sc,
      prompt: "A cafe bill has food costing $30. A 10% service charge is added, then 9% GST. How much is the 9% GST?",
      hint: "Add 10% to $30 to get $33, then calculate 9% of $33.",
      options: ["$2.97", "$2.70", "$3.00", "$3.30"],
      answer: "$2.97",
      explanation: "Food + 10% SC = $33. 9% of $33 = 0.09 × 33 = $2.97.",
      diagramData: { type: 'chain', nodes: [{ label: '$30', caption: 'food' }, { label: '$33', caption: '+ service' }, { label: '$2.97', caption: '9% GST' }], edges: ['×1.1', '×0.09'] }
    },
    {
      id: 43,
      rule: RULES.sc,
      prompt: "A dinner meal costs $40. With a 10% service charge and then 9% GST, what is the total bill?",
      hint: "Multiply $40 by 1.1, then multiply by 1.09.",
      options: ["$47.96", "$47.60", "$48.00", "$44.00"],
      answer: "$47.96",
      explanation: "$40 × 1.1 × 1.09 = $44 × 1.09 = $47.96.",
      diagramData: { type: 'chain', nodes: [{ label: '$40', caption: 'food' }, { label: '$44', caption: '+ service' }, { label: '?', caption: '+ GST' }], edges: ['×1.1', '×1.09'] }
    },
    {
      id: 44,
      rule: RULES.sc,
      prompt: "A family brunch costs $50. With a 10% service charge and then 9% GST, what is the total bill?",
      hint: "Multiply $50 by 1.1, then multiply by 1.09.",
      options: ["$59.95", "$59.50", "$60.00", "$55.00"],
      answer: "$59.95",
      explanation: "$50 × 1.1 × 1.09 = $55 × 1.09 = $59.95.",
      diagramData: { type: 'chain', nodes: [{ label: '$50', caption: 'food' }, { label: '$55', caption: '+ service' }, { label: '?', caption: '+ GST' }], edges: ['×1.1', '×1.09'] }
    },
    {
      id: 45,
      rule: RULES.sc,
      prompt: "A dinner for two costs $60. With a 10% service charge and then 9% GST, how much is the GST?",
      hint: "Service charge makes it $66. 9% of $66 is $5.94.",
      options: ["$5.94", "$5.40", "$6.00", "$6.60"],
      answer: "$5.94",
      explanation: "10% SC makes it $66. 9% of $66 = 0.09 × 66 = $5.94.",
      diagramData: { type: 'chain', nodes: [{ label: '$60', caption: 'food' }, { label: '$66', caption: '+ service' }, { label: '$5.94', caption: 'GST' }], edges: ['×1.1', '×0.09'] }
    },
    {
      id: 46,
      rule: RULES.sc,
      prompt: "A team lunch costs $80. With a 10% service charge and then 9% GST, what is the total bill?",
      hint: "Multiply $80 by 1.1, then multiply by 1.09.",
      options: ["$95.92", "$95.20", "$96.00", "$88.00"],
      answer: "$95.92",
      explanation: "$80 × 1.1 × 1.09 = $88 × 1.09 = $95.92.",
      diagramData: { type: 'chain', nodes: [{ label: '$80', caption: 'food' }, { label: '$88', caption: '+ service' }, { label: '?', caption: '+ GST' }], edges: ['×1.1', '×1.09'] }
    },
    {
      id: 47,
      rule: RULES.sc,
      prompt: "A celebration meal costs $100. With a 10% service charge and then 9% GST, what is the total bill?",
      hint: "$100 becomes $110 with service charge, and 1.09 times $110 is $119.90.",
      options: ["$119.90", "$119.00", "$120.00", "$110.00"],
      answer: "$119.90",
      explanation: "$100 × 1.1 × 1.09 = $110 × 1.09 = $119.90.",
      diagramData: { type: 'chain', nodes: [{ label: '$100', caption: 'food' }, { label: '$110', caption: '+ service' }, { label: '$119.90', caption: '+ GST' }], edges: ['×1.1', '×1.09'] }
    },
    {
      id: 48,
      rule: RULES.sc,
      prompt: "A banquet meal costs $120. With a 10% service charge and then 9% GST, how much is the 10% service charge?",
      hint: "10% of $120 is $12.00.",
      options: ["$12.00", "$10.80", "$14.00", "$1.20"],
      answer: "$12.00",
      explanation: "10% of $120 = 0.10 × 120 = $12.00.",
      diagramData: { type: 'chain', nodes: [{ label: '$120.00', caption: 'food' }, { label: '$12.00', caption: '10% service' }], edges: ['×0.10'] }
    },
    {
      id: 49,
      rule: RULES.sc,
      prompt: "A buffet costs $150. With a 10% service charge and then 9% GST, what is the total bill?",
      hint: "Multiply $150 by 1.1, then multiply by 1.09.",
      options: ["$179.85", "$178.50", "$180.00", "$165.00"],
      answer: "$179.85",
      explanation: "$150 × 1.1 × 1.09 = $165 × 1.09 = $179.85.",
      diagramData: { type: 'chain', nodes: [{ label: '$150', caption: 'food' }, { label: '$165', caption: '+ service' }, { label: '?', caption: '+ GST' }], edges: ['×1.1', '×1.09'] }
    },
    {
      id: 50,
      rule: RULES.sc,
      prompt: "A class party meal costs $200. With a 10% service charge and then 9% GST, what is the total bill?",
      hint: "Multiply $200 by 1.1, then multiply by 1.09.",
      options: ["$239.80", "$238.00", "$240.00", "$220.00"],
      answer: "$239.80",
      explanation: "$200 × 1.1 × 1.09 = $220 × 1.09 = $239.80.",
      diagramData: { type: 'chain', nodes: [{ label: '$200', caption: 'food' }, { label: '$220', caption: '+ service' }, { label: '?', caption: '+ GST' }], edges: ['×1.1', '×1.09'] }
    }
  ],

  // World 5: Reverse Ridge (Q51–60, Diff 3)
  [
    {
      id: 51,
      rule: RULES.reverse,
      prompt: "A phone is sold for $218 including 9% GST. What was the price before GST?",
      hint: "Divide $218 by 1.09 to find the price before GST.",
      options: ["$200.00", "$198.38", "$209.00", "$190.00"],
      answer: "$200.00",
      explanation: "$218 ÷ 1.09 = $200.00.",
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'before GST' }, { label: '$218.00', caption: 'with GST' }], edges: ['×1.09'] }
    },
    {
      id: 52,
      rule: RULES.reverse,
      prompt: "A tablet is sold for $109 including 9% GST. What was the price before GST?",
      hint: "Divide $109 by 1.09 to find the price before GST.",
      options: ["$100.00", "$99.19", "$100.90", "$91.00"],
      answer: "$100.00",
      explanation: "$109 ÷ 1.09 = $100.00.",
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'before GST' }, { label: '$109.00', caption: 'with GST' }], edges: ['×1.09'] }
    },
    {
      id: 53,
      rule: RULES.reverse,
      prompt: "A pair of shoes costs $109 including 9% GST. How much of that total is GST?",
      hint: "Divide $109 by 1.09 to get $100 before GST, then subtract $100 from $109.",
      options: ["$9.00", "$9.81", "$10.00", "$8.00"],
      answer: "$9.00",
      explanation: "Before GST = $109 ÷ 1.09 = $100. GST = $109 − $100 = $9.00.",
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'before GST' }, { label: '$109.00', caption: 'with GST' }], edges: ['×1.09'] }
    },
    {
      id: 54,
      rule: RULES.reverse,
      prompt: "A bicycle is sold for $327 including 9% GST. What was the price before GST?",
      hint: "Divide $327 by 1.09 to find the price before GST.",
      options: ["$300.00", "$297.57", "$318.00", "$290.00"],
      answer: "$300.00",
      explanation: "$327 ÷ 1.09 = $300.00.",
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'before GST' }, { label: '$327.00', caption: 'with GST' }], edges: ['×1.09'] }
    },
    {
      id: 55,
      rule: RULES.reverse,
      prompt: "A television costs $545 including 9% GST. What was the price before GST?",
      hint: "Divide $545 by 1.09 to find the price before GST.",
      options: ["$500.00", "$495.95", "$536.00", "$490.00"],
      answer: "$500.00",
      explanation: "$545 ÷ 1.09 = $500.00.",
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'before GST' }, { label: '$545.00', caption: 'with GST' }], edges: ['×1.09'] }
    },
    {
      id: 56,
      rule: RULES.reverse,
      prompt: "A watch is sold for $218 including 9% GST. How much GST was included in the price?",
      hint: "Divide $218 by 1.09 to get $200. The GST is $218 minus $200, which is $18.",
      options: ["$18.00", "$19.62", "$20.00", "$16.00"],
      answer: "$18.00",
      explanation: "Before GST = $218 ÷ 1.09 = $200. GST = $218 − $200 = $18.00.",
      diagramData: { type: 'chain', nodes: [{ label: '$200', caption: 'before GST' }, { label: '$218', caption: 'with GST' }], edges: ['+ $18 GST'] }
    },
    {
      id: 57,
      rule: RULES.reverse,
      prompt: "A camera costs $436 including 9% GST. What was the price before GST?",
      hint: "Divide $436 by 1.09 to find the price before GST.",
      options: ["$400.00", "$396.76", "$427.00", "$390.00"],
      answer: "$400.00",
      explanation: "$436 ÷ 1.09 = $400.00.",
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'before GST' }, { label: '$436.00', caption: 'with GST' }], edges: ['×1.09'] }
    },
    {
      id: 58,
      rule: RULES.reverse,
      prompt: "A suit is sold for $327 including 9% GST. How much GST was included in the price?",
      hint: "Divide $327 by 1.09 to get $300. The GST is $327 minus $300, which is $27.",
      options: ["$27.00", "$29.43", "$30.00", "$25.00"],
      answer: "$27.00",
      explanation: "Before GST = $327 ÷ 1.09 = $300. GST = $327 − $300 = $27.00.",
      diagramData: { type: 'chain', nodes: [{ label: '$300', caption: 'before GST' }, { label: '$327', caption: 'with GST' }], edges: ['+ $27 GST'] }
    },
    {
      id: 59,
      rule: RULES.reverse,
      prompt: "A microwave is priced at $109 including 9% GST. What was the price before GST?",
      hint: "Divide $109 by 1.09 to find the price before GST.",
      options: ["$100.00", "$99.19", "$105.00", "$95.00"],
      answer: "$100.00",
      explanation: "$109 ÷ 1.09 = $100.00.",
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'before GST' }, { label: '$109.00', caption: 'with GST' }], edges: ['×1.09'] }
    },
    {
      id: 60,
      rule: RULES.reverse,
      prompt: "A gaming console is sold for $654 including 9% GST. What was the price before GST?",
      hint: "Divide $654 by 1.09 to find the price before GST.",
      options: ["$600.00", "$595.14", "$645.00", "$580.00"],
      answer: "$600.00",
      explanation: "$654 ÷ 1.09 = $600.00.",
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'before GST' }, { label: '$654.00', caption: 'with GST' }], edges: ['×1.09'] }
    }
  ],

  // World 6: Sale & Tax Square (Q61–70, Diff 3)
  [
    {
      id: 61,
      rule: RULES.disc,
      prompt: "A $100 jacket has 20% off. 9% GST is added to the sale price. What is the final price?",
      hint: "20% off leaves $80. Then multiply $80 by 1.09.",
      options: ["$87.20", "$89.00", "$88.00", "$85.00"],
      answer: "$87.20",
      explanation: "$100 × 0.80 = $80. $80 × 1.09 = $87.20.",
      diagramData: { type: 'chain', nodes: [{ label: '$100', caption: 'marked' }, { label: '$80', caption: '−20%' }, { label: '?', caption: '+9% GST' }], edges: ['×0.80', '×1.09'] }
    },
    {
      id: 62,
      rule: RULES.disc,
      prompt: "A $50 bag has 10% off. 9% GST is added to the sale price. What is the final price?",
      hint: "10% off leaves $45. Then multiply $45 by 1.09.",
      options: ["$49.05", "$49.50", "$50.00", "$48.50"],
      answer: "$49.05",
      explanation: "$50 × 0.90 = $45. $45 × 1.09 = $49.05.",
      diagramData: { type: 'chain', nodes: [{ label: '$50', caption: 'marked' }, { label: '$45', caption: '−10%' }, { label: '?', caption: '+9% GST' }], edges: ['×0.90', '×1.09'] }
    },
    {
      id: 63,
      rule: RULES.disc,
      prompt: "An $80 speaker has 25% off. 9% GST is added to the sale price. What is the final price?",
      hint: "25% off leaves $60. Then multiply $60 by 1.09.",
      options: ["$65.40", "$66.00", "$67.20", "$64.00"],
      answer: "$65.40",
      explanation: "$80 × 0.75 = $60. $60 × 1.09 = $65.40.",
      diagramData: { type: 'chain', nodes: [{ label: '$80', caption: 'marked' }, { label: '$60', caption: '−25%' }, { label: '?', caption: '+9% GST' }], edges: ['×0.75', '×1.09'] }
    },
    {
      id: 64,
      rule: RULES.disc,
      prompt: "A $200 bicycle has 30% off. 9% GST is added to the sale price. What is the final price?",
      hint: "30% off leaves $140. Then multiply $140 by 1.09.",
      options: ["$152.60", "$154.00", "$150.00", "$149.00"],
      answer: "$152.60",
      explanation: "$200 × 0.70 = $140. $140 × 1.09 = $152.60.",
      diagramData: { type: 'chain', nodes: [{ label: '$200', caption: 'marked' }, { label: '$140', caption: '−30%' }, { label: '?', caption: '+9% GST' }], edges: ['×0.70', '×1.09'] }
    },
    {
      id: 65,
      rule: RULES.disc,
      prompt: "A $40 game has 50% off. 9% GST is added to the sale price. What is the final price?",
      hint: "50% off leaves $20. Then multiply $20 by 1.09.",
      options: ["$21.80", "$22.00", "$21.50", "$20.90"],
      answer: "$21.80",
      explanation: "$40 × 0.50 = $20. $20 × 1.09 = $21.80.",
      diagramData: { type: 'chain', nodes: [{ label: '$40', caption: 'marked' }, { label: '$20', caption: '−50%' }, { label: '?', caption: '+9% GST' }], edges: ['×0.50', '×1.09'] }
    },
    {
      id: 66,
      rule: RULES.disc,
      prompt: "A $120 coat has 25% off. 9% GST is added to the sale price. What is the final price?",
      hint: "25% off leaves $90. Then multiply $90 by 1.09.",
      options: ["$98.10", "$99.00", "$97.50", "$96.00"],
      answer: "$98.10",
      explanation: "$120 × 0.75 = $90. $90 × 1.09 = $98.10.",
      diagramData: { type: 'chain', nodes: [{ label: '$120', caption: 'marked' }, { label: '$90', caption: '−25%' }, { label: '?', caption: '+9% GST' }], edges: ['×0.75', '×1.09'] }
    },
    {
      id: 67,
      rule: RULES.disc,
      prompt: "A $60 shirt has 20% off. 9% GST is added to the sale price. How much is the GST on the sale price?",
      hint: "20% off leaves $48. Calculate 9% of $48.",
      options: ["$4.32", "$5.40", "$4.80", "$3.60"],
      answer: "$4.32",
      explanation: "Sale price = $48. GST = 0.09 × 48 = $4.32.",
      diagramData: { type: 'chain', nodes: [{ label: '$60', caption: 'marked' }, { label: '$48', caption: 'sale' }, { label: '$4.32', caption: 'GST' }], edges: ['×0.80', '×0.09'] }
    },
    {
      id: 68,
      rule: RULES.disc,
      prompt: "A $150 tennis racket has 20% off. 9% GST is added to the sale price. What is the final price?",
      hint: "20% off leaves $120. Then multiply $120 by 1.09.",
      options: ["$130.80", "$132.00", "$129.50", "$128.00"],
      answer: "$130.80",
      explanation: "$150 × 0.80 = $120. $120 × 1.09 = $130.80.",
      diagramData: { type: 'chain', nodes: [{ label: '$150', caption: 'marked' }, { label: '$120', caption: '−20%' }, { label: '?', caption: '+9% GST' }], edges: ['×0.80', '×1.09'] }
    },
    {
      id: 69,
      rule: RULES.disc,
      prompt: "A $70 pair of shoes has 10% off. 9% GST is added to the sale price. What is the sale price before GST?",
      hint: "10% off $70 leaves $63.",
      options: ["$63.00", "$60.00", "$65.00", "$62.30"],
      answer: "$63.00",
      explanation: "$70 × 0.90 = $63.00.",
      diagramData: { type: 'chain', nodes: [{ label: '$70', caption: 'marked' }, { label: '$63.00', caption: 'sale price' }], edges: ['×0.90'] }
    },
    {
      id: 70,
      rule: RULES.disc,
      prompt: "A $300 tablet has 10% off. 9% GST is added to the sale price. What is the final price?",
      hint: "10% off leaves $270. Then multiply $270 by 1.09.",
      options: ["$294.30", "$297.00", "$290.00", "$285.00"],
      answer: "$294.30",
      explanation: "$300 × 0.90 = $270. $270 × 1.09 = $294.30.",
      diagramData: { type: 'chain', nodes: [{ label: '$300', caption: 'marked' }, { label: '$270', caption: '−10%' }, { label: '?', caption: '+9% GST' }], edges: ['×0.90', '×1.09'] }
    }
  ],

  // World 7: Rate Change Reef (Q71–80, Diff 3)
  [
    {
      id: 71,
      rule: RULES.rate,
      prompt: "GST increased from 8% to 9%. How much more does a $100 item cost now?",
      hint: "The rate increased by 1%. 1% of $100 is $1.",
      options: ["$1.00", "$9.00", "$8.00", "$2.00"],
      answer: "$1.00",
      explanation: "(9% − 8%) × $100 = 1% × 100 = $1.00.",
      diagramData: { type: 'chain', nodes: [{ label: '$100' }, { label: '+$1.00 extra' }], edges: ['1.08 → 1.09'] }
    },
    {
      id: 72,
      rule: RULES.rate,
      prompt: "GST increased from 8% to 9%. How much more does a $200 item cost now?",
      hint: "The rate increased by 1%. 1% of $200 is $2.",
      options: ["$2.00", "$1.00", "$18.00", "$4.00"],
      answer: "$2.00",
      explanation: "1% of $200 = $2.00.",
      diagramData: { type: 'chain', nodes: [{ label: '$200' }, { label: '+$2.00 extra' }], edges: ['1.08 → 1.09'] }
    },
    {
      id: 73,
      rule: RULES.rate,
      prompt: "GST increased from 8% to 9%. How much more does a $300 item cost now?",
      hint: "The rate increased by 1%. 1% of $300 is $3.",
      options: ["$3.00", "$2.00", "$27.00", "$5.00"],
      answer: "$3.00",
      explanation: "1% of $300 = $3.00.",
      diagramData: { type: 'chain', nodes: [{ label: '$300' }, { label: '+$3.00 extra' }], edges: ['1.08 → 1.09'] }
    },
    {
      id: 74,
      rule: RULES.rate,
      prompt: "GST increased from 7% to 9%. How much more does a $100 item cost now?",
      hint: "The rate increased by 2%. 2% of $100 is $2.",
      options: ["$2.00", "$1.00", "$7.00", "$3.00"],
      answer: "$2.00",
      explanation: "2% of $100 = $2.00.",
      diagramData: { type: 'chain', nodes: [{ label: '$100' }, { label: '+$2.00 extra' }], edges: ['1.07 → 1.09'] }
    },
    {
      id: 75,
      rule: RULES.rate,
      prompt: "GST increased from 7% to 9%. How much more does a $50 item cost now?",
      hint: "The rate increased by 2%. 2% of $50 is $1.",
      options: ["$1.00", "$2.00", "$0.50", "$1.50"],
      answer: "$1.00",
      explanation: "2% of $50 = $1.00.",
      diagramData: { type: 'chain', nodes: [{ label: '$50' }, { label: '+$1.00 extra' }], edges: ['1.07 → 1.09'] }
    },
    {
      id: 76,
      rule: RULES.rate,
      prompt: "A shirt costs $50 before tax and $54.50 after tax. What is the tax rate?",
      hint: "The tax is $4.50. Divide $4.50 by $50 and multiply by 100 to get 9%.",
      options: ["9%", "8%", "7%", "10%"],
      answer: "9%",
      explanation: "$4.50 ÷ $50 × 100 = 9%.",
      diagramData: { type: 'tag', label: 'AFTER TAX', value: '$54.50', col: '#facc15' }
    },
    {
      id: 77,
      rule: RULES.rate,
      prompt: "A book costs $20 before tax and $21.40 after tax. What is the tax rate?",
      hint: "The tax is $1.40. Divide $1.40 by $20 and multiply by 100 to get 7%.",
      options: ["7%", "8%", "9%", "6%"],
      answer: "7%",
      explanation: "$1.40 ÷ $20 × 100 = 7%.",
      diagramData: { type: 'tag', label: 'AFTER TAX', value: '$21.40', col: '#facc15' }
    },
    {
      id: 78,
      rule: RULES.rate,
      prompt: "A game costs $60 before tax and $64.80 after tax. What is the tax rate?",
      hint: "The tax is $4.80. Divide $4.80 by $60 and multiply by 100 to get 8%.",
      options: ["8%", "7%", "9%", "10%"],
      answer: "8%",
      explanation: "$4.80 ÷ $60 × 100 = 8%.",
      diagramData: { type: 'tag', label: 'AFTER TAX', value: '$64.80', col: '#facc15' }
    },
    {
      id: 79,
      rule: RULES.rate,
      prompt: "A watch costs $100 before tax and $110 after tax. What is the tax rate?",
      hint: "The tax is $10. Divide $10 by $100 and multiply by 100 to get 10%.",
      options: ["10%", "9%", "8%", "11%"],
      answer: "10%",
      explanation: "$10 ÷ $100 × 100 = 10%.",
      diagramData: { type: 'tag', label: 'AFTER TAX', value: '$110.00', col: '#facc15' }
    },
    {
      id: 80,
      rule: RULES.rate,
      prompt: "A lamp costs $40 before tax and $43.60 after tax. What is the tax rate?",
      hint: "The tax is $3.60. Divide $3.60 by $40 and multiply by 100 to get 9%.",
      options: ["9%", "8%", "7%", "10%"],
      answer: "9%",
      explanation: "$3.60 ÷ $40 × 100 = 9%.",
      diagramData: { type: 'tag', label: 'AFTER TAX', value: '$43.60', col: '#facc15' }
    }
  ],

  // World 8: Bill Builder Bay (Q81–90, Diff 4)
  [
    {
      id: 81,
      rule: RULES.sc,
      prompt: "A lunch costs $50. A 20% discount voucher is applied first, then a 10% service charge and 9% GST are added. What is the final bill?",
      hint: "20% off $50 is $40. Then multiply $40 by 1.1 and 1.09.",
      options: ["$47.96", "$48.50", "$47.00", "$45.00"],
      answer: "$47.96",
      explanation: "$50 × 0.80 = $40. $40 × 1.1 × 1.09 = $47.96.",
      diagramData: { type: 'chain', nodes: [{ label: '$50' }, { label: '$40', caption: '−20%' }, { label: '$44', caption: '+10%' }, { label: '?', caption: '+9%' }], edges: ['×0.80', '×1.1', '×1.09'] }
    },
    {
      id: 82,
      rule: RULES.sc,
      prompt: "A dinner costs $100. A 10% discount is applied first, then a 10% service charge and 9% GST are added. What is the final bill?",
      hint: "10% off $100 is $90. Then multiply $90 by 1.1 and 1.09.",
      options: ["$107.91", "$109.00", "$108.00", "$105.00"],
      answer: "$107.91",
      explanation: "$100 × 0.90 = $90. $90 × 1.1 × 1.09 = $107.91.",
      diagramData: { type: 'chain', nodes: [{ label: '$100' }, { label: '$90', caption: '−10%' }, { label: '$99', caption: '+10%' }, { label: '?', caption: '+9%' }], edges: ['×0.90', '×1.1', '×1.09'] }
    },
    {
      id: 83,
      rule: RULES.sc,
      prompt: "A brunch costs $60. A 25% discount voucher is applied first, then a 10% service charge and 9% GST are added. What is the final bill?",
      hint: "25% off $60 is $45. Then multiply $45 by 1.1 and 1.09.",
      options: ["$53.96", "$54.50", "$53.00", "$52.50"],
      answer: "$53.96",
      explanation: "$60 × 0.75 = $45. $45 × 1.1 × 1.09 = $53.955 ≈ $53.96.",
      diagramData: { type: 'chain', nodes: [{ label: '$60' }, { label: '$45', caption: '−25%' }, { label: '$49.50', caption: '+10%' }, { label: '?', caption: '+9%' }], edges: ['×0.75', '×1.1', '×1.09'] }
    },
    {
      id: 84,
      rule: RULES.sc,
      prompt: "A party meal costs $80. A 50% discount voucher is applied first, then a 10% service charge and 9% GST are added. What is the final bill?",
      hint: "50% off $80 is $40. Then multiply $40 by 1.1 and 1.09.",
      options: ["$47.96", "$48.00", "$46.50", "$45.00"],
      answer: "$47.96",
      explanation: "$80 × 0.50 = $40. $40 × 1.1 × 1.09 = $47.96.",
      diagramData: { type: 'chain', nodes: [{ label: '$80' }, { label: '$40', caption: '−50%' }, { label: '$44', caption: '+10%' }, { label: '?', caption: '+9%' }], edges: ['×0.50', '×1.1', '×1.09'] }
    },
    {
      id: 85,
      rule: RULES.sc,
      prompt: "A restaurant adds a 10% service charge and then 9% GST. By what percentage is the final bill more than the menu prices?",
      hint: "1.1 times 1.09 equals 1.199, which is 19.9% more.",
      options: ["19.9%", "19.0%", "9.9%", "20.0%"],
      answer: "19.9%",
      explanation: "1.10 × 1.09 = 1.199, which is 19.9% extra.",
      diagramData: { type: 'chain', nodes: [{ label: '100%' }, { label: '110%' }, { label: '119.9%' }], edges: ['×1.1', '×1.09'] }
    },
    {
      id: 86,
      rule: RULES.total,
      prompt: "Jack buys two items priced at $30 and $70 before GST. What is the total bill with 9% GST?",
      hint: "The sum is $100. Multiply $100 by 1.09 to get $109.",
      options: ["$109.00", "$110.00", "$108.00", "$100.90"],
      answer: "$109.00",
      explanation: "($30 + $70) × 1.09 = $100 × 1.09 = $109.00.",
      diagramData: { type: 'bar', segments: [{ pct: 30, label: '$30', color: '#38bdf8' }, { pct: 70, label: '$70', color: '#f472b6' }, { pct: 9, label: '+9%', color: '#facc15' }] }
    },
    {
      id: 87,
      rule: RULES.total,
      prompt: "Maya buys three items priced at $20, $30, and $50 before GST. What is the total bill with 9% GST?",
      hint: "The sum is $100. Multiply $100 by 1.09 to get $109.",
      options: ["$109.00", "$110.00", "$108.50", "$107.00"],
      answer: "$109.00",
      explanation: "($20 + $30 + $50) × 1.09 = $100 × 1.09 = $109.00.",
      diagramData: { type: 'bar', segments: [{ pct: 20, label: '$20', color: '#38bdf8' }, { pct: 30, label: '$30', color: '#a78bfa' }, { pct: 50, label: '$50', color: '#f472b6' }] }
    },
    {
      id: 88,
      rule: RULES.sc,
      prompt: "A dinner costs $200. A 25% member discount is applied first, then a 10% service charge and 9% GST are added. What is the final bill?",
      hint: "25% off $200 is $150. Multiply $150 by 1.1 and 1.09.",
      options: ["$179.85", "$180.00", "$178.50", "$175.00"],
      answer: "$179.85",
      explanation: "$200 × 0.75 = $150. $150 × 1.1 × 1.09 = $179.85.",
      diagramData: { type: 'chain', nodes: [{ label: '$200' }, { label: '$150', caption: '−25%' }, { label: '$165', caption: '+10%' }, { label: '?', caption: '+9%' }], edges: ['×0.75', '×1.1', '×1.09'] }
    },
    {
      id: 89,
      rule: RULES.sc,
      prompt: "Food costs $120. A 10% service charge is added, then 9% GST. What is the total price?",
      hint: "Multiply $120 by 1.1 and then by 1.09.",
      options: ["$143.88", "$142.80", "$144.00", "$132.00"],
      answer: "$143.88",
      explanation: "$120 × 1.1 × 1.09 = $143.88.",
      diagramData: { type: 'chain', nodes: [{ label: '$120', caption: 'food' }, { label: '$132', caption: '+ service' }, { label: '?', caption: '+ GST' }], edges: ['×1.1', '×1.09'] }
    },
    {
      id: 90,
      rule: RULES.sc,
      prompt: "A buffet costs $80. A 10% service charge and 9% GST are added. What is the total price?",
      hint: "Multiply $80 by 1.1 and then by 1.09.",
      options: ["$95.92", "$95.20", "$96.00", "$88.00"],
      answer: "$95.92",
      explanation: "$80 × 1.1 × 1.09 = $95.92.",
      diagramData: { type: 'chain', nodes: [{ label: '$80', caption: 'food' }, { label: '$88', caption: '+ service' }, { label: '?', caption: '+ GST' }], edges: ['×1.1', '×1.09'] }
    }
  ],

  // World 9: GST Champion (Q91–100, Diff 4)
  [
    {
      id: 91,
      rule: RULES.mixed,
      prompt: "A bill with 10% service charge and 9% GST came to $119.90. What was the food price before service charge and GST?",
      hint: "Divide $119.90 by 1.09, then divide by 1.1 to find the original price of $100.",
      options: ["$100.00", "$109.00", "$99.90", "$95.00"],
      answer: "$100.00",
      explanation: "$119.90 ÷ 1.09 = $110. $110 ÷ 1.1 = $100.00.",
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'food' }, { label: '$110', caption: '+ service' }, { label: '$119.90', caption: '+ GST' }], edges: ['÷1.1', '÷1.09'] }
    },
    {
      id: 92,
      rule: RULES.mixed,
      prompt: "A jacket marked at $120 has 50% off. 9% GST is added to the sale price. What does Leo pay?",
      hint: "50% off is $60. Multiply $60 by 1.09 to get $65.40.",
      options: ["$65.40", "$66.00", "$69.00", "$64.50"],
      answer: "$65.40",
      explanation: "$120 × 0.50 = $60. $60 × 1.09 = $65.40.",
      diagramData: { type: 'chain', nodes: [{ label: '$120' }, { label: '$60', caption: '−50%' }, { label: '$65.40', caption: '+9%' }], edges: ['×0.50', '×1.09'] }
    },
    {
      id: 93,
      rule: RULES.mixed,
      prompt: "A receipt total is $327 including 9% GST. What was the GST amount?",
      hint: "Divide $327 by 1.09 to get $300. The GST is $327 minus $300, which is $27.",
      options: ["$27.00", "$29.43", "$30.00", "$25.00"],
      answer: "$27.00",
      explanation: "Before GST = $327 ÷ 1.09 = $300. GST = $327 − $300 = $27.00.",
      diagramData: { type: 'chain', nodes: [{ label: '$300', caption: 'before' }, { label: '$327', caption: 'total' }], edges: ['+ $27 GST'] }
    },
    {
      id: 94,
      rule: RULES.mixed,
      prompt: "Food costs $40 and drinks cost $10 before tax. With a 10% service charge and 9% GST, what is the final bill?",
      hint: "Total menu price is $50. Multiply $50 by 1.1 and 1.09.",
      options: ["$59.95", "$59.50", "$60.00", "$55.00"],
      answer: "$59.95",
      explanation: "($40 + $10) × 1.1 × 1.09 = $50 × 1.1 × 1.09 = $59.95.",
      diagramData: { type: 'chain', nodes: [{ label: '$50', caption: 'subtotal' }, { label: '$55', caption: '+ service' }, { label: '?', caption: '+ GST' }], edges: ['×1.1', '×1.09'] }
    },
    {
      id: 95,
      rule: RULES.mixed,
      prompt: "A bicycle priced at $400 has 25% off. 9% GST is added to the sale price. What is the total price?",
      hint: "25% off $400 is $300. Multiply $300 by 1.09 to get $327.",
      options: ["$327.00", "$330.00", "$325.00", "$320.00"],
      answer: "$327.00",
      explanation: "$400 × 0.75 = $300. $300 × 1.09 = $327.00.",
      diagramData: { type: 'chain', nodes: [{ label: '$400' }, { label: '$300', caption: '−25%' }, { label: '?', caption: '+9%' }], edges: ['×0.75', '×1.09'] }
    },
    {
      id: 96,
      rule: RULES.mixed,
      prompt: "Why does a 10% service charge followed by 9% GST equal 19.9% extra rather than 19%?",
      hint: "GST is charged on both the food price and the service charge.",
      options: [
        "GST is also charged on the service charge",
        "Restaurants round up the cents",
        "The government charges an extra 0.9%",
        "Service charge is added twice"
      ],
      answer: "GST is also charged on the service charge",
      explanation: "1.10 × 1.09 = 1.199. GST is charged on the 10% service charge as well!",
      diagramData: { type: 'chain', nodes: [{ label: '100%' }, { label: '110%' }, { label: '119.9%' }], edges: ['×1.1', '×1.09'] }
    },
    {
      id: 97,
      rule: RULES.mixed,
      prompt: "A tablet is sold for $545 including 9% GST. How much money went to the government as GST?",
      hint: "Divide $545 by 1.09 to find $500 before GST. The GST is $45.",
      options: ["$45.00", "$49.05", "$50.00", "$40.00"],
      answer: "$45.00",
      explanation: "Before GST = $545 ÷ 1.09 = $500. GST = $545 − $500 = $45.00.",
      diagramData: { type: 'chain', nodes: [{ label: '$500', caption: 'before' }, { label: '$545', caption: 'total' }], edges: ['+ $45 GST'] }
    },
    {
      id: 98,
      rule: RULES.mixed,
      prompt: "An item costs $250 before tax and $272.50 after tax. What was the tax rate?",
      hint: "Tax is $22.50. Divide $22.50 by $250 and multiply by 100 to get 9%.",
      options: ["9%", "8%", "10%", "7%"],
      answer: "9%",
      explanation: "Tax = $272.50 − $250 = $22.50. $22.50 ÷ $250 × 100 = 9%.",
      diagramData: { type: 'tag', label: 'AFTER TAX', value: '$272.50', col: '#facc15' }
    },
    {
      id: 99,
      rule: RULES.mixed,
      prompt: "Two friends share a $60 dinner. With 10% service charge and 9% GST, how much does each person pay if split equally?",
      hint: "Total bill is $60 times 1.1 times 1.09, which is $71.94. Divide by 2 to get $35.97.",
      options: ["$35.97", "$36.00", "$35.70", "$33.00"],
      answer: "$35.97",
      explanation: "$60 × 1.1 × 1.09 = $71.94. $71.94 ÷ 2 = $35.97 each.",
      diagramData: { type: 'chain', nodes: [{ label: '$60' }, { label: '$71.94', caption: 'total' }, { label: '$35.97', caption: 'each (÷2)' }], edges: ['×1.199', '÷2'] }
    },
    {
      id: 100,
      rule: RULES.mixed,
      prompt: "A store gives 10% off, then adds 9% GST. Which single multiplier calculates the final price from the original price?",
      hint: "Multiply 0.90 by 1.09 to find 0.981.",
      options: ["0.981", "0.990", "1.010", "0.909"],
      answer: "0.981",
      explanation: "0.90 × 1.09 = 0.981. So the customer pays 98.1% of the original price.",
      diagramData: { type: 'chain', nodes: [{ label: '1.00' }, { label: '0.90', caption: '−10%' }, { label: '0.981', caption: '+9%' }], edges: ['×0.90', '×1.09'] }
    }
  ]
];

/**
 * Shuffle helper for options
 */
function shuffleArray(arr, seed) {
  const a = [...arr];
  let m = a.length, t, i;
  let s = Math.abs(seed);
  while (m) {
    s = (s * 9301 + 49297) % 233280;
    i = Math.floor((s / 233280) * m--);
    t = a[m];
    a[m] = a[i];
    a[i] = t;
  }
  return a;
}

export function getPracticeQuestion(worldIndex, questionIndex) {
  const worldQuestions = RAW_PRACTICE_WORLDS[worldIndex] || RAW_PRACTICE_WORLDS[0];
  const q = worldQuestions[questionIndex] || worldQuestions[0];
  const shuffled = shuffleArray(q.options, (worldIndex + 1) * 31 + (questionIndex + 1) * 17);
  return {
    ...q,
    options: shuffled,
    correctIndex: shuffled.indexOf(q.answer),
    correctValue: q.answer
  };
}

/**
 * All practice question prompts and hints for offline pre-generation.
 */
export const ALL_PRACTICE_PHRASES = RAW_PRACTICE_WORLDS.flatMap(world =>
  world.flatMap(q => [
    { text: q.prompt, style: 'question' },
    { text: q.hint, style: 'thinking' }
  ])
);

