"use client";

import { useState } from "react";
import { Question, POINT_VALUES } from "@/data/questions";
import QuestionModal from "./QuestionModal";

type AnswerStatus = "correct" | "wrong";

type Props = {
  mathQuestions: Question[];
  englishQuestions: Question[];
  score: number;
  answered: Record<string, AnswerStatus>;
  onAnswer: (id: string, status: AnswerStatus, earned: number) => void;
  onAllDone: () => void;
};

export default function GameBoard({
  mathQuestions,
  englishQuestions,
  score,
  answered,
  onAnswer,
  onAllDone,
}: Props) {
  const [active, setActive] = useState<Question | null>(null);

  const allQuestions = [...mathQuestions, ...englishQuestions];
  const totalAnswered = Object.keys(answered).length;
  const totalQuestions = allQuestions.length;

  function handleCellClick(q: Question) {
    if (answered[q.id]) return;
    setActive(q);
  }

  function handleClose(earned: number) {
    if (!active) return;
    const status: AnswerStatus = earned > 0 ? "correct" : "wrong";
    onAnswer(active.id, status, earned);
    setActive(null);
    if (totalAnswered + 1 >= totalQuestions) {
      setTimeout(onAllDone, 400);
    }
  }

  const getQuestionByPoints = (questions: Question[], pts: number) =>
    questions.find((q) => q.points === pts);

  return (
    <div className="w-full">
      {/* Score bar */}
      <div className="mb-6 flex items-center justify-between">
        <div className="text-sm text-blue-400">
          {totalAnswered} / {totalQuestions} answered
        </div>
        <div className="text-2xl font-black text-yellow-400 drop-shadow-lg">
          {score.toLocaleString()} pts
        </div>
        <div className="text-sm text-blue-400">
          {totalQuestions - totalAnswered} remaining
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-blue-950">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-400 transition-all duration-500"
          style={{ width: `${(totalAnswered / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Jeopardy grid */}
      <div className="grid grid-cols-2 gap-4">
        {(["Math", "English"] as const).map((category) => {
          const questions = category === "Math" ? mathQuestions : englishQuestions;
          const headerColor =
            category === "Math" ? "from-blue-700 to-blue-900" : "from-indigo-700 to-indigo-900";

          return (
            <div key={category} className="flex flex-col gap-3">
              <div className={`rounded-xl bg-gradient-to-b ${headerColor} px-4 py-4 text-center shadow-lg`}>
                <span className="text-lg font-black uppercase tracking-widest text-white">
                  {category}
                </span>
              </div>

              {POINT_VALUES.map((pts) => {
                const q = getQuestionByPoints(questions, pts);
                if (!q) return null;
                const status = answered[q.id];

                let cellStyle =
                  "cursor-pointer hover:scale-105 hover:shadow-blue-500/50 hover:shadow-lg border-blue-700 bg-gradient-to-b from-blue-800 to-blue-950";
                if (status === "correct")
                  cellStyle = "cursor-default border-green-700 bg-gradient-to-b from-green-800 to-green-950 opacity-70";
                else if (status === "wrong")
                  cellStyle = "cursor-default border-red-800 bg-gradient-to-b from-red-900 to-slate-950 opacity-70";

                return (
                  <button
                    key={q.id}
                    disabled={!!status}
                    onClick={() => handleCellClick(q)}
                    className={`flex h-20 items-center justify-center rounded-xl border-2 transition-all duration-200 ${cellStyle}`}
                  >
                    {status ? (
                      <span className="text-2xl">{status === "correct" ? "✓" : "✗"}</span>
                    ) : (
                      <span className="text-3xl font-black text-yellow-400 drop-shadow-md">
                        {pts}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>

      {active && <QuestionModal question={active} onClose={handleClose} />}
    </div>
  );
}
