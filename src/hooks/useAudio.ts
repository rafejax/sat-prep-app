"use client";

import { useRef, useEffect, useCallback } from "react";

// ── Shared AudioContext ────────────────────────────────────────────────────────
let sharedCtx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!sharedCtx || sharedCtx.state === "closed") {
    sharedCtx = new AudioContext();
  }
  return sharedCtx;
}

// Soft fade-in/out envelope helper
function envelope(
  gain: GainNode,
  ctx: AudioContext,
  t0: number,
  peak: number,
  attack: number,
  hold: number,
  release: number
) {
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(peak, t0 + attack);
  gain.gain.setValueAtTime(peak, t0 + attack + hold);
  gain.gain.linearRampToValueAtTime(0, t0 + attack + hold + release);
}

// ── Timer-expired sound ────────────────────────────────────────────────────────
export function useTimerSound() {
  return useCallback(() => {
    const ctx = getCtx();
    if (!ctx) return;
    if (ctx.state === "suspended") ctx.resume();

    // Three descending square beeps
    [
      { freq: 880, t: 0,    dur: 0.12 },
      { freq: 660, t: 0.18, dur: 0.12 },
      { freq: 440, t: 0.36, dur: 0.22 },
    ].forEach(({ freq, t, dur }) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "square";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + t);
      envelope(gain, ctx, ctx.currentTime + t, 0.15, 0.01, dur - 0.02, 0.04);
      osc.start(ctx.currentTime + t);
      osc.stop(ctx.currentTime + t + dur + 0.05);
    });
  }, []);
}

// ── Correct-answer chime ───────────────────────────────────────────────────────
export function useCorrectSound() {
  return useCallback(() => {
    const ctx = getCtx();
    if (!ctx) return;
    if (ctx.state === "suspended") ctx.resume();

    // Rising two-note chime — C5 → G5
    [{ freq: 523, t: 0 }, { freq: 784, t: 0.16 }].forEach(({ freq, t }) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + t);
      envelope(gain, ctx, ctx.currentTime + t, 0.22, 0.01, 0.05, 0.35);
      osc.start(ctx.currentTime + t);
      osc.stop(ctx.currentTime + t + 0.42);
    });
  }, []);
}

// ── Wrong-answer thud ──────────────────────────────────────────────────────────
export function useWrongSound() {
  return useCallback(() => {
    const ctx = getCtx();
    if (!ctx) return;
    if (ctx.state === "suspended") ctx.resume();

    // Soft descending minor 3rd — two low muted tones
    [{ freq: 311, t: 0 }, { freq: 261, t: 0.18 }].forEach(({ freq, t }) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + t);
      // Pitch bend slightly down for a "droopy" feel
      osc.frequency.linearRampToValueAtTime(freq * 0.92, ctx.currentTime + t + 0.2);
      envelope(gain, ctx, ctx.currentTime + t, 0.18, 0.01, 0.05, 0.28);
      osc.start(ctx.currentTime + t);
      osc.stop(ctx.currentTime + t + 0.36);
    });
  }, []);
}

// ── Lofi game-show background music ───────────────────────────────────────────
// Original composition — calm jazz-influenced lofi, NOT Jeopardy.
// Key: D minor (dorian feel) · 78 BPM · 8-bar repeating phrase
// All notes synthesized via Web Audio API — 100% royalty-free procedural audio.

const BPM  = 78;
const BEAT = 60 / BPM;
const BAR  = BEAT * 4;

// Melody — gentle single-note line (Dm pentatonic: D E F A C)
// [freq Hz, beat offset, duration beats]
const MELODY: [number, number, number][] = [
  // Bar 1 — D E F A
  [293.7, 0,    0.75], [329.6, 1,    0.5 ], [349.2, 1.75, 0.5 ], [440,   2.5,  1.5 ],
  // Bar 2 — C A F E
  [261.6, 4,    0.5 ], [440,   4.75, 0.75], [349.2, 5.75, 0.5 ], [329.6, 6.5,  1.5 ],
  // Bar 3 — D F A C
  [293.7, 8,    0.5 ], [349.2, 8.75, 0.5 ], [440,   9.5,  0.5 ], [523.3, 10,   2   ],
  // Bar 4 — A G F D (step down, resolve)
  [440,   12.5, 0.5 ], [392,   13,   0.5 ], [349.2, 13.5, 0.5 ], [293.7, 14,   2   ],
  // Bar 5 — E F A C (up)
  [329.6, 16,   0.5 ], [349.2, 16.75,0.5 ], [440,   17.5, 0.5 ], [523.3, 18,   1.5 ],
  // Bar 6 — C A F E
  [523.3, 20,   0.5 ], [440,   20.75,0.5 ], [349.2, 21.5, 0.5 ], [329.6, 22,   2   ],
  // Bar 7 — D F A (hold)
  [293.7, 24,   0.5 ], [349.2, 24.75,0.75], [440,   25.75,2.25],
  // Bar 8 — D whole
  [293.7, 28,   3.5 ],
];

