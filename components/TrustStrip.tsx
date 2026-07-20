"use client";

import Hoverable from "./Hoverable";

export type TrustLogo = { name: string; src: string; width?: number };

export default function TrustStrip({ trustLogos }: { trustLogos: TrustLogo[] }) {
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
      <div className="vr-row" style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "36px 56px" }}>
        {trustLogos.map((logo, i) => (
          <Hoverable
            as="span"
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              cursor: "default",
              filter: "grayscale(1) brightness(0) invert(1) opacity(0.38)",
              transition: "filter 0.25s ease",
            }}
            hoverStyle={{
              filter: "grayscale(0) brightness(1) invert(0) opacity(1) drop-shadow(0 0 12px rgba(139,92,246,0.45))",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.name}
              height={24}
              width={logo.width ?? 100}
              style={{ height: 24, width: "auto", display: "block" }}
            />
          </Hoverable>
        ))}
      </div>
    </section>
  );
}
