"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Question } from "@/data/questions";
import { useTimerSound, useCorrectSound, useWrongSound } from "@/hooks/useAudio";

type Props = {
  question: Question;
  onClose: (earned: number) => void;
};

export default function QuestionModal({ question, onClose }: Props) {
  const [timeLeft, setTimeLeft] = useState(60);
  const [selected, setSelected] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const playTimer   = useTimerSound();
  const playCorrect = useCorrectSound();
  const playWrong   = useWrongSound();
  const soundPlayed = useRef(false);

  const submit = useCallback(
    (choice: string | null) => {
      if (locked) return;
      setLocked(true);
      setRevealed(true);
      setSelected(choice);
    },
    [locked]
  );

  // Countdown
  useEffect(() => {
    if (locked) return;
    if (timeLeft <= 0) { submit(null); return; }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, locked, submit]);

  // Sounds
  useEffect(() => {
    if (!revealed || soundPlayed.current) return;
    soundPlayed.current = true;
    if (selected === null) playTimer();
    else if (selected === question.answer) playCorrect();
    else playWrong();
  }, [revealed, selected, question.answer, playTimer, playCorrect, playWrong]);

  const correct = selected === question.answer;
  const earned  = revealed ? (correct ? question.points : 0) : 0;
  const isMath  = question.category === "Math";

  const timerPct   = (timeLeft / 60) * 100;
  const timerColor = timeLeft > 30 ? "#22c55e" : timeLeft > 15 ? "#f59e0b" : "#ef4444";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(4px)" }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0d1628 0%, #070d1c 100%)",
          border: "1px solid rgba(59,130,246,0.25)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(59,130,246,0.1), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: "1px solid rgba(59,130,246,0.15)" }}
        >
          <div className="flex items-center gap-3">
            <span
              className="rounded-lg px-3 py-1.5 text-xs font-black uppercase tracking-widest"
              style={{
                background: isMath
                  ? "linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)"
                  : "linear-gradient(135deg, #4338ca 0%, #312e81 100%)",
                color: isMath ? "#bfdbfe" : "#c7d2fe",
                border: `1px solid ${isMath ? "rgba(59,130,246,0.4)" : "rgba(99,102,241,0.4)"}`,
              }}
            >
              {question.category}
            </span>
            <span
              className="text-lg font-black"
              style={{ color: "#fbbf24", textShadow: "0 0 12px rgba(251,191,36,0.4)" }}
            >
              {question.points} pts
            </span>
          </div>

          {/* Timer ring */}
          <div className="relative h-14 w-14 shrink-0">
            <svg className="h-14 w-14 -rotate-90" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(30,41,59,0.8)" strokeWidth="4" />
              <circle
                cx="28" cy="28" r="24"
                fill="none"
                stroke={timerColor}
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 24}`}
                strokeDashoffset={`${2 * Math.PI * 24 * (1 - timerPct / 100)}`}
                style={{ transition: "stroke-dashoffset 1s linear, stroke 0.5s", filter: `drop-shadow(0 0 4px ${timerColor})` }}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-black" style={{ color: timerColor }}>
              {timeLeft}
            </span>
          </div>
        </div>

        {/* Question text */}
        <div className="px-6 py-5">
          <p className="whitespace-pre-wrap text-[15px] leading-relaxed text-slate-100 font-medium">
            {question.question}
          </p>
        </div>

        {/* Choices */}
        <div className="grid grid-cols-1 gap-2.5 px-6 pb-5 sm:grid-cols-2">
          {question.choices.map((choice, i) => {
            const letter = ["A", "B", "C", "D"][i];
            let style: React.CSSProperties = {
              background: "rgba(15,23,42,0.8)",
              border: "1px solid rgba(51,65,85,0.8)",
            };
            if (revealed) {
              if (choice === question.answer) {
                style = {
                  background: "linear-gradient(135deg, rgba(21,128,61,0.6) 0%, rgba(20,83,45,0.6) 100%)",
                  border: "1px solid rgba(34,197,94,0.5)",
                };
              } else if (choice === selected) {
                style = {
                  background: "linear-gradient(135deg, rgba(185,28,28,0.5) 0%, rgba(127,29,29,0.5) 100%)",
                  border: "1px solid rgba(239,68,68,0.45)",
                };
              } else {
                style = {
                  background: "rgba(15,23,42,0.4)",
                  border: "1px solid rgba(51,65,85,0.4)",
                  opacity: 0.45,
                };
              }
            }
            return (
              <button
                key={choice}
                disabled={locked}
                onClick={() => submit(choice)}
                className="flex items-start gap-3 rounded-xl px-4 py-3.5 text-left text-sm transition-all duration-150"
                style={{
                  ...style,
                  cursor: locked ? "default" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (!locked && !revealed) {
                    (e.currentTarget as HTMLButtonElement).style.border = `1px solid ${isMath ? "rgba(96,165,250,0.5)" : "rgba(129,140,248,0.5)"}`;
                    (e.currentTarget as HTMLButtonElement).style.background = isMath
                      ? "rgba(29,78,216,0.15)"
                      : "rgba(67,56,202,0.15)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!locked && !revealed) {
                    (e.currentTarget as HTMLButtonElement).style.border = "1px solid rgba(51,65,85,0.8)";
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(15,23,42,0.8)";
                  }
                }}
              >
                <span
                  className="mt-0.5 shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wider"
                  style={{
                    background: revealed && choice === question.answer
                      ? "rgba(34,197,94,0.3)"
                      : "rgba(30,58,138,0.6)",
                    color: revealed && choice === question.answer ? "#86efac" : "#93c5fd",
                    border: "1px solid rgba(59,130,246,0.2)",
                  }}
                >
                  {letter}
                </span>
                <span className="text-slate-200 leading-snug">{choice}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {revealed && (
          <div
            className="mx-6 mb-5 rounded-xl p-4"
            style={{
              background: correct
                ? "rgba(20,83,45,0.25)"
                : selected
                ? "rgba(127,29,29,0.2)"
                : "rgba(120,53,15,0.2)",
              border: `1px solid ${correct ? "rgba(34,197,94,0.25)" : selected ? "rgba(239,68,68,0.2)" : "rgba(245,158,11,0.2)"}`,
            }}
          >
            <p
              className="mb-2 text-xs font-black uppercase tracking-wider"
              style={{ color: correct ? "#4ade80" : selected ? "#f87171" : "#fbbf24" }}
            >
              {correct ? "✓ Correct!" : selected ? "✗ Incorrect" : "⏱ Time's Up"}
              {" · "}
              {correct ? `+${question.points} pts` : "0 pts"}
            </p>
            <p className="text-sm leading-relaxed text-slate-300">{question.explanation}</p>
            {!correct && (
              <p className="mt-2 text-xs text-slate-400">
                Correct answer:{" "}
                <span className="font-semibold text-green-400">{question.answer}</span>
              </p>
            )}
          </div>
        )}

        {/* Footer */}
        {revealed && (
          <div
            className="px-6 pb-5"
            style={{ borderTop: "1px solid rgba(30,41,59,0.8)", paddingTop: "1.25rem" }}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setTimeout(() => onClose(earned), 50); }}
              className="w-full rounded-xl py-3.5 font-black uppercase tracking-widest text-white transition-all duration-150"
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                boxShadow: "0 4px 20px rgba(37,99,235,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)";
              }}
            >
              Continue →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
