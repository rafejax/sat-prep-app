"use client";

import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { getDailyQuestions, POINT_VALUES } from "@/data/questions";
import GameBoard from "@/components/GameBoard";
import Leaderboard from "@/components/Leaderboard";
import ResultScreen from "@/components/ResultScreen";
import AuthModal from "@/components/AuthModal";
import AudioControls from "@/components/AudioControls";
import CustomBoards from "@/components/CustomBoards";
import { loadSave, writeSave, GameSave } from "@/lib/storage";
import { AuthUser, getSession, signOut, onAuthChange } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

type Section  = "home" | "psat" | "sat" | "leaderboard" | "custom";
type GamePhase = "name-entry" | "playing" | "result";
type AnswerStatus = "correct" | "wrong";

const MAX_SCORE = POINT_VALUES.reduce((s, p) => s + p, 0) * 2; // 6000
const TODAY = new Date().toLocaleDateString("en-CA", { timeZone: "America/New_York" });

// ── Branded logo ───────────────────────────────────────────────────────────────
function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  const base = size === "lg" ? "text-4xl font-black tracking-widest" : "text-sm font-black tracking-widest";
  const satSize = size === "lg" ? "text-5xl" : "text-base";
  return (
    <span className={`${base} uppercase`}>
      <span className={`${satSize} font-black text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]`}>SAT</span>
      <span className="text-white">isfied</span>
    </span>
  );
}

