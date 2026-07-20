"use client";

export type FaqItem = { q: string; a: string; open: boolean; onClick: () => void; border: string; iconRotate: string };

export default function FAQ({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section id="faq" className="vr-row vr-faq-section" style={{ padding: "60px var(--vr-gutter, 32px) 80px", maxWidth: 980, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 44 }}>
        <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A78BFA", margin: "0 0 14px" }}>Questions</p>
        <h2 style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-0.03em", margin: 0 }}>Everything you need to know.</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
        {faqs.map((faq, i) => (
          <div
            key={i}
            onClick={faq.onClick}
            style={{
              cursor: "pointer",
              alignSelf: "start",
              background: "#151220",
              border: `1px solid ${faq.border}`,
              borderRadius: 16,
              padding: "22px 24px",
              transition: "border-color .3s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
              <h3 style={{ fontSize: 16.5, fontWeight: 700, letterSpacing: "-0.01em", margin: 0, color: "#F5F3FA" }}>{faq.q}</h3>
              <span style={{ flexShrink: 0, color: "#A78BFA", transition: "transform .3s", transform: faq.iconRotate }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </div>
            {faq.open && (
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.6)", margin: "14px 0 0", textWrap: "pretty" }}>{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
