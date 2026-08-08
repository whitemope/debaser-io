"use client";

import { useReveal } from "./useReveal";

const NOTES = [
  {
    tag: "Catalogue funds",
    title: "Blackstone took Hipgnosis private for $1.6bn",
    body: "Sony Music Publishing went on to buy its 45,000-song Recognition catalogue in 2026. Capital is consolidating faster than the back office that runs it.",
  },
  {
    tag: "Catalogue funds",
    title: "Primary Wave closed a $2.225bn fund",
    body: "The largest dedicated closed-end music royalty fund raised to date, in 2025.",
  },
  {
    tag: "Catalogue funds",
    title: "Concord backed an $850m securitisation",
    body: "Across more than a million songs, after acquiring Round Hill's catalogue fund for roughly $469m.",
  },
  {
    tag: "Market",
    title: "The MLC held $424m in unmatched mechanicals",
    body: "Historical royalties from DSPs that couldn't find an owner. Not an edge case. A symptom of the plumbing underneath it.",
  },
  {
    tag: "Market",
    title: "Only 28% of club royalties reached the right creator",
    body: "UK research found recognition technology can lift that to roughly 90%. The gap is the business.",
  },
];

export default function V4Notes() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="v4-eyebrow mb-4">Field notes</p>
            <h2 className="v4-heading text-3xl sm:text-4xl md:text-5xl text-balance max-w-lg">
              What&rsquo;s actually happening in the catalogue economy.
            </h2>
          </div>
        </div>

        <div
          ref={ref}
          className={`v4-reveal ${inView ? "v4-in" : ""} flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory`}
        >
          {NOTES.map((n) => (
            <div
              key={n.title}
              className="snap-start flex-shrink-0 w-[280px] sm:w-[320px] rounded-3xl p-6 flex flex-col gap-4"
              style={{ background: "var(--v4-bg-soft)" }}
            >
              <span className="v4-eyebrow">{n.tag}</span>
              <h3 className="v4-heading text-lg leading-snug text-balance">{n.title}</h3>
              <p className="text-sm text-[color:var(--v4-ink-secondary)] leading-relaxed">{n.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
