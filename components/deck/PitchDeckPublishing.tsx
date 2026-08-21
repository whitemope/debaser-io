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
          Song rights are changing hands faster than the industry can track them.
        </p>

        <div className="flex items-center justify-center gap-3 mb-8">
          <GhostMark className="w-10 h-10 sm:w-14 sm:h-14 text-[#1a1a1a]" />
          <span className="text-[#1a1a1a] text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">debaser</span>
        </div>

        <Body className="text-base sm:text-lg max-w-2xl mx-auto mb-12">
          The operating system for buying and running song catalogues. Built so
          songwriters get paid what they&apos;re owed, not just so deals close faster.
        </Body>

        <div className="flex flex-col items-center gap-4">
          <LifecycleStrip steps={["UNDERSTAND", "BUY", "RUN", "GROW"]} />
          <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide">
            Run by AI agents that chase down every royalty a writer is owed, not just the ones a spreadsheet already knows about.
          </p>
        </div>

        <div className="w-12 h-px bg-black/[0.1] mx-auto my-10" />
        <p className="text-[#1a1a1a] text-sm font-mono mb-1">Investor Overview · Publishing · {DECK_DATE}</p>
        <p className="text-[#1a1a1a] text-xs font-mono">Strictly Confidential</p>
      </div>
    </div>
  );
}

// ─── Slide 2 — The Market ───────────────────────────────────────────────────

function MarketSlide() {
  const buyers = [
    "Tempo Music Investments",
    "Influence Media Partners",
    "Litmus Music",
    "Reservoir",
    "Anthem Entertainment",
    "Independent publishers and sub-publishers",
  ];
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>02 — The Market</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-10 max-w-2xl">
        Publishing is the fastest-growing corner of the rights market.
      </H1>

      <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
        <div>
          <p className="text-[#1a1a1a] text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-2">
            $50K <span className="text-[#1a1a1a] font-normal">&mdash;</span> $2M
          </p>
          <p className="text-[#3D5AFE] text-xs font-mono tracking-wide">THE SONGWRITER CATALOGUE MID-MARKET</p>
        </div>
        <Body className="text-sm sm:text-base">
          Recorded music catalogues drew the first wave of institutional capital.
          Publishing rights, the compositions themselves, are next. Songwriter and
          co-writer shares under $2m are now the fastest-growing segment, as
          specialist funds, indie publishers and sub-publishers look past the
          superstar deals the majors already won.
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
    { label: "Split sheets", r: -6 },
    { label: "Cue sheets", r: 4 },
    { label: "CWR files", r: -2 },
    { label: "Sub-pub deals", r: 7 },
    { label: "ISWC codes", r: -8 },
    { label: "Sync licenses", r: 3 },
    { label: "Black-box royalties", r: -4 },
  ];
  const items = [
    "Co-writer and publisher splits",
    "PRO registrations and cue sheets",
    "Mechanical, performance and sync income",
    "Sub-publishing and collection agreements",
    "ISWC and CWR metadata",
    "Foreign collection society relationships",
    "Unmatched and black-box royalties",
  ];
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>03 — The Problem</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-3">Song rights are investable.</H1>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-10">Split data isn&apos;t.</H1>

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
            Then hand that data between administrators, PROs, sub-publishers and
            lawyers, in a different format at every stage. After the deal, another
            set of tools and collection societies takes over.
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
            <span className="text-[#1a1a1a] text-sm font-semibold tracking-tight">Acquisition decision</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-[#1a1a1a] text-lg font-semibold">
          The song changes hands. <span className="text-[#1a1a1a] font-normal">The paperwork doesn&apos;t.</span>
        </p>
      </div>

      <AgentNote>
        <span className="text-[#1a1a1a] font-medium">Debaser&apos;s AI agents untangle this before a human opens a file.</span>{" "}
        The same reconciliation that makes a catalogue easy to value is what finds
        the co-writer royalties sitting unclaimed in black-box accounts.
      </AgentNote>
    </div>
  );
}

