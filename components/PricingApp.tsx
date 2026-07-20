"use client";

import { ReactNode, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Hoverable from "./Hoverable";

type Tier = {
  credits: string;
  big: string;
  price: string;
  per: string;
  features: string[];
  popular: boolean;
  cardBg: string;
  cardBorder: string;
  cardShadow: string;
  btnBg: string;
  btnBorder: string;
  btnShadow: string;
};

type UsageItem = { title: string; detail: string; icon: ReactNode };
type PricingFaq = { q: string; a: string };

function mkIcon(d: string) {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      {d.split(/(?=M)/).map((seg, i) => (
        <path key={i} d={seg} />
      ))}
    </svg>
  );
}

const base = ["Credits never expire", "Only charged for valid/invalid results", "Bulk CSV upload", "API access"];
const ps = base.concat(["Priority support"]);
const dam = base.concat(["Priority support", "Dedicated account manager"]);

const rawTiers: { credits: string; big: string; price: string; per: string; popular?: boolean; features: string[] }[] = [
  { credits: "10,000", big: "10k", price: "$37", per: "$0.0037 / credit", features: base },
  { credits: "50,000", big: "50k", price: "$119", per: "$0.0024 / credit", features: base },
  { credits: "100,000", big: "100k", price: "$149", per: "$0.0015 / credit", popular: true, features: ps },
  { credits: "500,000", big: "500k", price: "$299", per: "$0.0006 / credit", features: ps },
  { credits: "1,000,000", big: "1M", price: "$449", per: "$0.00045 / credit", features: dam },
  { credits: "5,000,000", big: "5M", price: "$1,750", per: "$0.00035 / credit", features: dam },
  { credits: "10,000,000", big: "10M", price: "$3,000", per: "$0.0003 / credit", features: dam },
  { credits: "25,000,000", big: "25M", price: "$6,250", per: "$0.00025 / credit", features: dam },
  { credits: "50,000,000", big: "50M", price: "$10,000", per: "$0.0002 / credit", features: dam },
];

const tiers: Tier[] = rawTiers.map((t) => ({
  credits: t.credits,
  big: t.big,
  price: t.price,
  per: t.per,
  features: t.features,
  popular: !!t.popular,
  cardBg: t.popular ? "linear-gradient(160deg, #1A1330, #12111C)" : "#151220",
  cardBorder: t.popular ? "rgba(139,92,246,0.5)" : "rgba(255,255,255,0.06)",
  cardShadow: t.popular ? "0 30px 70px rgba(108,43,223,0.25)" : "0 20px 50px rgba(0,0,0,0.4)",
  btnBg: t.popular ? "linear-gradient(150deg, #8B5CF6, #6C2BDF)" : "rgba(255,255,255,0.04)",
  btnBorder: t.popular ? "none" : "1px solid rgba(255,255,255,0.12)",
  btnShadow: t.popular ? "0 8px 24px rgba(108,43,223,0.45)" : "none",
}));

const usage: UsageItem[] = [
  { title: "Email list verification", detail: "1 credit = 1 email verification", icon: mkIcon("M21.801 10A10 10 0 1 1 17 3.335M9 11l3 3L22 4") },
  { title: "Email insights", detail: "200 credits per report", icon: mkIcon("M13 2 3 14h9l-1 8 10-12h-9z") },
  { title: "Inbox placement", detail: "200 credits per test", icon: mkIcon("M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z") },
];

const faqData: PricingFaq[] = [
  {
    q: "What is email validation and why do I need it?",
    a: "Email validation checks whether an address is real, deliverable, and safe to send to — before you send — so you protect your sender reputation and stop paying to reach addresses that were never going to open anything.",
  },
  { q: "Is my data secure?", a: "Yes — every check runs on enterprise-grade encryption with full GDPR compliance. Your lists are never shared or exposed." },
  {
    q: "How accurate is VerifyRit?",
    a: "VerifyRit validates with 99.9% accuracy, powered by advanced AI and machine learning models trained specifically on deliverability signals.",
  },
  {
    q: "What types of invalid emails can you detect?",
    a: "Malformed syntax, non-existent domains, disposable or temporary email providers, and mailboxes that don’t actually exist — VerifyRit checks all four before returning a verdict.",
  },
  { q: "Can I validate emails in bulk?", a: "Yes — upload a list via CSV, API, or a direct integration and validate up to millions of addresses in a single batch." },
  {
    q: "Do you offer API access?",
    a: "Yes — VerifyRit’s API returns real-time validation results in milliseconds, built for integration into your existing signup or list-management flow.",
  },
  {
    q: "How long does the validation process take?",
    a: "Single addresses validate in real time, typically in a few hundred milliseconds. Bulk lists process at high speed, with progress tracked live as they run.",
  },
  { q: "Do credits ever expire?", a: "No — credits never expire. Buy once and use them whenever you need, at your own pace." },
];

