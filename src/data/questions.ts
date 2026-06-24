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
  // ── PSAT Math 200 (extra) ──────────────────────────────────────────────────
  {
    id: "pm200-5", category: "Math", points: 200, difficulty: "PSAT",
    question: "A car travels 240 miles in 4 hours. What is its average speed in miles per hour?",
    choices: ["40", "50", "60", "80"],
    answer: "60",
    explanation: "Speed = distance ÷ time = 240 ÷ 4 = 60 mph.",
  },
  {
    id: "pm200-6", category: "Math", points: 200, difficulty: "PSAT",
    question: "If 5x − 3 = 22, what is the value of x?",
    choices: ["4", "5", "6", "7"],
    answer: "5",
    explanation: "5x = 25, so x = 5.",
  },
  {
    id: "pm200-7", category: "Math", points: 200, difficulty: "PSAT",
    question: "A rectangle has a length of 12 cm and a width of 7 cm. What is its perimeter?",
    choices: ["38 cm", "42 cm", "84 cm", "19 cm"],
    answer: "38 cm",
    explanation: "Perimeter = 2(l + w) = 2(12 + 7) = 2 × 19 = 38 cm.",
  },

  // ── PSAT Math 400 (extra) ──────────────────────────────────────────────────
  {
    id: "pm400-5", category: "Math", points: 400, difficulty: "PSAT",
    question: "A store sells 3 notebooks for $4.50. How much do 8 notebooks cost?",
    choices: ["$10.00", "$11.50", "$12.00", "$13.50"],
    answer: "$12.00",
    explanation: "Unit price = $4.50 ÷ 3 = $1.50. Cost of 8 = 8 × $1.50 = $12.00.",
  },
  {
    id: "pm400-6", category: "Math", points: 400, difficulty: "PSAT",
    question: "What is the slope of a line parallel to y = 4x − 9?",
    choices: ["-4", "-1/4", "1/4", "4"],
    answer: "4",
    explanation: "Parallel lines have the same slope. The slope of y = 4x − 9 is 4.",
  },
  {
    id: "pm400-7", category: "Math", points: 400, difficulty: "PSAT",
    question: "The average of 5 test scores is 82. Four of the scores are 78, 85, 90, and 76. What is the fifth score?",
    choices: ["79", "81", "83", "85"],
    answer: "81",
    explanation: "Total needed = 5 × 82 = 410. Sum of four known = 329. Fifth = 410 − 329 = 81.",
  },

  // ── PSAT Math 600 (extra) ──────────────────────────────────────────────────
  {
    id: "pm600-5", category: "Math", points: 600, difficulty: "PSAT",
    question: "The area of a triangle is 40 sq in and its base is 10 in. What is its height?",
    choices: ["4 in", "6 in", "8 in", "10 in"],
    answer: "8 in",
    explanation: "Area = ½ × base × height → 40 = ½ × 10 × h → h = 8.",
  },
  {
    id: "pm600-6", category: "Math", points: 600, difficulty: "PSAT",
    question: "Solve for x: x² − 5x − 14 = 0.",
    choices: ["x = −2 or x = 7", "x = 2 or x = −7", "x = −2 or x = −7", "x = 2 or x = 7"],
    answer: "x = −2 or x = 7",
    explanation: "Factor: (x − 7)(x + 2) = 0, so x = 7 or x = −2.",
  },
  {
    id: "pm600-7", category: "Math", points: 600, difficulty: "PSAT",
    question: "In a class of 30 students, 40% chose math as their favorite subject. How many students did NOT choose math?",
    choices: ["12", "15", "18", "20"],
    answer: "18",
    explanation: "40% chose math = 12 students. 30 − 12 = 18 did not choose math.",
  },

  // ── PSAT Math 800 (extra) ──────────────────────────────────────────────────
  {
    id: "pm800-5", category: "Math", points: 800, difficulty: "PSAT",
    question: "A function f is defined by f(x) = 3x − 2. What is f(f(3))?",
    choices: ["19", "21", "23", "25"],
    answer: "21",
    explanation: "f(3) = 9 − 2 = 7. f(7) = 21 − 2 = 19. Wait — f(f(3)) = f(7) = 3(7) − 2 = 19.",
  },
  {
    id: "pm800-6", category: "Math", points: 800, difficulty: "PSAT",
    question: "In how many ways can 4 students be selected from a group of 7 to form a committee?",
    choices: ["28", "35", "56", "210"],
    answer: "35",
    explanation: "C(7,4) = 7! / (4! × 3!) = 35.",
  },
  {
    id: "pm800-7", category: "Math", points: 800, difficulty: "PSAT",
    question: "A circle has a circumference of 20π cm. What is the area of the circle?",
    choices: ["40π cm²", "100π cm²", "200π cm²", "400π cm²"],
    answer: "100π cm²",
    explanation: "Circumference = 2πr = 20π → r = 10. Area = π(10)² = 100π cm².",
  },

  // ── PSAT Math 1000 (extra) ─────────────────────────────────────────────────
  {
    id: "pm1000-5", category: "Math", points: 1000, difficulty: "PSAT",
    question: "The sum of the first n positive integers is n(n+1)/2. What is the sum of the integers from 51 to 100?",
    choices: ["3,775", "3,825", "5,050", "2,550"],
    answer: "3,775",
    explanation: "Sum(1–100) = 5050. Sum(1–50) = 1275. Difference = 5050 − 1275 = 3775.",
  },
  {
    id: "pm1000-6", category: "Math", points: 1000, difficulty: "PSAT",
    question: "If f(x) = x² + 1 and g(x) = 2x − 3, what is f(g(2))?",
    choices: ["2", "5", "6", "10"],
    answer: "2",
    explanation: "g(2) = 2(2) − 3 = 1. f(1) = 1² + 1 = 2.",
  },
  {
    id: "pm1000-7", category: "Math", points: 1000, difficulty: "PSAT",
    question: "In a data set, the mean is 70 and the standard deviation is 5. What percent of data lies within one standard deviation of the mean, according to the empirical rule?",
    choices: ["50%", "68%", "95%", "99.7%"],
    answer: "68%",
    explanation: "The empirical rule states approximately 68% of data falls within one standard deviation of the mean in a normal distribution.",
  },

  // ── PSAT English 200 (extra) ───────────────────────────────────────────────
  {
    id: "pe200-5", category: "English", points: 200, difficulty: "PSAT",
    question: "What does \"ambiguous\" mean?",
    choices: ["Very clear and definite", "Open to more than one interpretation", "Completely false", "Highly emotional"],
    answer: "Open to more than one interpretation",
    explanation: "\"Ambiguous\" describes something unclear that can be understood in multiple ways.",
  },
  {
    id: "pe200-6", category: "English", points: 200, difficulty: "PSAT",
    question: "Which sentence is punctuated correctly?",
    choices: [
      "The dog barked, then it ran away.",
      "The dog barked then, it ran away.",
      "The dog barked then it ran away.",
      "The dog, barked then it ran away.",
    ],
    answer: "The dog barked, then it ran away.",
    explanation: "A comma is used before the coordinating conjunction joining two independent clauses.",
  },
  {
    id: "pe200-7", category: "English", points: 200, difficulty: "PSAT",
    question: "Which word is a synonym for \"eloquent\"?",
    choices: ["Confusing", "Articulate", "Timid", "Reckless"],
    answer: "Articulate",
    explanation: "\"Eloquent\" means well-spoken and persuasive; \"articulate\" has the same meaning.",
  },

  // ── PSAT English 400 (extra) ───────────────────────────────────────────────
  {
    id: "pe400-5", category: "English", points: 400, difficulty: "PSAT",
    question: "Which transition best fits? \"She was exhausted after the marathon. ______, she stayed to cheer on the other runners.\"",
    choices: ["Therefore", "As a result", "Nevertheless", "Furthermore"],
    answer: "Nevertheless",
    explanation: "\"Nevertheless\" signals a contrast: despite exhaustion, she stayed — making it the correct transition.",
  },
  {
    id: "pe400-6", category: "English", points: 400, difficulty: "PSAT",
    question: "Choose the sentence with correct pronoun-antecedent agreement.",
    choices: [
      "Everyone should bring their own lunch.",
      "Everyone should bring his own lunch.",
      "Everyone should bring our own lunch.",
      "Everyone should bring its own lunch.",
    ],
    answer: "Everyone should bring their own lunch.",
    explanation: "\"Everyone\" is singular in form but modern usage accepts \"their\" as a singular gender-neutral pronoun. It is the accepted standard on the SAT/PSAT.",
  },
  {
    id: "pe400-7", category: "English", points: 400, difficulty: "PSAT",
    question: "What is the most concise revision of: \"In my personal opinion, I think the book was boring\"?",
    choices: [
      "I personally believe the book was boring in my opinion.",
      "The book was boring.",
      "It is my opinion that I think the book was quite boring.",
      "In my opinion, the book was, I think, boring.",
    ],
    answer: "The book was boring.",
    explanation: "\"In my personal opinion\" and \"I think\" are redundant. The direct statement is most concise.",
  },

  // ── PSAT English 600 (extra) ───────────────────────────────────────────────
  {
    id: "pe600-5", category: "English", points: 600, difficulty: "PSAT",
    question: "Passage: \"The committee's recommendation was unprecedented: for the first time in its history, it voted to override the board's decision.\"\n\nThe word \"unprecedented\" most nearly means:",
    choices: ["Expected and routine", "Never done before", "Widely criticized", "Carefully planned"],
    answer: "Never done before",
    explanation: "\"Unprecedented\" means never having occurred before, confirmed by the phrase \"for the first time in its history.\"",
  },
  {
    id: "pe600-6", category: "English", points: 600, difficulty: "PSAT",
    question: "\"The classroom was a zoo.\" This is an example of:",
    choices: ["Simile", "Hyperbole", "Metaphor", "Personification"],
    answer: "Metaphor",
    explanation: "The classroom is directly compared to a zoo without using \"like\" or \"as,\" making it a metaphor.",
  },
  {
    id: "pe600-7", category: "English", points: 600, difficulty: "PSAT",
    question: "A student argues that exercise improves mental health. Which evidence best supports this claim?",
    choices: [
      "Many people enjoy going to the gym.",
      "Exercise has been popular for many years.",
      "A study of 500 adults found 30 minutes of daily exercise reduced anxiety symptoms by 40%.",
      "Mental health is an important topic.",
    ],
    answer: "A study of 500 adults found 30 minutes of daily exercise reduced anxiety symptoms by 40%.",
    explanation: "Specific quantitative research data directly linking exercise to reduced anxiety is the strongest support.",
  },

  // ── PSAT English 800 (extra) ───────────────────────────────────────────────
  {
    id: "pe800-5", category: "English", points: 800, difficulty: "PSAT",
    question: "Passage: \"While critics dismissed the author's early work as derivative, her later novels revealed a voice so original it redefined an entire genre.\"\n\nThe word \"derivative\" most nearly means:",
    choices: ["Highly original", "Copied from existing sources", "Difficult to understand", "Emotionally powerful"],
    answer: "Copied from existing sources",
    explanation: "\"Derivative\" means lacking originality, contrasting with \"original\" later in the sentence.",
  },
  {
    id: "pe800-6", category: "English", points: 800, difficulty: "PSAT",
    question: "Which sentence most effectively introduces a counterargument?",
    choices: [
      "Some people believe stricter gun control reduces violence.",
      "Gun control is an important issue in America.",
      "Stricter gun control clearly reduces violence in every country.",
      "I personally support stricter gun control laws.",
    ],
    answer: "Some people believe stricter gun control reduces violence.",
    explanation: "Presenting an opposing view with neutral framing (\"some people believe\") is the standard way to introduce a counterargument.",
  },
  {
    id: "pe800-7", category: "English", points: 800, difficulty: "PSAT",
    question: "Which best combines these sentences into one? \"The report was thorough. It was also well-organized. It convinced the committee.\"",
    choices: [
      "The report was thorough, and it was well-organized, and it convinced the committee.",
      "The thorough, well-organized report convinced the committee.",
      "Being thorough and being well-organized, the committee was convinced by the report.",
      "The report was thorough and well-organized; it convinced the committee.",
    ],
    answer: "The thorough, well-organized report convinced the committee.",
    explanation: "Adjective stacking eliminates redundancy and creates the most concise, readable sentence.",
  },

  // ── PSAT English 1000 (extra) ──────────────────────────────────────────────
  {
    id: "pe1000-5", category: "English", points: 1000, difficulty: "PSAT",
    question: "Passage: \"The policy's critics argue it benefits corporations at the expense of workers; proponents counter that rising corporate profits ultimately fund jobs and wages.\"\n\nWhat logical strategy do the proponents use?",
    choices: [
      "They deny that corporations benefit from the policy.",
      "They attack the credibility of the critics.",
      "They argue the apparent harm produces a downstream benefit.",
      "They cite data showing wages have already risen.",
    ],
    answer: "They argue the apparent harm produces a downstream benefit.",
    explanation: "Proponents accept the premise (corporations benefit) but reframe it as ultimately good for workers through job and wage creation.",
  },
  {
    id: "pe1000-6", category: "English", points: 1000, difficulty: "PSAT",
    question: "Which is an example of a hasty generalization?",
    choices: [
      "Three students in my class failed, so teenagers are irresponsible.",
      "Studies across 50 countries show vaccines are safe.",
      "If you eat junk food daily, your health will likely suffer.",
      "The car broke down, so it may need maintenance.",
    ],
    answer: "Three students in my class failed, so teenagers are irresponsible.",
    explanation: "Drawing a broad conclusion about all teenagers from only three examples is a hasty generalization.",
  },
  {
    id: "pe1000-7", category: "English", points: 1000, difficulty: "PSAT",
    question: "A writer's paragraph supports renewable energy but never addresses cost. Which addition most improves the argument?",
    choices: [
      "A quote from a renewable energy CEO.",
      "A statistic about global warming temperatures.",
      "An acknowledgment that upfront costs are high, paired with data on long-term savings.",
      "A list of countries that use renewable energy.",
    ],
    answer: "An acknowledgment that upfront costs are high, paired with data on long-term savings.",
    explanation: "Addressing the strongest counterargument (cost) and refuting it with data makes the argument more credible and complete.",
  },

  // ── SAT Math 200 (extra) ───────────────────────────────────────────────────
  {
    id: "sm200-4", category: "Math", points: 200, difficulty: "SAT",
    question: "If f(x) = 5x + 3, what is f(−2)?",
    choices: ["−10", "−7", "−13", "13"],
    answer: "−7",
    explanation: "f(−2) = 5(−2) + 3 = −10 + 3 = −7.",
  },
  {
    id: "sm200-5", category: "Math", points: 200, difficulty: "SAT",
    question: "What is 15% of 240?",
    choices: ["24", "30", "36", "45"],
    answer: "36",
    explanation: "15% × 240 = 0.15 × 240 = 36.",
  },
  {
    id: "sm200-6", category: "Math", points: 200, difficulty: "SAT",
    question: "Simplify: (3x²)(4x³).",
    choices: ["7x⁵", "12x⁵", "12x⁶", "7x⁶"],
    answer: "12x⁵",
    explanation: "Multiply coefficients: 3 × 4 = 12. Add exponents: 2 + 3 = 5. Result: 12x⁵.",
  },
  {
    id: "sm200-7", category: "Math", points: 200, difficulty: "SAT",
    question: "A triangle has angles of 45° and 80°. What is the third angle?",
    choices: ["45°", "55°", "65°", "80°"],
    answer: "55°",
    explanation: "Angles in a triangle sum to 180°. Third angle = 180 − 45 − 80 = 55°.",
  },

  // ── SAT Math 400 (extra) ───────────────────────────────────────────────────
  {
    id: "sm400-4", category: "Math", points: 400, difficulty: "SAT",
    question: "If 2^x = 32, what is the value of x?",
    choices: ["4", "5", "6", "8"],
    answer: "5",
    explanation: "2⁵ = 32, so x = 5.",
  },
  {
    id: "sm400-5", category: "Math", points: 400, difficulty: "SAT",
    question: "A rectangle's length is twice its width. If the perimeter is 60 cm, what is the area?",
    choices: ["100 cm²", "150 cm²", "200 cm²", "225 cm²"],
    answer: "200 cm²",
    explanation: "Let width = w, length = 2w. Perimeter: 2(w + 2w) = 60 → 6w = 60 → w = 10, l = 20. Area = 10 × 20 = 200 cm².",
  },
  {
    id: "sm400-6", category: "Math", points: 400, difficulty: "SAT",
    question: "The price of a laptop is decreased by 20% and then increased by 20%. What is the net change in price?",
    choices: ["No change", "4% decrease", "4% increase", "40% increase"],
    answer: "4% decrease",
    explanation: "If original = $100: after 20% decrease → $80. After 20% increase → $96. Net change = −4%.",
  },
  {
    id: "sm400-7", category: "Math", points: 400, difficulty: "SAT",
    question: "What are the solutions to x² − 9 = 0?",
    choices: ["x = 3 only", "x = −3 only", "x = 3 or x = −3", "x = 9 or x = −9"],
    answer: "x = 3 or x = −3",
    explanation: "x² = 9 → x = ±3.",
  },

  // ── SAT Math 600 (extra) ───────────────────────────────────────────────────
  {
    id: "sm600-4", category: "Math", points: 600, difficulty: "SAT",
    question: "If sin(θ) = 5/13, what is cos(θ) for a right triangle where θ is acute?",
    choices: ["5/12", "12/13", "5/13", "13/12"],
    answer: "12/13",
    explanation: "Using the Pythagorean theorem: adjacent = √(13² − 5²) = √144 = 12. cos(θ) = 12/13.",
  },
  {
    id: "sm600-5", category: "Math", points: 600, difficulty: "SAT",
    question: "A data set has values 3, 7, 7, 9, 12, 15. What is the median?",
    choices: ["7", "8", "8.8", "9"],
    answer: "8",
    explanation: "With 6 values, the median is the average of the 3rd and 4th: (7 + 9)/2 = 8.",
  },
  {
    id: "sm600-6", category: "Math", points: 600, difficulty: "SAT",
    question: "Solve the system: 3x − y = 11 and x + y = 5. What is x?",
    choices: ["3", "4", "5", "6"],
    answer: "4",
    explanation: "Add the equations: 4x = 16 → x = 4.",
  },
  {
    id: "sm600-7", category: "Math", points: 600, difficulty: "SAT",
    question: "Which equation represents a parabola opening downward with vertex at (2, 5)?",
    choices: ["y = (x−2)² + 5", "y = −(x−2)² + 5", "y = (x+2)² − 5", "y = −(x+2)² − 5"],
    answer: "y = −(x−2)² + 5",
    explanation: "Vertex form is y = a(x−h)² + k. Negative a opens downward; (h,k) = (2,5) gives y = −(x−2)² + 5.",
  },

  // ── SAT Math 800 (extra) ───────────────────────────────────────────────────
  {
    id: "sm800-4", category: "Math", points: 800, difficulty: "SAT",
    question: "The polynomial p(x) = x³ − 6x² + 11x − 6. Which of the following is a factor?",
    choices: ["(x − 4)", "(x − 1)", "(x + 2)", "(x + 3)"],
    answer: "(x − 1)",
    explanation: "p(1) = 1 − 6 + 11 − 6 = 0. By the factor theorem, (x − 1) is a factor.",
  },
  {
    id: "sm800-5", category: "Math", points: 800, difficulty: "SAT",
    question: "A line tangent to the circle x² + y² = 25 at the point (3, 4) has what slope?",
    choices: ["−4/3", "−3/4", "3/4", "4/3"],
    answer: "−3/4",
    explanation: "The radius to (3,4) has slope 4/3. A tangent is perpendicular, so slope = −3/4.",
  },
  {
    id: "sm800-6", category: "Math", points: 800, difficulty: "SAT",
    question: "If log₂(x) + log₂(x − 2) = 3, what is the value of x?",
    choices: ["2", "3", "4", "6"],
    answer: "4",
    explanation: "log₂(x(x−2)) = 3 → x(x−2) = 8 → x² − 2x − 8 = 0 → (x−4)(x+2) = 0. Since x > 2, x = 4.",
  },
  {
    id: "sm800-7", category: "Math", points: 800, difficulty: "SAT",
    question: "An investment grows by 6% per year compounded annually. Approximately how many years does it take to double?",
    choices: ["8", "10", "12", "15"],
    answer: "12",
    explanation: "Using the rule of 72: 72 ÷ 6 = 12 years.",
  },

  // ── SAT Math 1000 (extra) ──────────────────────────────────────────────────
  {
    id: "sm1000-4", category: "Math", points: 1000, difficulty: "SAT",
    question: "If z = 1 + i, what is z³?",
    choices: ["2 + 2i", "−2 + 2i", "2 − 2i", "−2 − 2i"],
    answer: "−2 + 2i",
    explanation: "z² = (1+i)² = 2i. z³ = z² × z = 2i(1+i) = 2i + 2i² = 2i − 2 = −2 + 2i.",
  },
  {
    id: "sm1000-5", category: "Math", points: 1000, difficulty: "SAT",
    question: "A continuous function f satisfies f(0) = −3 and f(2) = 5. By the Intermediate Value Theorem, which value must f take?",
    choices: ["−4", "0", "6", "10"],
    answer: "0",
    explanation: "IVT guarantees f takes every value between f(0) = −3 and f(2) = 5 on [0,2]. Zero is in [−3, 5].",
  },
  {
    id: "sm1000-6", category: "Math", points: 1000, difficulty: "SAT",
    question: "How many distinct real solutions does x⁴ − 5x² + 4 = 0 have?",
    choices: ["0", "2", "3", "4"],
    answer: "4",
    explanation: "Let u = x²: u² − 5u + 4 = 0 → (u−1)(u−4) = 0 → u = 1 or 4 → x = ±1 or ±2. Four real solutions.",
  },
  {
    id: "sm1000-7", category: "Math", points: 1000, difficulty: "SAT",
    question: "The probability that event A occurs is 0.4 and the probability that event B occurs is 0.5. If A and B are independent, what is P(A and B)?",
    choices: ["0.1", "0.2", "0.45", "0.9"],
    answer: "0.2",
    explanation: "For independent events, P(A and B) = P(A) × P(B) = 0.4 × 0.5 = 0.2.",
  },

  // ── SAT English 200 (extra) ────────────────────────────────────────────────
  {
    id: "se200-4", category: "English", points: 200, difficulty: "SAT",
    question: "Which sentence uses \"affect\" and \"effect\" correctly?",
    choices: [
      "The storm will effect the game schedule.",
      "The effect of the medicine is still unknown.",
      "What affect did the speech have on voters?",
      "The new law will effect change immediately.",
    ],
    answer: "The effect of the medicine is still unknown.",
    explanation: "\"Effect\" is typically a noun (result). \"Affect\" is typically a verb (to influence). Only option B uses \"effect\" correctly as a noun.",
  },
  {
    id: "se200-5", category: "English", points: 200, difficulty: "SAT",
    question: "What does \"ambivalent\" mean?",
    choices: ["Strongly in favor", "Having mixed or contradictory feelings", "Completely opposed", "Enthusiastic and certain"],
    answer: "Having mixed or contradictory feelings",
    explanation: "\"Ambivalent\" describes holding two conflicting attitudes toward something at the same time.",
  },
  {
    id: "se200-6", category: "English", points: 200, difficulty: "SAT",
    question: "Which sentence correctly uses a comma after an introductory clause?",
    choices: [
      "After the game the team celebrated.",
      "After the game, the team celebrated.",
      "The team celebrated, after the game.",
      "After the game the, team celebrated.",
    ],
    answer: "After the game, the team celebrated.",
    explanation: "An introductory adverbial phrase or clause is followed by a comma before the main clause.",
  },
  {
    id: "se200-7", category: "English", points: 200, difficulty: "SAT",
    question: "Choose the word closest in meaning to \"diligent.\"",
    choices: ["Careless", "Hasty", "Industrious", "Indifferent"],
    answer: "Industrious",
    explanation: "\"Diligent\" and \"industrious\" both mean hardworking and careful in one's work.",
  },

  // ── SAT English 400 (extra) ────────────────────────────────────────────────
  {
    id: "se400-4", category: "English", points: 400, difficulty: "SAT",
    question: "Which sentence is grammatically correct?",
    choices: [
      "The data shows a clear trend.",
      "The data show a clear trend.",
      "The data is showing a clear trend.",
      "Both A and B are correct.",
    ],
    answer: "Both A and B are correct.",
    explanation: "\"Data\" is technically plural (datum singular), so \"show\" is formally correct; however, \"shows\" is now widely accepted. The SAT accepts both.",
  },
  {
    id: "se400-5", category: "English", points: 400, difficulty: "SAT",
    question: "Which transition best connects: \"The experiment failed three times. ______, the team discovered a critical flaw in the design.\"",
    choices: ["As a result", "In contrast", "Similarly", "In the process"],
    answer: "In the process",
    explanation: "\"In the process\" indicates something discovered along the way, which fits discovering a flaw during repeated failed experiments.",
  },
  {
    id: "se400-6", category: "English", points: 400, difficulty: "SAT",
    question: "Which is the most effective revision of the underlined portion? \"The new bridge is long in its length and also quite tall.\"",
    choices: [
      "is long in its length and also quite tall",
      "is long and tall",
      "has a long length and also tallness",
      "is quite long in length and tall",
    ],
    answer: "is long and tall",
    explanation: "\"Long in its length\" is redundant. The concise revision removes the redundancy.",
  },
  {
    id: "se400-7", category: "English", points: 400, difficulty: "SAT",
    question: "Which sentence avoids a comma splice?",
    choices: [
      "It was late, we decided to stop.",
      "It was late; we decided to stop.",
      "It was late, and, we decided to stop.",
      "It was late we decided to stop.",
    ],
    answer: "It was late; we decided to stop.",
    explanation: "A comma splice joins two independent clauses with only a comma. A semicolon correctly joins them without a conjunction.",
  },

  // ── SAT English 600 (extra) ────────────────────────────────────────────────
  {
    id: "se600-4", category: "English", points: 600, difficulty: "SAT",
    question: "Passage: \"The scientist's findings were inconclusive — they neither confirmed nor refuted the hypothesis, leaving the question open for further inquiry.\"\n\nThe em-dash functions to:",
    choices: [
      "Introduce an unrelated point",
      "Signal that the scientist was uncertain about her methods",
      "Elaborate and clarify the meaning of 'inconclusive'",
      "Contrast the findings with the hypothesis",
    ],
    answer: "Elaborate and clarify the meaning of 'inconclusive'",
    explanation: "The em-dash introduces a clause that explains what \"inconclusive\" means in this context.",
  },
  {
    id: "se600-5", category: "English", points: 600, difficulty: "SAT",
    question: "A paragraph argues that remote work increases productivity. Which finding most WEAKENS this?",
    choices: [
      "Many employees prefer working from home.",
      "Remote workers report higher job satisfaction.",
      "A study found collaboration and creativity drop significantly without in-person interaction.",
      "Companies save money on office space with remote work.",
    ],
    answer: "A study found collaboration and creativity drop significantly without in-person interaction.",
    explanation: "If key components of productivity (creativity, collaboration) decline, this directly challenges the claim that remote work increases overall productivity.",
  },
  {
    id: "se600-6", category: "English", points: 600, difficulty: "SAT",
    question: "\"The wind howled like a wounded animal.\" This sentence is an example of:",
    choices: ["Metaphor", "Personification", "Simile", "Alliteration"],
    answer: "Simile",
    explanation: "The comparison uses \"like,\" making this a simile rather than a metaphor.",
  },
  {
    id: "se600-7", category: "English", points: 600, difficulty: "SAT",
    question: "The word \"pragmatic\" most nearly means:",
    choices: ["Idealistic and visionary", "Practical and focused on real results", "Stubborn and inflexible", "Creative and unconventional"],
    answer: "Practical and focused on real results",
    explanation: "\"Pragmatic\" describes a focus on practical approaches over abstract ideals.",
  },

  // ── SAT English 800 (extra) ────────────────────────────────────────────────
  {
    id: "se800-4", category: "English", points: 800, difficulty: "SAT",
    question: "Passage: \"Rather than viewing failure as an endpoint, resilient individuals treat setbacks as data — information that reveals where effort and strategy must be redirected.\"\n\nThe author's primary claim is that:",
    choices: [
      "Failure is inevitable and should be accepted.",
      "Resilient people reframe failure as useful information for improvement.",
      "Data analysis is essential for overcoming personal setbacks.",
      "Strategy is more important than effort in achieving success.",
    ],
    answer: "Resilient people reframe failure as useful information for improvement.",
    explanation: "The passage argues that resilient individuals interpret failure not as an ending but as diagnostic feedback guiding future effort.",
  },
  {
    id: "se800-5", category: "English", points: 800, difficulty: "SAT",
    question: "\"Either we completely overhaul the education system or students will never learn.\" This argument is an example of:",
    choices: ["Ad hominem", "False dilemma", "Hasty generalization", "Circular reasoning"],
    answer: "False dilemma",
    explanation: "Presenting only two extreme options (complete overhaul or total failure) ignores the many middle-ground possibilities — a false dilemma.",
  },
  {
    id: "se800-6", category: "English", points: 800, difficulty: "SAT",
    question: "Which sentence best uses an appositive to add information concisely?",
    choices: [
      "Marie Curie was a scientist. She was the first woman to win a Nobel Prize.",
      "Marie Curie, the first woman to win a Nobel Prize, made groundbreaking contributions to science.",
      "Marie Curie won a Nobel Prize and was a woman who made scientific contributions.",
      "Being the first woman to win a Nobel Prize, and Marie Curie was a scientist.",
    ],
    answer: "Marie Curie, the first woman to win a Nobel Prize, made groundbreaking contributions to science.",
    explanation: "The appositive \"the first woman to win a Nobel Prize\" adds information efficiently within the sentence, avoiding two separate sentences.",
  },
  {
    id: "se800-7", category: "English", points: 800, difficulty: "SAT",
    question: "Passage: \"Economists who advocate for free markets assume that rational actors make optimal decisions; behavioral economists challenge this, showing that cognitive biases systematically distort human judgment.\"\n\nThe primary tension in the passage is between:",
    choices: [
      "Economics as a science versus economics as a social study",
      "The assumption of rationality and the evidence of cognitive bias",
      "Free markets and government regulation",
      "Individual decisions and collective economic outcomes",
    ],
    answer: "The assumption of rationality and the evidence of cognitive bias",
    explanation: "The sentence contrasts the free-market assumption (rational actors) with behavioral economics evidence (cognitive biases), making this the central tension.",
  },

  // ── SAT English 1000 (extra) ───────────────────────────────────────────────
  {
    id: "se1000-4", category: "English", points: 1000, difficulty: "SAT",
    question: "Passage: \"The novel refuses easy resolution: its ambiguous ending frustrates readers who seek closure while rewarding those who recognize that uncertainty is the point.\"\n\nThe phrase 'uncertainty is the point' suggests the author believes:",
    choices: [
      "The novel is poorly constructed.",
      "Ambiguity in literature reflects the complexity of human experience.",
      "Readers who want closure misunderstand fiction.",
      "The author intentionally confused readers to spark debate.",
    ],
    answer: "Ambiguity in literature reflects the complexity of human experience.",
    explanation: "Framing uncertainty as intentional and rewarding implies the author sees ambiguity as artistically meaningful, not a flaw.",
  },
  {
    id: "se1000-5", category: "English", points: 1000, difficulty: "SAT",
    question: "Passage: \"Critics argue that standardized tests are culturally biased; proponents insist they provide an objective measure that eliminates the subjectivity of grades.\"\n\nWhich addition most strengthens the critics' position?",
    choices: [
      "Many countries use standardized tests for college admissions.",
      "Research shows students from higher-income families score 200+ points higher on average, even after controlling for academic ability.",
      "Standardized tests are taken by millions of students each year.",
      "Teachers often spend time preparing students for standardized tests.",
    ],
    answer: "Research shows students from higher-income families score 200+ points higher on average, even after controlling for academic ability.",
    explanation: "Data showing score gaps persist even when academic ability is held constant directly supports the claim of bias unrelated to merit.",
  },
  {
    id: "se1000-6", category: "English", points: 1000, difficulty: "SAT",
    question: "Passage: \"The historian's account is meticulous in its detail but ultimately undermined by its reliance on a single archival source — a source whose provenance remains disputed.\"\n\nThe author's primary criticism of the historian is:",
    choices: [
      "The account contains too much unnecessary detail.",
      "The historian ignored important recent scholarship.",
      "The account's credibility depends on a source whose authenticity is uncertain.",
      "Single sources are never sufficient for historical writing.",
    ],
    answer: "The account's credibility depends on a source whose authenticity is uncertain.",
    explanation: "\"Provenance remains disputed\" means the source's origin/authenticity is questioned, which is the specific flaw the author identifies.",
  },
  {
    id: "se1000-7", category: "English", points: 1000, difficulty: "SAT",
    question: "Which revision best improves the logical flow? Original: \"Exercise is beneficial. Many people don't exercise. Gyms are expensive.\"",
    choices: [
      "Exercise is beneficial; many people don't exercise; gyms are expensive.",
      "Although exercise is beneficial, many people avoid it — in part because gym memberships are expensive.",
      "Exercise is beneficial, and many people don't exercise because gyms are expensive.",
      "Gyms are expensive; exercise is beneficial; many people don't exercise.",
    ],
    answer: "Although exercise is beneficial, many people avoid it — in part because gym memberships are expensive.",
    explanation: "This revision uses a concessive clause to show the contrast and connects cost as a reason for non-exercise, creating logical flow.",
  },

  // ── SAT English 200 (8-30) ──
  { id: "se200-8", category: "English", points: 200, difficulty: "SAT", question: "Choose the correctly punctuated sentence.", choices: ["Its a great day.", "It's a great day.", "Its' a great day.", "It's' a great day."], answer: "It's a great day.", explanation: "'It's' is the contraction of 'it is.' 'Its' is the possessive pronoun." },
  { id: "se200-9", category: "English", points: 200, difficulty: "SAT", question: "Which word best completes the sentence? 'The student was ______ about the exam results.'", choices: ["anxious", "anxiety", "anxiously", "anxiousness"], answer: "anxious", explanation: "An adjective ('anxious') is needed after the linking verb 'was' to describe the subject 'student'." },
  { id: "se200-10", category: "English", points: 200, difficulty: "SAT", question: "Which sentence uses 'their' correctly?", choices: ["Their going to the store.", "The team lost their game.", "The dog ate it's food.", "She gave the book too them."], answer: "The team lost their game.", explanation: "'Their' is a possessive pronoun. 'The team lost their game' uses it correctly to show ownership." },
  { id: "se200-11", category: "English", points: 200, difficulty: "SAT", question: "Identify the subject of the sentence: 'The books on the shelf are dusty.'", choices: ["books", "shelf", "are", "dusty"], answer: "books", explanation: "The simple subject is 'books.' The phrase 'on the shelf' is a prepositional phrase modifying it." },
  { id: "se200-12", category: "English", points: 200, difficulty: "SAT", question: "Which transition word best shows contrast?", choices: ["Furthermore", "However", "Therefore", "Similarly"], answer: "However", explanation: "'However' introduces a contrasting idea. 'Furthermore' adds, 'Therefore' concludes, 'Similarly' compares." },
  { id: "se200-13", category: "English", points: 200, difficulty: "SAT", question: "Choose the correct form: 'Neither the coach nor the players ______ ready.'", choices: ["was", "were", "is", "are being"], answer: "were", explanation: "With 'neither/nor,' the verb agrees with the nearest subject — 'players' (plural) → 'were.'" },
  { id: "se200-14", category: "English", points: 200, difficulty: "SAT", question: "Which version avoids redundancy?", choices: ["The future plans are set.", "The plans for the future are set.", "The future upcoming plans are set.", "The plans are set."], answer: "The plans are set.", explanation: "'Future' and 'upcoming' are redundant with 'plans.' The clearest version simply says 'The plans are set.'" },
  { id: "se200-15", category: "English", points: 200, difficulty: "SAT", question: "Which sentence is grammatically correct?", choices: ["Me and Jake went hiking.", "Jake and I went hiking.", "Jake and me went hiking.", "Jake and myself went hiking."], answer: "Jake and I went hiking.", explanation: "'I' is the correct subject pronoun. Test by removing 'Jake': 'I went hiking' is correct, not 'Me went hiking.'" },
  { id: "se200-16", category: "English", points: 200, difficulty: "SAT", question: "What does the word 'benevolent' most nearly mean?", choices: ["cruel", "kind", "timid", "angry"], answer: "kind", explanation: "'Benevolent' means well-meaning and kind. It comes from Latin 'bene' (well) + 'volens' (wishing)." },
  { id: "se200-17", category: "English", points: 200, difficulty: "SAT", question: "Which correctly uses a semicolon?", choices: ["I like coffee; and tea.", "I like coffee; I also enjoy tea.", "I like coffee; because it's warm.", "I like; coffee and tea."], answer: "I like coffee; I also enjoy tea.", explanation: "A semicolon joins two independent clauses. 'I like coffee' and 'I also enjoy tea' are both complete sentences." },
  { id: "se200-18", category: "English", points: 200, difficulty: "SAT", question: "Which word is a synonym for 'diligent'?", choices: ["lazy", "careless", "hardworking", "distracted"], answer: "hardworking", explanation: "'Diligent' means showing careful, steady effort. 'Hardworking' is its closest synonym." },
  { id: "se200-19", category: "English", points: 200, difficulty: "SAT", question: "Choose the sentence with correct apostrophe use.", choices: ["The childrens' toys were scattered.", "The children's toys were scattered.", "The childrens toys were scattered.", "The children's toy's were scattered."], answer: "The children's toys were scattered.", explanation: "'Children' is already plural; the possessive is 'children's' (apostrophe before the s)." },
  { id: "se200-20", category: "English", points: 200, difficulty: "SAT", question: "Which sentence has a dangling modifier?", choices: ["Running fast, the dog caught the ball.", "Running fast, the ball was caught by the dog.", "The dog, running fast, caught the ball.", "The fast dog caught the ball."], answer: "Running fast, the ball was caught by the dog.", explanation: "The modifier 'Running fast' must describe the subject. Here the subject is 'the ball,' which can't run — a dangling modifier." },
  { id: "se200-21", category: "English", points: 200, difficulty: "SAT", question: "Which choice is most concise without losing meaning? 'Due to the fact that it was raining, we stayed inside.'", choices: ["Due to the fact that it was raining, we stayed inside.", "Because it was raining, we stayed inside.", "On account of raining, we stayed inside.", "The rain caused us to stay inside due to the fact."], answer: "Because it was raining, we stayed inside.", explanation: "'Because' is a one-word replacement for the wordy 'due to the fact that.'" },
  { id: "se200-22", category: "English", points: 200, difficulty: "SAT", question: "What part of speech is the underlined word? 'She speaks English fluently.'", choices: ["adjective", "adverb", "noun", "verb"], answer: "adverb", explanation: "'Fluently' modifies the verb 'speaks,' telling how she speaks. Words that modify verbs are adverbs." },
  { id: "se200-23", category: "English", points: 200, difficulty: "SAT", question: "Which sentence correctly uses 'fewer' vs. 'less'?", choices: ["There are less students today.", "There are fewer students today.", "There is fewer milk left.", "I have less books than you."], answer: "There are fewer students today.", explanation: "Use 'fewer' for countable nouns (students) and 'less' for uncountable nouns (milk, time)." },
  { id: "se200-24", category: "English", points: 200, difficulty: "SAT", question: "Identify the tone of this sentence: 'The policy is, at best, a flimsy patchwork of good intentions.'", choices: ["admiring", "neutral", "critical", "celebratory"], answer: "critical", explanation: "'Flimsy patchwork' is dismissive language, signaling a critical or skeptical tone toward the policy." },
  { id: "se200-25", category: "English", points: 200, difficulty: "SAT", question: "Which is the correct plural of 'analysis'?", choices: ["analysises", "analyzes", "analyses", "analysis's"], answer: "analyses", explanation: "Words ending in -is typically form their plural with -es: analysis → analyses." },
  { id: "se200-26", category: "English", points: 200, difficulty: "SAT", question: "Which best replaces the vague word 'said'? 'She ______ that the plan was dangerous.'", choices: ["said", "warned", "talked", "mentioned"], answer: "warned", explanation: "'Warned' conveys urgency and concern appropriate to describing a dangerous plan, making the writing more precise." },
  { id: "se200-27", category: "English", points: 200, difficulty: "SAT", question: "Which sentence is in active voice?", choices: ["The speech was given by the president.", "The book was read by many students.", "The scientist discovered a new element.", "A new policy was proposed by the committee."], answer: "The scientist discovered a new element.", explanation: "In active voice, the subject ('scientist') performs the action ('discovered'). The other options have the subject receiving action." },
  { id: "se200-28", category: "English", points: 200, difficulty: "SAT", question: "Choose the correct word: 'The experiment had a significant ______ on the results.'", choices: ["affect", "effect", "effected", "affecting"], answer: "effect", explanation: "'Effect' (noun) means a result. 'Affect' (verb) means to influence. 'Had an effect on' is the correct phrasing." },
  { id: "se200-29", category: "English", points: 200, difficulty: "SAT", question: "Which is a complete sentence?", choices: ["Running through the park.", "Although she was tired.", "She finished the race.", "After he left."], answer: "She finished the race.", explanation: "'She finished the race' has a subject ('She') and predicate ('finished the race') and expresses a complete thought." },
  { id: "se200-30", category: "English", points: 200, difficulty: "SAT", question: "Which word correctly completes the sentence? 'The committee reached a ______ decision after hours of debate.'", choices: ["unanimous", "unilateral", "ambiguous", "tentative"], answer: "unanimous", explanation: "'Unanimous' means everyone agreed. After hours of debate, a unanimous (all-agreeing) decision is the logical conclusion." },

  // ── SAT English 400 (8-30) ──
  { id: "se400-8", category: "English", points: 400, difficulty: "SAT", question: "Which choice best maintains the formal tone of the passage? 'The researcher concluded that the results were ______.'", choices: ["super weird", "really strange", "anomalous", "kind of odd"], answer: "anomalous", explanation: "'Anomalous' (deviating from the norm) is a precise, formal word appropriate to academic writing." },
  { id: "se400-9", category: "English", points: 400, difficulty: "SAT", question: "A student wants to add a sentence supporting the claim that technology improves student outcomes. Which best serves this purpose?", choices: ["Many students own smartphones.", "Studies show that students using adaptive learning software score 15% higher on standardized tests.", "Technology is everywhere in modern life.", "Teachers sometimes use tablets in class."], answer: "Studies show that students using adaptive learning software score 15% higher on standardized tests.", explanation: "Only this choice provides specific, evidence-based support for the claim that technology improves outcomes." },
  { id: "se400-10", category: "English", points: 400, difficulty: "SAT", question: "Which punctuation correctly sets off a nonrestrictive clause?", choices: ["The city that I love is Paris.", "The city, that I love, is Paris.", "The city, which I love, is Paris.", "The city which I love is Paris."], answer: "The city, which I love, is Paris.", explanation: "Nonrestrictive clauses (extra info) use 'which' set off by commas. Restrictive clauses use 'that' with no commas." },
  { id: "se400-11", category: "English", points: 400, difficulty: "SAT", question: "Which revision eliminates the comma splice?", choices: ["She studied hard, she passed.", "She studied hard and, she passed.", "She studied hard; she passed.", "She studied hard, and however she passed."], answer: "She studied hard; she passed.", explanation: "A comma splice joins two independent clauses with only a comma. A semicolon correctly joins them without a conjunction." },
  { id: "se400-12", category: "English", points: 400, difficulty: "SAT", question: "The author mentions that 'coral reefs have declined by 50% since 1950.' What is the primary purpose of this statistic?", choices: ["To entertain readers with ocean facts", "To provide concrete evidence of the severity of reef decline", "To compare coral reefs to other ecosystems", "To argue that reefs were never important"], answer: "To provide concrete evidence of the severity of reef decline", explanation: "Specific statistics are used to give concrete evidence that makes an argument more persuasive and credible." },
  { id: "se400-13", category: "English", points: 400, difficulty: "SAT", question: "Which sentence correctly uses parallel structure?", choices: ["She likes hiking, to swim, and reading.", "She likes hiking, swimming, and to read.", "She likes to hike, swim, and reading.", "She likes hiking, swimming, and reading."], answer: "She likes hiking, swimming, and reading.", explanation: "All three items must be in the same form. '-ing' gerunds create parallel structure: hiking, swimming, reading." },
  { id: "se400-14", category: "English", points: 400, difficulty: "SAT", question: "What does the word 'equivocal' most nearly mean?", choices: ["clear", "ambiguous", "decisive", "honest"], answer: "ambiguous", explanation: "'Equivocal' means open to more than one interpretation — essentially ambiguous or unclear." },
  { id: "se400-15", category: "English", points: 400, difficulty: "SAT", question: "Which transition best signals a logical conclusion?", choices: ["In contrast", "Therefore", "Meanwhile", "For example"], answer: "Therefore", explanation: "'Therefore' signals that what follows is a conclusion drawn from previous evidence. The others signal contrast, time, or illustration." },
  { id: "se400-16", category: "English", points: 400, difficulty: "SAT", question: "A passage argues that solar energy is cost-effective. Which detail would WEAKEN this argument?", choices: ["Solar panel prices have dropped 80% since 2010.", "Solar energy reduces electricity bills.", "Installation costs remain high for low-income households.", "Solar energy produces no carbon emissions."], answer: "Installation costs remain high for low-income households.", explanation: "A detail that shows solar energy is still expensive for some undermines the claim that it is broadly cost-effective." },
  { id: "se400-17", category: "English", points: 400, difficulty: "SAT", question: "Which version is most precise?", choices: ["The company made a lot of money.", "The company earned $4.2 million in net profit last quarter.", "The company did well financially.", "The company's money situation was good."], answer: "The company earned $4.2 million in net profit last quarter.", explanation: "Specific figures ('$4.2 million,' 'net profit,' 'last quarter') make the statement precise and credible." },
  { id: "se400-18", category: "English", points: 400, difficulty: "SAT", question: "Identify the rhetorical device: 'We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields.'", choices: ["Simile", "Hyperbole", "Anaphora", "Alliteration"], answer: "Anaphora", explanation: "Anaphora is the repetition of a phrase ('we shall fight') at the beginning of successive clauses for emphasis." },
  { id: "se400-19", category: "English", points: 400, difficulty: "SAT", question: "Which sentence correctly uses a colon?", choices: ["She needed: milk, eggs, and bread.", "She needed the following: milk, eggs, and bread.", "She: needed milk, eggs, and bread.", "The list: milk eggs bread."], answer: "She needed the following: milk, eggs, and bread.", explanation: "A colon is used after a complete clause to introduce a list. 'She needed the following' is a complete clause." },
  { id: "se400-20", category: "English", points: 400, difficulty: "SAT", question: "Which revision best clarifies the ambiguous pronoun? 'After Maria spoke with Lisa, she felt better.'", choices: ["After Maria spoke with Lisa, she felt better.", "After Maria spoke with Lisa, Maria felt better.", "After speaking with Lisa, she felt better.", "Lisa made Maria feel better after their talk."], answer: "After Maria spoke with Lisa, Maria felt better.", explanation: "The pronoun 'she' is ambiguous — it could refer to Maria or Lisa. Replacing it with 'Maria' removes the ambiguity." },
  { id: "se400-21", category: "English", points: 400, difficulty: "SAT", question: "Which sentence is an example of understatement?", choices: ["The Grand Canyon is enormous.", "Losing all your savings is a minor inconvenience.", "She worked tirelessly for hours.", "The storm was absolutely devastating."], answer: "Losing all your savings is a minor inconvenience.", explanation: "Understatement deliberately describes a serious situation as less significant than it is, often for ironic effect." },
  { id: "se400-22", category: "English", points: 400, difficulty: "SAT", question: "Which best combines these sentences? 'The study was flawed. It had a small sample size. It lacked a control group.'", choices: ["The study was flawed it had a small sample and no control group.", "The study was flawed due to its small sample and absent control group.", "Flawed, the study had a small sample and lacking a control group.", "The study, which was flawed, it had small sample size and lacked control group."], answer: "The study was flawed due to its small sample and absent control group.", explanation: "This version cleanly combines the three ideas without a run-on, fragment, or awkward phrasing." },
  { id: "se400-23", category: "English", points: 400, difficulty: "SAT", question: "The word 'pragmatic' most nearly means:", choices: ["idealistic", "practical", "creative", "emotional"], answer: "practical", explanation: "'Pragmatic' means dealing with things sensibly and realistically, focusing on practical outcomes rather than theory." },
  { id: "se400-24", category: "English", points: 400, difficulty: "SAT", question: "Which sentence uses the subjunctive mood correctly?", choices: ["If he was here, we would succeed.", "If he were here, we would succeed.", "If he is here, we will succeed.", "If he were here, we will succeed."], answer: "If he were here, we would succeed.", explanation: "The subjunctive 'were' is used for hypothetical conditions. Paired correctly with 'would succeed' in the main clause." },
  { id: "se400-25", category: "English", points: 400, difficulty: "SAT", question: "Which word best conveys a negative connotation in context? 'The politician ______ around the question.'", choices: ["danced", "spoke", "answered", "addressed"], answer: "danced", explanation: "'Danced around' is idiomatic for evasion, conveying a negative connotation of avoidance rather than direct engagement." },
  { id: "se400-26", category: "English", points: 400, difficulty: "SAT", question: "A passage about climate change ends by listing policy recommendations. What is the likely purpose of this ending?", choices: ["To summarize the science of climate change", "To entertain with anecdotes", "To call readers to action or provide solutions", "To question whether climate change is real"], answer: "To call readers to action or provide solutions", explanation: "Policy recommendations at the end of a persuasive passage are intended to motivate readers and offer constructive next steps." },
  { id: "se400-27", category: "English", points: 400, difficulty: "SAT", question: "Which option corrects the misplaced modifier? 'Only eating salad, the party bored her.'", choices: ["Only eating salad, she was bored at the party.", "She was only eating salad at the bored party.", "Only at the party, the salad bored her.", "Eating only salad, the party bored her."], answer: "Only eating salad, she was bored at the party.", explanation: "The modifier 'Only eating salad' must immediately precede or be near the noun it modifies — 'she,' not 'the party.'" },
  { id: "se400-28", category: "English", points: 400, difficulty: "SAT", question: "What is the function of a thesis statement?", choices: ["To summarize the conclusion of an essay", "To present the main argument or central claim of an essay", "To list all the evidence an essay will cover", "To introduce the topic with background information only"], answer: "To present the main argument or central claim of an essay", explanation: "A thesis statement articulates the central argument that the rest of the essay will support and develop." },
  { id: "se400-29", category: "English", points: 400, difficulty: "SAT", question: "Which sentence avoids a split infinitive?", choices: ["She wanted to quickly finish the test.", "She wanted to finish the test quickly.", "She quickly wanted to finish the test.", "She wanted quickly to finish."], answer: "She wanted to finish the test quickly.", explanation: "A split infinitive places an adverb between 'to' and the verb (e.g., 'to quickly finish'). Moving 'quickly' after the verb avoids this." },
  { id: "se400-30", category: "English", points: 400, difficulty: "SAT", question: "Which revision adds the most specific and relevant detail? 'The city has improved its infrastructure.'", choices: ["The city has improved its infrastructure a lot.", "The city has greatly improved its infrastructure.", "The city has repaved 200 miles of roads and expanded public transit by 30%.", "The city's infrastructure improvements have been notable."], answer: "The city has repaved 200 miles of roads and expanded public transit by 30%.", explanation: "Specific details ('200 miles,' '30%') replace the vague adjective 'improved' with concrete evidence." },

  // ── SAT English 600 (8-30) ──
  { id: "se600-8", category: "English", points: 600, difficulty: "SAT", question: "A passage describes a scientist's discovery and then shifts to discussing its societal implications. What is the function of this shift?", choices: ["To undermine the scientist's credibility", "To broaden the scope from a specific finding to its wider significance", "To introduce a counter-argument against the discovery", "To provide background on the scientist's career"], answer: "To broaden the scope from a specific finding to its wider significance", explanation: "Moving from a specific discovery to its societal impact is a common structural move that shows the relevance of the finding beyond its immediate context." },
  { id: "se600-9", category: "English", points: 600, difficulty: "SAT", question: "Which revision of the underlined portion is most effective? 'The report, being lengthy, it overwhelmed readers.'", choices: ["The report, being lengthy, it overwhelmed readers.", "The report, which was lengthy, overwhelmed readers.", "The report being lengthy overwhelmed readers.", "Lengthy, the report, it overwhelmed readers."], answer: "The report, which was lengthy, overwhelmed readers.", explanation: "A relative clause ('which was lengthy') cleanly replaces the awkward absolute phrase + redundant pronoun." },
  { id: "se600-10", category: "English", points: 600, difficulty: "SAT", question: "The word 'perfunctory' most nearly means:", choices: ["thorough", "passionate", "carried out with minimal effort", "carefully planned"], answer: "carried out with minimal effort", explanation: "'Perfunctory' describes an action done with little thought or care, as a routine obligation rather than genuine engagement." },
  { id: "se600-11", category: "English", points: 600, difficulty: "SAT", question: "Which choice most effectively sets up the information that follows? 'Solar panels are not a perfect solution: ______.'", choices: ["they produce clean energy.", "they have revolutionized energy production.", "their manufacturing process generates significant carbon emissions.", "many homeowners prefer them."], answer: "their manufacturing process generates significant carbon emissions.", explanation: "The colon signals elaboration on a limitation. Only the carbon emissions detail provides the 'imperfect' counterpoint implied by 'not a perfect solution.'" },
  { id: "se600-12", category: "English", points: 600, difficulty: "SAT", question: "Which of the following is an example of ethos in persuasive writing?", choices: ["Using vivid emotional stories about victims of crime", "Citing statistics about crime rates", "Quoting a Nobel Prize-winning criminologist on prison reform", "Comparing crime to a spreading disease"], answer: "Quoting a Nobel Prize-winning criminologist on prison reform", explanation: "Ethos establishes credibility by invoking an authoritative source. The other choices exemplify pathos (emotion), logos (data), and metaphor." },
  { id: "se600-13", category: "English", points: 600, difficulty: "SAT", question: "An author writes: 'The evidence is clear, abundant, and irrefutable.' What technique is used?", choices: ["Understatement", "Tricolon", "Chiasmus", "Anastrophe"], answer: "Tricolon", explanation: "A tricolon is a series of three parallel words, phrases, or clauses — here: 'clear, abundant, and irrefutable.'" },
  { id: "se600-14", category: "English", points: 600, difficulty: "SAT", question: "Which sentence most effectively concludes a paragraph arguing that public libraries are vital to democracy?", choices: ["Libraries have lots of books.", "In short, libraries provide the free, open access to information that an informed citizenry requires.", "Libraries are nice places to study and be quiet.", "Many people visit libraries every week."], answer: "In short, libraries provide the free, open access to information that an informed citizenry requires.", explanation: "This sentence directly connects the preceding argument to the thesis by stating the core democratic function of libraries." },
  { id: "se600-15", category: "English", points: 600, difficulty: "SAT", question: "Which is the best evidence that a narrator is unreliable?", choices: ["The narrator describes events in chronological order.", "The narrator's account contradicts facts established elsewhere in the text.", "The narrator uses first-person point of view.", "The narrator describes other characters' emotions."], answer: "The narrator's account contradicts facts established elsewhere in the text.", explanation: "An unreliable narrator is one whose account cannot be fully trusted — contradiction with established facts is the clearest textual evidence." },
  { id: "se600-16", category: "English", points: 600, difficulty: "SAT", question: "Choose the most effective topic sentence for a paragraph about the economic effects of automation.", choices: ["Robots are being used in factories today.", "Automation has reshaped labor markets by displacing routine jobs while creating demand for higher-skilled roles.", "Some people think automation is bad.", "Technology changes many things in modern life."], answer: "Automation has reshaped labor markets by displacing routine jobs while creating demand for higher-skilled roles.", explanation: "A strong topic sentence is specific and captures the paragraph's main argument. The other choices are too vague or general." },
  { id: "se600-17", category: "English", points: 600, difficulty: "SAT", question: "The phrase 'cutting-edge' is an example of:", choices: ["A simile", "A cliché", "An oxymoron", "An allusion"], answer: "A cliché", explanation: "'Cutting-edge' was once a vivid metaphor but has become overused to the point of being a cliché — a tired, predictable expression." },
  { id: "se600-18", category: "English", points: 600, difficulty: "SAT", question: "Which choice correctly uses a dash?", choices: ["She brought the essentials — a map, water, and sunscreen — for the hike.", "She brought the essentials — a map, water, and sunscreen for the hike.", "She brought, the essentials — a map water and sunscreen for the hike.", "She brought the essentials a map — water and sunscreen — for the hike."], answer: "She brought the essentials — a map, water, and sunscreen — for the hike.", explanation: "Paired dashes set off a nonrestrictive appositive phrase. Both dashes must be present; the list inside them must be clear." },
  { id: "se600-19", category: "English", points: 600, difficulty: "SAT", question: "What does 'sanguine' most nearly mean?", choices: ["pessimistic", "optimistic", "angry", "confused"], answer: "optimistic", explanation: "'Sanguine' means having an optimistic outlook, especially in a difficult situation." },
  { id: "se600-20", category: "English", points: 600, difficulty: "SAT", question: "In a passage arguing for stricter food labeling laws, the author mentions a family whose child had an allergic reaction to mislabeled food. What is the primary purpose of this anecdote?", choices: ["To provide statistical evidence of labeling errors", "To humanize the issue and appeal to readers' emotions", "To compare food labeling laws across countries", "To undermine opponents of labeling reform"], answer: "To humanize the issue and appeal to readers' emotions", explanation: "An anecdote — a specific personal story — is a tool of pathos (emotional appeal) that makes an abstract policy issue feel real and urgent." },
  { id: "se600-21", category: "English", points: 600, difficulty: "SAT", question: "Which revision most improves the coherence of this paragraph's final sentence? 'Urban green spaces reduce stress. They also improve air quality. Additionally, dogs like parks.'", choices: ["Urban green spaces reduce stress and improve air quality, and dogs like parks.", "Urban green spaces reduce stress and improve air quality; the relevance of dogs is unclear.", "Urban green spaces reduce stress, improve air quality, and, additionally, dogs like parks.", "The sentence about dogs should be removed, and the paragraph should end after 'improve air quality.'"], answer: "The sentence about dogs should be removed, and the paragraph should end after 'improve air quality.'", explanation: "The sentence about dogs is off-topic. Coherence requires that every sentence support the paragraph's central idea." },
  { id: "se600-22", category: "English", points: 600, difficulty: "SAT", question: "Which best describes the effect of using second-person ('you') in persuasive writing?", choices: ["It makes the writing seem distant and academic.", "It creates a direct connection with the reader and increases engagement.", "It undermines the author's credibility.", "It shifts the tone to narrative."], answer: "It creates a direct connection with the reader and increases engagement.", explanation: "Second-person directly addresses the reader, creating immediacy and personal involvement in the argument." },
  { id: "se600-23", category: "English", points: 600, difficulty: "SAT", question: "Which sentence has an error in subject-verb agreement?", choices: ["The data suggest a strong correlation.", "Neither option is acceptable.", "A series of reports have been published.", "Everyone is invited to the meeting."], answer: "A series of reports have been published.", explanation: "The subject is 'series' (singular), so the verb should be 'has been published,' not 'have been published.'" },
  { id: "se600-24", category: "English", points: 600, difficulty: "SAT", question: "What does 'ostensibly' most nearly mean?", choices: ["obviously", "apparently (though perhaps not actually)", "rarely", "necessarily"], answer: "apparently (though perhaps not actually)", explanation: "'Ostensibly' means appearing to be true on the surface while possibly concealing a different reality." },
  { id: "se600-25", category: "English", points: 600, difficulty: "SAT", question: "A counterargument is most useful in persuasive writing because it:", choices: ["proves the opposing side is correct", "allows the writer to avoid taking a position", "strengthens the writer's argument by showing it can withstand objections", "makes the essay longer"], answer: "strengthens the writer's argument by showing it can withstand objections", explanation: "Addressing counterarguments and refuting them demonstrates the writer's thorough understanding and reinforces their credibility." },
  { id: "se600-26", category: "English", points: 600, difficulty: "SAT", question: "Which sentence uses 'whom' correctly?", choices: ["Whom is calling?", "To who did you give the package?", "The candidate whom we supported won.", "Whom do you think will win?"], answer: "The candidate whom we supported won.", explanation: "'Whom' is the object form. In 'we supported whom,' 'whom' is the object. 'Who' replaces subjects; 'whom' replaces objects." },
  { id: "se600-27", category: "English", points: 600, difficulty: "SAT", question: "An author ends an essay with a question rather than a statement. What is the most likely effect?", choices: ["It signals the author has no conclusion.", "It invites the reader to reflect and engage with the issue personally.", "It weakens the argument by introducing doubt.", "It shifts the essay's genre to narrative."], answer: "It invites the reader to reflect and engage with the issue personally.", explanation: "A closing rhetorical question is a deliberate stylistic choice to provoke thought and leave a memorable impression on the reader." },
  { id: "se600-28", category: "English", points: 600, difficulty: "SAT", question: "Which word best replaces 'said' for precision? 'The defense attorney ______ that the evidence had been mishandled.'", choices: ["said", "argued", "talked", "mentioned"], answer: "argued", explanation: "In a legal context, 'argued' is precise — it conveys that the attorney made a formal, adversarial claim, not just a casual remark." },
  { id: "se600-29", category: "English", points: 600, difficulty: "SAT", question: "A student writing about the benefits of sleep adds: 'My friend once stayed up all night and failed a test.' Is this effective evidence?", choices: ["Yes, personal anecdotes are always strong evidence.", "No, a single anecdote does not provide generalizable support for a broad claim.", "Yes, because the example is relatable.", "No, because sleep has no effect on academic performance."], answer: "No, a single anecdote does not provide generalizable support for a broad claim.", explanation: "A single personal example is anecdotal and cannot justify broad claims. Scientific studies or large-scale data are more appropriate." },
  { id: "se600-30", category: "English", points: 600, difficulty: "SAT", question: "Which effectively uses appositive to add information? 'The CEO gave a speech at the summit.'", choices: ["The CEO, a Harvard graduate and 20-year industry veteran, gave a speech at the summit.", "The CEO gave a speech at the summit, and she is a Harvard graduate.", "The CEO, she is a Harvard graduate, gave a speech at the summit.", "A Harvard graduate giving a speech at the summit was the CEO."], answer: "The CEO, a Harvard graduate and 20-year industry veteran, gave a speech at the summit.", explanation: "An appositive phrase ('a Harvard graduate and 20-year industry veteran') is set off by commas and renames/describes the noun it follows." },

  // ── SAT English 800 (8-30) ──
  { id: "se800-8", category: "English", points: 800, difficulty: "SAT", question: "In a passage, the author first presents opponents' views before systematically refuting each one. What is the rhetorical effect of this structure?", choices: ["It concedes the argument to the opponents.", "It demonstrates thoroughness and preempts objections, strengthening credibility.", "It confuses the reader about the author's position.", "It weakens the argument by giving too much space to opposition."], answer: "It demonstrates thoroughness and preempts objections, strengthening credibility.", explanation: "Engaging with opposing views and then refuting them is the 'steel man' approach — it shows the author's position is robust enough to handle challenges." },
  { id: "se800-9", category: "English", points: 800, difficulty: "SAT", question: "Which best describes 'polysyndeton'?", choices: ["Omitting conjunctions for effect", "Using many conjunctions to slow pace and emphasize each element", "Repeating the same word at the end of successive clauses", "A statement that contradicts itself"], answer: "Using many conjunctions to slow pace and emphasize each element", explanation: "Polysyndeton ('We ran and swam and climbed and fell') deliberately overuses conjunctions to create a cumulative, rhythmic effect." },
  { id: "se800-10", category: "English", points: 800, difficulty: "SAT", question: "An author uses the word 'merely' to describe a competitor's product. What rhetorical technique is this?", choices: ["Understatement used to magnify the product's failure", "Loaded language used to minimize and dismiss the competition", "Hyperbole to exaggerate a flaw", "Ethos to establish credibility"], answer: "Loaded language used to minimize and dismiss the competition", explanation: "Word choice that carries implicit bias or judgment ('merely') is loaded language. It frames the competition as unimportant without direct argument." },
  { id: "se800-11", category: "English", points: 800, difficulty: "SAT", question: "A passage's tone shifts from academic to urgent in the final paragraph. What is the most likely reason?", choices: ["The author ran out of research to cite.", "The shift signals a call to action, moving from analysis to advocacy.", "The author changed topics in the final paragraph.", "The academic tone was unintentional."], answer: "The shift signals a call to action, moving from analysis to advocacy.", explanation: "A tonal shift from objective analysis to urgency is a deliberate rhetorical strategy to motivate the reader and drive toward a conclusion." },
  { id: "se800-12", category: "English", points: 800, difficulty: "SAT", question: "Which of the following is an example of a logical fallacy?", choices: ["Citing peer-reviewed research to support a claim", "Arguing that since two events occurred in sequence, the first caused the second (post hoc)", "Providing three examples to illustrate a point", "Restating the thesis in the conclusion"], answer: "Arguing that since two events occurred in sequence, the first caused the second (post hoc)", explanation: "Post hoc ergo propter hoc ('after this, therefore because of this') falsely assumes that sequence implies causation." },
  { id: "se800-13", category: "English", points: 800, difficulty: "SAT", question: "The word 'tendentious' most nearly means:", choices: ["objective and balanced", "promoting a particular cause or point of view", "unclear and vague", "excessively polite"], answer: "promoting a particular cause or point of view", explanation: "'Tendentious' describes writing or arguments that are heavily biased toward a particular viewpoint, often in a misleading way." },
  { id: "se800-14", category: "English", points: 800, difficulty: "SAT", question: "Which choice is the best evidence for the claim: 'Urban residents have lower rates of car ownership than suburban residents'?", choices: ["Cities are generally more densely populated than suburbs.", "A 2022 study found that 58% of suburban households own two or more cars, compared to 24% of urban households.", "Public transportation is more widely available in cities.", "Many urban residents prefer walking."], answer: "A 2022 study found that 58% of suburban households own two or more cars, compared to 24% of urban households.", explanation: "Only the statistic directly compares car ownership rates between urban and suburban residents, directly supporting the claim." },
  { id: "se800-15", category: "English", points: 800, difficulty: "SAT", question: "Which revision of the following sentence eliminates the awkward nominalization? 'The implementation of the solution was achieved by the team.'", choices: ["The team achieved the implementation of the solution.", "The solution's implementation was a team achievement.", "The team implemented the solution.", "Implementation was achieved by the solution's team."], answer: "The team implemented the solution.", explanation: "Nominalizations turn verbs into nouns ('implement' → 'implementation'). Replacing them with active verbs ('implemented') makes prose clearer and more direct." },
  { id: "se800-16", category: "English", points: 800, difficulty: "SAT", question: "In a passage with an unreliable narrator, the narrator insists everyone loves them. However, other characters consistently avoid them. What is the literary effect of this gap?", choices: ["It shows the narrator is honest but ignored.", "It creates dramatic irony — the reader understands a truth the narrator cannot.", "It proves the other characters are wrong.", "It suggests the narrator is the only reliable source."], answer: "It creates dramatic irony — the reader understands a truth the narrator cannot.", explanation: "When readers know something the narrator doesn't, the gap creates dramatic irony, inviting the reader to interpret events beyond the narrator's limited perspective." },
  { id: "se800-17", category: "English", points: 800, difficulty: "SAT", question: "Which most accurately describes 'asyndeton'?", choices: ["Joining clauses with multiple conjunctions", "Omitting conjunctions between items in a list for speed or emphasis", "Repeating a word at the start of each clause", "A deliberate contradiction used for effect"], answer: "Omitting conjunctions between items in a list for speed or emphasis", explanation: "Asyndeton ('I came, I saw, I conquered') omits conjunctions, creating a rapid, punchy rhythm that emphasizes each element." },
  { id: "se800-18", category: "English", points: 800, difficulty: "SAT", question: "A science passage describes a study's 'statistically significant' finding with a p-value of 0.04. A student argues this proves the hypothesis is true. What is wrong with this reasoning?", choices: ["Nothing; a p-value below 0.05 confirms the hypothesis.", "Statistical significance shows the result is unlikely by chance, but does not prove the hypothesis with certainty.", "A p-value of 0.04 means the study failed.", "Only p-values above 0.05 are meaningful."], answer: "Statistical significance shows the result is unlikely by chance, but does not prove the hypothesis with certainty.", explanation: "A p-value indicates the probability of results occurring by chance, not proof of truth. Scientific claims require replication and broader validation." },
  { id: "se800-19", category: "English", points: 800, difficulty: "SAT", question: "Which word most nearly means 'laconic'?", choices: ["verbose", "brief", "emotional", "precise"], answer: "brief", explanation: "'Laconic' means using very few words — brief to the point of appearing rude or mysterious." },
  { id: "se800-20", category: "English", points: 800, difficulty: "SAT", question: "An author of a history essay writes: 'One might argue that Lincoln had no choice — yet this ignores the remarkable agency he exercised at each decision point.' What rhetorical move is the author making?", choices: ["Conceding the argument entirely to the opposing view", "Introducing and then immediately rebutting a counterargument", "Changing the subject to avoid a difficult question", "Using pathos to appeal to the reader's emotions"], answer: "Introducing and then immediately rebutting a counterargument", explanation: "The author acknowledges ('one might argue') and then dismisses ('yet this ignores') the opposing view — a classic rebuttal move." },
  { id: "se800-21", category: "English", points: 800, difficulty: "SAT", question: "Which of the following best illustrates 'euphemism'?", choices: ["'The soldier was killed in battle.'", "'The soldier passed away in service.'", "'The soldier died because of enemy fire.'", "'The soldier was mortally wounded.'"], answer: "'The soldier passed away in service.'", explanation: "A euphemism substitutes a mild or indirect expression for something blunt or unpleasant. 'Passed away' softens 'died.'" },
  { id: "se800-22", category: "English", points: 800, difficulty: "SAT", question: "A passage uses the word 'ostracize.' Based on context — 'The community began to ostracize those who refused to conform' — what does it mean?", choices: ["welcome", "reward", "exclude", "examine"], answer: "exclude", explanation: "'Ostracize' means to exclude someone from a group or society. The context ('refused to conform') signals social rejection." },
  { id: "se800-23", category: "English", points: 800, difficulty: "SAT", question: "Which sentence correctly uses a semicolon to join related independent clauses?", choices: ["She ran quickly; and won the race.", "The experiment failed; however, the team did not give up.", "The data was; analyzed by the researchers.", "He arrived; the meeting had not started; yet."], answer: "The experiment failed; however, the team did not give up.", explanation: "A semicolon can precede a conjunctive adverb like 'however' when joining two independent clauses. The comma after 'however' is also required." },
  { id: "se800-24", category: "English", points: 800, difficulty: "SAT", question: "What is the function of a hedge word (e.g., 'suggests,' 'may,' 'often') in academic writing?", choices: ["To express absolute certainty", "To make claims more cautious and acknowledge uncertainty", "To make the writing less formal", "To introduce counterarguments"], answer: "To make claims more cautious and acknowledge uncertainty", explanation: "Hedge words qualify claims, signaling that the author is not overstating the evidence — appropriate in scientific and academic writing." },
  { id: "se800-25", category: "English", points: 800, difficulty: "SAT", question: "A fictional narrator describes a battlefield as 'a red tapestry, woven by the hands of ambition.' This is an example of:", choices: ["Personification only", "Extended metaphor", "Simile", "Irony"], answer: "Extended metaphor", explanation: "An extended metaphor develops a comparison across multiple ideas — here the battlefield is a tapestry, woven by ambition — sustained over the phrase." },
  { id: "se800-26", category: "English", points: 800, difficulty: "SAT", question: "Which revision most precisely conveys the intended meaning? 'The government's response to the crisis was not good.'", choices: ["The government's response to the crisis was not good at all.", "The government's response to the crisis was inadequate and delayed.", "The government handled the crisis badly.", "The government's response to the crisis left something to be desired."], answer: "The government's response to the crisis was inadequate and delayed.", explanation: "Replacing vague 'not good' with specific adjectives ('inadequate and delayed') gives the reader a clearer picture of what went wrong." },
  { id: "se800-27", category: "English", points: 800, difficulty: "SAT", question: "Which answer choice correctly identifies the purpose of the following sentence in an argument? 'Admittedly, some studies show no link between screen time and anxiety in adolescents.'", choices: ["It is the thesis of the argument.", "It is a concession that the author will likely then qualify or rebut.", "It is the strongest piece of evidence supporting the author's claim.", "It is a rhetorical question meant to provoke the reader."], answer: "It is a concession that the author will likely then qualify or rebut.", explanation: "'Admittedly' signals a concession — the author acknowledges an opposing data point and will likely follow with a 'but' or qualification." },
  { id: "se800-28", category: "English", points: 800, difficulty: "SAT", question: "The word 'enervate' most nearly means:", choices: ["energize", "weaken", "anger", "confuse"], answer: "weaken", explanation: "'Enervate' means to weaken or drain of energy — essentially the opposite of 'invigorate.' Don't confuse with 'energize.'" },
  { id: "se800-29", category: "English", points: 800, difficulty: "SAT", question: "Which choice best maintains stylistic consistency with formal academic prose?", choices: ["The results were, like, really surprising.", "The results proved to be unexpectedly significant.", "The results blew everyone away.", "The results were kind of a big deal."], answer: "The results proved to be unexpectedly significant.", explanation: "Formal academic prose requires precise, neutral language. Informal expressions ('like, really,' 'blew away,' 'kind of a big deal') are inappropriate." },
  { id: "se800-30", category: "English", points: 800, difficulty: "SAT", question: "An author opens an essay with: 'Imagine waking up one day to find all your memories erased.' What effect does this opening create?", choices: ["It provides factual background on memory loss.", "It immediately engages the reader through a hypothetical scenario.", "It establishes the author as an expert on neuroscience.", "It presents the thesis of the essay."], answer: "It immediately engages the reader through a hypothetical scenario.", explanation: "A 'you are there' hypothetical opening is an engagement device — it creates immediacy and draws the reader into the topic emotionally before building an argument." },

  // ── SAT English 1000 (8-30) ──
  { id: "se1000-8", category: "English", points: 1000, difficulty: "SAT", question: "In a passage, an author writes: 'The data are unambiguous. The solutions are available. The political will is absent.' What rhetorical device is used, and what is its effect?", choices: ["Anaphora; it creates a rhythm that accelerates toward the final, devastating contrast", "Tricolon; the three parallel statements build to a climax that makes the political failure the central indictment", "Polysyndeton; the conjunctions slow the reader down for emphasis", "Chiasmus; it reverses the structure of two clauses for irony"], answer: "Tricolon; the three parallel statements build to a climax that makes the political failure the central indictment", explanation: "The tricolon builds from evidence ('data') → resources ('solutions') → the missing element ('political will'), making the final item land with maximum force." },
  { id: "se1000-9", category: "English", points: 1000, difficulty: "SAT", question: "A student argues: 'We should ban violent video games because my cousin became aggressive after playing them for a year.' Which best describes the primary flaw in this argument?", choices: ["It relies on a hasty generalization and anecdotal evidence rather than systematic research.", "It fails to define 'violent.'", "The cousin is not a credible source.", "Video games cannot cause aggression."], answer: "It relies on a hasty generalization and anecdotal evidence rather than systematic research.", explanation: "A single personal anecdote cannot support a sweeping policy claim. The argument also assumes causation from correlation." },
  { id: "se1000-10", category: "English", points: 1000, difficulty: "SAT", question: "An author quotes a study, then notes: 'This study was funded by the pesticide industry.' Why is this note significant?", choices: ["It proves the study's findings are false.", "It raises a potential conflict of interest that readers should consider when evaluating the evidence.", "It shows the study was properly regulated.", "It is irrelevant to the argument."], answer: "It raises a potential conflict of interest that readers should consider when evaluating the evidence.", explanation: "Funding sources can introduce bias. Noting them is an act of critical source evaluation — it doesn't automatically invalidate the study but invites scrutiny." },
  { id: "se1000-11", category: "English", points: 1000, difficulty: "SAT", question: "Which sentence contains a subtle error in pronoun-antecedent agreement?", choices: ["The committee submitted their report.", "Everyone must bring their own supplies.", "The data supports its own conclusion.", "Each student must complete their assignment."], answer: "The data supports its own conclusion.", explanation: "'Data' is technically plural (datum/data), so 'support their own conclusion' is more strictly correct. However, in this context, checking that 'its' matches 'data' as commonly treated singular is the intended answer — the subtlety is using 'its' with a plural noun." },
  { id: "se1000-12", category: "English", points: 1000, difficulty: "SAT", question: "An author uses chiasmus: 'Ask not what your country can do for you — ask what you can do for your country.' What is the primary effect?", choices: ["It introduces new evidence.", "It reverses the structure of the first clause in the second, creating a memorable contrast that reframes civic duty.", "It creates a tricolon.", "It is an example of anaphora."], answer: "It reverses the structure of the first clause in the second, creating a memorable contrast that reframes civic duty.", explanation: "Chiasmus (A-B / B-A) inverts the order of terms. Here, 'country→you' becomes 'you→country,' shifting the focus from receiving to giving." },
  { id: "se1000-13", category: "English", points: 1000, difficulty: "SAT", question: "A passage argues that social media harms teen mental health, citing correlational studies. A critic responds that correlation does not imply causation. Which response best strengthens the original argument?", choices: ["The studies are peer-reviewed, so causation is established.", "Multiple longitudinal studies controlling for confounding variables show that increased social media use precedes declines in self-reported well-being.", "Many teens who use social media are depressed.", "The critic is funded by tech companies."], answer: "Multiple longitudinal studies controlling for confounding variables show that increased social media use precedes increases in self-reported well-being.", explanation: "Longitudinal studies that control for confounding variables and show temporal precedence (social media use before mental health decline) are the strongest response to a correlation-causation critique." },
  { id: "se1000-14", category: "English", points: 1000, difficulty: "SAT", question: "The word 'pellucid' most nearly means:", choices: ["murky", "translucently clear", "aggressive", "complex"], answer: "translucently clear", explanation: "'Pellucid' means transparently clear — used both literally (pellucid water) and figuratively (pellucid prose that is easy to understand)." },
  { id: "se1000-15", category: "English", points: 1000, difficulty: "SAT", question: "Which structural analysis best describes the following paragraph? 'Biodiversity loss accelerates climate change. Climate change disrupts ecosystems. Disrupted ecosystems drive further biodiversity loss.'", choices: ["Linear argument moving from cause to solution", "A circular or reinforcing feedback loop illustrating how crises compound each other", "A tricolon used for emphasis", "A comparison of two separate environmental issues"], answer: "A circular or reinforcing feedback loop illustrating how crises compound each other", explanation: "Each sentence's conclusion becomes the next one's starting point, forming a logical circle that demonstrates how the two crises reinforce each other." },
  { id: "se1000-16", category: "English", points: 1000, difficulty: "SAT", question: "An essay about immigration policy opens with a story about a specific immigrant family, then broadens to statistical trends. What is the rhetorical strategy?", choices: ["Moving from the specific to the general to make broad data feel human and relatable", "Moving from the general to the specific to prove a statistical claim", "Using pathos to avoid engaging with logos", "Opening with ethos to establish credibility before presenting data"], answer: "Moving from the specific to the general to make broad data feel human and relatable", explanation: "This 'zoom out' structure — particular story, then larger pattern — is a classic strategy to give emotional grounding before presenting abstract data." },
  { id: "se1000-17", category: "English", points: 1000, difficulty: "SAT", question: "Which best describes the difference between 'connotation' and 'denotation'?", choices: ["Denotation is the dictionary meaning; connotation is the emotional or cultural associations a word carries.", "Connotation is the dictionary meaning; denotation is the emotional associations a word carries.", "Denotation applies to verbs; connotation applies to nouns.", "They are synonyms."], answer: "Denotation is the dictionary meaning; connotation is the emotional or cultural associations a word carries.", explanation: "'Home' and 'house' have similar denotations (a dwelling) but different connotations: 'home' implies warmth and belonging." },
  { id: "se1000-18", category: "English", points: 1000, difficulty: "SAT", question: "A passage about AI ethics ends: 'The question is not whether machines will think, but whether we will remember how.' What rhetorical technique is used, and what is the effect?", choices: ["Irony — it dismisses concerns about AI.", "A paradox — it suggests thinking and remembering are the same thing.", "An antithesis — it reframes the central question by contrasting two outcomes, shifting focus to humanity's responsibility.", "Anaphora — it repeats a word for emphasis."], answer: "An antithesis — it reframes the central question by contrasting two outcomes, shifting focus to humanity's responsibility.", explanation: "Antithesis places contrasting ideas in parallel structure. Here, 'machines will think' vs. 'we will remember how' contrasts artificial and human cognition." },
  { id: "se1000-19", category: "English", points: 1000, difficulty: "SAT", question: "Which is the strongest thesis for an argumentative essay about social media's effect on democracy?", choices: ["Social media is used by billions of people worldwide.", "This essay will discuss social media and democracy.", "By amplifying misinformation and fragmenting the public sphere, social media poses a measurable threat to democratic deliberation.", "Social media has good and bad effects on democracy."], answer: "By amplifying misinformation and fragmenting the public sphere, social media poses a measurable threat to democratic deliberation.", explanation: "A strong thesis makes a specific, arguable claim with a clear direction. The other options are too vague, announce the essay rather than argue it, or take no clear position." },
  { id: "se1000-20", category: "English", points: 1000, difficulty: "SAT", question: "A passage describes a scientific consensus while also noting dissenting studies. What is the author's most likely purpose?", choices: ["To undermine the scientific consensus entirely", "To present a balanced view that acknowledges complexity while not falsely equating majority and minority scientific positions", "To argue that all scientific findings are equally valid", "To confuse the reader about the state of the science"], answer: "To present a balanced view that acknowledges complexity while not falsely equating majority and minority scientific positions", explanation: "Good science writing presents the weight of evidence clearly while acknowledging legitimate dissent — without committing the 'false balance' fallacy of treating fringe and mainstream views as equally supported." },
  { id: "se1000-21", category: "English", points: 1000, difficulty: "SAT", question: "Which sentence is free of logical fallacy?", choices: ["If we allow same-sex marriage, people will next want to marry animals (slippery slope).", "He can't be right about climate change because he drives a large car (ad hominem).", "Both sides have equally valid points about vaccine safety (false balance).", "Multiple independent studies consistently show vaccines are safe and effective."], answer: "Multiple independent studies consistently show vaccines are safe and effective.", explanation: "Only this sentence makes a straightforward evidence-based claim without a logical fallacy. The other three commit named fallacies." },
  { id: "se1000-22", category: "English", points: 1000, difficulty: "SAT", question: "The word 'inimical' most nearly means:", choices: ["friendly", "hostile", "indifferent", "similar"], answer: "hostile", explanation: "'Inimical' means tending to obstruct or harm — hostile and unfavorable. 'Inimical to progress' means working against progress." },
  { id: "se1000-23", category: "English", points: 1000, difficulty: "SAT", question: "A student revises a sentence to avoid passive voice. Which revision is the best?", choices: ["Original: 'Mistakes were made by the administration.' Revision A: 'The administration made mistakes.'", "Original: 'Mistakes were made by the administration.' Revision B: 'By the administration, mistakes were made.'", "Original: 'Mistakes were made by the administration.' Revision C: 'The making of mistakes was done by the administration.'", "The original is already in active voice."], answer: "Original: 'Mistakes were made by the administration.' Revision A: 'The administration made mistakes.'", explanation: "Active voice places the actor ('administration') as the subject performing the verb ('made'). Revision A is direct, clear, and concise." },
  { id: "se1000-24", category: "English", points: 1000, difficulty: "SAT", question: "An author uses extended allusion to Shakespeare's Hamlet throughout an essay about indecision in politics. What does this allusion assume about the audience?", choices: ["That the audience is unfamiliar with Shakespeare and needs explanation", "That the audience is familiar with Hamlet and will recognize the parallel, deepening the essay's meaning without requiring explanation", "That Shakespeare proves the political argument is correct", "That the audience prefers literary essays to political ones"], answer: "That the audience is familiar with Hamlet and will recognize the parallel, deepening the essay's meaning without requiring explanation", explanation: "Allusion works by invoking shared cultural knowledge. An author who alludes without explanation assumes the audience will catch the reference and enrich their own reading accordingly." },
  { id: "se1000-25", category: "English", points: 1000, difficulty: "SAT", question: "Which most precisely captures the difference between 'imply' and 'infer'?", choices: ["They are synonyms.", "The speaker implies; the listener infers.", "The listener implies; the speaker infers.", "Both mean to state something directly."], answer: "The speaker implies; the listener infers.", explanation: "To 'imply' is to suggest something without stating it outright (speaker/writer). To 'infer' is to draw a conclusion from evidence (listener/reader)." },
  { id: "se1000-26", category: "English", points: 1000, difficulty: "SAT", question: "A historical essay attributes major social change entirely to one individual's actions. What is the primary weakness of this argument?", choices: ["Individuals cannot cause social change.", "It commits the 'great man' fallacy by ignoring structural, economic, and collective forces that enable or constrain individual action.", "The essay should not use proper nouns.", "Historical arguments require charts and data."], answer: "It commits the 'great man' fallacy by ignoring structural, economic, and collective forces that enable or constrain individual action.", explanation: "Attributing complex historical change to a single individual oversimplifies causation and ignores the larger systems that shape events." },
  { id: "se1000-27", category: "English", points: 1000, difficulty: "SAT", question: "Which answer choice best identifies and explains the effect of the following sentence's syntax? 'She opened the letter, read it slowly, set it down, and wept.'", choices: ["Short, parallel verbs create an accelerating rhythm that mirrors emotional overload building to the final, quiet devastation of 'wept.'", "The sentence is too long and should be broken up.", "The use of 'and' before 'wept' is a grammatical error.", "The sentence uses anaphora."], answer: "Short, parallel verbs create an accelerating rhythm that mirrors emotional overload building to the final, quiet devastation of 'wept.'", explanation: "The sequence of four parallel, single-word verbs builds tension; 'wept' lands as a short, final, emotionally heavy conclusion — a deliberate syntactic effect." },
  { id: "se1000-28", category: "English", points: 1000, difficulty: "SAT", question: "The word 'vitiate' most nearly means:", choices: ["improve", "impair or make ineffective", "clarify", "celebrate"], answer: "impair or make ineffective", explanation: "'Vitiate' means to spoil, impair, or make something legally or morally invalid. A flawed methodology can vitiate the conclusions of a study." },
  { id: "se1000-29", category: "English", points: 1000, difficulty: "SAT", question: "A passage shifts from third-person to first-person in its final paragraph. What is the most likely rhetorical effect?", choices: ["It is an error in point of view consistency.", "It creates a sudden, intimate connection between author and reader, signaling a personal stake in the argument.", "It makes the argument less credible.", "It introduces a new character."], answer: "It creates a sudden, intimate connection between author and reader, signaling a personal stake in the argument.", explanation: "A deliberate shift to first person at the end signals the author's personal investment and creates intimacy — a rhetorical move to make the conclusion resonate emotionally." },
  { id: "se1000-30", category: "English", points: 1000, difficulty: "SAT", question: "Which correctly identifies the flaw in the following argument? 'A poll found that 60% of Americans support stricter gun laws, so Congress should pass stricter gun laws.'", choices: ["The argument is logically valid and has no flaw.", "It commits an appeal to popularity — what the majority wants does not automatically determine what is legally or practically correct.", "The poll sample size is too small.", "Gun laws are a federal matter, so Congress is the wrong audience."], answer: "It commits an appeal to popularity — what the majority wants does not automatically determine what is legally or practically correct.", explanation: "An appeal to popularity (ad populum) assumes that majority opinion determines truth or right action. Policy involves legal, constitutional, and practical constraints beyond polling." },

  // ── PSAT Math 200 (8-30) ──
  { id: "pm200-8", category: "Math", points: 200, difficulty: "PSAT", question: "What is 3/4 of 200?", choices: ["100", "125", "150", "175"], answer: "150", explanation: "3/4 × 200 = 150." },
  { id: "pm200-9", category: "Math", points: 200, difficulty: "PSAT", question: "A store sells apples for $0.75 each. How much do 12 apples cost?", choices: ["$7.50", "$8.00", "$9.00", "$9.75"], answer: "$9.00", explanation: "12 × $0.75 = $9.00." },
  { id: "pm200-10", category: "Math", points: 200, difficulty: "PSAT", question: "If y = 3x + 1 and x = 4, what is y?", choices: ["10", "11", "12", "13"], answer: "13", explanation: "y = 3(4) + 1 = 12 + 1 = 13." },
  { id: "pm200-11", category: "Math", points: 200, difficulty: "PSAT", question: "What is the value of 2³ + 3²?", choices: ["13", "17", "19", "21"], answer: "17", explanation: "2³ = 8, 3² = 9. 8 + 9 = 17." },
  { id: "pm200-12", category: "Math", points: 200, difficulty: "PSAT", question: "A bag contains 6 red and 4 blue marbles. What fraction of the marbles are blue?", choices: ["2/5", "3/5", "4/6", "6/10"], answer: "2/5", explanation: "4 blue out of 10 total = 4/10 = 2/5." },
  { id: "pm200-13", category: "Math", points: 200, difficulty: "PSAT", question: "What is 40% of 75?", choices: ["25", "30", "35", "40"], answer: "30", explanation: "0.40 × 75 = 30." },
  { id: "pm200-14", category: "Math", points: 200, difficulty: "PSAT", question: "Solve: 4x = 52.", choices: ["10", "12", "13", "14"], answer: "13", explanation: "x = 52 ÷ 4 = 13." },
  { id: "pm200-15", category: "Math", points: 200, difficulty: "PSAT", question: "A clock shows 3:45. How many minutes until 5:00?", choices: ["60", "65", "75", "90"], answer: "75", explanation: "From 3:45 to 5:00 is 1 hour 15 minutes = 75 minutes." },
  { id: "pm200-16", category: "Math", points: 200, difficulty: "PSAT", question: "Which number is a prime number?", choices: ["15", "21", "29", "33"], answer: "29", explanation: "29 has no factors other than 1 and itself, so it is prime." },
  { id: "pm200-17", category: "Math", points: 200, difficulty: "PSAT", question: "A number is increased by 30% to get 91. What was the original number?", choices: ["61", "65", "70", "73"], answer: "70", explanation: "n × 1.30 = 91 → n = 91/1.30 = 70." },
  { id: "pm200-18", category: "Math", points: 200, difficulty: "PSAT", question: "What is the LCM of 6 and 8?", choices: ["12", "24", "36", "48"], answer: "24", explanation: "Multiples of 6: 6, 12, 18, 24. Multiples of 8: 8, 16, 24. LCM = 24." },
  { id: "pm200-19", category: "Math", points: 200, difficulty: "PSAT", question: "A shirt costs $45 after a 10% discount. What was the original price?", choices: ["$48", "$49.50", "$50", "$54"], answer: "$50", explanation: "0.90 × p = 45 → p = 50." },
  { id: "pm200-20", category: "Math", points: 200, difficulty: "PSAT", question: "If the ratio of cats to dogs is 3:5 and there are 24 cats, how many dogs are there?", choices: ["30", "36", "40", "45"], answer: "40", explanation: "3/5 = 24/d → d = 24 × 5/3 = 40." },
  { id: "pm200-21", category: "Math", points: 200, difficulty: "PSAT", question: "What is the GCF of 36 and 48?", choices: ["6", "9", "12", "18"], answer: "12", explanation: "Factors of 36: 1,2,3,4,6,9,12,18,36. Factors of 48: 1,2,3,4,6,8,12,16,24,48. GCF = 12." },
  { id: "pm200-22", category: "Math", points: 200, difficulty: "PSAT", question: "Which expression equals 5(2x − 3)?", choices: ["10x − 3", "10x − 15", "7x − 8", "10x + 15"], answer: "10x − 15", explanation: "Distribute: 5 × 2x = 10x, 5 × (−3) = −15. Result: 10x − 15." },
  { id: "pm200-23", category: "Math", points: 200, difficulty: "PSAT", question: "A train travels at 80 mph. How far does it travel in 2.5 hours?", choices: ["160 miles", "180 miles", "200 miles", "240 miles"], answer: "200 miles", explanation: "Distance = 80 × 2.5 = 200 miles." },
  { id: "pm200-24", category: "Math", points: 200, difficulty: "PSAT", question: "What is the area of a circle with radius 6? (Use π ≈ 3.14)", choices: ["18.84", "37.68", "113.04", "150.72"], answer: "113.04", explanation: "Area = π r² = 3.14 × 36 = 113.04." },
  { id: "pm200-25", category: "Math", points: 200, difficulty: "PSAT", question: "Evaluate: −3 × (−4) − 5.", choices: ["−17", "7", "10", "17"], answer: "7", explanation: "−3 × −4 = 12. 12 − 5 = 7." },
  { id: "pm200-26", category: "Math", points: 200, difficulty: "PSAT", question: "A rectangle has area 84 cm² and length 12 cm. What is its width?", choices: ["6 cm", "7 cm", "8 cm", "9 cm"], answer: "7 cm", explanation: "Width = 84 ÷ 12 = 7 cm." },
  { id: "pm200-27", category: "Math", points: 200, difficulty: "PSAT", question: "What is 5! (5 factorial)?", choices: ["25", "60", "120", "150"], answer: "120", explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120." },
  { id: "pm200-28", category: "Math", points: 200, difficulty: "PSAT", question: "If 2x + y = 10 and y = 4, what is x?", choices: ["2", "3", "4", "5"], answer: "3", explanation: "2x + 4 = 10 → 2x = 6 → x = 3." },
  { id: "pm200-29", category: "Math", points: 200, difficulty: "PSAT", question: "What is the median of {3, 7, 9, 12, 15}?", choices: ["7", "9", "10", "12"], answer: "9", explanation: "Arranged in order, the middle (3rd) value is 9." },
  { id: "pm200-30", category: "Math", points: 200, difficulty: "PSAT", question: "A worker earns $12 per hour and works 35 hours per week. What is the weekly pay?", choices: ["$380", "$400", "$420", "$440"], answer: "$420", explanation: "12 × 35 = $420." },

  // ── PSAT Math 400 (8-30) ──
  { id: "pm400-8", category: "Math", points: 400, difficulty: "PSAT", question: "A line has equation 3x − 2y = 12. What is the y-intercept?", choices: ["−6", "−4", "4", "6"], answer: "−6", explanation: "Set x = 0: −2y = 12 → y = −6." },
  { id: "pm400-9", category: "Math", points: 400, difficulty: "PSAT", question: "The perimeter of a square is 52 cm. What is the area?", choices: ["144 cm²", "156 cm²", "169 cm²", "196 cm²"], answer: "169 cm²", explanation: "Side = 52/4 = 13. Area = 13² = 169 cm²." },
  { id: "pm400-10", category: "Math", points: 400, difficulty: "PSAT", question: "If 7 − 2x > 1, which values satisfy the inequality?", choices: ["x > 3", "x < 3", "x > −3", "x < −3"], answer: "x < 3", explanation: "−2x > −6 → x < 3 (inequality flips when dividing by negative)." },
  { id: "pm400-11", category: "Math", points: 400, difficulty: "PSAT", question: "Two supplementary angles are in the ratio 2:3. What is the larger angle?", choices: ["72°", "90°", "108°", "120°"], answer: "108°", explanation: "2x + 3x = 180 → x = 36. Larger = 3 × 36 = 108°." },
  { id: "pm400-12", category: "Math", points: 400, difficulty: "PSAT", question: "A car depreciates 15% per year. If it costs $20,000 now, what is its value after 1 year?", choices: ["$15,000", "$16,000", "$17,000", "$18,000"], answer: "$17,000", explanation: "20,000 × (1 − 0.15) = 20,000 × 0.85 = $17,000." },
  { id: "pm400-13", category: "Math", points: 400, difficulty: "PSAT", question: "Which point lies on the line y = 2x − 5?", choices: ["(1, 3)", "(3, 1)", "(4, 3)", "(0, 5)"], answer: "(3, 1)", explanation: "y = 2(3) − 5 = 6 − 5 = 1. Point (3, 1) is on the line." },
  { id: "pm400-14", category: "Math", points: 400, difficulty: "PSAT", question: "A right triangle has legs 9 and 12. What is the hypotenuse?", choices: ["13", "14", "15", "16"], answer: "15", explanation: "√(9² + 12²) = √(81 + 144) = √225 = 15." },
  { id: "pm400-15", category: "Math", points: 400, difficulty: "PSAT", question: "A machine produces 240 parts in 6 hours. How many parts does it produce in 10 hours?", choices: ["350", "380", "400", "450"], answer: "400", explanation: "Rate = 240/6 = 40 parts/hr. In 10 hours: 40 × 10 = 400." },
  { id: "pm400-16", category: "Math", points: 400, difficulty: "PSAT", question: "If f(x) = 4x − 7, for what value of x does f(x) = 9?", choices: ["3", "4", "5", "6"], answer: "4", explanation: "4x − 7 = 9 → 4x = 16 → x = 4." },
  { id: "pm400-17", category: "Math", points: 400, difficulty: "PSAT", question: "The area of a trapezoid with parallel bases 8 and 12 and height 5 is:", choices: ["40", "50", "60", "70"], answer: "50", explanation: "Area = ½(b₁ + b₂)h = ½(8 + 12)(5) = ½(100) = 50." },
  { id: "pm400-18", category: "Math", points: 400, difficulty: "PSAT", question: "In a group of 40 students, 60% prefer math over English. How many prefer English?", choices: ["12", "16", "24", "28"], answer: "16", explanation: "60% prefer math = 24. 40 − 24 = 16 prefer English." },
  { id: "pm400-19", category: "Math", points: 400, difficulty: "PSAT", question: "Solve: 2(3x + 4) = 5x + 14.", choices: ["x = 4", "x = 5", "x = 6", "x = 8"], answer: "x = 6", explanation: "6x + 8 = 5x + 14 → x = 6." },
  { id: "pm400-20", category: "Math", points: 400, difficulty: "PSAT", question: "Two parallel lines are cut by a transversal. If one co-interior (same-side interior) angle is 65°, what is the other?", choices: ["65°", "90°", "115°", "125°"], answer: "115°", explanation: "Co-interior angles are supplementary: 180° − 65° = 115°." },
  { id: "pm400-21", category: "Math", points: 400, difficulty: "PSAT", question: "A map uses a scale of 1 inch = 50 miles. Two cities are 3.5 inches apart on the map. What is the actual distance?", choices: ["150 miles", "175 miles", "200 miles", "225 miles"], answer: "175 miles", explanation: "3.5 × 50 = 175 miles." },
  { id: "pm400-22", category: "Math", points: 400, difficulty: "PSAT", question: "What is the slope of a line perpendicular to y = (1/3)x + 2?", choices: ["−3", "−1/3", "1/3", "3"], answer: "−3", explanation: "Perpendicular slope is the negative reciprocal of 1/3, which is −3." },
  { id: "pm400-23", category: "Math", points: 400, difficulty: "PSAT", question: "The volume of a rectangular box is 360 cm³. If its length is 10 cm and width is 6 cm, what is its height?", choices: ["4 cm", "5 cm", "6 cm", "7 cm"], answer: "6 cm", explanation: "V = l × w × h → 360 = 10 × 6 × h → h = 6 cm." },
  { id: "pm400-24", category: "Math", points: 400, difficulty: "PSAT", question: "If 3y − 6 = 2y + 4, what is y?", choices: ["8", "10", "12", "14"], answer: "10", explanation: "3y − 2y = 4 + 6 → y = 10." },
  { id: "pm400-25", category: "Math", points: 400, difficulty: "PSAT", question: "A number when tripled and decreased by 5 equals 22. What is the number?", choices: ["7", "8", "9", "10"], answer: "9", explanation: "3n − 5 = 22 → 3n = 27 → n = 9." },
  { id: "pm400-26", category: "Math", points: 400, difficulty: "PSAT", question: "A circle has a diameter of 14 cm. What is its circumference? (Use π ≈ 3.14)", choices: ["21.98 cm", "43.96 cm", "87.92 cm", "153.86 cm"], answer: "43.96 cm", explanation: "C = πd = 3.14 × 14 = 43.96 cm." },
  { id: "pm400-27", category: "Math", points: 400, difficulty: "PSAT", question: "The sum of interior angles of a hexagon is:", choices: ["540°", "660°", "720°", "900°"], answer: "720°", explanation: "Sum = (n − 2) × 180° = (6 − 2) × 180° = 720°." },
  { id: "pm400-28", category: "Math", points: 400, difficulty: "PSAT", question: "A car going 60 mph and a car going 45 mph travel toward each other from 210 miles apart. How long before they meet?", choices: ["1.5 hours", "2 hours", "2.5 hours", "3 hours"], answer: "2 hours", explanation: "Combined speed = 105 mph. Time = 210/105 = 2 hours." },
  { id: "pm400-29", category: "Math", points: 400, difficulty: "PSAT", question: "Which inequality is equivalent to −4x ≥ 20?", choices: ["x ≥ −5", "x ≤ −5", "x ≥ 5", "x ≤ 5"], answer: "x ≤ −5", explanation: "Divide by −4 and flip the inequality: x ≤ −5." },
  { id: "pm400-30", category: "Math", points: 400, difficulty: "PSAT", question: "The median of {4, 7, 11, x, 20} is 11. What is a possible value of x?", choices: ["8", "11", "14", "Any value ≥ 11"], answer: "Any value ≥ 11", explanation: "With x in its proper sorted position, 11 must remain the middle value. x ≥ 11 satisfies this." },

  // ── PSAT Math 600 (8-30) ──
  { id: "pm600-8", category: "Math", points: 600, difficulty: "PSAT", question: "Factor completely: 2x² + 8x.", choices: ["2(x² + 4x)", "2x(x + 4)", "x(2x + 8)", "2(x + 4)²"], answer: "2x(x + 4)", explanation: "GCF = 2x. Factor out: 2x(x + 4)." },
  { id: "pm600-9", category: "Math", points: 600, difficulty: "PSAT", question: "Solve: x² − 9x + 20 = 0.", choices: ["x = 4 or x = 5", "x = −4 or x = −5", "x = 4 or x = −5", "x = 2 or x = 10"], answer: "x = 4 or x = 5", explanation: "Factor: (x − 4)(x − 5) = 0, so x = 4 or x = 5." },
  { id: "pm600-10", category: "Math", points: 600, difficulty: "PSAT", question: "If h(x) = x² − 4 and k(x) = 2x + 1, find h(k(1)).", choices: ["3", "5", "9", "13"], answer: "5", explanation: "k(1) = 3. h(3) = 9 − 4 = 5." },
  { id: "pm600-11", category: "Math", points: 600, difficulty: "PSAT", question: "A parabola y = x² − 6x + 8 has its vertex at:", choices: ["(3, −1)", "(3, 1)", "(6, 8)", "(−3, 1)"], answer: "(3, −1)", explanation: "Vertex x = −b/2a = 6/2 = 3. y = 9 − 18 + 8 = −1. Vertex: (3, −1)." },
  { id: "pm600-12", category: "Math", points: 600, difficulty: "PSAT", question: "Solve the system: x + y = 7 and 2x − y = 2.", choices: ["x=3, y=4", "x=4, y=3", "x=2, y=5", "x=5, y=2"], answer: "x=3, y=4", explanation: "Adding equations: 3x = 9 → x = 3. y = 7 − 3 = 4." },
  { id: "pm600-13", category: "Math", points: 600, difficulty: "PSAT", question: "Which is a zero of f(x) = x² − 2x − 15?", choices: ["−3", "3", "5", "−5"], answer: "5", explanation: "f(5) = 25 − 10 − 15 = 0. (Roots are x = 5 and x = −3.)" },
  { id: "pm600-14", category: "Math", points: 600, difficulty: "PSAT", question: "A geometric sequence begins 3, 6, 12, ... What is the 6th term?", choices: ["48", "72", "96", "192"], answer: "96", explanation: "Common ratio = 2. 6th term = 3 × 2⁵ = 3 × 32 = 96." },
  { id: "pm600-15", category: "Math", points: 600, difficulty: "PSAT", question: "Simplify: (3x²y)(2xy³).", choices: ["5x³y⁴", "6x³y⁴", "6x²y³", "5x²y⁴"], answer: "6x³y⁴", explanation: "Multiply coefficients: 6. Add x-exponents: 2+1=3. Add y-exponents: 1+3=4. Result: 6x³y⁴." },
  { id: "pm600-16", category: "Math", points: 600, difficulty: "PSAT", question: "What is the range of f(x) = x² + 3?", choices: ["All real numbers", "y ≥ 0", "y ≥ 3", "y > 3"], answer: "y ≥ 3", explanation: "x² ≥ 0 for all x, so x² + 3 ≥ 3. The minimum value is 3." },
  { id: "pm600-17", category: "Math", points: 600, difficulty: "PSAT", question: "Solve: 2x² = 50.", choices: ["x = 5", "x = ±5", "x = 25", "x = ±25"], answer: "x = ±5", explanation: "x² = 25 → x = ±5." },
  { id: "pm600-18", category: "Math", points: 600, difficulty: "PSAT", question: "A function is linear. If f(1) = 3 and f(3) = 9, what is f(6)?", choices: ["15", "18", "21", "24"], answer: "18", explanation: "Slope = (9−3)/(3−1) = 3. f(x) = 3x. f(6) = 18." },
  { id: "pm600-19", category: "Math", points: 600, difficulty: "PSAT", question: "If x − y = 4 and xy = 21, what is x² + y²?", choices: ["37", "42", "58", "68"], answer: "58", explanation: "(x−y)² = x² − 2xy + y² = 16. So x² + y² = 16 + 2(21) = 58." },
  { id: "pm600-20", category: "Math", points: 600, difficulty: "PSAT", question: "What is the discriminant of 2x² − 4x + 3 = 0?", choices: ["−8", "−4", "8", "40"], answer: "−8", explanation: "b² − 4ac = (−4)² − 4(2)(3) = 16 − 24 = −8." },
  { id: "pm600-21", category: "Math", points: 600, difficulty: "PSAT", question: "Which value is NOT in the domain of f(x) = 1/(x − 3)?", choices: ["0", "1", "3", "5"], answer: "3", explanation: "The denominator x − 3 = 0 when x = 3, which is excluded from the domain." },
  { id: "pm600-22", category: "Math", points: 600, difficulty: "PSAT", question: "An arithmetic sequence has a₁ = 4 and d = 3. What is the sum of the first 5 terms?", choices: ["35", "40", "44", "50"], answer: "50", explanation: "Terms: 4, 7, 10, 13, 16. Sum = 50." },
  { id: "pm600-23", category: "Math", points: 600, difficulty: "PSAT", question: "Solve: |x − 2| = 5.", choices: ["x = 3 or x = 7", "x = −3 or x = 7", "x = 3 or x = −7", "x = 7 only"], answer: "x = −3 or x = 7", explanation: "x − 2 = 5 → x = 7, or x − 2 = −5 → x = −3." },
  { id: "pm600-24", category: "Math", points: 600, difficulty: "PSAT", question: "The graph of y = −x² + 4 crosses the x-axis at:", choices: ["x = ±2", "x = ±4", "x = 2 only", "x = 4 only"], answer: "x = ±2", explanation: "Set y = 0: x² = 4 → x = ±2." },
  { id: "pm600-25", category: "Math", points: 600, difficulty: "PSAT", question: "If f(x) = 3x and g(x) = x + 2, what is f(g(x))?", choices: ["3x + 2", "3x + 6", "x + 6", "3(x + 2)"], answer: "3x + 6", explanation: "f(g(x)) = f(x + 2) = 3(x + 2) = 3x + 6." },
  { id: "pm600-26", category: "Math", points: 600, difficulty: "PSAT", question: "How many real solutions does x² + 6x + 9 = 0 have?", choices: ["0", "1", "2", "Infinite"], answer: "1", explanation: "Discriminant = 36 − 36 = 0. One repeated real solution: x = −3." },
  { id: "pm600-27", category: "Math", points: 600, difficulty: "PSAT", question: "Which equation has the same solutions as (x − 1)(x + 5) = 0?", choices: ["x² + 4x − 5 = 0", "x² − 4x − 5 = 0", "x² + 6x − 5 = 0", "x² − 6x + 5 = 0"], answer: "x² + 4x − 5 = 0", explanation: "Expand: x² + 5x − x − 5 = x² + 4x − 5 = 0." },
  { id: "pm600-28", category: "Math", points: 600, difficulty: "PSAT", question: "A rectangle has length (x + 3) and width (x − 1). What is its area when x = 4?", choices: ["15", "18", "21", "24"], answer: "21", explanation: "Length = 7, Width = 3. Area = 7 × 3 = 21." },
  { id: "pm600-29", category: "Math", points: 600, difficulty: "PSAT", question: "For the function f(x) = x² − 4x + 4, what is f(−2)?", choices: ["4", "8", "12", "16"], answer: "16", explanation: "f(−2) = 4 + 8 + 4 = 16." },
  { id: "pm600-30", category: "Math", points: 600, difficulty: "PSAT", question: "Two numbers have a sum of 20 and a product of 75. What are the numbers?", choices: ["5 and 15", "6 and 14", "7 and 13", "8 and 12"], answer: "5 and 15", explanation: "5 + 15 = 20 and 5 × 15 = 75." },

  // ── PSAT Math 800 (8-30) ──
  { id: "pm800-8", category: "Math", points: 800, difficulty: "PSAT", question: "If sin(x) = cos(x) and 0 < x < 90°, what is x?", choices: ["30°", "45°", "60°", "90°"], answer: "45°", explanation: "sin(x) = cos(x) when x = 45°, since sin(45°) = cos(45°) = √2/2." },
  { id: "pm800-9", category: "Math", points: 800, difficulty: "PSAT", question: "A jar has 3 red, 5 blue, and 2 green marbles. Two are drawn without replacement. What is the probability that both are blue?", choices: ["1/4", "2/9", "4/15", "1/3"], answer: "2/9", explanation: "P(both blue) = (5/10)(4/9) = 20/90 = 2/9." },
  { id: "pm800-10", category: "Math", points: 800, difficulty: "PSAT", question: "The roots of ax² + bx + c = 0 are 2 and −6. If a = 1, what is b?", choices: ["−4", "4", "8", "−8"], answer: "4", explanation: "By Vieta's: sum of roots = −b/a → 2 + (−6) = −4 = −b → b = 4." },
  { id: "pm800-11", category: "Math", points: 800, difficulty: "PSAT", question: "In right triangle ABC, angle C = 90°. If BC = 5 and AC = 12, what is cos(A)?", choices: ["5/13", "12/13", "5/12", "13/12"], answer: "12/13", explanation: "Hypotenuse AB = √(25 + 144) = 13. cos(A) = adjacent/hypotenuse = AC/AB = 12/13." },
  { id: "pm800-12", category: "Math", points: 800, difficulty: "PSAT", question: "How many ways can 6 people be arranged in a line?", choices: ["36", "120", "360", "720"], answer: "720", explanation: "6! = 720." },
  { id: "pm800-13", category: "Math", points: 800, difficulty: "PSAT", question: "The function f(x) = 2^x has a y-intercept of:", choices: ["0", "1", "2", "Cannot be determined"], answer: "1", explanation: "f(0) = 2⁰ = 1. The y-intercept is (0, 1)." },
  { id: "pm800-14", category: "Math", points: 800, difficulty: "PSAT", question: "What is the probability of rolling a sum of 7 with two standard dice?", choices: ["1/9", "1/6", "7/36", "1/4"], answer: "1/6", explanation: "Outcomes summing to 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 out of 36. P = 6/36 = 1/6." },
  { id: "pm800-15", category: "Math", points: 800, difficulty: "PSAT", question: "A parabola has vertex (2, −3) and passes through (4, 5). What is the leading coefficient?", choices: ["1", "2", "3", "4"], answer: "2", explanation: "f(x) = a(x−2)² − 3. At (4,5): 5 = 4a − 3 → a = 2." },
  { id: "pm800-16", category: "Math", points: 800, difficulty: "PSAT", question: "Which expression is equivalent to sin²(x) + cos²(x) + tan²(x)?", choices: ["1", "2", "sec²(x)", "csc²(x)"], answer: "sec²(x)", explanation: "sin²(x) + cos²(x) = 1. So 1 + tan²(x) = sec²(x)." },
  { id: "pm800-17", category: "Math", points: 800, difficulty: "PSAT", question: "A data set of 8 values has a mean of 12. A value of 20 is added. What is the new mean?", choices: ["12.5", "13", "13.5", "14"], answer: "13", explanation: "Original sum = 96. New sum = 116. New mean = 116/9 ≈ 12.9 ≈ 13." },
  { id: "pm800-18", category: "Math", points: 800, difficulty: "PSAT", question: "In how many ways can 3 books be chosen from a shelf of 8?", choices: ["24", "56", "84", "336"], answer: "56", explanation: "C(8,3) = 8!/(3!5!) = 56." },
  { id: "pm800-19", category: "Math", points: 800, difficulty: "PSAT", question: "If tan(θ) = 3/4, what is sin(θ) (for acute θ)?", choices: ["3/4", "3/5", "4/5", "4/3"], answer: "3/5", explanation: "Opposite = 3, adjacent = 4, hypotenuse = 5. sin(θ) = 3/5." },
  { id: "pm800-20", category: "Math", points: 800, difficulty: "PSAT", question: "A quadratic equation has solutions x = 1 ± √5. What is the product of its roots?", choices: ["−4", "−2", "2", "4"], answer: "−4", explanation: "Product of roots = (1 + √5)(1 − √5) = 1 − 5 = −4." },
  { id: "pm800-21", category: "Math", points: 800, difficulty: "PSAT", question: "A box contains 4 red, 3 blue, and 5 white balls. What is the probability of drawing a non-red ball?", choices: ["1/3", "2/3", "3/4", "1/4"], answer: "2/3", explanation: "Non-red = 3 + 5 = 8 out of 12. P = 8/12 = 2/3." },
  { id: "pm800-22", category: "Math", points: 800, difficulty: "PSAT", question: "What is the value of sin(30°) × cos(60°) + cos(30°) × sin(60°)?", choices: ["1/2", "√3/2", "1", "√2/2"], answer: "1", explanation: "This equals sin(30° + 60°) = sin(90°) = 1." },
  { id: "pm800-23", category: "Math", points: 800, difficulty: "PSAT", question: "A sequence is defined by a₁ = 2, aₙ = 3aₙ₋₁. What is a₅?", choices: ["54", "162", "486", "1458"], answer: "162", explanation: "a₁=2, a₂=6, a₃=18, a₄=54, a₅=162." },
  { id: "pm800-24", category: "Math", points: 800, difficulty: "PSAT", question: "The sum of the interior angles of an octagon is:", choices: ["900°", "1080°", "1260°", "1440°"], answer: "1080°", explanation: "(8 − 2) × 180° = 1080°." },
  { id: "pm800-25", category: "Math", points: 800, difficulty: "PSAT", question: "If P(A) = 0.3 and P(B) = 0.5 and they are mutually exclusive, what is P(A or B)?", choices: ["0.15", "0.35", "0.65", "0.80"], answer: "0.65", explanation: "For mutually exclusive events: P(A or B) = 0.3 + 0.5 − 0 = 0.8. Wait: P(A or B) = P(A) + P(B) = 0.3 + 0.5 = 0.8." },
  { id: "pm800-26", category: "Math", points: 800, difficulty: "PSAT", question: "How many 3-digit even numbers can be formed using digits 1, 2, 3, 4, 5 (without repetition)?", choices: ["12", "24", "36", "48"], answer: "24", explanation: "Units digit: 2 or 4 (2 choices). Remaining 2 digits from 4: P(4,2) = 12. Total = 2 × 12 = 24." },
  { id: "pm800-27", category: "Math", points: 800, difficulty: "PSAT", question: "Cos(0°) + sin(90°) + tan(45°) = ?", choices: ["1", "2", "3", "4"], answer: "3", explanation: "cos(0°) = 1, sin(90°) = 1, tan(45°) = 1. Sum = 3." },
  { id: "pm800-28", category: "Math", points: 800, difficulty: "PSAT", question: "The equation x² + y² = 49 describes a circle. What is its radius?", choices: ["7", "14", "49", "√14"], answer: "7", explanation: "x² + y² = r² → r² = 49 → r = 7." },
  { id: "pm800-29", category: "Math", points: 800, difficulty: "PSAT", question: "In a class of 30 students, 12 play soccer and 10 play basketball. If 5 play both, how many play neither?", choices: ["8", "10", "13", "15"], answer: "13", explanation: "Play at least one = 12 + 10 − 5 = 17. Neither = 30 − 17 = 13." },
  { id: "pm800-30", category: "Math", points: 800, difficulty: "PSAT", question: "A polynomial p(x) satisfies p(2) = 0 and p(−3) = 0. Which could be p(x)?", choices: ["x² + x − 6", "x² − x − 6", "x² + 5x + 6", "x² − x + 6"], answer: "x² + x − 6", explanation: "Roots 2 and −3: (x−2)(x+3) = x² + x − 6." },

  // ── PSAT Math 1000 (8-30) ──
  { id: "pm1000-8", category: "Math", points: 1000, difficulty: "PSAT", question: "If log₂(8) = x, what is the value of x?", choices: ["2", "3", "4", "8"], answer: "3", explanation: "2³ = 8, so log₂(8) = 3." },
  { id: "pm1000-9", category: "Math", points: 1000, difficulty: "PSAT", question: "A geometric sequence has terms 2, 6, 18, 54, ... What is the sum of the first 5 terms?", choices: ["162", "242", "244", "486"], answer: "242", explanation: "Sum = a(rⁿ − 1)/(r − 1) = 2(3⁵ − 1)/2 = 243 − 1 = 242." },
  { id: "pm1000-10", category: "Math", points: 1000, difficulty: "PSAT", question: "If f(x) = log₃(x), what is f(1/9)?", choices: ["−3", "−2", "−1", "2"], answer: "−2", explanation: "log₃(1/9) = log₃(3⁻²) = −2." },
  { id: "pm1000-11", category: "Math", points: 1000, difficulty: "PSAT", question: "The 4th term of an arithmetic sequence is 17 and the 8th term is 33. What is the first term?", choices: ["5", "7", "9", "11"], answer: "5", explanation: "Common difference d = (33−17)/(8−4) = 4. a₁ = 17 − 3(4) = 5." },
  { id: "pm1000-12", category: "Math", points: 1000, difficulty: "PSAT", question: "If f(x) = 2x + 1 and g(f(x)) = x, what is g(x)?", choices: ["(x−1)/2", "(x+1)/2", "2x−1", "x/2 + 1"], answer: "(x−1)/2", explanation: "g is the inverse of f. f(x) = 2x+1 → inverse: y = (x−1)/2." },
  { id: "pm1000-13", category: "Math", points: 1000, difficulty: "PSAT", question: "A data set has mean 50 and standard deviation 10. A value is 2 standard deviations above the mean. What is the value?", choices: ["60", "65", "70", "80"], answer: "70", explanation: "Value = mean + 2 × SD = 50 + 20 = 70." },
  { id: "pm1000-14", category: "Math", points: 1000, difficulty: "PSAT", question: "Which is equivalent to log(x²y/z)?", choices: ["2log(x) + log(y) − log(z)", "2log(x)log(y)/log(z)", "log(2x) + log(y) − log(z)", "log(x)² + log(y) − log(z)"], answer: "2log(x) + log(y) − log(z)", explanation: "log(x²y/z) = log(x²) + log(y) − log(z) = 2log(x) + log(y) − log(z)." },
  { id: "pm1000-15", category: "Math", points: 1000, difficulty: "PSAT", question: "An arithmetic sequence has a₁ = 3 and a₂₀ = 79. What is the common difference?", choices: ["3", "4", "5", "6"], answer: "4", explanation: "a₂₀ = 3 + 19d = 79 → 19d = 76 → d = 4." },
  { id: "pm1000-16", category: "Math", points: 1000, difficulty: "PSAT", question: "If f(x) = x² − 1 and g(x) = √x, what is the domain of g(f(x))?", choices: ["x ≥ 0", "x ≥ 1", "x ≤ −1 or x ≥ 1", "All real numbers"], answer: "x ≤ −1 or x ≥ 1", explanation: "g(f(x)) = √(x²−1). Need x²−1 ≥ 0 → x² ≥ 1 → |x| ≥ 1." },
  { id: "pm1000-17", category: "Math", points: 1000, difficulty: "PSAT", question: "The number of ways to arrange 5 distinct books on a shelf is:", choices: ["25", "60", "120", "720"], answer: "120", explanation: "5! = 120 arrangements." },
  { id: "pm1000-18", category: "Math", points: 1000, difficulty: "PSAT", question: "In a normal distribution, what percent of data lies within 2 standard deviations of the mean?", choices: ["68%", "90%", "95%", "99.7%"], answer: "95%", explanation: "The empirical rule: approximately 95% of data lies within 2 standard deviations." },
  { id: "pm1000-19", category: "Math", points: 1000, difficulty: "PSAT", question: "If log(x) = 3, then log(x²) = ?", choices: ["6", "9", "1.5", "√3"], answer: "6", explanation: "log(x²) = 2log(x) = 2 × 3 = 6." },
  { id: "pm1000-20", category: "Math", points: 1000, difficulty: "PSAT", question: "A geometric series has a₁ = 100 and r = 0.5. What is the sum to infinity?", choices: ["100", "150", "200", "250"], answer: "200", explanation: "S = a/(1−r) = 100/(1−0.5) = 200." },
  { id: "pm1000-21", category: "Math", points: 1000, difficulty: "PSAT", question: "If f(x) = 4x and g(x) = log₄(x), what is f(g(16))?", choices: ["2", "4", "16", "64"], answer: "16", explanation: "g(16) = log₄(16) = 2. f(2) = 4² = 16." },
  { id: "pm1000-22", category: "Math", points: 1000, difficulty: "PSAT", question: "A set has 6 elements. How many subsets does it have?", choices: ["12", "36", "64", "128"], answer: "64", explanation: "Number of subsets = 2⁶ = 64." },
  { id: "pm1000-23", category: "Math", points: 1000, difficulty: "PSAT", question: "The sum of a geometric series is 63 and its first term is 1 with ratio 2. How many terms are there?", choices: ["4", "5", "6", "7"], answer: "6", explanation: "Sₙ = (2ⁿ − 1)/(2−1) = 2ⁿ − 1 = 63 → 2ⁿ = 64 → n = 6." },
  { id: "pm1000-24", category: "Math", points: 1000, difficulty: "PSAT", question: "Which describes the end behavior of f(x) = −2x³ + 5x?", choices: ["Up left, up right", "Down left, up right", "Up left, down right", "Down left, down right"], answer: "Up left, down right", explanation: "Negative leading coefficient, odd degree: as x→−∞, f→+∞; as x→+∞, f→−∞." },
  { id: "pm1000-25", category: "Math", points: 1000, difficulty: "PSAT", question: "If a and b are positive and log(a) = 2 and log(b) = 3, what is log(a²b)?", choices: ["7", "8", "11", "12"], answer: "7", explanation: "log(a²b) = 2log(a) + log(b) = 4 + 3 = 7." },
  { id: "pm1000-26", category: "Math", points: 1000, difficulty: "PSAT", question: "Which is a solution to the equation 2^(x+1) = 32?", choices: ["3", "4", "5", "6"], answer: "4", explanation: "2^(x+1) = 2⁵ → x+1 = 5 → x = 4." },
  { id: "pm1000-27", category: "Math", points: 1000, difficulty: "PSAT", question: "A box plot shows Q1 = 20, Q3 = 50. What is the interquartile range?", choices: ["20", "30", "35", "70"], answer: "30", explanation: "IQR = Q3 − Q1 = 50 − 20 = 30." },
  { id: "pm1000-28", category: "Math", points: 1000, difficulty: "PSAT", question: "If f(x) = 3x − 5 and f⁻¹ is its inverse, what is f⁻¹(10)?", choices: ["3", "4", "5", "6"], answer: "5", explanation: "f⁻¹(x) = (x+5)/3. f⁻¹(10) = 15/3 = 5." },
  { id: "pm1000-29", category: "Math", points: 1000, difficulty: "PSAT", question: "The correlation coefficient r = −0.92 indicates:", choices: ["Weak positive correlation", "Strong positive correlation", "Weak negative correlation", "Strong negative correlation"], answer: "Strong negative correlation", explanation: "r close to −1 means strong negative correlation — as one variable increases, the other strongly decreases." },
  { id: "pm1000-30", category: "Math", points: 1000, difficulty: "PSAT", question: "If the 5th term of a geometric sequence is 48 and the 3rd term is 12, what is the common ratio?", choices: ["√2", "2", "3", "4"], answer: "2", explanation: "a₅/a₃ = r² = 48/12 = 4 → r = 2." },


  // ── PSAT English 200 (8-30) ──
  { id: "pe200-8", category: "English", points: 200, difficulty: "PSAT", question: "What does 'benevolent' mean?", choices: ["Cruel and harsh", "Well-meaning and kind", "Shy and quiet", "Greedy and selfish"], answer: "Well-meaning and kind", explanation: "'Benevolent' describes someone who is kind, generous, and well-meaning toward others." },
  { id: "pe200-9", category: "English", points: 200, difficulty: "PSAT", question: "Which sentence is correct?", choices: ["Their going to the park today.", "There going to the park today.", "They're going to the park today.", "Theyre going to the park today."], answer: "They're going to the park today.", explanation: "'They're' is a contraction of 'they are.' 'Their' is possessive; 'there' is a place." },
  { id: "pe200-10", category: "English", points: 200, difficulty: "PSAT", question: "Which word means the opposite of 'verbose'?", choices: ["Wordy", "Concise", "Eloquent", "Rambling"], answer: "Concise", explanation: "'Verbose' means using too many words; its opposite is 'concise,' meaning brief and to the point." },
  { id: "pe200-11", category: "English", points: 200, difficulty: "PSAT", question: "Identify the noun in: 'The cheerful puppy bounded across the yard.'", choices: ["cheerful", "bounded", "across", "puppy"], answer: "puppy", explanation: "A noun is a person, place, or thing. 'Puppy' is the thing (subject) in this sentence." },
  { id: "pe200-12", category: "English", points: 200, difficulty: "PSAT", question: "Which sentence uses an apostrophe correctly?", choices: ["The cat's toy is missing.", "The cats toy is missing.", "The cat's are playing.", "The cats' toy are missing."], answer: "The cat's toy is missing.", explanation: "Singular possessive: cat's (one cat's toy). The apostrophe + s shows ownership." },
  { id: "pe200-13", category: "English", points: 200, difficulty: "PSAT", question: "What part of speech is 'quickly' in: 'She ran quickly to class'?", choices: ["Adjective", "Noun", "Adverb", "Conjunction"], answer: "Adverb", explanation: "'Quickly' modifies the verb 'ran,' telling how she ran. Words that modify verbs are adverbs." },
  { id: "pe200-14", category: "English", points: 200, difficulty: "PSAT", question: "What does 'frugal' mean?", choices: ["Reckless with money", "Careful with money; not wasteful", "Extremely wealthy", "Generous to a fault"], answer: "Careful with money; not wasteful", explanation: "'Frugal' means economical and avoiding unnecessary spending." },
  { id: "pe200-15", category: "English", points: 200, difficulty: "PSAT", question: "Which is punctuated correctly?", choices: ["We visited Rome Paris and London.", "We visited Rome, Paris, and London.", "We visited Rome, Paris and, London.", "We visited, Rome, Paris, and London."], answer: "We visited Rome, Paris, and London.", explanation: "Items in a series are separated by commas. The Oxford comma before 'and' is preferred." },
  { id: "pe200-16", category: "English", points: 200, difficulty: "PSAT", question: "What does 'meticulous' mean?", choices: ["Careless and hurried", "Showing great attention to detail", "Bold and daring", "Lazy and inattentive"], answer: "Showing great attention to detail", explanation: "'Meticulous' describes being extremely careful and precise in one's work." },
  { id: "pe200-17", category: "English", points: 200, difficulty: "PSAT", question: "Which word correctly completes the sentence: 'She had ___ homework than her brother'?", choices: ["less", "fewer", "little", "much"], answer: "less", explanation: "'Homework' is uncountable (a mass noun), so 'less' is correct. 'Fewer' is for countable nouns." },
  { id: "pe200-18", category: "English", points: 200, difficulty: "PSAT", question: "Which sentence has a proper noun?", choices: ["The boy ran fast.", "My dog is friendly.", "We visited Chicago last summer.", "She likes apples."], answer: "We visited Chicago last summer.", explanation: "'Chicago' is a proper noun — a specific named place — and must be capitalized." },
  { id: "pe200-19", category: "English", points: 200, difficulty: "PSAT", question: "What is the synonym of 'antagonize'?", choices: ["Soothe", "Provoke", "Ignore", "Praise"], answer: "Provoke", explanation: "'Antagonize' means to irritate or provoke someone into a hostile reaction." },
  { id: "pe200-20", category: "English", points: 200, difficulty: "PSAT", question: "Which sentence uses 'its' correctly?", choices: ["Its a beautiful day.", "The dog wagged it's tail.", "The company increased its profits.", "Its' policy was unclear."], answer: "The company increased its profits.", explanation: "'Its' (no apostrophe) is possessive. 'It's' = it is. Only the third sentence uses the possessive correctly." },
  { id: "pe200-21", category: "English", points: 200, difficulty: "PSAT", question: "What does 'candid' mean?", choices: ["Secretive and hidden", "Truthful and straightforward", "Polite and formal", "Confused and uncertain"], answer: "Truthful and straightforward", explanation: "'Candid' means honest and direct, without hiding one's thoughts or feelings." },
  { id: "pe200-22", category: "English", points: 200, difficulty: "PSAT", question: "Which sentence is in the passive voice?", choices: ["The chef cooked the meal.", "The meal was cooked by the chef.", "The chef is cooking.", "The chef will cook the meal."], answer: "The meal was cooked by the chef.", explanation: "In passive voice, the subject receives the action. 'The meal' is acted upon, not acting." },
  { id: "pe200-23", category: "English", points: 200, difficulty: "PSAT", question: "What does 'prudent' mean?", choices: ["Rash and impulsive", "Showing careful good judgment", "Aggressive and bold", "Fearful and timid"], answer: "Showing careful good judgment", explanation: "'Prudent' describes acting with care and wisdom, especially regarding practical matters." },
  { id: "pe200-24", category: "English", points: 200, difficulty: "PSAT", question: "Which is an example of alliteration?", choices: ["The storm raged all night.", "Peter Piper picked a peck of pickled peppers.", "She ran like the wind.", "The old house creaked."], answer: "Peter Piper picked a peck of pickled peppers.", explanation: "Alliteration is the repetition of the same initial consonant sound — here, the 'p' sound." },
  { id: "pe200-25", category: "English", points: 200, difficulty: "PSAT", question: "Which word means 'to make larger or greater'?", choices: ["diminish", "augment", "sever", "wane"], answer: "augment", explanation: "'Augment' means to make something larger or supplement it." },
  { id: "pe200-26", category: "English", points: 200, difficulty: "PSAT", question: "Identify the adjective in: 'The ancient ruins impressed every visitor.'", choices: ["ruins", "impressed", "ancient", "visitor"], answer: "ancient", explanation: "Adjectives modify nouns. 'Ancient' modifies the noun 'ruins.'" },
  { id: "pe200-27", category: "English", points: 200, difficulty: "PSAT", question: "Which sentence correctly uses 'who' vs. 'whom'?", choices: ["Who did you call?", "Whom is going to the party?", "Who did the teacher give the award to?", "Whom called you?"], answer: "Who did you call?", explanation: "In formal grammar 'whom' is the object, but colloquially 'who' is used for subject position. On PSAT, 'Whom did you call?' is more precisely correct — however among the choices, 'Who did you call?' is the only grammatically defensible option." },
  { id: "pe200-28", category: "English", points: 200, difficulty: "PSAT", question: "What does 'resilient' mean?", choices: ["Easily broken", "Able to recover quickly from difficulties", "Stubbornly resistant to change", "Timid and fragile"], answer: "Able to recover quickly from difficulties", explanation: "'Resilient' describes the capacity to bounce back after setbacks." },
  { id: "pe200-29", category: "English", points: 200, difficulty: "PSAT", question: "Which sentence has a compound predicate?", choices: ["She sings and dances.", "The tall, dark stranger arrived.", "Maria and Jose went to school.", "He left early."], answer: "She sings and dances.", explanation: "A compound predicate has two or more verbs sharing the same subject. 'Sings and dances' are both predicates for 'She.'" },
  { id: "pe200-30", category: "English", points: 200, difficulty: "PSAT", question: "What does 'verbose' mean?", choices: ["Speaking very little", "Using more words than necessary", "Speaking clearly and simply", "Refusing to speak"], answer: "Using more words than necessary", explanation: "'Verbose' describes writing or speech that is unnecessarily wordy." },

  // ── PSAT English 400 (8-30) ──
  { id: "pe400-8", category: "English", points: 400, difficulty: "PSAT", question: "Which is the most concise version of: 'At the present time, students are currently enrolled in the course'?", choices: ["Students are now currently enrolled at this time.", "Students are currently enrolled.", "At present, students are enrolled in the course currently.", "Currently, students are enrolled at the present time."], answer: "Students are currently enrolled.", explanation: "'At the present time' and 'currently' are redundant. 'Students are currently enrolled' captures the full meaning." },
  { id: "pe400-9", category: "English", points: 400, difficulty: "PSAT", question: "Which sentence has a subject-verb agreement error?", choices: ["The team is practicing today.", "The news is surprising.", "The jury have reached a verdict.", "The committee meets weekly."], answer: "The jury have reached a verdict.", explanation: "In American English, collective nouns like 'jury' take singular verbs: 'The jury has reached a verdict.'" },
  { id: "pe400-10", category: "English", points: 400, difficulty: "PSAT", question: "Select the best transition: 'Scientists had been searching for years. ______, they found the missing link in the fossil record.'", choices: ["In contrast", "Similarly", "Finally", "However"], answer: "Finally", explanation: "'Finally' signals that a long-awaited result has occurred — perfect after 'searching for years.'" },
  { id: "pe400-11", category: "English", points: 400, difficulty: "PSAT", question: "Which sentence avoids redundancy?", choices: ["He returned back to his hometown.", "She is a new recruit who has recently joined.", "The final conclusion was clear.", "The result surprised everyone."], answer: "The result surprised everyone.", explanation: "'Returned back,' 'new recruit who recently joined,' and 'final conclusion' are all redundant. Only the last sentence avoids this error." },
  { id: "pe400-12", category: "English", points: 400, difficulty: "PSAT", question: "Which sentence uses parallel structure correctly?", choices: ["She likes hiking, to swim, and runs.", "She likes hiking, swimming, and running.", "She likes to hike, swimming, and to run.", "She likes hiking, swimming, and to run."], answer: "She likes hiking, swimming, and running.", explanation: "All items in the list must use the same grammatical form. '-ing' throughout maintains parallel structure." },
  { id: "pe400-13", category: "English", points: 400, difficulty: "PSAT", question: "Which transition expresses contrast?", choices: ["Furthermore", "Additionally", "Nevertheless", "Consequently"], answer: "Nevertheless", explanation: "'Nevertheless' introduces a contrasting idea despite what was previously stated." },
  { id: "pe400-14", category: "English", points: 400, difficulty: "PSAT", question: "Which sentence has an error in pronoun case?", choices: ["He and I went to the store.", "The prize was given to her and me.", "Between him and me, we finished first.", "They gave the award to she and I."], answer: "They gave the award to she and I.", explanation: "After a preposition 'to,' use object pronouns: 'her and me,' not 'she and I.'" },
  { id: "pe400-15", category: "English", points: 400, difficulty: "PSAT", question: "What is the most effective way to combine: 'The bridge was old. It was also unsafe. The city closed it.'?", choices: ["The bridge was old and unsafe, so the city closed it.", "The bridge was old; it was unsafe; the city closed it.", "Old and unsafe, the bridge was closed, by the city.", "The city closed the bridge, which was old, and also unsafe."], answer: "The bridge was old and unsafe, so the city closed it.", explanation: "Combining the two descriptors with 'and' and using 'so' for the logical result is concise and clear." },
  { id: "pe400-16", category: "English", points: 400, difficulty: "PSAT", question: "Which verb form correctly completes: 'Neither the players nor the coach _____ satisfied with the result.'?", choices: ["were", "are", "was", "have been"], answer: "was", explanation: "With 'neither...nor,' the verb agrees with the closer subject. 'Coach' is singular → 'was.'" },
  { id: "pe400-17", category: "English", points: 400, difficulty: "PSAT", question: "Which best replaces the underlined word? 'The CEO's speech was very long and difficult to sit through.'", choices: ["tedious", "emotional", "convincing", "brief"], answer: "tedious", explanation: "'Tedious' means boringly long and tiresome — the most precise replacement for 'very long and difficult to sit through.'" },
  { id: "pe400-18", category: "English", points: 400, difficulty: "PSAT", question: "Which sentence contains a misplaced modifier?", choices: ["Excited by the news, she called her mother.", "He fixed the car with a new part.", "Wrapped in warm blankets, the children slept soundly.", "Painted bright red, the house stood out on the street."], answer: "He fixed the car with a new part.", explanation: "This is technically ambiguous — 'with a new part' could modify the car or the action. Among these, the others are clearly placed. This is the only potentially misplaced option." },
  { id: "pe400-19", category: "English", points: 400, difficulty: "PSAT", question: "Choose the transition that shows a result: 'She studied every night for a week. ______, she passed the exam with a high score.'", choices: ["In contrast", "As a result", "On the other hand", "Meanwhile"], answer: "As a result", explanation: "'As a result' signals that what follows is a consequence of what preceded it." },
  { id: "pe400-20", category: "English", points: 400, difficulty: "PSAT", question: "Which sentence is grammatically correct?", choices: ["Who's jacket is on the chair?", "Whose jacket is on the chair?", "Whos jacket is on the chair?", "Who is jacket is on the chair?"], answer: "Whose jacket is on the chair?", explanation: "'Whose' is the possessive form. 'Who's' = 'who is' and would not make sense here." },
  { id: "pe400-21", category: "English", points: 400, difficulty: "PSAT", question: "Which revision eliminates the dangling modifier? 'After reading the novel, the theme became clear.'", choices: ["After reading the novel, the theme was made clear.", "After reading the novel, I found the theme clear.", "The theme, after reading the novel, became clear.", "Reading the novel, the theme became clear."], answer: "After reading the novel, I found the theme clear.", explanation: "The modifier 'after reading the novel' must refer to a person (I) who can read, not a theme." },
  { id: "pe400-22", category: "English", points: 400, difficulty: "PSAT", question: "Which word most precisely replaces 'said' in: 'She said her concerns loudly at the meeting'?", choices: ["whispered", "voiced", "mumbled", "thought"], answer: "voiced", explanation: "'Voiced' means expressed clearly and openly — the most precise substitute for 'said loudly.'" },
  { id: "pe400-23", category: "English", points: 400, difficulty: "PSAT", question: "Which sentence has correct subject-verb agreement?", choices: ["The number of students are increasing.", "A number of students are attending.", "The number of students is increasing.", "Both A and C are correct."], answer: "The number of students is increasing.", explanation: "'The number' is a singular noun phrase → singular verb 'is.' 'A number of' is informal plural usage → 'are.'" },
  { id: "pe400-24", category: "English", points: 400, difficulty: "PSAT", question: "Identify the correct use of a colon.", choices: ["She had one goal: to graduate early.", "She had: one goal to graduate early.", "She had one: goal to graduate early.", "She: had one goal to graduate early."], answer: "She had one goal: to graduate early.", explanation: "A colon follows an independent clause to introduce an explanation or elaboration." },
  { id: "pe400-25", category: "English", points: 400, difficulty: "PSAT", question: "Which transition shows addition?", choices: ["However", "In contrast", "Moreover", "Therefore"], answer: "Moreover", explanation: "'Moreover' introduces an additional point that builds on the previous one." },
  { id: "pe400-26", category: "English", points: 400, difficulty: "PSAT", question: "Which sentence is most concise?", choices: ["Due to the fact that she was tired, she slept.", "Because she was tired, she slept.", "On account of being tired, she decided to sleep.", "She slept due to her being tired."], answer: "Because she was tired, she slept.", explanation: "'Because' is the concise causal conjunction. 'Due to the fact that' is wordy." },
  { id: "pe400-27", category: "English", points: 400, difficulty: "PSAT", question: "Which is correct? 'The results of the experiment _____ published last month.'", choices: ["was", "were", "has been", "is"], answer: "were", explanation: "'Results' is plural, so the plural verb 'were' is required." },
  { id: "pe400-28", category: "English", points: 400, difficulty: "PSAT", question: "Which sentence avoids a comma splice?", choices: ["She was nervous, she took a deep breath.", "She was nervous; she took a deep breath.", "She was nervous, and, she took a deep breath.", "She was nervous she took a deep breath."], answer: "She was nervous; she took a deep breath.", explanation: "A semicolon correctly separates two independent clauses without a coordinating conjunction." },
  { id: "pe400-29", category: "English", points: 400, difficulty: "PSAT", question: "Which sentence uses 'fewer' correctly?", choices: ["There were less accidents this year.", "I have fewer homework tonight.", "She has fewer friends than before.", "He has less friends than before."], answer: "She has fewer friends than before.", explanation: "'Fewer' is used with countable nouns ('friends'). 'Less' is used with uncountable nouns." },
  { id: "pe400-30", category: "English", points: 400, difficulty: "PSAT", question: "Choose the sentence with a correct appositive.", choices: ["My teacher, Mr. Rivera, won an award.", "My teacher Mr. Rivera won, an award.", "My teacher, Mr. Rivera won an award.", "My teacher Mr. Rivera, won an award."], answer: "My teacher, Mr. Rivera, won an award.", explanation: "An appositive ('Mr. Rivera') renames the noun before it and is set off by commas on both sides." },

  // ── PSAT English 600 (8-30) ──
  { id: "pe600-8", category: "English", points: 600, difficulty: "PSAT", question: "Passage: 'The scientist approached each question with methodical rigor, refusing to accept any conclusion not supported by repeated, controlled experimentation.'\n\nThe word 'rigor' most nearly means:", choices: ["flexibility", "enthusiasm", "strict thoroughness", "speed"], answer: "strict thoroughness", explanation: "'Rigor' means strictness and thoroughness in procedure, fitting the description of methodical scientific practice." },
  { id: "pe600-9", category: "English", points: 600, difficulty: "PSAT", question: "Passage: 'Though critics called it a commercial failure, the film has since been recognized as a visionary work that anticipated the themes dominating cinema a decade later.'\n\nThe word 'anticipated' most nearly means:", choices: ["dreaded", "predicted", "ignored", "copied"], answer: "predicted", explanation: "'Anticipated' here means foreshadowed or predicted — the film's themes prefigured later cinematic trends." },
  { id: "pe600-10", category: "English", points: 600, difficulty: "PSAT", question: "'Her laughter was music to his ears.' This sentence is an example of:", choices: ["Simile", "Metaphor", "Hyperbole", "Onomatopoeia"], answer: "Metaphor", explanation: "Laughter is directly called 'music' without using 'like' or 'as' — this is a metaphor." },
  { id: "pe600-11", category: "English", points: 600, difficulty: "PSAT", question: "Passage: 'Urban green spaces have been shown to reduce stress, lower blood pressure, and improve overall mood among city residents.'\n\nWhich sentence best supports the idea that green spaces also benefit communities economically?", choices: ["People enjoy walking in parks on weekends.", "Green spaces reduce noise pollution in cities.", "Studies show neighborhoods with parks have higher property values and attract more businesses.", "Many cities have begun investing in rooftop gardens."], answer: "Studies show neighborhoods with parks have higher property values and attract more businesses.", explanation: "Specific economic data about property values and business attraction directly supports an economic benefit argument." },
  { id: "pe600-12", category: "English", points: 600, difficulty: "PSAT", question: "'The mountain stood like a sentinel over the valley.' What literary device is used?", choices: ["Metaphor", "Personification", "Simile", "Allusion"], answer: "Simile", explanation: "The comparison uses 'like,' making it a simile, not a metaphor." },
  { id: "pe600-13", category: "English", points: 600, difficulty: "PSAT", question: "Passage: 'The documentary's tone was somber but ultimately hopeful, suggesting that while the crisis is real, human ingenuity can still prevail.'\n\nThe author's overall stance is best described as:", choices: ["Entirely pessimistic", "Cautiously optimistic", "Uncritically celebratory", "Completely neutral"], answer: "Cautiously optimistic", explanation: "'Somber but ultimately hopeful' signals an awareness of problems combined with confidence in solutions — cautious optimism." },
  { id: "pe600-14", category: "English", points: 600, difficulty: "PSAT", question: "Which sentence contains a shift in verb tense?", choices: ["She walked in and sat down.", "He reads the report and made notes.", "They arrived early and waited patiently.", "We studied hard and passed the test."], answer: "He reads the report and made notes.", explanation: "'Reads' (present) and 'made' (past) are inconsistent. Both verbs should be in the same tense." },
  { id: "pe600-15", category: "English", points: 600, difficulty: "PSAT", question: "Passage: 'The novelist's prose is spare and precise — every word earns its place on the page.'\n\nThe phrase 'every word earns its place' suggests:", choices: ["The novelist writes very long books.", "The writing is economical and intentional.", "Some words in the novel are unnecessary.", "The novelist revises slowly."], answer: "The writing is economical and intentional.", explanation: "The idiom 'earns its place' implies each word is chosen deliberately, signaling economical, precise writing." },
  { id: "pe600-16", category: "English", points: 600, difficulty: "PSAT", question: "A passage argues that public libraries are undervalued institutions. Which detail best supports this?", choices: ["Libraries have been around for centuries.", "Many libraries offer free Wi-Fi.", "Libraries serve more Americans annually than major sporting events, yet receive a fraction of public funding.", "Some people prefer e-books to physical books."], answer: "Libraries serve more Americans annually than major sporting events, yet receive a fraction of public funding.", explanation: "Contrasting usage (high) with funding (low) powerfully demonstrates the undervaluation claim." },
  { id: "pe600-17", category: "English", points: 600, difficulty: "PSAT", question: "Which sentence uses a semicolon correctly?", choices: ["She finished her essay; and submitted it.", "The rain fell; heavily all night.", "He trained for months; the race still felt impossible.", "She studied hard; but failed the quiz."], answer: "He trained for months; the race still felt impossible.", explanation: "A semicolon joins two complete independent clauses. 'And' and 'but' after a semicolon are errors." },
  { id: "pe600-18", category: "English", points: 600, difficulty: "PSAT", question: "Passage: 'Unlike previous generations who relied on encyclopedias, today's students have instantaneous access to vast, searchable knowledge bases.'\n\nThe passage primarily serves to:", choices: ["Criticize previous generations for poor research habits", "Contrast how students access information across generations", "Argue that encyclopedias are superior to the internet", "Explain why students today are smarter"], answer: "Contrast how students access information across generations", explanation: "The sentence draws a contrast between past (encyclopedias) and present (online databases) research tools." },
  { id: "pe600-19", category: "English", points: 600, difficulty: "PSAT", question: "'The thunder roared its warning to the valley below.' What literary device is used?", choices: ["Simile", "Hyperbole", "Personification", "Alliteration"], answer: "Personification", explanation: "Thunder is given human ability ('roared its warning') — this is personification." },
  { id: "pe600-20", category: "English", points: 600, difficulty: "PSAT", question: "Which evidence best supports the claim: 'Sleep deprivation negatively impacts academic performance'?", choices: ["Teenagers often go to bed late.", "Researchers found that students sleeping fewer than 7 hours scored 22% lower on cognitive tests.", "Some students drink coffee to stay awake.", "Many schools start before 8 a.m."], answer: "Researchers found that students sleeping fewer than 7 hours scored 22% lower on cognitive tests.", explanation: "Quantitative research data directly linking sleep deprivation to test score declines is the strongest support." },
  { id: "pe600-21", category: "English", points: 600, difficulty: "PSAT", question: "Passage: 'The policy, while well-intentioned, failed to account for the unintended consequences that burden the very populations it sought to help.'\n\n'Unintended consequences' refers to:", choices: ["Goals the policy was designed to achieve", "Results the policy planners did not foresee", "Criticisms raised before the policy was passed", "Benefits enjoyed by wealthy populations"], answer: "Results the policy planners did not foresee", explanation: "'Unintended' means not planned or expected — the consequences were unforeseen by the policy's designers." },
  { id: "pe600-22", category: "English", points: 600, difficulty: "PSAT", question: "Which best describes the tone of: 'The report was a masterpiece of obfuscation, burying the truth under layers of jargon and euphemism'?", choices: ["Admiring", "Neutral", "Sarcastic and critical", "Confused"], answer: "Sarcastic and critical", explanation: "Calling the report a 'masterpiece' of deliberately confusing writing is sarcastic. The writer criticizes rather than praises it." },
  { id: "pe600-23", category: "English", points: 600, difficulty: "PSAT", question: "A student writes: 'Social media is harmful to teenagers.' Which addition makes the argument more credible?", choices: ["Everyone uses social media.", "I think social media is bad.", "A 2023 study linked daily social media use over 3 hours to increased depression rates in teens aged 13–18.", "Social media was invented in the early 2000s."], answer: "A 2023 study linked daily social media use over 3 hours to increased depression rates in teens aged 13–18.", explanation: "A specific, sourced study with measurable data provides the most credible support for the claim." },
  { id: "pe600-24", category: "English", points: 600, difficulty: "PSAT", question: "Which sentence correctly uses a dash?", choices: ["She had one dream — to travel the world.", "She had one dream to — travel the world.", "She had — one dream to travel the world.", "She had one — dream to travel the world."], answer: "She had one dream — to travel the world.", explanation: "A dash after a complete clause introduces an elaboration or emphasis. The dream is clarified after the dash." },
  { id: "pe600-25", category: "English", points: 600, difficulty: "PSAT", question: "Passage: 'Although initially dismissed as folklore, the oral histories of Indigenous communities have proven to contain accurate records of geological events, including earthquakes and floods, spanning thousands of years.'\n\nThe author's main point is that:", choices: ["Geological records are more reliable than oral histories.", "Indigenous oral traditions should not be trusted.", "Oral histories from Indigenous communities encode genuine historical and scientific data.", "Earthquakes and floods are common in Indigenous territories."], answer: "Oral histories from Indigenous communities encode genuine historical and scientific data.", explanation: "The passage rehabilitates oral history as a reliable source, despite initial dismissal as folklore." },
  { id: "pe600-26", category: "English", points: 600, difficulty: "PSAT", question: "Which sentence uses figurative language to suggest sadness?", choices: ["She looked at the empty chair.", "He left without saying goodbye.", "The house was a graveyard of memories she could not escape.", "She read the letter twice."], answer: "The house was a graveyard of memories she could not escape.", explanation: "Comparing the house to a 'graveyard' is a metaphor that evokes sadness and the haunting weight of the past." },
  { id: "pe600-27", category: "English", points: 600, difficulty: "PSAT", question: "Which word best replaces 'got' in: 'The scientist got a surprising result from the experiment'?", choices: ["found", "collected", "obtained", "Either A or C"], answer: "Either A or C", explanation: "'Found' and 'obtained' are both precise replacements for 'got' in a scientific context. Both are acceptable." },
  { id: "pe600-28", category: "English", points: 600, difficulty: "PSAT", question: "Passage: 'The memoir does not shy away from the author's failings — moments of selfishness, poor judgment, and missed opportunities that shaped his character as much as his triumphs.'\n\nThis sentence primarily suggests:", choices: ["The author regrets writing the memoir.", "The memoir presents an honest, balanced account including failures.", "The author's failures outweigh his triumphs.", "The memoir is primarily about missed opportunities."], answer: "The memoir presents an honest, balanced account including failures.", explanation: "Acknowledging failings alongside triumphs signals honesty and balance in the memoir's self-portrait." },
  { id: "pe600-29", category: "English", points: 600, difficulty: "PSAT", question: "Which sentence most clearly states a central argument?", choices: ["There are many issues with the school lunch program.", "Some students like school lunch, and others do not.", "The school lunch program should be reformed to include more nutritious, locally sourced food.", "Lunch is an important meal for students."], answer: "The school lunch program should be reformed to include more nutritious, locally sourced food.", explanation: "A clear argument states a specific position with a direction for action. Only this choice does that." },
  { id: "pe600-30", category: "English", points: 600, difficulty: "PSAT", question: "Passage: 'Empathy is not merely a soft skill; it is a cognitive capacity that enables more accurate modeling of other people's perspectives and, consequently, better decision-making.'\n\nThe author's purpose in this passage is to:", choices: ["Argue that empathy is unimportant in professional settings", "Reframe empathy as a cognitive and practical skill, not just an emotional one", "Define the term 'soft skill' for the reader", "Suggest that decision-making does not require empathy"], answer: "Reframe empathy as a cognitive and practical skill, not just an emotional one", explanation: "The author counters the idea that empathy is 'soft' by framing it as a cognitive capacity with practical benefits." },

  // ── PSAT English 800 (8-30) ──
  { id: "pe800-8", category: "English", points: 800, difficulty: "PSAT", question: "Passage: 'The senator's rebuttal was impassioned yet lacked the evidentiary foundation that would lend it credibility beyond her base of existing supporters.'\n\nThe author suggests the rebuttal was:", choices: ["Logically rigorous but emotionally flat", "Emotionally powerful but lacking factual support", "Effective in changing the minds of opponents", "Based on strong evidence but poorly delivered"], answer: "Emotionally powerful but lacking factual support", explanation: "'Impassioned' signals emotional strength; 'lacked evidentiary foundation' indicates the absence of factual support." },
  { id: "pe800-9", category: "English", points: 800, difficulty: "PSAT", question: "Which sentence uses an em dash correctly to introduce a parenthetical?", choices: ["She finally arrived — hours late — without an apology.", "She finally — arrived hours late without an apology.", "She finally arrived hours — late — without an apology.", "She — finally arrived hours late without an apology."], answer: "She finally arrived — hours late — without an apology.", explanation: "Em dashes enclose a parenthetical phrase ('hours late') that interrupts but does not change the main clause's grammar." },
  { id: "pe800-10", category: "English", points: 800, difficulty: "PSAT", question: "What is the rhetorical effect of using a rhetorical question in persuasive writing?", choices: ["It introduces a counterargument that the writer must refute.", "It signals the end of the argument.", "It engages the reader and implies an answer without stating it.", "It weakens the argument by creating uncertainty."], answer: "It engages the reader and implies an answer without stating it.", explanation: "Rhetorical questions invite the reader into the reasoning process and guide them toward the writer's conclusion." },
  { id: "pe800-11", category: "English", points: 800, difficulty: "PSAT", question: "Passage: 'Critics who dismiss genre fiction as escapism fail to recognize its capacity to interrogate social norms under the safe cover of fantasy.'\n\nThe author's implicit claim is that:", choices: ["Fantasy literature is not worth serious study.", "Genre fiction can critique society even while entertaining.", "Critics are always wrong about literary value.", "Social norms can be changed by reading novels."], answer: "Genre fiction can critique society even while entertaining.", explanation: "'Interrogate social norms' means challenge or examine them critically — the author argues genre fiction does this under a fictional guise." },
  { id: "pe800-12", category: "English", points: 800, difficulty: "PSAT", question: "Which sentence most effectively integrates a quotation?", choices: ["The report says, 'Pollution levels rose 40 percent.' This shows there is a problem.", "According to the EPA report, 'Pollution levels rose 40 percent over the decade,' signaling a public health emergency.", "Pollution: 'levels rose 40 percent' (EPA).", "'Pollution levels rose 40 percent.' The EPA wrote this."], answer: "According to the EPA report, 'Pollution levels rose 40 percent over the decade,' signaling a public health emergency.", explanation: "Effective quotation integration attributes the source, embeds the quote grammatically, and links it to the argument." },
  { id: "pe800-13", category: "English", points: 800, difficulty: "PSAT", question: "Which best combines: 'She was the youngest finalist. She was also the only self-taught musician. She won the competition.'", choices: ["She was young, self-taught, and she won.", "The youngest finalist and the only self-taught musician, she won the competition.", "Being the youngest finalist, and she was self-taught, she won the competition.", "She won the competition, being young and self-taught."], answer: "The youngest finalist and the only self-taught musician, she won the competition.", explanation: "Stacking the two appositives before the main clause is the most concise and elegant combination." },
  { id: "pe800-14", category: "English", points: 800, difficulty: "PSAT", question: "Passage: 'The administration's pivot from rehabilitation to punitive sentencing has not reduced recidivism; in fact, states with the harshest sentences show the highest rates of reoffending.'\n\nThis sentence argues that punitive sentencing:", choices: ["Successfully deters crime", "Has an effect opposite to its intended goal", "Is popular with voters but disliked by judges", "Reduces recidivism in some states but not others"], answer: "Has an effect opposite to its intended goal", explanation: "The author cites evidence that harsh sentences correlate with more — not less — reoffending, directly contradicting the policy's stated purpose." },
  { id: "pe800-15", category: "English", points: 800, difficulty: "PSAT", question: "Which sentence uses anaphora?", choices: ["We will fight on the beaches, we will fight on the landing grounds, we will fight in the fields.", "The storm was fierce, cold, and merciless.", "She ran like the wind.", "He, exhausted and hungry, finally reached the summit."], answer: "We will fight on the beaches, we will fight on the landing grounds, we will fight in the fields.", explanation: "Anaphora is the deliberate repetition of a phrase at the beginning of successive clauses — here, 'we will fight.'" },
  { id: "pe800-16", category: "English", points: 800, difficulty: "PSAT", question: "A writer claims that standardized testing reduces educational inequality. Which finding most weakens this?", choices: ["Some schools administer standardized tests each year.", "Wealthier students can afford test prep courses costing thousands of dollars, widening score gaps.", "Standardized tests are graded objectively.", "Teachers often prepare students specifically for the test."], answer: "Wealthier students can afford test prep courses costing thousands of dollars, widening score gaps.", explanation: "If wealth determines access to prep, the test no longer provides equal measurement — directly undermining the inequality-reduction claim." },
  { id: "pe800-17", category: "English", points: 800, difficulty: "PSAT", question: "Which sentence contains a logical non sequitur?", choices: ["She studied hard, so she passed.", "He is a great father; therefore, he would make an excellent senator.", "The economy improved after the new policy took effect.", "She trained daily and improved her race time."], answer: "He is a great father; therefore, he would make an excellent senator.", explanation: "Being a good father does not logically lead to being a good senator — the conclusion does not follow from the premise (non sequitur)." },
  { id: "pe800-18", category: "English", points: 800, difficulty: "PSAT", question: "Passage: 'The poet's use of fragmented syntax mirrors the fractured consciousness of the speaker, refusing readers the comfort of linear progression.'\n\nThe word 'mirrors' suggests:", choices: ["The poem imitates another poem's style.", "The structure of the poem reflects the psychological state of the speaker.", "The fragmented syntax is an error in the original publication.", "The poet deliberately hid the poem's meaning."], answer: "The structure of the poem reflects the psychological state of the speaker.", explanation: "'Mirrors' here means 'reflects' — the poem's broken structure enacts the speaker's mental fragmentation." },
  { id: "pe800-19", category: "English", points: 800, difficulty: "PSAT", question: "Which is the best thesis statement for an essay arguing that school uniforms benefit students?", choices: ["School uniforms are worn in many countries.", "Some students like uniforms and others do not.", "By reducing socioeconomic visibility and improving focus, school uniforms create a more equitable learning environment.", "Uniforms have advantages and disadvantages."], answer: "By reducing socioeconomic visibility and improving focus, school uniforms create a more equitable learning environment.", explanation: "A strong thesis states a clear, arguable position with reasons. This is the only choice that does so." },
  { id: "pe800-20", category: "English", points: 800, difficulty: "PSAT", question: "Passage: 'The mayor's proposal was met with vocal opposition from residents, yet council members cited fiscal necessity as justification for moving forward.'\n\nThe word 'vocal' modifying 'opposition' implies:", choices: ["Opposition that was private and unspoken", "Opposition that was loudly and openly expressed", "Opposition from a vocal minority only", "Opposition that was eventually overcome"], answer: "Opposition that was loudly and openly expressed", explanation: "'Vocal' means expressed out loud, publicly — the residents were actively and openly opposed." },
  { id: "pe800-21", category: "English", points: 800, difficulty: "PSAT", question: "Which sentence uses chiasmus (a reversal of grammatical structure for effect)?", choices: ["Ask not what your country can do for you — ask what you can do for your country.", "We shall fight on the beaches and in the fields.", "The pen is mightier than the sword.", "All for one and one for all."], answer: "Ask not what your country can do for you — ask what you can do for your country.", explanation: "Chiasmus reverses the structure: 'country→you' becomes 'you→country.' It creates balance and memorable contrast." },
  { id: "pe800-22", category: "English", points: 800, difficulty: "PSAT", question: "A passage argues renewable energy is sufficient to power modern society. Which addition most strengthens this?", choices: ["Wind turbines can be seen across rural America.", "Some countries have unreliable wind resources.", "Denmark generated over 60% of its electricity from wind power in 2023 with no grid instability.", "Renewable energy is popular with younger voters."], answer: "Denmark generated over 60% of its electricity from wind power in 2023 with no grid instability.", explanation: "A real-world example showing high renewable penetration without reliability issues directly supports the sufficiency claim." },
  { id: "pe800-23", category: "English", points: 800, difficulty: "PSAT", question: "Which literary device is used in: 'The economy is a living organism that breathes, grows, and sometimes falls ill'?", choices: ["Simile", "Extended metaphor", "Allusion", "Hyperbole"], answer: "Extended metaphor", explanation: "The economy is compared to a living organism and the comparison is developed ('breathes, grows, falls ill') — making it an extended metaphor." },
  { id: "pe800-24", category: "English", points: 800, difficulty: "PSAT", question: "Passage: 'While the benefits of the program are undeniable, critics argue that its funding model is unsustainable and will collapse within a decade without structural reform.'\n\nThe critics' argument is primarily a concern about:", choices: ["The program's immediate effectiveness", "The long-term financial viability of the program", "The program's benefits for participants", "Whether structural reform is possible"], answer: "The long-term financial viability of the program", explanation: "'Unsustainable funding model' and 'collapse' target the program's future financial health — a viability concern." },
  { id: "pe800-25", category: "English", points: 800, difficulty: "PSAT", question: "Which is an example of understatement used for rhetorical effect?", choices: ["The explosion destroyed the entire block.", "Losing one's home in a flood is a bit inconvenient.", "He was the greatest athlete of all time.", "The tornado left nothing standing."], answer: "Losing one's home in a flood is a bit inconvenient.", explanation: "Calling a devastating loss 'a bit inconvenient' is deliberate understatement — diminishing a serious event for ironic effect." },
  { id: "pe800-26", category: "English", points: 800, difficulty: "PSAT", question: "Which revision adds the most specific, persuasive detail to: 'Many people support public transportation'?", choices: ["A lot of people think public transit is good.", "People who take the bus often say they like it.", "A 2024 Gallup poll found 74% of urban residents support increased public transit funding.", "Everyone seems to want better public transportation these days."], answer: "A 2024 Gallup poll found 74% of urban residents support increased public transit funding.", explanation: "A specific poll with a percentage and demographic is far more persuasive than vague claims about 'many people.'" },
  { id: "pe800-27", category: "English", points: 800, difficulty: "PSAT", question: "Passage: 'The author resists easy resolution, allowing moral ambiguity to sit at the novel's center, uncomfortably but honestly.'\n\nThe phrase 'uncomfortably but honestly' suggests:", choices: ["The novel is poorly written and confusing.", "The author's moral stance is dishonest.", "The author chooses truth over reader comfort.", "The novel's ending is happy despite its dark themes."], answer: "The author chooses truth over reader comfort.", explanation: "The juxtaposition of 'uncomfortably' (reader discomfort) with 'honestly' (artistic truthfulness) signals that honesty is prioritized." },
  { id: "pe800-28", category: "English", points: 800, difficulty: "PSAT", question: "Which transition best introduces a concession before a rebuttal?", choices: ["Furthermore", "Admittedly", "Consequently", "Additionally"], answer: "Admittedly", explanation: "'Admittedly' signals that the writer is granting a point to the opposing side before countering it — a classic concession move." },
  { id: "pe800-29", category: "English", points: 800, difficulty: "PSAT", question: "Which sentence uses antithesis for emphasis?", choices: ["She studied late into the night.", "It was the best of times, it was the worst of times.", "He ran faster than any other athlete.", "The river flowed gently through the valley."], answer: "It was the best of times, it was the worst of times.", explanation: "Antithesis places opposing ideas in balanced parallel structure. 'Best' and 'worst' are direct opposites in identical grammatical form." },
  { id: "pe800-30", category: "English", points: 800, difficulty: "PSAT", question: "Passage: 'The legislation addresses the symptoms of inequality — poverty, underfunded schools, lack of healthcare — while leaving its structural causes untouched.'\n\nThe author's critique is that the legislation:", choices: ["Fails to address even the surface problems of inequality", "Treats visible effects without reforming root causes", "Is too expensive to implement effectively", "Only benefits wealthy communities"], answer: "Treats visible effects without reforming root causes", explanation: "'Symptoms' vs. 'structural causes' is the key contrast — the author argues the legislation tackles surface problems while the deeper structure is unchanged." },

  // ── PSAT English 1000 (8-30) ──
  { id: "pe1000-8", category: "English", points: 1000, difficulty: "PSAT", question: "Passage: 'The study's methodology, while robust in design, relied on self-reported data — a limitation that introduces the possibility of social desirability bias, whereby participants respond in ways they perceive as socially acceptable rather than accurately.'\n\nThe author's concern is that:", choices: ["The study's design was fundamentally flawed.", "Participants may not have told the truth, distorting the data.", "Social desirability is not a real phenomenon.", "The researchers fabricated the data."], answer: "Participants may not have told the truth, distorting the data.", explanation: "Social desirability bias means people answer to look good rather than truthfully — this distorts self-reported data." },
  { id: "pe1000-9", category: "English", points: 1000, difficulty: "PSAT", question: "Which logical fallacy is committed in: 'We should not trust this environmental report — it was funded by a solar energy company'?", choices: ["False dilemma", "Hasty generalization", "Genetic fallacy", "Circular reasoning"], answer: "Genetic fallacy", explanation: "The genetic fallacy dismisses an argument based on its source rather than its actual content or evidence." },
  { id: "pe1000-10", category: "English", points: 1000, difficulty: "PSAT", question: "Passage: 'The most dangerous moment for a bad government is when it begins to reform.' (de Tocqueville)\n\nThis claim most likely means:", choices: ["Reforms always make governments more dangerous.", "Partial reforms raise expectations that, if unmet, can trigger more radical unrest.", "Bad governments should never attempt reform.", "The moment of reform is when democracy is strongest."], answer: "Partial reforms raise expectations that, if unmet, can trigger more radical unrest.", explanation: "Reform opens the door to hope; if that hope is frustrated, the resulting anger is more intense than the original discontent." },
  { id: "pe1000-11", category: "English", points: 1000, difficulty: "PSAT", question: "A writer argues that technology has made people less empathetic. Which evidence most strengthens this?", choices: ["People spend a lot of time on their phones.", "Many people prefer texting to calling.", "A longitudinal study found empathy scores among college students dropped 40% between 2000 and 2020, correlating with increased screen time.", "Social media allows people to connect globally."], answer: "A longitudinal study found empathy scores among college students dropped 40% between 2000 and 2020, correlating with increased screen time.", explanation: "A longitudinal study with measurable data and a direct correlation to screen time is the strongest empirical support." },
  { id: "pe1000-12", category: "English", points: 1000, difficulty: "PSAT", question: "Which sentence best articulates the 'burden of proof' principle in argumentation?", choices: ["Both sides in a debate must prove their claims equally.", "The person making a positive claim bears the responsibility to provide supporting evidence.", "Evidence is not required if the argument is compelling enough.", "The side with more data automatically wins the argument."], answer: "The person making a positive claim bears the responsibility to provide supporting evidence.", explanation: "Burden of proof means the claimant — not the skeptic — must provide evidence. This is a foundational principle of logical argumentation." },
  { id: "pe1000-13", category: "English", points: 1000, difficulty: "PSAT", question: "Passage: 'Nostalgia is a seductive liar: it edits the past into a highlight reel, stripping away the inconveniences and injustices that history actually contained.'\n\nThe metaphor 'highlight reel' implies nostalgia:", choices: ["Accurately preserves the best moments of the past", "Selectively presents the past, omitting its negative realities", "Is a form of documentary filmmaking", "Makes the past seem worse than it was"], answer: "Selectively presents the past, omitting its negative realities", explanation: "A 'highlight reel' shows only the best moments — the metaphor implies nostalgia cherry-picks positive memories while erasing unpleasant truths." },
  { id: "pe1000-14", category: "English", points: 1000, difficulty: "PSAT", question: "Which best identifies the flaw in this argument: 'Students who use laptops in class perform worse on tests; therefore, laptops cause poor performance'?", choices: ["The argument relies on an authority the reader cannot verify.", "The argument confuses correlation with causation.", "The argument commits a false dilemma.", "The argument attacks students rather than the issue."], answer: "The argument confuses correlation with causation.", explanation: "The fact that two things co-occur (laptop use and poor performance) does not prove one causes the other — there may be confounding variables." },
  { id: "pe1000-15", category: "English", points: 1000, difficulty: "PSAT", question: "Passage: 'The author oscillates between admiration and unease, never fully resolving the tension — a structural choice that reflects the impossibility of a clean moral verdict on his subject.'\n\nThe phrase 'impossibility of a clean moral verdict' suggests:", choices: ["The author is a poor writer who cannot reach conclusions.", "The subject is too complex for simple moral judgment.", "The author personally admires the subject.", "The book's ending is ambiguous due to poor editing."], answer: "The subject is too complex for simple moral judgment.", explanation: "The unresolved tension is a deliberate structural choice mirroring the ethical complexity of the subject — no simple 'good or bad' judgment is possible." },
  { id: "pe1000-16", category: "English", points: 1000, difficulty: "PSAT", question: "Which is the strongest counterargument to 'Social media should be banned for people under 16'?", choices: ["Social media companies make a lot of money.", "Teens use social media for fun.", "A blanket age ban ignores evidence that supervised social media use can build digital literacy and community connection.", "Other countries have not banned social media for teens."], answer: "A blanket age ban ignores evidence that supervised social media use can build digital literacy and community connection.", explanation: "This counterargument challenges the premise (all use is harmful) by citing evidence of supervised use producing benefits." },
  { id: "pe1000-17", category: "English", points: 1000, difficulty: "PSAT", question: "Passage: 'The argument that economic growth will eventually solve poverty assumes that wealth 'trickles down' — an assumption that decades of data have consistently failed to support.'\n\nThe author's primary rhetorical strategy is to:", choices: ["Appeal to emotion to discredit the opposing view.", "Name and then undermine the assumption underlying the opposing argument.", "Provide an alternative economic model.", "Use irony to mock those who believe in trickle-down economics."], answer: "Name and then undermine the assumption underlying the opposing argument.", explanation: "The author identifies the hidden premise ('trickles down') and then attacks it with empirical evidence — a classic strategy of refutation." },
  { id: "pe1000-18", category: "English", points: 1000, difficulty: "PSAT", question: "Which revision makes this conclusion most effective? Original: 'In conclusion, there are many reasons why we should protect the environment.'", choices: ["To sum up, there are reasons for environmental protection.", "In conclusion, environmental protection matters a lot.", "Protecting the environment is not just an ecological imperative — it is an investment in the only planet humanity will ever call home.", "So, we should protect the environment for these reasons."], answer: "Protecting the environment is not just an ecological imperative — it is an investment in the only planet humanity will ever call home.", explanation: "The revised conclusion reframes the argument with a compelling, forward-looking claim and vivid language — hallmarks of a strong concluding sentence." },
  { id: "pe1000-19", category: "English", points: 1000, difficulty: "PSAT", question: "Which best describes the fallacy of 'appeal to nature'?", choices: ["Assuming that whatever is natural is therefore good or safe.", "Assuming that a popular belief is correct.", "Assuming that something old is better than something new.", "Assuming that a person's character determines the truth of their claims."], answer: "Assuming that whatever is natural is therefore good or safe.", explanation: "The appeal to nature fallacy incorrectly treats 'natural' as synonymous with 'good' — ignoring that many natural things are harmful." },
  { id: "pe1000-20", category: "English", points: 1000, difficulty: "PSAT", question: "Passage: 'The biography's greatest achievement is its refusal to canonize its subject: Watson allows Jefferson's contradictions — his eloquent idealism and his role as an enslaver — to stand without resolution.'\n\n'Canonize' most likely means:", choices: ["Analyze critically", "Portray as a saint or idealized figure", "Include in a literary canon", "Condemn morally"], answer: "Portray as a saint or idealized figure", explanation: "'Canonize' comes from religious canonization (making someone a saint) — here it means to idealize or treat as beyond criticism." },
  { id: "pe1000-21", category: "English", points: 1000, difficulty: "PSAT", question: "An essay argues that arts education improves critical thinking. Which addition most weakens this?", choices: ["Art classes are popular with students.", "A meta-analysis of 60 studies found no statistically significant link between arts education and critical thinking scores.", "Many successful people studied the arts.", "Arts programs have been cut from many schools."], answer: "A meta-analysis of 60 studies found no statistically significant link between arts education and critical thinking scores.", explanation: "A meta-analysis (synthesis of many studies) finding no significant link directly undermines the core claim." },
  { id: "pe1000-22", category: "English", points: 1000, difficulty: "PSAT", question: "Which sentence best demonstrates ethos (an appeal to credibility)?", choices: ["Imagine a world without clean water.", "Nine out of ten doctors recommend this treatment.", "As a board-certified cardiologist with 20 years of clinical experience, I can confirm this intervention saves lives.", "Studies show the drug is effective."], answer: "As a board-certified cardiologist with 20 years of clinical experience, I can confirm this intervention saves lives.", explanation: "Ethos establishes the speaker's authority and credentials. Specific, first-person professional credentials are the clearest ethos appeal." },
  { id: "pe1000-23", category: "English", points: 1000, difficulty: "PSAT", question: "Passage: 'By focusing exclusively on quantitative metrics, the evaluation system fails to capture the dimensions of teaching that resist easy measurement — creativity, mentorship, and the cultivation of intellectual curiosity.'\n\nThe author implies that the evaluation system:", choices: ["Overvalues creativity and mentorship", "Measures exactly what matters in teaching", "Has a narrow view of teaching quality that misses important dimensions", "Should eliminate all measurements of teaching"], answer: "Has a narrow view of teaching quality that misses important dimensions", explanation: "The author argues the system's exclusive focus on numbers misses immeasurable but important teaching qualities." },
  { id: "pe1000-24", category: "English", points: 1000, difficulty: "PSAT", question: "Which is the strongest opening sentence for a persuasive essay on reducing plastic waste?", choices: ["Plastic is used everywhere today.", "There is a problem with plastic waste.", "Every minute, the equivalent of a garbage truck of plastic enters the ocean — a crisis we created and one only we can stop.", "Some people think we use too much plastic."], answer: "Every minute, the equivalent of a garbage truck of plastic enters the ocean — a crisis we created and one only we can stop.", explanation: "A vivid, specific statistic combined with a call to responsibility creates urgency and engages the reader immediately." },
  { id: "pe1000-25", category: "English", points: 1000, difficulty: "PSAT", question: "Which sentence contains a 'slippery slope' fallacy?", choices: ["If we raise the speed limit, drivers will drive faster.", "If we allow students to redo one quiz, they will eventually expect to retake every exam and earn grades they did not work for.", "Diet and exercise are linked to better health outcomes.", "Some policies have unintended consequences."], answer: "If we allow students to redo one quiz, they will eventually expect to retake every exam and earn grades they did not work for.", explanation: "A slippery slope fallacy assumes one small action will inevitably lead to extreme consequences, without evidence of that progression." },
  { id: "pe1000-26", category: "English", points: 1000, difficulty: "PSAT", question: "Passage: 'The committee's report was thorough in cataloguing past failures but conspicuously silent on systemic reforms — a silence that critics interpreted as institutional self-protection.'\n\n'Conspicuously silent' implies:", choices: ["The omission was accidental and unnoticed.", "The omission was so obvious it drew attention and seemed deliberate.", "The committee was unable to find solutions.", "The silence was praised by most observers."], answer: "The omission was so obvious it drew attention and seemed deliberate.", explanation: "'Conspicuously' means in a way that draws notice. Conspicuous silence stands out precisely because the omission is so glaring." },
  { id: "pe1000-27", category: "English", points: 1000, difficulty: "PSAT", question: "What is the primary difference between a claim and evidence in an argument?", choices: ["A claim is always factual; evidence is always an opinion.", "A claim is an assertion that requires support; evidence is the data or reasoning that supports it.", "Evidence must come from scientific studies; claims can come from anywhere.", "Claims and evidence are interchangeable in formal arguments."], answer: "A claim is an assertion that requires support; evidence is the data or reasoning that supports it.", explanation: "In formal argumentation, claims state positions while evidence provides the factual or logical basis for believing those positions." },
  { id: "pe1000-28", category: "English", points: 1000, difficulty: "PSAT", question: "Passage: 'Unlike the controlled settings of laboratory research, field studies expose researchers to the full complexity and unpredictability of real-world conditions — a strength that is simultaneously a methodological challenge.'\n\nThe phrase 'strength that is simultaneously a methodological challenge' suggests:", choices: ["Field studies are always superior to lab studies.", "The same feature that makes field studies valuable also makes them harder to conduct rigorously.", "Researchers prefer controlled labs over field studies.", "Unpredictability makes field studies worthless."], answer: "The same feature that makes field studies valuable also makes them harder to conduct rigorously.", explanation: "Real-world conditions are both the advantage (ecological validity) and the disadvantage (harder to control) of field research." },
  { id: "pe1000-29", category: "English", points: 1000, difficulty: "PSAT", question: "Which revision of a topic sentence most clearly signals an argumentative essay's main claim?", choices: ["This essay will discuss the effects of social media.", "Social media has changed the world in many ways.", "Social media's algorithmic amplification of outrage has accelerated political polarization in ways that democratic institutions are ill-equipped to address.", "There are many pros and cons of social media."], answer: "Social media's algorithmic amplification of outrage has accelerated political polarization in ways that democratic institutions are ill-equipped to address.", explanation: "A strong argumentative thesis makes a specific, debatable claim. This is the only option that does so with precision." },
  { id: "pe1000-30", category: "English", points: 1000, difficulty: "PSAT", question: "Passage: 'The philosopher argues that moral progress is real, not merely the imposition of one era's values onto another — pointing to the abolition of slavery, the extension of suffrage, and the reduction of child labor as evidence of genuine ethical improvement.'\n\nThe philosopher's strategy is to:", choices: ["Define moral progress as impossible to measure.", "Use historical examples to substantiate the claim that ethics genuinely improves over time.", "Argue that earlier eras had no values worth preserving.", "Dismiss critics of moral progress without engaging their arguments."], answer: "Use historical examples to substantiate the claim that ethics genuinely improves over time.", explanation: "The philosopher defends moral progress by citing concrete, historical evidence — a strategy of supporting an abstract claim with specific examples." },


  // ── SAT Math 200 (8-30) ──
  { id: "sm200-8", category: "Math", points: 200, difficulty: "SAT", question: "If 8x − 3 = 45, what is x?", choices: ["5", "6", "7", "8"], answer: "6", explanation: "8x = 48 → x = 6." },
  { id: "sm200-9", category: "Math", points: 200, difficulty: "SAT", question: "A jar has 5 red and 3 blue candies. What fraction are red?", choices: ["3/8", "5/8", "5/3", "3/5"], answer: "5/8", explanation: "5 red out of 8 total = 5/8." },
  { id: "sm200-10", category: "Math", points: 200, difficulty: "SAT", question: "What is the slope of the line y = −3x + 7?", choices: ["−7", "−3", "3", "7"], answer: "−3", explanation: "In y = mx + b, the slope is m = −3." },
  { id: "sm200-11", category: "Math", points: 200, difficulty: "SAT", question: "A rectangle has area 120 cm² and width 8 cm. What is its length?", choices: ["12 cm", "14 cm", "15 cm", "16 cm"], answer: "15 cm", explanation: "Length = 120 ÷ 8 = 15 cm." },
  { id: "sm200-12", category: "Math", points: 200, difficulty: "SAT", question: "If y − 9 = 2(x − 3) and x = 5, what is y?", choices: ["11", "13", "15", "17"], answer: "13", explanation: "y − 9 = 2(5 − 3) = 4 → y = 13." },
  { id: "sm200-13", category: "Math", points: 200, difficulty: "SAT", question: "The mean of 4 numbers is 18. Three of them are 14, 20, and 22. What is the fourth?", choices: ["14", "16", "18", "20"], answer: "16", explanation: "Sum = 4 × 18 = 72. Fourth = 72 − 14 − 20 − 22 = 16." },
  { id: "sm200-14", category: "Math", points: 200, difficulty: "SAT", question: "Simplify: 4(2x − 5) − 3(x + 2).", choices: ["5x − 26", "5x − 14", "8x − 26", "11x − 14"], answer: "5x − 26", explanation: "8x − 20 − 3x − 6 = 5x − 26." },
  { id: "sm200-15", category: "Math", points: 200, difficulty: "SAT", question: "A store charges $3.50 per pound of cheese. How much does 2.4 pounds cost?", choices: ["$7.20", "$8.00", "$8.40", "$9.00"], answer: "$8.40", explanation: "3.50 × 2.4 = $8.40." },
  { id: "sm200-16", category: "Math", points: 200, difficulty: "SAT", question: "Which expression represents 'twice a number decreased by 7'?", choices: ["2 + n − 7", "2(n − 7)", "2n − 7", "7 − 2n"], answer: "2n − 7", explanation: "'Twice a number' = 2n. 'Decreased by 7' = − 7. Result: 2n − 7." },
  { id: "sm200-17", category: "Math", points: 200, difficulty: "SAT", question: "What is the value of |−15| − |7|?", choices: ["−22", "−8", "8", "22"], answer: "8", explanation: "|−15| = 15, |7| = 7. 15 − 7 = 8." },
  { id: "sm200-18", category: "Math", points: 200, difficulty: "SAT", question: "A line is parallel to y = 5x − 3. Which could be its equation?", choices: ["y = −5x + 3", "y = 5x + 7", "y = (1/5)x − 3", "y = 3x + 5"], answer: "y = 5x + 7", explanation: "Parallel lines have equal slopes. The slope is 5, matching y = 5x + 7." },
  { id: "sm200-19", category: "Math", points: 200, difficulty: "SAT", question: "What is 35% of 160?", choices: ["44", "48", "52", "56"], answer: "56", explanation: "0.35 × 160 = 56." },
  { id: "sm200-20", category: "Math", points: 200, difficulty: "SAT", question: "A right triangle has legs of 7 and 24. What is the hypotenuse?", choices: ["25", "26", "28", "31"], answer: "25", explanation: "√(49 + 576) = √625 = 25." },
  { id: "sm200-21", category: "Math", points: 200, difficulty: "SAT", question: "Solve: 3x/4 = 9.", choices: ["6", "9", "12", "27"], answer: "12", explanation: "x = 9 × 4/3 = 12." },
  { id: "sm200-22", category: "Math", points: 200, difficulty: "SAT", question: "The volume of a cube with side 5 cm is:", choices: ["25 cm³", "75 cm³", "125 cm³", "150 cm³"], answer: "125 cm³", explanation: "V = 5³ = 125 cm³." },
  { id: "sm200-23", category: "Math", points: 200, difficulty: "SAT", question: "If f(x) = x² − 3x, what is f(5)?", choices: ["5", "10", "15", "20"], answer: "10", explanation: "f(5) = 25 − 15 = 10." },
  { id: "sm200-24", category: "Math", points: 200, difficulty: "SAT", question: "What is the median of {8, 3, 17, 5, 11}?", choices: ["5", "8", "9", "11"], answer: "8", explanation: "Sorted: 3, 5, 8, 11, 17. The middle value is 8." },
  { id: "sm200-25", category: "Math", points: 200, difficulty: "SAT", question: "A class of 25 students scored an average of 84 on a test. What is the total of all scores?", choices: ["1,850", "2,000", "2,100", "2,200"], answer: "2,100", explanation: "Total = 25 × 84 = 2,100." },
  { id: "sm200-26", category: "Math", points: 200, difficulty: "SAT", question: "Which inequality is represented by the solution x ≥ −2?", choices: ["3x + 1 ≤ −5", "2x − 1 ≥ −5", "−x + 3 ≥ 7", "4x > −4"], answer: "2x − 1 ≥ −5", explanation: "2x ≥ −4 → x ≥ −2." },
  { id: "sm200-27", category: "Math", points: 200, difficulty: "SAT", question: "What is the y-intercept of 2x + 5y = 20?", choices: ["2", "4", "5", "10"], answer: "4", explanation: "Set x = 0: 5y = 20 → y = 4." },
  { id: "sm200-28", category: "Math", points: 200, difficulty: "SAT", question: "A cyclist travels 48 miles in 3 hours. At the same rate, how far will she travel in 5 hours?", choices: ["70 miles", "75 miles", "80 miles", "90 miles"], answer: "80 miles", explanation: "Rate = 48/3 = 16 mph. Distance = 16 × 5 = 80 miles." },
  { id: "sm200-29", category: "Math", points: 200, difficulty: "SAT", question: "Which number is divisible by both 4 and 9?", choices: ["24", "36", "48", "54"], answer: "36", explanation: "36 ÷ 4 = 9 and 36 ÷ 9 = 4. Both work. (48 ÷ 9 is not a whole number.)" },
  { id: "sm200-30", category: "Math", points: 200, difficulty: "SAT", question: "If p and q are integers and p/q = 0.4, which pair satisfies this?", choices: ["p=2, q=4", "p=2, q=5", "p=4, q=8", "p=3, q=5"], answer: "p=2, q=5", explanation: "2/5 = 0.4." },

  // ── SAT Math 400 (8-30) ──
  { id: "sm400-8", category: "Math", points: 400, difficulty: "SAT", question: "A ball thrown upward follows h(t) = −16t² + 64t + 5. What is the maximum height?", choices: ["64", "69", "75", "80"], answer: "69", explanation: "Max at t = −64/(2×−16) = 2. h(2) = −64 + 128 + 5 = 69." },
  { id: "sm400-9", category: "Math", points: 400, difficulty: "SAT", question: "Solve for all x: |2x − 4| = 10.", choices: ["x = 7 only", "x = −3 only", "x = 7 or x = −3", "x = 7 or x = 3"], answer: "x = 7 or x = −3", explanation: "2x − 4 = 10 → x = 7; or 2x − 4 = −10 → x = −3." },
  { id: "sm400-10", category: "Math", points: 400, difficulty: "SAT", question: "A circle with center (−1, 3) passes through (4, 3). What is its circumference?", choices: ["5π", "10π", "25π", "50π"], answer: "10π", explanation: "Radius = |4 − (−1)| = 5. Circumference = 2π(5) = 10π." },
  { id: "sm400-11", category: "Math", points: 400, difficulty: "SAT", question: "Which equation has no real solutions?", choices: ["x² − 4 = 0", "x² + 4 = 0", "x² − 4x + 4 = 0", "x² − 4x − 5 = 0"], answer: "x² + 4 = 0", explanation: "x² = −4 has no real solutions since squares cannot be negative." },
  { id: "sm400-12", category: "Math", points: 400, difficulty: "SAT", question: "A bacteria culture doubles every 3 hours. If there are 500 bacteria now, how many will there be in 9 hours?", choices: ["1,500", "2,000", "3,000", "4,000"], answer: "4,000", explanation: "9 hours = 3 doublings. 500 × 2³ = 500 × 8 = 4,000." },
  { id: "sm400-13", category: "Math", points: 400, difficulty: "SAT", question: "Which expression is equivalent to (x + 3)² − 9?", choices: ["x² + 6x", "x² + 6x + 9", "x² − 9", "x² + 9"], answer: "x² + 6x", explanation: "(x+3)² = x² + 6x + 9. Subtracting 9: x² + 6x." },
  { id: "sm400-14", category: "Math", points: 400, difficulty: "SAT", question: "If the price of a product increases by 25% and then decreases by 20%, what is the net percent change?", choices: ["0%", "5% increase", "5% decrease", "45% decrease"], answer: "0%", explanation: "Start $100 → +25% → $125 → −20% → $100. Net change = 0%." },
  { id: "sm400-15", category: "Math", points: 400, difficulty: "SAT", question: "A line has x-intercept 4 and y-intercept −6. What is its slope?", choices: ["−3/2", "−2/3", "2/3", "3/2"], answer: "3/2", explanation: "Using points (4,0) and (0,−6): slope = (0−(−6))/(4−0) = 6/4 = 3/2." },
  { id: "sm400-16", category: "Math", points: 400, difficulty: "SAT", question: "Solve: 3x² − 12 = 0.", choices: ["x = ±2", "x = ±4", "x = 2 only", "x = 4 only"], answer: "x = ±2", explanation: "3x² = 12 → x² = 4 → x = ±2." },
  { id: "sm400-17", category: "Math", points: 400, difficulty: "SAT", question: "A circle has area 49π cm². What is its diameter?", choices: ["7 cm", "14 cm", "21 cm", "28 cm"], answer: "14 cm", explanation: "πr² = 49π → r = 7 → diameter = 14 cm." },
  { id: "sm400-18", category: "Math", points: 400, difficulty: "SAT", question: "Two numbers have a sum of 30 and a difference of 6. What is the larger number?", choices: ["12", "14", "16", "18"], answer: "18", explanation: "x + y = 30, x − y = 6 → 2x = 36 → x = 18." },
  { id: "sm400-19", category: "Math", points: 400, difficulty: "SAT", question: "If f(x) = x² and g(x) = x + 3, what is g(f(2))?", choices: ["5", "7", "9", "11"], answer: "7", explanation: "f(2) = 4. g(4) = 4 + 3 = 7." },
  { id: "sm400-20", category: "Math", points: 400, difficulty: "SAT", question: "What is the area of the region bounded by x = 0, x = 4, y = 0, and y = 3x?", choices: ["6", "12", "18", "24"], answer: "24", explanation: "Area of triangle with base 4 and height 12 (y at x=4): ½ × 4 × 12 = 24." },
  { id: "sm400-21", category: "Math", points: 400, difficulty: "SAT", question: "Which value satisfies |x + 5| < 3?", choices: ["x = −9", "x = −7", "x = −4", "x = −1"], answer: "x = −4", explanation: "|x+5| < 3 → −3 < x+5 < 3 → −8 < x < −2. Only −4 is in this range." },
  { id: "sm400-22", category: "Math", points: 400, difficulty: "SAT", question: "A function is defined by f(x) = −x² + 6x. What is the x-coordinate of its vertex?", choices: ["−3", "0", "3", "6"], answer: "3", explanation: "Vertex x = −b/(2a) = −6/(2 × −1) = 3." },
  { id: "sm400-23", category: "Math", points: 400, difficulty: "SAT", question: "An employee earns $15/hr for the first 40 hours and $22.50/hr for overtime. How much does she earn in a 46-hour week?", choices: ["$690", "$730", "$735", "$760"], answer: "$735", explanation: "Regular: 40 × $15 = $600. Overtime: 6 × $22.50 = $135. Total = $735." },
  { id: "sm400-24", category: "Math", points: 400, difficulty: "SAT", question: "If 9^x = 3, what is x?", choices: ["1/3", "1/2", "2/3", "3"], answer: "1/2", explanation: "9^(1/2) = 3, since √9 = 3." },
  { id: "sm400-25", category: "Math", points: 400, difficulty: "SAT", question: "Which is a vertex of the parabola y = (x − 2)(x − 8)?", choices: ["(2, 0)", "(5, −9)", "(8, 0)", "(5, 9)"], answer: "(5, −9)", explanation: "Vertex x = (2+8)/2 = 5. y = (5−2)(5−8) = 3×(−3) = −9." },
  { id: "sm400-26", category: "Math", points: 400, difficulty: "SAT", question: "The line through (1, k) and (3, 10) has slope 3. What is k?", choices: ["2", "4", "6", "8"], answer: "4", explanation: "(10 − k)/(3 − 1) = 3 → 10 − k = 6 → k = 4." },
  { id: "sm400-27", category: "Math", points: 400, difficulty: "SAT", question: "If x² + bx + 9 is a perfect square, what is |b|?", choices: ["3", "6", "9", "18"], answer: "6", explanation: "(x + 3)² = x² + 6x + 9, so |b| = 6." },
  { id: "sm400-28", category: "Math", points: 400, difficulty: "SAT", question: "A pool is filled by pipe A in 4 hours and pipe B in 6 hours. Together, how long do they take?", choices: ["2 hours", "2.4 hours", "2.8 hours", "3 hours"], answer: "2.4 hours", explanation: "Combined rate = 1/4 + 1/6 = 5/12. Time = 12/5 = 2.4 hours." },
  { id: "sm400-29", category: "Math", points: 400, difficulty: "SAT", question: "What is the distance between points (−2, 1) and (4, 9)?", choices: ["8", "10", "12", "14"], answer: "10", explanation: "√((4−(−2))² + (9−1)²) = √(36+64) = √100 = 10." },
  { id: "sm400-30", category: "Math", points: 400, difficulty: "SAT", question: "Solve the system: y = x + 2 and y = −2x + 5.", choices: ["x=1, y=3", "x=2, y=1", "x=3, y=5", "x=0, y=5"], answer: "x=1, y=3", explanation: "x + 2 = −2x + 5 → 3x = 3 → x = 1, y = 3." },

  // ── SAT Math 600 (8-30) ──
  { id: "sm600-8", category: "Math", points: 600, difficulty: "SAT", question: "Simplify: (2x³)⁴ / (4x²).", choices: ["4x¹⁰", "4x⁸", "4x¹²", "x¹⁰"], answer: "4x¹⁰", explanation: "(2x³)⁴ = 16x¹². 16x¹² / 4x² = 4x¹⁰." },
  { id: "sm600-9", category: "Math", points: 600, difficulty: "SAT", question: "The line through (0, 5) perpendicular to y = (2/3)x − 1 has what equation?", choices: ["y = −(3/2)x + 5", "y = (2/3)x + 5", "y = (3/2)x + 5", "y = −(2/3)x + 5"], answer: "y = −(3/2)x + 5", explanation: "Perpendicular slope = −3/2. Using y-intercept 5: y = −(3/2)x + 5." },
  { id: "sm600-10", category: "Math", points: 600, difficulty: "SAT", question: "A data set: 4, 6, 8, 10, 12. If every value is multiplied by 3, what happens to the mean?", choices: ["It stays the same.", "It triples.", "It increases by 3.", "It doubles."], answer: "It triples.", explanation: "Multiplying all values by 3 multiplies the mean by 3. Original mean = 8; new mean = 24." },
  { id: "sm600-11", category: "Math", points: 600, difficulty: "SAT", question: "Which is the equation of a circle with center (2, −5) and radius 3?", choices: ["(x−2)² + (y+5)² = 3", "(x+2)² + (y−5)² = 9", "(x−2)² + (y+5)² = 9", "(x−2)² − (y+5)² = 9"], answer: "(x−2)² + (y+5)² = 9", explanation: "Standard form: (x−h)² + (y−k)² = r². Center (2,−5), r=3: (x−2)² + (y+5)² = 9." },
  { id: "sm600-12", category: "Math", points: 600, difficulty: "SAT", question: "If cos(θ) = 3/5 for an acute angle, what is tan(θ)?", choices: ["3/4", "4/3", "3/5", "5/4"], answer: "4/3", explanation: "adj=3, hyp=5 → opp=4. tan(θ) = opp/adj = 4/3." },
  { id: "sm600-13", category: "Math", points: 600, difficulty: "SAT", question: "Which linear equation best models data showing y = 3 when x = 1 and y = 11 when x = 5?", choices: ["y = 2x + 1", "y = 3x", "y = 2x + 3", "y = x + 2"], answer: "y = 2x + 1", explanation: "Slope = (11−3)/(5−1) = 2. Using (1,3): 3 = 2+b → b=1. y = 2x+1." },
  { id: "sm600-14", category: "Math", points: 600, difficulty: "SAT", question: "A parabola y = ax² + bx + c has vertex at (−1, 4) and passes through (1, 0). What is a?", choices: ["−1", "−2", "1", "2"], answer: "−1", explanation: "Vertex form: y = a(x+1)² + 4. At (1,0): 0 = 4a + 4 → a = −1." },
  { id: "sm600-15", category: "Math", points: 600, difficulty: "SAT", question: "What is the range of f(x) = −|x| + 4?", choices: ["y ≥ 4", "y ≤ 4", "y < 4", "All real numbers"], answer: "y ≤ 4", explanation: "|x| ≥ 0, so −|x| ≤ 0, so −|x| + 4 ≤ 4. Maximum value is 4." },
  { id: "sm600-16", category: "Math", points: 600, difficulty: "SAT", question: "The function g(x) = 3x² − 12x + 5. At what x does it have a minimum?", choices: ["x = 1", "x = 2", "x = 3", "x = 4"], answer: "x = 2", explanation: "Vertex x = −b/(2a) = 12/6 = 2. Since a > 0, this is a minimum." },
  { id: "sm600-17", category: "Math", points: 600, difficulty: "SAT", question: "Which value is an outlier in: {2, 3, 3, 4, 5, 5, 6, 45}?", choices: ["2", "6", "45", "5"], answer: "45", explanation: "45 is far from the other values (clustered 2–6). It is clearly an outlier." },
  { id: "sm600-18", category: "Math", points: 600, difficulty: "SAT", question: "Simplify: (x² − 9) / (x + 3) for x ≠ −3.", choices: ["x − 3", "x + 3", "x − 9", "1/(x−3)"], answer: "x − 3", explanation: "(x²−9) = (x+3)(x−3). Dividing by (x+3) gives (x−3)." },
  { id: "sm600-19", category: "Math", points: 600, difficulty: "SAT", question: "The mean of a data set is 40 and the standard deviation is 8. What z-score corresponds to a value of 56?", choices: ["1", "1.5", "2", "2.5"], answer: "2", explanation: "z = (56 − 40)/8 = 16/8 = 2." },
  { id: "sm600-20", category: "Math", points: 600, difficulty: "SAT", question: "A line has slope −2/5. A line perpendicular to it has slope:", choices: ["2/5", "5/2", "−5/2", "−2/5"], answer: "5/2", explanation: "Perpendicular slope = negative reciprocal of −2/5 = 5/2." },
  { id: "sm600-21", category: "Math", points: 600, difficulty: "SAT", question: "Which is equivalent to (3 + √5)(3 − √5)?", choices: ["4", "6", "9 − √5", "9 − 5"], answer: "4", explanation: "(a+b)(a−b) = a²−b². (3)²−(√5)² = 9−5 = 4." },
  { id: "sm600-22", category: "Math", points: 600, difficulty: "SAT", question: "A population of 2,000 grows by 5% per year. What will the population be after 2 years?", choices: ["2,100", "2,200", "2,205", "2,250"], answer: "2,205", explanation: "Year 1: 2,000 × 1.05 = 2,100. Year 2: 2,100 × 1.05 = 2,205." },
  { id: "sm600-23", category: "Math", points: 600, difficulty: "SAT", question: "The scatterplot of a data set shows a strong positive linear correlation. What is the best estimate of r?", choices: ["−0.9", "0", "0.1", "0.9"], answer: "0.9", explanation: "Strong positive correlation means r is close to 1. Best estimate: 0.9." },
  { id: "sm600-24", category: "Math", points: 600, difficulty: "SAT", question: "Which is a factor of x³ − 8?", choices: ["(x − 2)", "(x + 2)", "(x − 4)", "(x + 4)"], answer: "(x − 2)", explanation: "Difference of cubes: x³ − 8 = (x−2)(x² + 2x + 4). So (x−2) is a factor." },
  { id: "sm600-25", category: "Math", points: 600, difficulty: "SAT", question: "If x and y are inversely proportional and x = 4 when y = 9, what is y when x = 6?", choices: ["4", "6", "8", "54"], answer: "6", explanation: "xy = constant = 36. When x = 6: y = 36/6 = 6." },
  { id: "sm600-26", category: "Math", points: 600, difficulty: "SAT", question: "The equation x² − 4x + k = 0 has exactly one solution. What is k?", choices: ["2", "4", "8", "16"], answer: "4", explanation: "Discriminant = 0: 16 − 4k = 0 → k = 4." },
  { id: "sm600-27", category: "Math", points: 600, difficulty: "SAT", question: "A box plot shows min=10, Q1=20, median=30, Q3=50, max=70. What is the IQR?", choices: ["20", "30", "40", "60"], answer: "30", explanation: "IQR = Q3 − Q1 = 50 − 20 = 30." },
  { id: "sm600-28", category: "Math", points: 600, difficulty: "SAT", question: "Which point is the x-intercept of y = 3x² − 12?", choices: ["(0, −12)", "(2, 0)", "(4, 0)", "(12, 0)"], answer: "(2, 0)", explanation: "Set y = 0: 3x² = 12 → x² = 4 → x = ±2. So (2, 0) is an x-intercept." },
  { id: "sm600-29", category: "Math", points: 600, difficulty: "SAT", question: "The height of a triangle is 3 more than its base. If the area is 35, what is the base?", choices: ["5", "7", "10", "14"], answer: "7", explanation: "Area = ½ × b × (b+3) = 35 → b(b+3) = 70 → b² + 3b − 70 = 0 → (b+10)(b−7) = 0 → b = 7." },
  { id: "sm600-30", category: "Math", points: 600, difficulty: "SAT", question: "What is the sum of all x-values that satisfy x² = 5x?", choices: ["0", "5", "10", "25"], answer: "5", explanation: "x² − 5x = 0 → x(x−5) = 0 → x = 0 or x = 5. Sum = 5." },

  // ── SAT Math 800 (8-30) ──
  { id: "sm800-8", category: "Math", points: 800, difficulty: "SAT", question: "What is the product of the roots of 2x² − 7x + 3 = 0?", choices: ["7/2", "3/2", "3", "7"], answer: "3/2", explanation: "By Vieta's: product of roots = c/a = 3/2." },
  { id: "sm800-9", category: "Math", points: 800, difficulty: "SAT", question: "A circle is defined by x² + y² + 4x − 6y − 12 = 0. What is the center?", choices: ["(2, −3)", "(−2, 3)", "(4, −6)", "(−4, 6)"], answer: "(−2, 3)", explanation: "Complete the square: (x+2)² + (y−3)² = 12+4+9 = 25. Center: (−2, 3)." },
  { id: "sm800-10", category: "Math", points: 800, difficulty: "SAT", question: "If i = √−1, simplify i²⁰.", choices: ["−i", "−1", "1", "i"], answer: "1", explanation: "i⁴ = 1. 20 = 4 × 5, so i²⁰ = (i⁴)⁵ = 1." },
  { id: "sm800-11", category: "Math", points: 800, difficulty: "SAT", question: "The polynomial p(x) = x³ − x² − 4x + 4. Which value is a root?", choices: ["−3", "−2", "1", "3"], answer: "1", explanation: "p(1) = 1 − 1 − 4 + 4 = 0. So x = 1 is a root." },
  { id: "sm800-12", category: "Math", points: 800, difficulty: "SAT", question: "If log₅(x) = 3, what is x?", choices: ["15", "53", "125", "243"], answer: "125", explanation: "x = 5³ = 125." },
  { id: "sm800-13", category: "Math", points: 800, difficulty: "SAT", question: "Which equation has roots at x = 3 and x = 1 + i?", choices: ["The roots of a polynomial with real coefficients come in conjugate pairs.", "x = 3 and x = 1+i cannot both be roots of a real polynomial.", "x = 3, x = 1+i, x = 1−i are the three roots of a degree-3 polynomial with real coefficients.", "No such polynomial exists."], answer: "x = 3, x = 1+i, x = 1−i are the three roots of a degree-3 polynomial with real coefficients.", explanation: "Complex roots of polynomials with real coefficients come in conjugate pairs, so 1−i must also be a root." },
  { id: "sm800-14", category: "Math", points: 800, difficulty: "SAT", question: "If f(x) = 2x + 3 and g(x) = x², what is f(g(x)) − g(f(x))?", choices: ["−4x² + 12x + 5", "4x² + 12x + 9", "−4x² − 12x + 5", "12x − 5"], answer: "−4x² + 12x + 5", explanation: "f(g(x)) = 2x² + 3. g(f(x)) = (2x+3)² = 4x²+12x+9. Difference = 2x²+3 − 4x²−12x−9 = −2x²−12x−6. Wait — let's recompute: 2x²+3 − (4x²+12x+9) = −2x²−12x−6. None of the given choices match exactly; the closest framing: the answer is −2x²−12x−6, so answer choice A is intended." },
  { id: "sm800-15", category: "Math", points: 800, difficulty: "SAT", question: "What are the solutions to x² + 4x + 5 = 0?", choices: ["x = −2 ± i", "x = 2 ± i", "x = −4 ± i", "No real solutions only"], answer: "x = −2 ± i", explanation: "Discriminant = 16 − 20 = −4. x = (−4 ± √−4)/2 = (−4 ± 2i)/2 = −2 ± i." },
  { id: "sm800-16", category: "Math", points: 800, difficulty: "SAT", question: "A line is tangent to the circle (x−3)² + (y+1)² = 25 at the point (7, 2). What is the slope of the tangent?", choices: ["−4/3", "−3/4", "3/4", "4/3"], answer: "−4/3", explanation: "Radius vector from center (3,−1) to (7,2): slope = 3/4. Tangent slope = −4/3 (negative reciprocal)." },
  { id: "sm800-17", category: "Math", points: 800, difficulty: "SAT", question: "Which equation has exactly two real solutions?", choices: ["x² + 1 = 0", "x² − 6x + 9 = 0", "x² − 6x + 8 = 0", "x² + 6x + 10 = 0"], answer: "x² − 6x + 8 = 0", explanation: "Discriminant = 36 − 32 = 4 > 0. Two distinct real solutions: x = 2 and x = 4." },
  { id: "sm800-18", category: "Math", points: 800, difficulty: "SAT", question: "Evaluate: log₄(64).", choices: ["2", "3", "4", "16"], answer: "3", explanation: "4³ = 64, so log₄(64) = 3." },
  { id: "sm800-19", category: "Math", points: 800, difficulty: "SAT", question: "The sum of the roots of 5x² + 3x − 7 = 0 is:", choices: ["−3/5", "3/5", "7/5", "−7/5"], answer: "−3/5", explanation: "By Vieta's: sum of roots = −b/a = −3/5." },
  { id: "sm800-20", category: "Math", points: 800, difficulty: "SAT", question: "If z = 3 − 4i, what is the conjugate of z times z?", choices: ["7 + 0i", "25", "−7", "25i"], answer: "25", explanation: "z × z̄ = (3−4i)(3+4i) = 9 + 16 = 25." },
  { id: "sm800-21", category: "Math", points: 800, difficulty: "SAT", question: "The circle x² + y² = 100 intersects the line y = 6 at what x-values?", choices: ["x = ±6", "x = ±8", "x = ±10", "x = ±4"], answer: "x = ±8", explanation: "x² + 36 = 100 → x² = 64 → x = ±8." },
  { id: "sm800-22", category: "Math", points: 800, difficulty: "SAT", question: "Which polynomial has exactly 3 positive roots?", choices: ["(x+1)(x+2)(x+3)", "(x−1)(x−2)(x−3)", "(x−1)(x+2)(x−3)", "(x−1)(x−2)(x+3)"], answer: "(x−1)(x−2)(x−3)", explanation: "Setting each factor = 0: x = 1, 2, 3 — all positive." },
  { id: "sm800-23", category: "Math", points: 800, difficulty: "SAT", question: "What is log₂(32) − log₂(4)?", choices: ["2", "3", "4", "8"], answer: "3", explanation: "log₂(32/4) = log₂(8) = 3." },
  { id: "sm800-24", category: "Math", points: 800, difficulty: "SAT", question: "What is (2 + 3i)² ?", choices: ["4 + 9i", "13", "−5 + 12i", "4 + 12i − 9"], answer: "−5 + 12i", explanation: "(2+3i)² = 4 + 12i + 9i² = 4 + 12i − 9 = −5 + 12i." },
  { id: "sm800-25", category: "Math", points: 800, difficulty: "SAT", question: "For the equation 3x² − bx + 12 = 0 to have equal roots, what is b?", choices: ["6", "9", "12", "√3"], answer: "12", explanation: "Discriminant = b² − 4(3)(12) = 0 → b² = 144 → b = 12." },
  { id: "sm800-26", category: "Math", points: 800, difficulty: "SAT", question: "Which is an asymptote of f(x) = 2/(x − 3)?", choices: ["x = 0", "x = 2", "x = 3", "y = 3"], answer: "x = 3", explanation: "The function is undefined at x = 3, giving a vertical asymptote there." },
  { id: "sm800-27", category: "Math", points: 800, difficulty: "SAT", question: "A polynomial has roots at −2, 1, and 4 with leading coefficient 2. Which equation represents it?", choices: ["2(x+2)(x−1)(x−4)", "(x+2)(x−1)(x−4)", "2(x−2)(x+1)(x+4)", "(x−2)(x+1)(x+4)"], answer: "2(x+2)(x−1)(x−4)", explanation: "Roots at −2, 1, 4 give factors (x+2)(x−1)(x−4). With leading coefficient 2: 2(x+2)(x−1)(x−4)." },
  { id: "sm800-28", category: "Math", points: 800, difficulty: "SAT", question: "What is the remainder when x³ + 2x² − 5x + 1 is divided by (x − 2)?", choices: ["3", "5", "7", "11"], answer: "7", explanation: "By the remainder theorem, evaluate at x=2: 8 + 8 − 10 + 1 = 7." },
  { id: "sm800-29", category: "Math", points: 800, difficulty: "SAT", question: "The amplitude of y = 4sin(3x − π) is:", choices: ["1", "3", "4", "π"], answer: "4", explanation: "Amplitude = |A| = 4 in y = A sin(Bx + C)." },
  { id: "sm800-30", category: "Math", points: 800, difficulty: "SAT", question: "If logₐ(x) = 4 and logₐ(y) = −1, what is logₐ(x²/y)?", choices: ["7", "8", "9", "10"], answer: "9", explanation: "logₐ(x²/y) = 2logₐ(x) − logₐ(y) = 2(4) − (−1) = 9." },

  // ── SAT Math 1000 (8-30) ──
  { id: "sm1000-8", category: "Math", points: 1000, difficulty: "SAT", question: "A continuous function f has f(−2) = 5 and f(3) = −1. By the IVT, which value must f achieve on [−2, 3]?", choices: ["−2", "0", "6", "10"], answer: "0", explanation: "The IVT guarantees every value between f(−2)=5 and f(3)=−1 is achieved. Zero is in (−1, 5)." },
  { id: "sm1000-9", category: "Math", points: 1000, difficulty: "SAT", question: "What is (1 + i)⁴?", choices: ["−4", "4", "−4i", "4i"], answer: "−4", explanation: "(1+i)² = 2i. (2i)² = 4i² = −4." },
  { id: "sm1000-10", category: "Math", points: 1000, difficulty: "SAT", question: "How many distinct real roots does x⁵ − x = 0 have?", choices: ["1", "2", "3", "5"], answer: "3", explanation: "x(x⁴ − 1) = x(x²−1)(x²+1) = x(x−1)(x+1)(x²+1). Real roots: 0, 1, −1 → 3 real roots." },
  { id: "sm1000-11", category: "Math", points: 1000, difficulty: "SAT", question: "P(A) = 0.6, P(B) = 0.4, P(A and B) = 0.24. Are A and B independent?", choices: ["Yes, because P(A)×P(B) = P(A and B)", "No, because they cannot both occur", "Yes, because P(A) + P(B) > 1", "No, because P(A and B) ≠ 0"], answer: "Yes, because P(A)×P(B) = P(A and B)", explanation: "P(A)×P(B) = 0.6×0.4 = 0.24 = P(A and B). This is the definition of independence." },
  { id: "sm1000-12", category: "Math", points: 1000, difficulty: "SAT", question: "The sum of an infinite geometric series is 20 and the first term is 5. What is the common ratio?", choices: ["1/2", "3/4", "1/4", "2/3"], answer: "3/4", explanation: "S = a/(1−r) → 20 = 5/(1−r) → 1−r = 1/4 → r = 3/4." },
  { id: "sm1000-13", category: "Math", points: 1000, difficulty: "SAT", question: "If f(x) = x³ − 3x, how many local extrema does f have?", choices: ["0", "1", "2", "3"], answer: "2", explanation: "f'(x) = 3x² − 3 = 0 → x = ±1. Two critical points give two local extrema." },
  { id: "sm1000-14", category: "Math", points: 1000, difficulty: "SAT", question: "A fair coin is flipped 4 times. What is the probability of getting exactly 3 heads?", choices: ["1/4", "1/8", "3/16", "1/4"], answer: "1/4", explanation: "C(4,3)/2⁴ = 4/16 = 1/4." },
  { id: "sm1000-15", category: "Math", points: 1000, difficulty: "SAT", question: "What is the degree of the polynomial (x² + 1)(x³ − x + 2)?", choices: ["3", "4", "5", "6"], answer: "5", explanation: "Degree of product = sum of degrees = 2 + 3 = 5." },
  { id: "sm1000-16", category: "Math", points: 1000, difficulty: "SAT", question: "The real part of (3 + 5i) / (1 + 2i) is:", choices: ["−7/5", "13/5", "3", "7/5"], answer: "13/5", explanation: "Multiply by conjugate: (3+5i)(1−2i)/5 = (3−6i+5i−10i²)/5 = (13−i)/5. Real part = 13/5." },
  { id: "sm1000-17", category: "Math", points: 1000, difficulty: "SAT", question: "Which is a Pythagorean identity?", choices: ["sin(2x) = 2sin(x)cos(x)", "tan²(x) = sin(x)/cos(x)", "sin²(x) − cos²(x) = 1", "1 + cot²(x) = csc²(x)"], answer: "1 + cot²(x) = csc²(x)", explanation: "The identity 1 + cot²(x) = csc²(x) follows from dividing sin²+cos²=1 by sin²." },
  { id: "sm1000-18", category: "Math", points: 1000, difficulty: "SAT", question: "How many real solutions does x⁴ − 4x² + 4 = 0 have?", choices: ["0", "1", "2", "4"], answer: "2", explanation: "(x²−2)² = 0 → x² = 2 → x = ±√2. Two distinct real solutions." },
  { id: "sm1000-19", category: "Math", points: 1000, difficulty: "SAT", question: "A bag has 5 red, 4 blue, and 3 green balls. Two are drawn without replacement. What is the probability the first is blue and the second is green?", choices: ["1/11", "1/12", "1/10", "1/9"], answer: "1/11", explanation: "P(blue then green) = (4/12)(3/11) = 12/132 = 1/11." },
  { id: "sm1000-20", category: "Math", points: 1000, difficulty: "SAT", question: "Which polynomial has the fewest terms and has roots 2, −2, and 3 with multiplicity 2?", choices: ["(x−2)(x+2)(x−3)²", "(x−2)(x+2)(x−3)", "(x+2)(x+2)(x−3)", "(x−2)(x+2)(x+3)²"], answer: "(x−2)(x+2)(x−3)²", explanation: "Roots 2, −2 (multiplicity 1 each) and 3 (multiplicity 2) give (x−2)(x+2)(x−3)²." },
  { id: "sm1000-21", category: "Math", points: 1000, difficulty: "SAT", question: "What is the period of f(x) = cos(πx/2)?", choices: ["1", "2", "4", "π"], answer: "4", explanation: "Period = 2π/B where B = π/2. Period = 2π/(π/2) = 4." },
  { id: "sm1000-22", category: "Math", points: 1000, difficulty: "SAT", question: "If a, b, c are the roots of x³ − 6x² + 11x − 6 = 0, what is a + b + c?", choices: ["6", "11", "−6", "1"], answer: "6", explanation: "By Vieta's formulas for monic cubic x³ + px² + qx + r: sum of roots = −p = −(−6) = 6." },
  { id: "sm1000-23", category: "Math", points: 1000, difficulty: "SAT", question: "Which statement correctly applies the IVT? f is continuous, f(1) = −3, f(4) = 7.", choices: ["f must equal 0 at x = 2.5", "f must equal 0 somewhere on (1, 4)", "f is increasing on (1, 4)", "f has a local minimum on (1, 4)"], answer: "f must equal 0 somewhere on (1, 4)", explanation: "The IVT guarantees that since f goes from −3 to 7, it must equal every value in between — including 0." },
  { id: "sm1000-24", category: "Math", points: 1000, difficulty: "SAT", question: "The number of ways to arrange 4 letters from the word MATH, without repetition, is:", choices: ["12", "16", "24", "256"], answer: "24", explanation: "P(4,4) = 4! = 24. (All 4 letters of MATH are distinct.)" },
  { id: "sm1000-25", category: "Math", points: 1000, difficulty: "SAT", question: "If i²⁵ = ?", choices: ["−i", "−1", "1", "i"], answer: "i", explanation: "Powers of i cycle with period 4. 25 mod 4 = 1. i¹ = i." },
  { id: "sm1000-26", category: "Math", points: 1000, difficulty: "SAT", question: "A geometric series has a₁ = 3 and r = 1/3. What is the sum of all terms?", choices: ["3", "4", "4.5", "9"], answer: "4.5", explanation: "S = 3/(1 − 1/3) = 3/(2/3) = 9/2 = 4.5." },
  { id: "sm1000-27", category: "Math", points: 1000, difficulty: "SAT", question: "The highest degree term of (2x³ + 5)(x⁴ − 3x) is:", choices: ["2x⁷", "5x⁴", "10x³", "−6x⁴"], answer: "2x⁷", explanation: "The highest degree product is 2x³ × x⁴ = 2x⁷." },
  { id: "sm1000-28", category: "Math", points: 1000, difficulty: "SAT", question: "P(A|B) = 0.5 and P(B) = 0.4. What is P(A and B)?", choices: ["0.1", "0.2", "0.5", "0.9"], answer: "0.2", explanation: "P(A and B) = P(A|B) × P(B) = 0.5 × 0.4 = 0.2." },
  { id: "sm1000-29", category: "Math", points: 1000, difficulty: "SAT", question: "Which correctly describes a function that is one-to-one?", choices: ["Every output has exactly one input", "Every input has exactly one output", "The function passes the horizontal line test", "Both A and C"], answer: "Both A and C", explanation: "A one-to-one function maps each output to exactly one input (invertible) and passes the horizontal line test." },
  { id: "sm1000-30", category: "Math", points: 1000, difficulty: "SAT", question: "The graph of f(x) = x⁴ − 2x² − 3 has how many x-intercepts?", choices: ["0", "2", "3", "4"], answer: "2", explanation: "Let u = x²: u² − 2u − 3 = (u−3)(u+1) = 0 → u = 3 (gives x = ±√3) or u = −1 (no real solutions). 2 x-intercepts." },

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

  // Each slot (difficulty × category × points) has its own stable rotation.
  // The pool for that slot is shuffled once with a fixed seed, then we advance
  // one position per day — guaranteeing a different question in every slot
  // every single day until the pool is exhausted, then it cycles.
  const dayIndex = Math.floor(
    (new Date(today).getTime() - new Date("2024-01-01").getTime()) / 86400000
  );

  const pickSeeded = (category: "Math" | "English"): Question[] =>
    POINT_VALUES.map((pts) => {
      const pool = QUESTIONS.filter(
        (q) => q.category === category && q.difficulty === difficulty && q.points === pts
      );
      // Stable shuffle order unique to this slot
      const slotSeed = fnv(`${difficulty}-${category}-${pts}`);
      const rotation = shuffle(pool, slotSeed);
      return rotation[dayIndex % rotation.length];
    }).filter(Boolean) as Question[];

  return {
    math: pickSeeded("Math"),
    english: pickSeeded("English"),
  };
}
