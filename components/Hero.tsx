"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/animation";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

function RoyaltyRunMockup() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div
        className="bg-white border border-black/[0.07] rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 0 0 1px rgba(30,21,18,0.07), 0 40px 80px rgba(30,21,18,0.12), 0 16px 40px rgba(30,21,18,0.07)",
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
              <p className="text-[10px] text-ink-tertiary font-mono uppercase tracking-[0.18em] mb-1">
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
              borderColor: "rgba(144, 19, 254, 0.30)",
            }}
          >
            <div className="flex items-center gap-2 mb-3.5">
              <div className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse-slow" />
              <span className="text-acid text-[10px] font-mono uppercase tracking-[0.18em]">
                AI Analysis
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
              <button className="flex-1 py-2 text-[13px] text-canvas bg-acid rounded-lg font-semibold hover:bg-acid/90 transition-colors">
                Approve Run
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 rounded-b-2xl pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--hero-fade) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-0">
      {/* Background */}
      <div className="absolute inset-0 bg-dot-grid opacity-60" />
      {/* Noisy orange gradient bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% 0%, rgba(240,148,72,0.13) 0%, rgba(240,100,60,0.04) 45%, transparent 70%)",
          filter: "url(#grain)",
        }}
      />
      <svg width="0" height="0" className="absolute">
        <filter id="grain" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" result="noise"/>
          <feComposite in="SourceGraphic" in2="noise" operator="in"/>
        </filter>
      </svg>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 40% at 50% 100%, rgba(250,240,235,0.98) 0%, transparent 60%)",
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-6 text-center">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 bg-acid-dim border border-acid-border rounded-full px-3.5 py-1.5 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-acid" />
          <span className="text-acid text-xs font-mono uppercase tracking-[0.15em]">
            Now in early access
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          animate="show"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold text-ink leading-[1.04] tracking-tightest mb-6 text-balance max-w-4xl mx-auto"
        >
          The AI operating system for{" "}
          <span className="text-acid">music royalties.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          animate="show"
          className="text-lg sm:text-xl text-ink-secondary leading-relaxed max-w-2xl mx-auto mb-10 text-balance"
        >
          Debaser helps labels, publishers and catalogue owners ingest
          statements, understand contracts, detect missing income, and explain
          every royalty payment — before the run goes wrong.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20"
        >
          <a
            href="#access"
            className="w-full sm:w-auto bg-acid text-canvas font-semibold px-6 py-3 rounded-lg text-[15px] hover:bg-acid/90 transition-all hover:shadow-acid-glow"
          >
            Request early access
          </a>
          <a
            href="#product"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-black/[0.1] text-ink-secondary hover:text-ink hover:border-black/[0.18] font-medium px-6 py-3 rounded-lg text-[15px] transition-all"
          >
            See how it works
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

        <motion.div
          variants={fadeUp}
          custom={0.45}
          initial="hidden"
          animate="show"
        >
          <RoyaltyRunMockup />
        </motion.div>
      </div>
    </section>
  );
}
