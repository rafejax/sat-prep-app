export type GameSave = {
  date: string; // YYYY-MM-DD
  mode: "PSAT" | "SAT";
  playerName: string;
  score: number;
  answered: Record<string, "correct" | "wrong">;
  completed: boolean;
  submittedToLeaderboard: boolean;
};

const key = (mode: "PSAT" | "SAT") => `sat-jeopardy-${mode}`;

export function loadSave(mode: "PSAT" | "SAT"): GameSave | null {
  if (typeof window === "undefined") return null;
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "America/New_York" });
  try {
    const raw = localStorage.getItem(key(mode));
    if (!raw) return null;
    const save: GameSave = JSON.parse(raw);
    if (save.date !== today) {
      localStorage.removeItem(key(mode));
      return null;
    }
    return save;
  } catch {
    return null;
  }
}

export function writeSave(save: GameSave) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key(save.mode), JSON.stringify(save));
}
