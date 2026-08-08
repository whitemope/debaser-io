"use client";

import { useReveal } from "./useReveal";

const AGENTS = [
  { name: "Ingestion Agent", description: "Reads whatever format decades of legacy systems still export, and maps it into one clean schema.", tags: ["CSV · PDF · Portal", "Schema normalisation"] },
  { name: "Contract Agent", description: "Reads the contract nobody digitised: rates, splits, territories, recoupment.", tags: ["Rate extraction", "Clause indexing"] },
  { name: "Matching Agent", description: "Matches income to the right ISRC, work, writer and recording, across a catalogue nobody fully mapped.", tags: ["ISRC · ISWC · Works", "Multi-source matching"] },
  { name: "Exception Agent", description: "Catches the duplicate, the missing split, the income that quietly disappeared.", tags: ["Anomaly detection", "Income variance"] },
  { name: "Audit Agent", description: "Checks what you expected against what actually landed, territory by territory.", tags: ["Statement variance", "Claim evidence"] },
  { name: "Ops Agent", description: "Turns a royalty run into a queue your team can actually clear.", tags: ["Action list", "Run management"] },
];

export default function V4Agents() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="agents" className="px-6 py-20 sm:py-28 scroll-mt-24" style={{ background: "var(--v4-bg-soft)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="max-w-xl mb-14">
          <p className="v4-eyebrow mb-4">The specialists</p>
          <h2 className="v4-heading text-3xl sm:text-4xl md:text-5xl text-balance">
            AI built for the parts of the industry that never got modernised.
          </h2>
        </div>

        <div ref={ref} className={`v4-reveal ${inView ? "v4-in" : ""} grid sm:grid-cols-2 lg:grid-cols-3 gap-4`}>
          {AGENTS.map((a) => (
            <div key={a.name} className="rounded-3xl p-6 bg-white border" style={{ borderColor: "var(--v4-line)" }}>
              <h3 className="v4-heading text-base mb-2">{a.name}</h3>
              <p className="text-sm text-[color:var(--v4-ink-secondary)] leading-relaxed mb-4">{a.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {a.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium rounded-full px-2.5 py-1"
                    style={{ background: "var(--v4-bg-soft)", color: "var(--v4-ink-tertiary)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-10" style={{ color: "var(--v4-ink-tertiary)" }}>
          Debaser investigates. Humans approve. The old systems just calculate.
        </p>
      </div>
    </section>
  );
}
