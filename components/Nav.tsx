"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import BrandMark from "@/components/BrandMark";
import { useHomepageVariant } from "@/components/HomepageVariantContext";
import { useEditMode } from "@/components/EditModeContext";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { variant, setVariant } = useHomepageVariant();
  const { editMode, toggleEditMode } = useEditMode();
  const pathname = usePathname();

  // When not on the version's homepage, anchor links need the version
  // prefix so they navigate home first, then scroll to the section.
  const isHome = pathname === `/${variant}`;
  const homeBase = isHome ? "" : `/${variant}`;
  const featuresHref = `/${variant}/features`;

  const mainLinks = [
    { label: "Product",   href: `${homeBase}#product` },
    { label: "Agents",    href: `${homeBase}#agents` },
    { label: "Use cases", href: `${homeBase}#use-cases` },
    { label: "Vision",    href: `${homeBase}#vision` },
    { label: "Features",  href: featuresHref },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-canvas">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BrandMark href={`/${variant}`} />
          <button
            onClick={() =>
              setVariant(
                variant === "v1" ? "v2" : variant === "v2" ? "v3" : "v1"
              )
            }
            aria-label="Toggle homepage copy variant"
            className="px-1.5 py-1 rounded-[4px] bg-black/[0.04] text-ink-tertiary text-[10px] font-mono tracking-tight leading-none hover:bg-black/[0.07] hover:text-ink-secondary transition-colors"
          >
            {variant === "v1" ? "Version 1" : variant === "v2" ? "Version 2" : "Version 3"}
          </button>
          <button
            onClick={toggleEditMode}
            aria-label="Toggle copy edit mode"
            className={`p-1 rounded-[4px] transition-colors ${
              editMode
                ? "text-acid opacity-70 hover:opacity-100"
                : "text-ink-tertiary opacity-[0.15] hover:opacity-50"
            }`}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-7">
          {mainLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm transition-colors ${
                link.label === "Features" && pathname === featuresHref
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
            href="/investors"
            className="hidden md:block text-sm text-ink-secondary hover:text-ink transition-colors"
          >
            Investors
          </a>
          <a
            href={`${homeBase}#access`}
            className="bg-btn-primary text-btn-primary-fg text-sm font-medium px-4 py-2 rounded-lg hover:bg-btn-primary/90 transition-colors"
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
    </nav>
  );
}
