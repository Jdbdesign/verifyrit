"use client";

import { ReactNode } from "react";
import Hoverable from "./Hoverable";

export type MiniDot = { bg: string; onClick: () => void };
export type Benefit = { label: string; iconBg: string; iconBorder: string; iconColor: string; icon: ReactNode };

export type ConversionBandProps = {
  miniQuote: string;
  miniName: string;
  miniRole: string;
  miniInitials: string;
  miniAvatarBg: string;
  miniDots: MiniDot[];
  onMiniPrev: () => void;
  onMiniNext: () => void;
  benefits: Benefit[];
};

const stars5 = Array.from({ length: 5 });

export default function ConversionBand(p: ConversionBandProps) {
  return (
    <section className="vr-row" style={{ padding: "40px var(--vr-gutter, 32px) 30px", maxWidth: 1260, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.18fr", gap: 20, alignItems: "stretch" }}>
        {/* LEFT: testimonial */}
        <div
          style={{
            background: "#151220",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20,
            padding: 30,
            boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", gap: 3, marginBottom: 18 }}>
            {stars5.map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#F2A73E" stroke="none">
                <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" />
              </svg>
            ))}
          </div>
          <p style={{ fontSize: 16.5, lineHeight: 1.55, color: "rgba(255,255,255,0.82)", margin: "0 0 26px", flex: 1, textWrap: "pretty" }}>{p.miniQuote}</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: p.miniAvatarBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                {p.miniInitials}
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{p.miniName}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{p.miniRole}</div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 22 }}>
            <div style={{ display: "flex", gap: 7 }}>
              {p.miniDots.map((dot, i) => (
                <button
                  key={i}
                  onClick={dot.onClick}
                  style={{ cursor: "pointer", border: "none", padding: 0, width: 8, height: 8, borderRadius: "50%", background: dot.bg, transition: "background .25s" }}
                />
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Hoverable
                as="button"
                onClick={p.onMiniPrev}
                style={{
                  cursor: "pointer",
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#F5F3FA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                hoverStyle={{ background: "rgba(255,255,255,0.08)" }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Hoverable>
              <Hoverable
                as="button"
                onClick={p.onMiniNext}
                style={{
                  cursor: "pointer",
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#F5F3FA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                hoverStyle={{ background: "rgba(255,255,255,0.08)" }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Hoverable>
            </div>
          </div>
        </div>

        {/* MIDDLE: cta */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(160deg, #171128, #0F0D16)",
            border: "1px solid rgba(139,92,246,0.2)",
            borderRadius: 20,
            padding: 34,
            boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -40,
              width: 260,
              height: 220,
              background: "radial-gradient(circle, rgba(139,92,246,0.28), transparent 70%)",
              filter: "blur(24px)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 14px", textWrap: "balance" }}>
              Ready to improve your{" "}
              <span style={{ background: "linear-gradient(120deg, #C4B5FD, #8B5CF6)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                email deliverability?
              </span>
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.55, color: "rgba(255,255,255,0.6)", margin: "0 0 26px", textWrap: "pretty" }}>
              Join thousands of businesses that trust VerifyRit for their email verification needs.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Hoverable
                as="button"
                style={{
                  cursor: "pointer",
                  border: "none",
                  fontFamily: "inherit",
                  padding: "13px 22px",
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#fff",
                  background: "linear-gradient(150deg, #8B5CF6, #6C2BDF)",
                  boxShadow: "0 8px 24px rgba(108,43,223,0.42)",
                }}
                hoverStyle={{ transform: "translateY(-2px)", boxShadow: "0 12px 32px rgba(108,43,223,0.6)" }}
              >
                Start Verifying Free
              </Hoverable>
              <Hoverable
                as="button"
                style={{
                  cursor: "pointer",
                  fontFamily: "inherit",
                  padding: "13px 22px",
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.85)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
                hoverStyle={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                Schedule a Demo
              </Hoverable>
            </div>
          </div>
        </div>

        {/* RIGHT: benefits + email graphic */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(160deg, #12111C, #0F0D16)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20,
            padding: 34,
            boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 20 }}>
            {p.benefits.map((bf, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: bf.iconBg,
                    border: `1px solid ${bf.iconBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: bf.iconColor,
                  }}
                >
                  {bf.icon}
                </div>
                <span style={{ fontSize: 15.5, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>{bf.label}</span>
              </div>
            ))}
          </div>
          <div style={{ position: "relative", flexShrink: 0, width: 140, alignSelf: "stretch", minHeight: 240 }}>
            <div
              style={{
                position: "absolute",
                inset: -10,
                background: "radial-gradient(circle at 60% 45%, rgba(59,130,246,0.3), transparent 68%)",
                filter: "blur(22px)",
              }}
            />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/email-graphic.webp" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