// ── Name entry ─────────────────────────────────────────────────────────────────
function NameEntry({
  mode, savedName, onStart, onBack,
}: {
  mode: "PSAT" | "SAT"; savedName: string;
  onStart: (name: string) => void; onBack: () => void;
}) {
  const [name, setName] = useState(savedName);
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-sm text-center">
        <button onClick={onBack} className="mb-6 text-sm text-blue-500 hover:text-blue-300 transition">← Back</button>
        <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border text-2xl ${mode === "PSAT" ? "border-indigo-500/40 bg-indigo-600/20" : "border-blue-500/40 bg-blue-600/20"}`}>
          {mode === "PSAT" ? "📘" : "📗"}
        </div>
        <h2 className="mb-1 text-2xl font-black uppercase tracking-widest text-white">{mode} Daily</h2>
        <p className="mb-6 text-sm text-blue-400">10 questions · 60 seconds each · up to 4,500 pts</p>
        <form onSubmit={(e) => { e.preventDefault(); const t = name.trim(); if (t) onStart(t.slice(0, 32)); }} className="flex flex-col gap-3">
          <input
            autoFocus type="text" maxLength={32} placeholder="Enter your display name…"
            value={name} onChange={(e) => setName(e.target.value)}
            className="rounded-xl border border-blue-700 bg-blue-950/50 px-4 py-3 text-center text-white placeholder-blue-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-600/40"
          />
          <button type="submit" disabled={!name.trim()}
            className="rounded-xl bg-blue-600 py-3 font-black uppercase tracking-widest text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40">
            {savedName ? "Resume Game" : "Start Game"}
          </button>
        </form>
      </div>
    </div>
  );
}

// ── Home ───────────────────────────────────────────────────────────────────────
function HomeSection({
  onNavigate, user, onShowAuth, onSignOut,
}: {
  onNavigate: (s: Section) => void;
  user: AuthUser | null;
  onShowAuth: () => void;
  onSignOut: () => void;
}) {
  const [psatSave, setPsatSave] = useState<GameSave | null>(null);
  const [satSave,  setSatSave]  = useState<GameSave | null>(null);

  useEffect(() => {
    setPsatSave(loadSave("PSAT"));
    setSatSave(loadSave("SAT"));
  }, []);

  const badge = (save: GameSave | null) => {
    if (!save) return null;
    if (save.completed) return { text: "Completed ✓", color: "text-green-400" };
    const done = Object.keys(save.answered).length;
    if (done > 0) return { text: `${done}/10 answered`, color: "text-yellow-400" };
    return null;
  };

  return (
    <div className="flex flex-col items-center px-4 py-10 text-center">
      {/* Account bar */}
      <div className="mb-6 flex w-full max-w-sm items-center justify-between text-xs">
        {user ? (
          <>
            <span className="text-blue-300">👤 {user.displayName}</span>
            <div className="flex items-center gap-3">
              <a href="/subscription" className="text-xs text-yellow-600 hover:text-yellow-400 transition">Manage plan</a>
              <button onClick={onSignOut} className="text-slate-500 hover:text-slate-300 transition text-xs">Sign out</button>
            </div>
          </>
        ) : (
          <>
            <span className="text-slate-600">Playing as guest</span>
            <button onClick={onShowAuth} className="rounded-full border border-blue-700 px-3 py-1 text-blue-400 hover:bg-blue-900/30 transition">Sign in / Sign up</button>
          </>
        )}
      </div>

      <div className="mb-2 text-5xl">🎓</div>
      <div className="mb-2"><Logo size="lg" /></div>
      <p className="mb-8 text-blue-400 text-sm">Daily Practice Challenge</p>

      <div className="grid w-full max-w-sm gap-4">
        <button onClick={() => onNavigate("psat")}
          className="flex items-center gap-4 rounded-2xl border-2 border-indigo-600/60 bg-indigo-950/40 px-5 py-5 text-left transition hover:border-indigo-400 hover:bg-indigo-900/40">
          <span className="text-3xl">📘</span>
          <div className="flex-1">
            <p className="font-black text-white">PSAT Practice</p>
            <p className="text-sm text-indigo-300">Foundational concepts · 10 questions</p>
          </div>
          {badge(psatSave) && <span className={`shrink-0 text-xs font-bold ${badge(psatSave)!.color}`}>{badge(psatSave)!.text}</span>}
        </button>

        <button onClick={() => onNavigate("sat")}
          className="flex items-center gap-4 rounded-2xl border-2 border-blue-600/60 bg-blue-950/40 px-5 py-5 text-left transition hover:border-blue-400 hover:bg-blue-900/40">
          <span className="text-3xl">📗</span>
          <div className="flex-1">
            <p className="font-black text-white">SAT Practice</p>
            <p className="text-sm text-blue-300">Advanced concepts · 10 questions</p>
          </div>
          {badge(satSave) && <span className={`shrink-0 text-xs font-bold ${badge(satSave)!.color}`}>{badge(satSave)!.text}</span>}
        </button>

        <button onClick={() => onNavigate("leaderboard")}
          className="flex items-center gap-4 rounded-2xl border-2 border-yellow-600/40 bg-yellow-950/20 px-5 py-5 text-left transition hover:border-yellow-400 hover:bg-yellow-900/20">
          <span className="text-3xl">🏆</span>
          <div>
            <p className="font-black text-white">Leaderboard</p>
            <p className="text-sm text-yellow-300">Weekly &amp; all-time rankings</p>
          </div>
        </button>
      </div>

      <div className="mt-10 rounded-xl border border-blue-900/50 bg-blue-950/20 px-5 py-4 text-sm text-slate-400 max-w-sm w-full text-left">
        <p className="font-semibold text-blue-300 mb-1">How it works</p>
        <ul className="space-y-1">
          <li>· Select a question by point value (200–1000)</li>
          <li>· Answer within 60 seconds</li>
          <li>· First attempt counts toward the leaderboard</li>
          <li>· Exit and return anytime — progress is saved</li>
          <li>· New questions every day at midnight ET</li>
          <li>· Weekly leaderboard resets every Monday at midnight ET</li>
        </ul>
      </div>
    </div>
  );
}

// ── Game section ───────────────────────────────────────────────────────────────
function GameSection({ mode, user, subscribed, onBack, onGoLeaderboard, onShowAuth }: {
  mode: "PSAT" | "SAT";
  user: AuthUser | null;
  subscribed: boolean;
  onBack: () => void;
  onGoLeaderboard: () => void;
  onShowAuth: () => void;
}) {
  const { math, english } = useMemo(() => getDailyQuestions(mode), [mode]);

  const [playerName, setPlayerName]   = useState("");
  const [score, setScore]             = useState(0);
  const [answered, setAnswered]       = useState<Record<string, AnswerStatus>>({});
  const [submitted, setSubmitted]     = useState(false);
  const [phase, setPhase]             = useState<GamePhase>("name-entry");
  const [mounted, setMounted]         = useState(false);

  useEffect(() => {
    const save = loadSave(mode);
    if (save) {
      setPlayerName(save.playerName);
      setScore(save.score);
      setAnswered(save.answered);
      setSubmitted(save.submittedToLeaderboard);
      if (save.completed) setPhase("result");
      else if (save.playerName) setPhase("playing");
    } else if (user) {
      // Pre-fill name from account
      setPlayerName(user.displayName);
    }
    setMounted(true);
  }, [mode, user]);

  const persist = useCallback(
    (overrides: Partial<Omit<GameSave, "date" | "mode">>) => {
      writeSave({
        date: TODAY, mode,
        playerName: overrides.playerName ?? playerName,
        score: overrides.score ?? score,
        answered: overrides.answered ?? answered,
        completed: overrides.completed ?? (phase === "result"),
        submittedToLeaderboard: overrides.submittedToLeaderboard ?? submitted,
      });
    },
    [mode, playerName, score, answered, phase, submitted]
  );

  const firstPersist = useRef(true);
  useEffect(() => {
    if (!mounted) return;
    if (firstPersist.current) { firstPersist.current = false; return; }
    if (!playerName) return;
    persist({});
  }, [mounted, playerName, score, answered, phase, submitted]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleStart(name: string) {
    setPlayerName(name);
    setPhase("playing");
    persist({ playerName: name });
  }

  function handleAnswer(id: string, status: AnswerStatus, earned: number) {
    const newAnswered = { ...answered, [id]: status };
    const newScore    = score + earned;
    setAnswered(newAnswered);
    setScore(newScore);
    persist({ answered: newAnswered, score: newScore });
  }

  function handleAllDone() {
    setPhase("result");
    persist({ completed: true });
  }

  function handleSubmitted() {
    setSubmitted(true);
    persist({ submittedToLeaderboard: true });
  }

  function handleReplay() {
    setAnswered({});
    setScore(0);
    setPhase("playing");
    persist({ answered: {}, score: 0, completed: false, submittedToLeaderboard: true });
  }

  if (!mounted) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  if (!subscribed) {
    return (
      <div className="flex flex-col items-center py-16 px-4 text-center">
        <div className="mb-4 text-5xl">🔒</div>
        <h2 className="mb-2 text-xl font-black text-white">Subscription Required</h2>
        <p className="mb-6 max-w-xs text-sm text-slate-400">
          {mode} practice boards require an active SATisfied subscription.
        </p>
        <div className="mb-6 rounded-xl border border-yellow-600/30 bg-yellow-950/20 px-6 py-4">
          <p className="text-3xl font-black text-yellow-400">$1.99<span className="text-base font-normal text-slate-400">/month</span></p>
          <p className="text-xs text-slate-500 mt-1">7-day free trial · Cancel anytime</p>
        </div>
        <button
          onClick={() => user ? window.location.assign("/subscription") : onShowAuth()}
          className="rounded-xl bg-yellow-500 px-8 py-3 font-black text-black transition hover:bg-yellow-400"
        >
          {user ? "Subscribe Now" : "Sign In to Subscribe"}
        </button>
        <button onClick={onBack} className="mt-4 text-sm text-blue-500 hover:text-blue-300 transition">← Back</button>
      </div>
    );
  }

  if (phase === "name-entry") {
    return <NameEntry mode={mode} savedName={playerName} onStart={handleStart} onBack={onBack} />;
  }

  if (phase === "result") {
    return (
      <ResultScreen
        playerName={playerName} score={score} maxScore={MAX_SCORE}
        mode={mode} alreadySubmitted={submitted}
        onSubmitted={handleSubmitted}
        onViewLeaderboard={onGoLeaderboard}
        onReplay={handleReplay}
      />
    );
  }

  return (
    <div className="px-4 py-4">
      <div className="mb-4 flex items-center justify-between">
        <button onClick={onBack} className="text-sm text-blue-500 hover:text-blue-300 transition">← Exit</button>
        <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${mode === "PSAT" ? "bg-indigo-700 text-white" : "bg-blue-700 text-white"}`}>
          {mode}
        </span>
        <span className="text-sm text-blue-400">{playerName}</span>
      </div>
      <GameBoard
        mathQuestions={math} englishQuestions={english}
        score={score} answered={answered}
        onAnswer={handleAnswer} onAllDone={handleAllDone}
      />
    </div>
  );
}

