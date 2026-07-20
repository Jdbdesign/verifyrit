"use client";

import Hoverable from "./Hoverable";
import HeroValidator, { HeroValidatorProps } from "./HeroValidator";

export type HeroProps = HeroValidatorProps & {
  glowBg: string;
  glowOpacity: number;
  focusInput: () => void;
};

export default function Hero(p: HeroProps) {
  return (
    <header style={{ position: "relative", padding: "92px var(--vr-gutter, 32px) 110px", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: 120,
          left: "50%",
          width: 1000,
          height: 720,
          transform: "translateX(-50%)",
          pointerEvents: "none",
          zIndex: 0,
          filter: "blur(30px)",
          transition: "opacity .5s cubic-bezier(0.16,1,0.3,1)",
          background: p.glowBg,
          opacity: p.glowOpacity,
        }}
      />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
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
            animation: "vr-fadeup .7s cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          <span style={{ display: "inline-flex", width: 7, height: 7, borderRadius: "50%", background: "#34D399", boxShadow: "0 0 10px #34D399" }} />
          Trusted by 50,000+ businesses worldwide
        </div>
        <h1
          style={{
            margin: "26px 0 0",
            fontSize: 72,
            lineHeight: 1.04,
            letterSpacing: "-0.035em",
            fontWeight: 800,
            textWrap: "balance",
            animation: "vr-fadeup .7s cubic-bezier(0.16,1,0.3,1) .06s both",
          }}
        >
          Don&apos;t guess if an email is real.
          <br />
          <span
            style={{
              background: "linear-gradient(120deg, #C4B5FD, #8B5CF6)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Know, in real time.
          </span>
        </h1>
        <p
          style={{
            margin: "22px auto 0",
            maxWidth: 560,
            fontSize: 19,
            lineHeight: 1.55,
            color: "rgba(255,255,255,0.6)",
            textWrap: "pretty",
            animation: "vr-fadeup .7s cubic-bezier(0.16,1,0.3,1) .12s both",
          }}
        >
          VerifyRit checks every address the moment you need to know — syntax, domain, and mailbox — so you send with proof, not a guess.
        </p>

        <HeroValidator
          inputRef={p.inputRef}
          inputValue={p.inputValue}
          onInput={p.onInput}
          onKey={p.onKey}
          onFocus={p.onFocus}
          onBlur={p.onBlur}
          onValidate={p.onValidate}
          checking={p.checking}
          inputBorder={p.inputBorder}
          inputShadow={p.inputShadow}
          chips={p.chips}
          visibleChecks={p.visibleChecks}
          showVerdict={p.showVerdict}
          verdictText={p.verdictText}
          verdictColor={p.verdictColor}
          verdictBg={p.verdictBg}
          showIdle={p.showIdle}
        />

        <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 32, animation: "vr-fadeup .8s cubic-bezier(0.16,1,0.3,1) .24s both" }}>
          <Hoverable
            as="button"
            onClick={p.focusInput}
            style={{
              cursor: "pointer",
              border: "none",
              fontFamily: "inherit",
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
            Validate for free
          </Hoverable>
          <Hoverable
            as="a"
            href="#how"
            style={{
              padding: "14px 26px",
              borderRadius: 13,
              fontSize: 16,
              fontWeight: 600,
              color: "rgba(255,255,255,0.85)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            hoverStyle={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.18)" }}
          >
            See how it works
          </Hoverable>
        </div>
        <p style={{ margin: "18px 0 0", fontSize: 13.5, color: "rgba(255,255,255,0.4)", animation: "vr-fadeup .8s cubic-bezier(0.16,1,0.3,1) .3s both" }}>
          No credit card required · 100 free credits · Real-time validation
        </p>
      </div>
    </header>
  );
}
