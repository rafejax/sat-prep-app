"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  playerName: string;
  score: number;
  maxScore: number;
  mode: "PSAT" | "SAT";
  alreadySubmitted: boolean;
  onSubmitted: () => void;
  onViewLeaderboard: () => void;
  onReplay: () => void;
};

export default function ResultScreen({
  playerName,
  score,
  maxScore,
  mode,
  alreadySubmitted,
  onSubmitted,
  onViewLeaderboard,
  onReplay,
}: Props) {
  const [submitStatus, setSubmitStatus] = useState<"pending" | "done" | "error">(
    alreadySubmitted ? "done" : "pending"
  );
  const submitted = useRef(false);

  useEffect(() => {
    if (alreadySubmitted || submitted.current) return;
    submitted.current = true;

    fetch("/api/leaderboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ player_name: playerName, score, mode }),
    })
      .then(() => {
        setSubmitStatus("done");
        onSubmitted();
      })
      .catch(() => {
        setSubmitStatus("error");
        onSubmitted();
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const pct = Math.round((score / maxScore) * 100);
  const emoji = pct >= 90 ? "🏆" : pct >= 70 ? "🎉" : pct >= 50 ? "👍" : "💪";
  const grade =
    pct >= 90 ? "Perfect!" : pct >= 70 ? "Great Job!" : pct >= 50 ? "Good Effort" : "Keep Practicing";

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="w-full max-w-md rounded-2xl border-2 border-blue-600 bg-[#070714] p-8 shadow-2xl shadow-blue-900/60">
        <div className="mb-2 text-5xl">{emoji}</div>
        <h2 className="mb-1 text-2xl font-black text-white">{grade}</h2>
        <p className="mb-1 text-blue-400">{playerName}</p>
        <span
          className={`inline-block rounded-full px-2 py-0.5 text-xs font-bold mb-6 ${
            mode === "PSAT" ? "bg-indigo-700 text-white" : "bg-blue-700 text-white"
          }`}
        >
          {mode}
        </span>

        <div className="mb-4 rounded-xl bg-blue-950/60 p-6">
          <p className="text-sm text-blue-400 mb-1">Score</p>
          <p className="text-5xl font-black text-yellow-400">{score.toLocaleString()}</p>
          <p className="mt-1 text-sm text-blue-400 font-semibold">points</p>
          <p className="mt-2 text-sm text-slate-400">
            out of {maxScore.toLocaleString()} · {pct}%
          </p>
        </div>

        <div className="mb-6 h-3 w-full overflow-hidden rounded-full bg-blue-950">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-yellow-400 transition-all duration-1000"
            style={{ width: `${pct}%` }}
          />
        </div>

        <p className="mb-5 text-xs text-slate-500">
          {submitStatus === "pending" && "Saving score…"}
          {submitStatus === "done" && !alreadySubmitted && "✓ Score saved to leaderboard"}
          {submitStatus === "done" && alreadySubmitted && "ℹ First attempt already on leaderboard"}
          {submitStatus === "error" && "Could not save score (check connection)"}
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={onReplay}
            className="w-full rounded-xl border border-blue-700 bg-blue-950/50 py-3 font-bold text-blue-300 transition hover:bg-blue-900/50"
          >
            Replay Board
          </button>
          <button
            onClick={onViewLeaderboard}
            className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-500"
          >
            View Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
}
