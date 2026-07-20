"use client";

export type Step = {
  n: string;
  title: string;
  body: string;
  active: boolean;
  onClick: () => void;
  border: string;
  bg: string;
  numColor: string;
  numBg: string;
  titleColor: string;
};

export type HowItWorksProps = {
  steps: Step[];
  isStep0: boolean;
  isStep1: boolean;
  isStep2: boolean;
};

export default function HowItWorks({ steps, isStep0, isStep1, isStep2 }: HowItWorksProps) {
  return (
    <section id="how" className="vr-row" style={{ padding: "70px var(--vr-gutter, 32px)", maxWidth: 1120, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A78BFA", margin: "0 0 14px" }}>Process</p>
        <h2 style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-0.03em", margin: 0 }}>Three steps to a cleaner list.</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 48, alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {steps.map((step, i) => (
            <div
              key={i}
              onClick={step.onClick}
              style={{
                cursor: "pointer",
                borderRadius: 16,
                padding: "22px 24px",
                border: `1px solid ${step.border}`,
                background: step.bg,
                transition: "background .3s, border-color .3s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
                <span
                  style={{
                    flexShrink: 0,
                    width: 38,
                    height: 38,
                    borderRadius: 11,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 15,
                    fontWeight: 800,
                    color: step.numColor,
                    background: step.numBg,
                    transition: "all .3s",
                  }}
                >
                  {step.n}
                </span>
                <h3 style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-0.01em", margin: 0, color: step.titleColor }}>{step.title}</h3>
              </div>
              {step.active && (
                <p style={{ fontSize: 15.5, lineHeight: 1.55, color: "rgba(255,255,255,0.6)", margin: "14px 0 0", paddingLeft: 53, textWrap: "pretty" }}>
                  {step.body}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* synced visual */}
        <div
          style={{
            background: "#151220",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20,
            padding: 30,
            boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
            minHeight: 340,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isStep0 && (
            <div style={{ width: "100%", maxWidth: 320, animation: "vr-fadeup .4s cubic-bezier(0.16,1,0.3,1) both" }}>
              <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 20 }}>Create your account</div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 7 }}>Work email</div>
              <div style={{ background: "#0F0D16", border: "1px solid rgba(139,92,246,0.35)", borderRadius: 11, padding: "13px 15px", fontSize: 15, color: "#F5F3FA", marginBottom: 16 }}>
                you@company.com
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 7 }}>Password</div>
              <div
                style={{
                  background: "#0F0D16",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 11,
                  padding: "13px 15px",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 20,
                  letterSpacing: 3,
                }}
              >
                ••••••••••
              </div>
              <div
                style={{
                  background: "linear-gradient(150deg, #8B5CF6, #6C2BDF)",
                  borderRadius: 11,
                  padding: 13,
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#fff",
                  boxShadow: "0 8px 22px rgba(108,43,223,0.4)",
                }}
              >
                Start validating free
              </div>
            </div>
          )}
          {isStep1 && (
            <div style={{ width: "100%", maxWidth: 340, animation: "vr-fadeup .4s cubic-bezier(0.16,1,0.3,1) both" }}>
              <div
                style={{
                  border: "1.5px dashed rgba(139,92,246,0.4)",
                  borderRadius: 16,
                  padding: "34px 20px",
                  textAlign: "center",
                  background: "rgba(139,92,246,0.05)",
                }}
              >
                <div style={{ width: 52, height: 52, borderRadius: 15, background: "rgba(139,92,246,0.14)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 13v8" />
                    <path d="m8 17 4-4 4 4" />
                    <path d="M20 16.7A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
                  </svg>
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>Drop your list to import</div>
                <div style={{ fontSize: 13.5, color: "rgba(255,255,255,0.45)" }}>CSV, API, or a direct integration</div>
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 16, justifyContent: "center" }}>
                {["CSV upload", "REST API", "Integrations"].map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 12.5,
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.55)",
                      padding: "7px 13px",
                      borderRadius: 100,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
          {isStep2 && (
            <div style={{ width: "100%", maxWidth: 360, animation: "vr-fadeup .4s cubic-bezier(0.16,1,0.3,1) both" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 18 }}>
                {[
                  { email: "sarah@techcorp.com", label: "Valid", color: "#34D399", bg: "rgba(52,211,153,0.12)" },
                  { email: "info@tempmail.com", label: "Risky", color: "#F2A73E", bg: "rgba(242,167,62,0.12)" },
                  { email: "no-reply@fake..io", label: "Invalid", color: "#F26363", bg: "rgba(242,99,99,0.12)" },
                ].map((row) => (
                  <div
                    key={row.email}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "#0F0D16",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 11,
                      padding: "12px 15px",
                    }}
                  >
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>{row.email}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: row.color, background: row.bg, padding: "4px 10px", borderRadius: 100 }}>{row.label}</span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 9,
                  background: "linear-gradient(150deg, #8B5CF6, #6C2BDF)",
                  borderRadius: 11,
                  padding: 13,
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#fff",
                  boxShadow: "0 8px 22px rgba(108,43,223,0.4)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="M7 10l5 5 5-5" />
                  <path d="M12 15V3" />
                </svg>
                Download verified list
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
