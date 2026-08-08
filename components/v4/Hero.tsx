"use client";

import { useEffect, useState } from "react";

const ROTATING_WORDS = [
  "Statements",
  "Contracts",
  "Splits",
  "Metadata",
  "Royalties",
  "Claims",
  "Audits",
  "Payouts",
  "Compliance",
  "Catalogues",
  "Rights",
  "Reporting",
  "Reconciliation",
];

const FLOAT_BADGES = [
  { label: "ISRC", style: { top: "6%", left: "4%" }, delay: "0s" },
  { label: "CMOs", style: { top: "14%", right: "2%" }, delay: "1.1s" },
  { label: "ISWC", style: { top: "58%", left: "1%" }, delay: "2.3s" },
  { label: "DSP statements", style: { top: "66%", right: "6%" }, delay: "0.6s" },
  { label: "Splits", style: { top: "86%", left: "14%" }, delay: "1.8s" },
  { label: "Recoupment", style: { top: "82%", right: "16%" }, delay: "2.9s" },
];

function KineticWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 1900);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="v4-kinetic">
      <span key={index} className="v4-kinetic-word">
        {ROTATING_WORDS[index]}
      </span>
    </span>
  );
}

export default function V4Hero() {
  return (
    <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-28 px-6 overflow-hidden">
      {FLOAT_BADGES.map((b) => (
        <span
          key={b.label}
          className="v4-float-badge hidden lg:inline-flex"
          style={{ ...b.style, animationDelay: b.delay }}
        >
          {b.label}
        </span>
      ))}

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="v4-heading text-[15vw] sm:text-6xl md:text-7xl lg:text-[80px] text-balance">
          <span className="block">Run your catalogue&rsquo;s</span>
          <span className="block">operations from one place.</span>
          <span className="block">
            <KineticWord /> end to end.
          </span>
        </h1>

        <p className="mt-8 max-w-xl mx-auto text-base sm:text-lg text-[color:var(--v4-ink-secondary)] text-balance">
          The infrastructure behind music royalties hasn&rsquo;t changed since before streaming
          existed. Debaser is new agentic rails for a new generation of catalogue owners.
        </p>
      </div>
    </section>
  );
}
