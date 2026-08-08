"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/animation";
import { useHomepageVariant } from "@/components/HomepageVariantContext";
import { getHomepageContent } from "@/lib/homepage-content";
import Editable from "@/components/Editable";

function GapVisual() {
  const rows = [
    {
      source: "Spotify UK",
      expected: "£12,400",
      received: "£9,100",
      gap: "–£3,300",
      severity: "high",
    },
    {
      source: "MCPS DE",
      expected: "£4,200",
      received: "—",
      gap: "Missing",
      severity: "critical",
    },
    {
      source: "Apple Music US",
      expected: "£8,800",
      received: "£8,720",
      gap: "–£80",
      severity: "low",
    },
    {
      source: "SOCAN CA",
      expected: "£1,900",
      received: "£1,900",
      gap: "Matched",
      severity: "ok",
    },
    {
      source: "Warner FR",
      expected: "£6,100",
      received: "£4,200",
      gap: "–£1,900",
      severity: "high",
    },
  ];

  const severityColor: Record<string, string> = {
    critical: "text-red-400",
    high: "text-amber-400",
    low: "text-yellow-400/70",
    ok: "text-acid/70",
  };

  const severityBg: Record<string, string> = {
    critical: "bg-red-500/10 border-red-500/20",
    high: "bg-amber-400/10 border-amber-400/20",
    low: "bg-yellow-400/5 border-transparent",
    ok: "bg-acid/5 border-transparent",
  };

  return (
    <div
      className="force-light bg-canvas-card border border-black/[0.05] rounded-2xl overflow-hidden"
      style={{
        boxShadow:
          "0 0 0 1px rgba(16, 21, 133,0.05), 0 24px 48px rgba(16, 21, 133,0.07)",
      }}
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-black/[0.05] bg-canvas-subtle/40">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-acid" />
          <span className="text-ink-tertiary text-[11px] font-mono tracking-wide">
            Income Gap Analysis · Q2 2024
          </span>
        </div>
        <span className="text-[11px] font-mono text-red-400/80">
          £5,280 unaccounted
        </span>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-4 text-[10px] font-mono text-ink-tertiary tracking-wide pb-2 border-b border-black/[0.04] mb-1 px-2">
          <span>Source</span>
          <span className="text-right">Expected</span>
          <span className="text-right">Received</span>
          <span className="text-right">Gap</span>
        </div>
        <div className="space-y-0.5">
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-4 text-[13px] px-2 py-2.5 rounded-lg ${severityBg[row.severity]}`}
            >
              <span className="text-ink/80 font-medium text-[12px]">
                {row.source}
              </span>
              <span className="text-ink-secondary text-right font-mono text-[12px]">
                {row.expected}
              </span>
              <span className="text-ink-secondary text-right font-mono text-[12px]">
                {row.received}
              </span>
              <span
                className={`text-right font-mono font-semibold text-[12px] ${severityColor[row.severity]}`}
              >
                {row.gap}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-black/[0.04] flex items-center justify-between">
          <span className="text-ink-tertiary text-[11px] font-mono">
            2 claim packages ready to export
          </span>
          <button className="text-acid text-[12px] font-medium hover:underline underline-offset-2">
            Export evidence →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MissingMoney() {
  const { variant } = useHomepageVariant();
  const content = getHomepageContent(variant).missingMoney;
  const features = content.features;

  return (
    <section className="py-28 md:py-36 bg-canvas-subtle relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <Editable
              path="missingMoney.eyebrow"
              value={content.eyebrow}
              className="text-ink-tertiary text-xs font-mono tracking-wide mb-4 block"
            />
            <Editable
              as="h2"
              path="missingMoney.headline"
              value={content.headline}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.1] mb-6 text-balance block"
            />
            <Editable
              as="p"
              path="missingMoney.subhead"
              value={content.subhead}
              className="text-ink-secondary text-lg leading-relaxed mb-10 block"
            />
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.07,
                    ease: EASE,
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="w-4 h-4 rounded-full bg-acid/10 border border-acid/25 flex items-center justify-center flex-shrink-0">
                    <div className="w-1 h-1 rounded-full bg-acid" />
                  </div>
                  <Editable
                    path={`missingMoney.features.${i}`}
                    value={feature}
                    className="text-ink-secondary text-sm"
                  />
                </motion.li>
              ))}
            </ul>
            {content.ctaLabel && (
              <a
                href="#access"
                className="inline-flex items-center gap-2 mt-10 text-acid text-sm font-semibold hover:underline underline-offset-2"
              >
                <Editable path="missingMoney.ctaLabel" value={content.ctaLabel} />
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-60">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            <GapVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
