"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/animation";
import { useHomepageVariant } from "@/components/HomepageVariantContext";
import { getHomepageContent } from "@/lib/homepage-content";
import Editable from "@/components/Editable";
import GhostMark from "@/components/GhostMark";

export default function Vision() {
  const { variant } = useHomepageVariant();
  const content = getHomepageContent(variant).vision;

  return (
    <section
      id="vision"
      className="py-28 md:py-40 bg-canvas relative overflow-hidden scroll-mt-16"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-dot-grid opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <Editable
            path="vision.eyebrow"
            value={content.eyebrow}
            className="text-ink-tertiary text-xs font-mono tracking-wide mb-6 block"
          />
          <Editable
            as="h2"
            path="vision.headline"
            value={content.headline}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.06] mb-8 text-balance max-w-3xl mx-auto tracking-tightest block"
          />
          <Editable
            as="p"
            path="vision.body1"
            value={content.body1}
            className="text-ink-secondary text-xl leading-relaxed max-w-2xl mx-auto mb-6 block"
          />
          <Editable
            as="p"
            path="vision.body2"
            value={content.body2}
            className="text-ink-tertiary text-base leading-relaxed max-w-xl mx-auto block"
          />
        </motion.div>

        {/* Ghost mark */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="mt-20 flex justify-center"
        >
          <div className="relative">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgb(var(--ink) / 0.16), transparent 70%)",
              }}
            />
            <GhostMark className="relative w-40 h-44 sm:w-56 sm:h-64 md:w-64 md:h-72 text-ink" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
