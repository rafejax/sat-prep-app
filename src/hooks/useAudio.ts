"use client";

import { useRef, useEffect, useCallback } from "react";

// ── Shared AudioContext ────────────────────────────────────────────────────────
let sharedCtx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!sharedCtx || sharedCtx.state === "closed") sharedCtx = new AudioContext();
  return sharedCtx;
}

function envelope(
  gain: GainNode, ctx: AudioContext,
  t0: number, peak: number, attack: number, hold: number, release: number
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
    [
      { freq: 880, t: 0,    dur: 0.12 },
      { freq: 660, t: 0.18, dur: 0.12 },
      { freq: 440, t: 0.36, dur: 0.22 },
    ].forEach(({ freq, t, dur }) => {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = "square";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + t);
      envelope(gain, ctx, ctx.currentTime + t, 0.15, 0.01, dur - 0.02, 0.04);
      osc.start(ctx.currentTime + t); osc.stop(ctx.currentTime + t + dur + 0.05);
    });
  }, []);
}

// ── Correct-answer chime ───────────────────────────────────────────────────────
export function useCorrectSound() {
  return useCallback(() => {
    const ctx = getCtx();
    if (!ctx) return;
    if (ctx.state === "suspended") ctx.resume();
    [{ freq: 523, t: 0 }, { freq: 784, t: 0.16 }].forEach(({ freq, t }) => {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + t);
      envelope(gain, ctx, ctx.currentTime + t, 0.22, 0.01, 0.05, 0.35);
      osc.start(ctx.currentTime + t); osc.stop(ctx.currentTime + t + 0.42);
    });
  }, []);
}

// ── Wrong-answer thud ──────────────────────────────────────────────────────────
export function useWrongSound() {
  return useCallback(() => {
    const ctx = getCtx();
    if (!ctx) return;
    if (ctx.state === "suspended") ctx.resume();
    [{ freq: 311, t: 0 }, { freq: 261, t: 0.18 }].forEach(({ freq, t }) => {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + t);
      osc.frequency.linearRampToValueAtTime(freq * 0.92, ctx.currentTime + t + 0.2);
      envelope(gain, ctx, ctx.currentTime + t, 0.18, 0.01, 0.05, 0.28);
      osc.start(ctx.currentTime + t); osc.stop(ctx.currentTime + t + 0.36);
    });
  }, []);
}

// ── Coffee-shop jazz background music ─────────────────────────────────────────
// Original composition — smooth jazz in C major/A minor, 92 BPM.
// Walking bass line, maj9/dom9 chord voicings, swing-inflected melody.
// 100% royalty-free procedural audio via Web Audio API.

const BPM  = 92;
const BEAT = 60 / BPM;
const BAR  = BEAT * 4;

// Swing ratio: long-short pair (dotted-eighth + sixteenth feel)
const SW = 0.67; // long beat fraction in a pair

// Melody — C major pentatonic (C D E G A), warm single-note line
// [freq Hz, beat offset, duration beats]
const MELODY: [number, number, number][] = [
  // Bar 1 — Cmaj feel, rising
  [392, 0,       0.5 ], [440, 0+SW,    0.33], [523.3, 1,     0.5 ],
  [587.3, 1+SW,  0.5 ], [659.3, 2,     1.5 ],
  // Bar 2 — Am colour, step down
  [659.3, 4,     0.33], [587.3, 4+SW,  0.5 ], [523.3, 5,     0.5 ],
  [440,   5+SW,  0.5 ], [392,   6,     2   ],
  // Bar 3 — F maj flavour, rising phrase
  [349.2, 8,     0.5 ], [392,   8+SW,  0.5 ], [440,   9,     0.5 ],
  [523.3, 9+SW,  0.5 ], [587.3, 10,    1   ], [659.3, 11,    1   ],
  // Bar 4 — resolve to C
  [587.3, 12,    0.33], [523.3, 12+SW, 0.33], [440, 13,      0.5 ],
  [392,   13+SW, 0.5 ], [523.3, 14,    2   ],
  // Bar 5 — G dominant push
  [392,   16,    0.5 ], [440,   16+SW, 0.5 ], [587.3, 17,    0.5 ],
  [659.3, 17+SW, 0.5 ], [784,   18,    1.5 ],
  // Bar 6 — back to Am
  [784,   20,    0.33], [659.3, 20+SW, 0.5 ], [587.3, 21,    0.5 ],
  [523.3, 21+SW, 0.5 ], [440,   22,    2   ],
  // Bar 7 — climb
  [392,   24,    0.5 ], [440,   24+SW, 0.5 ], [523.3, 25,    0.75],
  [587.3, 26,    0.75], [659.3, 27,    1   ],
  // Bar 8 — long resolve
  [523.3, 28,    0.5 ], [440,   28+SW, 0.5 ], [392,   29,    3   ],
];

// Jazz pads — warm maj9/dom9 voicings, change every 2 bars
// [freqs[] Hz, beat offset, duration bars]
const PADS: [number[], number, number][] = [
  [[261.6, 329.6, 392,   493.9, 587.3], 0,  2],  // Cmaj9
  [[220,   261.6, 329.6, 415.3, 523.3], 8,  2],  // Am9
  [[174.6, 220,   261.6, 349.2, 440  ], 16, 2],  // Fmaj9
  [[196,   246.9, 293.7, 370,   493.9], 24, 2],  // G9 (dominant)
];

