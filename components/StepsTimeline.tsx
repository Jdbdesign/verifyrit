"use client";

const nodes = [
  {
    color: "#2DD4BF",
    glow: "rgba(45,212,191,0.2)",
    border: "rgba(45,212,191,0.55)",
    ring: "rgba(45,212,191,0.06)",
    halo: "rgba(45,212,191,0.35)",
    n: "1",
    numColor: "#08070C",
    title: "Upload Your List",
    body: "Upload your email list in CSV, TXT, or paste it directly into VerifyRit.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 13v8" />
        <path d="m8 17 4-4 4 4" />
        <path d="M20 16.7A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
      </svg>
    ),
  },
  {
    color: "#3B82F6",
    glow: "rgba(59,130,246,0.2)",
    border: "rgba(59,130,246,0.55)",
    ring: "rgba(59,130,246,0.06)",
    halo: "rgba(59,130,246,0.35)",
    n: "2",
    numColor: "#fff",
    title: "AI Verification",
    body: "Every address runs through 50+ real-time checks and trusted data sources.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
      </svg>
    ),
  },
  {
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.22)",
    border: "rgba(139,92,246,0.55)",
    ring: "rgba(139,92,246,0.07)",
    halo: "rgba(139,92,246,0.4)",
    n: "3",
    numColor: "#fff",
    title: "Get Results",
    body: "Receive detailed results with status, risk scores, and clear recommendations.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
  },
  {
    color: "#38BDF8",
    glow: "rgba(56,189,248,0.2)",
    border: "rgba(56,189,248,0.55)",
    ring: "rgba(56,189,248,0.06)",
    halo: "rgba(56,189,248,0.35)",
    n: "4",
    numColor: "#08070C",
    title: "Take Action",
    body: "Clean your list and send your next campaign with confidence.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2 11 13" />
        <path d="m22 2-7 20-4-9-9-4z" />
      </svg>
    ),
  },
];

export default function StepsTimeline({ stepBullets }: { stepBullets: string[] }) {
  return (
    <section className="vr-row" style={{ padding: "70px var(--vr-gutter, 32px) 30px", maxWidth: 1260, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 48, alignItems: "start" }}>
        {/* left intro */}
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 20 }}>
            <span style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid #2DD4BF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#2DD4BF", boxShadow: "0 0 8px #2DD4BF" }} />
            </span>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
              How it works
            </span>
          </div>
          <h2 style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.12, margin: "0 0 28px", textWrap: "balance" }}>
            Four simple steps to better deliverability
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
            {stepBullets.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 11 }}>
                <span style={{ flexShrink: 0, width: 20, height: 20, borderRadius: "50%", background: "rgba(45,212,191,0.14)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span style={{ fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.75)" }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* right timeline */}
        <div style={{ position: "relative", paddingTop: 8 }}>
          <div style={{ position: "absolute", top: 46, left: "12.5%", width: "75%", borderTop: "1.5px dashed rgba(255,255,255,0.14)", zIndex: 0 }} />
          {[25, 50, 75].map((left) => (
            <div key={left} style={{ position: "absolute", top: 40, left: `${left}%`, transform: "translateX(-50%)", color: "rgba(255,255,255,0.2)", zIndex: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          ))}
          <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {nodes.map((node) => (
              <div key={node.n} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div
                  style={{
                    width: 76,
                    height: 76,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `radial-gradient(circle at 50% 38%, ${node.glow}, #0F0D16 72%)`,
                    border: `1.5px solid ${node.border}`,
                    boxShadow: `0 0 0 6px ${node.ring}, 0 0 34px ${node.halo}`,
                    marginBottom: 22,
                  }}
                >
                  {node.icon}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 10 }}>
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: node.color,
                      color: node.numColor,
                      fontSize: 12,
                      fontWeight: 800,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {node.n}
                  </span>
                  <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em" }}>{node.title}</span>
                </div>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(255,255,255,0.55)", margin: 0, maxWidth: 220, textWrap: "pretty" }}>{node.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