export default function PricingApp() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div style={{ position: "relative", overflowX: "clip", background: "#08070C" }}>
      <Nav variant="pricing" />

      {/* HEADER */}
      <header style={{ position: "relative", padding: "80px 32px 40px", textAlign: "center", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: 20,
            left: "50%",
            width: 800,
            height: 460,
            transform: "translateX(-50%)",
            pointerEvents: "none",
            zIndex: 0,
            filter: "blur(30px)",
            background: "radial-gradient(ellipse at center, rgba(139,92,246,0.18), transparent 70%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "7px 15px 7px 11px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              fontSize: 13.5,
              fontWeight: 600,
              color: "rgba(255,255,255,0.72)",
              marginBottom: 24,
              animation: "vr-fadeup .7s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            <span style={{ display: "inline-flex", width: 7, height: 7, borderRadius: "50%", background: "#34D399", boxShadow: "0 0 10px #34D399" }} />
            Pay as you go · Credits never expire
          </div>
          <h1
            style={{
              fontSize: 52,
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              margin: "0 0 18px",
              textWrap: "balance",
              animation: "vr-fadeup .7s cubic-bezier(0.16,1,0.3,1) .06s both",
            }}
          >
            Simple,{" "}
            <span style={{ background: "linear-gradient(120deg, #C4B5FD, #8B5CF6)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              transparent
            </span>{" "}
            pricing
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.6)",
              margin: "0 auto",
              maxWidth: 480,
              textWrap: "pretty",
              animation: "vr-fadeup .7s cubic-bezier(0.16,1,0.3,1) .12s both",
            }}
          >
            Choose the plan that fits your needs. Every plan includes our 99.9% accuracy guarantee.
          </p>
        </div>
      </header>

      {/* PRICING GRID */}
      <section style={{ padding: "20px 32px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {tiers.map((t, i) => (
            <Hoverable
              key={i}
              style={{
                position: "relative",
                background: t.cardBg,
                border: `1px solid ${t.cardBorder}`,
                borderRadius: 20,
                padding: 30,
                boxShadow: t.cardShadow,
                display: "flex",
                flexDirection: "column",
              }}
              hoverStyle={{ transform: "translateY(-5px)", border: "1px solid rgba(139,92,246,0.4)", boxShadow: "0 30px 70px rgba(0,0,0,0.5)" }}
            >
              {t.popular && (
                <span
                  style={{
                    position: "absolute",
                    top: -13,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 15px",
                    borderRadius: 100,
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#fff",
                    background: "linear-gradient(150deg, #8B5CF6, #6C2BDF)",
                    boxShadow: "0 6px 18px rgba(108,43,223,0.5)",
                    whiteSpace: "nowrap",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff" stroke="none">
                    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" />
                  </svg>
                  Most Popular
                </span>
              )}
              <div style={{ textAlign: "center", paddingBottom: 22, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>{t.credits} Credits</div>
                <div
                  style={{
                    fontSize: 46,
                    fontWeight: 800,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    background: "linear-gradient(120deg, #fff, #C4B5FD)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {t.big}
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: 6 }}>
                  credits
                </div>
                <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em", marginTop: 18 }}>{t.price}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>{t.per}</div>
              </div>
              <Hoverable
                as="a"
                href="#"
                style={{
                  display: "block",
                  textAlign: "center",
                  margin: "22px 0",
                  padding: 13,
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#fff",
                  background: t.btnBg,
                  border: t.btnBorder,
                  boxShadow: t.btnShadow,
                }}
                hoverStyle={{ transform: "translateY(-2px)" }}
              >
                Get Started
              </Hoverable>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {t.features.map((f, fi) => (
                  <div key={fi} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span
                      style={{
                        flexShrink: 0,
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "rgba(52,211,153,0.14)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.72)" }}>{f}</span>
                  </div>
                ))}
              </div>
            </Hoverable>
          ))}
        </div>
      </section>

      {/* CREDIT USAGE */}
      <section style={{ padding: "40px 32px 30px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {usage.map((u, i) => (
            <div key={i} style={{ background: "#151220", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 18, padding: 26, boxShadow: "0 16px 40px rgba(0,0,0,0.3)" }}>
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 13,
                  background: "linear-gradient(150deg, rgba(139,92,246,0.18), rgba(108,43,223,0.08))",
                  border: "1px solid rgba(139,92,246,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                  color: "#A78BFA",
                }}
              >
                {u.icon}
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 6 }}>{u.title}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>{u.detail}</div>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13.5, fontWeight: 700, color: "#A78BFA" }}>
                Learn more{" "}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "60px 32px 60px", maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start", marginBottom: 36 }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", margin: 0, lineHeight: 1.1 }}>Frequently asked questions</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.55)", margin: 0, alignSelf: "center" }}>
            Got questions? We&apos;ve got answers. Can&apos;t find what you&apos;re looking for?{" "}
            <a href="#" style={{ fontWeight: 600 }}>
              Contact our support team.
            </a>
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {faqData.map((faq, i) => {
            const open = i === openFaq;
            return (
              <div
                key={i}
                onClick={() => setOpenFaq(open ? -1 : i)}
                style={{
                  cursor: "pointer",
                  alignSelf: "start",
                  background: "#151220",
                  border: `1px solid ${open ? "rgba(139,92,246,0.3)" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: 16,
                  padding: "22px 24px",
                  transition: "border-color .3s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em", margin: 0, color: "#F5F3FA" }}>{faq.q}</h3>
                  <span style={{ flexShrink: 0, color: "#A78BFA", transition: "transform .3s", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </div>
                {open && <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.6)", margin: "14px 0 0", textWrap: "pretty" }}>{faq.a}</p>}
              </div>
            );
          })}
        </div>
        <p style={{ textAlign: "center", fontSize: 14.5, color: "rgba(255,255,255,0.45)", margin: "40px 0 0" }}>
          Feel free to mail us for any enquiries: <a href="#" style={{ color: "#A78BFA" }}>admin@verifyrit.com</a>
        </p>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "30px 32px 90px" }}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            maxWidth: 900,
            margin: "0 auto",
            background: "linear-gradient(150deg, #1A1330, #0F0D16)",
            border: "1px solid rgba(139,92,246,0.22)",
            borderRadius: 26,
            padding: "60px 48px",
            textAlign: "center",
            boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -80,
              left: "50%",
              transform: "translateX(-50%)",
              width: 600,
              height: 340,
              background: "radial-gradient(circle, rgba(139,92,246,0.3), transparent 70%)",
              filter: "blur(30px)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 14px", lineHeight: 1.1, textWrap: "balance" }}>
              Ready to improve your email deliverability?
            </h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", margin: "0 0 32px" }}>
              Start validating your lists today with 100 free credits. No credit card required.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Hoverable
                as="a"
                href="/"
                style={{
                  padding: "14px 26px",
                  borderRadius: 13,
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#fff",
                  background: "linear-gradient(150deg, #8B5CF6, #6C2BDF)",
                  boxShadow: "0 8px 26px rgba(108,43,223,0.45)",
                }}
                hoverStyle={{ transform: "translateY(-2px)", boxShadow: "0 12px 34px rgba(108,43,223,0.62)" }}
              >
                Get Started Free
              </Hoverable>
              <Hoverable
                as="a"
                href="#"
                style={{
                  padding: "14px 26px",
                  borderRadius: 13,
                  fontSize: 16,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.85)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
                hoverStyle={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                Schedule a Demo
              </Hoverable>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="pricing" />
    </div>
  );
}
