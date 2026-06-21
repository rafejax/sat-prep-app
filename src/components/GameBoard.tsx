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
  const pct = (totalAnswered / totalQuestions) * 100;

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
      setTimeout(onAllDone, 100);
    }
  }

  const getQuestionByPoints = (questions: Question[], pts: number) =>
    questions.find((q) => q.points === pts);

  return (
    <div className="w-full">
      {/* Score header */}
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          {totalAnswered}/{totalQuestions} done
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-black leading-none text-yellow-400" style={{ textShadow: "0 0 20px rgba(250,204,21,0.4)" }}>
            {score.toLocaleString()}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-yellow-600">points</span>
        </div>
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          {totalQuestions - totalAnswered} left
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg, #3b82f6 0%, #818cf8 50%, #a78bfa 100%)",
            boxShadow: pct > 0 ? "0 0 8px rgba(129,140,248,0.6)" : "none",
          }}
        />
      </div>

      {/* Board grid */}
      <div className="grid grid-cols-2 gap-3">
        {(["Math", "English"] as const).map((category) => {
          const questions = category === "Math" ? mathQuestions : englishQuestions;
          const isMath = category === "Math";

          return (
            <div key={category} className="flex flex-col gap-2.5">
              {/* Category header */}
              <div
                className="rounded-xl px-3 py-3.5 text-center"
                style={{
                  background: isMath
                    ? "linear-gradient(160deg, #1e3a5f 0%, #0f1e40 100%)"
                    : "linear-gradient(160deg, #2d1b69 0%, #1a0f40 100%)",
                  border: `1px solid ${isMath ? "rgba(59,130,246,0.35)" : "rgba(99,102,241,0.35)"}`,
                  boxShadow: `0 4px 20px ${isMath ? "rgba(59,130,246,0.12)" : "rgba(99,102,241,0.12)"}`,
                }}
              >
                <span
                  className="text-sm font-black uppercase tracking-[0.2em]"
                  style={{
                    color: isMath ? "#93c5fd" : "#a5b4fc",
                    textShadow: `0 0 12px ${isMath ? "rgba(147,197,253,0.4)" : "rgba(165,180,252,0.4)"}`,
                  }}
                >
                  {category}
                </span>
              </div>

              {/* Question cells */}
              {POINT_VALUES.map((pts) => {
                const q = getQuestionByPoints(questions, pts);
                if (!q) return null;
                const status = answered[q.id];
                const done = !!status;

                return (
                  <button
                    key={q.id}
                    disabled={done}
                    onClick={() => handleCellClick(q)}
                    className="group relative flex h-[4.5rem] items-center justify-center overflow-hidden rounded-xl transition-all duration-200"
                    style={
                      done
                        ? {
                            background:
                              status === "correct"
                                ? "linear-gradient(160deg, #14532d 0%, #052e16 100%)"
                                : "linear-gradient(160deg, #450a0a 0%, #1c0606 100%)",
                            border: `1px solid ${status === "correct" ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.25)"}`,
                            opacity: 0.7,
                          }
                        : {
                            background: "linear-gradient(160deg, #0c1a3a 0%, #060e28 100%)",
                            border: "1px solid rgba(59,130,246,0.25)",
                            cursor: "pointer",
                          }
                    }
                  >
                    {/* Hover glow layer */}
                    {!done && (
                      <span
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 rounded-xl"
                        style={{
                          background: isMath
                            ? "linear-gradient(160deg, rgba(59,130,246,0.18) 0%, rgba(37,99,235,0.08) 100%)"
                            : "linear-gradient(160deg, rgba(99,102,241,0.18) 0%, rgba(67,56,202,0.08) 100%)",
                          boxShadow: `inset 0 0 0 1px ${isMath ? "rgba(96,165,250,0.5)" : "rgba(129,140,248,0.5)"}`,
                        }}
                      />
                    )}

                    {done ? (
                      <span
                        className="text-2xl font-black"
                        style={{ color: status === "correct" ? "#4ade80" : "#f87171" }}
                      >
                        {status === "correct" ? "✓" : "✗"}
                      </span>
                    ) : (
                      <span
                        className="text-2xl font-black tabular-nums transition-transform duration-200 group-hover:scale-110"
                        style={{
                          color: "#fbbf24",
                          textShadow: "0 0 16px rgba(251,191,36,0.5)",
                        }}
                      >
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
