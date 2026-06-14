-- ─────────────────────────────────────────────────────────────────────────────
-- SATisfied — Supabase schema
-- Run this in the Supabase SQL editor (safe to re-run; uses IF NOT EXISTS / DO)
-- ─────────────────────────────────────────────────────────────────────────────

-- ── Leaderboard ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS leaderboard (
  id          BIGSERIAL PRIMARY KEY,
  player_name TEXT        NOT NULL,
  score       INTEGER     NOT NULL,
  mode        TEXT        NOT NULL DEFAULT 'SAT',   -- 'PSAT' | 'SAT'
  date        DATE        NOT NULL DEFAULT CURRENT_DATE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Add mode column if table already exists without it
ALTER TABLE leaderboard ADD COLUMN IF NOT EXISTS mode TEXT NOT NULL DEFAULT 'SAT';

CREATE INDEX IF NOT EXISTS leaderboard_score_idx ON leaderboard (score DESC);
CREATE INDEX IF NOT EXISTS leaderboard_date_idx  ON leaderboard (date);
CREATE INDEX IF NOT EXISTS leaderboard_mode_idx  ON leaderboard (mode);

ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'leaderboard' AND policyname = 'Anyone can read leaderboard'
  ) THEN
    CREATE POLICY "Anyone can read leaderboard" ON leaderboard FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'leaderboard' AND policyname = 'Anyone can insert scores'
  ) THEN
    CREATE POLICY "Anyone can insert scores" ON leaderboard FOR INSERT WITH CHECK (true);
  END IF;
END $$;

-- ── User Profiles (subscription status + Stripe customer ID) ──────────────────
CREATE TABLE IF NOT EXISTS profiles (
  id                   UUID        PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name         TEXT,
  stripe_customer_id   TEXT        UNIQUE,
  subscription_status  TEXT        NOT NULL DEFAULT 'inactive',
  subscription_end_at  TIMESTAMPTZ,
  updated_at           TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS profiles_stripe_idx ON profiles (stripe_customer_id);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can read own profile'
  ) THEN
    CREATE POLICY "Users can read own profile" ON profiles FOR SELECT USING (auth.uid() = id);
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can update own profile'
  ) THEN
    CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
  END IF;
END $$;

-- Auto-create profile row when a new user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1))
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
