import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

export type LeaderboardEntry = {
  id?: number;
  player_name: string;
  score: number;
  mode?: string;
  date: string;
  user_id?: string | null;
  created_at?: string;
};
