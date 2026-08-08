"use client";

import { useReveal } from "./useReveal";

const BENEFITS = [
  {
    title: "One rights graph, everywhere",
    body: "Every agent works from the same rights graph, connecting song, recording, contract and income. The record the industry never built.",
  },
  {
    title: "Evidence first, not a black box",
    body: "Every number traces back to the row, the clause or the file. Not a summary dressed up as an answer.",
  },
  {
    title: "See what's wrong this week",
    body: "Send us last quarter's statements. We'll show you what the old rails missed, before you sign anything.",
  },
];

export default function V4Benefits() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-xl mb-14">
          <p className="v4-eyebrow mb-4">Benefits</p>
          <h2 className="v4-heading text-3xl sm:text-4xl md:text-5xl text-balance">
            Built for how catalogues actually move.
          </h2>
        </div>

        <div ref={ref} className={`v4-reveal ${inView ? "v4-in" : ""} grid sm:grid-cols-3 gap-4`}>
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl p-7 border"
              style={{ borderColor: "var(--v4-line)", background: "rgba(255,255,255,0.5)" }}
            >
              <h3 className="v4-heading text-lg mb-3 text-balance">{b.title}</h3>
              <p className="text-sm text-[color:var(--v4-ink-secondary)] leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
