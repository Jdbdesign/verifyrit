"use client";

import { ReactNode, RefObject } from "react";
import Hoverable from "./Hoverable";

export type OverviewCard = { title: string; body: string; icon: ReactNode };

export type VerificationOverviewProps = {
  overviewCards: OverviewCard[];
  ovRef: RefObject<HTMLDivElement | null>;
  ovTotal: string;
  gaugeOffset: string;
  chartDraw: string;
  areaOpacity: string;
};

export default function VerificationOverview(p: VerificationOverviewProps) {
  return (
    <section className="vr-row" style={{ padding: "30px var(--vr-gutter, 32px) 60px", maxWidth: 1260, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.02fr 0.98fr", gap: 40, alignItems: "stretch" }}>
        {/* LEFT: heading + feature cards */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 40 }}>
          <h2 style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.12, margin: 0, maxWidth: 460, textWrap: "balance" }}>
            Built to improve your{" "}
            <span style={{ background: "linear-gradient(120deg, #C4B5FD, #8B5CF6)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              email performance
            </span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {p.overviewCards.map((card, i) => (
              <Hoverable
                key={i}
                style={{
                  background: "#151220",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 16,
                  padding: 22,
                  boxShadow: "0 14px 36px rgba(0,0,0,0.3)",
                }}
                hoverStyle={{ transform: "translateY(-4px)", border: "1px solid rgba(139,92,246,0.3)", boxShadow: "0 22px 50px rgba(0,0,0,0.45)" }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 13,
                    background: "linear-gradient(150deg, rgba(139,92,246,0.18), rgba(108,43,223,0.08))",
                    border: "1px solid rgba(139,92,246,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                    color: "#A78BFA",
                  }}
                >
                  {card.icon}
                </div>
                <h3 style={{ fontSize: 16.5, fontWeight: 700, letterSpacing: "-0.01em", margin: "0 0 8px" }}>{card.title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.5, color: "rgba(255,255,255,0.55)", margin: "0 0 16px", textWrap: "pretty" }}>{card.body}</p>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13.5, fontWeight: 700, color: "#A78BFA" }}>
                  Learn more{" "}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </Hoverable>
            ))}
          </div>
        </div>

        {/* RIGHT: verification overview dashboard */}
        <div
          ref={p.ovRef}
          style={{
            background: "#0F0D16",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 22,
            padding: 26,
            boxShadow: "0 30px 70px rgba(0,0,0,0.5)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
            <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em" }}>Verification Overview</span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                fontWeight: 600,
                color: "rgba(255,255,255,0.6)",
                padding: "8px 13px",
                borderRadius: 10,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              Last 7 days{" "}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </div>

          {/* top row: total + gauge */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
            <div style={{ background: "#151220", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 22 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>Total Verified</div>
              <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{p.ovTotal}</div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 5, marginTop: 12, fontSize: 13.5, fontWeight: 700, color: "#34D399" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
                23.5%
              </div>
            </div>
            <div
              style={{
                background: "#151220",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: "18px 22px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ position: "relative", width: 150, height: 84 }}>
                <svg viewBox="0 0 220 120" style={{ width: "100%", height: "100%", overflow: "visible" }}>
                  <defs>
                    <linearGradient id="vrGaugeGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#34D399" />
                    </linearGradient>
                  </defs>
                  <path d="M20 110 A90 90 0 0 1 200 110" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="14" strokeLinecap="round" />
                  <path
                    d="M20 110 A90 90 0 0 1 200 110"
                    fill="none"
                    stroke="url(#vrGaugeGrad)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    pathLength={100}
                    strokeDasharray="100"
                    strokeDashoffset={p.gaugeOffset}
                    style={{ filter: "drop-shadow(0 0 8px rgba(52,211,153,0.5))" }}
                  />
                </svg>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, textAlign: "center" }}>
                  <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1 }}>99.9%</div>
                </div>
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginTop: 6 }}>Accuracy Rate</div>
            </div>
          </div>

          {/* result chips */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 18 }}>
            <div style={{ background: "#151220", border: "1px solid rgba(52,211,153,0.2)", borderRadius: 14, padding: 15 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.55)" }}>Valid</span>
              </div>
              <div style={{ fontSize: 19, fontWeight: 800, color: "#34D399", fontVariantNumeric: "tabular-nums" }}>97.45%</div>
            </div>
            <div style={{ background: "#151220", border: "1px solid rgba(242,167,62,0.2)", borderRadius: 14, padding: 15 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F2A73E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
                <span style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.55)" }}>Risky</span>
              </div>
              <div style={{ fontSize: 19, fontWeight: 800, color: "#F2A73E", fontVariantNumeric: "tabular-nums" }}>1.73%</div>
            </div>
            <div style={{ background: "#151220", border: "1px solid rgba(242,99,99,0.2)", borderRadius: 14, padding: 15 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F26363" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
                <span style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.55)" }}>Invalid</span>
              </div>
              <div style={{ fontSize: 19, fontWeight: 800, color: "#F26363", fontVariantNumeric: "tabular-nums" }}>0.82%</div>
            </div>
          </div>

          {/* trend chart */}
          <div style={{ display: "flex", gap: 12 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                fontSize: 11,
                fontWeight: 500,
                color: "rgba(255,255,255,0.35)",
                padding: "2px 0 22px",
              }}
            >
              <span>20K</span>
              <span>10K</span>
              <span>0K</span>
            </div>
            <div style={{ flex: 1, position: "relative" }}>
              <svg viewBox="0 0 540 150" style={{ width: "100%", height: 132, display: "block" }}>
                <defs>
                  <linearGradient id="vrLineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#C4B5FD" />
                  </linearGradient>
                  <linearGradient id="vrAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(139,92,246,0.35)" />
                    <stop offset="100%" stopColor="rgba(139,92,246,0)" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="25" x2="540" y2="25" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="0" y1="87" x2="540" y2="87" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <path
                  d="M15 81 L100 92 L185 73 L270 84 L355 25 L440 61 L525 48 L525 150 L15 150 Z"
                  fill="url(#vrAreaGrad)"
                  opacity={p.areaOpacity}
                />
                <path
                  d="M15 81 L100 92 L185 73 L270 84 L355 25 L440 61 L525 48"
                  fill="none"
                  stroke="url(#vrLineGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={1}
                  strokeDasharray="1"
                  strokeDashoffset={p.chartDraw}
                />
                <circle cx="185" cy="73" r="4" fill="#0F0D16" stroke="#8B5CF6" strokeWidth="2.5" />
                <circle cx="440" cy="61" r="4" fill="#0F0D16" stroke="#8B5CF6" strokeWidth="2.5" />
                <circle cx="355" cy="25" r="5" fill="#8B5CF6" style={{ filter: "drop-shadow(0 0 6px rgba(139,92,246,0.8))" }} />
              </svg>
              <div
                style={{
                  position: "absolute",
                  left: "65.7%",
                  top: 2,
                  transform: "translateX(-50%)",
                  background: "#1A1330",
                  border: "1px solid rgba(139,92,246,0.4)",
                  borderRadius: 8,
                  padding: "4px 10px",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#F5F3FA",
                  whiteSpace: "nowrap",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.5)",
                }}
              >
                18,456
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.4)", marginTop: 6 }}>
                <span>May 12</span>
                <span>May 13</span>
                <span>May 14</span>
                <span>May 15</span>
                <span>May 16</span>
                <span>May 17</span>
                <span>May 18</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
