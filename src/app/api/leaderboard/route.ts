import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

/** Service-role client — bypasses RLS so the rename endpoint can update any row. */
function getServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

const memoryStore: {
  id: number; player_name: string; score: number; mode: string; date: string; user_id?: string;
}[] = [];

/** Returns the most recent Monday in Eastern Time as a YYYY-MM-DD string. */
function getMondayDate(): string {
  const etDateStr = new Date().toLocaleDateString("en-CA", { timeZone: "America/New_York" });
  const [year, month, day] = etDateStr.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  const daysBack = d.getDay() === 0 ? 6 : d.getDay() - 1;
  d.setDate(d.getDate() - daysBack);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const period = searchParams.get("period") ?? "alltime";
  const mode   = searchParams.get("mode");

  if (supabase) {
    let query = supabase
      .from("leaderboard")
      .select("*")
      .order("score", { ascending: false })
      .limit(2000);

    if (period === "weekly") query = query.gte("date", getMondayDate());
    if (mode)               query = query.eq("mode", mode);

    const { data, error } = await query;
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    // Aggregate by user_id (logged-in players) or player_name (guests).
    // Use the most recently seen player_name for each user so display name
    // changes are reflected immediately after a rename.
    const byKey = new Map<string, { player_name: string; score: number; mode: string; date: string }>();
    for (const entry of data ?? []) {
      const key = entry.user_id ?? `guest:${entry.player_name}`;
      const existing = byKey.get(key);
      if (!existing) {
        byKey.set(key, { player_name: entry.player_name, score: entry.score, mode: entry.mode, date: entry.date });
      } else {
        existing.score += entry.score;
        // Track the most recent entry's name so renames show up
        if (entry.date > existing.date) {
          existing.player_name = entry.player_name;
          existing.date = entry.date;
        }
      }
    }
    const ranked = [...byKey.values()].sort((a, b) => b.score - a.score).slice(0, 50);
    return NextResponse.json(ranked);
  }

  // In-memory fallback (dev/no-Supabase)
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
    user_id:     body.user_id ? String(body.user_id) : null,
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

/** PATCH /api/leaderboard — rename all entries for a user when they change their display name. */
export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { user_id, new_name } = body as { user_id?: string; new_name?: string };

  if (!user_id || !new_name) {
    return NextResponse.json({ error: "user_id and new_name are required" }, { status: 400 });
  }

  const svc = getServiceClient();
  if (!svc) return NextResponse.json({ error: "Service client unavailable" }, { status: 500 });

  const { error } = await svc
    .from("leaderboard")
    .update({ player_name: String(new_name).slice(0, 32) })
    .eq("user_id", user_id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
