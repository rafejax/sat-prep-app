"use client";

import { useState } from "react";

type Props = {
  onStart: (name: string) => void;
};

export default function PlayerModal({ onStart }: Props) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onStart(trimmed.slice(0, 32));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
      <div className="w-full max-w-md rounded-2xl border-2 border-blue-600 bg-[#070714] p-8 shadow-2xl shadow-blue-900/60 text-center">
        {/* Logo area */}
        <div className="mb-6">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 text-4xl border border-blue-600/40">
            🎓
          </div>
          <h1 className="text-2xl font-black uppercase tracking-widest text-white">
            SAT Jeopardy
          </h1>
          <p className="mt-1 text-sm text-blue-400">Daily Practice Challenge</p>
        </div>

        <div className="mb-4 rounded-xl border border-blue-900 bg-blue-950/30 p-4 text-sm text-slate-300">
          <p>10 questions · 60 seconds each</p>
          <p className="mt-1 font-semibold text-blue-300">Math + English · Up to 4,500 pts</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            autoFocus
            type="text"
            maxLength={32}
            placeholder="Enter your name…"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl border border-blue-700 bg-blue-950/50 px-4 py-3 text-center text-white placeholder-blue-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-600/40"
          />
          <button
            type="submit"
            disabled={!name.trim()}
            className="rounded-xl bg-blue-600 py-3 font-black uppercase tracking-widest text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Let's Play!
          </button>
        </form>
      </div>
    </div>
  );
}
