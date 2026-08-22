"use client";

import { useState } from "react";
import GhostMark from "@/components/GhostMark";

const LINKS = [
  { label: "Product", href: "#product" },
  { label: "Agents", href: "#agents" },
  { label: "Vision", href: "#vision" },
];

export default function V4Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto v4-nav-pill flex items-center justify-between gap-2 pl-4 pr-2 py-2">
        <a href="/v4" className="flex items-center gap-2 flex-shrink-0">
          <GhostMark className="w-5 h-5" />
          <span className="v4-heading text-base">debaser</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-4 py-2 text-sm font-medium rounded-full hover:bg-black/[0.05] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2">
          <a href="/investors" className="text-sm font-medium px-3 py-2 hover:opacity-70 transition-opacity">
            Investors
          </a>
          <a href="#access" className="v4-btn v4-btn-dark">
            Request access
          </a>
        </div>

        <button
          className="sm:hidden p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="w-4 flex flex-col gap-1">
            <span className={`block h-px bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-px bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden max-w-4xl mx-auto mt-2 v4-nav-pill flex flex-col gap-1 p-3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2.5 text-sm font-medium rounded-full hover:bg-black/[0.05]"
            >
              {l.label}
            </a>
          ))}
          <a href="/investors" className="px-4 py-2.5 text-sm font-medium">Investors</a>
          <a href="#access" className="v4-btn v4-btn-dark mt-1 justify-center">Request access</a>
        </div>
      )}
    </header>
  );
}
