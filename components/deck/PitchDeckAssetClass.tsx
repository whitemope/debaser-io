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
    <h2 className={`font-bold text-[#1a1a1a] tracking-tight leading-[1.06] text-balance ${className}`}>
      {children}
    </h2>
  );
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[#1a1a1a] leading-relaxed ${className}`}>{children}</p>;
}

function AcidPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center text-[10px] font-mono text-[#3D5AFE] tracking-wide bg-[#3D5AFE]/[0.08] border border-[#3D5AFE]/35 rounded-full px-2.5 py-1">
      {children}
    </span>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-mono text-[#1a1a1a] bg-canvas-card border border-black/[0.06] rounded-full px-3 py-1.5">
      {children}
    </span>
  );
}

function AgentNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-[#3D5AFE]/35 rounded-xl px-5 py-4 flex items-start gap-3" style={{ background: "rgba(61,90,254,0.05)" }}>
      <div className="w-1.5 h-1.5 rounded-full bg-[#3D5AFE] flex-shrink-0 mt-1.5" />
      <p className="text-[#1a1a1a] text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function LifecycleStrip({ steps, activeIndex }: { steps: string[]; activeIndex?: number }) {
  return (
    <div className="flex items-center flex-wrap gap-x-2 gap-y-2">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-2">
          <span
            className={`text-[10px] sm:text-[11px] font-mono tracking-wide px-2.5 py-1 rounded-full border ${
              i === activeIndex
                ? "text-[#3D5AFE] border-[#3D5AFE]/35 bg-[#3D5AFE]/[0.06]"
                : "text-[#1a1a1a] border-black/[0.08]"
            }`}
          >
            {s}
          </span>
          {i < steps.length - 1 && (
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="text-black/20 flex-shrink-0">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Slide 1 — Debaser ──────────────────────────────────────────────────────

function CoverSlide() {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-40" />
      <div className="relative w-full text-center px-5 py-10 sm:px-10 sm:py-14 lg:px-16 max-w-4xl">
        <p className="text-[#1a1a1a] text-xs sm:text-sm font-mono tracking-wide mb-10">
          Music rights are becoming an asset class.{" "}
          <span className="text-[#1a1a1a]">The infrastructure hasn&apos;t caught up.</span>
        </p>

        <div className="flex items-center justify-center gap-3 mb-8">
          <GhostMark className="w-10 h-10 sm:w-14 sm:h-14 text-[#1a1a1a]" />
          <span className="text-[#1a1a1a] text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">debaser</span>
        </div>

        <Body className="text-base sm:text-lg max-w-2xl mx-auto mb-12">
          The operating system for buying and running music catalogues. From diligence
          and valuation through to acquisition, administration and optimisation.
        </Body>

        <div className="flex flex-col items-center gap-4">
          <LifecycleStrip steps={["UNDERSTAND", "BUY", "RUN", "GROW"]} />
          <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide">
            Run by a fleet of specialised AI agents, not a spreadsheet.
          </p>
        </div>

        <div className="w-12 h-px bg-black/[0.1] mx-auto my-10" />
        <p className="text-[#1a1a1a] text-sm font-mono mb-1">Investor Overview · {DECK_DATE}</p>
        <p className="text-[#1a1a1a] text-xs font-mono">Strictly Confidential</p>
      </div>
    </div>
  );
}

// ─── Slide 2 — The Market Is Moving Down ───────────────────────────────────

function MarketSlide() {
  const buyers = [
    "MusicBird",
    "AntiFragile Equity Partners",
    "BEAT Music Fund",
    "Exceleration Music",
    "MPRS",
    "Independent labels and publishers",
  ];
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>02 — The Market</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-10 max-w-2xl">
        The next wave of catalogue investment is smaller, faster and more frequent.
      </H1>

      <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
        <div>
          <p className="text-[#1a1a1a] text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-2">
            $100K <span className="text-[#1a1a1a] font-normal">&mdash;</span> $3M
          </p>
          <p className="text-[#3D5AFE] text-xs font-mono tracking-wide">THE NEW MUSIC IP MID-MARKET</p>
        </div>
        <Body className="text-sm sm:text-base">
          The first music rights boom was defined by billion-dollar funds buying
          superstar catalogues. The next is being driven by thousands of smaller
          assets. Sub-$1m and $1m&ndash;$5m catalogues are now the segments where the
          industry expects the strongest growth in deal activity. New specialist funds,
          indie labels, distributors, family offices and music entrepreneurs are
          increasingly acquiring rights that were previously too small for
          institutional capital.
        </Body>
      </div>

      <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide mb-3">Buyer types entering the market</p>
      <div className="flex flex-wrap gap-2 mb-auto">
        {buyers.map((b) => (
          <Chip key={b}>{b}</Chip>
        ))}
      </div>

      <p className="text-[#1a1a1a] text-[10px] font-mono mt-8">
        Source: Duetti / Billboard Music Finance Index, H2 2026.
      </p>
    </div>
  );
}

// ─── Slide 3 — Every Deal Starts With A Mess ───────────────────────────────

function MessSlide() {
  const mess = [
    { label: "PDFs", r: -6 },
    { label: "CSVs", r: 4 },
    { label: "Contracts", r: -2 },
    { label: "PROs", r: 7 },
    { label: "DSPs", r: -8 },
    { label: "Metadata", r: 3 },
    { label: "Spreadsheets", r: -4 },
  ];
  const items = [
    "Years of royalty statements",
    "Multiple royalty sources and formats",
    "Publishing, master and neighbouring rights",
    "Contracts and ownership splits",
    "Metadata across thousands of recordings",
    "Collection and distribution relationships",
    "Historic earnings and forecasts",
  ];
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>03 — The Problem</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-3">Music IP is investable.</H1>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-10">Music data isn&apos;t.</H1>

      <div className="grid lg:grid-cols-2 gap-10 mb-8">
        <div>
          <p className="text-[#1a1a1a] text-xs mb-4">To acquire a catalogue today, a buyer has to piece together:</p>
          <ul className="space-y-2">
            {items.map((it) => (
              <li key={it} className="flex items-start gap-2.5">
                <div className="w-1 h-1 rounded-full bg-black/25 flex-shrink-0 mt-2" />
                <span className="text-[#1a1a1a] text-sm leading-relaxed">{it}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#1a1a1a] text-sm mt-4">
            Then hand that data between analysts, accountants, lawyers, distributors
            and royalty administrators. After acquisition, another stack of tools and
            service providers takes over.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center border border-dashed border-black/[0.1] rounded-2xl px-6 py-10 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8 max-w-sm">
            {mess.map((m) => (
              <span
                key={m.label}
                className="text-[11px] font-mono text-[#1a1a1a] border border-black/[0.09] bg-canvas-card rounded-md px-2.5 py-1.5"
                style={{ transform: `rotate(${m.r}deg)` }}
              >
                {m.label}
              </span>
            ))}
          </div>
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none" className="text-black/20 mb-8">
            <path d="M7 1v16M1 11l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="border border-black/[0.12] rounded-xl px-6 py-3 bg-canvas-card">
            <span className="text-[#1a1a1a] text-sm font-semibold tracking-tight">Investment decision</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-[#1a1a1a] text-lg font-semibold">
          The asset changes hands. <span className="text-[#1a1a1a] font-normal">The data doesn&apos;t.</span>
        </p>
      </div>

      <AgentNote>
        <span className="text-[#1a1a1a] font-medium">Debaser&apos;s AI agents ingest this mess directly.</span>{" "}
        They read PDFs, CSVs, contracts and PRO/DSP exports, reconcile them against each
        other and normalise the lot into one structured record, before a human opens a
        single file.
      </AgentNote>
    </div>
  );
}

// ─── Slide 4 — One Asset. One System. ──────────────────────────────────────

const agents = [
  { phase: "BEFORE ACQUISITION", n: "Ingest Agent", label: "Ingest", desc: "Reads royalty statements, contracts, metadata and external performance data as they arrive." },
  { phase: "BEFORE ACQUISITION", n: "Understanding Agent", label: "Understand", desc: "Normalises revenue, rights, territories, counterparties and ownership into one model." },
  { phase: "BEFORE ACQUISITION", n: "Valuation Agent", label: "Value", desc: "Models historical earnings, decay, concentration, risk and expected cash flow." },
  { phase: "BEFORE ACQUISITION", n: "Diligence Agent", label: "Diligence", desc: "Surfaces missing rights, metadata gaps, expired licences and collection problems." },
  { phase: "AFTER ACQUISITION", n: "Transfer Agent", label: "Transfer", desc: "Tracks ownership changes, registrations and counterparties as the deal closes." },
  { phase: "AFTER ACQUISITION", n: "Administration Agent", label: "Administer", desc: "Calculates earnings, splits, recoupment and payments on an ongoing basis." },
  { phase: "AFTER ACQUISITION", n: "Optimisation Agent", label: "Optimise", desc: "Finds uncollected royalties, neighbouring rights, distribution gaps and metadata issues." },
  { phase: "AFTER ACQUISITION", n: "Monitoring Agent", label: "Monitor", desc: "Continuously tracks asset performance against the acquisition case." },
];

function SystemSlide() {
  const before = agents.filter((a) => a.phase === "BEFORE ACQUISITION");
  const after = agents.filter((a) => a.phase === "AFTER ACQUISITION");
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>04 — The System</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-2">One asset. One system.</H1>
      <Body className="text-sm sm:text-base mb-6 max-w-xl">
        Debaser creates the living record of a music catalogue, and runs it as a set of
        specialised AI agents, one per stage of the lifecycle.
      </Body>

      <div className="mb-8">
        <LifecycleStrip steps={["INGEST", "VALUE", "DILIGENCE", "ACQUIRE", "ADMINISTER", "OPTIMISE"]} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide mb-3">Before acquisition</p>
          <div className="grid gap-2.5">
            {before.map((a) => (
              <div key={a.n} className="border border-black/[0.06] bg-canvas-card rounded-xl px-4 py-3 flex items-start gap-3">
                <AcidPill>{a.label}</AcidPill>
                <div>
                  <p className="text-[#1a1a1a] text-xs font-semibold mb-0.5">{a.n}</p>
                  <p className="text-[#1a1a1a] text-xs leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide mb-3">After acquisition</p>
          <div className="grid gap-2.5">
            {after.map((a) => (
              <div key={a.n} className="border border-black/[0.06] bg-canvas-card rounded-xl px-4 py-3 flex items-start gap-3">
                <AcidPill>{a.label}</AcidPill>
                <div>
                  <p className="text-[#1a1a1a] text-xs font-semibold mb-0.5">{a.n}</p>
                  <p className="text-[#1a1a1a] text-xs leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AgentNote>
        One continuous data layer runs beneath everything. The same agentic core reads,
        reconciles and monitors every catalogue, before and after the deal closes.
      </AgentNote>
    </div>
  );
}

// ─── Slide 5 — Start With The Buyer ────────────────────────────────────────

function WedgeSlide() {
  const outputs = [
    "Normalised historical earnings",
    "Catalogue valuation",
    "Revenue concentration and decay",
    "Rights and metadata health",
    "Collection gaps",
    "Potential upside",
    "Risks and anomalies",
    "Acquisition model",
  ];
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>05 — The Wedge</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-4 max-w-2xl">
        Built for the companies acquiring the long tail.
      </H1>
      <Body className="text-sm sm:text-base max-w-2xl mb-10">
        Specialist music rights investors acquiring $100k&ndash;$3m catalogues.
        Typically small teams deploying meaningful capital without the proprietary
        infrastructure available to the largest funds. They need to assess more
        opportunities, move faster and extract more value from every catalogue they buy.
      </Body>

      <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
        <div className="border border-[#3D5AFE]/35 rounded-2xl p-6 sm:p-7" style={{ background: "rgba(61,90,254,0.05)" }}>
          <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide mb-2">Initial product wedge</p>
          <p className="text-[#1a1a1a] text-lg font-semibold tracking-tight mb-3">Debaser Diligence</p>
          <p className="text-[#1a1a1a] text-sm leading-relaxed mb-1">
            Drop in a seller&apos;s royalty statements and catalogue data. Get back a
            full acquisition read, produced by AI agents that read every statement,
            contract and metadata file in minutes.
          </p>
        </div>

        <div>
          <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide mb-3">What comes back</p>
          <div className="grid grid-cols-2 gap-2">
            {outputs.map((o) => (
              <div key={o} className="flex items-start gap-2 border border-black/[0.05] bg-canvas-card rounded-lg px-3 py-2.5">
                <div className="w-1 h-1 rounded-full bg-[#3D5AFE] flex-shrink-0 mt-1.5" />
                <span className="text-[#1a1a1a] text-xs leading-relaxed">{o}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto border border-black/[0.07] bg-canvas-card rounded-xl px-6 py-4">
        <p className="text-[#1a1a1a] text-sm font-medium text-center tracking-tight">
          A product useful before Debaser needs to replace anyone&apos;s existing royalty system.{" "}
          <span className="text-[#3D5AFE]">Land with diligence. Expand into ownership.</span>
        </p>
      </div>
    </div>
  );
}

// ─── Slide 6 — A Category Is Forming ───────────────────────────────────────

function CategorySlide() {
  const rows = [
    { name: "ValuePunks", job: "Catalogue valuation and statement ingestion." },
    { name: "Music Manager", job: "Catalogue audit, metadata optimisation and pre-acquisition diligence." },
    { name: "Curve, Vistex, Counterpoint", job: "Royalty accounting and administration." },
    { name: "Royalty.io", job: "Financial infrastructure around royalty-backed assets." },
    { name: "Duetti, Xposure and others", job: "Catalogue buyers with proprietary internal technology." },
    { name: "Debaser", job: "Acquisition, asset management and royalty infrastructure, run by one agentic system.", highlight: true },
  ];
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>06 — The Category</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-2">Pieces of this already exist.</H1>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-8">Nobody owns the lifecycle.</H1>

      <div className="mb-8">
        <LifecycleStrip steps={["DILIGENCE", "VALUE", "ACQUIRE", "ADMINISTER", "OPTIMISE", "RE-SELL"]} activeIndex={-1} />
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="w-full min-w-[520px] text-sm">
          <thead>
            <tr className="border-b border-black/[0.06]">
              <th className="text-left text-[#1a1a1a] text-[10px] font-mono tracking-wide pb-3 pr-6 w-64">Company</th>
              <th className="text-left text-[#1a1a1a] text-[10px] font-mono tracking-wide pb-3">Where they play</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className={`border-b border-black/[0.04] ${row.highlight ? "bg-[#3D5AFE]/[0.04] border-[#3D5AFE]/35" : ""}`}>
                <td className="py-3.5 pr-6">
                  <span className={`font-semibold text-sm ${row.highlight ? "text-[#3D5AFE]" : "text-[#1a1a1a]"}`}>{row.name}</span>
                  {row.highlight && (
                    <span className="ml-2 text-[9px] font-mono text-[#3D5AFE] tracking-wide bg-[#3D5AFE]/10 rounded-full px-2 py-0.5">us</span>
                  )}
                </td>
                <td className="py-3.5 text-[#1a1a1a] text-sm">{row.job}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[#1a1a1a] text-sm max-w-2xl">
        The opportunity is not another point solution. It is the system of record that
        stays with a catalogue as it is analysed, acquired, operated and eventually
        sold again, and the AI agents underneath it get sharper with every deal they touch.
      </p>
    </div>
  );
}

// ─── Slide 7 — The Music Asset Layer ───────────────────────────────────────

function RoadmapSlide() {
  const phases = [
    { n: "1", label: "Diligence and valuation", items: ["Royalty ingestion", "Normalisation", "Asset modelling", "Risk and upside"], active: true },
    { n: "2", label: "Catalogue optimisation", items: ["Metadata", "Collections", "Neighbouring rights", "Licence and distribution audit"], active: false },
    { n: "3", label: "Royalty administration", items: ["Rights ledger", "Contracts", "Splits", "Statements and payments"], active: false },
    { n: "4", label: "Transaction infrastructure", items: ["Ownership transfer", "Portfolio management", "Buyer / seller workflows", "Data rooms and asset history"], active: false },
  ];
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>07 — The Roadmap</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-2">The music asset layer.</H1>
      <Body className="text-sm sm:text-base mb-8 max-w-xl">
        Start with diligence. Become the infrastructure beneath music ownership, agent
        by agent, phase by phase.
      </Body>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {phases.map((p) => (
          <div
            key={p.n}
            className={`border rounded-2xl p-5 flex flex-col gap-3 ${p.active ? "border-[#3D5AFE]/35 bg-[#3D5AFE]/[0.04]" : "border-black/[0.06] bg-canvas-card"}`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-mono ${p.active ? "text-[#3D5AFE]" : "text-[#1a1a1a]"}`}>Phase {p.n}</span>
              {p.active && <AcidPill>Now</AcidPill>}
            </div>
            <p className={`text-sm font-semibold tracking-tight ${p.active ? "text-[#1a1a1a]" : "text-[#1a1a1a]"}`}>{p.label}</p>
            <ul className="space-y-1.5">
              {p.items.map((it) => (
                <li key={it} className="text-[#1a1a1a] text-xs leading-relaxed">{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border border-black/[0.07] bg-canvas-card rounded-xl px-6 py-4 mb-10">
        <p className="text-[#1a1a1a] text-sm font-medium text-center tracking-tight">
          Every catalogue Debaser&apos;s agents touch creates a richer data model of how
          music rights behave.{" "}
          <span className="text-[#3D5AFE]">More assets, better benchmarks, better underwriting, better optimisation.</span>
        </p>
      </div>

      <div className="mt-auto flex flex-col items-center text-center pt-4">
        <p className="text-[#1a1a1a] text-lg sm:text-xl font-semibold tracking-tight max-w-xl mb-6">
          Creative IP deserves financial infrastructure built for the asset itself.
        </p>
        <div className="flex items-center gap-2">
          <GhostMark className="w-5 h-5 text-[#1a1a1a]" />
          <span className="text-[#1a1a1a] text-sm font-semibold tracking-tight">debaser</span>
        </div>
      </div>
    </div>
  );
}

// ─── Slides registry ───────────────────────────────────────────────────────

const SLIDES = [
  { id: "debaser",   label: "Debaser",                    Component: CoverSlide },
  { id: "market",    label: "The Market Is Moving Down",  Component: MarketSlide },
  { id: "mess",      label: "Every Deal Starts With A Mess", Component: MessSlide },
  { id: "system",    label: "One Asset. One System.",     Component: SystemSlide },
  { id: "wedge",     label: "Start With The Buyer",        Component: WedgeSlide },
  { id: "category",  label: "A Category Is Forming",       Component: CategorySlide },
  { id: "roadmap",   label: "The Music Asset Layer",       Component: RoadmapSlide },
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

export default function PitchDeckAssetClass({ onClose }: { onClose: () => void }) {
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
          <a href="/v1" className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            <GhostMark className="w-5 h-5 sm:w-6 sm:h-6 text-[#1a1a1a]" />
            <span className="hidden sm:inline text-[#1a1a1a] text-base font-semibold">debaser</span>
          </a>
          <div className="hidden sm:block w-px h-4 bg-black/[0.08] mx-1 flex-shrink-0" />
          <span className="text-[#1a1a1a] text-xs sm:text-sm truncate min-w-0">
            Asset Class Concept · Investor Deck
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
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
              <path d="M8 10L4 6l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            disabled={current === SLIDES.length - 1}
            aria-label="Next slide"
            className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 text-[#1a1a1a] border border-black/[0.1] rounded-lg bg-canvas-card hover:border-black/[0.18] hover:bg-canvas-elevated transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
