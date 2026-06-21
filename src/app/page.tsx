"use client";

import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { getDailyQuestions, POINT_VALUES } from "@/data/questions";
import GameBoard from "@/components/GameBoard";
import Leaderboard from "@/components/Leaderboard";
import ResultScreen from "@/components/ResultScreen";
import AuthModal from "@/components/AuthModal";
import AudioControls from "@/components/AudioControls";
import FAQ from "@/components/FAQ";
import { loadSave, writeSave, GameSave } from "@/lib/storage";
import { AuthUser, getSession, signOut, onAuthChange } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

type Section  = "home" | "psat" | "sat" | "leaderboard" | "faq";
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
        <p className="mb-6 text-sm text-blue-400">10 questions · 60 seconds each · up to 6,000 pts</p>
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
    setPsatSave(loadSave("PSAT", user?.id));
    setSatSave(loadSave("SAT", user?.id));
  }, [user?.id]);

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
              <a href="/profile" className="text-xs text-blue-500 hover:text-blue-300 transition">Profile</a>
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

      <div className="mb-3 text-5xl">🎓</div>
      <div className="mb-2"><Logo size="lg" /></div>
      <p className="mb-10 text-sm font-semibold uppercase tracking-widest text-blue-500">Daily Practice Challenge</p>

      <div className="grid w-full max-w-sm gap-3">
        {/* PSAT card */}
        <button
          onClick={() => onNavigate("psat")}
          className="group flex cursor-pointer items-center gap-4 rounded-2xl px-5 py-5 text-left transition-all duration-200 active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #1e1b4b 0%, #0f0a2e 100%)",
            border: "1px solid rgba(99,102,241,0.35)",
            boxShadow: "0 4px 24px rgba(99,102,241,0.1)",
          }}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-2xl" style={{ background: "rgba(99,102,241,0.2)", border: "1px solid rgba(99,102,241,0.3)" }}>📘</div>
          <div className="flex-1 text-left">
            <p className="font-black text-white">PSAT Practice</p>
            <p className="text-xs text-indigo-400">Foundational · 10 questions</p>
          </div>
          {badge(psatSave) && <span className={`shrink-0 text-xs font-bold ${badge(psatSave)!.color}`}>{badge(psatSave)!.text}</span>}
          <span className="text-indigo-500 opacity-60 transition-opacity group-hover:opacity-100">›</span>
        </button>

        {/* SAT card */}
        <button
          onClick={() => onNavigate("sat")}
          className="group flex cursor-pointer items-center gap-4 rounded-2xl px-5 py-5 text-left transition-all duration-200 active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #0c1a3a 0%, #060e28 100%)",
            border: "1px solid rgba(59,130,246,0.35)",
            boxShadow: "0 4px 24px rgba(59,130,246,0.1)",
          }}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-2xl" style={{ background: "rgba(59,130,246,0.2)", border: "1px solid rgba(59,130,246,0.3)" }}>📗</div>
          <div className="flex-1 text-left">
            <p className="font-black text-white">SAT Practice</p>
            <p className="text-xs text-blue-400">Advanced · 10 questions</p>
          </div>
          {badge(satSave) && <span className={`shrink-0 text-xs font-bold ${badge(satSave)!.color}`}>{badge(satSave)!.text}</span>}
          <span className="text-blue-500 opacity-60 transition-opacity group-hover:opacity-100">›</span>
        </button>

        {/* Leaderboard card */}
        <button
          onClick={() => onNavigate("leaderboard")}
          className="group flex cursor-pointer items-center gap-4 rounded-2xl px-5 py-5 text-left transition-all duration-200 active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #1c1400 0%, #0f0b00 100%)",
            border: "1px solid rgba(234,179,8,0.3)",
            boxShadow: "0 4px 24px rgba(234,179,8,0.07)",
          }}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-2xl" style={{ background: "rgba(234,179,8,0.15)", border: "1px solid rgba(234,179,8,0.25)" }}>🏆</div>
          <div className="flex-1 text-left">
            <p className="font-black text-white">Leaderboard</p>
            <p className="text-xs text-yellow-600">Cumulative weekly &amp; all-time rankings</p>
          </div>
          <span className="text-yellow-700 opacity-60 transition-opacity group-hover:opacity-100">›</span>
        </button>
      </div>

      <div className="mt-8 w-full max-w-sm rounded-xl px-5 py-4 text-left" style={{ background: "rgba(15,23,42,0.5)", border: "1px solid rgba(30,41,59,0.8)" }}>
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">How it works</p>
        <ul className="space-y-1 text-xs text-slate-500">
          <li>· Pick a question tile (200 – 1,000 pts)</li>
          <li>· Answer within 60 seconds</li>
          <li>· Score adds to your weekly &amp; all-time total</li>
          <li>· Exit and return anytime — progress saves</li>
          <li>· Fresh questions every day at midnight ET</li>
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
  // Include TODAY so questions refresh automatically if the date changes while the app is open
  const { math, english } = useMemo(() => getDailyQuestions(mode), [mode, TODAY]);

  const [playerName, setPlayerName]   = useState("");
  const [score, setScore]             = useState(0);
  const [answered, setAnswered]       = useState<Record<string, AnswerStatus>>({});
  const [submitted, setSubmitted]     = useState(false);
  const [phase, setPhase]             = useState<GamePhase>("name-entry");
  const [mounted, setMounted]         = useState(false);

  useEffect(() => {
    // Reset state when user switches accounts
    setPlayerName("");
    setScore(0);
    setAnswered({});
    setSubmitted(false);
    setPhase("name-entry");

    const save = loadSave(mode, user?.id);
    if (save) {
      setPlayerName(save.playerName);
      setScore(save.score);
      setAnswered(save.answered);
      setSubmitted(save.submittedToLeaderboard);
      if (save.completed) setPhase("result");
      else if (save.playerName) setPhase("playing");
    } else if (user) {
      setPlayerName(user.displayName);
    }
    setMounted(true);
  }, [mode, user?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const persist = useCallback(
    (overrides: Partial<Omit<GameSave, "date" | "mode">>) => {
      writeSave({
        date: TODAY, mode,
        playerName: overrides.playerName ?? playerName,
        score: overrides.score ?? score,
        answered: overrides.answered ?? answered,
        completed: overrides.completed ?? (phase === "result"),
        submittedToLeaderboard: overrides.submittedToLeaderboard ?? submitted,
      }, user?.id);
    },
    [mode, playerName, score, answered, phase, submitted, user?.id]
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
  { id: "faq",         label: "FAQ",    icon: "❓" },
];

// ── Root ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [section,    setSection]    = useState<Section>("home");
  const [user,       setUser]       = useState<AuthUser | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [showAuth,   setShowAuth]   = useState(false);

  async function checkAccess(u: AuthUser) {
    if (!supabase) { setSubscribed(true); return; }
    const { data } = await supabase
      .from("profiles")
      .select("subscription_status, free_access")
      .eq("id", u.id)
      .single();
    const st = data?.subscription_status;
    setSubscribed(data?.free_access === true || st === "active" || st === "trialing");
  }

  // Load auth session and subscription status on mount
  useEffect(() => {
    async function loadAuth() {
      const u = await getSession();
      setUser(u);
      if (u) await checkAccess(u);
      else if (!supabase) setSubscribed(true);
    }
    loadAuth();
    return onAuthChange(async (u) => {
      setUser(u);
      if (!u) { setSubscribed(false); return; }
      await checkAccess(u);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
          {section === "faq" && <FAQ />}
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
