"use client";

import { RefObject } from "react";

export default function AccuracySection({ accRef, accDisplay }: { accRef: RefObject<HTMLDivElement | null>; accDisplay: string }) {
  return (
    <section className="vr-row" style={{ padding: "70px var(--vr-gutter, 32px)", maxWidth: 1200, margin: "0 auto" }}>
      <div ref={accRef} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
        <div style={{ textAlign: "left" }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A78BFA", margin: "0 0 20px" }}>
            The proof
          </p>
          <div style={{ position: "relative", display: "inline-block" }}>
            <div
              style={{
                position: "absolute",
                inset: -30,
                background: "radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)",
                filter: "blur(20px)",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                fontSize: 118,
                fontWeight: 800,
                letterSpacing: "-0.05em",
                lineHeight: 1,
                background: "linear-gradient(120deg, #fff, #C4B5FD)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {accDisplay}%
            </div>
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: 8 }}>
            Validation Accuracy
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.6)", margin: "20px 0 0", maxWidth: 420, textWrap: "pretty" }}>
            Industry-leading accuracy, powered by advanced AI and machine learning — not a rough estimate, a number we can prove.
          </p>
        </div>
        <div style={{ background: "#151220", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, padding: 32, boxShadow: "0 24px 60px rgba(0,0,0,0.45)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <div style={{ position: "relative", width: 168, height: 168, flexShrink: 0 }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: "conic-gradient(#34D399 0 72%, #F2A73E 72% 86%, #F26363 86% 95%, rgba(255,255,255,0.16) 95% 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 26,
                  borderRadius: "50%",
                  background: "#151220",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ fontSize: 30, fontWeight: 800, color: "#F5F3FA", fontVariantNumeric: "tabular-nums" }}>72%</div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.42)" }}>Valid</div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 13, flex: 1 }}>
              {[
                { color: "#34D399", label: "Valid", pct: "72%" },
                { color: "#F2A73E", label: "Risky", pct: "14%" },
                { color: "#F26363", label: "Invalid", pct: "9%" },
                { color: "rgba(255,255,255,0.28)", label: "Unknown", pct: "5%" },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 9, fontSize: 14.5, fontWeight: 600, color: "rgba(255,255,255,0.75)" }}>
                    <span style={{ width: 10, height: 10, borderRadius: 3, background: row.color }} />
                    {row.label}
                  </span>
                  <span style={{ fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{row.pct}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
              marginTop: 26,
              paddingTop: 24,
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#F5F3FA" }}>2.3%</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 3 }}>Avg. bounce rate after validation</div>
            </div>
            <div>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#F5F3FA" }}>3.5 → 8.8</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 3 }}>Avg. sender score improvement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
