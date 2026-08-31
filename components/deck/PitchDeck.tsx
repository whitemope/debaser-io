"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/animation";
import GhostMark from "@/components/GhostMark";

// Always reflects the current month/year — no manual date bumps between updates.
const DECK_DATE = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });

// ─── Shared primitives ─────────────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide mb-5">
      {children}
    </p>
  );
}

function H1({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`font-bold text-[#1a1a1a] tracking-tight leading-[1.06] text-balance ${className}`}
    >
      {children}
    </h2>
  );
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-[#1a1a1a] leading-relaxed ${className}`}>{children}</p>
  );
}

function AcidPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center text-[10px] font-mono text-[#3D5AFE] tracking-wide bg-[#3D5AFE]/[0.08] border border-[#3D5AFE]/35 rounded-full px-2.5 py-1">
      {children}
    </span>
  );
}

// ─── Slide 1 — Cover ───────────────────────────────────────────────────────

function CoverSlide() {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-50" />
      <div className="relative w-full text-center px-5 py-10 sm:px-10 sm:py-14 lg:px-16 max-w-3xl">
        <div className="flex items-center justify-center gap-2.5 mb-14">
          <GhostMark className="w-9 h-9 text-[#1a1a1a]" />
          <span className="text-[#1a1a1a] text-2xl font-semibold tracking-tight">debaser</span>
        </div>
        <H1 className="text-3xl sm:text-5xl md:text-6xl mb-8">
          The AI royalty operations platform for the modern music rights economy.
        </H1>
        <div className="w-12 h-px bg-black/[0.1] mx-auto mb-8" />
        <p className="text-[#1a1a1a] text-sm font-mono mb-1">
          Introducing Debaser · {DECK_DATE}
        </p>
        <p className="text-[#1a1a1a] text-xs font-mono">Strictly Confidential</p>
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
  { n: "05", label: "Artist disputes", detail: "Payment questions that take days to answer. If ever." },
  { n: "06", label: "Manual reconciliation", detail: "Spreadsheet hell. Every quarter. Every time." },
];

