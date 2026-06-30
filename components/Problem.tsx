"use client";

import { motion } from "framer-motion";
import { EASE, cardVariants, containerVariants } from "@/lib/animation";

const problems = [
  {
    label: "01",
    title: "Statements arrive in incompatible formats.",
    description:
      "CSV from one DSP. PDF from another. A portal export that doesn't match the previous quarter. No two sources speak the same language.",
  },
  {
    label: "02",
    title: "Contracts live outside the systems that calculate payments.",
    description:
      "Rates, splits, territories and deductions exist in PDFs no system has ever read. Every calculation is manual, and manual is wrong.",
  },
  {
    label: "03",
    title: "Metadata breaks before money moves.",
    description:
      "Missing ISRCs. Misspelled artist names. Recordings that exist under three different titles. Income that cannot find its owner.",
  },
  {
    label: "04",
    title: "Artists ask questions finance teams cannot answer quickly.",
    description:
      "\"Why did my income drop 30%?\" Answering that question takes days. The audit trail is a spreadsheet buried in email.",
  },
  {
    label: "05",
    title: "Missing income is discovered late, if ever.",
    description:
      "Underpayments go unchallenged. CMO collections are never chased. Gap analysis requires expertise most teams do not have time for.",
  },
];


export default function Problem() {
  return (
    <section className="py-28 md:py-36 bg-canvas-subtle relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(30,21,18,0.04) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl mb-16"
        >
          <p className="text-ink-tertiary text-xs font-mono uppercase tracking-[0.18em] mb-4">
            The problem
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.1] text-balance">
            Royalty operations are still held together by spreadsheets, PDFs and
            hope.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.04] rounded-2xl overflow-hidden border border-black/[0.05]"
        >
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`bg-canvas-subtle p-8 group hover:bg-canvas-card transition-colors duration-300 ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <span className="text-ink-tertiary text-xs font-mono mb-5 block">
                {problem.label}
              </span>
              <h3 className="text-ink text-[15px] font-semibold leading-snug mb-3 tracking-tight">
                {problem.title}
              </h3>
              <p className="text-ink-secondary text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
