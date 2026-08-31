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

function NumberedList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-[#3D5AFE]/10 border border-[#3D5AFE]/35 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#3D5AFE] text-[9px] font-mono">{i + 1}</span>
          </div>
          <span className="text-[#1a1a1a] text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
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
          The intelligence layer for music royalties.
        </H1>
        <Body className="text-lg max-w-xl mx-auto mb-8">
          Debaser finds errors, explains payments and helps rights teams recover missing income.
        </Body>
        <div className="w-12 h-px bg-black/[0.1] mx-auto mb-8" />
        <p className="text-[#1a1a1a] text-sm font-mono mb-1">
          Introducing Debaser · {DECK_DATE}
        </p>
        <p className="text-[#1a1a1a] text-xs font-mono">Strictly Confidential</p>
      </div>
    </div>
  );
}

// ─── Slide 2 — The Problem ─────────────────────────────────────────────────

function ProblemSlide() {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center px-5 py-10 sm:px-10 sm:py-14 lg:px-16 relative overflow-hidden">
      <div className="relative w-full text-center max-w-3xl">
        <Eyebrow>02 — The Problem</Eyebrow>
        <H1 className="text-2xl sm:text-4xl md:text-5xl mb-8">
          Royalty teams cannot see the full picture.
        </H1>
        <Body className="text-lg max-w-2xl mx-auto mb-6">
          Contracts sit in PDFs. Catalogue data is inconsistent. Statements arrive in
          different formats. Existing systems calculate what they receive, but rarely
          tell teams what is missing, wrong or worth investigating.
        </Body>
        <p className="text-[#1a1a1a] text-lg font-semibold">
          The result is manual work, slow answers and lost income.
        </p>
      </div>
    </div>
  );
}

// ─── Slide 3 — The Gap ─────────────────────────────────────────────────────

function GapSlide() {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center px-5 py-10 sm:px-10 sm:py-14 lg:px-16 relative overflow-hidden">
      <div className="relative w-full text-center max-w-3xl">
        <Eyebrow>03 — The Gap</Eyebrow>
        <H1 className="text-3xl sm:text-5xl md:text-6xl mb-8">
          The market does not need another royalty calculator.
        </H1>
        <div className="w-12 h-px bg-[#3D5AFE]/30 mx-auto mb-8" />
        <Body className="text-xl max-w-2xl mx-auto mb-4">
          Curve, Vistex and internal systems remain the system of record.{" "}
          <span className="text-[#1a1a1a] font-semibold">Debaser sits above them.</span>
        </Body>
        <Body className="text-base max-w-2xl mx-auto">
          It connects contracts, catalogue data, statements and existing royalty
          systems. It checks the work, explains the result and turns problems into
          action.
        </Body>
      </div>
    </div>
  );
}

// ─── Slide 4 — The Product ─────────────────────────────────────────────────

const productSteps = [
  { n: "01", label: "Connect", desc: "Ingest statements, contracts, catalogue data and system exports." },
  { n: "02", label: "Match", desc: "Link income to works, recordings, parties and agreements." },
  { n: "03", label: "Investigate", desc: "Find gaps, conflicts, duplicates and unusual changes." },
  { n: "04", label: "Explain", desc: "Trace every finding to a row, clause or source file." },
  { n: "05", label: "Resolve", desc: "Prepare corrections, claims and tasks for approval." },
];

