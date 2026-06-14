import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

export type LeaderboardEntry = {
  id?: number;
  player_name: string;
  score: number;
  date: string; // ISO date string YYYY-MM-DD
  created_at?: string;
};
