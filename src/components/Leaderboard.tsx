"use client";

import { useEffect, useState } from "react";
import { LeaderboardEntry } from "@/lib/supabase";

function Board({
  title,
  icon,
  period,
  mode,
}: {
  title: string;
  icon: string;
  period: "weekly" | "alltime";
  mode: "PSAT" | "SAT";
}) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/leaderboard?period=${period}&mode=${mode}`)
      .then((r) => r.json())
      .then((data) => {
        setEntries(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [period, mode]);

  return (
    <div className="flex-1 rounded-2xl border border-blue-800 bg-[#070714] p-4 shadow-xl min-w-0">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <h3 className="font-black text-white text-sm">{title}</h3>
      </div>

      {loading ? (
        <div className="flex h-32 items-center justify-center text-sm text-blue-400">Loading…</div>
      ) : entries.length === 0 ? (
        <div className="flex h-32 flex-col items-center justify-center text-blue-500">
          <p className="text-2xl mb-1">🎯</p>
          <p className="text-xs">No scores yet</p>
        </div>
      ) : (
        <div className="space-y-1.5">
          {entries.slice(0, 10).map((entry, i) => {
            const medal = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : null;
            return (
              <div
                key={entry.id ?? i}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${
                  i < 3
                    ? "border border-yellow-700/30 bg-yellow-900/10"
                    : "border border-blue-900/30 bg-blue-950/20"
                }`}
              >
                <span className="w-5 shrink-0 text-center font-bold text-blue-400">
                  {medal ?? `#${i + 1}`}
                </span>
                <span className="flex-1 truncate font-semibold text-white">
                  {entry.player_name}
                </span>
                <span className="font-black text-yellow-400 tabular-nums">
                  {entry.score.toLocaleString()}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Leaderboard() {
  const [activeMode, setActiveMode] = useState<"PSAT" | "SAT">("PSAT");

  return (
    <div>
      <div className="mb-5 text-center">
        <h2 className="text-xl font-black uppercase tracking-wider text-white">Leaderboard</h2>
        <p className="mt-1 text-sm text-blue-400">Cumulative points — play every day to climb</p>
      </div>

      {/* PSAT / SAT toggle */}
      <div className="mb-5 flex justify-center">
        <div className="flex rounded-xl border border-blue-800 overflow-hidden">
          {(["PSAT", "SAT"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setActiveMode(m)}
              className={`px-6 py-2 text-sm font-black uppercase tracking-wider transition ${
                activeMode === m
                  ? m === "PSAT"
                    ? "bg-indigo-600 text-white"
                    : "bg-blue-600 text-white"
                  : "bg-transparent text-blue-500 hover:bg-blue-900/30"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Two boards side by side */}
      <div className="flex gap-3">
        <Board title="This Week" icon="📅" period="weekly" mode={activeMode} />
        <Board title="All Time" icon="🌟" period="alltime" mode={activeMode} />
      </div>
    </div>
  );
}
