/* =========================================================================
   MATH DATA & QUESTION GENERATOR
   Standard rate: 9% GST, 10% service charge. Answers exact to the cent.
   ========================================================================= */
import { getPracticeQuestion } from './data/practiceQuestions.js';

export const WESTERN_NAMES = [
  "Leo", "Emma", "Alex", "Oliver", "Sophia", "Jack", "Maya", "Lucas",
  "Ethan", "Chloe", "Noah", "Liam", "Harper", "Ava", "Mason", "Ella",
  "James", "Mia", "Logan", "Charlotte"
];

export const PRACTICE_WORLDS = [
  { id: 0, name: "Tax Town", icon: "🏙️", range: "Q1–10", difficulty: 1 },
  { id: 1, name: "Receipt Road", icon: "🧾", range: "Q11–20", difficulty: 1 },
  { id: 2, name: "Multiplier Mall", icon: "✖️", range: "Q21–30", difficulty: 2 },
  { id: 3, name: "Hawker Harbour", icon: "🍜", range: "Q31–40", difficulty: 2 },
  { id: 4, name: "Service Street", icon: "🍽️", range: "Q41–50", difficulty: 2 },
  { id: 5, name: "Reverse Ridge", icon: "🔙", range: "Q51–60", difficulty: 3 },
  { id: 6, name: "Sale & Tax Square", icon: "🏷️", range: "Q61–70", difficulty: 3 },
  { id: 7, name: "Rate Change Reef", icon: "📈", range: "Q71–80", difficulty: 3 },
  { id: 8, name: "Bill Builder Bay", icon: "🏗️", range: "Q81–90", difficulty: 4 },
  { id: 9, name: "GST Champion", icon: "🏆", range: "Q91–100", difficulty: 4 }
];

export function makeQuestion(worldIndex = 0, questionIndex = 0) {
  const world = PRACTICE_WORLDS[worldIndex] || PRACTICE_WORLDS[0];
  const q = getPracticeQuestion(worldIndex, questionIndex);
  return {
    ...q,
    world
  };
}
