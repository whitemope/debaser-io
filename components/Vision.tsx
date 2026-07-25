"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/animation";
import { useHomepageVariant } from "@/components/HomepageVariantContext";
import { getHomepageContent } from "@/lib/homepage-content";
import Editable from "@/components/Editable";

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

        {/* Rights graph visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div
            className="relative bg-canvas-card border border-black/[0.05] rounded-2xl p-8"
            style={{
              boxShadow: "0 0 0 1px rgba(16, 21, 133,0.05)",
            }}
          >
            <p className="text-ink-tertiary text-[10px] font-mono tracking-wide mb-6">
              Rights graph · prototype
            </p>

            {/* Node graph visual */}
            <div className="relative h-48 flex items-center justify-center">
              {/* Central node */}
              <div
                className="absolute w-12 h-12 rounded-full border border-acid/30 bg-acid-dim flex items-center justify-center"
                style={{ boxShadow: "0 0 24px rgba(76, 175, 80,0.12)" }}
              >
                <span className="text-acid text-[10px] font-mono">song</span>
              </div>

              {/* Satellite nodes */}
              {[
                {
                  label: "label",
                  color: "border-blue-400/30 text-blue-400",
                  style: { top: "5%", left: "10%" },
                },
                {
                  label: "writer",
                  color: "border-purple-400/30 text-purple-400",
                  style: { top: "5%", right: "12%" },
                },
                {
                  label: "ISRC",
                  color: "border-ink-tertiary/40 text-ink-tertiary",
                  style: { top: "50%", left: "2%", transform: "translateY(-50%)" },
                },
                {
                  label: "publisher",
                  color: "border-purple-400/30 text-purple-400",
                  style: {
                    top: "50%",
                    right: "3%",
                    transform: "translateY(-50%)",
                  },
                },
                {
                  label: "Spotify",
                  color: "border-acid/20 text-acid/70",
                  style: { bottom: "5%", left: "10%" },
                },
                {
                  label: "contract",
                  color: "border-amber-400/30 text-amber-400",
                  style: { bottom: "0%", right: "12%" },
                },
                {
                  label: "ISWC",
                  color: "border-ink-tertiary/40 text-ink-tertiary",
                  style: { bottom: "40%", left: "26%" },
                },
                {
                  label: "income",
                  color: "border-acid/30 text-acid",
                  style: { bottom: "40%", right: "28%" },
                },
              ].map((node, i) => (
                <div
                  key={i}
                  className={`absolute border rounded-full px-2.5 py-1 text-[10px] font-mono ${node.color} bg-canvas-subtle/80 backdrop-blur-sm`}
                  style={node.style}
                >
                  {node.label}
                </div>
              ))}

              {/* Connecting lines */}
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.12]"
                style={{ pointerEvents: "none" }}
              >
                <line
                  x1="50%"
                  y1="50%"
                  x2="15%"
                  y2="12%"
                  stroke="#4CAF50"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="85%"
                  y2="12%"
                  stroke="#4CAF50"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="5%"
                  y2="50%"
                  stroke="#4CAF50"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="96%"
                  y2="50%"
                  stroke="#4CAF50"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="15%"
                  y2="88%"
                  stroke="#4CAF50"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="85%"
                  y2="93%"
                  stroke="#4CAF50"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="33%"
                  y2="62%"
                  stroke="#4CAF50"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="68%"
                  y2="62%"
                  stroke="#4CAF50"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>

            <Editable
              as="p"
              path="vision.graphCaption"
              value={content.graphCaption}
              className="text-ink-tertiary text-[11px] font-mono mt-6 text-center block"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
