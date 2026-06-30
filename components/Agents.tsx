"use client";

import { motion } from "framer-motion";
import { EASE, cardVariants, containerVariants } from "@/lib/animation";

const agents = [
  {
    name: "Ingestion Agent",
    description:
      "Maps messy CSVs, PDFs, API exports and portal data into a standard royalty schema — regardless of source format.",
    tags: ["CSV · PDF · Portal", "Schema normalisation"],
  },
  {
    name: "Contract Agent",
    description:
      "Extracts splits, rates, territories, deductions, recoupment clauses and exceptions directly from contract documents.",
    tags: ["Rate extraction", "Clause indexing"],
  },
  {
    name: "Matching Agent",
    description:
      "Links income to ISRCs, ISWCs, artists, writers, labels, works and recordings across your rights catalogue.",
    tags: ["ISRC · ISWC · Works", "Multi-source matching"],
  },
  {
    name: "Exception Agent",
    description:
      "Finds duplicates, missing splits, unexplained income drops, expired contracts and unmatched source rows.",
    tags: ["Anomaly detection", "Income variance"],
  },
  {
    name: "Audit Agent",
    description:
      "Compares expected income against received statements, surfaces gaps and prepares claim evidence by territory.",
    tags: ["Statement variance", "Claim evidence"],
  },
  {
    name: "Ops Agent",
    description:
      "Turns every royalty run into a prioritised action list your team can work through before a single payment goes out.",
    tags: ["Action list", "Run management"],
  },
];


export default function Agents() {
  return (
    <section
      id="agents"
      className="py-28 md:py-36 bg-canvas-subtle relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(30,21,18,0.03) 0%, transparent 70%)",
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
            AI agents
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.1] mb-4 text-balance max-w-2xl mx-auto">
            Agents for the royalty work nobody wants to do manually.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {agents.map((agent, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group bg-canvas border border-black/[0.05] rounded-2xl p-6 hover:border-black/[0.1] hover:bg-canvas-card transition-all duration-300 cursor-default"
              style={{
                boxShadow: "0 0 0 1px rgba(30,21,18,0.04)",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-acid-dim border border-acid-border flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-acid" />
                </div>
              </div>
              <h3 className="text-ink font-semibold text-[15px] mb-2.5 tracking-tight">
                {agent.name}
              </h3>
              <p className="text-ink-secondary text-sm leading-relaxed mb-5">
                {agent.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {agent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-ink-tertiary bg-black/[0.04] border border-black/[0.05] rounded-md px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Principle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="mt-12 text-center"
        >
          <div className="inline-block border border-black/[0.07] rounded-2xl px-8 py-5 bg-canvas-card">
            <p className="text-ink text-base sm:text-lg font-medium tracking-tight">
              AI investigates.{" "}
              <span className="text-ink-secondary">Humans approve.</span>{" "}
              <span className="text-ink-tertiary">Deterministic engines calculate.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
