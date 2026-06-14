"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTimerSound, useCorrectSound, useWrongSound } from "@/hooks/useAudio";
import { supabase } from "@/lib/supabase";

// ── Types ──────────────────────────────────────────────────────────────────────
type CQ = {
  id: string;
  category: string;
  points: 200 | 400 | 600 | 800 | 1000;
  question: string;
  choices: string[];
  answer: string;
  explanation: string;
};

type Board = {
  id: string;
  name: string;
  createdAt: string;
  category1: string;
  category2: string;
  questions: CQ[];
  fileContent: string;
};

type Phase = "idle" | "generating" | "playing" | "result";
type AnswerStatus = "correct" | "wrong";

const POINT_VALUES = [200, 400, 600, 800, 1000] as const;
const SAVED_KEY    = "satisfied-custom-boards";
const MAX_SAVED    = 10;

// ── localStorage helpers ───────────────────────────────────────────────────────
function loadSavedBoards(): Board[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(SAVED_KEY) ?? "[]"); }
  catch { return []; }
}

function persistSavedBoards(boards: Board[]) {
  localStorage.setItem(SAVED_KEY, JSON.stringify(boards));
}

// ── Inline Question Modal ──────────────────────────────────────────────────────
function QuestionModal({ q, onClose }: { q: CQ; onClose: (earned: number) => void }) {
  const [timeLeft, setTimeLeft] = useState(60);
  const [selected, setSelected] = useState<string | null>(null);
  const [locked,   setLocked]   = useState(false);
  const [revealed, setRevealed] = useState(false);
  const soundDone = useRef(false);

  const playTimer   = useTimerSound();
  const playCorrect = useCorrectSound();
  const playWrong   = useWrongSound();

  const submit = useCallback((choice: string | null) => {
    if (locked) return;
    setLocked(true);
    setRevealed(true);
    setSelected(choice);
  }, [locked]);

  useEffect(() => {
    if (locked) return;
    if (timeLeft <= 0) { submit(null); return; }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, locked, submit]);

  useEffect(() => {
    if (!revealed || soundDone.current) return;
    soundDone.current = true;
    if (selected === null)          playTimer();
    else if (selected === q.answer) playCorrect();
    else                            playWrong();
  }, [revealed, selected, q.answer, playTimer, playCorrect, playWrong]);

  const correct = selected === q.answer;
  const earned  = revealed ? (correct ? q.points : 0) : 0;
  const pct     = (timeLeft / 60) * 100;
  const tColor  = timeLeft > 30 ? "#22c55e" : timeLeft > 15 ? "#f59e0b" : "#ef4444";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-2xl rounded-2xl border-2 border-blue-500 bg-[#0a0a1a] shadow-2xl shadow-blue-900/50">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-blue-800 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-blue-700 px-3 py-1 text-sm font-bold text-white">{q.category}</span>
            <span className="text-lg font-bold text-yellow-400">{q.points} pts</span>
          </div>
          <div className="relative h-14 w-14">
            <svg className="h-14 w-14 -rotate-90" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="24" fill="none" stroke="#1e293b" strokeWidth="5" />
              <circle cx="28" cy="28" r="24" fill="none" stroke={tColor} strokeWidth="5"
                strokeDasharray={`${2 * Math.PI * 24}`}
                strokeDashoffset={`${2 * Math.PI * 24 * (1 - pct / 100)}`}
                style={{ transition: "stroke-dashoffset 1s linear, stroke 0.5s" }} />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold" style={{ color: tColor }}>{timeLeft}</span>
          </div>
        </div>

        <div className="px-6 py-5">
          <p className="whitespace-pre-wrap text-base leading-relaxed text-white">{q.question}</p>
        </div>

        <div className="grid grid-cols-1 gap-3 px-6 pb-4 sm:grid-cols-2">
          {q.choices.map((choice, i) => {
            const letter = ["A", "B", "C", "D"][i];
            let bg = "bg-[#111827] hover:bg-blue-900/40 border-blue-800";
            if (revealed) {
              if (choice === q.answer)   bg = "bg-green-700/80 border-green-500";
              else if (choice === selected) bg = "bg-red-700/80 border-red-500";
              else                       bg = "bg-[#111827] border-blue-900 opacity-50";
            }
            return (
              <button key={choice} disabled={locked} onClick={() => submit(choice)}
                className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm text-white transition-all ${bg} ${locked ? "cursor-default" : "cursor-pointer"}`}>
                <span className="mt-0.5 shrink-0 rounded bg-blue-700/60 px-1.5 py-0.5 text-xs font-bold text-blue-200">{letter}</span>
                <span>{choice}</span>
              </button>
            );
          })}
        </div>

        {revealed && (
          <div className="mx-6 mb-4 rounded-xl border border-blue-700/40 bg-blue-950/50 p-4">
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-blue-400">
              {correct ? "✓ Correct!" : selected ? "✗ Incorrect" : "⏱ Time's Up"} · {correct ? `+${q.points} pts` : "0 pts"}
            </p>
            <p className="text-sm text-slate-300">{q.explanation}</p>
            <p className="mt-1 text-xs text-slate-400">Answer: <span className="font-semibold text-green-400">{q.answer}</span></p>
          </div>
        )}

        {revealed && (
          <div className="border-t border-blue-900 px-6 py-4">
            <button onClick={() => setTimeout(() => onClose(earned), 50)}
              className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-500">
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Custom Game Board Grid ─────────────────────────────────────────────────────
function CustomGameBoard({ board, answered, score, onAnswer, onAllDone }: {
  board: Board;
  answered: Record<string, AnswerStatus>;
  score: number;
  onAnswer: (id: string, status: AnswerStatus, earned: number) => void;
  onAllDone: () => void;
}) {
  const [activeQ, setActiveQ] = useState<CQ | null>(null);
  const total    = board.questions.length;
  const doneCount = Object.keys(answered).length;

  function handleClose(earned: number) {
    if (!activeQ) return;
    const status: AnswerStatus = earned > 0 ? "correct" : "wrong";
    onAnswer(activeQ.id, status, earned);
    setActiveQ(null);
    if (doneCount + 1 >= total) setTimeout(onAllDone, 400);
  }

  const cat1Qs = board.questions.filter((q) => q.category === board.category1);
  const cat2Qs = board.questions.filter((q) => q.category === board.category2);

  return (
    <div className="w-full">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-blue-400">{doneCount} / {total} answered</span>
        <span className="text-2xl font-black text-yellow-400">{score.toLocaleString()} pts</span>
        <span className="text-sm text-blue-400">{total - doneCount} remaining</span>
      </div>

      <div className="mb-5 h-2 w-full overflow-hidden rounded-full bg-blue-950">
        <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-400 transition-all duration-500"
          style={{ width: `${(doneCount / total) * 100}%` }} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          { cat: board.category1, qs: cat1Qs, gradient: "from-blue-700 to-blue-900" },
          { cat: board.category2, qs: cat2Qs, gradient: "from-indigo-700 to-indigo-900" },
        ].map(({ cat, qs, gradient }) => (
          <div key={cat} className="flex flex-col gap-3">
            <div className={`rounded-xl bg-gradient-to-b ${gradient} px-3 py-4 text-center shadow-lg`}>
              <span className="text-sm font-black uppercase tracking-widest text-white leading-tight">{cat}</span>
            </div>
            {POINT_VALUES.map((pts) => {
              const q = qs.find((x) => x.points === pts);
              if (!q) return <div key={pts} className="h-20 rounded-xl bg-slate-900/30" />;
              const st = answered[q.id];
              let cell = "cursor-pointer hover:scale-105 hover:shadow-blue-500/40 hover:shadow-lg border-blue-700 bg-gradient-to-b from-blue-800 to-blue-950";
              if (st === "correct") cell = "cursor-default border-green-700 bg-gradient-to-b from-green-800 to-green-950 opacity-70";
              if (st === "wrong")   cell = "cursor-default border-red-800 bg-gradient-to-b from-red-900 to-slate-950 opacity-70";
              return (
                <button key={q.id} disabled={!!st} onClick={() => setActiveQ(q)}
                  className={`flex h-20 items-center justify-center rounded-xl border-2 transition-all duration-200 ${cell}`}>
                  {st ? <span className="text-2xl">{st === "correct" ? "✓" : "✗"}</span>
                      : <span className="text-3xl font-black text-yellow-400 drop-shadow-md">{pts}</span>}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {activeQ && <QuestionModal q={activeQ} onClose={handleClose} />}
    </div>
  );
}

// ── Subscription Gate ──────────────────────────────────────────────────────────
function SubGate({ userId, email, displayName, onShowAuth }: {
  userId?: string; email?: string; displayName?: string;
  onShowAuth: () => void;
}) {
  const [loading, setLoading] = useState(false);

  async function subscribe() {
    if (!userId) { onShowAuth(); return; }
    setLoading(true);
    const res  = await fetch("/api/stripe/checkout", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, email, displayName }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
    setLoading(false);
  }

  return (
    <div className="flex flex-col items-center py-16 px-4 text-center">
      <div className="mb-4 text-5xl">✨</div>
      <h2 className="mb-2 text-xl font-black text-white">Premium Feature</h2>
      <p className="mb-6 max-w-xs text-sm text-slate-400">
        Custom AI boards and all game modes require an active subscription.
      </p>
      <div className="mb-6 rounded-xl border border-yellow-600/30 bg-yellow-950/20 px-6 py-4">
        <p className="text-3xl font-black text-yellow-400">$1.99<span className="text-base font-normal text-slate-400">/month</span></p>
        <p className="text-xs text-slate-500 mt-1">7-day free trial · Cancel anytime</p>
      </div>
      <button onClick={subscribe} disabled={loading}
        className="rounded-xl bg-yellow-500 px-8 py-3 font-black text-black transition hover:bg-yellow-400 disabled:opacity-50">
        {loading ? "Loading…" : userId ? "Start Free Trial" : "Sign In to Subscribe"}
      </button>
    </div>
  );
}

// ── Saved Boards List ──────────────────────────────────────────────────────────
function SavedBoardsList({ boards, onLoad, onDelete }: {
  boards: Board[];
  onLoad: (b: Board) => void;
  onDelete: (id: string) => void;
}) {
  if (boards.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-400">Saved Boards ({boards.length}/{MAX_SAVED})</h3>
      <div className="rounded-2xl border border-blue-900/40 bg-blue-950/10 p-3">
        <div className="flex flex-col gap-2">
          {boards.map((b) => (
            <div key={b.id} className="flex items-center gap-3 rounded-xl border border-blue-800/30 bg-[#0a0a1a] px-4 py-3">
              <div className="flex-1 min-w-0">
                <p className="truncate font-bold text-white text-sm">{b.name}</p>
                <p className="text-xs text-slate-500">{b.category1} · {b.category2} · {new Date(b.createdAt).toLocaleDateString()}</p>
              </div>
              <button onClick={() => onLoad(b)}
                className="shrink-0 rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-blue-600">
                Play
              </button>
              <button onClick={() => onDelete(b.id)}
                className="shrink-0 rounded-lg border border-red-800/50 px-3 py-1.5 text-xs font-bold text-red-500 transition hover:bg-red-900/20">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function CustomBoards({ user, subscribed, onShowAuth }: {
  user: { id: string; email: string; displayName: string } | null;
  subscribed: boolean;
  onShowAuth: () => void;
}) {
  const [phase,       setPhase]       = useState<Phase>("idle");
  const [board,       setBoard]       = useState<Board | null>(null);
  const [savedBoards, setSavedBoards] = useState<Board[]>([]);
  const [answered,    setAnswered]    = useState<Record<string, AnswerStatus>>({});
  const [score,       setScore]       = useState(0);
  const [file,        setFile]        = useState<File | null>(null);
  const [boardName,   setBoardName]   = useState("");
  const [error,       setError]       = useState<string | null>(null);
  const [mounted,     setMounted]     = useState(false);
  const [savePrompt,  setSavePrompt]  = useState(false);

  useEffect(() => {
    setSavedBoards(loadSavedBoards());
    setMounted(true);
  }, []);

  // ── Generate ────────────────────────────────────────────────────────────────
  async function generate(overrideContent?: string) {
    if (!file && !overrideContent) return;
    setPhase("generating");
    setError(null);

    const fd = new FormData();
    if (overrideContent) {
      // Refresh: re-send the original text as a .txt blob
      fd.append("file", new Blob([overrideContent], { type: "text/plain" }), "refresh.txt");
    } else if (file) {
      fd.append("file", file);
    }

    // Send auth token if available
    let headers: Record<string, string> = {};
    if (supabase) {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.access_token) headers["Authorization"] = `Bearer ${session.access_token}`;
    }

    try {
      const res  = await fetch("/api/custom-board/generate", { method: "POST", headers, body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Generation failed");

      const newBoard: Board = {
        id:          `cb-${Date.now()}`,
        name:        boardName.trim() || data.boardName,
        createdAt:   new Date().toISOString(),
        category1:   data.category1,
        category2:   data.category2,
        questions:   data.questions,
        fileContent: data.fileContent ?? overrideContent ?? "",
      };
      setBoard(newBoard);
      setAnswered({});
      setScore(0);
      setPhase("playing");
    } catch (err) {
      setError((err as Error).message);
      setPhase("idle");
    }
  }

  function handleAnswer(id: string, status: AnswerStatus, earned: number) {
    setAnswered((prev) => ({ ...prev, [id]: status }));
    setScore((s) => s + earned);
  }

  function handleAllDone() {
    setPhase("result");
  }

  // ── Result actions ──────────────────────────────────────────────────────────
  function handleReplay() {
    setAnswered({});
    setScore(0);
    setPhase("playing");
  }

  function handleRefresh() {
    if (board?.fileContent) generate(board.fileContent);
  }

  function handleSave() {
    if (!board) return;
    const current = loadSavedBoards();
    if (current.length >= MAX_SAVED) {
      setSavePrompt(true);
      return;
    }
    const updated = [board, ...current];
    persistSavedBoards(updated);
    setSavedBoards(updated);
    setPhase("idle");
    setBoard(null);
    setFile(null);
    setBoardName("");
  }

  function handleDeleteSaved(id: string) {
    const updated = savedBoards.filter((b) => b.id !== id);
    persistSavedBoards(updated);
    setSavedBoards(updated);
  }

  function handleLoadSaved(b: Board) {
    setBoard(b);
    setAnswered({});
    setScore(0);
    setPhase("playing");
  }

  // ── Guard ───────────────────────────────────────────────────────────────────
  if (!mounted) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  if (!subscribed) {
    return (
      <SubGate
        userId={user?.id} email={user?.email} displayName={user?.displayName}
        onShowAuth={onShowAuth}
      />
    );
  }

  // ── Playing ─────────────────────────────────────────────────────────────────
  if (phase === "playing" && board) {
    return (
      <div className="px-4 py-4">
        <div className="mb-4 flex items-center justify-between">
          <button onClick={() => { setPhase("idle"); setBoard(null); }}
            className="text-sm text-blue-500 hover:text-blue-300 transition">← Exit</button>
          <span className="rounded-full bg-blue-700 px-3 py-1 text-xs font-bold text-white">CUSTOM</span>
          <span className="text-sm text-blue-400">{board.name}</span>
        </div>
        <CustomGameBoard board={board} answered={answered} score={score}
          onAnswer={handleAnswer} onAllDone={handleAllDone} />
      </div>
    );
  }

  // ── Result ───────────────────────────────────────────────────────────────────
  if (phase === "result" && board) {
    const maxScore = 2 * (200 + 400 + 600 + 800 + 1000);
    const pct      = Math.round((score / maxScore) * 100);
    const correct  = Object.values(answered).filter((s) => s === "correct").length;

    return (
      <div className="flex flex-col items-center px-4 py-10 text-center">
        <div className="mb-2 text-5xl">{pct >= 70 ? "🎉" : pct >= 40 ? "📚" : "💪"}</div>
        <h2 className="mb-1 text-2xl font-black text-white">{board.name}</h2>
        <p className="mb-6 text-sm text-slate-400">{board.category1} · {board.category2}</p>

        <div className="mb-8 rounded-2xl border border-blue-800/40 bg-blue-950/20 px-8 py-6 w-full max-w-xs">
          <p className="text-4xl font-black text-yellow-400">{score.toLocaleString()}</p>
          <p className="text-slate-400 text-sm">out of {maxScore.toLocaleString()} pts</p>
          <p className="mt-2 text-sm text-slate-300">{correct} / {board.questions.length} correct</p>
        </div>

        {/* 3 options */}
        <div className="flex w-full max-w-xs flex-col gap-3">
          <button onClick={handleReplay}
            className="rounded-xl border border-blue-700 bg-blue-950/40 py-3 font-bold text-blue-300 transition hover:bg-blue-900/40">
            Replay Same Board
          </button>
          <button onClick={handleRefresh}
            className="rounded-xl border border-indigo-700 bg-indigo-950/30 py-3 font-bold text-indigo-300 transition hover:bg-indigo-900/30">
            Refresh — New AI Questions
          </button>
          <button onClick={handleSave}
            className="rounded-xl bg-yellow-500 py-3 font-black text-black transition hover:bg-yellow-400">
            Save Board
          </button>
        </div>

        {/* Save limit warning */}
        {savePrompt && (
          <div className="mt-4 rounded-xl border border-red-700/40 bg-red-950/20 p-4 text-sm text-red-300 max-w-xs w-full">
            <p className="mb-2 font-bold">Saved boards limit reached (10/10)</p>
            <p className="mb-3 text-slate-400">Delete a saved board below to make room.</p>
            <button onClick={() => setSavePrompt(false)} className="text-xs text-slate-500 underline">Dismiss</button>
          </div>
        )}

        {savedBoards.length > 0 && (
          <div className="mt-6 w-full max-w-xs">
            <SavedBoardsList boards={savedBoards} onLoad={handleLoadSaved} onDelete={handleDeleteSaved} />
          </div>
        )}
      </div>
    );
  }

  // ── Idle ─────────────────────────────────────────────────────────────────────
  return (
    <div className="px-4 py-6">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-black text-white">Custom Boards</h2>
        <p className="mt-1 text-sm text-blue-400">Upload a study guide · AI generates your custom board</p>
      </div>

      {/* Upload section */}
      <div className="mb-4 rounded-2xl border-2 border-dashed border-blue-700/50 bg-blue-950/10 p-6">
        <label className="block cursor-pointer">
          <div className="mb-3 text-center">
            <span className="text-4xl">📄</span>
            <p className="mt-2 text-sm font-semibold text-white">
              {file ? file.name : "Click to upload a study guide"}
            </p>
            <p className="text-xs text-slate-500 mt-1">PDF, Word (.docx), or plain text · Max 10 MB</p>
          </div>
          <input type="file" accept=".pdf,.docx,.txt" className="hidden"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) setFile(f); }} />
        </label>

        {file && (
          <div className="mt-4 space-y-3">
            <input
              type="text" maxLength={48} placeholder="Board name (optional — AI will suggest one)"
              value={boardName} onChange={(e) => setBoardName(e.target.value)}
              className="w-full rounded-xl border border-blue-700 bg-blue-950/40 px-4 py-2.5 text-sm text-white placeholder-blue-800 outline-none focus:border-blue-400"
            />
            <button
              onClick={() => generate()}
              disabled={phase === "generating"}
              className="w-full rounded-xl bg-blue-600 py-3 font-black uppercase tracking-widest text-white transition hover:bg-blue-500 disabled:opacity-50"
            >
              {phase === "generating" ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Generating…
                </span>
              ) : "Generate Board"}
            </button>
          </div>
        )}
      </div>

      {error && (
        <div className="mb-4 rounded-xl border border-red-700/40 bg-red-950/20 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <p className="mb-2 text-xs text-slate-600 text-center">
        AI-generated questions are for practice only and may contain errors. Always verify with your source material.
      </p>

      <SavedBoardsList boards={savedBoards} onLoad={handleLoadSaved} onDelete={handleDeleteSaved} />
    </div>
  );
}
