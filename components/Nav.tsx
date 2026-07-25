"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import GhostMark from "@/components/GhostMark";
import { useHomepageVariant } from "@/components/HomepageVariantContext";
import { useEditMode } from "@/components/EditModeContext";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { variant, setVariant } = useHomepageVariant();
  const { editMode, toggleEditMode } = useEditMode();
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
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2 group">
            <GhostMark className="w-6 h-6 text-ink flex-shrink-0" />
            <span className="text-ink font-semibold tracking-tight text-base">
              debaser
            </span>
          </a>
          <button
            onClick={() => setVariant(variant === "v1" ? "v2" : "v1")}
            aria-label="Toggle homepage copy variant"
            className="px-1.5 py-1 rounded-[4px] bg-black/[0.04] text-ink-tertiary text-[10px] font-mono tracking-tight leading-none hover:bg-black/[0.07] hover:text-ink-secondary transition-colors"
          >
            {variant === "v1" ? "Option 1" : "Option 2"}
          </button>
          {process.env.NEXT_PUBLIC_ALLOW_CONTENT_EDIT !== "false" && (
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
          )}
        </div>

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
    </motion.nav>
  );
}
