"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/animation";
import GhostMark from "@/components/GhostMark";

// ─── Shared primitives ─────────────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-ink-tertiary text-[10px] font-mono uppercase tracking-[0.22em] mb-5">
      {children}
    </p>
  );
}

function H1({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`font-bold text-ink tracking-tight leading-[1.06] text-balance ${className}`}
    >
      {children}
    </h2>
  );
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-ink-secondary leading-relaxed ${className}`}>{children}</p>
  );
}

function AcidPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center text-[10px] font-mono text-acid uppercase tracking-[0.15em] bg-acid/[0.08] border border-acid/[0.18] rounded-full px-2.5 py-1">
      {children}
    </span>
  );
}

// ─── Slide 1 — Cover ───────────────────────────────────────────────────────

function CoverSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(144,19,254,0.05) 0%, transparent 65%)",
        }}
      />
      <div className="relative text-center px-16 max-w-3xl">
        <div className="flex items-center justify-center gap-2.5 mb-14">
          <GhostMark className="w-9 h-9 text-acid" />
          <span className="text-ink text-2xl font-semibold tracking-tight">debaser</span>
        </div>
        <H1 className="text-5xl md:text-6xl mb-8">
          The AI royalty operations platform for the modern music rights economy.
        </H1>
        <div className="w-12 h-px bg-black/[0.1] mx-auto mb-8" />
        <p className="text-ink-secondary text-sm font-mono mb-1">
          Investor Deck · June 2026
        </p>
        <p className="text-ink-tertiary text-xs font-mono">Strictly Confidential</p>
      </div>
    </div>
  );
}

// ─── Slide 2 — Problem ─────────────────────────────────────────────────────

const problems = [
  { n: "01", label: "Messy statements", detail: "Incompatible formats from every DSP, CMO and distributor." },
  { n: "02", label: "Bad metadata", detail: "Missing ISRCs, misspelled artists, duplicate works." },
  { n: "03", label: "Contract complexity", detail: "Rates, splits, recoupment buried in PDFs no system reads." },
  { n: "04", label: "Unmatched income", detail: "Revenue sitting unattributed in royalty pools." },
  { n: "05", label: "Artist disputes", detail: "Payment questions that take days to answer — if ever." },
  { n: "06", label: "Manual reconciliation", detail: "Spreadsheet hell. Every quarter. Every time." },
];

function ProblemSlide() {
  return (
    <div className="w-full h-full flex flex-col px-16 py-14">
      <Eyebrow>02 — The Problem</Eyebrow>
      <div className="flex-1 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <H1 className="text-4xl md:text-5xl mb-6">
            Music royalties are fragmented, opaque, slow and error-prone.
          </H1>
          <Body className="text-base">
            Every quarter, labels, publishers and managers face the same broken
            workflow — and absorb the cost in labour, disputes and missing money.
          </Body>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {problems.map((p) => (
            <div
              key={p.n}
              className="bg-canvas-card border border-black/[0.05] rounded-xl p-4 hover:border-black/[0.1] transition-colors"
            >
              <span className="text-ink-tertiary text-[10px] font-mono block mb-2">{p.n}</span>
              <p className="text-ink text-sm font-semibold mb-1 tracking-tight">{p.label}</p>
              <p className="text-ink-secondary text-xs leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Slide 3 — Why Now ─────────────────────────────────────────────────────

function WhyNowSlide() {
  return (
    <div className="w-full h-full flex flex-col px-16 py-14">
      <Eyebrow>03 — Why Now</Eyebrow>
      <H1 className="text-4xl md:text-5xl mb-12 max-w-xl">
        Three converging tailwinds.
      </H1>
      <div className="grid lg:grid-cols-3 gap-6">
        {[
          {
            stat: "$31.7bn",
            label: "Music revenue growing",
            detail:
              "Recorded music hit $31.7bn in 2025, up 6.4% YoY. The rights economy keeps expanding — and so does the ops complexity behind it.",
            color: "text-acid",
          },
          {
            stat: "×7",
            label: "Royalty complexity exploding",
            detail:
              "Streaming, UGC, short-form, sync, social, live, neighbouring rights — each with different rules, rates and reporting standards.",
            color: "text-ink",
          },
          {
            stat: "Now",
            label: "AI is finally capable",
            detail:
              "LLMs can extract, match and explain at the level royalty ops demands. But royalty systems are still mostly workflow and accounting tools.",
            color: "text-acid",
          },
        ].map((t, i) => (
          <div
            key={i}
            className="border border-black/[0.06] rounded-2xl p-7 bg-canvas-card flex flex-col gap-4"
          >
            <span className={`text-5xl font-bold tracking-tight ${t.color}`}>
              {t.stat}
            </span>
            <div>
              <p className="text-ink text-sm font-semibold mb-2">{t.label}</p>
              <p className="text-ink-secondary text-sm leading-relaxed">{t.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Slide 4 — Market Failure ──────────────────────────────────────────────

function MarketFailureSlide() {
  const stats = [
    {
      value: "$2.9bn",
      label: "IFPI performance rights",
      detail: "Recorded music performance rights reached $2.9bn globally in 2025.",
      accent: "text-acid",
    },
    {
      value: "€13.97bn",
      label: "CISAC creator collections",
      detail: "Global creator collection society income, CISAC 2025 Global Collections Report.",
      accent: "text-acid",
    },
    {
      value: "$424m",
      label: "MLC unmatched mechanicals",
      detail:
        "The MLC received $424m in historical unmatched mechanical royalties from DSPs — money that couldn't find its owner.",
      accent: "text-red-400",
    },
    {
      value: "28% → 90%",
      label: "Accuracy improvement",
      detail:
        "UK club royalty research found only 28% correctly distributed to creators. Music recognition tech improves this to ~90%.",
      accent: "text-amber-400",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col px-16 py-14">
      <Eyebrow>04 — Evidence</Eyebrow>
      <H1 className="text-4xl md:text-5xl mb-3">
        Rights income exists.
      </H1>
      <H1 className="text-4xl md:text-5xl mb-10 text-ink-secondary">
        The allocation is broken.
      </H1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-canvas-card border border-black/[0.05] rounded-2xl p-5 flex flex-col gap-3"
          >
            <span className={`text-3xl font-bold tabular-nums tracking-tight ${s.accent}`}>
              {s.value}
            </span>
            <div>
              <p className="text-ink text-xs font-semibold mb-1.5 uppercase tracking-wide">{s.label}</p>
              <p className="text-ink-tertiary text-xs leading-relaxed">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-ink-tertiary text-xs font-mono mt-6">
        These are not edge cases. They are systemic, repeating, and addressable.
      </p>
    </div>
  );
}

// ─── Slide 5 — Market Opportunity ─────────────────────────────────────────

function MarketSizeSlide() {
  const tiers = [
    {
      label: "TAM",
      amount: "~$10bn+",
      desc: "Global royalty operations — software, services and labour across all labels, publishers, CMOs, distributors and management companies worldwide.",
      width: "w-full",
      opacity: "bg-acid/[0.06]",
      border: "border-acid/[0.15]",
      textColor: "text-acid",
    },
    {
      label: "SAM",
      amount: "~$2.5bn",
      desc: "Mid-market and independent labels, publishers, catalogue funds and management in US, UK, EU, AU — annual software + outsourced services spend.",
      width: "w-4/5",
      opacity: "bg-acid/[0.1]",
      border: "border-acid/[0.22]",
      textColor: "text-acid",
    },
    {
      label: "SOM",
      amount: "~£80m",
      desc: "Beachhead — UK + Western EU independent music companies. Year 1–3 target with direct sales and partner channels.",
      width: "w-3/5",
      opacity: "bg-acid/[0.16]",
      border: "border-acid/[0.3]",
      textColor: "text-acid",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col px-16 py-14">
      <Eyebrow>05 — Market</Eyebrow>
      <H1 className="text-4xl md:text-5xl mb-10">A large and growing opportunity.</H1>
      <div className="flex flex-col gap-3 mb-6">
        {tiers.map((t) => (
          <div
            key={t.label}
            className={`${t.width} border ${t.border} ${t.opacity} rounded-xl px-6 py-4 flex items-center gap-8`}
          >
            <div className="flex-shrink-0 w-12">
              <span className="text-[10px] font-mono text-ink-tertiary uppercase tracking-widest">{t.label}</span>
            </div>
            <span className={`text-2xl font-bold tabular-nums ${t.textColor} flex-shrink-0 w-28`}>
              {t.amount}
            </span>
            <p className="text-ink-secondary text-sm leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-ink-tertiary text-[10px] font-mono">
        Preliminary estimates — deeper TAM/SAM/SOM research in progress. Adjacent revenue ops opportunity extends total market significantly.
      </p>
    </div>
  );
}

// ─── Slide 6 — Competitive Landscape ──────────────────────────────────────

function CompetitiveLandscapeSlide() {
  const rows = [
    { name: "Vistex", type: "Enterprise rights management", ai: false, explain: false, missing: false, graph: false, modern: false },
    { name: "Curve / Counterpoint", type: "Royalty accounting (now selling)", ai: false, explain: false, missing: false, graph: false, modern: "partial" },
    { name: "Reprtoir / Revelator", type: "Modern music ops", ai: "partial", explain: false, missing: false, graph: "partial", modern: true },
    { name: "Debaser", type: "AI royalty operations", ai: true, explain: true, missing: true, graph: true, modern: true, highlight: true },
  ];

  const cols = [
    { key: "ai", label: "AI-native" },
    { key: "explain", label: "Explainable outputs" },
    { key: "missing", label: "Missing income detection" },
    { key: "graph", label: "Rights graph" },
    { key: "modern", label: "Modern stack" },
  ];

  const Cell = ({ val }: { val: boolean | string | undefined }) => {
    if (val === true) return <span className="text-acid text-base">✓</span>;
    if (val === "partial") return <span className="text-amber-400/70 text-xs font-mono">partial</span>;
    return <span className="text-black/20 text-base">–</span>;
  };

  return (
    <div className="w-full h-full flex flex-col px-16 py-14">
      <Eyebrow>06 — Landscape</Eyebrow>
      <H1 className="text-4xl md:text-5xl mb-10">
        Existing tools leave a gap.
      </H1>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-black/[0.06]">
              <th className="text-left text-ink-tertiary text-[10px] font-mono uppercase tracking-[0.15em] pb-3 pr-6 w-48">Company</th>
              <th className="text-left text-ink-tertiary text-[10px] font-mono uppercase tracking-[0.15em] pb-3 pr-8">Type</th>
              {cols.map((c) => (
                <th key={c.key} className="text-center text-ink-tertiary text-[10px] font-mono uppercase tracking-[0.12em] pb-3 px-4">
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.name}
                className={`border-b border-black/[0.04] ${
                  row.highlight
                    ? "bg-acid/[0.04] border-acid/[0.1]"
                    : "hover:bg-canvas-elevated"
                } transition-colors`}
              >
                <td className="py-4 pr-6">
                  <span className={`font-semibold text-sm ${row.highlight ? "text-acid" : "text-ink"}`}>
                    {row.name}
                  </span>
                  {row.highlight && (
                    <span className="ml-2 text-[9px] font-mono text-acid uppercase tracking-widest bg-acid/10 rounded-full px-2 py-0.5">us</span>
                  )}
                </td>
                <td className="py-4 pr-8 text-ink-secondary text-xs">{row.type}</td>
                {cols.map((c) => (
                  <td key={c.key} className="py-4 px-4 text-center">
                    <Cell val={row[c.key as keyof typeof row] as boolean | string | undefined} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Slide 7 — The Insight ─────────────────────────────────────────────────

function InsightSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(144,19,254,0.04) 0%, transparent 70%)" }}
      />
      <div className="relative text-center max-w-3xl">
        <Eyebrow>07 — Insight</Eyebrow>
        <H1 className="text-5xl md:text-6xl mb-8">
          The market does not need another royalty calculator.
        </H1>
        <div className="w-12 h-px bg-acid/30 mx-auto mb-8" />
        <Body className="text-xl max-w-2xl mx-auto">
          It needs a{" "}
          <span className="text-ink font-semibold">trusted AI analyst</span> that
          understands contracts, catalogues, statements and missing income —
          and can explain every answer with source-level evidence.
        </Body>
      </div>
    </div>
  );
}

// ─── Slide 8 — Product ─────────────────────────────────────────────────────

const productModules = [
  { name: "Statement Ingestion", desc: "Any format, any source." },
  { name: "Catalogue Matching", desc: "ISRCs, ISWCs, works, recordings." },
  { name: "Contract Extraction", desc: "Rates, splits, recoupment terms." },
  { name: "Anomaly Detection", desc: "Drops, duplicates, gaps, outliers." },
  { name: "Explainable Royalty Runs", desc: "Every number traced to source." },
  { name: "Missing Income Detection", desc: "Find what never arrived." },
  { name: "Rights Graph", desc: "Song → recording → contract → income." },
  { name: "Audit & Claim Workflows", desc: "Evidence-backed dispute packs." },
];

function ProductSlide() {
  return (
    <div className="w-full h-full flex flex-col px-16 py-14">
      <Eyebrow>08 — Product</Eyebrow>
      <div className="flex items-baseline gap-4 mb-10">
        <H1 className="text-4xl md:text-5xl">
          Debaser
        </H1>
        <span className="text-ink-secondary text-lg">AI Royalty Ops Platform</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {productModules.map((m, i) => (
          <div
            key={i}
            className="bg-canvas-card border border-black/[0.05] rounded-xl p-4 hover:border-acid/20 transition-colors group"
          >
            <div className="w-6 h-6 rounded-md bg-acid-dim border border-acid-border flex items-center justify-center mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-acid" />
            </div>
            <p className="text-ink text-[13px] font-semibold mb-1 tracking-tight group-hover:text-acid transition-colors">{m.name}</p>
            <p className="text-ink-tertiary text-xs leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Slide 9 — MVP Wedge ───────────────────────────────────────────────────

function MVPSlide() {
  const steps = [
    {
      n: "01",
      label: "Upload",
      items: ["Distributor statements", "CMO / DSP statements", "Catalogue data", "Contracts"],
      color: "border-black/[0.08]",
    },
    {
      n: "02",
      label: "Detect",
      items: ["Unmatched recordings", "Missing splits", "Unexplained drops", "Duplicate income"],
      color: "border-acid/[0.2]",
    },
    {
      n: "03",
      label: "Report",
      items: ["Exceptions report", "Source evidence", "AI explanations", "Claim-ready packs"],
      color: "border-acid/[0.35]",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col px-16 py-14">
      <Eyebrow>09 — MVP</Eyebrow>
      <H1 className="text-4xl md:text-5xl mb-3">
        Find royalty mistakes and missing money
      </H1>
      <H1 className="text-4xl md:text-5xl mb-12 text-acid">
        before the royalty run.
      </H1>
      <div className="grid lg:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`border ${s.color} bg-canvas-card rounded-2xl p-6 relative`}
          >
            <span className="text-ink-tertiary text-[10px] font-mono block mb-4">{s.n}</span>
            <p className="text-ink text-base font-semibold mb-4 tracking-tight">{s.label}</p>
            <ul className="space-y-2">
              {s.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-ink-secondary">
                  <div className="w-1 h-1 rounded-full bg-acid/60 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            {i < steps.length - 1 && (
              <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-6 h-6">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-black/20">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 bg-canvas-card border border-acid/10 rounded-xl p-4 flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-acid flex-shrink-0" />
        <p className="text-ink-secondary text-sm">
          Initial offer:{" "}
          <span className="text-ink font-medium">
            "Send us last quarter's royalty mess. We'll show you what's wrong."
          </span>{" "}
          — free diagnosis, converts to paid subscription.
        </p>
      </div>
    </div>
  );
}

// ─── Slide 10 — Agentic Layer ──────────────────────────────────────────────

const agents = [
  { name: "Ingestion Agent", desc: "Maps messy CSVs, PDFs and portal exports into a standard royalty schema, regardless of source format." },
  { name: "Contract Agent", desc: "Extracts splits, rates, territories, deductions, recoupment and exceptions directly from contract documents." },
  { name: "Matching Agent", desc: "Links income to ISRCs, ISWCs, artists, writers, labels, works and recordings across the rights catalogue." },
  { name: "Exception Agent", desc: "Finds duplicates, missing splits, unexplained drops, expired contracts and unmatched income rows." },
  { name: "Audit Agent", desc: "Compares expected income against received statements and prepares claim evidence by territory." },
  { name: "Ops Agent", desc: "Turns every royalty run into a prioritised action list your team can close before payments go out." },
];

function AgenticSlide() {
  return (
    <div className="w-full h-full flex flex-col px-16 py-14">
      <Eyebrow>10 — Architecture</Eyebrow>
      <H1 className="text-4xl md:text-5xl mb-10">Agentic by design.</H1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {agents.map((a, i) => (
          <div key={i} className="bg-canvas-card border border-black/[0.05] rounded-xl p-4 hover:border-acid/20 transition-colors group">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-md bg-acid-dim border border-acid-border flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-acid" />
              </div>
              <p className="text-ink text-[12px] font-semibold tracking-tight">{a.name}</p>
            </div>
            <p className="text-ink-secondary text-xs leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
      <div className="border border-black/[0.07] bg-canvas-card rounded-xl px-6 py-4">
        <p className="text-ink text-sm font-medium text-center tracking-tight">
          AI investigates.{" "}
          <span className="text-ink-secondary">Humans approve.</span>{" "}
          <span className="text-ink-tertiary">Deterministic engines calculate.</span>
        </p>
      </div>
    </div>
  );
}

// ─── Slide 11 — Business Model ─────────────────────────────────────────────

function BusinessModelSlide() {
  const tiers = [
    {
      name: "Starter",
      price: "£499–£999",
      period: "/mo",
      target: "Indie labels, single catalogue, small teams",
      features: ["1 catalogue", "Up to 5 statements/mo", "Exceptions reporting", "Email support"],
      accent: "border-black/[0.08]",
    },
    {
      name: "Growth",
      price: "£1.5k–£4k",
      period: "/mo",
      target: "Publishers, label services, multi-catalogue",
      features: ["Multiple catalogues", "Unlimited statements", "Contract extraction", "Audit workflows", "Priority support"],
      accent: "border-acid/[0.3]",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "£5k–£15k",
      period: "/mo",
      target: "Label services, large catalogues, funds",
      features: ["Unlimited scale", "Custom integrations", "Rights graph access", "Dedicated CSM", "SLA + compliance"],
      accent: "border-black/[0.08]",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col px-16 py-14">
      <Eyebrow>11 — Business Model</Eyebrow>
      <H1 className="text-4xl md:text-5xl mb-10">B2B SaaS — clear monetisation path.</H1>
      <div className="grid lg:grid-cols-3 gap-4 mb-6">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`border ${t.accent} rounded-2xl p-6 bg-canvas-card ${t.featured ? "bg-acid/[0.03]" : ""} flex flex-col gap-4`}
          >
            <div>
              {t.featured && <AcidPill>Most common</AcidPill>}
              <p className={`text-sm font-semibold mt-2 ${t.featured ? "text-acid" : "text-ink"}`}>{t.name}</p>
              <div className="flex items-baseline gap-0.5 mt-1">
                <span className="text-2xl font-bold text-ink">{t.price}</span>
                <span className="text-ink-tertiary text-xs">{t.period}</span>
              </div>
              <p className="text-ink-secondary text-xs mt-1">{t.target}</p>
            </div>
            <ul className="space-y-1.5 mt-auto">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-ink-secondary">
                  <div className={`w-1 h-1 rounded-full flex-shrink-0 ${t.featured ? "bg-acid" : "bg-black/20"}`} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-ink-tertiary text-xs font-mono">
        + Historical backfill projects (one-off revenue) · + Usage detection partnerships (future) · All pricing subject to market validation
      </p>
    </div>
  );
}

// ─── Slide 12 — Go-to-Market ───────────────────────────────────────────────

function GTMSlide() {
  const segments = [
    "Independent labels",
    "Boutique publishers",
    "Label services companies",
    "Catalogue acquisition funds",
    "Artist management companies",
    "Neighbouring rights specialists",
  ];

  return (
    <div className="w-full h-full flex flex-col px-16 py-14">
      <Eyebrow>12 — Go-to-Market</Eyebrow>
      <H1 className="text-4xl md:text-5xl mb-10">Starting where the pain is deepest.</H1>
      <div className="grid lg:grid-cols-2 gap-10 flex-1 items-start">
        <div>
          <p className="text-ink text-sm font-semibold mb-4 uppercase tracking-wider text-xs">Beachhead segments</p>
          <div className="space-y-2">
            {segments.map((s, i) => (
              <div key={i} className="flex items-center gap-3 border border-black/[0.05] rounded-lg px-4 py-2.5 bg-canvas-card">
                <div className="w-5 h-5 rounded-full bg-acid/10 border border-acid/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-acid text-[9px] font-mono">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <span className="text-ink-secondary text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="border border-acid/[0.2] bg-acid/[0.04] rounded-2xl p-6">
            <p className="text-ink-tertiary text-[10px] font-mono uppercase tracking-[0.2em] mb-3">Sales motion</p>
            <p className="text-ink text-lg font-semibold leading-snug mb-3 tracking-tight">
              "Send us last quarter's royalty mess. We'll show you what's wrong."
            </p>
            <div className="space-y-2 mt-4">
              {["Free diagnosis → converts to paid", "High-value wedge, low sales friction", "Proof of value before commitment"].map((p) => (
                <div key={p} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-acid flex-shrink-0" />
                  <span className="text-ink-secondary text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-black/[0.06] bg-canvas-card rounded-xl p-5">
            <p className="text-ink-tertiary text-[10px] font-mono uppercase tracking-[0.15em] mb-2">Why they stay</p>
            <p className="text-ink-secondary text-sm leading-relaxed">
              Once Debaser has ingested a catalogue, contracts and historical statements — switching cost is high. Royalty intelligence becomes institutional infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Slide 13 — Traction ───────────────────────────────────────────────────

function TractionSlide() {
  return (
    <div className="w-full h-full flex flex-col px-16 py-14">
      <Eyebrow>13 — Traction</Eyebrow>
      <H1 className="text-4xl md:text-5xl mb-3">
        Early stage.
      </H1>
      <H1 className="text-4xl md:text-5xl mb-10 text-ink-secondary">
        Building with conviction.
      </H1>
      <div className="grid lg:grid-cols-3 gap-4">
        {[
          {
            label: "Thesis",
            status: "Validated",
            dot: "bg-acid",
            content: "Founding thesis built from deep royalty operations research, industry interviews and direct experience with the problem space.",
          },
          {
            label: "Product",
            status: "In development",
            dot: "bg-amber-400",
            content: "Core ingestion, matching and exception detection pipeline in active development. MVP targeting design partner release.",
          },
          {
            label: "Pipeline",
            status: "Conversations active",
            dot: "bg-amber-400",
            content: "Early conversations with independent labels, label services companies and catalogue funds across UK and EU.",
          },
        ].map((t, i) => (
          <div key={i} className="border border-black/[0.06] bg-canvas-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-ink text-sm font-semibold">{t.label}</p>
              <div className="flex items-center gap-1.5">
                <div className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
                <span className="text-[10px] font-mono text-ink-tertiary">{t.status}</span>
              </div>
            </div>
            <p className="text-ink-secondary text-sm leading-relaxed">{t.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 border border-black/[0.05] bg-canvas-card rounded-xl p-5">
        <p className="text-ink-secondary text-sm">
          <span className="text-ink font-medium">Design partner programme:</span>{" "}
          We are actively recruiting 3–5 design partners from our beachhead segments to co-develop the product and validate commercial terms before formal launch.
        </p>
      </div>
    </div>
  );
}

// ─── Slide 14 — Vision ─────────────────────────────────────────────────────

function VisionSlide() {
  const phases = [
    { n: "1", label: "Royalty Intelligence", desc: "AI-powered exception detection and explainability", active: true },
    { n: "2", label: "Royalty Calculations", desc: "Deterministic engine for full royalty runs", active: false },
    { n: "3", label: "Rights Graph", desc: "Connected song → recording → contract → income", active: false },
    { n: "4", label: "Artist Portal", desc: "Transparent self-service for artists and writers", active: false },
    { n: "5", label: "Usage Detection", desc: "Match usage signals to income across platforms", active: false },
    { n: "6", label: "Direct Clearing", desc: "Semi-direct licensing and collection layer", active: false },
  ];

  return (
    <div className="w-full h-full flex flex-col px-16 py-14">
      <Eyebrow>14 — Vision</Eyebrow>
      <H1 className="text-4xl md:text-5xl mb-3">The long game.</H1>
      <Body className="text-base mb-10 max-w-xl">
        Royalty intelligence is the wedge. The endgame is the AI-native infrastructure layer for music rights, royalties and usage.
      </Body>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {phases.map((p) => (
          <div
            key={p.n}
            className={`border rounded-xl p-4 ${p.active ? "border-acid/30 bg-acid/[0.04]" : "border-black/[0.05] bg-canvas-card"}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[10px] font-mono ${p.active ? "text-acid" : "text-ink-tertiary"}`}>
                Phase {p.n}
              </span>
              {p.active && <AcidPill>Now</AcidPill>}
            </div>
            <p className={`text-sm font-semibold mb-1 ${p.active ? "text-acid" : "text-ink"}`}>{p.label}</p>
            <p className="text-ink-tertiary text-xs leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
      <div
        className="border border-acid/[0.15] rounded-xl px-6 py-4"
        style={{ background: "rgba(144,19,254,0.03)" }}
      >
        <p className="text-ink text-sm font-medium">
          Endgame:{" "}
          <span className="text-ink-secondary font-normal">
            The AI-native infrastructure layer for music rights, royalties and usage — across every territory and revenue stream.
          </span>
        </p>
      </div>
    </div>
  );
}

// ─── Slide 15 — Team ───────────────────────────────────────────────────────

function TeamSlide() {
  return (
    <div className="w-full h-full flex flex-col px-16 py-14">
      <Eyebrow>15 — Team</Eyebrow>
      <H1 className="text-4xl md:text-5xl mb-10">The team.</H1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          {/* Founder card */}
          <div className="border border-black/[0.06] bg-canvas-card rounded-2xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-acid/10 border border-acid/20 flex items-center justify-center flex-shrink-0">
                <span className="text-acid text-lg font-bold">D</span>
              </div>
              <div>
                <p className="text-ink font-semibold">David Rennick</p>
                <p className="text-ink-secondary text-xs mt-0.5">Founder & CEO</p>
              </div>
            </div>
            <p className="text-ink-secondary text-sm leading-relaxed">
              Founder with deep experience at the intersection of music, technology and product. Building Debaser to solve the royalty operations problem from the inside out.
            </p>
          </div>
          {/* Recruiting */}
          <div className="border border-black/[0.05] border-dashed bg-canvas-card rounded-2xl p-5">
            <p className="text-ink-tertiary text-[10px] font-mono uppercase tracking-[0.15em] mb-3">Recruiting</p>
            <div className="space-y-2">
              {["CTO / Head of Engineering", "Head of Royalty Operations", "Commercial Lead"].map((r) => (
                <div key={r} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-black/20 flex-shrink-0" />
                  <span className="text-ink-secondary text-sm">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="border border-black/[0.05] bg-canvas-card rounded-2xl p-6">
            <p className="text-ink-tertiary text-[10px] font-mono uppercase tracking-[0.15em] mb-4">Advisory board</p>
            <p className="text-ink-secondary text-sm leading-relaxed mb-4">
              We are building an advisory board of senior operators, royalty lawyers, DSP executives and rights data specialists.
            </p>
            <p className="text-ink-secondary text-sm">
              Target advisors span: <span className="text-ink">royalty accounting</span>, <span className="text-ink">music publishing ops</span>, <span className="text-ink">DSP licensing</span>, and <span className="text-ink">AI infrastructure</span>.
            </p>
          </div>
          <div className="border border-acid/[0.12] bg-acid/[0.03] rounded-xl p-5">
            <p className="text-ink-secondary text-sm leading-relaxed">
              <span className="text-ink font-medium">Domain advantage:</span>{" "}
              The team that understands both the royalty operations problem and modern AI architecture is rare. That combination is the moat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Slide 16 — The Ask ────────────────────────────────────────────────────

function AskSlide() {
  const useOfFunds = [
    { label: "Product & Engineering", pct: 55, color: "bg-acid" },
    { label: "Commercial & GTM", pct: 25, color: "bg-acid/50" },
    { label: "Operations & Legal", pct: 20, color: "bg-acid/25" },
  ];

  const milestones = [
    "Ship MVP with 3–5 design partners",
    "First £X ARR / paying customers",
    "Validate Growth tier pricing",
    "Build rights graph prototype",
    "Seed round ready",
  ];

  return (
    <div className="w-full h-full flex flex-col px-16 py-14">
      <Eyebrow>16 — The Ask</Eyebrow>
      <H1 className="text-4xl md:text-5xl mb-10">Raising pre-seed.</H1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div
            className="border border-acid/[0.25] rounded-2xl p-7"
            style={{ background: "rgba(144,19,254,0.03)" }}
          >
            <p className="text-ink-tertiary text-[10px] font-mono uppercase tracking-[0.2em] mb-2">Round</p>
            <p className="text-acid text-4xl font-bold mb-1">£[TBD]</p>
            <p className="text-ink-secondary text-sm">Pre-seed · SAFE or priced round</p>
            <div className="mt-4 pt-4 border-t border-black/[0.06]">
              <p className="text-ink-tertiary text-[10px] font-mono uppercase tracking-[0.15em] mb-3">Use of funds</p>
              <div className="space-y-2">
                {useOfFunds.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-black/[0.05] rounded-full overflow-hidden">
                      <div
                        className={`h-full ${f.color} rounded-full`}
                        style={{ width: `${f.pct}%` }}
                      />
                    </div>
                    <span className="text-ink-secondary text-xs w-24 flex-shrink-0">{f.label}</span>
                    <span className="text-ink text-xs font-mono w-8 text-right">{f.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="border border-black/[0.06] bg-canvas-card rounded-2xl p-6">
            <p className="text-ink-tertiary text-[10px] font-mono uppercase tracking-[0.15em] mb-4">
              What this round achieves
            </p>
            <ul className="space-y-2.5">
              {milestones.map((m, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-acid/10 border border-acid/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-acid text-[9px] font-mono">{i + 1}</span>
                  </div>
                  <span className="text-ink-secondary text-sm">{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-black/[0.05] bg-canvas-card rounded-xl p-5">
            <p className="text-ink-tertiary text-[10px] font-mono uppercase tracking-[0.15em] mb-2">Contact</p>
            <p className="text-ink text-sm font-medium">David Rennick</p>
            <a
              href="mailto:daverennick@gmail.com"
              className="text-acid text-sm hover:underline underline-offset-2"
            >
              daverennick@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Closing slide ─────────────────────────────────────────────────────────

function ClosingSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-40" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(144,19,254,0.05) 0%, transparent 70%)" }}
      />
      <div className="relative text-center max-w-3xl">
        <div className="flex items-center justify-center gap-2 mb-10">
          <GhostMark className="w-7 h-7 text-acid" />
          <span className="text-ink text-lg font-semibold">debaser</span>
        </div>
        <H1 className="text-4xl md:text-5xl mb-8">
          Music royalties are a growing, multi-billion-dollar market trapped in broken metadata, manual workflows and opaque legacy systems.
        </H1>
        <div className="w-12 h-px bg-acid/30 mx-auto mb-8" />
        <Body className="text-lg max-w-2xl mx-auto">
          We are building the AI-native royalty operations layer that{" "}
          <span className="text-ink font-medium">finds missing money</span>,{" "}
          <span className="text-ink font-medium">explains every payment</span>, and becomes{" "}
          <span className="text-acid font-medium">the rights graph of record</span>.
        </Body>
      </div>
    </div>
  );
}

// ─── Slides registry ───────────────────────────────────────────────────────

const SLIDES = [
  { id: "cover",       label: "Cover",                  Component: CoverSlide },
  { id: "problem",     label: "Problem",                Component: ProblemSlide },
  { id: "why-now",     label: "Why Now",                Component: WhyNowSlide },
  { id: "evidence",    label: "Market Failure",         Component: MarketFailureSlide },
  { id: "market",      label: "Market Size",            Component: MarketSizeSlide },
  { id: "landscape",   label: "Competitive Landscape",  Component: CompetitiveLandscapeSlide },
  { id: "insight",     label: "Insight",                Component: InsightSlide },
  { id: "product",     label: "Product",                Component: ProductSlide },
  { id: "mvp",         label: "MVP Wedge",              Component: MVPSlide },
  { id: "agentic",     label: "Agentic Layer",          Component: AgenticSlide },
  { id: "biz-model",   label: "Business Model",         Component: BusinessModelSlide },
  { id: "gtm",         label: "Go-to-Market",           Component: GTMSlide },
  { id: "traction",    label: "Traction",               Component: TractionSlide },
  { id: "vision",      label: "Vision",                 Component: VisionSlide },
  { id: "team",        label: "Team",                   Component: TeamSlide },
  { id: "ask",         label: "The Ask",                Component: AskSlide },
  { id: "closing",     label: "Closing",                Component: ClosingSlide },
];

// ─── Slide transition variants ─────────────────────────────────────────────

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 56 : -56, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.38, ease: EASE } },
  exit: (dir: number) => ({
    x: dir < 0 ? 56 : -56,
    opacity: 0,
    transition: { duration: 0.22, ease: EASE },
  }),
};

// ─── Main component ────────────────────────────────────────────────────────

export default function PitchDeck({ onClose }: { onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (idx: number, dir: number) => {
      if (idx < 0 || idx >= SLIDES.length) return;
      setDirection(dir);
      setCurrent(idx);
    },
    []
  );

  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const { Component } = SLIDES[current];
  const pct = Math.round(((current + 1) / SLIDES.length) * 100);

  return (
    <div className="fixed inset-0 z-50 bg-canvas flex flex-col" style={{ fontFamily: "var(--font-inter)" }}>
      {/* ── Header ── */}
      <div className="flex-shrink-0 flex items-center justify-between px-6 py-3 border-b border-black/[0.05] bg-canvas-subtle/60 backdrop-blur-sm">
        <div className="flex items-center gap-2.5">
          <GhostMark className="w-4 h-4 text-acid" />
          <span className="text-ink text-xs font-semibold">debaser</span>
          <div className="w-px h-3 bg-black/[0.08] mx-1" />
          <span className="text-ink-tertiary text-[11px]">June 2026 Pitch Deck</span>
        </div>

        <div className="flex items-center gap-1">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              title={s.label}
              className={`w-4 h-1 rounded-full transition-all duration-200 ${
                i === current ? "bg-acid" : "bg-black/[0.12] hover:bg-black/[0.22]"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-ink-tertiary text-[11px] font-mono">
            {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg border border-black/[0.07] flex items-center justify-center hover:border-black/[0.16] hover:bg-canvas-card transition-all text-ink-secondary hover:text-ink"
            aria-label="Close"
          >
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ── Slide area ── */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <Component />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Footer nav ── */}
      <div className="flex-shrink-0 flex items-center justify-between px-6 py-3 border-t border-black/[0.05] bg-canvas-subtle/60 backdrop-blur-sm">
        <div className="flex items-center gap-1.5 w-48">
          <div className="flex-1 h-px bg-black/[0.06] rounded-full overflow-hidden">
            <div
              className="h-full bg-acid/50 rounded-full transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-ink-tertiary text-[10px] font-mono flex-shrink-0">{pct}%</span>
        </div>

        <p className="text-ink-tertiary text-[10px] font-mono hidden sm:block">
          {SLIDES[current].label}
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={current === 0}
            className="flex items-center gap-1.5 text-xs text-ink-secondary border border-black/[0.07] rounded-lg px-3 py-1.5 hover:border-black/[0.14] hover:text-ink transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M8 10L4 6l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Prev
          </button>
          <button
            onClick={next}
            disabled={current === SLIDES.length - 1}
            className="flex items-center gap-1.5 text-xs text-ink border border-black/[0.1] rounded-lg px-3 py-1.5 bg-canvas-card hover:border-black/[0.18] hover:bg-canvas-elevated transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
