import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const memoryStore: {
  id: number; player_name: string; score: number; mode: string; date: string;
}[] = [];

/** Returns the most recent Monday in Eastern Time as a YYYY-MM-DD string.
 *  Weekly leaderboard resets at midnight ET every Monday. */
function getMondayDate(): string {
  // Get today's date in Eastern Time (handles EST/EDT automatically)
  const etDateStr = new Date().toLocaleDateString("en-CA", { timeZone: "America/New_York" });
  const [year, month, day] = etDateStr.split("-").map(Number);

  // Build a plain local Date so we can do day-of-week arithmetic
  const d = new Date(year, month - 1, day);
  const dow = d.getDay(); // 0=Sun … 6=Sat
  const daysBack = dow === 0 ? 6 : dow - 1;
  d.setDate(d.getDate() - daysBack);

  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const period = searchParams.get("period") ?? "alltime"; // "weekly" | "alltime"
  const mode   = searchParams.get("mode");                // "PSAT" | "SAT" | null

  if (supabase) {
    let query = supabase
      .from("leaderboard")
      .select("*")
      .order("score", { ascending: false })
      .limit(2000);

    if (period === "weekly") {
      query = query.gte("date", getMondayDate());
    }
    if (mode) {
      query = query.eq("mode", mode);
    }

    const { data, error } = await query;
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    // Aggregate: sum all scores per player so the leaderboard reflects cumulative effort
    const byPlayer = new Map<string, { player_name: string; score: number; mode: string; date: string }>();
    for (const entry of data ?? []) {
      const existing = byPlayer.get(entry.player_name);
      if (!existing) {
        byPlayer.set(entry.player_name, { ...entry });
      } else {
        existing.score += entry.score;
      }
    }
    const deduped = [...byPlayer.values()].sort((a, b) => b.score - a.score).slice(0, 50);
    return NextResponse.json(deduped);
  }

  // In-memory fallback
  let entries = [...memoryStore];
  if (mode)             entries = entries.filter((e) => e.mode === mode);
  if (period === "weekly") {
    const cutoff = getMondayDate();
    entries = entries.filter((e) => e.date >= cutoff);
  }
  entries.sort((a, b) => b.score - a.score);
  return NextResponse.json(entries.slice(0, 50));
}

export async function POST(req: NextRequest) {
  const body  = await req.json();
  const entry = {
    player_name: String(body.player_name).slice(0, 32),
    score:       Number(body.score),
    mode:        body.mode === "SAT" ? "SAT" : "PSAT",
    date:        new Date().toLocaleDateString("en-CA", { timeZone: "America/New_York" }),
  };

  if (supabase) {
    const { data, error } = await supabase.from("leaderboard").insert(entry).select().single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
  }

  const saved = { ...entry, id: memoryStore.length + 1 };
  memoryStore.push(saved);
  return NextResponse.json(saved);
}
