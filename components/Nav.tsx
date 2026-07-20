"use client";

import Link from "next/link";
import Hoverable from "./Hoverable";

export default function Nav({ variant = "home" }: { variant?: "home" | "pricing" }) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(14px)",
        background: "rgba(8,7,12,0.72)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="vr-nav-row"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {variant === "pricing" ? (
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, color: "#F5F3FA" }}>
            <span style={{ fontWeight: 800, fontSize: 19, letterSpacing: "-0.02em" }}>VerifyRit</span>
          </Link>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontWeight: 800, fontSize: 19, letterSpacing: "-0.02em" }}>VerifyRit</span>
          </div>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: 34 }}>
          {variant === "pricing" ? (
            <>
              <Link href="/" style={{ color: "rgba(255,255,255,0.66)", fontSize: 15, fontWeight: 500 }}>Home</Link>
              <Link href="/pricing" style={{ color: "#F5F3FA", fontSize: 15, fontWeight: 700 }}>Pricing</Link>
              <Link href="/#faq" style={{ color: "rgba(255,255,255,0.66)", fontSize: 15, fontWeight: 500 }}>FAQ</Link>
            </>
          ) : (
            <>
              <a href="#features" style={{ color: "rgba(255,255,255,0.66)", fontSize: 15, fontWeight: 500 }}>Product</a>
              <Link href="/pricing" style={{ color: "rgba(255,255,255,0.66)", fontSize: 15, fontWeight: 500 }}>Pricing</Link>
              <a href="#faq" style={{ color: "rgba(255,255,255,0.66)", fontSize: 15, fontWeight: 500 }}>FAQ</a>
            </>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <a href="#" style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, fontWeight: 600, padding: "9px 8px" }}>Sign In</a>
          <Hoverable
            as="a"
            href="#"
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#fff",
              padding: "10px 20px",
              borderRadius: 11,
              background: "linear-gradient(150deg, #8B5CF6, #6C2BDF)",
              boxShadow: "0 6px 20px rgba(108,43,223,0.4)",
            }}
            hoverStyle={{ boxShadow: "0 8px 28px rgba(108,43,223,0.6)", transform: "translateY(-1px)" }}
          >
            Get Started Free
          </Hoverable>
        </div>
      </div>
    </nav>
  );
}
