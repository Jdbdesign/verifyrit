"use client";

import { Component, createRef, ReactNode, RefObject } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import TrustStrip from "./TrustStrip";
import VerificationOverview, { OverviewCard } from "./VerificationOverview";
import FeaturePanels from "./FeaturePanels";
import BulkValidation from "./BulkValidation";
import AccuracySection from "./AccuracySection";
import StepsTimeline from "./StepsTimeline";
import HowItWorks, { Step } from "./HowItWorks";
import UseCases, { UseCase } from "./UseCases";
import StatsBand from "./StatsBand";
import PressLogos from "./PressLogos";
import ConversionBand, { Benefit, MiniDot } from "./ConversionBand";
import Testimonials, { Testimonial } from "./Testimonials";
import FAQ, { FaqItem } from "./FAQ";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";
import ValidationModal, { ModalData } from "./ValidationModal";
import { ChipItem, CheckItem } from "./HeroValidator";

type CheckState = "pass" | "fail" | "skip";
type ExampleCheck = { label: string; state: CheckState };
type ResultKind = "valid" | "risky" | "invalid";
type ExampleEntry = { email: string; result: ResultKind; chip: string; verdict: string; checks: ExampleCheck[] };

type Phase = "checking" | "resolved" | "idle";
type Mode = "ambient" | "manual";
type CtaPhase = "idle" | "checking" | "resolved";

type AppState = {
  exIndex: number;
  phase: Phase;
  revealedChecks: number;
  activeResult: ResultKind | null;
  inputValue: string;
  mode: Mode;
  currentChecks: ExampleCheck[];
  currentVerdict: string;
  bulkP: number;
  accP: number;
  statP: number;
  ovP: number;
  activeStep: number;
  openFaq: number;
  timing: number;
  ctaValue: string;
  ctaPhase: CtaPhase;
  ctaResult: ResultKind | null;
  ctaVerdict: string;
  miniTesti: number;
  modalOpen: boolean;
  modalPhase: "loading" | "result";
  modalData: ModalData | null;
};

function splitMultiPath(d: string): string[] {
  return d
    .split("M")
    .filter(Boolean)
    .map((seg) => "M" + seg);
}
function splitPathArray(d: string): string[] {
  return d.split(/(?=M)/);
}

function mkIcon(d: string, size = 22) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      {splitMultiPath(d).map((seg, i) => (
        <path key={i} d={seg} />
      ))}
    </svg>
  );
}

export default class VerifyRitApp extends Component<Record<string, never>, AppState> {
  private examples: ExampleEntry[];
  private L: string[];
  private rc: Record<ResultKind, string>;
  private statsRef: RefObject<HTMLDivElement | null> = createRef();
  private bulkRef: RefObject<HTMLDivElement | null> = createRef();
  private accRef: RefObject<HTMLDivElement | null> = createRef();
  private ovRef: RefObject<HTMLDivElement | null> = createRef();
  private testiRef: RefObject<HTMLDivElement | null> = createRef();
  private inputRef: RefObject<HTMLInputElement | null> = createRef();
  private _timers: ReturnType<typeof setTimeout>[] = [];
  private _timingIv?: ReturnType<typeof setInterval>;
  private _resume?: ReturnType<typeof setTimeout>;
  private _modalT?: ReturnType<typeof setTimeout>;
  private _ctaT?: ReturnType<typeof setTimeout>;

  private accent = "#8B5CF6";
  private ambientOn = true;
  private glowStrength = 1;