// ─── Slide 4 — One Song. One System. ───────────────────────────────────────

const agents = [
  { phase: "BEFORE ACQUISITION", n: "Ingest Agent", label: "Ingest", desc: "Reads PRO statements, mechanical statements, sync deals, sub-publishing agreements and cue sheets as they arrive." },
  { phase: "BEFORE ACQUISITION", n: "Understanding Agent", label: "Understand", desc: "Normalises writer and publisher splits, territories, PRO affiliations and collection chains into one model." },
  { phase: "BEFORE ACQUISITION", n: "Valuation Agent", label: "Value", desc: "Models historical earnings, catalogue decay, sync potential and expected cash flow, work by work." },
  { phase: "BEFORE ACQUISITION", n: "Diligence Agent", label: "Diligence", desc: "Surfaces unregistered works, missing ISWC or CWR data, expired sub-publishing deals and split disputes." },
  { phase: "AFTER ACQUISITION", n: "Transfer Agent", label: "Transfer", desc: "Tracks ownership changes, PRO re-registrations and publisher-of-record updates as the deal closes." },
  { phase: "AFTER ACQUISITION", n: "Administration Agent", label: "Administer", desc: "Calculates mechanical, performance and sync royalties, and pays every co-writer and collaborator accurately and on schedule." },
  { phase: "AFTER ACQUISITION", n: "Optimisation Agent", label: "Optimise", desc: "Recovers unclaimed and black-box royalties, fixes metadata gaps, and surfaces sync and re-registration opportunities." },
  { phase: "AFTER ACQUISITION", n: "Monitoring Agent", label: "Monitor", desc: "Continuously tracks catalogue performance and flags any co-writer or territory falling out of sync." },
];

function SystemSlide() {
  const before = agents.filter((a) => a.phase === "BEFORE ACQUISITION");
  const after = agents.filter((a) => a.phase === "AFTER ACQUISITION");
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>04 — The System</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-2">One song. One system.</H1>
      <Body className="text-sm sm:text-base mb-6 max-w-xl">
        Debaser creates the living record of a publishing catalogue, and runs it as
        a set of specialised AI agents, one per stage of the lifecycle, including
        the parts that only matter to the people who wrote the songs.
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
        One continuous data layer runs beneath everything, and it doesn&apos;t stop
        paying attention once the deal closes. The agents that make a catalogue
        easy to buy are the same agents that make sure every writer on it keeps
        getting paid correctly.
      </AgentNote>
    </div>
  );
}

// ─── Slide 5 — Start With The Buyer ────────────────────────────────────────

function WedgeSlide() {
  const outputs = [
    "Normalised historical earnings",
    "Catalogue valuation",
    "Split and registration health",
    "Unclaimed and black-box recovery estimate",
    "Sync and re-registration upside",
    "Risks and anomalies",
    "Co-writer and territory map",
    "Acquisition model",
  ];
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>05 — The Wedge</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-4 max-w-2xl">
        Built for the companies acquiring the long tail of song rights.
      </H1>
      <Body className="text-sm sm:text-base max-w-2xl mb-10">
        Specialist publishing investors and sub-publishers acquiring $50k&ndash;$2m
        catalogues. Small teams, real capital, none of the proprietary
        infrastructure the majors built for themselves. They need to move faster,
        price fairly, and keep every catalogue clean once they own it.
      </Body>

      <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
        <div className="border border-[#3D5AFE]/35 rounded-2xl p-6 sm:p-7" style={{ background: "rgba(61,90,254,0.05)" }}>
          <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide mb-2">Initial product wedge</p>
          <p className="text-[#1a1a1a] text-lg font-semibold tracking-tight mb-3">Debaser Diligence for Publishing</p>
          <p className="text-[#1a1a1a] text-sm leading-relaxed mb-1">
            Drop in a seller&apos;s PRO statements, mechanical statements and
            sub-publishing agreements. Get back a full acquisition read, produced
            by AI agents that read every registration, split sheet and royalty
            statement in minutes.
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
          Good diligence protects both sides of the table. A songwriter selling
          deserves an accurate number as much as the buyer does.{" "}
          <span className="text-[#3D5AFE]">Land with diligence. Expand into ownership.</span>
        </p>
      </div>
    </div>
  );
}

