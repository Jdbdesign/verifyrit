"use client";

import Hoverable from "./Hoverable";

export default function TrustStrip({ trustLogos }: { trustLogos: string[] }) {
  return (
    <section style={{ padding: "8px var(--vr-gutter, 32px) 56px" }}>
      <p
        style={{
          textAlign: "center",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.34)",
          margin: "0 0 28px",
        }}
      >
        Trusted by 50,000+ businesses worldwide
      </p>
      <div className="vr-row" style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "44px 60px" }}>
        {trustLogos.map((logo, i) => (
          <Hoverable
            as="span"
            key={i}
            style={{
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "rgba(255,255,255,0.32)",
              cursor: "default",
            }}
            hoverStyle={{ color: "rgba(255,255,255,0.85)", textShadow: "0 0 18px rgba(139,92,246,0.5)" }}
          >
            {logo}
          </Hoverable>
        ))}
      </div>
    </section>
  );
}
