import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SATisfied SAT Prep – Daily SAT & PSAT Practice";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const MATH_COLOR = "#1d4ed8";
const ENG_COLOR = "#312e81";
const GOLD = "#fbbf24";
const GOLD_TEXT = "#1a1a00";

const POINTS = [200, 400, 600, 800, 1000];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#040410",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
        }}
      >
        {/* Title */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 28, lineHeight: 1 }}>🎓</span>
          <span style={{ fontSize: 64, fontWeight: 900, color: "white", letterSpacing: "-1px" }}>
            SAT<span style={{ color: GOLD }}>isfied</span>
          </span>
          <span style={{ fontSize: 28, lineHeight: 1 }}>🎓</span>
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: 22, color: "#64748b", letterSpacing: "0.18em", textTransform: "uppercase" }}>
          Daily SAT &amp; PSAT Practice
        </div>

        {/* Game board grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, width: 760 }}>
          {/* Math row */}
          <div style={{ display: "flex", gap: 10 }}>
            {POINTS.map((pts) => (
              <div
                key={`m-${pts}`}
                style={{
                  flex: 1,
                  background: pts === 1000 ? GOLD : MATH_COLOR,
                  borderRadius: 10,
                  padding: "14px 0",
                  textAlign: "center",
                  fontSize: 26,
                  fontWeight: 900,
                  color: pts === 1000 ? GOLD_TEXT : "#bfdbfe",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {pts}
              </div>
            ))}
          </div>
          {/* English row */}
          <div style={{ display: "flex", gap: 10 }}>
            {POINTS.map((pts) => (
              <div
                key={`e-${pts}`}
                style={{
                  flex: 1,
                  background: pts === 1000 ? GOLD : ENG_COLOR,
                  borderRadius: 10,
                  padding: "14px 0",
                  textAlign: "center",
                  fontSize: 26,
                  fontWeight: 900,
                  color: pts === 1000 ? GOLD_TEXT : "#c7d2fe",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {pts}
              </div>
            ))}
          </div>
        </div>

        {/* Row labels */}
        <div style={{ display: "flex", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 14, height: 14, borderRadius: 3, background: MATH_COLOR }} />
            <span style={{ fontSize: 16, color: "#94a3b8", fontWeight: 700 }}>Math</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 14, height: 14, borderRadius: 3, background: ENG_COLOR }} />
            <span style={{ fontSize: 16, color: "#94a3b8", fontWeight: 700 }}>English</span>
          </div>
        </div>

        {/* Domain */}
        <div style={{ fontSize: 18, color: "#334155", letterSpacing: "0.05em" }}>
          satisfiedsatprep.com
        </div>
      </div>
    ),
    { ...size }
  );
}
