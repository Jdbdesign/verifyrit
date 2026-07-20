"use client";

import { ReactNode } from "react";
import Hoverable from "./Hoverable";

export type UseCase = { title: string; body: string; icon: ReactNode };

export default function UseCases({ useCases }: { useCases: UseCase[] }) {
  return (
    <section className="vr-row" style={{ padding: "70px var(--vr-gutter, 32px)", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <h2 style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 14px" }}>Perfect for every business model.</h2>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", margin: "0 auto", maxWidth: 560, textWrap: "pretty" }}>
          No matter your industry, VerifyRit helps you achieve better email marketing results.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {useCases.map((uc, i) => (
          <Hoverable
            key={i}
            style={{
              background: "#151220",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 18,
              padding: 28,
              boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
            }}
            hoverStyle={{ transform: "translateY(-4px)", border: "1px solid rgba(139,92,246,0.3)", boxShadow: "0 24px 54px rgba(0,0,0,0.45)" }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 14,
                background: "linear-gradient(150deg, rgba(139,92,246,0.18), rgba(108,43,223,0.08))",
                border: "1px solid rgba(139,92,246,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
                color: "#A78BFA",
              }}
            >
              {uc.icon}
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em", margin: "0 0 10px" }}>{uc.title}</h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(255,255,255,0.55)", margin: 0, textWrap: "pretty" }}>{uc.body}</p>
          </Hoverable>
        ))}
      </div>
    </section>
  );
}
