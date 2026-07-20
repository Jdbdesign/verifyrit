"use client";

import Hoverable from "./Hoverable";

export default function FeaturePanels({ timingText }: { timingText: string }) {
  return (
    <section id="features" className="vr-row" style={{ padding: "70px var(--vr-gutter, 32px) 60px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A78BFA", margin: "0 0 14px" }}>
          Built for certainty
        </p>
        <h2 style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-0.03em", margin: 0, lineHeight: 1.08 }}>Powerful features, proven results.</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
        {/* GDPR panel */}
        <Hoverable
          style={{
            position: "relative",
            overflow: "hidden",
            background: "#151220",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20,
            padding: 34,
            boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
          }}
          hoverStyle={{ transform: "translateY(-4px)", border: "1px solid rgba(139,92,246,0.3)", boxShadow: "0 30px 70px rgba(0,0,0,0.5)" }}
        >
          <div style={{ position: "relative", width: 88, height: 88, marginBottom: 26, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "1.5px solid rgba(139,92,246,0.5)",
                animation: "vr-pulse-ring 2.6s cubic-bezier(0.16,1,0.3,1) infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "1.5px solid rgba(139,92,246,0.5)",
                animation: "vr-pulse-ring 2.6s cubic-bezier(0.16,1,0.3,1) 1.3s infinite",
              }}
            />
            <div
              style={{
                position: "relative",
                width: 58,
                height: 58,
                borderRadius: 17,
                background: "linear-gradient(150deg, rgba(139,92,246,0.2), rgba(108,43,223,0.1))",
                border: "1px solid rgba(139,92,246,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
          </div>
          <span style={{ display: "inline-block", fontSize: 12.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A78BFA", marginBottom: 12 }}>
            GDPR Compliant
          </span>
          <h3 style={{ fontSize: 25, fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 12px" }}>Your data, secured — not just promised.</h3>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.6)", margin: 0, textWrap: "pretty" }}>
            Every check runs on enterprise-grade encryption with full GDPR compliance — your lists stay yours, verified without ever being exposed.
          </p>
        </Hoverable>

        {/* Real-time panel */}
        <Hoverable
          style={{
            position: "relative",
            overflow: "hidden",
            background: "#151220",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20,
            padding: 34,
            boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
          }}
          hoverStyle={{ transform: "translateY(-4px)", border: "1px solid rgba(139,92,246,0.3)", boxShadow: "0 30px 70px rgba(0,0,0,0.5)" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 26 }}>
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: 17,
                background: "linear-gradient(150deg, rgba(139,92,246,0.2), rgba(108,43,223,0.1))",
                border: "1px solid rgba(139,92,246,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
            </div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "8px 14px",
                borderRadius: 100,
                background: "rgba(52,211,153,0.1)",
                border: "1px solid rgba(52,211,153,0.25)",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#34D399", boxShadow: "0 0 8px #34D399" }} />
              <span style={{ fontSize: 15, fontWeight: 700, color: "#34D399", fontVariantNumeric: "tabular-nums" }}>{timingText}</span>
            </div>
          </div>
          <span style={{ display: "inline-block", fontSize: 12.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A78BFA", marginBottom: 12 }}>
            Real-time Verification
          </span>
          <h3 style={{ fontSize: 25, fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 12px" }}>Results in milliseconds, not minutes.</h3>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.6)", margin: 0, textWrap: "pretty" }}>
            Validate emails instantly with our lightning-fast API — built for the moment you need an answer, not a batch job you check back on later.
          </p>
        </Hoverable>
      </div>
    </section>
  );
}
