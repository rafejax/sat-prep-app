"use client";

import { useState, useEffect, useRef } from "react";
import { useBackgroundMusic } from "@/hooks/useAudio";

export default function AudioControls() {
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);
  const music = useBackgroundMusic();
  const musicRef = useRef(music);
  musicRef.current = music;

  // Start music on first user interaction if not already started
  useEffect(() => {
    const start = () => {
      if (!started) {
        musicRef.current.start();
        setStarted(true);
      }
      window.removeEventListener("click", start);
      window.removeEventListener("keydown", start);
    };
    window.addEventListener("click", start, { once: true });
    window.addEventListener("keydown", start, { once: true });
    return () => {
      window.removeEventListener("click", start);
      window.removeEventListener("keydown", start);
    };
  }, [started]);

  function toggle() {
    const next = !muted;
    setMuted(next);
    musicRef.current.setMuted(next);
    if (!started) {
      musicRef.current.start();
      setStarted(true);
    }
  }

  return (
    <button
      onClick={toggle}
      title={muted ? "Unmute music" : "Mute music"}
      className="flex items-center gap-1.5 rounded-full border border-blue-800/60 bg-blue-950/60 px-2.5 py-1 text-xs text-blue-400 transition hover:bg-blue-900/60"
    >
      <span className="text-base leading-none">{muted ? "🔇" : "🎵"}</span>
      <span className="hidden sm:inline">{muted ? "Music off" : "Music on"}</span>
    </button>
  );
}
