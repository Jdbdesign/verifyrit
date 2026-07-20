"use client";

import { RefObject } from "react";
import Hoverable from "./Hoverable";

export type Testimonial = { quote: string; name: string; role: string; initials: string; avatarBg: string; stars: number[] };

export type TestimonialsProps = {
  testiRef: RefObject<HTMLDivElement | null>;
  testimonials: Testimonial[];
  onTestiPrev: () => void;
  onTestiNext: () => void;
};

export default function Testimonials({ testiRef, testimonials, onTestiPrev, onTestiNext }: TestimonialsProps) {
  return (
    <section style={{ padding: "50px 0 70px" }}>
      <div
        className="vr-row"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 var(--vr-gutter, 32px)",
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
          marginBottom: 36,
        }}
      >
        <h2 style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-0.03em", margin: 0, maxWidth: 560, lineHeight: 1.1 }}>Teams that stopped guessing.</h2>
        <div style={{ display: "flex", gap: 10 }}>
          <Hoverable
            as="button"
            onClick={onTestiPrev}
            style={{
              cursor: "pointer",
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#F5F3FA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            hoverStyle={{ background: "rgba(255,255,255,0.08)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Hoverable>
          <Hoverable
            as="button"
            onClick={onTestiNext}
            style={{
              cursor: "pointer",
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#F5F3FA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            hoverStyle={{ background: "rgba(255,255,255,0.08)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Hoverable>
        </div>
      </div>
      <div ref={testiRef} style={{ display: "flex", gap: 20, overflowX: "auto", scrollSnapType: "x mandatory", padding: "6px var(--vr-gutter, 32px) 20px", scrollbarWidth: "none" }}>
        {/* featured press quote */}
        <div
          style={{
            scrollSnapAlign: "start",
            flex: "0 0 460px",
            background: "linear-gradient(150deg, #1A1330, #150F26)",
            border: "1px solid rgba(139,92,246,0.28)",
            borderRadius: 20,
            padding: 32,
            boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 12px",
              borderRadius: 100,
              background: "rgba(139,92,246,0.14)",
              border: "1px solid rgba(139,92,246,0.3)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#C4B5FD",
              marginBottom: 20,
            }}
          >
            Featured · TechCrunch
          </div>
          <p style={{ fontSize: 21, lineHeight: 1.5, fontWeight: 600, color: "#F5F3FA", margin: "0 0 22px", letterSpacing: "-0.01em", textWrap: "pretty" }}>
            &ldquo;VerifyRit has revolutionized how businesses approach email verification, setting a new standard for accuracy and reliability in the industry.&rdquo;
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: "linear-gradient(150deg, #8B5CF6, #6C2BDF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                color: "#fff",
                fontSize: 16,
              }}
            >
              TC
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>TechCrunch</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Editorial coverage</div>
            </div>
          </div>
        </div>
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              scrollSnapAlign: "start",
              flex: "0 0 400px",
              background: "#151220",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 20,
              padding: 32,
              boxShadow: "0 16px 44px rgba(0,0,0,0.35)",
            }}
          >
            <div style={{ display: "flex", gap: 3, marginBottom: 18 }}>
              {t.stars.map((_, si) => (
                <svg key={si} width="17" height="17" viewBox="0 0 24 24" fill="#F2A73E" stroke="none">
                  <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" />
                </svg>
              ))}
            </div>
            <p style={{ fontSize: 16.5, lineHeight: 1.55, color: "rgba(255,255,255,0.82)", margin: "0 0 22px", textWrap: "pretty" }}>{t.quote}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: t.avatarBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  color: "#fff",
                  fontSize: 15,
                }}
              >
                {t.initials}
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{t.name}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
