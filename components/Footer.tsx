import ThemeToggle from "@/components/ThemeToggle";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.05] bg-canvas py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-acid rounded-md flex items-center justify-center">
                <img src="/ghost.svg" alt="" className="w-3.5 h-3.5" style={{ filter: "var(--ghost-filter)" }} />
              </div>
              <span className="text-ink font-semibold tracking-tight">
                debaser
              </span>
            </div>
            <p className="text-ink-tertiary text-sm max-w-xs leading-relaxed">
              The AI operating system for music royalties.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <a
              href="#product"
              className="text-ink-tertiary text-sm hover:text-ink-secondary transition-colors"
            >
              Product
            </a>
            <a
              href="#agents"
              className="text-ink-tertiary text-sm hover:text-ink-secondary transition-colors"
            >
              Agents
            </a>
            <a
              href="#use-cases"
              className="text-ink-tertiary text-sm hover:text-ink-secondary transition-colors"
            >
              Use cases
            </a>
            <a
              href="#vision"
              className="text-ink-tertiary text-sm hover:text-ink-secondary transition-colors"
            >
              Vision
            </a>
            <a
              href="#access"
              className="text-ink-tertiary text-sm hover:text-ink-secondary transition-colors"
            >
              Early access
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-ink-tertiary text-xs">
            © {year} Debaser. All rights reserved.
          </p>
          <ThemeToggle />
          <p className="text-ink-tertiary text-xs font-mono">
            AI investigates. Humans approve. Deterministic engines calculate.
          </p>
        </div>
      </div>
    </footer>
  );
}
