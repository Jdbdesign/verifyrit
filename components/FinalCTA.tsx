"use client";

import Hoverable from "./Hoverable";

export type FinalCTAProps = {
  ctaValue: string;
  onCtaInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCtaKey: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onCtaValidate: () => void;
  ctaBorder: string;
  ctaShowVerdict: boolean;
  ctaVerdictText: string;
  ctaVerdictColor: string;
  ctaVerdictBg: string;
};

export default function FinalCTA(p: FinalCTAProps) {
  return (
    <section style={{ padding: "30px var(--vr-gutter, 32px) 90px" }}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          maxWidth: 900,
          margin: "0 auto",
          background: "linear-gradient(150deg, #1A1330, #0F0D16)",
          border: "1px solid rgba(139,92,246,0.22)",
          borderRadius: 26,
          padding: "60px 48px",
          textAlign: "center",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 340,
            background: "radial-gradient(circle, rgba(139,92,246,0.3), transparent 70%)",
            filter: "blur(30px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 14px" }}>Stop guessing. Start verifying.</h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", margin: "0 0 32px" }}>
            Validate your first 100 emails free — no credit card required.
          </p>
          <div style={{ display: "flex", gap: 10, maxWidth: 520, margin: "0 auto" }}>
            <div
              style={{
                flex: 1,
                borderRadius: 15,
                border: `2px solid ${p.ctaBorder}`,
                background: "#0F0D16",
                transition: "border-color .4s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <input
                value={p.ctaValue}
                onChange={p.onCtaInput}
                onKeyDown={p.onCtaKey}
                placeholder="Enter your email"
                style={{ width: "100%", border: "none", outline: "none", background: "transparent", color: "#F5F3FA", fontSize: 16, fontWeight: 500, padding: "16px 18px" }}
              />
            </div>
            <Hoverable
              as="button"
              onClick={p.onCtaValidate}
              style={{
                flexShrink: 0,
                cursor: "pointer",
                border: "none",
                fontFamily: "inherit",
                padding: "0 26px",
                borderRadius: 15,
                fontSize: 16,
                fontWeight: 700,
                color: "#fff",
                background: "linear-gradient(150deg, #8B5CF6, #6C2BDF)",
                boxShadow: "0 6px 22px rgba(108,43,223,0.42)",
              }}
              hoverStyle={{ transform: "translateY(-1px)" }}
            >
              Validate
            </Hoverable>
          </div>
          {p.ctaShowVerdict && (
            <div style={{ marginTop: 18, animation: "vr-badge-in .35s cubic-bezier(0.16,1,0.3,1) both" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  padding: "8px 16px",
                  borderRadius: 100,
                  fontSize: 14.5,
                  fontWeight: 700,
                  color: p.ctaVerdictColor,
                  background: p.ctaVerdictBg,
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: p.ctaVerdictColor, boxShadow: `0 0 10px ${p.ctaVerdictColor}` }} />
                {p.ctaVerdictText}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
