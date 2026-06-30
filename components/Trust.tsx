"use client";

import { motion } from "framer-motion";
import { EASE, cardVariants, containerVariants } from "@/lib/animation";

const trustItems = [
  {
    title: "Role-based access",
    description:
      "Control exactly who sees what — by catalogue, territory, deal type or run stage.",
  },
  {
    title: "Audit trails",
    description:
      "Every action is logged with timestamp and user. Every AI output is traceable to source data.",
  },
  {
    title: "Source-backed AI",
    description:
      "No output without evidence. Every insight references the row, document or clause it came from.",
  },
  {
    title: "Human approval workflows",
    description:
      "AI flags and investigates. Humans review and approve. No royalty run goes out without sign-off.",
  },
  {
    title: "Private workspaces",
    description:
      "Your data stays yours. Isolated tenancy, no cross-client data access by design.",
  },
  {
    title: "Exportable evidence",
    description:
      "Every claim, audit and discrepancy is exportable in formats your legal and finance teams can use.",
  },
  {
    title: "Designed for compliance",
    description:
      "Architecture and workflows designed for the governance standards expected by serious music companies.",
  },
  {
    title: "Transparent outputs",
    description:
      "Every recommendation includes the confidence level, the reasoning and the raw source it draws from.",
  },
];


export default function Trust() {
  return (
    <section className="py-28 md:py-36 bg-canvas-subtle relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(30,21,18,0.04) 0%, transparent 70%)",
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
            Trust and security
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.1] mb-4 text-balance max-w-xl mx-auto">
            Built for sensitive music rights data.
          </h2>
          <p className="text-ink-secondary text-lg max-w-xl mx-auto">
            Royalty data is some of the most commercially sensitive information
            in the music industry. We treat it accordingly.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {trustItems.map((item_data, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-canvas border border-black/[0.05] rounded-2xl p-5 hover:border-black/[0.09] transition-colors duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-acid-dim border border-acid-border flex items-center justify-center mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-acid/70" />
              </div>
              <h3 className="text-ink font-semibold text-sm mb-2 tracking-tight">
                {item_data.title}
              </h3>
              <p className="text-ink-secondary text-[13px] leading-relaxed">
                {item_data.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