  constructor(props: Record<string, never>) {
    super(props);
    const L = ["Syntax", "Domain has MX records", "Not a disposable domain", "Mailbox exists"];
    const examples: ExampleEntry[] = [
      {
        email: "hello@verifyrit.com",
        result: "valid",
        chip: "Valid",
        verdict: "Valid — safe to send",
        checks: [
          { label: L[0], state: "pass" },
          { label: L[1], state: "pass" },
          { label: L[2], state: "pass" },
          { label: L[3], state: "pass" },
        ],
      },
      {
        email: "contact@mailinator.com",
        result: "risky",
        chip: "Risky",
        verdict: "Risky — disposable domain",
        checks: [
          { label: L[0], state: "pass" },
          { label: L[1], state: "pass" },
          { label: L[2], state: "fail" },
          { label: L[3], state: "skip" },
        ],
      },
      {
        email: "jdoe@@gnail..com",
        result: "invalid",
        chip: "Invalid",
        verdict: "Invalid — does not exist",
        checks: [
          { label: L[0], state: "fail" },
          { label: L[1], state: "skip" },
          { label: L[2], state: "skip" },
          { label: L[3], state: "skip" },
        ],
      },
    ];
    this.state = {
      exIndex: 0,
      phase: "checking",
      revealedChecks: 0,
      activeResult: null,
      inputValue: "",
      mode: "ambient",
      currentChecks: examples[0].checks,
      currentVerdict: examples[0].verdict,
      bulkP: 0,
      accP: 0,
      statP: 0,
      ovP: 0,
      activeStep: 0,
      openFaq: 0,
      timing: 340,
      ctaValue: "",
      ctaPhase: "idle",
      ctaResult: null,
      ctaVerdict: "",
      miniTesti: 0,
      modalOpen: false,
      modalPhase: "loading",
      modalData: null,
    };
    this.examples = examples;
    this.L = L;
    this.rc = { valid: "#34D399", risky: "#F2A73E", invalid: "#F26363" };
  }

  after(ms: number, fn: () => void) {
    const t = setTimeout(fn, ms);
    this._timers.push(t);
    return t;
  }
  clearTimers() {
    this._timers.forEach(clearTimeout);
    this._timers = [];
  }

  componentDidMount() {
    this.runCheck(this.examples[0], true);
    this._timingIv = setInterval(() => this.setState({ timing: 300 + Math.floor(Math.random() * 95) }), 2400);
    this.setupObservers();
  }
  componentWillUnmount() {
    this.clearTimers();
    clearInterval(this._timingIv);
    clearTimeout(this._resume);
    clearTimeout(this._modalT);
    clearTimeout(this._ctaT);
  }

  runCheck(data: ExampleEntry, ambient: boolean) {
    this.clearTimers();
    this.setState({
      phase: "checking",
      revealedChecks: 0,
      activeResult: null,
      inputValue: data.email,
      currentChecks: data.checks,
      currentVerdict: data.verdict,
    });
    const reveal = (i: number): void => {
      this.setState({ revealedChecks: i });
      if (i < data.checks.length) {
        this.after(85, () => reveal(i + 1));
      } else {
        this.after(280, () => {
          this.setState({ phase: "resolved", activeResult: data.result });
          if (ambient && this.ambientOn) this.after(1900, () => this.nextAmbient());
        });
      }
    };
    this.after(430, () => reveal(1));
  }

  nextAmbient() {
    if (this.state.mode !== "ambient" || !this.ambientOn) return;
    const n = (this.state.exIndex + 1) % this.examples.length;
    this.setState({ exIndex: n });
    this.runCheck(this.examples[n], true);
  }

  buildData(email: string): ExampleEntry {
    const syntaxOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !/@@|\.\./.test(email);
    const L = this.L;
    if (!syntaxOk)
      return {
        email,
        result: "invalid",
        chip: "Invalid",
        verdict: "Invalid — does not exist",
        checks: [
          { label: L[0], state: "fail" },
          { label: L[1], state: "skip" },
          { label: L[2], state: "skip" },
          { label: L[3], state: "skip" },
        ],
      };
    const domain = (email.split("@")[1] || "").toLowerCase();
    const disp = ["mailinator", "guerrillamail", "10minutemail", "tempmail", "trashmail", "yopmail", "sharklasers", "disposable"];
    if (disp.some((d) => domain.includes(d)))
      return {
        email,
        result: "risky",
        chip: "Risky",
        verdict: "Risky — disposable domain",
        checks: [
          { label: L[0], state: "pass" },
          { label: L[1], state: "pass" },
          { label: L[2], state: "fail" },
          { label: L[3], state: "skip" },
        ],
      };
    return {
      email,
      result: "valid",
      chip: "Valid",
      verdict: "Valid — safe to send",
      checks: [
        { label: L[0], state: "pass" },
        { label: L[1], state: "pass" },
        { label: L[2], state: "pass" },
        { label: L[3], state: "pass" },
      ],
    };
  }

  toManual(data: ExampleEntry) {
    this.setState({ mode: "manual" });
    this.runCheck(data, false);
    this.scheduleResume();
  }
  scheduleResume() {
    clearTimeout(this._resume);
    this._resume = setTimeout(() => {
      this.setState({ mode: "ambient" });
      this.nextAmbient();
    }, 9000);
  }

  onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.clearTimers();
    this.setState({ inputValue: e.target.value, mode: "manual", phase: "idle", revealedChecks: 0, activeResult: null });
  };
  onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") this.onValidate();
  };
  onFocus = () => {
    clearTimeout(this._resume);
    this.clearTimers();
    this.setState({ mode: "manual", phase: "idle", revealedChecks: 0, activeResult: null, inputValue: "" });
  };
  onBlur = () => {
    if (this.state.modalOpen) return;
    if ((this.state.inputValue || "").trim() === "") {
      this.setState({ mode: "ambient" });
      this.nextAmbient();
    }
  };
  onValidate = () => {
    const email = (this.state.inputValue || "").trim();
    if (!email) {
      this.focusInput();
      return;
    }
    this.openModal(email);
  };
  onChip = (email: string) => {
    this.toManual(this.buildData(email));
  };
  focusInput = () => {
    if (this.inputRef.current) this.inputRef.current.focus();
  };

  openModal = (email: string) => {
    const md = this.buildModal(email);
    this.clearTimers();
    clearTimeout(this._resume);
    this.setState({ modalOpen: true, modalPhase: "loading", modalData: md, mode: "manual", inputValue: email });
    clearTimeout(this._modalT);
    this._modalT = setTimeout(() => this.setState({ modalPhase: "result" }), 1900);
  };
  closeModal = () => {
    clearTimeout(this._modalT);
    this.setState({ modalOpen: false, mode: "ambient" });
    this.nextAmbient();
  };
  validateAnother = () => {
    this.closeModal();
    setTimeout(() => this.focusInput(), 60);
  };
  stopProp = (e: React.MouseEvent) => e.stopPropagation();

  scoreColor(v: number) {
    return v >= 80 ? "#34D399" : v >= 50 ? "#F2A73E" : "#F26363";
  }

  buildModal(email: string): ModalData {
    const base = this.buildData(email);
    const domain = (email.split("@")[1] || "").toLowerCase();
    const root = domain.split(".")[0] || "unknown";
    const cap = (x: string) => (x ? x.charAt(0).toUpperCase() + x.slice(1) : x);
    const providers: Record<string, string> = {
      gmail: "Google",
      googlemail: "Google",
      outlook: "Microsoft",
      hotmail: "Microsoft",
      live: "Microsoft",
      yahoo: "Yahoo",
      ymail: "Yahoo",
      icloud: "Apple",
      me: "Apple",
      proton: "Proton",
      protonmail: "Proton",
      zoho: "Zoho",
      aol: "AOL",
    };
    const provider = providers[root] || cap(root) + " Mail";
    const green = "#34D399",
      red = "#F26363";
    const mkChecks = (arr: { label: string; sub: string; ok: boolean }[]) =>
      arr.map((c) => ({
        label: c.label,
        sub: c.sub,
        sym: c.ok ? "✓" : "✕",
        symColor: c.ok ? green : red,
        symBg: c.ok ? "rgba(52,211,153,0.14)" : "rgba(242,99,99,0.14)",
      }));
    const processedMs = 2000 + Math.floor(Math.random() * 5200);
    const now = new Date();
    const base_ = {
      email,
      domain,
      provider,
      processed: "Processed in " + processedMs + "ms",
      timestamp: now.toLocaleString("en-US", { month: "numeric", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true }),
    };

    let d: {
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
      confidence: number;
      deliver: number;
      validation: ReturnType<typeof mkChecks>;
      additional: ReturnType<typeof mkChecks>;
      mxList: { host: string; prio: number }[];
    };
    if (base.result === "valid") {
      const conf = 97,
        del = 96;
      d = {
        statusLabel: "Valid",
        statusColor: green,
        statusBg: "rgba(52,211,153,0.14)",
        riskLabel: "Low Risk",
        riskColor: green,
        riskBg: "rgba(52,211,153,0.12)",
        headline: "Email is valid and safe to send",
        headlineColor: green,
        iconColor: green,
        iconBg: "rgba(52,211,153,0.12)",
        emailColor: green,
        confidence: conf,
        deliver: del,
        validation: mkChecks([
          { label: "Syntax", sub: "Valid", ok: true },
          { label: "Domain", sub: "Valid", ok: true },
          { label: "MX Record", sub: "Valid", ok: true },
          { label: "SMTP", sub: "Valid", ok: true },
        ]),
        additional: mkChecks([
          { label: "Not Disposable", sub: "Email Type", ok: true },
          { label: "Business", sub: "Email Type", ok: true },
          { label: "Specific", sub: "Domain Type", ok: true },
          { label: "No Typo", sub: "Spelling Check", ok: true },
        ]),
        mxList: [
          { host: "mx1." + domain, prio: 10 },
          { host: "mx2." + domain, prio: 20 },
        ],
      };
    } else if (base.result === "risky") {
      const conf = 42,
        del = 40;
      d = {
        statusLabel: "Valid",
        statusColor: green,
        statusBg: "rgba(52,211,153,0.14)",
        riskLabel: "Critical Risk",
        riskColor: red,
        riskBg: "rgba(242,99,99,0.12)",
        headline: "Email has potential issues but may be deliverable",
        headlineColor: green,
        iconColor: green,
        iconBg: "rgba(52,211,153,0.12)",
        emailColor: green,
        confidence: conf,
        deliver: del,
        validation: mkChecks([
          { label: "Syntax", sub: "Valid", ok: true },
          { label: "Domain", sub: "Valid", ok: true },
          { label: "MX Record", sub: "Valid", ok: true },
          { label: "SMTP", sub: "Invalid", ok: false },
        ]),
        additional: mkChecks([
          { label: "Disposable", sub: "Email Type", ok: false },
          { label: "Personal", sub: "Email Type", ok: true },
          { label: "Specific", sub: "Domain Type", ok: true },
          { label: "No Typo", sub: "Spelling Check", ok: true },
        ]),
        mxList: [{ host: "mail." + domain, prio: 10 }],
      };
    } else {
      const conf = 8,
        del = 5;
      d = {
        statusLabel: "Invalid",
        statusColor: red,
        statusBg: "rgba(242,99,99,0.14)",
        riskLabel: "Critical Risk",
        riskColor: red,
        riskBg: "rgba(242,99,99,0.12)",
        headline: "Email is invalid and should not be used",
        headlineColor: red,
        iconColor: red,
        iconBg: "rgba(242,99,99,0.12)",
        emailColor: red,
        confidence: conf,
        deliver: del,
        validation: mkChecks([
          { label: "Syntax", sub: "Invalid", ok: false },
          { label: "Domain", sub: "Invalid", ok: false },
          { label: "MX Record", sub: "Not found", ok: false },
          { label: "SMTP", sub: "Invalid", ok: false },
        ]),
        additional: mkChecks([
          { label: "Malformed", sub: "Email Type", ok: false },
          { label: "Unknown", sub: "Email Type", ok: false },
          { label: "Unknown", sub: "Domain Type", ok: false },
          { label: "Possible Typo", sub: "Spelling Check", ok: false },
        ]),
        mxList: [],
      };
    }
    return {
      ...base_,
      ...d,
      confText: d.confidence + "%",
      confColor: this.scoreColor(d.confidence),
      confWidth: d.confidence + "%",
      delText: d.deliver + "%",
      delColor: this.scoreColor(d.deliver),
      delWidth: d.deliver + "%",
      hasMx: d.mxList.length > 0,
      noMx: d.mxList.length === 0,
    };
  }

  // CTA validator
  onCtaInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ctaValue: e.target.value, ctaPhase: "idle", ctaResult: null });
  };
  onCtaKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") this.onCtaValidate();
  };
  onCtaValidate = () => {
    const email = (this.state.ctaValue || "").trim();
    if (!email) return;
    this.openModal(email);
  };

  setupObservers() {
    const mk = (ref: RefObject<HTMLDivElement | null>, cb: () => void) => {
      if (!ref.current || typeof IntersectionObserver === "undefined") {
        cb();
        return;
      }
      const o = new IntersectionObserver((es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            cb();
            o.disconnect();
          }
        });
      }, { threshold: 0.35 });
      o.observe(ref.current);
    };
    mk(this.ovRef, () => this.animate("ovP", 1700));
    mk(this.bulkRef, () => this.animate("bulkP", 2400));
    mk(this.accRef, () => this.animate("accP", 1700));
    mk(this.statsRef, () => this.animate("statP", 1700));
  }
  animate(key: "ovP" | "bulkP" | "accP" | "statP", dur: number) {
    const start = performance.now();
    const step = (now: number) => {
      const raw = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - raw, 3);
      this.setState({ [key]: eased } as Pick<AppState, typeof key>);
      if (raw < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  hexA(hex: string, a: number) {
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
  }

  render(): ReactNode {
    const s = this.state;
    const rc = this.rc;
    const accent = this.accent;
    const miniT = [
      {
        quote: "“VerifyRit has transformed our email marketing. Our bounce rates dropped by 90% and our open rates increased significantly.”",
        name: "Sarah Johnson",
        role: "Marketing Director at TechCorp",
      },
      {
        quote: "“Validation is fast and the reports are clear. We cleaned a 2M-row list in an afternoon and deliverability jumped.”",
        name: "Michael Chen",
        role: "Email Marketing Manager, GrowthHub",
      },
      {
        quote: "“Setup took minutes and the accuracy is exactly what we needed as a small team. Worth every credit.”",
        name: "Emily Rodriguez",
        role: "CEO at StartupXYZ",
      },
    ];
    const miniAvatars = ["linear-gradient(150deg, #34D399, #059669)", "linear-gradient(150deg, #F2A73E, #D97706)", "linear-gradient(150deg, #8B5CF6, #6C2BDF)"];
    const mi = ((s.miniTesti % 3) + 3) % 3;
    const gs = this.glowStrength;
    const resolved = s.phase === "resolved" && s.activeResult;
    const stateColor = resolved ? rc[s.activeResult as ResultKind] : accent;

    const checkMap: Record<CheckState, { sym: string; col: string; bg: string; dim: boolean }> = {
      pass: { sym: "✓", col: "#34D399", bg: "rgba(52,211,153,0.14)", dim: false },
      fail: { sym: "✕", col: "#F26363", bg: "rgba(242,99,99,0.14)", dim: false },
      skip: { sym: "–", col: "rgba(255,255,255,0.35)", bg: "rgba(255,255,255,0.05)", dim: true },
    };
    const visibleChecks: CheckItem[] = (s.currentChecks || []).map((c, i) => {
      const m = checkMap[c.state];
      return {
        label: c.label,
        sym: m.sym,
        col: m.col,
        bg: m.bg,
        labelCol: m.dim ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.85)",
        note: c.state === "skip" ? " · not checked" : "",
        revealed: i < s.revealedChecks,
      };
    });

    const chips: ChipItem[] = this.examples.map((e) => ({ email: e.email, dot: rc[e.result], onClick: () => this.onChip(e.email) }));

    const glowColor = resolved ? rc[s.activeResult as ResultKind] : accent;
    const glowBg = `radial-gradient(ellipse at center, ${this.hexA(glowColor, 0.22 * gs)}, ${this.hexA(glowColor, 0.05 * gs)} 45%, transparent 70%)`;

    const stepData = [
      { n: "01", title: "Create an account", body: "Sign up in seconds. No credit card required to start validating your first emails." },
      { n: "02", title: "Upload your list", body: "Import via upload, API, or a direct integration with the tools you already use." },
      {
        n: "03",
        title: "Get clean results",
        body: "Download your verified list with detailed reports, deliverability scores, and a clear next step for every flagged address.",
      },
    ];
    const steps: Step[] = stepData.map((st, i) => {
      const active = i === s.activeStep;
      return {
        ...st,
        active,
        onClick: () => this.setState({ activeStep: i }),
        border: active ? "rgba(139,92,246,0.35)" : "rgba(255,255,255,0.06)",
        bg: active ? "rgba(139,92,246,0.08)" : "#151220",
        numColor: active ? "#fff" : "#A78BFA",
        numBg: active ? "linear-gradient(150deg, #8B5CF6, #6C2BDF)" : "rgba(139,92,246,0.14)",
        titleColor: active ? "#F5F3FA" : "rgba(255,255,255,0.7)",
      };
    });

    const bp = s.bulkP;
    const bulkProcessed = Math.round(120000 * bp).toLocaleString();

    const useCasesData = [
      {
        title: "Email Marketing Agencies",
        body: "Deliver exceptional results for your clients by ensuring every campaign reaches real, engaged subscribers — and prove the ROI.",
        d: "M3 11l18-5v12L3 14v-3z M11.6 16.8a3 3 0 0 1-5.8-1.6",
      },
      {
        title: "E-commerce Businesses",
        body: "Reduce emails bouncing back and make sure campaigns reach your customers — protect the revenue those sends are worth.",
        d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18 M16 10a4 4 0 0 1-8 0",
      },
      {
        title: "SaaS Companies",
        body: "Keep your user database clean, improve deliverability, and reduce signup fraud with real-time email verification.",
        d: "M2 3h20v14H2z M8 21h8 M12 17v4",
      },
      {
        title: "Lead Generation",
        body: "Verify leads in real time before they enter your CRM. Ensure your sales team only works with valid, quality prospects.",
        d: "M12 2a10 10 0 1 0 10 10 M12 8a4 4 0 1 0 4 4 M12 12h.01",
      },
      {
        title: "Growth Marketers",
        body: "Scale your email outreach confidently, knowing every address is valid — and protect your domain reputation while doing it.",
        d: "M3 17l6-6 4 4 8-8 M14 7h7v7",
      },
      {
        title: "Newsletter Publishers",
        body: "Maintain a healthy subscriber list, improve engagement metrics, and reach readers who actually want your content.",
        d: "M4 4h16v16H4z M4 8h16 M8 12h8 M8 16h5",
      },
    ];
    const useCases: UseCase[] = useCasesData.map((u) => ({
      title: u.title,
      body: u.body,
      icon: (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          <path d={u.d} />
        </svg>
      ),
    }));

    const sp = s.statP;
    const statEmails = (10 * sp).toFixed(sp < 1 ? 1 : 0).replace(/\.0$/, "") + "B+";
    const statAccuracy = (99.9 * sp).toFixed(1) + "%";
    const statCustomers = Math.round(50 * sp) + "K+";

    const testiData = [
      {
        quote:
          "“VerifyRit has completely transformed our email marketing. We’ve seen a 45% reduction in bounce rates and our deliverability has never been better.”",
        name: "Sarah Johnson",
        role: "Marketing Director, TechCorp Inc.",
        initials: "SJ",
        avatarBg: "linear-gradient(150deg, #34D399, #059669)",
      },
      {
        quote:
          "“The accuracy and speed of validation is remarkable. We validate millions of emails monthly, and VerifyRit handles it flawlessly. Best investment we’ve made.”",
        name: "Michael Chen",
        role: "Email Marketing Manager, GrowthHub",
        initials: "MC",
        avatarBg: "linear-gradient(150deg, #F2A73E, #D97706)",
      },
      {
        quote: "“As a startup, we needed a reliable and affordable solution. VerifyRit delivered beyond our expectations. The ROI has been outstanding.”",
        name: "Emily Rodriguez",
        role: "CEO at StartupXYZ",
        initials: "ER",
        avatarBg: "linear-gradient(150deg, #8B5CF6, #6C2BDF)",
      },
    ];
    const testimonials: Testimonial[] = testiData.map((t) => ({ ...t, stars: [0, 0, 0, 0, 0] }));

    const faqData = [
      {
        q: "What is email validation and why do I need it?",
        a: "Email validation checks whether an address is real, deliverable, and safe to send to — before you send — so you protect your sender reputation and stop paying to reach addresses that were never going to open anything.",
      },
      {
        q: "How accurate is VerifyRit?",
        a: "VerifyRit validates with 99.9% accuracy, powered by advanced AI and machine learning models trained specifically on deliverability signals.",
      },
      {
        q: "Can I validate emails in bulk?",
        a: "Yes — upload a list via CSV, API, or a direct integration and validate up to millions of addresses in a single batch.",
      },
      {
        q: "Do you offer API access?",
        a: "Yes — VerifyRit’s API returns real-time validation results in milliseconds, built for integration into your existing signup or list-management flow.",
      },
      {
        q: "How long does the validation process take?",
        a: "Single addresses validate in real time, typically in a few hundred milliseconds. Bulk lists process at high speed, with progress tracked live as they run.",
      },
      {
        q: "What types of invalid emails can you detect?",
        a: "Malformed syntax, non-existent domains, disposable or temporary email providers, and mailboxes that don’t actually exist — VerifyRit checks all four before returning a verdict.",
      },
      {
        q: "Is my data secure?",
        a: "Yes — every check runs on enterprise-grade encryption with full GDPR compliance. Your lists are never shared or exposed.",
      },
      {
        q: "What happens if I exceed my monthly limit?",
        a: "You keep validating without interruption — additional checks roll onto flexible pay-as-you-go credits, and you’re only ever billed for what you use.",
      },
    ];
    const faqs: FaqItem[] = faqData.map((f, i) => {
      const open = i === s.openFaq;
      return {
        ...f,
        open,
        onClick: () => this.setState({ openFaq: open ? -1 : i }),
        border: open ? "rgba(139,92,246,0.3)" : "rgba(255,255,255,0.06)",
        iconRotate: open ? "rotate(180deg)" : "rotate(0deg)",
      };
    });

    const ctaResolved = s.ctaPhase === "resolved" && s.ctaResult;
    const ctaBorder = s.ctaPhase === "checking" ? accent : ctaResolved ? rc[s.ctaResult as ResultKind] : "rgba(255,255,255,0.1)";

    const overviewCardsData = [
      {
        title: "Bulk Email Validation",
        body: "Upload your list and get a detailed verification report in seconds.",
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zM14 2v4a2 2 0 0 0 2 2h4M9 15l2 2 4-4",
      },
      { title: "Real-time API", body: "Validate emails in real time with our fast, reliable API.", d: "M16 18l6-6-6-6M8 6l-6 6 6 6" },
      {
        title: "Deliverability Insights",
        body: "Actionable insight to improve inbox placement and campaign performance.",
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
      },
      {
        title: "Detailed Reports",
        body: "A full breakdown with status, risk score, and suggested next steps.",
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zM14 2v4a2 2 0 0 0 2 2h4M16 13H8M16 17H8M10 9H8",
      },
    ];
    const overviewCards: OverviewCard[] = overviewCardsData.map((c) => ({ title: c.title, body: c.body, icon: mkIcon(c.d) }));

    const benefitsData = [
      { label: "100 Free Credits", color: "#2DD4BF", d: "M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z" },
      { label: "No Credit Card Required", color: "#38BDF8", d: "M2 5h20a0 0 0 0 1 0 0v14a0 0 0 0 1 0 0H2a0 0 0 0 1 0 0V5a0 0 0 0 1 0 0zM2 10h20" },
      { label: "Cancel Anytime", color: "#38BDF8", d: "M12 3a9 9 0 1 0 9 9M12 7v5l3 2M21 3v6h-6" },
      {
        label: "24/7 Support",
        color: "#38BDF8",
        d: "M12 3a9 9 0 0 0-9 9v4a2 2 0 0 0 2 2h1v-6H5a7 7 0 0 1 14 0h-1v6h1a2 2 0 0 0 2-2v-4a9 9 0 0 0-9-9zM19 18a3 3 0 0 1-3 3h-3",
      },
    ];
    const benefits: Benefit[] = benefitsData.map((b) => ({
      label: b.label,
      iconColor: b.color,
      iconBg: b.color === "#2DD4BF" ? "rgba(45,212,191,0.12)" : "rgba(56,189,248,0.12)",
      iconBorder: b.color === "#2DD4BF" ? "rgba(45,212,191,0.28)" : "rgba(56,189,248,0.28)",
      icon: (
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          {splitPathArray(b.d).map((seg, i) => (
            <path key={i} d={seg} />
          ))}
        </svg>
      ),
    }));

    const miniDots: MiniDot[] = [0, 1, 2].map((i) => ({
      bg: i === mi ? "#8B5CF6" : "rgba(255,255,255,0.16)",
      onClick: () => this.setState({ miniTesti: i }),
    }));

    return (
      <div className="vr-home-gutter" style={{ position: "relative", overflowX: "clip", background: "#08070C" }}>
        <Nav variant="home" />

        <Hero
          inputRef={this.inputRef}
          inputValue={s.inputValue}
          onInput={this.onInput}
          onKey={this.onKey}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onValidate={this.onValidate}
          focusInput={this.focusInput}
          checking={s.phase === "checking"}
          inputBorder={stateColor}
          inputShadow={resolved ? `0 0 0 4px ${this.hexA(stateColor, 0.12)}` : s.phase === "checking" ? `0 0 0 4px ${this.hexA(accent, 0.12)}` : "0 0 0 0 transparent"}
          chips={chips}
          visibleChecks={visibleChecks}
          showVerdict={!!resolved}
          verdictText={s.currentVerdict}
          verdictColor={resolved ? rc[s.activeResult as ResultKind] : accent}
          verdictBg={resolved ? this.hexA(rc[s.activeResult as ResultKind], 0.12) : "transparent"}
          showIdle={s.phase === "idle" && s.revealedChecks === 0}
          glowBg={glowBg}
          glowOpacity={0.9}
        />

        <TrustStrip trustLogos={["Northwind", "Lumafi", "Beacon", "Coreline", "Vantage", "Meridian"]} />

        <VerificationOverview
          overviewCards={overviewCards}
          ovRef={this.ovRef}
          ovTotal={Math.round(124560 * s.ovP).toLocaleString()}
          gaugeOffset={(100 - 99.9 * s.ovP).toFixed(2)}
          chartDraw={(1 - s.ovP).toFixed(3)}
          areaOpacity={(s.ovP * 0.9).toFixed(2)}
        />

        <FeaturePanels timingText={"~" + s.timing + "ms"} />

        <BulkValidation
          bulkRef={this.bulkRef}
          bulkProcessed={bulkProcessed}
          bulkPct={Math.round(bp * 100) + "%"}
          bulkWidth={bp * 100 + "%"}
          bulkValid={Math.round(94120 * bp).toLocaleString()}
          bulkRisky={Math.round(15240 * bp).toLocaleString()}
          bulkInvalid={Math.round(10640 * bp).toLocaleString()}
        />

        <AccuracySection accRef={this.accRef} accDisplay={(99.9 * s.accP).toFixed(1)} />

        <StepsTimeline stepBullets={["Get started in minutes", "No technical skills required", "Clear results, instantly"]} />

        <HowItWorks steps={steps} isStep0={s.activeStep === 0} isStep1={s.activeStep === 1} isStep2={s.activeStep === 2} />

        <UseCases useCases={useCases} />

        <StatsBand statsRef={this.statsRef} statEmails={statEmails} statAccuracy={statAccuracy} statCustomers={statCustomers} />

        <PressLogos pressLogos={["TechCrunch", "Forbes", "The Wall Street Journal", "Entrepreneur", "VentureBeat", "Business Insider"]} />

        <ConversionBand
          miniQuote={miniT[mi].quote}
          miniName={miniT[mi].name}
          miniRole={miniT[mi].role}
          miniInitials={miniT[mi].name
            .split(" ")
            .map((w) => w[0])
            .join("")}
          miniAvatarBg={miniAvatars[mi]}
          miniDots={miniDots}
          onMiniPrev={() => this.setState({ miniTesti: (mi + 2) % 3 })}
          onMiniNext={() => this.setState({ miniTesti: (mi + 1) % 3 })}
          benefits={benefits}
        />

        <Testimonials
          testiRef={this.testiRef}
          testimonials={testimonials}
          onTestiPrev={() => this.testiRef.current && this.testiRef.current.scrollBy({ left: -440, behavior: "smooth" })}
          onTestiNext={() => this.testiRef.current && this.testiRef.current.scrollBy({ left: 440, behavior: "smooth" })}
        />

        <FAQ faqs={faqs} />

        <FinalCTA
          ctaValue={s.ctaValue}
          onCtaInput={this.onCtaInput}
          onCtaKey={this.onCtaKey}
          onCtaValidate={this.onCtaValidate}
          ctaBorder={ctaBorder}
          ctaShowVerdict={!!ctaResolved}
          ctaVerdictText={s.ctaVerdict}
          ctaVerdictColor={ctaResolved ? rc[s.ctaResult as ResultKind] : accent}
          ctaVerdictBg={ctaResolved ? this.hexA(rc[s.ctaResult as ResultKind], 0.12) : "transparent"}
        />

        <Footer variant="home" />

        <ValidationModal
          modalOpen={s.modalOpen}
          modalLoading={s.modalPhase === "loading"}
          modalResult={s.modalPhase === "result"}
          modalEmail={s.modalData ? s.modalData.email : ""}
          md={s.modalData || {}}
          closeModal={this.closeModal}
          validateAnother={this.validateAnother}
          stopProp={this.stopProp}
        />
      </div>
    );
  }
}
