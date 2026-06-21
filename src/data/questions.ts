export type Question = {
  id: string;
  category: "Math" | "English";
  points: 200 | 400 | 600 | 800 | 1000;
  difficulty: "PSAT" | "SAT";
  question: string;
  choices: string[];
  answer: string;
  explanation: string;
};

export const QUESTIONS: Question[] = [

  // ═══════════════════════════════════════════════
  // PSAT · MATH
  // ═══════════════════════════════════════════════

  // PSAT Math 200
  {
    id: "pm200-1", category: "Math", points: 200, difficulty: "PSAT",
    question: "A recipe needs 2.5 cups of flour for every 12 cookies. How many cups of flour are needed for 48 cookies?",
    choices: ["7.5", "8", "10", "12"],
    answer: "10",
    explanation: "48 cookies is 4 times 12, so multiply 2.5 by 4: 2.5 x 4 = 10 cups.",
  },
  {
    id: "pm200-2", category: "Math", points: 200, difficulty: "PSAT",
    question: "If 6n + 4 = 34, what is the value of 2n?",
    choices: ["5", "10", "12", "15"],
    answer: "10",
    explanation: "6n = 30, so n = 5, and 2n = 10.",
  },
  {
    id: "pm200-3", category: "Math", points: 200, difficulty: "PSAT",
    question: "A number line shows points at -7 and 5. What is the distance between them?",
    choices: ["2", "7", "12", "35"],
    answer: "12",
    explanation: "Distance = 5 - (-7) = 12.",
  },
  {
    id: "pm200-4", category: "Math", points: 200, difficulty: "PSAT",
    question: "A jacket originally priced at $80 is discounted 25%. What is the sale price?",
    choices: ["$20", "$55", "$60", "$65"],
    answer: "$60",
    explanation: "25% of $80 = $20. Sale price = $80 - $20 = $60.",
  },

  // PSAT Math 400
  {
    id: "pm400-1", category: "Math", points: 400, difficulty: "PSAT",
    question: "A line passes through the origin and (4, 6). Which equation represents this line?",
    choices: ["y = (3/2)x", "y = (2/3)x", "y = x + 2", "y = 4x - 6"],
    answer: "y = (3/2)x",
    explanation: "Slope = 6/4 = 3/2. Since it passes through the origin, y = (3/2)x.",
  },
  {
    id: "pm400-2", category: "Math", points: 400, difficulty: "PSAT",
    question: "A pool holds 3,600 gallons. Water drains at 45 gallons per minute. How many gallons remain after 40 minutes?",
    choices: ["900", "1,200", "1,800", "2,100"],
    answer: "1,800",
    explanation: "45 x 40 = 1,800 gallons drain. 3,600 - 1,800 = 1,800 gallons remain.",
  },
  {
    id: "pm400-3", category: "Math", points: 400, difficulty: "PSAT",
    question: "The sum of three consecutive even integers is 78. What is the largest of the three?",
    choices: ["24", "26", "28", "30"],
    answer: "28",
    explanation: "Let the integers be n, n+2, n+4. Then 3n+6 = 78, so n = 24. The largest is 24+4 = 28.",
  },
  {
    id: "pm400-4", category: "Math", points: 400, difficulty: "PSAT",
    question: "The line y = -2x + 7 crosses the x-axis at what value of x?",
    choices: ["3", "3.5", "7", "14"],
    answer: "3.5",
    explanation: "Set y = 0: -2x + 7 = 0, so x = 3.5.",
  },

  // PSAT Math 600
  {
    id: "pm600-1", category: "Math", points: 600, difficulty: "PSAT",
    question: "A function is defined by g(x) = 2x^2 - 3x + 1. What is g(3)?",
    choices: ["8", "10", "12", "14"],
    answer: "10",
    explanation: "g(3) = 2(9) - 3(3) + 1 = 18 - 9 + 1 = 10.",
  },
  {
    id: "pm600-2", category: "Math", points: 600, difficulty: "PSAT",
    question: "Solve the system: 2x + 3y = 12 and x - y = 1. What is x + y?",
    choices: ["3", "4", "5", "6"],
    answer: "5",
    explanation: "From equation 2: x = y + 1. Substituting: 2(y+1) + 3y = 12 → 5y = 10 → y = 2, x = 3. x + y = 5.",
  },
  {
    id: "pm600-3", category: "Math", points: 600, difficulty: "PSAT",
    question: "A ball is dropped from 100 feet. Each bounce reaches 60% of the previous height. How high does it bounce after the second bounce?",
    choices: ["36 ft", "40 ft", "48 ft", "60 ft"],
    answer: "36 ft",
    explanation: "After 1st bounce: 100 x 0.6 = 60 ft. After 2nd bounce: 60 x 0.6 = 36 ft.",
  },
  {
    id: "pm600-4", category: "Math", points: 600, difficulty: "PSAT",
    question: "The product of two consecutive positive integers is 182. What is their sum?",
    choices: ["25", "27", "29", "31"],
    answer: "27",
    explanation: "13 x 14 = 182. Their sum is 13 + 14 = 27.",
  },

  // PSAT Math 800
  {
    id: "pm800-1", category: "Math", points: 800, difficulty: "PSAT",
    question: "A quadratic has roots x = -3 and x = 5, and passes through (0, -15). What is the leading coefficient?",
    choices: ["1", "-1", "2", "3"],
    answer: "1",
    explanation: "f(x) = a(x+3)(x-5). At x = 0: a(3)(-5) = -15 → -15a = -15 → a = 1.",
  },
  {
    id: "pm800-2", category: "Math", points: 800, difficulty: "PSAT",
    question: "In right triangle PQR, angle Q = 90°. If tan(P) = 4/3, what is sin(P)?",
    choices: ["3/5", "4/5", "3/4", "5/4"],
    answer: "4/5",
    explanation: "tan(P) = 4/3 means opposite = 4, adjacent = 3, hypotenuse = 5. sin(P) = opposite/hypotenuse = 4/5.",
  },
  {
    id: "pm800-3", category: "Math", points: 800, difficulty: "PSAT",
    question: "How many integers from 1 to 200 are divisible by both 4 and 6?",
    choices: ["8", "12", "16", "25"],
    answer: "16",
    explanation: "LCM(4, 6) = 12. Count: floor(200/12) = 16.",
  },
  {
    id: "pm800-4", category: "Math", points: 800, difficulty: "PSAT",
    question: "A bag has 5 red, 4 blue, and 3 green marbles. Two are drawn without replacement. What is the probability both are red?",
    choices: ["5/33", "5/36", "1/6", "25/144"],
    answer: "5/33",
    explanation: "P(both red) = (5/12) x (4/11) = 20/132 = 5/33.",
  },

  // PSAT Math 1000
  {
    id: "pm1000-1", category: "Math", points: 1000, difficulty: "PSAT",
    question: "If log base 3 of x = 4, what is log base 3 of (9x)?",
    choices: ["5", "6", "8", "36"],
    answer: "6",
    explanation: "log3(9x) = log3(9) + log3(x) = 2 + 4 = 6.",
  },
  {
    id: "pm1000-2", category: "Math", points: 1000, difficulty: "PSAT",
    question: "An arithmetic sequence has first term 7 and common difference 5. What is the 20th term?",
    choices: ["97", "102", "107", "112"],
    answer: "102",
    explanation: "a_20 = 7 + (20-1)(5) = 7 + 95 = 102.",
  },
  {
    id: "pm1000-3", category: "Math", points: 1000, difficulty: "PSAT",
    question: "Which value of k makes kx^2 - 8x + 4 = 0 have exactly one real solution?",
    choices: ["2", "4", "6", "8"],
    answer: "4",
    explanation: "For one solution, discriminant = 0: 64 - 16k = 0 → k = 4.",
  },
  {
    id: "pm1000-4", category: "Math", points: 1000, difficulty: "PSAT",
    question: "A function satisfies f(2x) = 3f(x) for all x. If f(1) = 5, what is f(8)?",
    choices: ["45", "90", "120", "135"],
    answer: "135",
    explanation: "f(2) = 3f(1) = 15. f(4) = 3f(2) = 45. f(8) = 3f(4) = 135.",
  },

  // ═══════════════════════════════════════════════
  // SAT · MATH
  // ═══════════════════════════════════════════════

  // SAT Math 200
  {
    id: "sm200-1", category: "Math", points: 200, difficulty: "SAT",
    question: "A line passes through (-2, 3) and (4, 15). What is the y-intercept?",
    choices: ["5", "7", "9", "11"],
    answer: "7",
    explanation: "Slope = (15-3)/(4-(-2)) = 12/6 = 2. Using point (4, 15): 15 = 2(4) + b → b = 7.",
  },
  {
    id: "sm200-2", category: "Math", points: 200, difficulty: "SAT",
    question: "If 3(x - 4) = 2(x + 1), what is the value of x?",
    choices: ["10", "12", "14", "16"],
    answer: "14",
    explanation: "3x - 12 = 2x + 2 → x = 14.",
  },
  {
    id: "sm200-3", category: "Math", points: 200, difficulty: "SAT",
    question: "A square has a perimeter of 52 units. What is its area?",
    choices: ["144", "156", "169", "196"],
    answer: "169",
    explanation: "Side = 52/4 = 13. Area = 13^2 = 169.",
  },

  // SAT Math 400
  {
    id: "sm400-1", category: "Math", points: 400, difficulty: "SAT",
    question: "The height of a projectile (in meters) is h(t) = -5t^2 + 30t. At what time does it reach maximum height?",
    choices: ["2 s", "3 s", "4 s", "5 s"],
    answer: "3 s",
    explanation: "Max at t = -b/(2a) = -30/(2 x -5) = 3 seconds.",
  },
  {
    id: "sm400-2", category: "Math", points: 400, difficulty: "SAT",
    question: "Solve for all values of x: |3x + 9| = 15",
    choices: ["x = 2 only", "x = -8 only", "x = 2 or x = -8", "x = 8 or x = -2"],
    answer: "x = 2 or x = -8",
    explanation: "3x + 9 = 15 → x = 2. Or 3x + 9 = -15 → x = -8.",
  },
  {
    id: "sm400-3", category: "Math", points: 400, difficulty: "SAT",
    question: "A circle with center (3, -2) passes through (7, 1). What is the area of the circle?",
    choices: ["5pi", "16pi", "25pi", "36pi"],
    answer: "25pi",
    explanation: "Radius = sqrt((7-3)^2 + (1-(-2))^2) = sqrt(16+9) = 5. Area = 25pi.",
  },

  // SAT Math 600
  {
    id: "sm600-1", category: "Math", points: 600, difficulty: "SAT",
    question: "For x > 0, simplify: (x^(1/2) * x^(2/3)) / x^(1/6)",
    choices: ["x", "x^2", "x^(1/3)", "x^(4/3)"],
    answer: "x",
    explanation: "Numerator exponent: 1/2 + 2/3 = 7/6. Subtract 1/6: 7/6 - 1/6 = 1. Result: x^1 = x.",
  },
  {
    id: "sm600-2", category: "Math", points: 600, difficulty: "SAT",
    question: "Line L has slope 3/4 and is perpendicular to line M. What is the slope of line M?",
    choices: ["-4/3", "-3/4", "3/4", "4/3"],
    answer: "-4/3",
    explanation: "Perpendicular slopes are negative reciprocals. Negative reciprocal of 3/4 is -4/3.",
  },
  {
    id: "sm600-3", category: "Math", points: 600, difficulty: "SAT",
    question: "The mean of 6 numbers is 14. When a 7th number is added, the mean becomes 13. What is the 7th number?",
    choices: ["6", "7", "8", "9"],
    answer: "7",
    explanation: "Sum of 6 = 84. New sum needed = 13 x 7 = 91. 7th number = 91 - 84 = 7.",
  },

  // SAT Math 800
  {
    id: "sm800-1", category: "Math", points: 800, difficulty: "SAT",
    question: "What is the sum of all values of x satisfying x^2 - 7x + 6 = 0?",
    choices: ["1", "6", "7", "13"],
    answer: "7",
    explanation: "By Vieta's formulas, sum of roots = 7/1 = 7. (Roots are x = 1 and x = 6.)",
  },
  {
    id: "sm800-2", category: "Math", points: 800, difficulty: "SAT",
    question: "A circle is defined by x^2 + y^2 - 10x + 6y + 18 = 0. What is its radius?",
    choices: ["3", "4", "5", "6"],
    answer: "4",
    explanation: "Complete the square: (x-5)^2 + (y+3)^2 = 25 + 9 - 18 = 16. Radius = sqrt(16) = 4.",
  },
  {
    id: "sm800-3", category: "Math", points: 800, difficulty: "SAT",
    question: "If i = sqrt(-1), what is (3 + 2i)(3 - 2i)?",
    choices: ["5", "6", "9", "13"],
    answer: "13",
    explanation: "(3+2i)(3-2i) = 9 - 4i^2 = 9 - 4(-1) = 13.",
  },

  // SAT Math 1000
  {
    id: "sm1000-1", category: "Math", points: 1000, difficulty: "SAT",
    question: "If z = 2 + 3i, what is |z|^2?",
    choices: ["5", "7", "13", "25"],
    answer: "13",
    explanation: "|z|^2 = 2^2 + 3^2 = 4 + 9 = 13.",
  },
  {
    id: "sm1000-2", category: "Math", points: 1000, difficulty: "SAT",
    question: "A geometric series has first term 8 and common ratio 1/2. What is the sum of the infinite series?",
    choices: ["12", "14", "16", "18"],
    answer: "16",
    explanation: "Sum = a/(1-r) = 8/(1 - 1/2) = 8/(1/2) = 16.",
  },
  {
    id: "sm1000-3", category: "Math", points: 1000, difficulty: "SAT",
    question: "How many distinct arrangements can be made using all the letters in LEVEL?",
    choices: ["20", "30", "60", "120"],
    answer: "30",
    explanation: "5 letters with L twice and E twice: 5! / (2! x 2!) = 120 / 4 = 30.",
  },

  // ═══════════════════════════════════════════════
  // PSAT · ENGLISH
  // ═══════════════════════════════════════════════

  // PSAT English 200
  {
    id: "pe200-1", category: "English", points: 200, difficulty: "PSAT",
    question: "Which word best completes the sentence? \"The firefighter showed great ______ when she entered the burning building to rescue a child.\"",
    choices: ["hesitation", "valor", "confusion", "indifference"],
    answer: "valor",
    explanation: "\"Valor\" means great courage in the face of danger, fitting the firefighter's brave act.",
  },
  {
    id: "pe200-2", category: "English", points: 200, difficulty: "PSAT",
    question: "Which sentence is correctly punctuated?",
    choices: [
      "Maya loves hiking however she hates bugs.",
      "Maya loves hiking; however, she hates bugs.",
      "Maya loves hiking, however she hates bugs.",
      "Maya loves hiking however, she hates bugs.",
    ],
    answer: "Maya loves hiking; however, she hates bugs.",
    explanation: "A semicolon separates two independent clauses; \"however\" as a conjunctive adverb needs a comma after it.",
  },
  {
    id: "pe200-3", category: "English", points: 200, difficulty: "PSAT",
    question: "What does \"diligent\" mean?",
    choices: ["Lazy and careless", "Careful and persistent in effort", "Quick and impulsive", "Arrogant and rude"],
    answer: "Careful and persistent in effort",
    explanation: "\"Diligent\" describes someone who works hard and steadily toward a goal.",
  },
  {
    id: "pe200-4", category: "English", points: 200, difficulty: "PSAT",
    question: "Choose the grammatically correct sentence.",
    choices: [
      "Between you and I, the test was difficult.",
      "Between you and me, the test was difficult.",
      "Between him and I, we finished first.",
      "The prize went to she and I.",
    ],
    answer: "Between you and me, the test was difficult.",
    explanation: "\"Between\" is a preposition and requires object pronouns. \"Me\" is correct after a preposition, not \"I.\"",
  },

  // PSAT English 400
  {
    id: "pe400-1", category: "English", points: 400, difficulty: "PSAT",
    question: "Select the most logical transition: \"Marcus trained for six months. ______, he finished the race in under four hours.\"",
    choices: ["However", "Consequently", "Similarly", "In contrast"],
    answer: "Consequently",
    explanation: "\"Consequently\" signals a result. His finishing time is a direct result of his training.",
  },
  {
    id: "pe400-2", category: "English", points: 400, difficulty: "PSAT",
    question: "Which sentence has a subject-verb agreement error?",
    choices: [
      "The bouquet of roses smells wonderful.",
      "Neither of the answers are correct.",
      "Each of the students has a textbook.",
      "The committee has reached a decision.",
    ],
    answer: "Neither of the answers are correct.",
    explanation: "\"Neither\" is singular and requires a singular verb: \"Neither of the answers is correct.\"",
  },
  {
    id: "pe400-3", category: "English", points: 400, difficulty: "PSAT",
    question: "What is the most concise revision of: \"Due to the reason that it was snowing outside, school was cancelled on that particular day\"?",
    choices: [
      "Because it was snowing, school was cancelled.",
      "Due to the fact of snow, school that day was cancelled.",
      "It was snowing, and for this reason, school was cancelled that day.",
      "School was cancelled, because it was snowing outside on that particular day.",
    ],
    answer: "Because it was snowing, school was cancelled.",
    explanation: "\"Because\" replaces the wordy phrase \"due to the reason that\"; unnecessary filler words are cut.",
  },
  {
    id: "pe400-4", category: "English", points: 400, difficulty: "PSAT",
    question: "Which sentence has a dangling modifier?",
    choices: [
      "Revised carefully, the essay earned top marks.",
      "Walking to school, she noticed a rainbow.",
      "Having eaten dinner, the dishes were washed.",
      "Exhausted after the long hike, Carlos sat down.",
    ],
    answer: "Having eaten dinner, the dishes were washed.",
    explanation: "The dishes cannot eat dinner. The modifier must logically apply to the sentence's subject.",
  },

  // PSAT English 600
  {
    id: "pe600-1", category: "English", points: 600, difficulty: "PSAT",
    question: "Passage: \"The architect's design transformed what had once been an abandoned lot into a vibrant community hub.\"\n\nThe word \"transformed\" most nearly suggests:",
    choices: [
      "Replacing one thing with something unrelated",
      "Dramatically changing something for the better",
      "Temporarily improving a space",
      "Gradually restoring something to its original state",
    ],
    answer: "Dramatically changing something for the better",
    explanation: "\"Transformed\" implies a significant, positive change -- from abandoned lot to vibrant hub.",
  },
  {
    id: "pe600-2", category: "English", points: 600, difficulty: "PSAT",
    question: "\"Her words were a soothing balm on the raw wound of his grief.\" This sentence is an example of:",
    choices: ["Simile", "Personification", "Alliteration", "Metaphor"],
    answer: "Metaphor",
    explanation: "Words are directly called a balm without using \"like\" or \"as,\" making this a direct comparison -- a metaphor.",
  },
  {
    id: "pe600-3", category: "English", points: 600, difficulty: "PSAT",
    question: "A paragraph claims that homework improves academic performance. Which evidence BEST supports this?",
    choices: [
      "Many students complete homework in the evenings.",
      "A national study found students who did daily homework scored 18% higher on standardized tests.",
      "Teachers have assigned homework for decades.",
      "Some students find homework stressful.",
    ],
    answer: "A national study found students who did daily homework scored 18% higher on standardized tests.",
    explanation: "Specific quantitative data directly linking homework to test performance is the strongest support.",
  },
  {
    id: "pe600-4", category: "English", points: 600, difficulty: "PSAT",
    question: "\"The data, along with the researcher's notes, ______ included in the final report.\" Choose the correct verb.",
    choices: ["were", "is", "are", "have been"],
    answer: "is",
    explanation: "\"The data\" is the subject; \"along with the researcher's notes\" is a parenthetical phrase and doesn't change agreement. \"Is\" is correct.",
  },

  // PSAT English 800
  {
    id: "pe800-1", category: "English", points: 800, difficulty: "PSAT",
    question: "Passage: \"Opponents claim the plan is too costly, yet every independent analysis shows long-term savings outweigh the initial investment four to one.\"\n\nThe author's primary strategy is to:",
    choices: [
      "Concede a point and immediately refute it with evidence",
      "Appeal to emotion to sway undecided readers",
      "Present both sides equally without taking a position",
      "Attack the character of opponents",
    ],
    answer: "Concede a point and immediately refute it with evidence",
    explanation: "\"Yet\" signals a concession followed by a counterargument backed by specific data.",
  },
  {
    id: "pe800-2", category: "English", points: 800, difficulty: "PSAT",
    question: "Which sentence most clearly presents a hypothesis rather than a conclusion?",
    choices: [
      "The experiment confirmed that the compound inhibits bacterial growth.",
      "We propose that increased sunlight exposure may reduce fatigue in office workers.",
      "Students who slept eight hours outperformed those who slept six.",
      "The study definitively shows a link between diet and memory.",
    ],
    answer: "We propose that increased sunlight exposure may reduce fatigue in office workers.",
    explanation: "\"Propose\" and \"may\" signal uncertainty and prediction -- hallmarks of a hypothesis, not a confirmed conclusion.",
  },
  {
    id: "pe800-3", category: "English", points: 800, difficulty: "PSAT",
    question: "Which best combines: \"The novel won three awards. Critics praised its originality. Its prose style was also admired.\"",
    choices: [
      "The novel won three awards, it was praised for originality and prose style.",
      "Winning three awards, the novel was praised for both its originality and its prose style.",
      "The novel won three awards, critics praised its originality, and also its prose style.",
      "The novel, praised for originality, its prose, winning three awards.",
    ],
    answer: "Winning three awards, the novel was praised for both its originality and its prose style.",
    explanation: "A participial phrase efficiently integrates the award detail; \"both...and\" pairs the praised qualities with parallel structure.",
  },
  {
    id: "pe800-4", category: "English", points: 800, difficulty: "PSAT",
    question: "The word \"tenacious\" most nearly means:",
    choices: ["Easily discouraged", "Holding firmly to a goal despite difficulty", "Willing to compromise quickly", "Physically powerful"],
    answer: "Holding firmly to a goal despite difficulty",
    explanation: "\"Tenacious\" describes persistent determination that doesn't yield to obstacles or setbacks.",
  },

  // PSAT English 1000
  {
    id: "pe1000-1", category: "English", points: 1000, difficulty: "PSAT",
    question: "Passage: \"Advocates argue raising the minimum wage lifts workers out of poverty; skeptics counter it drives businesses to cut hours or automate jobs.\"\n\nWhich evidence most strengthens the advocates' position?",
    choices: [
      "Automation has increased across many industries.",
      "A city that raised its minimum wage by $3 saw poverty fall 12% with no significant rise in unemployment.",
      "Small business owners often operate on thin margins.",
      "Workers earning minimum wage tend to spend more on local goods.",
    ],
    answer: "A city that raised its minimum wage by $3 saw poverty fall 12% with no significant rise in unemployment.",
    explanation: "Concrete data showing poverty fell without job losses directly counters both the poverty problem and the skeptics' fear.",
  },
  {
    id: "pe1000-2", category: "English", points: 1000, difficulty: "PSAT",
    question: "Which is an example of an ad hominem fallacy?",
    choices: [
      "You can't trust Dr. Rivera's nutrition research; she gained weight last year.",
      "The carbon tax failed in one state, so it will fail nationally.",
      "Either we ban plastic bags or our oceans will be destroyed.",
      "Sales of sunscreen rise in summer, so sunscreen causes heat.",
    ],
    answer: "You can't trust Dr. Rivera's nutrition research; she gained weight last year.",
    explanation: "Ad hominem attacks the person rather than the argument. The researcher's personal habits are irrelevant to her data's validity.",
  },
  {
    id: "pe1000-3", category: "English", points: 1000, difficulty: "PSAT",
    question: "A student's essay ends: \"For these reasons, the school should adopt a four-day week.\" Which concluding sentence improves this most?",
    choices: [
      "So, that is why I think this.",
      "In summary, the evidence presented above clearly shows this is true.",
      "By reducing burnout and maintaining academic outcomes, a four-day week offers a practical path to a healthier school community.",
      "There are many benefits to this idea, as discussed.",
    ],
    answer: "By reducing burnout and maintaining academic outcomes, a four-day week offers a practical path to a healthier school community.",
    explanation: "This synthesizes key arguments and ends with a forward-looking vision -- the hallmark of a strong conclusion.",
  },
  {
    id: "pe1000-4", category: "English", points: 1000, difficulty: "PSAT",
    question: "Passage: \"Unlike behaviorists who studied only observable actions, cognitive psychologists insisted that mental processes -- memory, reasoning, and perception -- were legitimate subjects for scientific inquiry.\"\n\nThis sentence primarily serves to:",
    choices: [
      "Argue that behaviorism is an outdated field",
      "Define cognitive psychology by contrasting it with an earlier approach",
      "Prove that mental processes can be directly observed",
      "Suggest both schools of psychology are equally valid",
    ],
    answer: "Define cognitive psychology by contrasting it with an earlier approach",
    explanation: "The contrast with behaviorism clarifies what makes cognitive psychology distinctive as a field.",
  },

  // ═══════════════════════════════════════════════
  // SAT · ENGLISH
  // ═══════════════════════════════════════════════

  // SAT English 200
  {
    id: "se200-1", category: "English", points: 200, difficulty: "SAT",
    question: "Which sentence uses the correct word?",
    choices: [
      "The principle of the school addressed the students.",
      "The principal of the school addressed the students.",
      "The principel of the school addressed the students.",
      "The princepal of the school addressed the students.",
    ],
    answer: "The principal of the school addressed the students.",
    explanation: "\"Principal\" (noun) means the head of a school. \"Principle\" means a rule or belief.",
  },
  {
    id: "se200-2", category: "English", points: 200, difficulty: "SAT",
    question: "Choose the word that best replaces \"very long\" in: \"The scientist gave a very long presentation that tried the audience's patience.\"",
    choices: ["concise", "interminable", "engaging", "measured"],
    answer: "interminable",
    explanation: "\"Interminable\" means seemingly endless, precisely capturing a presentation long enough to exhaust patience.",
  },
  {
    id: "se200-3", category: "English", points: 200, difficulty: "SAT",
    question: "Which version correctly uses a colon?",
    choices: [
      "She needed: flour, eggs, and butter.",
      "The list included: many items from the store.",
      "She bought three things: flour, eggs, and butter.",
      "The recipe: required flour, eggs, and butter.",
    ],
    answer: "She bought three things: flour, eggs, and butter.",
    explanation: "A colon must follow a grammatically complete independent clause before introducing a list.",
  },

  // SAT English 400
  {
    id: "se400-1", category: "English", points: 400, difficulty: "SAT",
    question: "Which sentence contains a misplaced modifier?",
    choices: [
      "Nervous before the interview, Priya reviewed her notes.",
      "The professor returned the essays with detailed comments.",
      "Barking loudly, the neighbors were annoyed by the dog.",
      "Running late, Derek grabbed his bag and rushed out.",
    ],
    answer: "Barking loudly, the neighbors were annoyed by the dog.",
    explanation: "\"Barking loudly\" modifies \"the neighbors,\" but neighbors don't bark. The phrase should be closest to \"the dog.\"",
  },
  {
    id: "se400-2", category: "English", points: 400, difficulty: "SAT",
    question: "Which most effectively rewrites: \"At this point in time, it is the case that we are in need of additional volunteers\"?",
    choices: [
      "At this time, we are in a state of needing volunteers.",
      "We need more volunteers.",
      "Currently, there exists a need on our part for additional volunteers.",
      "It is currently the case that volunteers are what we need more of.",
    ],
    answer: "We need more volunteers.",
    explanation: "All filler phrases collapse into the direct statement \"We need more volunteers.\"",
  },
  {
    id: "se400-3", category: "English", points: 400, difficulty: "SAT",
    question: "A writer claims electric vehicles have become significantly more affordable. Which addition provides the best support?",
    choices: [
      "Many people are interested in electric vehicles.",
      "Technology has improved in recent years.",
      "The average EV price dropped from $55,000 in 2018 to $39,000 in 2024.",
      "Electric vehicles come in several styles and colors.",
    ],
    answer: "The average EV price dropped from $55,000 in 2018 to $39,000 in 2024.",
    explanation: "Specific numerical data directly quantifies \"significantly more affordable\" with a concrete before-and-after comparison.",
  },

  // SAT English 600
  {
    id: "se600-1", category: "English", points: 600, difficulty: "SAT",
    question: "Passage: \"The treaty was lauded by diplomats as a triumph, yet historians argue it planted the seeds of the very conflict it sought to prevent.\"\n\n\"Lauded\" most nearly means:",
    choices: ["criticized", "analyzed", "praised", "debated"],
    answer: "praised",
    explanation: "\"Lauded\" means celebrated or praised -- the contrast with historians' later criticism makes this clear.",
  },
  {
    id: "se600-2", category: "English", points: 600, difficulty: "SAT",
    question: "Which sentence uses a semicolon correctly?",
    choices: [
      "She studied hard; and passed the exam.",
      "The sky was clear; making it a perfect day for a hike.",
      "He finished the project; submitted it before the deadline.",
      "The museum was crowded; the gift shop was surprisingly empty.",
    ],
    answer: "The museum was crowded; the gift shop was surprisingly empty.",
    explanation: "A semicolon correctly joins two complete, independent clauses. The other options pair a clause with a fragment or a coordinating conjunction.",
  },
  {
    id: "se600-3", category: "English", points: 600, difficulty: "SAT",
    question: "A writer argues social media increases civic engagement. Which finding most WEAKENS this?",
    choices: [
      "Social media users share political content frequently.",
      "Studies show online activism rarely translates into votes or policy change.",
      "Younger voters use social media more than older voters.",
      "Civic organizations have grown their followings on social media.",
    ],
    answer: "Studies show online activism rarely translates into votes or policy change.",
    explanation: "If online activity doesn't produce real civic outcomes, it directly undermines the claim that social media increases meaningful engagement.",
  },

  // SAT English 800
  {
    id: "se800-1", category: "English", points: 800, difficulty: "SAT",
    question: "Passage: \"To dismiss folklore as mere superstition is to misread its function: these stories encode ecological knowledge, social norms, and collective memory in forms that survive where written records do not.\"\n\nThe colon serves to:",
    choices: [
      "Introduce a contrasting viewpoint",
      "Explain and justify the claim in the first clause",
      "List examples that disprove the opening statement",
      "Signal a shift to a new topic",
    ],
    answer: "Explain and justify the claim in the first clause",
    explanation: "The colon introduces an elaboration explaining WHY dismissing folklore is a misreading -- it encodes valuable knowledge.",
  },
  {
    id: "se800-2", category: "English", points: 800, difficulty: "SAT",
    question: "\"This medication must be safe -- it's been used for 50 years.\" Which fallacy does this commit?",
    choices: [
      "False dilemma",
      "Ad hominem",
      "Appeal to tradition",
      "Straw man",
    ],
    answer: "Appeal to tradition",
    explanation: "Assuming something is safe because it has been done for a long time is an appeal to tradition -- age alone does not prove safety.",
  },
  {
    id: "se800-3", category: "English", points: 800, difficulty: "SAT",
    question: "What is the primary rhetorical effect of parallel structure in a sentence?",
    choices: [
      "It introduces a counterargument smoothly.",
      "It creates rhythm and emphasizes the equal importance of listed ideas.",
      "It narrows a broad claim to a specific example.",
      "It signals that the writer is shifting tone.",
    ],
    answer: "It creates rhythm and emphasizes the equal importance of listed ideas.",
    explanation: "Parallel structure (e.g., \"we came, we saw, we conquered\") creates grammatical balance that highlights equivalence and improves readability.",
  },

  // SAT English 1000
  {
    id: "se1000-1", category: "English", points: 1000, difficulty: "SAT",
    question: "Passage: \"The Harlem Renaissance was not simply a flowering of art and literature; it was a deliberate act of cultural self-definition in the face of systemic exclusion -- a declaration that Black intellectual and creative life could no longer be ignored.\"\n\nThe dash functions to:",
    choices: [
      "Introduce a list of supporting examples",
      "Signal an abrupt change of subject",
      "Amplify the preceding claim with a more forceful restatement",
      "Provide an aside that could be removed without changing the meaning",
    ],
    answer: "Amplify the preceding claim with a more forceful restatement",
    explanation: "The dash introduces a bolder restatement (\"a declaration\") that deepens and intensifies the claim about cultural self-definition.",
  },
  {
    id: "se1000-2", category: "English", points: 1000, difficulty: "SAT",
    question: "A student argues: \"If we do not adopt renewable energy immediately, civilization will collapse within a decade.\" This is best described as:",
    choices: [
      "A well-supported empirical prediction",
      "A circular argument",
      "An overstated claim that undermines credibility",
      "A valid deductive argument",
    ],
    answer: "An overstated claim that undermines credibility",
    explanation: "Extreme certainty (\"will collapse,\" \"within a decade\") without supporting evidence is hyperbolic and weakens rather than strengthens the argument.",
  },
  {
    id: "se1000-3", category: "English", points: 1000, difficulty: "SAT",
    question: "Passage: \"While early critics dismissed Impressionism as unfinished, the movement ultimately redefined painting, shifting focus from photographic accuracy to the subjective experience of light and moment.\"\n\n\"Ultimately\" signals that the author is:",
    choices: [
      "Questioning whether Impressionism was actually influential",
      "Acknowledging the critics may have had a point",
      "Tracing how an initial rejection gave way to lasting historical significance",
      "Suggesting Impressionism succeeded by abandoning its principles",
    ],
    answer: "Tracing how an initial rejection gave way to lasting historical significance",
    explanation: "\"Ultimately\" indicates a long-term outcome contrasting with the initial dismissal, showing how Impressionism's importance emerged over time.",
  },
];

