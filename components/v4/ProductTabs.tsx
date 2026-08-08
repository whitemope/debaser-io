"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";

const TABS = [
  {
    key: "labels",
    label: "Labels",
    headline: "Reconcile before legacy statements go out.",
    description:
      "Catch what the old back office would have missed, before it ever reaches an artist.",
    pills: ["DSP · CMO statements", "Exception detection"],
    mockTitle: "Q2 Statement Review",
    mockRows: [
      { name: "Spotify UK", detail: "Missing ISRC", amount: "£3,100" },
      { name: "Apple Music", detail: "Duplicate row", amount: "£820" },
      { name: "MCPS", detail: "Unmatched", amount: "£1,450" },
    ],
  },
  {
    key: "publishers",
    label: "Publishers",
    headline: "Contracts and income, finally in one place.",
    description:
      "Read against the actual agreement, not a collection society's best guess at it.",
    pills: ["Contract extraction", "Clause indexing"],
    mockTitle: "Contract §4.2(b)",
    mockRows: [
      { name: "Recoupment threshold", detail: "Applied early", amount: "Conflict" },
      { name: "Producer deduction", detail: "Rate mismatch", amount: "Flagged" },
      { name: "Territory: DE", detail: "Verified", amount: "OK" },
    ],
  },
  {
    key: "funds",
    label: "Catalogue funds",
    headline: "Underwrite acquisitions like the assets they are.",
    description:
      "Real visibility into performance and risk, at the speed modern catalogue investing happens.",
    pills: ["Acquisition audits", "Risk visibility"],
    mockTitle: "Catalogue Health Check",
    mockRows: [
      { name: "Titles reviewed", detail: "1,204 works", amount: "100%" },
      { name: "Missing metadata", detail: "37 recordings", amount: "3.1%" },
      { name: "Unmatched income", detail: "Last 4 quarters", amount: "£18,420" },
    ],
  },
];

export default function V4ProductTabs() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useReveal<HTMLDivElement>();
  const tab = TABS[active];

  return (
    <section id="product" className="px-6 pb-24 sm:pb-32">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {TABS.map((t, i) => (
            <button
              key={t.key}
              onClick={() => setActive(i)}
              className={`v4-btn ${i === active ? "v4-btn-dark" : "v4-btn-ghost"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          className={`v4-reveal ${inView ? "v4-in" : ""} relative`}
        >
          <div
            aria-hidden
            className="absolute inset-x-5 -bottom-3 h-full rounded-[32px]"
            style={{ background: "rgba(21,22,25,0.55)" }}
          />
          <div
            aria-hidden
            className="absolute inset-x-10 -bottom-6 h-full rounded-[32px]"
            style={{ background: "rgba(21,22,25,0.28)" }}
          />

          <div className="relative rounded-[32px] overflow-hidden grid md:grid-cols-2 min-h-[520px] bg-[var(--v4-ink)]">
            <div className="p-8 sm:p-12 flex flex-col justify-center gap-5 text-[var(--v4-bg)]">
              <span className="v4-eyebrow" style={{ color: "rgba(246,248,243,0.5)" }}>
                {tab.label.toUpperCase()}
              </span>
              <h3 className="v4-heading text-3xl sm:text-4xl text-balance">{tab.headline}</h3>
              <p className="max-w-sm text-sm sm:text-base" style={{ color: "rgba(246,248,243,0.72)" }}>
                {tab.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {tab.pills.map((p) => (
                  <span
                    key={p}
                    className="text-xs font-medium rounded-full px-3 py-1.5"
                    style={{ background: "rgba(246,248,243,0.1)" }}
                  >
                    {p}
                  </span>
                ))}
              </div>
              <a href="#access" className="v4-btn v4-btn-cream mt-3 w-fit">
                Learn more
              </a>
            </div>

            <div className="v4-gradient-blob relative min-h-[280px] md:min-h-full flex items-center justify-center p-8">
              <div className="relative bg-white text-[#151619] rounded-2xl shadow-2xl w-full max-w-xs p-5">
                <p className="text-xs font-semibold mb-4">{tab.mockTitle}</p>
                <div className="space-y-3">
                  {tab.mockRows.map((r) => (
                    <div key={r.name} className="flex items-center justify-between gap-3 text-xs border-b border-black/[0.06] pb-2 last:border-0 last:pb-0">
                      <div>
                        <p className="font-medium">{r.name}</p>
                        <p className="text-black/40">{r.detail}</p>
                      </div>
                      <span className="font-mono font-medium">{r.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
