"use client";

import { useState } from "react";
import { signIn, signUp, forgotPassword, AuthUser } from "@/lib/auth";

type Tab = "signin" | "signup";
type Screen = "auth" | "forgot";

type Props = {
  onSuccess: (user: AuthUser) => void;
  onGuest: () => void;
  onClose: () => void;
};

export default function AuthModal({ onSuccess, onGuest, onClose }: Props) {
  const [screen,      setScreen]      = useState<Screen>("auth");
  const [tab,         setTab]         = useState<Tab>("signin");
  const [email,       setEmail]       = useState("");
  const [password,    setPassword]    = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading,     setLoading]     = useState(false);
  const [error,       setError]       = useState<string | null>(null);
  const [confirmMsg,  setConfirmMsg]  = useState<string | null>(null);
  const [resetSent,   setResetSent]   = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (tab === "signup") {
        if (!displayName.trim()) { setError("Display name is required."); setLoading(false); return; }
        const data = await signUp(email.trim(), password, displayName.trim());
        if (data.user && !data.session) {
          setConfirmMsg("Check your inbox and click the confirmation link, then sign in.");
          setTab("signin");
        } else if (data.session?.user) {
          onSuccess({
            id: data.session.user.id,
            email: data.session.user.email ?? "",
            displayName: displayName.trim(),
          });
        }
      } else {
        const data = await signIn(email.trim(), password);
        const user = data.session?.user;
        if (user) {
          onSuccess({
            id: user.id,
            email: user.email ?? "",
            displayName: user.user_metadata?.display_name ?? user.email ?? "Player",
          });
        }
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function handleForgotPassword(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const redirectTo = `${window.location.origin}/reset-password`;
      await forgotPassword(email.trim(), redirectTo);
      setResetSent(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (screen === "forgot") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
        <div className="w-full max-w-sm rounded-2xl border-2 border-blue-700 bg-[#070714] p-6 shadow-2xl shadow-blue-900/50">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-black text-white">Reset Password</h2>
            <button onClick={onClose} className="text-slate-500 hover:text-slate-300 text-xl leading-none">×</button>
          </div>

          {resetSent ? (
            <div className="space-y-4">
              <div className="rounded-xl border border-green-700/40 bg-green-900/20 px-4 py-3 text-sm text-green-300">
                Check your inbox for a password reset link. It may take a minute to arrive.
              </div>
              <button
                onClick={() => { setScreen("auth"); setResetSent(false); }}
                className="w-full rounded-xl border border-blue-800 py-2.5 text-sm font-semibold text-blue-400 transition hover:bg-blue-900/30"
              >
                Back to Sign In
              </button>
            </div>
          ) : (
            <form onSubmit={handleForgotPassword} className="flex flex-col gap-3">
              <p className="text-sm text-slate-400">Enter your account email and we'll send you a link to reset your password.</p>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl border border-blue-700 bg-blue-950/50 px-4 py-2.5 text-sm text-white placeholder-blue-700 outline-none focus:border-blue-400"
                required
                autoFocus
              />
              {error && <p className="text-xs text-red-400">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-blue-600 py-2.5 text-sm font-black uppercase tracking-wider text-white transition hover:bg-blue-500 disabled:opacity-50"
              >
                {loading ? "Sending…" : "Send Reset Link"}
              </button>
              <button
                type="button"
                onClick={() => { setScreen("auth"); setError(null); }}
                className="text-xs text-slate-500 hover:text-slate-300 transition"
              >
                ← Back to Sign In
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="w-full max-w-sm rounded-2xl border-2 border-blue-700 bg-[#070714] p-6 shadow-2xl shadow-blue-900/50">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-black text-white">
            {tab === "signin" ? "Sign In" : "Create Account"}
          </h2>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-300 text-xl leading-none">×</button>
        </div>

        <div className="mb-5 flex rounded-xl border border-blue-800 overflow-hidden">
          {(["signin", "signup"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => { setTab(t); setError(null); setConfirmMsg(null); }}
              className={`flex-1 py-2 text-sm font-bold transition ${tab === t ? "bg-blue-600 text-white" : "text-blue-400 hover:bg-blue-900/30"}`}
            >
              {t === "signin" ? "Sign In" : "Sign Up"}
            </button>
          ))}
        </div>

        {confirmMsg && (
          <div className="mb-4 rounded-xl border border-green-700/40 bg-green-900/20 px-4 py-3 text-sm text-green-300">
            {confirmMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {tab === "signup" && (
            <input
              type="text"
              placeholder="Display name (shown on leaderboard)"
              maxLength={32}
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="rounded-xl border border-blue-700 bg-blue-950/50 px-4 py-2.5 text-sm text-white placeholder-blue-700 outline-none focus:border-blue-400"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl border border-blue-700 bg-blue-950/50 px-4 py-2.5 text-sm text-white placeholder-blue-700 outline-none focus:border-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password (min 8 characters)"
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-xl border border-blue-700 bg-blue-950/50 px-4 py-2.5 text-sm text-white placeholder-blue-700 outline-none focus:border-blue-400"
            required
          />

          {tab === "signin" && (
            <button
              type="button"
              onClick={() => { setScreen("forgot"); setError(null); }}
              className="self-end text-xs text-blue-500 hover:text-blue-300 transition"
            >
              Forgot password?
            </button>
          )}

          {error && <p className="text-xs text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-blue-600 py-2.5 text-sm font-black uppercase tracking-wider text-white transition hover:bg-blue-500 disabled:opacity-50"
          >
            {loading ? "Please wait…" : tab === "signin" ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 border-t border-blue-900" />
          <span className="text-xs text-slate-500">or</span>
          <div className="flex-1 border-t border-blue-900" />
        </div>

        <button
          onClick={onGuest}
          className="mt-4 w-full rounded-xl border border-blue-800 py-2.5 text-sm font-semibold text-blue-400 transition hover:bg-blue-900/30"
        >
          Continue as Guest
        </button>

        <p className="mt-4 text-center text-xs text-slate-500">
          By signing up you agree to our{" "}
          <a href="/terms" target="_blank" className="text-blue-400 hover:underline">Terms</a>
          {" "}and{" "}
          <a href="/privacy" target="_blank" className="text-blue-400 hover:underline">Privacy Policy</a>.
          {" "}Passwords are hashed and never stored in plain text.
        </p>
      </div>
    </div>
  );
}
