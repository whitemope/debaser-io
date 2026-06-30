"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/animation";

const sources = [
  { label: "Spotify Q2 Statement", detail: "rows 2,847–2,851 · ISRC gap" },
  { label: "Recording metadata", detail: "ISRC validation report" },
  { label: "Contract §4.2(b)", detail: "Producer deduction clause" },
];

function ExplainChat() {
  return (
    <div
      className="force-light bg-canvas-card border border-black/[0.05] rounded-2xl overflow-hidden"
      style={{
        boxShadow:
          "0 0 0 1px rgba(30,21,18,0.05), 0 24px 48px rgba(30,21,18,0.07)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-5 py-4 border-b border-black/[0.05] bg-canvas-subtle/40">
        <div className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse-slow" />
        <span className="text-ink-tertiary text-[11px] font-mono uppercase tracking-[0.15em]">
          Ask Debaser
        </span>
      </div>

      <div className="p-5 space-y-4">
        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-canvas-elevated border border-black/[0.06] rounded-2xl rounded-tr-md px-4 py-3 max-w-[80%]">
            <p className="text-ink text-sm">
              Why did this artist earn less this quarter?
            </p>
          </div>
        </div>

        {/* AI response */}
        <div className="flex gap-3">
          <div className="w-7 h-7 rounded-full bg-acid-dim border border-acid-border flex items-center justify-center flex-shrink-0 mt-0.5">
            <div className="w-2 h-2 rounded-full bg-acid" />
          </div>
          <div className="flex-1 space-y-3">
            <div className="bg-canvas-subtle border border-black/[0.05] rounded-2xl rounded-tl-md px-4 py-4">
              <p className="text-ink/85 text-sm leading-[1.65]">
                Spotify UK income dropped{" "}
                <span className="text-amber-300 font-medium">31%</span> versus
                Q1. Two tracks were unmatched due to missing ISRCs, accounting
                for an estimated{" "}
                <span className="text-acid font-medium">£3,100</span> in
                unattributed income. Additionally, the producer deduction was
                applied before the recoupment threshold was reached, which is
                inconsistent with clause 4.2(b) of the recording agreement.
              </p>
            </div>

            {/* Source references */}
            <div className="border border-black/[0.05] rounded-xl p-3 bg-canvas-subtle/50">
              <p className="text-ink-tertiary text-[10px] font-mono uppercase tracking-[0.15em] mb-2.5">
                Sources
              </p>
              <div className="space-y-2">
                {sources.map((source, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-acid mt-0.5 flex-shrink-0"
                    >
                      <path
                        d="M1 11L11 1M11 1H4M11 1v7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      <span className="text-ink/70 text-[12px] font-medium">
                        {source.label}
                      </span>
                      <span className="text-ink-tertiary text-[11px] font-mono ml-2">
                        {source.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input area */}
      <div className="px-5 pb-5">
        <div className="flex items-center gap-3 bg-canvas border border-black/[0.07] rounded-xl px-4 py-3">
          <span className="text-ink-tertiary text-sm flex-1">
            Ask about any payment, recording or contract...
          </span>
          <button
            className="w-7 h-7 rounded-lg bg-acid flex items-center justify-center flex-shrink-0"
            aria-label="Send"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="text-canvas"
            >
              <path
                d="M6 10V2M2 6l4-4 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Explainability() {
  return (
    <section className="py-28 md:py-36 bg-canvas relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(144,19,254,0.02) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="order-2 lg:order-1"
          >
            <ExplainChat />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="order-1 lg:order-2"
          >
            <p className="text-ink-tertiary text-xs font-mono uppercase tracking-[0.18em] mb-4">
              Explainability
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.1] mb-6 text-balance">
              Every number should be able to defend itself.
            </h2>
            <p className="text-ink-secondary text-lg leading-relaxed mb-6">
              Ask why a royalty amount changed and Debaser traces the answer
              back to source rows, catalogue metadata and contract terms.
            </p>
            <p className="text-ink-secondary text-base leading-relaxed">
              Not a summary. Not a hallucination. A structured answer with
              direct references to the evidence — so your team can verify,
              audit and act.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
