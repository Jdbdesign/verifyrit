"use client";

import Hoverable from "./Hoverable";

export default function PressLogos({ pressLogos }: { pressLogos: string[] }) {
  return (
    <section style={{ padding: "20px var(--vr-gutter, 32px) 60px" }}>
      <p style={{ textAlign: "center", fontSize: 13, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.34)", margin: "0 0 26px" }}>
        As Featured On
      </p>
      <div className="vr-row" style={{ maxWidth: 940, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "36px 52px" }}>
        {pressLogos.map((p, i) => (
          <Hoverable
            as="span"
            key={i}
            style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-0.01em", color: "rgba(255,255,255,0.3)" }}
            hoverStyle={{ color: "rgba(255,255,255,0.7)" }}
          >
            {p}
          </Hoverable>
        ))}
      </div>
    </section>
  );
}