// Jazz pad — stacked minor-7th voicing, changes every 2 bars
// [freqs[], beat offset]
const PADS: [number[], number][] = [
  [[293.7, 349.2, 440,   523.3], 0 ],  // Dm7
  [[261.6, 329.6, 392,   493.9], 4 ],  // Cmaj7
  [[261.6, 311.1, 369.9, 466.2], 8 ],  // Fm7 (colour chord)
  [[293.7, 349.2, 440,   523.3], 12],  // Dm7
  [[246.9, 293.7, 369.9, 440  ], 16],  // Bbadd9 feel
  [[261.6, 329.6, 392,   493.9], 20],  // Cmaj7
  [[220,   293.7, 349.2, 440  ], 24],  // Am7
  [[293.7, 349.2, 440,   523.3], 28],  // Dm7
];

// Bass — root quarter notes, soft and mellow
const BASS: [number, number][] = [
  [73.4, 0], [73.4, 2],    // D
  [65.4, 4], [65.4, 6],    // C
  [65.4, 8], [77.8, 10],   // C → Eb
  [73.4, 12], [73.4, 14],  // D
  [61.7, 16], [65.4, 18],  // B → C
  [65.4, 20], [65.4, 22],  // C
  [55,   24], [73.4, 26],  // A → D
  [73.4, 28], [73.4, 30],  // D
];

const LOOP_BEATS = 32;

export function useBackgroundMusic() {
  const playingRef = useRef(false);
  const mutedRef   = useRef(false);
  const masterRef  = useRef<GainNode | null>(null);
  const loopTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleLoop = useCallback((loopStart: number) => {
    const ctx = getCtx();
    if (!ctx || !masterRef.current) return;
    const master = masterRef.current;

    // Melody — soft sine
    MELODY.forEach(([freq, beat, dur]) => {
      const t0  = loopStart + beat * BEAT;
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(master);
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t0);
      envelope(gain, ctx, t0, 0.13, 0.04, dur * BEAT - 0.1, 0.1);
      osc.start(t0);
      osc.stop(t0 + dur * BEAT + 0.12);
    });

    // Jazz pads — triangle, very soft, slow attack (lofi "tape" feel)
    PADS.forEach(([freqs, beat]) => {
      const t0   = loopStart + beat * BEAT;
      const tEnd = t0 + BAR * 2 * 0.88;
      freqs.forEach((freq, i) => {
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(master);
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, t0);
        // Each voice slightly staggered for a gentle roll
        const stagger = i * 0.04;
        envelope(gain, ctx, t0 + stagger, 0.04, 0.18, tEnd - t0 - stagger - 0.25, 0.25);
        osc.start(t0 + stagger);
        osc.stop(tEnd + 0.3);
      });
    });

    // Bass — sine, warm
    BASS.forEach(([freq, beat]) => {
      const t0  = loopStart + beat * BEAT;
      const dur = BEAT * 1.6;
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(master);
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t0);
      envelope(gain, ctx, t0, 0.22, 0.04, dur - 0.1, 0.08);
      osc.start(t0);
      osc.stop(t0 + dur + 0.1);
    });

    const loopDur = LOOP_BEATS * BEAT;
    const msUntil = (loopStart + loopDur - ctx.currentTime) * 1000 - 200;
    loopTimer.current = setTimeout(() => {
      if (playingRef.current) scheduleLoop(loopStart + loopDur);
    }, Math.max(0, msUntil));
  }, []);

  const start = useCallback(() => {
    if (playingRef.current) return;
    const ctx = getCtx();
    if (!ctx) return;
    if (ctx.state === "suspended") ctx.resume();

    const master = ctx.createGain();
    master.gain.setValueAtTime(mutedRef.current ? 0 : 0.65, ctx.currentTime);
    master.connect(ctx.destination);
    masterRef.current = master;

    playingRef.current = true;
    scheduleLoop(ctx.currentTime);
  }, [scheduleLoop]);

  const stop = useCallback(() => {
    playingRef.current = false;
    if (loopTimer.current) clearTimeout(loopTimer.current);
    if (masterRef.current) {
      const ctx = getCtx();
      if (ctx) masterRef.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
      masterRef.current = null;
    }
  }, []);

  const setMuted = useCallback((muted: boolean) => {
    mutedRef.current = muted;
    if (masterRef.current) {
      const ctx = getCtx();
      if (ctx) {
        masterRef.current.gain.linearRampToValueAtTime(
          muted ? 0 : 0.65,
          ctx.currentTime + 0.3
        );
      }
    }
  }, []);

  useEffect(() => () => { stop(); }, [stop]);

  return { start, stop, setMuted };
}
