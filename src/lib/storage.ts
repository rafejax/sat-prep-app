export type GameSave = {
  date: string; // YYYY-MM-DD
  mode: "PSAT" | "SAT";
  playerName: string;
  score: number;
  answered: Record<string, "correct" | "wrong">;
  completed: boolean;
  submittedToLeaderboard: boolean;
};

const key = (mode: "PSAT" | "SAT", userId?: string) =>
  `sat-jeopardy-${userId ?? "guest"}-${mode}`;

export function loadSave(mode: "PSAT" | "SAT", userId?: string): GameSave | null {
  if (typeof window === "undefined") return null;
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "America/New_York" });
  try {
    const raw = localStorage.getItem(key(mode, userId));
    if (!raw) return null;
    const save: GameSave = JSON.parse(raw);
    if (save.date !== today) {
      localStorage.removeItem(key(mode, userId));
      return null;
    }
    return save;
  } catch {
    return null;
  }
}

export function writeSave(save: GameSave, userId?: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key(save.mode, userId), JSON.stringify(save));
}
