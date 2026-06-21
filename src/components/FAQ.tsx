"use client";

import { useState } from "react";
import Link from "next/link";

type FAQItem = { q: string; a: React.ReactNode };

const FAQS: FAQItem[] = [
  {
    q: "What is SATisfied?",
    a: "SATisfied is a daily SAT and PSAT practice app. Each day you get a fresh set of 10 questions across Math and English, arranged in a game show-style board with point values from 200 to 1,000. Compete on the weekly leaderboard and track your progress over time.",
  },
  {
    q: "What's the difference between PSAT and SAT mode?",
    a: "PSAT mode features foundational-level questions suited for students preparing for the PSAT exam. SAT mode features more advanced questions at the difficulty level of the SAT. Both modes share the same format: 5 Math + 5 English questions per day.",
  },
  {
    q: "Do I need an account to play?",
    a: "Yes. A SATisfied account and an active subscription are required to access the practice boards. You can create an account and start a 7-day free trial — no charge until the trial ends. Without a subscription, the boards are locked.",
  },
  {
    q: "Is my progress saved if I exit?",
    a: "Yes. Your in-progress game is automatically saved to your browser. If you exit mid-board and come back the same day, you can resume right where you left off. Progress resets at midnight Eastern Time each day when new questions are released.",
  },
  {
    q: "When do new questions come out?",
    a: "New questions are released every day at midnight Eastern Time (ET). The weekly leaderboard also resets every Monday at midnight ET.",
  },
  {
    q: "How is my score calculated?",
    a: "Each question has a point value (200, 400, 600, 800, or 1,000). Answering correctly earns you the full point value. Incorrect answers earn 0 points. The maximum possible score per session is 6,000 points (all 10 questions correct).",
  },
  {
    q: "How does the leaderboard work?",
    a: "Your score is submitted to the leaderboard automatically when you finish a board. The leaderboard is cumulative — it adds up all of your scores over time, not just your single best game. The weekly leaderboard totals every score you earn during the current week (Monday–Sunday ET) and resets each Monday at midnight ET. The all-time leaderboard is a running total of every score you have ever submitted. The more days you play, the higher your total.",
  },
  {
    q: "What does the subscription include?",
    a: (
      <>
        A SATisfied subscription ($1.99/month) unlocks full access to both PSAT and SAT daily practice boards and the leaderboard. New subscribers get a <strong>7-day free trial</strong> — no charge until the trial ends. You can cancel anytime.
      </>
    ),
  },
  {
    q: "How do I cancel my subscription?",
    a: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>Sign in to your account on SATisfied.</li>
        <li>On the home screen, tap <strong>Manage plan</strong> next to your name, or go to <Link href="/subscription" className="text-blue-400 hover:text-blue-300 underline">satisfied.app/subscription</Link>.</li>
        <li>Click <strong>Manage Billing / Cancel</strong>. You will be redirected to the Stripe billing portal.</li>
        <li>In the portal, click <strong>Cancel plan</strong> and confirm.</li>
        <li>Your access continues until the end of the current billing period — you will not be charged again after canceling.</li>
      </ol>
    ),
  },
  {
    q: "Will I be charged immediately when I start the free trial?",
    a: "No. Your card is not charged during the 7-day free trial. Billing begins only after the trial ends. You can cancel at any time during the trial and you will never be charged.",
  },
  {
    q: "How do I update my display name or account info?",
    a: (
      <>
        Go to your <Link href="/profile" className="text-blue-400 hover:text-blue-300 underline">Profile page</Link> by clicking <strong>Profile</strong> next to your name on the home screen. From there you can update your display name — the change will also update your name on the leaderboard automatically. Your email address cannot be changed after signup.
      </>
    ),
  },
  {
    q: "Is SATisfied affiliated with the College Board?",
    a: "No. SATisfied is an independent educational practice tool and is not affiliated with, endorsed by, or associated with the College Board or any official testing organization. Scores within the app do not predict or guarantee performance on official exams.",
  },
  {
    q: "How do I contact support?",
    a: (
      <>
        Call or text us at <span className="text-blue-400">(424) 216-8055</span>. For billing questions or disputes, please have your account email ready.
      </>
    ),
  },
];

function FAQItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-blue-900/40 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-white transition hover:text-blue-300"
      >
        <span>{item.q}</span>
        <span className={`shrink-0 text-blue-500 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          ＋
        </span>
      </button>
      {open && (
        <div className="pb-4 text-sm leading-7 text-slate-400">
          {item.a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-xl">
        <h2 className="mb-1 text-2xl font-black text-white">FAQ</h2>
        <p className="mb-6 text-sm text-slate-500">Frequently asked questions</p>
        <div className="rounded-2xl border border-blue-900/40 bg-blue-950/10 px-5">
          {FAQS.map((item) => (
            <FAQItem key={item.q} item={item} />
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-600">
          Still have questions? Call or text{" "}
          <span className="text-blue-500">(424) 216-8055</span>
        </p>
      </div>
    </div>
  );
}
