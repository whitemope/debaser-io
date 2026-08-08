"use client";

import { motion } from "framer-motion";
import { EASE, cardVariants, containerVariants } from "@/lib/animation";
import { useHomepageVariant } from "@/components/HomepageVariantContext";
import { getHomepageContent } from "@/lib/homepage-content";
import Editable from "@/components/Editable";

export default function Problem() {
  const { variant } = useHomepageVariant();
  const content = getHomepageContent(variant).problem;
  const problems = content.items;

  return (
    <section className="py-28 md:py-36 bg-canvas-subtle relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl mb-16"
        >
          <Editable
            path="problem.eyebrow"
            value={content.eyebrow}
            className="text-ink-tertiary text-xs font-mono tracking-wide mb-4 block"
          />
          <Editable
            as="h2"
            path="problem.headline"
            value={content.headline}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.1] text-balance"
          />
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
                {String(i + 1).padStart(2, "0")}
              </span>
              <Editable
                as="h3"
                path={`problem.items.${i}.title`}
                value={problem.title}
                className="text-ink text-[15px] font-semibold leading-snug mb-3 tracking-tight block"
              />
              {problem.description && (
                <Editable
                  as="p"
                  path={`problem.items.${i}.description`}
                  value={problem.description}
                  className="text-ink-secondary text-sm leading-relaxed block"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {content.closingLine && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-ink text-base font-medium mt-8"
          >
            <Editable path="problem.closingLine" value={content.closingLine} />
          </motion.p>
        )}
      </div>
    </section>
  );
}
