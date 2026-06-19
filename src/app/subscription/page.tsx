"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getSession, AuthUser } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

type SubStatus = "active" | "trialing" | "canceled" | "inactive" | null;

export default function SubscriptionPage() {
  const [user,      setUser]      = useState<AuthUser | null>(null);
  const [status,    setStatus]    = useState<SubStatus>(null);
  const [endDate,   setEndDate]   = useState<string | null>(null);
  const [loading,   setLoading]   = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [message,   setMessage]   = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success"))  setMessage("🎉 Subscription activated! Welcome to SATisfied Premium.");
    if (params.get("canceled")) setMessage("Checkout canceled — you have not been charged.");

    getSession().then(async (u) => {
      setUser(u);
      if (u && supabase) {
        const { data } = await supabase
          .from("profiles")
          .select("subscription_status, subscription_end_at")
          .eq("id", u.id)
          .single();
        setStatus((data?.subscription_status ?? "inactive") as SubStatus);
        if (data?.subscription_end_at) {
          setEndDate(new Date(data.subscription_end_at).toLocaleDateString());
        }
      }
      setLoading(false);
    });
  }, []);

  async function handleSubscribe() {
    if (!user) return;
    setActionLoading(true);
    try {
      const res  = await fetch("/api/stripe/checkout", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id, email: user.email, displayName: user.displayName }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else setMessage(data.error ?? "Could not start checkout.");
    } catch {
      setMessage("Network error. Please try again.");
    }
    setActionLoading(false);
  }

  async function handleManage() {
    if (!user) return;
    setActionLoading(true);
    try {
      const res  = await fetch("/api/stripe/portal", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else setMessage(data.error ?? "Could not open portal.");
    } catch {
      setMessage("Network error. Please try again.");
    }
    setActionLoading(false);
  }

  const isActive = status === "active" || status === "trialing";

  const statusLabel: Record<NonNullable<SubStatus>, { text: string; color: string }> = {
    active:   { text: "Active",   color: "text-green-400" },
    trialing: { text: "Free Trial", color: "text-yellow-400" },
    canceled: { text: "Canceled", color: "text-red-400"   },
    inactive: { text: "Inactive", color: "text-slate-500" },
  };

  return (
    <div className="min-h-screen bg-[#040410] px-4 py-12 text-slate-300">
      <div className="mx-auto max-w-md">
        <Link href="/" className="mb-8 inline-block text-sm text-blue-400 hover:text-blue-300">← Back to SATisfied</Link>

        <h1 className="mb-1 text-3xl font-black text-white">Subscription</h1>
        <p className="mb-8 text-sm text-slate-500">Manage your SATisfied Premium plan</p>

        {message && (
          <div className="mb-6 rounded-xl border border-blue-700/40 bg-blue-950/50 px-4 py-3 text-sm text-blue-200">
            {message}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
          </div>
        ) : !user ? (
          <div className="rounded-2xl border border-blue-900/40 bg-blue-950/20 p-6 text-center">
            <p className="mb-4 text-slate-400">Sign in to manage your subscription.</p>
            <Link href="/" className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-500 transition">
              Go to App
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Plan card */}
            <div className="rounded-2xl border border-blue-900/40 bg-blue-950/20 p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">Current Plan</p>
                  <p className="text-xl font-black text-white">
                    {isActive ? "SATisfied Premium" : "No Active Plan"}
                  </p>
                </div>
                {status && (
                  <span className={`rounded-full border border-current px-3 py-1 text-xs font-bold ${statusLabel[status].color}`}>
                    {statusLabel[status].text}
                  </span>
                )}
              </div>

              {isActive && (
                <div className="mb-6 space-y-2 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    PSAT &amp; SAT daily practice boards
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Weekly &amp; all-time leaderboard
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    New questions every day
                  </div>
                </div>
              )}

              {!isActive && (
                <div className="mb-4 rounded-xl border border-yellow-600/30 bg-yellow-950/20 px-4 py-3 text-center">
                  <p className="text-2xl font-black text-yellow-400">$1.99<span className="text-base font-normal text-slate-400">/month</span></p>
                  <p className="text-xs text-slate-500 mt-1">Includes 7-day free trial · Cancel anytime</p>
                </div>
              )}

              {endDate && (
                <p className="mb-4 text-xs text-slate-500">
                  {status === "canceled" ? "Access until" : "Renews"}: {endDate}
                </p>
              )}

              {isActive ? (
                <button
                  onClick={handleManage}
                  disabled={actionLoading}
                  className="w-full rounded-xl border border-blue-700 bg-blue-950/40 py-3 font-bold text-blue-300 transition hover:bg-blue-900/40 disabled:opacity-50"
                >
                  {actionLoading ? "Loading…" : "Manage Billing / Cancel"}
                </button>
              ) : (
                <button
                  onClick={handleSubscribe}
                  disabled={actionLoading}
                  className="w-full rounded-xl bg-yellow-500 py-3 font-black text-black transition hover:bg-yellow-400 disabled:opacity-50"
                >
                  {actionLoading ? "Loading…" : "Start 7-Day Free Trial"}
                </button>
              )}
            </div>

            <p className="text-center text-xs text-slate-600">
              Payments processed securely by Stripe. We never store your card details.{" "}
              <Link href="/terms" className="text-blue-600 hover:text-blue-400">Terms</Link>
              {" · "}
              <Link href="/privacy" className="text-blue-600 hover:text-blue-400">Privacy</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