function ProductSlide() {
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>04 — The Product</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-12">One workspace for royalty intelligence.</H1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {productSteps.map((s, i) => (
          <div key={s.n} className="relative bg-canvas-card border border-black/[0.05] rounded-2xl p-5 hover:border-black/[0.1] transition-colors">
            <span className="text-[#1a1a1a] text-[10px] font-mono block mb-4">{s.n}</span>
            <p className="text-[#1a1a1a] text-sm font-semibold mb-2 tracking-tight">{s.label}</p>
            <p className="text-[#1a1a1a] text-xs leading-relaxed">{s.desc}</p>
            {i < productSteps.length - 1 && (
              <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-6 h-6">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="text-black/20">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Slide 5 — The First Use Case ──────────────────────────────────────────

function FirstUseCaseSlide() {
  const items = [
    "Unmatched income.",
    "Missing or conflicting splits.",
    "Unexpected changes.",
    "Contract errors.",
    "Claim-ready evidence.",
  ];
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>05 — The First Use Case</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-3">
        Find mistakes and missing money
      </H1>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-8">
        before the next royalty run.
      </H1>
      <Body className="text-base mb-6 max-w-xl">
        A customer provides one quarter of statements, catalogue data and contracts.
        Debaser returns:
      </Body>
      <div className="max-w-md mb-8">
        <NumberedList items={items} />
      </div>
      <div className="mt-auto bg-canvas-card border border-[#3D5AFE]/35 rounded-xl p-4 flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-[#3D5AFE] flex-shrink-0" />
        <p className="text-[#1a1a1a] text-sm">
          Entry offer:{" "}
          <span className="text-[#1a1a1a] font-medium">
            "Send us last quarter. We will show you what is wrong."
          </span>
        </p>
      </div>
    </div>
  );
}

// ─── Slide 6 — Why Customers Buy ───────────────────────────────────────────

function WhyCustomersBuySlide() {
  const items = [
    "Recover income.",
    "Reduce manual reconciliation.",
    "Shorten artist and client queries.",
    "Improve confidence before payments go out.",
    "Preserve royalty knowledge when staff leave.",
  ];
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>06 — Why Customers Buy</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-10">The value is measurable.</H1>
      <p className="text-[#1a1a1a] text-xs font-mono tracking-wide mb-4">Debaser can:</p>
      <div className="max-w-lg mb-8">
        <NumberedList items={items} />
      </div>
      <div className="mt-auto border border-black/[0.07] bg-canvas-card rounded-xl px-6 py-4">
        <p className="text-[#1a1a1a] text-sm font-medium text-center tracking-tight">
          The commercial test is simple.{" "}
          <span className="text-[#3D5AFE]">Debaser should recover or save more than it costs.</span>
        </p>
      </div>
    </div>
  );
}

// ─── Slide 7 — Why Now ─────────────────────────────────────────────────────

function WhyNowSlide() {
  const cards = [
    {
      label: "Complexity is growing",
      detail: "More platforms, territories and revenue types create more data and more failure points.",
    },
    {
      label: "Software is finally capable",
      detail: "Software can now read contracts, compare large data sets and produce evidence-backed findings.",
    },
  ];
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>07 — Why Now</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-12 max-w-xl">Royalty complexity keeps growing.</H1>
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {cards.map((c, i) => (
          <div key={i} className="border border-black/[0.06] rounded-2xl p-7 bg-canvas-card flex flex-col gap-3">
            <p className="text-[#1a1a1a] text-base font-semibold">{c.label}</p>
            <p className="text-[#1a1a1a] text-sm leading-relaxed">{c.detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-auto border border-[#3D5AFE]/35 rounded-xl px-6 py-4" style={{ background: "rgba(61,90,254,0.05)" }}>
        <p className="text-[#1a1a1a] text-sm font-medium">
          The source systems were built to calculate.{" "}
          <span className="text-[#3D5AFE]">The next layer will investigate.</span>
        </p>
      </div>
    </div>
  );
}

// ─── Slide 8 — Competitive Position ────────────────────────────────────────

function CompetitivePositionSlide() {
  const rows = [
    { name: "Curve, Vistex, Counterpoint", job: "Royalty accounting and statements." },
    { name: "Reprtoir, Revelator", job: "Catalogue and music operations." },
    { name: "Auditors and royalty specialists", job: "Manual investigation and recovery." },
    { name: "Debaser", job: "Continuous investigation, explanation and action across all of the above.", highlight: true },
  ];
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>08 — Competitive Position</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-10">Debaser works with the existing stack.</H1>
      <div className="overflow-x-auto mb-6">
        <table className="w-full min-w-[480px] text-sm">
          <thead>
            <tr className="border-b border-black/[0.06]">
              <th className="text-left text-[#1a1a1a] text-[10px] font-mono tracking-wide pb-3 pr-6 w-64">Product type</th>
              <th className="text-left text-[#1a1a1a] text-[10px] font-mono tracking-wide pb-3">Primary job</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.name}
                className={`border-b border-black/[0.04] ${row.highlight ? "bg-[#3D5AFE]/[0.04] border-[#3D5AFE]/35" : ""}`}
              >
                <td className="py-4 pr-6">
                  <span className={`font-semibold text-sm ${row.highlight ? "text-[#3D5AFE]" : "text-[#1a1a1a]"}`}>
                    {row.name}
                  </span>
                  {row.highlight && (
                    <span className="ml-2 text-[9px] font-mono text-[#3D5AFE] tracking-wide bg-[#3D5AFE]/10 rounded-full px-2 py-0.5">us</span>
                  )}
                </td>
                <td className="py-4 text-[#1a1a1a] text-sm">{row.job}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[#1a1a1a] text-xs font-mono">
        This creates a faster route into customers and avoids a full system migration.
      </p>
    </div>
  );
}

// ─── Slide 9 — Business Model ───────────────────────────────────────────────

function BusinessModelSlide() {
  const rows = [
    { name: "Platform", desc: "Annual fee based on company size and workflows." },
    { name: "Scale", desc: "Catalogue size, data volume or connected sources." },
    { name: "Recovery", desc: "Optional share of verified incremental income." },
    { name: "Services", desc: "Historical audits, onboarding and custom integrations." },
    { name: "Expansion", desc: "Contract intelligence, neighbouring rights, publishing and acquisition monitoring." },
  ];
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>09 — Business Model</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-10">Enterprise software with clear expansion.</H1>
      <div className="overflow-x-auto mb-6">
        <table className="w-full min-w-[520px] text-sm">
          <thead>
            <tr className="border-b border-black/[0.06]">
              <th className="text-left text-[#1a1a1a] text-[10px] font-mono tracking-wide pb-3 pr-6 w-40">Revenue</th>
              <th className="text-left text-[#1a1a1a] text-[10px] font-mono tracking-wide pb-3">Model</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className="border-b border-black/[0.04]">
                <td className="py-4 pr-6">
                  <span className="font-semibold text-sm text-[#1a1a1a]">{row.name}</span>
                </td>
                <td className="py-4 text-[#1a1a1a] text-sm">{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[#1a1a1a] text-xs font-mono">
        Expected entry range: £25k to £75k annually for independent and mid-market customers. Enterprise pricing will be higher.
      </p>
    </div>
  );
}

// ─── Slide 10 — Go To Market ────────────────────────────────────────────────

function GTMSlide() {
  const steps = [
    "Recruit three to five design partners.",
    "Run a focused historical or quarterly audit.",
    "Show recovered income and time saved.",
    "Convert the workflow into an annual contract.",
    "Expand across catalogues, territories and teams.",
  ];
  const segments = [
    "Independent labels",
    "Publishers",
    "Label services companies",
    "Catalogue funds",
    "Artist managers",
    "Neighbouring rights specialists",
  ];
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>10 — Go-to-Market</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-10">Lead with proof, not a software demo.</H1>
      <div className="grid lg:grid-cols-2 gap-10 flex-1 items-start">
        <NumberedList items={steps} />
        <div>
          <p className="text-[#1a1a1a] text-xs font-semibold mb-4 tracking-wide">Initial customers</p>
          <div className="flex flex-wrap gap-2">
            {segments.map((s) => (
              <span key={s} className="text-[11px] font-mono text-[#1a1a1a] bg-canvas-card border border-black/[0.06] rounded-full px-3 py-1.5">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Slide 11 — Product Foundation ─────────────────────────────────────────

function ProductFoundationSlide() {
  const items = [
    "Connectors to royalty systems and source data.",
    "A rights graph linking songs, recordings, contracts, ownership and income.",
    "Rules for calculations and approvals.",
    "Models for reading, matching and investigation.",
    "A full audit trail for every finding.",
  ];
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>11 — Product Foundation</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-6">Accuracy comes from structure and evidence.</H1>
      <p className="text-[#1a1a1a] text-base mb-6">Debaser combines:</p>
      <div className="max-w-xl mb-8">
        <NumberedList items={items} />
      </div>
      <div className="mt-auto border border-black/[0.07] bg-canvas-card rounded-xl px-6 py-4">
        <p className="text-[#1a1a1a] text-sm font-medium text-center tracking-tight">
          Models investigate.{" "}
          <span className="text-[#1a1a1a]">Rules control.</span>{" "}
          <span className="text-[#1a1a1a]">People approve.</span>
        </p>
      </div>
    </div>
  );
}

// ─── Slide 12 — Defensibility ───────────────────────────────────────────────

function DefensibilitySlide() {
  const items = [
    "How rights are represented.",
    "How contracts affect payments.",
    "Where income commonly goes missing.",
    "How claims are resolved.",
    "Which sources can be trusted.",
  ];
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center px-5 py-10 sm:px-10 sm:py-14 lg:px-16 relative overflow-hidden">
      <div className="relative w-full text-center max-w-2xl">
        <Eyebrow>12 — Defensibility</Eyebrow>
        <H1 className="text-2xl sm:text-4xl md:text-5xl mb-8">The moat is the rights and operations graph.</H1>
        <p className="text-[#1a1a1a] text-base mb-6">Each workflow improves Debaser's understanding of:</p>
        <div className="text-left inline-block mb-8">
          <NumberedList items={items} />
        </div>
        <div className="w-12 h-px bg-[#3D5AFE]/30 mx-auto mb-6" />
        <p className="text-[#1a1a1a] text-lg font-semibold">
          Over time, Debaser becomes the operating memory for royalty teams.
        </p>
      </div>
    </div>
  );
}

// ─── Slide 13 — Long-term Vision ────────────────────────────────────────────

function LongTermVisionSlide() {
  const phases = [
    { n: "1", label: "Audit existing royalty data and recover missing income.", active: true },
    { n: "2", label: "Become the shared rights and contract layer across systems.", active: false },
    { n: "3", label: "Run selected royalty workflows and calculations.", active: false },
    { n: "4", label: "Add usage data from platforms, partners and venue sensors.", active: false },
    { n: "5", label: "Support direct claims, administration and collection.", active: false },
  ];
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>13 — Long-term Vision</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-10">From royalty intelligence to royalty infrastructure.</H1>
      <div className="grid gap-3 mb-6">
        {phases.map((p) => (
          <div
            key={p.n}
            className={`border rounded-xl px-6 py-4 flex items-center gap-6 ${p.active ? "border-[#3D5AFE]/35 bg-[#3D5AFE]/[0.04]" : "border-black/[0.05] bg-canvas-card"}`}
          >
            <span className={`text-[10px] font-mono flex-shrink-0 w-16 ${p.active ? "text-[#3D5AFE]" : "text-[#1a1a1a]"}`}>
              Phase {p.n}
            </span>
            <p className={`text-sm ${p.active ? "text-[#1a1a1a] font-medium" : "text-[#1a1a1a]"}`}>{p.label}</p>
            {p.active && <AcidPill>Now</AcidPill>}
          </div>
        ))}
      </div>
      <p className="text-[#1a1a1a] text-sm mb-2">
        The long-term opportunity is a clearer route from music usage to the correct rights holder.
      </p>
      <p className="text-[#1a1a1a] text-xs font-mono">
        Hardware may support venue detection later. It is not required for the first product.
      </p>
    </div>
  );
}

// ─── Slide 14 — Current Stage ───────────────────────────────────────────────

function CurrentStageSlide() {
  const items = [
    "Validate the audit and recovery wedge.",
    "Secure three to five design partners.",
    "Build ingestion, matching and evidence workflows.",
    "Prove measurable value on live royalty data.",
    "Refine pricing and sales motion.",
  ];
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>14 — Current Stage</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-10">Pre-seed. Building with design partners.</H1>
      <p className="text-[#1a1a1a] text-xs font-mono tracking-wide mb-4">Current priorities</p>
      <div className="max-w-xl">
        <NumberedList items={items} />
      </div>
    </div>
  );
}

// ─── Slide 15 — Team and Raise ──────────────────────────────────────────────

function TeamAndRaiseSlide() {
  const useOfFunds = [
    { label: "Product & Engineering", pct: 55, color: "bg-[#3D5AFE]" },
    { label: "Commercial & GTM", pct: 25, color: "bg-[#3D5AFE]/50" },
    { label: "Operations & Legal", pct: 20, color: "bg-[#3D5AFE]/25" },
  ];
  return (
    <div className="w-full min-h-full flex flex-col px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <Eyebrow>15 — Team & Raise</Eyebrow>
      <H1 className="text-2xl sm:text-4xl md:text-5xl mb-10">The team and the raise.</H1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div className="border border-black/[0.06] bg-canvas-card rounded-2xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#3D5AFE]/10 border border-[#3D5AFE]/35 flex items-center justify-center flex-shrink-0">
                <span className="text-[#3D5AFE] text-lg font-bold">D</span>
              </div>
              <div>
                <p className="text-[#1a1a1a] font-semibold">David Rennick</p>
                <p className="text-[#1a1a1a] text-xs mt-0.5">Founder</p>
              </div>
            </div>
            <p className="text-[#1a1a1a] text-sm leading-relaxed">
              Product and design leader with experience across music and technology.
            </p>
          </div>
          <div className="border border-black/[0.05] border-dashed bg-canvas-card rounded-2xl p-5">
            <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide mb-3">Key hires</p>
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
          <div className="border border-[#3D5AFE]/35 rounded-2xl p-7" style={{ background: "rgba(61,90,254,0.05)" }}>
            <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide mb-2">Raising</p>
            <p className="text-[#3D5AFE] text-3xl font-bold mb-1">£[TBD]</p>
            <p className="text-[#1a1a1a] text-sm">Pre-seed</p>
            <div className="mt-4 pt-4 border-t border-black/[0.06]">
              <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide mb-3">Use of funds</p>
              <div className="space-y-3 sm:space-y-2">
                {useOfFunds.map((f) => (
                  <div key={f.label} className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                    <div className="flex items-center justify-between sm:contents">
                      <span className="text-[#1a1a1a] text-xs sm:w-24 sm:flex-shrink-0 sm:order-2">{f.label}</span>
                      <span className="text-[#1a1a1a] text-xs font-mono sm:w-8 sm:text-right sm:flex-shrink-0 sm:order-3">{f.pct}%</span>
                    </div>
                    <div className="flex-1 h-1.5 bg-black/[0.05] rounded-full overflow-hidden sm:order-1">
                      <div className={`h-full ${f.color} rounded-full`} style={{ width: `${f.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border border-black/[0.05] bg-canvas-card rounded-xl p-5">
            <p className="text-[#1a1a1a] text-[10px] font-mono tracking-wide mb-2">Contact</p>
            <p className="text-[#1a1a1a] text-sm font-medium">David Rennick</p>
            <a href="mailto:daverennick@gmail.com" className="text-[#3D5AFE] text-sm hover:underline underline-offset-2">
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
    <div className="w-full min-h-full flex flex-col items-center justify-center px-5 py-10 sm:px-10 sm:py-14 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-40" />
      <div className="relative w-full text-center max-w-3xl">
        <div className="flex items-center justify-center gap-2 mb-10">
          <GhostMark className="w-7 h-7 text-[#1a1a1a]" />
          <span className="text-[#1a1a1a] text-lg font-semibold">debaser</span>
        </div>
        <H1 className="text-2xl sm:text-4xl md:text-5xl mb-6">
          Every royalty payment should be explainable.
        </H1>
        <H1 className="text-2xl sm:text-4xl md:text-5xl mb-8">
          Every missing payment should be actionable.
        </H1>
      </div>
    </div>
  );
}

// ─── Slides registry ───────────────────────────────────────────────────────

const SLIDES = [
  { id: "cover",         label: "Cover",                  Component: CoverSlide },
  { id: "problem",       label: "The Problem",            Component: ProblemSlide },
  { id: "gap",           label: "The Gap",                Component: GapSlide },
  { id: "product",       label: "The Product",            Component: ProductSlide },
  { id: "use-case",      label: "First Use Case",         Component: FirstUseCaseSlide },
  { id: "why-buy",       label: "Why Customers Buy",      Component: WhyCustomersBuySlide },
  { id: "why-now",       label: "Why Now",                Component: WhyNowSlide },
  { id: "competitive",   label: "Competitive Position",   Component: CompetitivePositionSlide },
  { id: "biz-model",     label: "Business Model",         Component: BusinessModelSlide },
  { id: "gtm",           label: "Go-to-Market",           Component: GTMSlide },
  { id: "foundation",    label: "Product Foundation",     Component: ProductFoundationSlide },
  { id: "defensibility", label: "Defensibility",          Component: DefensibilitySlide },
  { id: "vision",        label: "Long-term Vision",       Component: LongTermVisionSlide },
  { id: "stage",         label: "Current Stage",          Component: CurrentStageSlide },
  { id: "team-raise",    label: "Team & Raise",           Component: TeamAndRaiseSlide },
  { id: "closing",       label: "Closing",                Component: ClosingSlide },
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

export default function PitchDeckHarness({ onClose }: { onClose: () => void }) {
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
            Debaser (Global Music Economy)
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
