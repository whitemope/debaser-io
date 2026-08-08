"use client";

import { useReveal } from "./useReveal";

const STATS = [
  { value: "$31.7bn", label: "Global recorded music revenue in 2025, up 6.4% YoY" },
  { value: "€13.97bn", label: "Creator collection society income, CISAC 2025" },
  { value: "28% → 90%", label: "Accuracy possible once recognition tech replaces guesswork" },
];

export default function V4Stats() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto text-center">
        <p className="v4-eyebrow mb-4">Why it matters</p>
        <h2 className="v4-heading text-2xl sm:text-3xl md:text-4xl text-balance max-w-xl mx-auto mb-14">
          A trillion-dollar industry, still running on decades-old plumbing.
        </h2>

        <div ref={ref} className={`v4-reveal ${inView ? "v4-in" : ""} grid sm:grid-cols-3 gap-8 sm:gap-4`}>
          {STATS.map((s) => (
            <div key={s.value}>
              <p className="v4-heading text-4xl sm:text-5xl mb-3">{s.value}</p>
              <p className="text-sm text-[color:var(--v4-ink-secondary)] max-w-[220px] mx-auto leading-relaxed">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
