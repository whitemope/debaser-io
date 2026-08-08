"use client";

import { useReveal } from "./useReveal";

const FLOW = ["Songs", "Recordings", "Contracts", "Income", "Ownership", "Usage"];

export default function V4Vision() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="vision" className="px-6 py-24 sm:py-32 scroll-mt-24">
      <div ref={ref} className={`v4-reveal ${inView ? "v4-in" : ""} max-w-3xl mx-auto text-center`}>
        <p className="v4-eyebrow mb-5">A vision to debase</p>
        <h2 className="v4-heading text-4xl sm:text-5xl md:text-6xl text-balance mb-8">
          Debase, debuild, defrag, democratise.
        </h2>
        <p className="text-base sm:text-lg text-[color:var(--v4-ink-secondary)] max-w-xl mx-auto mb-4 text-balance">
          We see a world where a single graph connects every song, recording, release, contract,
          owner, use and payment, everywhere, for every revenue stream.
        </p>
        <p className="text-sm sm:text-base text-[color:var(--v4-ink-secondary)] max-w-xl mx-auto mb-14 text-balance">
          We&rsquo;re starting on the operational layer, where statements pile up, income goes
          missing, and teams are buried in work that shouldn&rsquo;t need a human at all.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {FLOW.map((step, i) => (
            <div key={step} className="flex items-center gap-2 sm:gap-3">
              <span
                className="text-xs sm:text-sm font-medium rounded-full px-4 py-2 border"
                style={{ borderColor: "var(--v4-line)" }}
              >
                {step}
              </span>
              {i < FLOW.length - 1 && (
                <span style={{ color: "var(--v4-ink-tertiary)" }}>→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
