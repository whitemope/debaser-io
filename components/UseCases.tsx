"use client";

import { motion } from "framer-motion";
import { EASE, cardVariants, containerVariants } from "@/lib/animation";
import { useHomepageVariant } from "@/components/HomepageVariantContext";
import { useHomepageContentLive } from "@/lib/live-content";
import Editable from "@/components/Editable";

export default function UseCases() {
  const { variant } = useHomepageVariant();
  const content = useHomepageContentLive(variant).useCases;
  const useCases = content.items;

  return (
    <section id="use-cases" className="py-28 md:py-36 bg-canvas relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16"
        >
          <p className="text-ink-tertiary text-xs font-mono tracking-wide mb-4">
            Use cases
          </p>
          <Editable
            as="h2"
            path="useCases.headline"
            value={content.headline}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.1] text-balance max-w-xl block"
          />
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
                <Editable
                  path={`useCases.items.${i}.category`}
                  value={uc.category}
                  className="text-[10px] font-mono text-acid tracking-wide bg-acid-dim border border-acid-border rounded-full px-2.5 py-1"
                />
              </div>
              <Editable
                as="h3"
                path={`useCases.items.${i}.headline`}
                value={uc.headline}
                className="text-ink font-semibold text-[17px] leading-snug mb-3 tracking-tight block"
              />
              <Editable
                as="p"
                path={`useCases.items.${i}.description`}
                value={uc.description}
                className="text-ink-secondary text-sm leading-relaxed block"
              />
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