// Walking bass — stepwise quarter notes, jazz-style chromatic approach
const BASS: [number, number][] = [
  // Bar 1 — C walk C-E-G-B
  [65.4, 0], [82.4, 1], [98,   2], [123.5, 3],
  // Bar 2 — A walk A-C-E-G
  [55,   4], [65.4, 5], [82.4, 6], [98,    7],
  // Bar 3 — F walk F-A-C-E
  [43.7, 8], [55,   9], [65.4, 10], [82.4, 11],
  // Bar 4 — G walk G-B-D-F#
  [49,   12], [61.7, 13], [73.4, 14], [92.5, 15],
  // repeat with variation
  [65.4, 16], [73.4, 17], [82.4, 18], [98,   19],
  [55,   20], [65.4, 21], [73.4, 22], [82.4, 23],
  [43.7, 24], [55,   25], [61.7, 26], [73.4, 27],
  [49,   28], [55,   29], [65.4, 30], [73.4, 31],
];

const LOOP_BEATS = 32;

function makeReverb(ctx: AudioContext): ConvolverNode {
  const len    = ctx.sampleRate * 1.2;
  const buffer = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let c = 0; c < 2; c++) {
    const d = buffer.getChannelData(c);
    for (let i = 0; i < len; i++) {
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.5);
    }
  }
  const rv = ctx.createConvolver();
  rv.buffer = buffer;
  return rv;
}

export function useBackgroundMusic() {
  const playingRef = useRef(false);
  const mutedRef   = useRef(false);
  const masterRef  = useRef<GainNode | null>(null);
  const loopTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reverbRef  = useRef<ConvolverNode | null>(null);

  const scheduleLoop = useCallback((loopStart: number) => {
    const ctx = getCtx();
    if (!ctx || !masterRef.current) return;
    const master = masterRef.current;

    if (!reverbRef.current) {
      reverbRef.current = makeReverb(ctx);
      const reverbGain = ctx.createGain();
      reverbGain.gain.setValueAtTime(0.18, ctx.currentTime);
      reverbRef.current.connect(reverbGain);
      reverbGain.connect(master);
    }
    const reverb = reverbRef.current;

    // Melody — warm sine with slight vibrato feel via detuning
    MELODY.forEach(([freq, beat, dur]) => {
      const t0  = loopStart + beat * BEAT;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(master);
      osc.connect(reverb);
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t0);
      // Subtle pitch warmth
      osc.detune.setValueAtTime(3, t0);
      osc.detune.linearRampToValueAtTime(-3, t0 + dur * BEAT * 0.6);
      envelope(gain, ctx, t0, 0.11, 0.035, dur * BEAT - 0.08, 0.12);
      osc.start(t0); osc.stop(t0 + dur * BEAT + 0.15);
    });

    // Jazz pads — triangle + sine layer for warmth, slow attack
    PADS.forEach(([freqs, beat, bars]) => {
      const t0   = loopStart + beat * BEAT;
      const tDur = BAR * bars * 0.9;
      freqs.forEach((freq, i) => {
        const osc = ctx.createOscillator(), gain = ctx.createGain();
        osc.connect(gain); gain.connect(master);
        osc.type = i < 2 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, t0);
        osc.detune.setValueAtTime(i % 2 === 0 ? 4 : -4, t0);
        const stagger = i * 0.06;
        envelope(gain, ctx, t0 + stagger, i < 2 ? 0.055 : 0.035, 0.22, tDur - stagger - 0.3, 0.3);
        osc.start(t0 + stagger); osc.stop(t0 + tDur + 0.35);
      });
    });

    // Walking bass — sine, punchy with quick attack
    BASS.forEach(([freq, beat]) => {
      const t0  = loopStart + beat * BEAT;
      const dur = BEAT * 0.82;
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.connect(gain); gain.connect(master);
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t0);
      // Slight pitch slide up for walking feel
      osc.frequency.linearRampToValueAtTime(freq * 1.01, t0 + 0.05);
      envelope(gain, ctx, t0, 0.28, 0.02, dur - 0.05, 0.07);
      osc.start(t0); osc.stop(t0 + dur + 0.08);
    });

    // Brushed hi-hat — filtered white noise, every 2 beats (on the offbeat)
    for (let b = 0; b < LOOP_BEATS; b += 2) {
      const t0     = loopStart + (b + 0.5) * BEAT;
      const bufSz  = ctx.sampleRate * 0.06;
      const buf    = ctx.createBuffer(1, bufSz, ctx.sampleRate);
      const d      = buf.getChannelData(0);
      for (let i = 0; i < bufSz; i++) d[i] = Math.random() * 2 - 1;
      const src    = ctx.createBufferSource();
      src.buffer   = buf;
      const filter = ctx.createBiquadFilter();
      filter.type  = "highpass"; filter.frequency.value = 7000;
      const gain   = ctx.createGain();
      src.connect(filter); filter.connect(gain); gain.connect(master);
      envelope(gain, ctx, t0, 0.04, 0.002, 0.03, 0.025);
      src.start(t0); src.stop(t0 + 0.08);
    }

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
    master.gain.setValueAtTime(mutedRef.current ? 0 : 0.7, ctx.currentTime);
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
    reverbRef.current = null;
  }, []);

  const setMuted = useCallback((muted: boolean) => {
    mutedRef.current = muted;
    if (masterRef.current) {
      const ctx = getCtx();
      if (ctx) masterRef.current.gain.linearRampToValueAtTime(muted ? 0 : 0.7, ctx.currentTime + 0.3);
    }
  }, []);

  useEffect(() => () => { stop(); }, [stop]);
  return { start, stop, setMuted };
}
