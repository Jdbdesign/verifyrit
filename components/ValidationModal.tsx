"use client";

export type ModalCheck = { label: string; sub: string; sym: string; symColor: string; symBg: string };
export type MxRecord = { host: string; prio: number };

export type ModalData = {
  email: string;
  domain: string;
  provider: string;
  processed: string;
  timestamp: string;
  statusLabel: string;
  statusColor: string;
  statusBg: string;
  riskLabel: string;
  riskColor: string;
  riskBg: string;
  headline: string;
  headlineColor: string;
  iconColor: string;
  iconBg: string;
  emailColor: string;
  confText: string;
  confColor: string;
  confWidth: string;
  delText: string;
  delColor: string;
  delWidth: string;
  validation: ModalCheck[];
  additional: ModalCheck[];
  hasMx: boolean;
  noMx: boolean;
  mxList: MxRecord[];
};

export type ValidationModalProps = {
  modalOpen: boolean;
  modalLoading: boolean;
  modalResult: boolean;
  modalEmail: string;
  md: Partial<ModalData>;
  closeModal: () => void;
  validateAnother: () => void;
  stopProp: (e: React.MouseEvent) => void;
};

export default function ValidationModal(p: ValidationModalProps) {
  if (!p.modalOpen) return null;
  const md = p.md;
  return (
    <div
      onClick={p.closeModal}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        background: "rgba(4,3,8,0.72)",
        backdropFilter: "blur(6px)",
        animation: "vr-scrim-in .25s ease both",
      }}
    >
      <div
        onClick={p.stopProp}
        className="vr-modal-scroll"
        style={{
          width: "100%",
          maxWidth: 640,
          maxHeight: "90vh",
          overflowY: "auto",
          background: "#0F0D16",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 22,
          boxShadow: "0 40px 100px rgba(0,0,0,0.7)",
          animation: "vr-modal-in .4s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        {p.modalLoading && (
          <div style={{ padding: "64px 40px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ position: "relative", width: 72, height: 72, marginBottom: 26 }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "3px solid rgba(139,92,246,0.15)" }} />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "3px solid transparent",
                  borderTopColor: "#8B5CF6",
                  borderRightColor: "#8B5CF6",
                  animation: "vr-spin .8s linear infinite",
                }}
              />
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>Validating email…</div>
            <div style={{ fontSize: 15, color: "rgba(255,255,255,0.55)" }}>
              Running 50+ real-time checks on <span style={{ color: "#A78BFA", fontWeight: 600 }}>{p.modalEmail}</span>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 24, flexWrap: "wrap", justifyContent: "center" }}>
              {["Syntax", "Domain", "MX records", "SMTP"].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.5)",
                    padding: "6px 12px",
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

        {p.modalResult && (
          <div style={{ padding: "28px 30px" }}>
            {/* header */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 18 }}>
              <h2 style={{ fontSize: 23, fontWeight: 800, letterSpacing: "-0.02em", margin: 0 }}>Email Validation Result</h2>
              <button
                onClick={p.closeModal}
                style={{
                  cursor: "pointer",
                  flexShrink: 0,
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background .2s",
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            {/* email + badges */}
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 10, marginBottom: 22 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 16, fontWeight: 700, color: md.emailColor }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {md.email}
              </span>
              <span style={{ fontSize: 12.5, fontWeight: 700, padding: "5px 12px", borderRadius: 100, color: md.statusColor, background: md.statusBg }}>
                {md.statusLabel}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12.5, fontWeight: 700, padding: "5px 12px", borderRadius: 100, color: md.riskColor, background: md.riskBg }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
                {md.riskLabel}
              </span>
            </div>

            {/* headline */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
              <div style={{ flexShrink: 0, width: 46, height: 46, borderRadius: "50%", background: md.iconBg, display: "flex", alignItems: "center", justifyContent: "center", color: md.iconColor }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", margin: 0, color: md.headlineColor, textWrap: "balance" }}>{md.headline}</h3>
            </div>

            {/* domain + provider */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 16 }}>
              <div style={{ background: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 14, padding: "16px 18px", display: "flex", alignItems: "center", gap: 13 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="7" rx="1.5" />
                  <rect x="3" y="13" width="18" height="7" rx="1.5" />
                  <path d="M7 7.5h.01M7 16.5h.01" />
                </svg>
                <div>
                  <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)" }}>Domain</div>
                  <div style={{ fontSize: 15.5, fontWeight: 700 }}>{md.domain}</div>
                </div>
              </div>
              <div style={{ background: "rgba(139,92,246,0.07)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 14, padding: "16px 18px", display: "flex", alignItems: "center", gap: 13 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
                <div>
                  <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)" }}>Email Provider</div>
                  <div style={{ fontSize: 15.5, fontWeight: 700 }}>{md.provider}</div>
                </div>
              </div>
            </div>

            {/* scores */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 26 }}>
              <div style={{ background: "#151220", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: 18 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontSize: 15, fontWeight: 700 }}>Confidence Score</span>
                  <span style={{ fontSize: 20, fontWeight: 800, color: md.confColor }}>{md.confText}</span>
                </div>
                <div style={{ height: 8, borderRadius: 100, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                  <div style={{ height: "100%", borderRadius: 100, background: md.confColor, width: md.confWidth }} />
                </div>
              </div>
              <div style={{ background: "#151220", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: 18 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontSize: 15, fontWeight: 700 }}>Deliverability Score</span>
                  <span style={{ fontSize: 20, fontWeight: 800, color: md.delColor }}>{md.delText}</span>
                </div>
                <div style={{ height: 8, borderRadius: 100, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                  <div style={{ height: "100%", borderRadius: 100, background: md.delColor, width: md.delWidth }} />
                </div>
              </div>
            </div>

            {/* validation details */}
            <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.01em", marginBottom: 14 }}>Validation Details</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 26 }}>
              {(md.validation || []).map((v, i) => (
                <div key={i} style={{ background: "#151220", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 13, padding: 15 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span style={{ width: 20, height: 20, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: v.symColor, background: v.symBg }}>
                      {v.sym}
                    </span>
                    <span style={{ fontSize: 14, fontWeight: 700 }}>{v.label}</span>
                  </div>
                  <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)", paddingLeft: 28 }}>{v.sub}</div>
                </div>
              ))}
            </div>

            {/* additional checks */}
            <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.01em", marginBottom: 14 }}>Additional Checks</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 26 }}>
              {(md.additional || []).map((a, i) => (
                <div key={i} style={{ background: "#151220", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 13, padding: 15 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span style={{ width: 20, height: 20, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: a.symColor, background: a.symBg }}>
                      {a.sym}
                    </span>
                    <span style={{ fontSize: 14, fontWeight: 700 }}>{a.label}</span>
                  </div>
                  <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)", paddingLeft: 28 }}>{a.sub}</div>
                </div>
              ))}
            </div>

            {/* mx records */}
            <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.01em", marginBottom: 14 }}>MX Records</div>
            {md.hasMx && (
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                {(md.mxList || []).map((mx, i) => (
                  <div key={i} style={{ background: "#151220", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 13, padding: "15px 18px", display: "flex", alignItems: "center", gap: 13 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <div>
                      <div style={{ fontSize: 14.5, fontWeight: 700 }}>{mx.host}</div>
                      <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)" }}>Priority: {mx.prio}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {md.noMx && (
              <div style={{ background: "rgba(242,99,99,0.06)", border: "1px solid rgba(242,99,99,0.2)", borderRadius: 13, padding: "15px 18px", display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F26363" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
                <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>No MX records found for this domain.</span>
              </div>
            )}

            {/* footer */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  {md.processed}
                </span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{md.timestamp}</span>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button
                  onClick={p.closeModal}
                  style={{
                    cursor: "pointer",
                    fontFamily: "inherit",
                    padding: "11px 20px",
                    borderRadius: 11,
                    fontSize: 14.5,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.85)",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    transition: "background .2s",
                  }}
                >
                  Close
                </button>
                <button
                  onClick={p.validateAnother}
                  style={{
                    cursor: "pointer",
                    border: "none",
                    fontFamily: "inherit",
                    padding: "11px 20px",
                    borderRadius: 11,
                    fontSize: 14.5,
                    fontWeight: 700,
                    color: "#fff",
                    background: "linear-gradient(150deg, #8B5CF6, #6C2BDF)",
                    boxShadow: "0 6px 20px rgba(108,43,223,0.4)",
                    transition: "transform .2s",
                  }}
                >
                  Validate Another Email
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
