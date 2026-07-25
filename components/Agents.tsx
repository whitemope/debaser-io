"use client";

import { motion } from "framer-motion";
import { EASE, cardVariants, containerVariants } from "@/lib/animation";
import { useHomepageVariant } from "@/components/HomepageVariantContext";
import { getHomepageContent } from "@/lib/homepage-content";
import Editable from "@/components/Editable";

export default function Agents() {
  const { variant } = useHomepageVariant();
  const isV2 = variant === "v2";
  const content = getHomepageContent(variant).agents;
  const agents = content.items;

  return (
    <section
      id="agents"
      className="py-28 md:py-36 bg-canvas-subtle relative overflow-hidden scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center mb-16"
        >
          <Editable
            path="agents.eyebrow"
            value={content.eyebrow}
            className="text-ink-tertiary text-xs font-mono tracking-wide mb-4 block"
          />
          <Editable
            as="h2"
            path="agents.headline"
            value={content.headline}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.1] mb-4 text-balance max-w-2xl mx-auto block"
          />
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
                boxShadow: "0 0 0 1px rgba(16, 21, 133,0.04)",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-acid-dim border border-acid-border flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-acid" />
                </div>
              </div>
              <Editable
                as="h3"
                path={`agents.items.${i}.name`}
                value={agent.name}
                className="text-ink font-semibold text-[15px] mb-2.5 tracking-tight block"
              />
              <Editable
                as="p"
                path={`agents.items.${i}.description`}
                value={agent.description}
                className="text-ink-secondary text-sm leading-relaxed mb-5 block"
              />
              {agent.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {agent.tags.map((tag, tagIndex) => (
                    <Editable
                      key={tagIndex}
                      path={`agents.items.${i}.tags.${tagIndex}`}
                      value={tag}
                      className="text-[10px] font-mono text-ink-tertiary bg-black/[0.04] border border-black/[0.05] rounded-md px-2 py-0.5"
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {isV2 && content.note && (
          <p className="text-ink-tertiary text-sm text-center mt-8">
            <Editable path="agents.note" value={content.note} />
          </p>
        )}

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
              <Editable
                path="agents.principle.lead"
                value={content.principle.lead}
              />{" "}
              <Editable
                path="agents.principle.mid"
                value={content.principle.mid}
                className="text-ink-secondary"
              />{" "}
              <Editable
                path="agents.principle.tail"
                value={content.principle.tail}
                className="text-ink-tertiary"
              />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
