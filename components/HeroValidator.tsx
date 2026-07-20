"use client";

import { RefObject } from "react";
import Hoverable from "./Hoverable";

export type CheckItem = { label: string; sym: string; col: string; bg: string; labelCol: string; note: string; revealed: boolean };
export type ChipItem = { email: string; dot: string; onClick: () => void };

export type HeroValidatorProps = {
  inputRef: RefObject<HTMLInputElement | null>;
  inputValue: string;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKey: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  onValidate: () => void;
  checking: boolean;
  inputBorder: string;
  inputShadow: string;
  chips: ChipItem[];
  visibleChecks: CheckItem[];
  showVerdict: boolean;
  verdictText: string;
  verdictColor: string;
  verdictBg: string;
  showIdle: boolean;
};

export default function HeroValidator(p: HeroValidatorProps) {
  return (
    <div style={{ margin: "40px auto 0", maxWidth: 620, animation: "vr-fadeup .8s cubic-bezier(0.16,1,0.3,1) .18s both" }}>
      <div style={{ display: "flex", gap: 10, alignItems: "stretch" }}>
        <div
          style={{
            position: "relative",
            flex: 1,
            borderRadius: 15,
            overflow: "hidden",
            border: `2px solid ${p.inputBorder}`,
            background: "#0F0D16",
            transition: "border-color .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s cubic-bezier(0.16,1,0.3,1)",
            boxShadow: p.inputShadow,
          }}
        >
          {p.checking && (
            <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none", overflow: "hidden" }}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  width: "45%",
                  background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.28), transparent)",
                  animation: "vr-scan 1s cubic-bezier(0.16,1,0.3,1) infinite",
                }}
              />
            </div>
          )}
          <input
            ref={p.inputRef}
            value={p.inputValue}
            onChange={p.onInput}
            onKeyDown={p.onKey}
            onFocus={p.onFocus}
            onBlur={p.onBlur}
            placeholder="Enter an email to validate"
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              border: "none",
              outline: "none",
              background: "transparent",
              color: "#F5F3FA",
              fontSize: 16.5,
              fontWeight: 500,
              padding: "17px 18px",
            }}
          />
        </div>
        <Hoverable
          as="button"
          onClick={p.onValidate}
          style={{
            flexShrink: 0,
            border: "none",
            cursor: "pointer",
            padding: "0 26px",
            borderRadius: 15,
            fontSize: 16,
            fontWeight: 700,
            color: "#fff",
            background: "linear-gradient(150deg, #8B5CF6, #6C2BDF)",
            boxShadow: "0 6px 22px rgba(108,43,223,0.42)",
          }}
          hoverStyle={{ transform: "translateY(-1px)", boxShadow: "0 10px 30px rgba(108,43,223,0.6)" }}
        >
          Validate
        </Hoverable>
      </div>

      {/* example chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginTop: 14 }}>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", alignSelf: "center", marginRight: 2 }}>Try:</span>
        {p.chips.map((chip, i) => (
          <Hoverable
            as="button"
            key={i}
            onClick={chip.onClick}
            style={{
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 13px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.75)",
              fontSize: 13,
              fontWeight: 500,
              fontFamily: "inherit",
            }}
            hoverStyle={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.16)" }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: chip.dot }} />
            {chip.email}
          </Hoverable>
        ))}
      </div>

      {/* result panel — always mounts checks + verdict at full size; only opacity/transform
          animate, so the panel's height never changes during an interaction and the rest
          of the page never reflows */}
      <div
        style={{
          position: "relative",
          marginTop: 16,
          textAlign: "left",
          background: "#0F0D16",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 16,
          padding: "18px 20px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          {p.visibleChecks.map((chk, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 11,
                opacity: chk.revealed ? 1 : 0,
                transform: chk.revealed ? "translateY(0)" : "translateY(6px)",
                transition: "opacity .35s cubic-bezier(0.16,1,0.3,1), transform .35s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: 19,
                  height: 19,
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 800,
                  color: chk.col,
                  background: chk.bg,
                }}
              >
                {chk.sym}
              </span>
              <span style={{ fontSize: 14.5, fontWeight: 500, color: chk.labelCol }}>
                {chk.label}
                <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 400 }}>{chk.note}</span>
              </span>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 14,
            paddingTop: 14,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            gap: 10,
            opacity: p.showVerdict ? 1 : 0,
            transform: p.showVerdict ? "translateY(0)" : "translateY(6px)",
            transition: "opacity .35s cubic-bezier(0.16,1,0.3,1), transform .35s cubic-bezier(0.16,1,0.3,1)",
            pointerEvents: p.showVerdict ? "auto" : "none",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 14px",
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 700,
              color: p.verdictColor,
              background: p.verdictBg,
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: p.verdictColor, boxShadow: `0 0 10px ${p.verdictColor}` }} />
            {p.verdictText}
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "rgba(255,255,255,0.32)",
            fontSize: 14,
            padding: "18px 20px",
            background: "#0F0D16",
            opacity: p.showIdle ? 1 : 0,
            pointerEvents: p.showIdle ? "auto" : "none",
            transition: "opacity .3s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          Enter an address or pick an example to see a live verdict.
        </div>
      </div>
    </div>
  );
}
