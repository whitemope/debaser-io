"use client";

import { useReveal } from "./useReveal";

export default function V4CTAModule() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <>
      <div className="v4-fade-to-dark" aria-hidden />
      <section className="px-6 py-20 sm:py-28" style={{ background: "var(--v4-ink)" }}>
        <div
          ref={ref}
          className={`v4-reveal ${inView ? "v4-in" : ""} max-w-4xl mx-auto text-center flex flex-col items-center gap-6`}
        >
          <p className="v4-eyebrow" style={{ color: "rgba(246,248,243,0.5)" }}>
            Gap detection
          </p>
          <h2
            className="v4-heading text-3xl sm:text-4xl md:text-5xl text-balance"
            style={{ color: "var(--v4-bg)" }}
          >
            Find the money the old system was never built to find.
          </h2>
          <p className="max-w-lg text-sm sm:text-base" style={{ color: "rgba(246,248,243,0.68)" }}>
            Debaser compares what your catalogue should be earning against what forty-year-old
            infrastructure actually delivered, and shows you exactly where it broke down.
          </p>
          <a href="#access" className="v4-btn v4-btn-cream mt-2">
            See what the old rails are missing →
          </a>
        </div>
      </section>
      <div className="v4-fade-to-light" aria-hidden />
    </>
  );
}
