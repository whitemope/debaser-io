"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/animation";
import { useHomepageVariant } from "@/components/HomepageVariantContext";
import { getHomepageContent } from "@/lib/homepage-content";
import Editable from "@/components/Editable";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

function RoyaltyReviewMockup() {
  const findings = [
    {
      finding: "£18,420 cannot be matched to known recordings.",
      evidence: "Spotify UK. 12 missing or invalid ISRCs.",
      action: "Investigate",
    },
    {
      finding: "Producer deduction conflicts with the agreement.",
      evidence: "Clause 4.2(b).",
      action: "Review",
    },
    {
      finding: "Three expected statements are missing.",
      evidence: "Germany, France and Japan.",
      action: "Prepare claim",
    },
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div
        className="force-light bg-white border border-black/[0.07] rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 0 0 1px rgba(16, 21, 133,0.07), 0 40px 80px rgba(16, 21, 133,0.12), 0 16px 40px rgba(16, 21, 133,0.07)",
        }}
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/[0.05] bg-black/[0.02]">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-black/[0.08]" />
              <div className="w-2.5 h-2.5 rounded-full bg-black/[0.08]" />
              <div className="w-2.5 h-2.5 rounded-full bg-black/[0.08]" />
            </div>
            <div className="w-px h-3.5 bg-black/[0.06]" />
            <span className="text-[11px] text-ink-tertiary font-mono tracking-wide">
              debaser · royalty review
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-slow" />
            <span className="text-[11px] text-amber-600/80 font-mono">
              in review
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="text-[10px] text-ink-tertiary font-mono tracking-wide mb-1">
                Q2 2026
              </p>
              <h3 className="text-ink text-xl font-semibold tracking-tight">
                Royalty Review
              </h3>
            </div>
          </div>

          <div className="border border-black/[0.06] rounded-xl overflow-hidden">
            <div className="grid grid-cols-[2fr_1.4fr_auto] text-[10px] font-mono text-ink-tertiary tracking-wide px-4 py-2.5 bg-black/[0.02] border-b border-black/[0.05]">
              <span>Finding</span>
              <span>Evidence</span>
              <span>Action</span>
            </div>
            {findings.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-[2fr_1.4fr_auto] gap-2 px-4 py-3.5 items-center ${
                  i < findings.length - 1 ? "border-b border-black/[0.04]" : ""
                }`}
              >
                <span className="text-ink/85 text-[13px] leading-snug">
                  {row.finding}
                </span>
                <span className="text-ink-tertiary text-[11px] font-mono leading-snug">
                  {row.evidence}
                </span>
                <span className="text-acid text-[12px] font-medium whitespace-nowrap">
                  {row.action}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-2.5 mt-4">
            <button className="flex-1 py-2 text-[13px] text-ink-secondary border border-black/[0.08] rounded-lg hover:bg-black/[0.02] transition-colors font-medium">
              Open evidence
            </button>
            <button className="flex-1 py-2 text-[13px] text-acid border border-acid/25 rounded-lg hover:bg-acid/5 transition-colors font-medium">
              Assign
            </button>
            <button className="flex-1 py-2 text-[13px] text-btn-primary-fg bg-btn-primary rounded-lg font-medium hover:bg-btn-primary/90 transition-colors">
              Export claim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoyaltyRunMockup() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div
        className="force-light bg-white border border-black/[0.07] rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 0 0 1px rgba(16, 21, 133,0.07), 0 40px 80px rgba(16, 21, 133,0.12), 0 16px 40px rgba(16, 21, 133,0.07)",
        }}
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/[0.05] bg-black/[0.02]">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-black/[0.08]" />
              <div className="w-2.5 h-2.5 rounded-full bg-black/[0.08]" />
              <div className="w-2.5 h-2.5 rounded-full bg-black/[0.08]" />
            </div>
            <div className="w-px h-3.5 bg-black/[0.06]" />
            <span className="text-[11px] text-ink-tertiary font-mono tracking-wide">
              debaser · royalty runs
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-slow" />
            <span className="text-[11px] text-amber-600/80 font-mono">
              in review
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          {/* Run header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="text-[10px] text-ink-tertiary font-mono tracking-wide mb-1">
                Q2 2024 · Atlantic Records UK
              </p>
              <h3 className="text-ink text-xl font-semibold tracking-tight">
                Royalty Distribution Run
              </h3>
            </div>
            <div className="bg-amber-400/10 border border-amber-400/20 rounded-md px-2.5 py-1">
              <span className="text-amber-300 text-xs font-mono">37 issues</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
            <div className="bg-canvas rounded-xl border border-acid/20 p-3.5">
              <div className="text-acid text-xl font-bold tabular-nums">
                £18,420
              </div>
              <div className="text-ink-tertiary text-[11px] mt-0.5 leading-tight">
                suspicious income
              </div>
            </div>
            <div className="bg-canvas rounded-xl border border-black/[0.05] p-3.5">
              <div className="text-ink text-xl font-bold tabular-nums">37</div>
              <div className="text-ink-tertiary text-[11px] mt-0.5 leading-tight">
                issues detected
              </div>
            </div>
            <div className="bg-canvas rounded-xl border border-black/[0.05] p-3.5">
              <div className="text-ink text-xl font-bold tabular-nums">12</div>
              <div className="text-ink-tertiary text-[11px] mt-0.5 leading-tight">
                unmatched recordings
              </div>
            </div>
            <div className="bg-canvas rounded-xl border border-orange-500/20 p-3.5">
              <div className="text-orange-400 text-xl font-bold tabular-nums">
                4
              </div>
              <div className="text-ink-tertiary text-[11px] mt-0.5 leading-tight">
                contract conflicts
              </div>
            </div>
          </div>

          {/* AI analysis panel */}
          <div
            className="rounded-xl p-4 border"
            style={{
              background: "rgba(248, 247, 255, 0.90)",
              borderColor: "rgba(76, 175, 80, 0.30)",
            }}
          >
            <div className="flex items-center gap-2 mb-3.5">
              <div className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse-slow" />
              <span className="text-acid text-[10px] font-mono tracking-wide">
                Findings
              </span>
            </div>

            <div className="space-y-3">
              {[
                {
                  icon: "⚠",
                  color: "text-amber-400",
                  main: "£18,420 in income cannot be attributed to known works",
                  sub: "Spotify UK · 12 recordings with missing or invalid ISRCs",
                  borderBottom: true,
                },
                {
                  icon: "⚠",
                  color: "text-amber-400",
                  main: "Producer deduction applied before recoupment threshold",
                  sub: "Contract clause 4.2(b) — manual review required",
                  borderBottom: true,
                },
                {
                  icon: "ℹ",
                  color: "text-blue-400",
                  main: "3 missing CMO statements identified",
                  sub: "DE, FR, JP · claim evidence prepared",
                  borderBottom: false,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${item.borderBottom ? "pb-3 border-b border-black/[0.05]" : ""}`}
                >
                  <span className={`${item.color} text-xs mt-0.5 flex-shrink-0`}>
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-ink/80 text-[13px] leading-relaxed">
                      {item.main}
                    </p>
                    <p className="text-ink-tertiary text-[11px] mt-0.5 font-mono">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2.5 mt-4 pt-3.5 border-t border-black/[0.05]">
              <button className="flex-1 py-2 text-[13px] text-acid border border-acid/25 rounded-lg hover:bg-acid/5 transition-colors font-medium">
                Investigate
              </button>
              <button className="flex-1 py-2 text-[13px] text-btn-primary-fg bg-btn-primary rounded-lg font-medium hover:bg-btn-primary/90 transition-colors">
                Approve Run
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CataloguePortfolioMockup() {
  const flags = [
    {
      icon: "⚠",
      color: "text-amber-400",
      main: "$1.1M unmatched to known works across the portfolio",
      sub: "Catalogue 142 · Spotify US · 34 recordings with ISRC gaps",
      borderBottom: true,
    },
    {
      icon: "⚠",
      color: "text-amber-400",
      main: "Recoupment clause conflict on a top-20 catalogue",
      sub: "Catalogue 58 · Contract §5.1(c) — manual review required",
      borderBottom: true,
    },
    {
      icon: "ℹ",
      color: "text-blue-400",
      main: "6 catalogues missing CMO statements this quarter",
      sub: "DE, JP, BR · claim evidence already prepared",
      borderBottom: false,
    },
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div
        className="force-light bg-white border border-black/[0.07] rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 0 0 1px rgba(16, 21, 133,0.07), 0 40px 80px rgba(16, 21, 133,0.12), 0 16px 40px rgba(16, 21, 133,0.07)",
        }}
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/[0.05] bg-black/[0.02]">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-black/[0.08]" />
              <div className="w-2.5 h-2.5 rounded-full bg-black/[0.08]" />
              <div className="w-2.5 h-2.5 rounded-full bg-black/[0.08]" />
            </div>
            <div className="w-px h-3.5 bg-black/[0.06]" />
            <span className="text-[11px] text-ink-tertiary font-mono tracking-wide">
              debaser · catalogue portfolio
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse-slow" />
            <span className="text-[11px] text-acid/80 font-mono">
              portfolio synced
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          {/* Portfolio header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="text-[10px] text-ink-tertiary font-mono tracking-wide mb-1">
                Q2 2026 · Portfolio-wide
              </p>
              <h3 className="text-ink text-xl font-semibold tracking-tight">
                Catalogue Portfolio
              </h3>
            </div>
            <div className="bg-black/[0.03] border border-black/[0.06] rounded-md px-2.5 py-1">
              <span className="text-ink-secondary text-xs font-mono">
                212 catalogues
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
            <div className="bg-canvas rounded-xl border border-acid/20 p-3.5">
              <div className="text-acid text-xl font-bold tabular-nums">
                $2.84B
              </div>
              <div className="text-ink-tertiary text-[11px] mt-0.5 leading-tight">
                catalogue value tracked
              </div>
            </div>
            <div className="bg-canvas rounded-xl border border-black/[0.05] p-3.5">
              <div className="text-ink text-xl font-bold tabular-nums">
                $142.6M
              </div>
              <div className="text-ink-tertiary text-[11px] mt-0.5 leading-tight">
                reconciled this quarter
              </div>
            </div>
            <div className="bg-canvas rounded-xl border border-orange-500/20 p-3.5">
              <div className="text-orange-400 text-xl font-bold tabular-nums">
                $6.2M
              </div>
              <div className="text-ink-tertiary text-[11px] mt-0.5 leading-tight">
                flagged for review
              </div>
            </div>
            <div className="bg-canvas rounded-xl border border-black/[0.05] p-3.5">
              <div className="text-ink text-xl font-bold tabular-nums">96%</div>
              <div className="text-ink-tertiary text-[11px] mt-0.5 leading-tight">
                portfolio reconciled
              </div>
            </div>
          </div>

          {/* AI analysis panel */}
          <div
            className="rounded-xl p-4 border"
            style={{
              background: "rgba(248, 247, 255, 0.90)",
              borderColor: "rgba(76, 175, 80, 0.30)",
            }}
          >
            <div className="flex items-center gap-2 mb-3.5">
              <div className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse-slow" />
              <span className="text-acid text-[10px] font-mono tracking-wide">
                Findings
              </span>
            </div>

            <div className="space-y-3">
              {flags.map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${item.borderBottom ? "pb-3 border-b border-black/[0.05]" : ""}`}
                >
                  <span className={`${item.color} text-xs mt-0.5 flex-shrink-0`}>
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-ink/80 text-[13px] leading-relaxed">
                      {item.main}
                    </p>
                    <p className="text-ink-tertiary text-[11px] mt-0.5 font-mono">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2.5 mt-4 pt-3.5 border-t border-black/[0.05]">
              <button className="flex-1 py-2 text-[13px] text-acid border border-acid/25 rounded-lg hover:bg-acid/5 transition-colors font-medium">
                View portfolio
              </button>
              <button className="flex-1 py-2 text-[13px] text-btn-primary-fg bg-btn-primary rounded-lg font-medium hover:bg-btn-primary/90 transition-colors">
                Export LP report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { variant } = useHomepageVariant();
  const isV2 = variant === "v2";
  const content = getHomepageContent(variant).hero;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-0">
      {/* Background */}
      <div className="absolute inset-0 bg-dot-grid opacity-60" />

      <div className="relative w-full max-w-6xl mx-auto px-6 text-center">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 bg-acid-dim border border-acid-border rounded-full px-3.5 py-1.5 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-acid" />
          <Editable
            as="span"
            path="hero.eyebrow"
            value={content.eyebrow}
            className="text-acid text-xs font-mono tracking-wide"
          />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          animate="show"
        >
          <Editable
            as="span"
            path="hero.headline"
            value={content.headline}
            className="block text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold text-ink leading-[1.04] tracking-tightest mb-6 text-balance max-w-4xl mx-auto"
          />
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          animate="show"
          className="text-lg sm:text-xl text-ink-secondary leading-relaxed max-w-2xl mx-auto mb-10 text-balance"
        >
          <Editable path="hero.subhead" value={content.subhead} />
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
        >
          <a
            href="#access"
            className="w-full sm:w-auto bg-btn-primary text-btn-primary-fg font-medium px-6 py-3 rounded-lg text-[15px] hover:bg-btn-primary/90 transition-all hover:shadow-acid-glow"
          >
            <Editable path="hero.ctaPrimary" value={content.ctaPrimary} />
          </a>
          <a
            href="#product"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-black/[0.1] text-ink-secondary hover:text-ink hover:border-black/[0.18] font-medium px-6 py-3 rounded-lg text-[15px] transition-all"
          >
            <Editable path="hero.ctaSecondary" value={content.ctaSecondary} />
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="opacity-60"
            >
              <path
                d="M1 7h12M7 1l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

        {content.note && (
          <motion.p
            variants={fadeUp}
            custom={0.35}
            initial="hidden"
            animate="show"
            className="text-ink-tertiary text-sm mb-12"
          >
            <Editable path="hero.note" value={content.note} />
          </motion.p>
        )}

        <motion.div
          variants={fadeUp}
          custom={0.45}
          initial="hidden"
          animate="show"
          className={content.note ? "" : "mt-12"}
        >
          {variant === "v3" ? (
            <CataloguePortfolioMockup />
          ) : isV2 ? (
            <RoyaltyReviewMockup />
          ) : (
            <RoyaltyRunMockup />
          )}
        </motion.div>
      </div>
    </section>
  );
}
