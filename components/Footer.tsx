"use client";

import Link from "next/link";

const linkStyle: React.CSSProperties = { fontSize: 14.5, color: "rgba(255,255,255,0.6)" };
const headingStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.4)",
  marginBottom: 16,
};

export default function Footer({ variant = "home" }: { variant?: "home" | "pricing" }) {
  return (
    <footer className="vr-footer-gutter" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 56, paddingBottom: 40 }}>
      <div
        className="vr-row"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr",
          gap: 40,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ fontWeight: 800, fontSize: 18 }}>VerifyRit</span>
          </div>
          <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,0.5)", margin: 0, maxWidth: 280 }}>
            The most accurate email validation service for businesses worldwide.
          </p>
        </div>
        <div>
          <div style={headingStyle}>Product</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {variant === "pricing" ? (
              <>
                <Link href="/#features" style={linkStyle}>Features</Link>
                <Link href="/pricing" style={linkStyle}>Pricing</Link>
              </>
            ) : (
              <>
                <a href="#" style={linkStyle}>Features</a>
                <a href="#" style={linkStyle}>Pricing</a>
              </>
            )}
            <a href="#" style={linkStyle}>API Documentation</a>
            <a href="#" style={linkStyle}>Integrations</a>
          </div>
        </div>
        <div>
          <div style={headingStyle}>Company</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            <a href="#" style={linkStyle}>About Us</a>
            <a href="#" style={linkStyle}>Careers</a>
            <a href="#" style={linkStyle}>Contact</a>
          </div>
        </div>
        <div>
          <div style={headingStyle}>Resources</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            <a href="#" style={linkStyle}>Help Center</a>
            <a href="#faq" style={linkStyle}>FAQs</a>
            <a href="#" style={linkStyle}>Status</a>
          </div>
        </div>
        <div>
          <div style={headingStyle}>Legal</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            <a href="#" style={linkStyle}>Privacy Policy</a>
            <a href="#" style={linkStyle}>Terms of Service</a>
            <a href="#" style={linkStyle}>GDPR</a>
            <a href="#" style={linkStyle}>Cookie Policy</a>
          </div>
        </div>
      </div>
      <div
        className="vr-row"
        style={{
          maxWidth: 1200,
          margin: "40px auto 0",
          paddingTop: 26,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.4)" }}>© 2026 VerifyRit. All rights reserved.</span>
        <span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.4)" }}>
          Questions? <a href="#" style={{ color: "#A78BFA" }}>support@verifyrit.com</a>
        </span>
      </div>
    </footer>
  );
}