export const POINT_VALUES = [200, 400, 600, 800, 1000] as const;

export function getDailyQuestions(difficulty: "PSAT" | "SAT"): {
  math: Question[];
  english: Question[];
} {
  // Eastern Time date so questions rotate at midnight ET
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "America/New_York" });
  const dateSeed = parseInt(today.replace(/-/g, ""), 10);

  // FNV-1a hash for a string → 32-bit uint
  const fnv = (s: string): number => {
    let h = 0x811c9dc5;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 0x01000193) >>> 0;
    }
    return h;
  };

  // Fisher-Yates shuffle with an explicit uint32 seed
  const shuffle = <T>(arr: T[], seed: number): T[] => {
    const a = [...arr];
    let s = seed >>> 0;
    for (let i = a.length - 1; i > 0; i--) {
      s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
      const j = s % (i + 1);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // Each (difficulty, category, points) slot gets its own independent seed so
  // every slot rotates through its question pool independently each day.
  const pickSeeded = (category: "Math" | "English"): Question[] =>
    POINT_VALUES.map((pts) => {
      const slotSeed = (dateSeed ^ fnv(`${difficulty}-${category}-${pts}`)) >>> 0;
      const pool = QUESTIONS.filter(
        (q) => q.category === category && q.difficulty === difficulty && q.points === pts
      );
      return shuffle(pool, slotSeed)[0];
    }).filter(Boolean) as Question[];

  return {
    math: pickSeeded("Math"),
    english: pickSeeded("English"),
  };
}
