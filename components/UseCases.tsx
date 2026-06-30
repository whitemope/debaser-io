"use client";

import { motion } from "framer-motion";
import { EASE, cardVariants, containerVariants } from "@/lib/animation";

const useCases = [
  {
    category: "Labels",
    headline: "Reconcile before statements go out.",
    description:
      "Ingest distributor and DSP income, match it to your catalogue, and catch every discrepancy before artists and writers are paid.",
  },
  {
    category: "Publishers",
    headline: "Contracts and income in one place.",
    description:
      "Connect works, writers, splits and income with contract-backed clarity. Know what every co-pub agreement should be generating.",
  },
  {
    category: "Catalogue funds",
    headline: "Monitor every acquisition.",
    description:
      "Track performance, anomalies and missing income across acquired rights. Surface underperformers and unrecovered income at scale.",
  },
  {
    category: "Artist management",
    headline: "Audit income with evidence.",
    description:
      "Challenge bad statements with source-level evidence. Know exactly which DSPs, territories and releases are underperforming.",
  },
  {
    category: "Neighbouring rights",
    headline: "Compare usage, claims and collections.",
    description:
      "Map usage signals to collection statements across territories. Surface gaps between what was claimed and what was received.",
  },
];


export default function UseCases() {
  return (
    <section id="use-cases" className="py-28 md:py-36 bg-canvas relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16"
        >
          <p className="text-ink-tertiary text-xs font-mono uppercase tracking-[0.18em] mb-4">
            Use cases
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.1] text-balance max-w-xl">
            Built for the teams behind the catalogue.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`group relative bg-canvas-card border border-black/[0.05] rounded-2xl p-7 hover:border-black/[0.1] transition-all duration-300 ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-[10px] font-mono text-acid uppercase tracking-[0.16em] bg-acid-dim border border-acid-border rounded-full px-2.5 py-1">
                  {uc.category}
                </span>
              </div>
              <h3 className="text-ink font-semibold text-[17px] leading-snug mb-3 tracking-tight">
                {uc.headline}
              </h3>
              <p className="text-ink-secondary text-sm leading-relaxed">
                {uc.description}
              </p>
              <div className="absolute bottom-7 right-7 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-ink-tertiary"
                >
                  <path
                    d="M1 13L13 1M13 1H4M13 1v9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
