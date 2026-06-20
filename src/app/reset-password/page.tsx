"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Stage = "waiting" | "ready" | "done" | "error";

export default function ResetPasswordPage() {
  const [stage,    setStage]    = useState<Stage>("waiting");
  const [password, setPassword] = useState("");
  const [confirm,  setConfirm]  = useState("");
  const [saving,   setSaving]   = useState(false);
  const [error,    setError]    = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) { setStage("error"); return; }
    // Supabase parses the hash from the reset email link automatically
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") setStage("ready");
    });
    return () => subscription.unsubscribe();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) return;
    if (password !== confirm) { setError("Passwords do not match."); return; }
    if (password.length < 8)  { setError("Password must be at least 8 characters."); return; }
    setSaving(true);
    setError(null);
    const { error: err } = await supabase.auth.updateUser({ password });
    if (err) {
      setError(err.message);
      setSaving(false);
    } else {
      setStage("done");
    }
  }

  return (
    <div className="min-h-screen bg-[#040410] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-6 text-center">
          <span className="text-4xl font-black tracking-widest uppercase">
            <span className="text-5xl font-black text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">SAT</span>
            <span className="text-white">isfied</span>
          </span>
        </div>

        <div className="rounded-2xl border-2 border-blue-700 bg-[#070714] p-6 shadow-2xl shadow-blue-900/50">
          {stage === "waiting" && (
            <div className="text-center py-6">
              <div className="mx-auto mb-4 h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
              <p className="text-sm text-slate-400">Verifying your reset link…</p>
            </div>
          )}

          {stage === "ready" && (
            <>
              <h2 className="mb-1 text-lg font-black text-white">Set New Password</h2>
              <p className="mb-5 text-sm text-slate-500">Choose a new password for your account.</p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="password"
                  placeholder="New password (min 8 characters)"
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-xl border border-blue-700 bg-blue-950/50 px-4 py-2.5 text-sm text-white placeholder-blue-700 outline-none focus:border-blue-400"
                  required
                  autoFocus
                />
                <input
                  type="password"
                  placeholder="Confirm new password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="rounded-xl border border-blue-700 bg-blue-950/50 px-4 py-2.5 text-sm text-white placeholder-blue-700 outline-none focus:border-blue-400"
                  required
                />
                {error && <p className="text-xs text-red-400">{error}</p>}
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-xl bg-blue-600 py-2.5 text-sm font-black uppercase tracking-wider text-white transition hover:bg-blue-500 disabled:opacity-50"
                >
                  {saving ? "Saving…" : "Update Password"}
                </button>
              </form>
            </>
          )}

          {stage === "done" && (
            <div className="text-center py-4 space-y-4">
              <div className="text-4xl">✓</div>
              <p className="font-black text-white">Password updated!</p>
              <p className="text-sm text-slate-400">You can now sign in with your new password.</p>
              <Link
                href="/"
                className="inline-block rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-black uppercase tracking-wider text-white transition hover:bg-blue-500"
              >
                Go to App
              </Link>
            </div>
          )}

          {stage === "error" && (
            <div className="text-center py-4 space-y-4">
              <p className="text-sm text-slate-400">This reset link is invalid or has expired.</p>
              <Link href="/" className="text-sm text-blue-400 hover:text-blue-300 transition">← Back to SATisfied</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
