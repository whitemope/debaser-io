import GhostMark from "@/components/GhostMark";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Labels", href: "#product" },
      { label: "Publishers", href: "#product" },
      { label: "Catalogue funds", href: "#product" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Vision", href: "#vision" },
      { label: "Sign in", href: "/signin" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
  {
    title: "Contact",
    links: [{ label: "daverennick@gmail.com", href: "mailto:daverennick@gmail.com" }],
  },
];

export default function V4Footer() {
  return (
    <footer className="px-6 pt-20 pb-10" style={{ background: "var(--v4-bg-soft)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-14">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <GhostMark className="w-5 h-5" />
              <span className="v4-heading text-base">debaser</span>
            </div>
            <p className="text-sm text-[color:var(--v4-ink-secondary)] max-w-[220px]">
              Rebuilding the back office, so the money finds its way back to the people who
              made the music.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="v4-eyebrow mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm hover:opacity-60 transition-opacity">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderColor: "var(--v4-line)" }}
        >
          <p className="text-xs" style={{ color: "var(--v4-ink-tertiary)" }}>
            © {new Date().getFullYear()} Debaser. Not yet generally available — we&rsquo;re working
            with a small group of early design partners.
          </p>
          <p className="text-xs" style={{ color: "var(--v4-ink-tertiary)" }}>
            Debaser investigates. Humans approve. The old systems just calculate.
          </p>
        </div>
      </div>
    </footer>
  );
}