// ── Nav items ──────────────────────────────────────────────────────────────────
const NAV_ITEMS: { id: Section; label: string; icon: string }[] = [
  { id: "home",        label: "Home",   icon: "🏠" },
  { id: "psat",        label: "PSAT",   icon: "📘" },
  { id: "sat",         label: "SAT",    icon: "📗" },
  { id: "leaderboard", label: "Ranks",  icon: "🏆" },
  { id: "custom",      label: "Custom", icon: "✨" },
];

// ── Root ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [section,    setSection]    = useState<Section>("home");
  const [user,       setUser]       = useState<AuthUser | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [showAuth,   setShowAuth]   = useState(false);

  // Load auth session and subscription status on mount
  useEffect(() => {
    async function loadAuth() {
      const u = await getSession();
      setUser(u);
      if (u && supabase) {
        const { data } = await supabase
          .from("profiles")
          .select("subscription_status")
          .eq("id", u.id)
          .single();
        const st = data?.subscription_status;
        setSubscribed(st === "active" || st === "trialing");
      } else if (!supabase) {
        // Demo mode: no Supabase configured → treat as subscribed
        setSubscribed(true);
      }
    }
    loadAuth();
    return onAuthChange(async (u) => {
      setUser(u);
      if (!u) { setSubscribed(false); return; }
      if (supabase) {
        const { data } = await supabase
          .from("profiles")
          .select("subscription_status")
          .eq("id", u.id)
          .single();
        const st = data?.subscription_status;
        setSubscribed(st === "active" || st === "trialing");
      } else {
        setSubscribed(true);
      }
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#040410]">
      {/* Header */}
      <header className="border-b border-blue-900/40 px-4 py-2.5 flex items-center justify-between">
        <div className="w-24" /> {/* spacer */}
        <button onClick={() => setSection("home")} className="focus:outline-none">
          <Logo size="sm" />
        </button>
        <div className="flex w-24 justify-end">
          <AudioControls />
        </div>
      </header>

      {/* Auth modal */}
      {showAuth && (
        <AuthModal
          onSuccess={(u) => { setUser(u); setShowAuth(false); }}
          onGuest={() => setShowAuth(false)}
          onClose={() => setShowAuth(false)}
        />
      )}

      {/* Content */}
      <main className="flex-1 overflow-y-auto pb-24">
        <div className="mx-auto max-w-2xl">
          {section === "home" && (
            <HomeSection
              onNavigate={setSection} user={user}
              onShowAuth={() => setShowAuth(true)}
              onSignOut={() => { signOut(); setUser(null); }}
            />
          )}
          {section === "psat" && (
            <GameSection mode="PSAT" user={user} subscribed={subscribed}
              onBack={() => setSection("home")} onGoLeaderboard={() => setSection("leaderboard")}
              onShowAuth={() => setShowAuth(true)} />
          )}
          {section === "sat" && (
            <GameSection mode="SAT" user={user} subscribed={subscribed}
              onBack={() => setSection("home")} onGoLeaderboard={() => setSection("leaderboard")}
              onShowAuth={() => setShowAuth(true)} />
          )}
          {section === "leaderboard" && (
            <div className="px-4 py-6"><Leaderboard /></div>
          )}
          {section === "custom" && (
            <CustomBoards
              user={user ? { id: user.id, email: user.email, displayName: user.displayName } : null}
              subscribed={subscribed}
              onShowAuth={() => setShowAuth(true)}
            />
          )}
        </div>
      </main>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-blue-900/40 bg-[#070714]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-2xl">
          {NAV_ITEMS.map((item) => {
            const active = section === item.id;
            return (
              <button key={item.id} onClick={() => setSection(item.id)}
                className={`relative flex flex-1 flex-col items-center gap-1 py-3 text-xs font-semibold transition ${active ? "text-blue-400" : "text-slate-600 hover:text-slate-400"}`}>
                <span className="text-lg leading-none">{item.icon}</span>
                <span>{item.label}</span>
                {active && <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-blue-400" />}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
