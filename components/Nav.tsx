"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 60], [0, 1]);
  const bgOpacity = useTransform(scrollY, [0, 60], [0, 0.92]);
  const pathname = usePathname();

  // When not on the homepage, anchor links need the / prefix so they
  // navigate home first, then scroll to the section.
  const a = pathname === "/" ? "" : "/";

  const mainLinks = [
    { label: "Product",   href: `${a}#product` },
    { label: "Agents",    href: `${a}#agents` },
    { label: "Use cases", href: `${a}#use-cases` },
    { label: "Vision",    href: `${a}#vision` },
    { label: "Features",  href: "/features" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-canvas"
        style={{ opacity: bgOpacity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-black/[0.06]"
        style={{ opacity: borderOpacity }}
      />
      <div className="relative max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 bg-acid rounded-md flex items-center justify-center flex-shrink-0">
            <img src="/ghost.svg" alt="" className="w-4 h-4" style={{ filter: "var(--ghost-filter)" }} />
          </div>
          <span className="text-ink font-semibold tracking-tight text-base">
            debaser
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {mainLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm transition-colors ${
                link.label === "Features" && pathname === "/features"
                  ? "text-ink"
                  : "text-ink-secondary hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/signin"
            className="hidden md:block text-sm text-ink-secondary hover:text-ink transition-colors"
          >
            Sign in
          </a>
          <a
            href={`${a}#access`}
            className="bg-acid text-canvas text-sm font-semibold px-4 py-2 rounded-lg hover:bg-acid/90 transition-colors"
          >
            Request access
          </a>
          <button
            className="md:hidden p-2 text-ink-secondary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-4 flex flex-col gap-1">
              <span
                className={`block h-px bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`block h-px bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden relative bg-canvas-subtle border-b border-black/[0.06] px-6 pb-6 pt-2 flex flex-col gap-4"
        >
          {mainLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-ink-secondary hover:text-ink transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
