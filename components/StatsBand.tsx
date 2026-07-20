"use client";

import { RefObject } from "react";

export type StatsBandProps = {
  statsRef: RefObject<HTMLDivElement | null>;
  statEmails: string;
  statAccuracy: string;
  statCustomers: string;
};

export default function StatsBand({ statsRef, statEmails, statAccuracy, statCustomers }: StatsBandProps) {
  return (
    <section className="vr-row" style={{ padding: "30px var(--vr-gutter, 32px) 70px", maxWidth: 1200, margin: "0 auto" }}>
      <div
        ref={statsRef}
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(150deg, #150F26, #0F0D16)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 26,
          padding: "56px 40px",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -60,
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 300,
            background: "radial-gradient(circle, rgba(139,92,246,0.28), transparent 70%)",
            filter: "blur(30px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", marginBottom: 44 }}>
          <h2 style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 12px" }}>Real results for ambitious teams.</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.55)", margin: 0 }}>
            Join thousands of businesses who trust VerifyRit to power their sending.
          </p>
        </div>
        <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 30 }}>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 52,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                background: "linear-gradient(120deg, #fff, #C4B5FD)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {statEmails}
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginTop: 10 }}>Emails Validated</div>
          </div>
          <div style={{ textAlign: "center", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "-20px -10px",
                background: "radial-gradient(circle, rgba(52,211,153,0.2), transparent 70%)",
                filter: "blur(16px)",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                fontSize: 62,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: "#34D399",
                fontVariantNumeric: "tabular-nums",
                textShadow: "0 0 30px rgba(52,211,153,0.4)",
              }}
            >
              {statAccuracy}
            </div>
            <div style={{ position: "relative", zIndex: 1, fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.7)", marginTop: 10 }}>Accuracy Rate</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 52,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                background: "linear-gradient(120deg, #fff, #C4B5FD)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {statCustomers}
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginTop: 10 }}>Happy Customers</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 52,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                background: "linear-gradient(120deg, #fff, #C4B5FD)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              24/7
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginTop: 10 }}>Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
