"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getSession, AuthUser } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const [user,         setUser]         = useState<AuthUser | null>(null);
  const [displayName,  setDisplayName]  = useState("");
  const [loading,      setLoading]      = useState(true);
  const [saving,       setSaving]       = useState(false);
  const [message,      setMessage]      = useState<{ text: string; ok: boolean } | null>(null);

  useEffect(() => {
    getSession().then((u) => {
      setUser(u);
      if (u) setDisplayName(u.displayName);
      setLoading(false);
    });
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!user || !supabase) return;
    const name = displayName.trim().slice(0, 32);
    if (!name) return;
    setSaving(true);
    setMessage(null);
    try {
      const { error: authError } = await supabase.auth.updateUser({
        data: { display_name: name },
      });
      if (authError) throw authError;

      const { error: dbError } = await supabase
        .from("profiles")
        .update({ display_name: name })
        .eq("id", user.id);
      if (dbError) throw dbError;

      // Rename all leaderboard entries so the new name shows on rankings
      await fetch("/api/leaderboard", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: user.id, new_name: name }),
      });

      setMessage({ text: "Display name updated successfully.", ok: true });
    } catch (err: unknown) {
      setMessage({ text: err instanceof Error ? err.message : "Failed to save. Please try again.", ok: false });
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#040410] px-4 py-12 text-slate-300">
      <div className="mx-auto max-w-md">
        <Link href="/" className="mb-8 inline-block text-sm text-blue-400 hover:text-blue-300">
          ← Back to SATisfied
        </Link>

        <h1 className="mb-1 text-3xl font-black text-white">Profile</h1>
        <p className="mb-8 text-sm text-slate-500">Manage your account information</p>

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
          </div>
        ) : !user ? (
          <div className="rounded-2xl border border-blue-900/40 bg-blue-950/20 p-6 text-center">
            <p className="mb-4 text-slate-400">Sign in to view your profile.</p>
            <Link href="/" className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-500 transition">
              Go to App
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-2xl border border-blue-900/40 bg-blue-950/20 p-6">
              {message && (
                <div className={`mb-5 rounded-xl border px-4 py-3 text-sm ${message.ok ? "border-green-700/40 bg-green-900/20 text-green-300" : "border-red-700/40 bg-red-900/20 text-red-300"}`}>
                  {message.text}
                </div>
              )}

              {/* Email — read only */}
              <div className="mb-5">
                <label className="mb-1 block text-xs uppercase tracking-widest text-slate-500">Email</label>
                <p className="rounded-xl border border-blue-900/40 bg-blue-950/30 px-4 py-3 text-sm text-slate-400">
                  {user.email}
                </p>
                <p className="mt-1 text-xs text-slate-600">Email cannot be changed.</p>
              </div>

              {/* Display name — editable */}
              <form onSubmit={handleSave} className="flex flex-col gap-3">
                <div>
                  <label className="mb-1 block text-xs uppercase tracking-widest text-slate-500">Display Name</label>
                  <input
                    type="text"
                    maxLength={32}
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full rounded-xl border border-blue-700 bg-blue-950/50 px-4 py-3 text-sm text-white placeholder-blue-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-600/40"
                    placeholder="Your display name"
                    required
                  />
                  <p className="mt-1 text-xs text-slate-600">Shown on the leaderboard. Max 32 characters.</p>
                </div>

                <button
                  type="submit"
                  disabled={saving || !displayName.trim()}
                  className="rounded-xl bg-blue-600 py-3 font-black uppercase tracking-widest text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {saving ? "Saving…" : "Save Changes"}
                </button>
              </form>
            </div>

            <div className="rounded-2xl border border-blue-900/40 bg-blue-950/20 p-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Subscription</p>
                <p className="text-xs text-slate-500">Manage your plan or cancel</p>
              </div>
              <Link href="/subscription" className="rounded-xl border border-blue-700 px-4 py-2 text-sm font-bold text-blue-300 hover:bg-blue-900/40 transition">
                Manage →
              </Link>
            </div>

            <p className="text-center text-xs text-slate-600">
              Need help? Call or text{" "}
              <span className="text-blue-600">(424) 216-8055</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
