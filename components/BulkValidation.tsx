"use client";

import { RefObject } from "react";

export type BulkValidationProps = {
  bulkRef: RefObject<HTMLDivElement | null>;
  bulkProcessed: string;
  bulkPct: string;
  bulkWidth: string;
  bulkValid: string;
  bulkRisky: string;
  bulkInvalid: string;
};

export default function BulkValidation(p: BulkValidationProps) {
  return (
    <section className="vr-row" style={{ padding: "60px var(--vr-gutter, 32px)", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 56, alignItems: "center" }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A78BFA", margin: "0 0 16px" }}>
            Bulk validation
          </p>
          <h2 style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 18px", lineHeight: 1.1 }}>
            Validate at scale without losing precision.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.6)", margin: 0, maxWidth: 460, textWrap: "pretty" }}>
            Upload and validate millions of addresses at once with high-speed batch processing — every address still gets the same full check as a single
            lookup, just run at volume.
          </p>
        </div>
        <div
          ref={p.bulkRef}
          style={{ background: "#151220", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, padding: 26, boxShadow: "0 24px 60px rgba(0,0,0,0.45)" }}
        >
          {/* drop zone */}
          <div
            style={{
              border: "1.5px dashed rgba(139,92,246,0.35)",
              borderRadius: 14,
              padding: 22,
              display: "flex",
              alignItems: "center",
              gap: 15,
              background: "rgba(139,92,246,0.05)",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "rgba(139,92,246,0.14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 13v8" />
                <path d="m8 17 4-4 4 4" />
                <path d="M20 16.7A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#F5F3FA" }}>contacts_q3.csv</div>
              <div style={{ fontSize: 13.5, color: "rgba(255,255,255,0.45)" }}>Drag and drop your list, or browse to upload</div>
            </div>
          </div>
          {/* progress */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 9 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>
              Processed: <span style={{ color: "#F5F3FA", fontVariantNumeric: "tabular-nums" }}>{p.bulkProcessed}</span>{" "}
              <span style={{ color: "rgba(255,255,255,0.4)" }}>/ 120,000</span>
            </span>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#A78BFA", fontVariantNumeric: "tabular-nums" }}>{p.bulkPct}</span>
          </div>
          <div style={{ height: 9, borderRadius: 100, background: "rgba(255,255,255,0.06)", overflow: "hidden", marginBottom: 22 }}>
            <div
              style={{
                height: "100%",
                borderRadius: 100,
                background: "linear-gradient(90deg, #6C2BDF, #8B5CF6)",
                boxShadow: "0 0 14px rgba(139,92,246,0.6)",
                width: p.bulkWidth,
                transition: "width .12s linear",
              }}
            />
          </div>
          {/* result mini-counters */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            <div style={{ background: "rgba(52,211,153,0.07)", border: "1px solid rgba(52,211,153,0.2)", borderRadius: 12, padding: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#34D399", marginBottom: 6 }}>Valid</div>
              <div style={{ fontSize: 21, fontWeight: 800, color: "#F5F3FA", fontVariantNumeric: "tabular-nums" }}>{p.bulkValid}</div>
            </div>
            <div style={{ background: "rgba(242,167,62,0.07)", border: "1px solid rgba(242,167,62,0.2)", borderRadius: 12, padding: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#F2A73E", marginBottom: 6 }}>Risky</div>
              <div style={{ fontSize: 21, fontWeight: 800, color: "#F5F3FA", fontVariantNumeric: "tabular-nums" }}>{p.bulkRisky}</div>
            </div>
            <div style={{ background: "rgba(242,99,99,0.07)", border: "1px solid rgba(242,99,99,0.2)", borderRadius: 12, padding: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#F26363", marginBottom: 6 }}>Invalid</div>
              <div style={{ fontSize: 21, fontWeight: 800, color: "#F5F3FA", fontVariantNumeric: "tabular-nums" }}>{p.bulkInvalid}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
