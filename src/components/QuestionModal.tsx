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
    if (timeLeft <= 0) {
      submit(null);
      return;
    }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, locked, submit]);

  // Play sounds after reveal
  useEffect(() => {
    if (!revealed || soundPlayed.current) return;
    soundPlayed.current = true;
    if (selected === null) {
      playTimer();
    } else if (selected === question.answer) {
      playCorrect();
    } else {
      playWrong();
    }
  }, [revealed, selected, question.answer, playTimer, playCorrect]);

  const correct = selected === question.answer;
  const earned  = revealed ? (correct ? question.points : 0) : 0;

  const timerPct   = (timeLeft / 60) * 100;
  const timerColor = timeLeft > 30 ? "#22c55e" : timeLeft > 15 ? "#f59e0b" : "#ef4444";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={(e) => e.stopPropagation()}>
      <div className="relative w-full max-w-2xl rounded-2xl border-2 border-blue-500 bg-[#0a0a1a] shadow-2xl shadow-blue-900/50">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-blue-800 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className={`rounded-full px-3 py-1 text-sm font-bold ${question.category === "Math" ? "bg-blue-600 text-white" : "bg-indigo-600 text-white"}`}>
              {question.category}
            </span>
            <span className="font-bold text-yellow-400 text-lg">{question.points} pts</span>
          </div>

          {/* Timer ring */}
          <div className="relative h-14 w-14">
            <svg className="h-14 w-14 -rotate-90" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="24" fill="none" stroke="#1e293b" strokeWidth="5" />
              <circle
                cx="28" cy="28" r="24"
                fill="none"
                stroke={timerColor}
                strokeWidth="5"
                strokeDasharray={`${2 * Math.PI * 24}`}
                strokeDashoffset={`${2 * Math.PI * 24 * (1 - timerPct / 100)}`}
                style={{ transition: "stroke-dashoffset 1s linear, stroke 0.5s" }}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold" style={{ color: timerColor }}>
              {timeLeft}
            </span>
          </div>
        </div>

        {/* Question */}
        <div className="px-6 py-5">
          <p className="whitespace-pre-wrap text-base leading-relaxed text-white">{question.question}</p>
        </div>

        {/* Choices */}
        <div className="grid grid-cols-1 gap-3 px-6 pb-4 sm:grid-cols-2">
          {question.choices.map((choice, i) => {
            const letter = ["A", "B", "C", "D"][i];
            let bg = "bg-[#111827] hover:bg-blue-900/40 border-blue-800";
            if (revealed) {
              if (choice === question.answer) bg = "bg-green-700/80 border-green-500";
              else if (choice === selected)   bg = "bg-red-700/80 border-red-500";
              else                            bg = "bg-[#111827] border-blue-900 opacity-50";
            }
            return (
              <button
                key={choice}
                disabled={locked}
                onClick={() => submit(choice)}
                className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm text-white transition-all ${bg} ${locked ? "cursor-default" : "cursor-pointer"}`}
              >
                <span className="mt-0.5 shrink-0 rounded bg-blue-700/60 px-1.5 py-0.5 text-xs font-bold text-blue-200">{letter}</span>
                <span>{choice}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {revealed && (
          <div className="mx-6 mb-4 rounded-xl border border-blue-700/40 bg-blue-950/50 p-4">
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-blue-400">
              {correct ? "✓ Correct!" : selected ? "✗ Incorrect" : "⏱ Time's Up"}
              {" · "}
              {correct ? `+${question.points} pts` : "0 pts"}
            </p>
            <p className="text-sm text-slate-300">{question.explanation}</p>
            <p className="mt-1 text-xs text-slate-400">
              Correct answer: <span className="font-semibold text-green-400">{question.answer}</span>
            </p>
          </div>
        )}

        {/* Footer */}
        {revealed && (
          <div className="border-t border-blue-900 px-6 py-4">
            <button
              onClick={(e) => { e.stopPropagation(); setTimeout(() => onClose(earned), 50); }}
              className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-500"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