function ProblemSlide() {
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>02. The Problem</Eyebrow>
      <div className="flex-1 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <H1 className="text-2xl sm:text-4xl md:text-5xl mb-6">
            The economy of music catalogue management is fragmented.
          </H1>
          <Body className="text-base">
            Billion-dollar catalogue funds now own hundreds of thousands of songs.
            Arts IP whales are buying at a pace the back office can't match. And
            every independent label and publisher underneath them inherits the
            same broken workflow. Just at a different scale.
          </Body>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {problems.map((p) => (
            <div
              key={p.n}
              className="bg-canvas-card border border-black/[0.05] rounded-xl p-4 hover:border-black/[0.1] transition-colors"
            >
              <span className="text-[#1a1a1a] text-[10px] font-mono block mb-2">{p.n}</span>
              <p className="text-[#1a1a1a] text-sm font-semibold mb-1 tracking-tight">{p.label}</p>
              <p className="text-[#1a1a1a] text-xs leading-relaxed">{p.detail}</p>
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
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-8 lg:px-16 lg:py-10">
      <Eyebrow>03. Why Now</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-5 max-w-xl">
        Three converging tailwinds.
      </H1>
      <div className="grid lg:grid-cols-3 gap-4">
        {[
          {
            stat: "$31.7bn",
            label: "Music revenue growing",
            detail:
              "Recorded music hit $31.7bn in 2025, up 6.4% YoY. The rights economy keeps expanding. So does the ops complexity behind it.",
            color: "text-[#3D5AFE]",
          },
          {
            stat: "×7",
            label: "Royalty complexity exploding",
            detail:
              "Streaming, UGC, short-form, sync, social, live, neighbouring rights. Each with different rules, rates and reporting standards.",
            color: "text-[#1a1a1a]",
          },
          {
            stat: "Now",
            label: "AI is finally capable",
            detail:
              "LLMs can extract, match and explain at the level royalty ops demands. But royalty systems are still mostly workflow and accounting tools.",
            color: "text-[#3D5AFE]",
          },
        ].map((t, i) => (
          <div
            key={i}
            className="border border-black/[0.06] rounded-2xl p-4 bg-canvas-card flex flex-col gap-2"
          >
            <span className={`text-3xl font-bold tracking-tight ${t.color}`}>
              {t.stat}
            </span>
            <div>
              <p className="text-[#1a1a1a] text-sm font-semibold mb-1">{t.label}</p>
              <p className="text-[#1a1a1a] text-xs leading-relaxed">{t.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 border border-black/[0.06] bg-canvas-card rounded-2xl p-4">
        <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide mb-2.5">
          Capital is already betting big on catalogues
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              name: "Recognition Music Group (ex-Hipgnosis)",
              detail: "Blackstone took the fund private for $1.6bn in 2024; Sony Music Publishing bought its 45,000-song Recognition catalogue in 2026.",
            },
            {
              name: "Primary Wave",
              detail: "Closed a $2.225bn fourth flagship fund in 2025. The largest dedicated closed-end music royalty fund raised to date.",
            },
            {
              name: "Concord",
              detail: "Backed an $850m securitisation across 1m+ songs, after acquiring Round Hill's catalogue fund for ~$469m.",
            },
            {
              name: "Pophouse",
              detail: "Raised $1.3bn in 2025 to acquire catalogues and build experiences around them.",
            },
          ].map((c) => (
            <div key={c.name}>
              <p className="text-[#1a1a1a] text-xs font-semibold mb-1 leading-snug">{c.name}</p>
              <p className="text-[#1a1a1a] text-[11px] leading-relaxed">{c.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-[#1a1a1a] text-[10px] font-mono mt-2.5">
          Sources: Billboard, Music Business Worldwide, Music Week, Variety (2024–2026).
        </p>
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
      accent: "text-[#3D5AFE]",
      dot: "bg-[#3D5AFE]",
    },
    {
      value: "€13.97bn",
      label: "CISAC creator collections",
      detail: "Global creator collection society income, CISAC 2025 Global Collections Report.",
      accent: "text-[#3D5AFE]",
      dot: "bg-[#3D5AFE]",
    },
    {
      value: "$424m",
      label: "MLC unmatched mechanicals",
      detail:
        "Received by the MLC in historical unmatched mechanical royalties from DSPs. Money that couldn't find its owner.",
      accent: "text-red-400",
      dot: "bg-red-400",
    },
    {
      value: "28% → 90%",
      label: "Accuracy improvement",
      detail:
        "UK club royalty research found only 28% correctly distributed to creators. Recognition tech improves this to ~90%.",
      accent: "text-amber-400",
      dot: "bg-amber-400",
    },
  ];

  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>04. Evidence</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-1">
        Rights income exists.
      </H1>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-10 text-[#1a1a1a]">
        The allocation is broken.
      </H1>

      {/* Mobile: simple stacked list. A horizontal spine doesn't read at one-column width. */}
      <div className="flex flex-col gap-3 sm:hidden">
        {stats.map((s, i) => (
          <div key={i} className="border border-black/[0.06] rounded-xl p-4 flex items-start gap-3">
            <div className={`w-2.5 h-2.5 rounded-full ${s.dot} flex-shrink-0 mt-2`} />
            <div>
              <span className={`text-2xl font-bold tabular-nums tracking-tight block ${s.accent}`}>
                {s.value}
              </span>
              <p className="text-[#1a1a1a] text-xs font-semibold mt-1.5 mb-1">{s.label}</p>
              <p className="text-[#1a1a1a] text-[11px] leading-relaxed">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop/tablet: infographic spine — four measured points along a single line */}
      <div className="relative mt-6 hidden sm:block">
        <div className="absolute left-0 right-0 top-0 h-px bg-black/[0.1]" />
        <div className="grid grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className={`w-2.5 h-2.5 rounded-full ${s.dot} -mt-[5px] mb-5 ring-4 ring-canvas flex-shrink-0`} />
              <span className={`text-3xl font-bold tabular-nums tracking-tight ${s.accent}`}>
                {s.value}
              </span>
              <p className="text-[#1a1a1a] text-xs font-semibold mt-2 mb-1.5">{s.label}</p>
              <p className="text-[#1a1a1a] text-[11px] leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[#1a1a1a] text-xs font-mono mt-8">
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
      desc: "Global royalty operations. Software, services and labour across all labels, publishers, CMOs, distributors and management companies worldwide.",
      width: "sm:w-full",
      opacity: "bg-[#3D5AFE]/[0.06]",
      border: "border-[#3D5AFE]/35",
      textColor: "text-[#3D5AFE]",
      ringSize: 46,
    },
    {
      label: "SAM",
      amount: "~$2.5bn",
      desc: "Mid-market and independent labels, publishers, catalogue funds and management in US, UK, EU, AU. Annual software + outsourced services spend.",
      width: "sm:w-4/5",
      opacity: "bg-[#3D5AFE]/[0.1]",
      border: "border-[#3D5AFE]/35",
      textColor: "text-[#3D5AFE]",
      ringSize: 32,
    },
    {
      label: "SOM",
      amount: "~£80m",
      desc: "Beachhead. UK + Western EU independent music companies. Year 1–3 target with direct sales and partner channels.",
      width: "sm:w-3/5",
      opacity: "bg-[#3D5AFE]/[0.16]",
      border: "border-[#3D5AFE]/35",
      textColor: "text-[#3D5AFE]",
      ringSize: 18,
    },
  ];

  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-8 lg:px-16 lg:py-12">
      <Eyebrow>05. Market</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-2">A large and growing opportunity.</H1>
      <p className="text-[#1a1a1a] text-xs font-mono mb-4">
        TAM = Total Addressable Market, the whole prize · SAM = Serviceable Addressable Market, who we can realistically
        reach · SOM = Serviceable Obtainable Market, what we can capture first.
      </p>
      <div className="flex flex-col gap-2.5 mb-3">
        {tiers.map((t) => (
          <div
            key={t.label}
            className={`w-full ${t.width} border ${t.border} ${t.opacity} rounded-xl px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8`}
          >
            <div className="flex items-baseline gap-3 sm:contents">
              <span className="text-[10px] font-mono text-[#1a1a1a] tracking-wide flex-shrink-0 sm:w-12">{t.label}</span>
              <span className={`text-xl sm:text-2xl font-bold tabular-nums ${t.textColor} flex-shrink-0 sm:w-28`}>
                {t.amount}
              </span>
            </div>
            <p className="text-[#1a1a1a] text-sm leading-relaxed flex-1">{t.desc}</p>
            <div className="hidden sm:flex flex-shrink-0 w-14 h-14 items-center justify-center">
              <div
                className={`rounded-full border ${t.border} ${t.opacity}`}
                style={{ width: t.ringSize, height: t.ringSize }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-[#1a1a1a] text-[10px] font-mono">
        Preliminary estimates. Deeper TAM/SAM/SOM research in progress. Adjacent revenue ops opportunity extends total market significantly.
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
    { name: "Blokur (Music Reports)", type: "AI metadata & rights matching", ai: true, explain: "partial", missing: false, graph: "partial", modern: true },
    { name: "Exactuals (PaymentHub)", type: "Royalty payments infrastructure", ai: false, explain: false, missing: false, graph: false, modern: "partial" },
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
    if (val === true) return <span className="text-[#3D5AFE] text-base">✓</span>;
    if (val === "partial") return <span className="text-amber-400/70 text-xs font-mono">partial</span>;
    return <span className="text-black/20 text-base">–</span>;
  };

  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-8 lg:px-16 lg:py-12">
      <Eyebrow>06. Landscape</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-6">
        Existing tools leave a gap.
      </H1>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="border-b border-black/[0.06]">
              <th className="text-left text-[#1a1a1a] text-[10px] font-mono tracking-wide pb-2 pr-6 w-48">Company</th>
              <th className="text-left text-[#1a1a1a] text-[10px] font-mono tracking-wide pb-2 pr-8">Type</th>
              {cols.map((c) => (
                <th key={c.key} className="text-center text-[#1a1a1a] text-[10px] font-mono tracking-wide pb-2 px-4">
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
                    ? "bg-[#3D5AFE]/[0.04] border-[#3D5AFE]/35"
                    : "hover:bg-canvas-elevated"
                } transition-colors`}
              >
                <td className="py-2.5 pr-6">
                  <span className={`font-semibold text-sm ${row.highlight ? "text-[#3D5AFE]" : "text-[#1a1a1a]"}`}>
                    {row.name}
                  </span>
                  {row.highlight && (
                    <span className="ml-2 text-[9px] font-mono text-[#3D5AFE] tracking-wide bg-[#3D5AFE]/10 rounded-full px-2 py-0.5">us</span>
                  )}
                </td>
                <td className="py-2.5 pr-8 text-[#1a1a1a] text-xs">{row.type}</td>
                {cols.map((c) => (
                  <td key={c.key} className="py-2.5 px-4 text-center">
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
    <div className="w-full min-h-full flex flex-col items-center justify-center px-5 py-10 sm:px-10 sm:py-14 lg:px-16 relative overflow-hidden">
      <div className="relative w-full text-center max-w-3xl">
        <Eyebrow>07. Insight</Eyebrow>
        <H1 className="text-3xl sm:text-5xl md:text-6xl mb-8">
          The market does not need another royalty calculator.
        </H1>
        <div className="w-12 h-px bg-[#3D5AFE]/30 mx-auto mb-8" />
        <Body className="text-xl max-w-2xl mx-auto">
          It needs a{" "}
          <span className="text-[#1a1a1a] font-semibold">trusted AI analyst</span> that
          understands contracts, catalogues, statements and missing income, and
          explains every answer with source-level evidence.
        </Body>
      </div>
    </div>
  );
}

// ─── Slide 8 — Product & Vision ─────────────────────────────────────────────

function ProductSlide() {
  const phases = [
    { n: "1", label: "Royalty Intelligence", desc: "AI-powered exception detection and explainability", active: true },
    { n: "2", label: "Royalty Calculations", desc: "Deterministic engine for full royalty runs", active: false },
    { n: "3", label: "Rights Graph", desc: "Connected song → recording → contract → income", active: false },
    { n: "4", label: "Artist Portal", desc: "Transparent self-service for artists and writers", active: false },
    { n: "5", label: "Usage Detection", desc: "Match usage signals to income across platforms", active: false },
    { n: "6", label: "Direct Clearing", desc: "Semi-direct licensing and collection layer", active: false },
  ];

  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-8 lg:px-16 lg:py-12">
      <Eyebrow>08. Product</Eyebrow>
      <div className="flex items-baseline gap-4 mb-3">
        <H1 className="text-2xl sm:text-4xl md:text-5xl">Debaser</H1>
        <span className="text-[#1a1a1a] text-lg">the long game.</span>
      </div>
      <Body className="text-base mb-6 max-w-xl">
        Royalty intelligence is the wedge. The product we ship first. The endgame is the
        AI-native infrastructure layer for music rights, royalties and usage.
      </Body>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
        {phases.map((p) => (
          <div
            key={p.n}
            className={`border rounded-xl p-4 ${p.active ? "border-[#3D5AFE]/35 bg-[#3D5AFE]/[0.04]" : "border-black/[0.05] bg-canvas-card"}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[10px] font-mono ${p.active ? "text-[#3D5AFE]" : "text-[#1a1a1a]"}`}>
                Phase {p.n}
              </span>
              {p.active && <AcidPill>Now</AcidPill>}
            </div>
            <p className={`text-sm font-semibold mb-1 ${p.active ? "text-[#3D5AFE]" : "text-[#1a1a1a]"}`}>{p.label}</p>
            <p className="text-[#1a1a1a] text-xs leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
      <div
        className="border border-[#3D5AFE]/35 rounded-xl px-6 py-4"
        style={{ background: "rgba(61,90,254,0.05)" }}
      >
        <p className="text-[#1a1a1a] text-sm font-medium">
          Endgame:{" "}
          <span className="text-[#1a1a1a] font-normal">
            The AI-native infrastructure layer for music rights, royalties and usage. Across every territory and revenue stream.
          </span>
        </p>
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
      color: "border-[#3D5AFE]/35",
    },
    {
      n: "03",
      label: "Report",
      items: ["Exceptions report", "Source evidence", "AI explanations", "Claim-ready packs"],
      color: "border-[#3D5AFE]/35",
    },
  ];

  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>09. MVP</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-3">
        Our MVP: Find royalty mistakes and missing money
      </H1>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-12">
        before the royalty run.
      </H1>
      <div className="grid lg:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`border ${s.color} bg-canvas-card rounded-2xl p-6 relative`}
          >
            <span className="text-[#1a1a1a] text-[10px] font-mono block mb-4">{s.n}</span>
            <p className="text-[#1a1a1a] text-base font-semibold mb-4 tracking-tight">{s.label}</p>
            <ul className="space-y-2">
              {s.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-[#1a1a1a]">
                  <div className="w-1 h-1 rounded-full bg-[#3D5AFE]/60 flex-shrink-0" />
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
      <div className="mt-6 bg-canvas-card border border-[#3D5AFE]/35 rounded-xl p-4 flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-[#3D5AFE] flex-shrink-0" />
        <p className="text-[#1a1a1a] text-sm">
          Initial offer:{" "}
          <span className="text-[#1a1a1a] font-medium">
            "Send us last quarter's royalty mess. We'll show you what's wrong."
          </span>{" "}
          Free diagnosis. Converts to paid subscription.
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
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>10. Architecture</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-10">Agentic by design.</H1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {agents.map((a, i) => (
          <div key={i} className="bg-canvas-card border border-black/[0.05] rounded-xl p-4 hover:border-[#3D5AFE]/35 transition-colors group">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-md bg-[#3D5AFE]/10 border border-[#3D5AFE]/30 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-[#3D5AFE]" />
              </div>
              <p className="text-[#1a1a1a] text-[12px] font-semibold tracking-tight">{a.name}</p>
            </div>
            <p className="text-[#1a1a1a] text-xs leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
      <div className="border border-black/[0.07] bg-canvas-card rounded-xl px-6 py-4">
        <p className="text-[#1a1a1a] text-sm font-medium text-center tracking-tight">
          AI investigates.{" "}
          <span className="text-[#1a1a1a]">Humans approve.</span>{" "}
          <span className="text-[#1a1a1a]">Deterministic engines calculate.</span>
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
      accent: "border-[#3D5AFE]/35",
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
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>11. Business Model</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-10">B2B SaaS. Clear monetisation path.</H1>
      <div className="grid lg:grid-cols-3 gap-4 mb-6">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`border ${t.accent} rounded-2xl p-6 bg-canvas-card ${t.featured ? "bg-[#3D5AFE]/[0.03]" : ""} flex flex-col gap-4`}
          >
            <div>
              {t.featured && <AcidPill>Most common</AcidPill>}
              <p className={`text-sm font-semibold mt-2 ${t.featured ? "text-[#3D5AFE]" : "text-[#1a1a1a]"}`}>{t.name}</p>
              <div className="flex items-baseline gap-0.5 mt-1">
                <span className="text-2xl font-bold text-[#1a1a1a]">{t.price}</span>
                <span className="text-[#1a1a1a] text-xs">{t.period}</span>
              </div>
              <p className="text-[#1a1a1a] text-xs mt-1">{t.target}</p>
            </div>
            <ul className="space-y-1.5 mt-auto">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-[#1a1a1a]">
                  <div className={`w-1 h-1 rounded-full flex-shrink-0 ${t.featured ? "bg-[#3D5AFE]" : "bg-black/20"}`} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-[#1a1a1a] text-xs font-mono">
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
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>12. Go-to-Market</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-10">Starting where the pain is deepest.</H1>
      <div className="grid lg:grid-cols-2 gap-10 flex-1 items-start">
        <div>
          <p className="text-[#1a1a1a] text-sm font-semibold mb-4 tracking-wide text-xs">Beachhead segments</p>
          <div className="space-y-2">
            {segments.map((s, i) => (
              <div key={i} className="flex items-center gap-3 border border-black/[0.05] rounded-lg px-4 py-2.5 bg-canvas-card">
                <div className="w-5 h-5 rounded-full bg-[#3D5AFE]/10 border border-[#3D5AFE]/35 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#3D5AFE] text-[9px] font-mono">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <span className="text-[#1a1a1a] text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="border border-[#3D5AFE]/35 bg-[#3D5AFE]/[0.04] rounded-2xl p-6">
            <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide mb-3">Sales motion</p>
            <p className="text-[#1a1a1a] text-lg font-semibold leading-snug mb-3 tracking-tight">
              "Send us last quarter's royalty mess. We'll show you what's wrong."
            </p>
            <div className="space-y-2 mt-4">
              {["Free diagnosis → converts to paid", "High-value wedge, low sales friction", "Proof of value before commitment"].map((p) => (
                <div key={p} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#3D5AFE] flex-shrink-0" />
                  <span className="text-[#1a1a1a] text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-black/[0.06] bg-canvas-card rounded-xl p-5">
            <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide mb-2">Why they stay</p>
            <p className="text-[#1a1a1a] text-sm leading-relaxed">
              Once Debaser has ingested a catalogue, contracts and historical statements, switching cost is high. Royalty intelligence becomes institutional infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Slide 13 — Traction ───────────────────────────────────────────────────

function TractionSlide() {
  const milestones = [
    {
      period: "Q1–Q2 2026",
      label: "Thesis validated",
      detail: "Founding thesis built from deep royalty ops research, industry interviews and direct experience with the problem.",
      status: "done",
    },
    {
      period: "Q3 2026",
      label: "Product in development",
      detail: "Core ingestion, matching and exception detection pipeline in active build.",
      status: "now",
    },
    {
      period: "Q4 2026",
      label: "Design partners onboard",
      detail: "3–5 design partners from our beachhead segments co-developing the product and terms.",
      status: "next",
    },
    {
      period: "Q1 2027",
      label: "MVP release",
      detail: "Design partner release ships. First exception reports delivered live.",
      status: "next",
    },
    {
      period: "Q2 2027",
      label: "Formal launch",
      detail: "General release, first paying customers, Growth tier pricing validated.",
      status: "next",
    },
  ];

  const reachedCount = milestones.filter((m) => m.status !== "next").length;
  const progressPct = ((reachedCount - 0.5) / milestones.length) * 100;

  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>13. Traction</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-3">
        Early stage.
      </H1>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-12 text-[#1a1a1a]">
        Building with conviction.
      </H1>

      {/* Mobile: vertical timeline, one milestone per row */}
      <div className="flex flex-col sm:hidden">
        {milestones.map((m, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className={`w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 ${
                  m.status === "done"
                    ? "bg-[#3D5AFE] border-[#3D5AFE]/35"
                    : m.status === "now"
                    ? "bg-canvas border-[#3D5AFE]/35"
                    : "bg-canvas border-black/20"
                }`}
              />
              {i < milestones.length - 1 && (
                <div className={`w-px flex-1 mt-1 ${m.status === "next" ? "bg-black/[0.08]" : "bg-[#3D5AFE]"}`} />
              )}
            </div>
            <div className="pb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#1a1a1a] text-[10px] font-mono">{m.period}</span>
                {m.status === "now" && <AcidPill>Now</AcidPill>}
              </div>
              <p className={`text-sm font-semibold mb-1 ${m.status === "next" ? "text-[#1a1a1a]" : "text-[#1a1a1a]"}`}>
                {m.label}
              </p>
              <p className="text-[#1a1a1a] text-xs leading-relaxed">{m.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop/tablet: horizontal timeline with a progress spine */}
      <div className="flex-1 hidden sm:flex flex-col justify-center">
        <div className="relative">
          <div className="absolute top-[7px] left-0 right-0 h-px bg-black/[0.08]" />
          <div
            className="absolute top-[7px] left-0 h-px bg-[#3D5AFE]"
            style={{ width: `${progressPct}%` }}
          />
          <div className="grid grid-cols-5 gap-4 relative">
            {milestones.map((m, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className={`w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 ${
                      m.status === "done"
                        ? "bg-[#3D5AFE] border-[#3D5AFE]/35"
                        : m.status === "now"
                        ? "bg-canvas border-[#3D5AFE]/35"
                        : "bg-canvas border-black/20"
                    }`}
                  />
                  {m.status === "now" && <AcidPill>Now</AcidPill>}
                </div>
                <span className="text-[#1a1a1a] text-[10px] font-mono mb-1.5">{m.period}</span>
                <p className={`text-sm font-semibold mb-1.5 ${m.status === "next" ? "text-[#1a1a1a]" : "text-[#1a1a1a]"}`}>
                  {m.label}
                </p>
                <p className="text-[#1a1a1a] text-xs leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 border border-black/[0.05] bg-canvas-card rounded-xl p-5">
        <p className="text-[#1a1a1a] text-sm">
          <span className="text-[#1a1a1a] font-medium">Design partner programme:</span>{" "}
          We are actively recruiting 3–5 design partners from our beachhead segments to co-develop the product and validate commercial terms before formal launch.
        </p>
      </div>
    </div>
  );
}

// ─── Slide 14 — Team ────────────────────────────────────────────────────────

function TeamSlide() {
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>14. Team</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-10">The team.</H1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          {/* Founder card */}
          <div className="border border-black/[0.06] bg-canvas-card rounded-2xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#3D5AFE]/10 border border-[#3D5AFE]/35 flex items-center justify-center flex-shrink-0">
                <span className="text-[#3D5AFE] text-lg font-bold">D</span>
              </div>
              <div>
                <p className="text-[#1a1a1a] font-semibold">David Rennick</p>
                <p className="text-[#1a1a1a] text-xs mt-0.5">Founder & CEO</p>
              </div>
            </div>
            <p className="text-[#1a1a1a] text-sm leading-relaxed">
              Founder with deep experience at the intersection of music, technology and product. Building Debaser to solve the royalty operations problem from the inside out.
            </p>
          </div>
          {/* Recruiting */}
          <div className="border border-black/[0.05] border-dashed bg-canvas-card rounded-2xl p-5">
            <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide mb-3">Recruiting</p>
            <div className="space-y-2">
              {["CTO / Head of Engineering", "Head of Royalty Operations", "Commercial Lead"].map((r) => (
                <div key={r} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-black/20 flex-shrink-0" />
                  <span className="text-[#1a1a1a] text-sm">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="border border-black/[0.05] bg-canvas-card rounded-2xl p-6">
            <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide mb-4">Advisory board</p>
            <p className="text-[#1a1a1a] text-sm leading-relaxed mb-4">
              We are building an advisory board of senior operators, royalty lawyers, DSP executives and rights data specialists.
            </p>
            <p className="text-[#1a1a1a] text-sm">
              Target advisors span: <span className="text-[#1a1a1a]">royalty accounting</span>, <span className="text-[#1a1a1a]">music publishing ops</span>, <span className="text-[#1a1a1a]">DSP licensing</span>, and <span className="text-[#1a1a1a]">AI infrastructure</span>.
            </p>
          </div>
          <div className="border border-[#3D5AFE]/35 bg-[#3D5AFE]/[0.03] rounded-xl p-5">
            <p className="text-[#1a1a1a] text-sm leading-relaxed">
              <span className="text-[#1a1a1a] font-medium">Domain advantage:</span>{" "}
              The team that understands both the royalty operations problem and modern AI architecture is rare. That combination is the moat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Slide 15 — The Ask ────────────────────────────────────────────────────

function AskSlide() {
  const useOfFunds = [
    { label: "Product & Engineering", pct: 55, amount: "£2.75m", color: "bg-[#3D5AFE]" },
    { label: "Commercial & GTM", pct: 25, amount: "£1.25m", color: "bg-[#3D5AFE]/50" },
    { label: "Operations & Legal", pct: 20, amount: "£1.0m", color: "bg-[#3D5AFE]/25" },
  ];

  const horizon = [
    {
      year: "Year 1",
      period: "Months 1–12",
      spend: "~£3.0m",
      items: [
        "Ship MVP with 3–5 design partners",
        "Hire CTO / Head of Engineering + Head of Royalty Operations",
        "First paying customers on Starter / Growth tiers",
      ],
    },
    {
      year: "Year 2",
      period: "Months 13–24",
      spend: "~£2.0m",
      items: [
        "Hire Commercial Lead, scale GTM motion",
        "Build rights graph prototype (Phase 3)",
        "Grow ARR across beachhead segments, seed round ready",
      ],
    },
  ];

  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-8 lg:px-16 lg:py-11">
      <Eyebrow>15. The Ask</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-6">Raising pre-seed.</H1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-3">
          <div
            className="border border-[#3D5AFE]/35 rounded-2xl p-6"
            style={{ background: "rgba(61,90,254,0.05)" }}
          >
            <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide mb-2">Round</p>
            <p className="text-[#3D5AFE] text-4xl font-bold mb-1">£5m</p>
            <p className="text-[#1a1a1a] text-sm">Pre-seed · SAFE or priced round · 24-month runway</p>
            <div className="mt-3 pt-3 border-t border-black/[0.06]">
              <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide mb-3">Use of funds</p>
              <div className="space-y-3 sm:space-y-2.5">
                {useOfFunds.map((f) => (
                  <div key={f.label} className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                    <div className="flex items-center justify-between sm:contents">
                      <span className="text-[#1a1a1a] text-xs sm:w-28 sm:flex-shrink-0 sm:order-2">{f.label}</span>
                      <span className="text-[#1a1a1a] text-xs font-mono sm:w-14 sm:text-right sm:flex-shrink-0 sm:order-3">{f.amount}</span>
                    </div>
                    <div className="flex-1 h-1.5 bg-black/[0.05] rounded-full overflow-hidden sm:order-1">
                      <div
                        className={`h-full ${f.color} rounded-full`}
                        style={{ width: `${f.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border border-black/[0.05] bg-canvas-card rounded-xl p-5">
            <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide mb-2">Contact</p>
            <p className="text-[#1a1a1a] text-sm font-medium">David Rennick</p>
            <a
              href="mailto:daverennick@gmail.com"
              className="text-[#3D5AFE] text-sm hover:underline underline-offset-2"
            >
              daverennick@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {horizon.map((h) => (
            <div key={h.year} className="border border-black/[0.06] bg-canvas-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[#1a1a1a] text-sm font-semibold">
                  {h.year} <span className="text-[#1a1a1a] font-normal text-xs">· {h.period}</span>
                </p>
                <span className="text-[#3D5AFE] text-xs font-mono">{h.spend}</span>
              </div>
              <ul className="space-y-2">
                {h.items.map((m, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-[#3D5AFE]/60 flex-shrink-0 mt-1.5" />
                    <span className="text-[#1a1a1a] text-sm">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Closing slide ─────────────────────────────────────────────────────────

function ClosingSlide() {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center px-5 py-10 sm:px-10 sm:py-14 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-40" />
      <div className="relative w-full text-center max-w-3xl">
        <div className="flex items-center justify-center gap-2 mb-10">
          <GhostMark className="w-7 h-7 text-[#1a1a1a]" />
          <span className="text-[#1a1a1a] text-lg font-semibold">debaser</span>
        </div>
        <H1 className="text-2xl sm:text-4xl md:text-5xl mb-8">
          Music royalties are a growing, multi-billion-dollar market trapped in broken metadata, manual workflows and opaque legacy systems.
        </H1>
        <div className="w-12 h-px bg-[#3D5AFE]/30 mx-auto mb-8" />
        <Body className="text-lg max-w-2xl mx-auto">
          We are building the AI-native royalty operations layer that{" "}
          <span className="text-[#1a1a1a] font-medium">finds missing money</span>,{" "}
          <span className="text-[#1a1a1a] font-medium">explains every payment</span>, and becomes{" "}
          <span className="text-[#3D5AFE] font-medium">the rights graph of record</span>.
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
  { id: "product",     label: "Product & Vision",       Component: ProductSlide },
  { id: "mvp",         label: "MVP Wedge",              Component: MVPSlide },
  { id: "agentic",     label: "Agentic Layer",          Component: AgenticSlide },
  { id: "biz-model",   label: "Business Model",         Component: BusinessModelSlide },
  { id: "gtm",         label: "Go-to-Market",           Component: GTMSlide },
  { id: "traction",    label: "Traction",               Component: TractionSlide },
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

  return (
    <div className="fixed inset-0 z-50 bg-canvas flex flex-col" style={{ fontFamily: "var(--font-inter)" }}>
      {/* ── Header ── */}
      <div className="flex-shrink-0 flex items-center justify-between gap-3 px-3 sm:px-6 h-14 sm:h-16 border-b border-black/[0.05] bg-canvas-subtle/60 backdrop-blur-sm">
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
          <a href="/music-rights-ai-rails" className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            <GhostMark className="w-5 h-5 sm:w-6 sm:h-6 text-[#1a1a1a]" />
            <span className="hidden sm:inline text-[#1a1a1a] text-base font-semibold">debaser</span>
          </a>
          <div className="hidden sm:block w-px h-4 bg-black/[0.08] mx-1 flex-shrink-0" />
          <span className="text-[#1a1a1a] text-xs sm:text-sm truncate min-w-0">
            Debaser (Music Rights AI Rails)
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <span className="text-[#1a1a1a] text-xs sm:text-sm font-mono whitespace-nowrap">
            {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
          <button
            onClick={onClose}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-black/[0.07] flex items-center justify-center hover:border-black/[0.16] hover:bg-canvas-card transition-all text-[#1a1a1a] hover:text-[#1a1a1a] flex-shrink-0"
            aria-label="Close"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ── Slide area — scrolls internally, the page itself never does ── */}
      <div className="flex-1 relative overflow-hidden bg-black/[0.03] sm:p-4 lg:p-6">
        <div className="relative w-full h-full sm:max-w-[2000px] sm:mx-auto sm:rounded-xl sm:border border-black/[0.06] bg-canvas sm:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 overflow-y-auto overflow-x-hidden overscroll-contain"
            >
              <Component />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Footer nav ── */}
      <div className="flex-shrink-0 flex items-center justify-between gap-3 px-3 sm:px-6 h-14 sm:h-16 border-t border-black/[0.05] bg-canvas-subtle/60 backdrop-blur-sm">
        <p className="text-[#1a1a1a] text-xs sm:text-sm font-mono truncate min-w-0 flex-1">
          {SLIDES[current].label}
        </p>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous slide"
            className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 text-[#1a1a1a] border border-black/[0.07] rounded-lg hover:border-black/[0.14] hover:text-[#1a1a1a] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M8 10L4 6l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={next}
            disabled={current === SLIDES.length - 1}
            aria-label="Next slide"
            className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 text-[#1a1a1a] border border-black/[0.1] rounded-lg bg-canvas-card hover:border-black/[0.18] hover:bg-canvas-elevated transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