// ─── Slide 6 — A Category Is Forming ───────────────────────────────────────

function CategorySlide() {
  const rows = [
    { name: "Songtrust, Sentric", job: "Publishing administration for independent songwriters." },
    { name: "Music Reports, ICE Services", job: "Royalty matching and collection infrastructure for PROs and DSPs." },
    { name: "The MLC, CMRRA", job: "Mechanical royalty collection and black-box distribution." },
    { name: "Curve, Kobalt", job: "Royalty accounting across rights types." },
    { name: "Reservoir, Anthem, Influence Media", job: "Catalogue buyers with proprietary internal technology." },
    { name: "Debaser", job: "Acquisition, asset management and royalty infrastructure, run by one agentic system, for the people who own the song and the people who wrote it.", highlight: true },
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
        The opportunity is not another point solution. It is the system of record
        that stays with a song as it is analysed, acquired, administered and paid
        out, for as long as it keeps earning.
      </p>
    </div>
  );
}

// ─── Slide 7 — The Publishing Asset Layer ──────────────────────────────────

function RoadmapSlide() {
  const phases = [
    { n: "1", label: "Diligence and valuation", items: ["Royalty ingestion", "Split normalisation", "Asset modelling", "Risk and upside"], active: true },
    { n: "2", label: "Catalogue optimisation", items: ["Metadata and ISWC/CWR", "Black-box and unclaimed recovery", "Sync opportunity discovery", "Registration audit"], active: false },
    { n: "3", label: "Royalty administration", items: ["Rights and split ledger", "Contracts", "Co-writer statements", "Payments"], active: false },
    { n: "4", label: "Transaction infrastructure", items: ["Ownership transfer", "Portfolio management", "Buyer / seller workflows", "Data rooms"], active: false },
  ];
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>07 — The Roadmap</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-2">The publishing asset layer.</H1>
      <Body className="text-sm sm:text-base mb-8 max-w-xl">
        Start with diligence. Become the infrastructure beneath every song&apos;s
        ownership, agent by agent, phase by phase.
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
            <p className="text-sm font-semibold tracking-tight text-[#1a1a1a]">{p.label}</p>
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
          Every catalogue Debaser&apos;s agents touch creates a richer data model of
          how song rights behave.{" "}
          <span className="text-[#3D5AFE]">More assets, better benchmarks, better underwriting, fewer missed payments to the people who wrote the songs.</span>
        </p>
      </div>

      <div className="mt-auto flex flex-col items-center text-center pt-4">
        <p className="text-[#1a1a1a] text-lg sm:text-xl font-semibold tracking-tight max-w-xl mb-6">
          Songwriters made the asset. They deserve infrastructure built with that in mind.
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
  { id: "debaser",   label: "Debaser",                     Component: CoverSlide },
  { id: "market",    label: "The Market",                  Component: MarketSlide },
  { id: "mess",      label: "Every Deal Starts With A Mess", Component: MessSlide },
  { id: "system",    label: "One Song. One System.",       Component: SystemSlide },
  { id: "wedge",     label: "Start With The Buyer",         Component: WedgeSlide },
  { id: "category",  label: "A Category Is Forming",        Component: CategorySlide },
  { id: "roadmap",   label: "The Publishing Asset Layer",   Component: RoadmapSlide },
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

export default function PitchDeckPublishing({ onClose }: { onClose: () => void }) {
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
            Publishing Concept · Investor Deck
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
