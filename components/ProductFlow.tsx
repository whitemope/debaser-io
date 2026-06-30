"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/animation";

const steps = [
  {
    number: "01",
    label: "Ingest",
    description:
      "Pull in statements, contracts and catalogue data from any source — CSV, PDF, portal export or API feed.",
    detail: "DSPs · CMOs · Portals · PDFs · APIs",
  },
  {
    number: "02",
    label: "Match",
    description:
      "Link income to ISRCs, ISWCs, works, recordings, writers, labels and ownership splits across your catalogue.",
    detail: "ISRC · ISWC · Work codes · Party IDs",
  },
  {
    number: "03",
    label: "Analyse",
    description:
      "Surface anomalies, variance from expected income, contract exceptions and metadata conflicts automatically.",
    detail: "Variance · Anomalies · Gaps · Conflicts",
  },
  {
    number: "04",
    label: "Explain",
    description:
      "Generate source-backed answers to any payment question — with references to rows, clauses and metadata.",
    detail: "Source rows · Contract clauses · Audit trail",
  },
  {
    number: "05",
    label: "Resolve",
    description:
      "Turn every issue into a prioritised action. Prepare claims, approve payments, and close the loop before statements go out.",
    detail: "Actions · Claims · Approvals · Exports",
  },
];

export default function ProductFlow() {
  return (
    <section id="product" className="py-28 md:py-36 bg-canvas relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(144,19,254,0.025) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="text-ink-tertiary text-xs font-mono uppercase tracking-[0.18em] mb-4">
            The workflow
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.1] mb-4">
            From statement to explanation.
          </h2>
          <p className="text-ink-secondary text-lg max-w-xl mx-auto">
            Debaser turns messy royalty inputs into a source-backed operational
            workflow your team can trust.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(10%+32px)] right-[calc(10%+32px)] h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  ease: EASE,
                  delay: i * 0.08,
                }}
                className="relative group"
              >
                <div className="bg-canvas-card border border-black/[0.05] rounded-2xl p-5 h-full hover:border-black/[0.1] transition-all duration-300 hover:bg-canvas-elevated">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-canvas border border-black/[0.07] flex items-center justify-center">
                      <span className="text-ink-tertiary text-xs font-mono">
                        {step.number}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <svg
                        className="hidden lg:block absolute -right-3 top-[52px] -translate-y-1/2 z-10 text-black/[0.12]"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6h8M6 2l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>

                  <h3 className="text-ink font-semibold text-base mb-2 tracking-tight">
                    {step.label}
                  </h3>
                  <p className="text-ink-secondary text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <p className="text-ink-tertiary text-[11px] font-mono leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
