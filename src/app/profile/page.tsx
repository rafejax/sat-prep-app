"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getSession, AuthUser } from "@/lib/auth";

export default function ProfilePage() {
  const [user,    setUser]    = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSession().then((u) => {
      setUser(u);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#040410] px-4 py-12 text-slate-300">
      <div className="mx-auto max-w-md">
        <Link href="/" className="mb-8 inline-block text-sm text-blue-400 hover:text-blue-300">
          ← Back to SATisfied
        </Link>

        <h1 className="mb-1 text-3xl font-black text-white">Profile</h1>
        <p className="mb-8 text-sm text-slate-500">Your account information</p>

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
            <div className="rounded-2xl border border-blue-900/40 bg-blue-950/20 p-6 space-y-5">
              {/* Email — read only */}
              <div>
                <label className="mb-1 block text-xs uppercase tracking-widest text-slate-500">Email</label>
                <p className="rounded-xl border border-blue-900/40 bg-blue-950/30 px-4 py-3 text-sm text-slate-400">
                  {user.email}
                </p>
                <p className="mt-1 text-xs text-slate-600">Email cannot be changed.</p>
              </div>

              {/* Display name — permanent */}
              <div>
                <label className="mb-1 block text-xs uppercase tracking-widest text-slate-500">Display Name</label>
                <p className="rounded-xl border border-blue-900/40 bg-blue-950/30 px-4 py-3 text-sm text-white">
                  {user.displayName}
                </p>
                <p className="mt-1 text-xs text-slate-600">Display name is permanent and cannot be changed.</p>
              </div>
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
