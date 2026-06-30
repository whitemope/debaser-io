"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/animation";

export default function Vision() {
  return (
    <section
      id="vision"
      className="py-28 md:py-40 bg-canvas relative overflow-hidden"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-dot-grid opacity-30" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(144,19,254,0.04) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 40% at 50% 100%, rgb(var(--section-fade) / 0.90) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <p className="text-ink-tertiary text-xs font-mono uppercase tracking-[0.18em] mb-6">
            The vision
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.06] mb-8 text-balance max-w-3xl mx-auto tracking-tightest">
            The rights graph for the global music economy.
          </h2>
          <p className="text-ink-secondary text-xl leading-relaxed max-w-2xl mx-auto mb-6">
            Royalty intelligence is the wedge. The long-term vision is a
            connected rights graph that understands songs, recordings, contracts,
            ownership, usage and payments — across every territory and revenue
            stream.
          </p>
          <p className="text-ink-tertiary text-base leading-relaxed max-w-xl mx-auto">
            We are starting where the pain is deepest: the operational layer
            where statements arrive, income goes missing and teams are drowning
            in work that software should be doing.
          </p>
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
              boxShadow: "0 0 0 1px rgba(30,21,18,0.05)",
            }}
          >
            <p className="text-ink-tertiary text-[10px] font-mono uppercase tracking-[0.18em] mb-6">
              Rights graph · prototype
            </p>

            {/* Node graph visual */}
            <div className="relative h-48 flex items-center justify-center">
              {/* Central node */}
              <div
                className="absolute w-12 h-12 rounded-full border border-acid/30 bg-acid-dim flex items-center justify-center"
                style={{ boxShadow: "0 0 24px rgba(144,19,254,0.12)" }}
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
                  stroke="#9013FE"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="85%"
                  y2="12%"
                  stroke="#9013FE"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="5%"
                  y2="50%"
                  stroke="#9013FE"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="96%"
                  y2="50%"
                  stroke="#9013FE"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="15%"
                  y2="88%"
                  stroke="#9013FE"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="85%"
                  y2="93%"
                  stroke="#9013FE"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="33%"
                  y2="62%"
                  stroke="#9013FE"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="68%"
                  y2="62%"
                  stroke="#9013FE"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>

            <p className="text-ink-tertiary text-[11px] font-mono mt-6 text-center">
              Songs → Recordings → Contracts → Income → Ownership → Usage
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
