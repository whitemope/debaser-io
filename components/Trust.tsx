"use client";

import { motion } from "framer-motion";
import { EASE, cardVariants, containerVariants } from "@/lib/animation";
import { useHomepageVariant } from "@/components/HomepageVariantContext";
import { getHomepageContent } from "@/lib/homepage-content";
import Editable from "@/components/Editable";

export default function Trust() {
  const { variant } = useHomepageVariant();
  const isV2 = variant === "v2";
  const content = getHomepageContent(variant).trust;
  const trustItems = content.items;

  return (
    <section className="py-28 md:py-36 bg-canvas-subtle relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center mb-16"
        >
          <Editable
            path="trust.eyebrow"
            value={content.eyebrow}
            className="text-ink-tertiary text-xs font-mono tracking-wide mb-4 block"
          />
          <Editable
            as="h2"
            path="trust.headline"
            value={content.headline}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.1] mb-4 text-balance max-w-xl mx-auto block"
          />
          <Editable
            as="p"
            path="trust.subhead"
            value={content.subhead}
            className="text-ink-secondary text-lg max-w-xl mx-auto block"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className={`grid sm:grid-cols-2 gap-4 ${isV2 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}
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
              <Editable
                as="h3"
                path={`trust.items.${i}.title`}
                value={item_data.title}
                className="text-ink font-semibold text-sm mb-2 tracking-tight block"
              />
              <Editable
                as="p"
                path={`trust.items.${i}.description`}
                value={item_data.description}
                className="text-ink-secondary text-[13px] leading-relaxed block"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
