import { supabase } from "./supabase";

export type AuthUser = {
  id: string;
  email: string;
  displayName: string;
};

export async function signUp(email: string, password: string, displayName: string) {
  if (!supabase) throw new Error("Supabase not configured");
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { display_name: displayName } },
  });
  if (error) throw error;
  return data;
}

export async function signIn(email: string, password: string) {
  if (!supabase) throw new Error("Supabase not configured");
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

export async function signOut() {
  if (!supabase) return;
  await supabase.auth.signOut();
}

export async function getSession(): Promise<AuthUser | null> {
  if (!supabase) return null;
  const { data } = await supabase.auth.getSession();
  const user = data.session?.user;
  if (!user) return null;
  return {
    id: user.id,
    email: user.email ?? "",
    displayName: user.user_metadata?.display_name ?? user.email ?? "Player",
  };
}

export function onAuthChange(cb: (user: AuthUser | null) => void) {
  if (!supabase) return () => {};
  const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    const user = session?.user ?? null;
    cb(
      user
        ? {
            id: user.id,
            email: user.email ?? "",
            displayName: user.user_metadata?.display_name ?? user.email ?? "Player",
          }
        : null
    );
  });
  return () => data.subscription.unsubscribe();
}
