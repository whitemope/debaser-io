const SEGMENTS = [
  "Independent Labels",
  "Publishers",
  "Catalogue Funds",
  "Artist Management",
  "Neighbouring Rights",
  "Label Services",
];

export default function V4Ticker() {
  const items = [...SEGMENTS, ...SEGMENTS];

  return (
    <section className="py-16 sm:py-20">
      <p className="v4-eyebrow text-center mb-8">Built for</p>
      <div className="v4-marquee-mask">
        <div className="v4-marquee-track v4-marquee-track-slow items-center gap-14">
          {items.map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="v4-heading text-2xl sm:text-3xl whitespace-nowrap"
              style={{ color: "var(--v4-ink-tertiary)" }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
