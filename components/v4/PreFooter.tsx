const ROW_A = ["FIND MISSING MONEY", "•"];
const ROW_B = ["REQUEST EARLY ACCESS", "•"];

export default function V4PreFooter() {
  const rowA = Array(6).fill(ROW_A).flat();
  const rowB = Array(6).fill(ROW_B).flat();

  return (
    <section className="py-20 sm:py-28 overflow-hidden" style={{ background: "var(--v4-ink)" }}>
      <div className="v4-marquee-mask mb-2">
        <div className="v4-marquee-track items-center gap-6">
          {rowA.map((t, i) => (
            <span
              key={i}
              className="v4-heading text-5xl sm:text-7xl whitespace-nowrap"
              style={{ color: t === "•" ? "var(--v4-bg)" : "transparent", WebkitTextStroke: t === "•" ? undefined : "1px var(--v4-bg)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="v4-marquee-mask mb-14">
        <div className="v4-marquee-track v4-marquee-track-reverse items-center gap-6">
          {rowB.map((t, i) => (
            <span
              key={i}
              className="v4-heading text-5xl sm:text-7xl whitespace-nowrap"
              style={{ color: "var(--v4-bg)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="text-center">
        <a href="#access" className="v4-btn v4-btn-cream">
          Request early access
        </a>
      </div>
    </section>
  );
}
