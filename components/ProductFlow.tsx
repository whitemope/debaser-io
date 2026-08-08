"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/animation";
import { useHomepageVariant } from "@/components/HomepageVariantContext";
import { useHomepageContentLive } from "@/lib/live-content";
import Editable from "@/components/Editable";

export default function ProductFlow() {
  const { variant } = useHomepageVariant();
  const isV2 = variant === "v2";
  const content = useHomepageContentLive(variant).productFlow;
  const steps = content.steps;

  return (
    <section id="product" className="py-28 md:py-36 bg-canvas relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center mb-16"
        >
          <Editable
            path="productFlow.eyebrow"
            value={content.eyebrow}
            className="text-ink-tertiary text-xs font-mono tracking-wide mb-4 block"
          />
          <Editable
            as="h2"
            path="productFlow.headline"
            value={content.headline}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.1] mb-4 block"
          />
          <Editable
            as="p"
            path="productFlow.subhead"
            value={content.subhead}
            className="text-ink-secondary text-lg max-w-xl mx-auto block"
          />
        </motion.div>

        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(10%+32px)] right-[calc(10%+32px)] h-px bg-white/[0.08]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  ease: EASE,
                  delay: i * 0.08,
                }}
                className="relative group"
              >
                <div className="bg-canvas-card border border-black/[0.05] rounded-2xl p-5 h-full hover:border-black/[0.1] transition-all duration-300 hover:bg-canvas-elevated">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-canvas border border-black/[0.07] flex items-center justify-center">
                      <span className="text-ink-tertiary text-xs font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <svg
                        className="hidden lg:block absolute -right-3 top-[52px] -translate-y-1/2 z-10 text-black/[0.12]"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6h8M6 2l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>

                  <Editable
                    as="h3"
                    path={`productFlow.steps.${i}.label`}
                    value={step.label}
                    className="text-ink font-semibold text-base mb-2 tracking-tight block"
                  />
                  <Editable
                    as="p"
                    path={`productFlow.steps.${i}.description`}
                    value={step.description}
                    className="text-ink-secondary text-sm leading-relaxed mb-4 block"
                  />
                  {step.detail && (
                    <Editable
                      as="p"
                      path={`productFlow.steps.${i}.detail`}
                      value={step.detail}
                      className="text-ink-tertiary text-[11px] font-mono leading-relaxed block"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {isV2 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mt-12 text-center"
          >
            <div className="inline-block border border-black/[0.07] rounded-2xl px-8 py-5 bg-canvas-card">
              <p className="text-ink text-base sm:text-lg font-medium tracking-tight">
                Curve calculates the royalty.{" "}
                <span className="text-acid">Debaser tells you whether it is right.</span>
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
