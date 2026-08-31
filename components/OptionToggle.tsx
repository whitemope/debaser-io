"use client";

import { useHomepageVariant } from "@/components/HomepageVariantContext";
import { VARIANT_LABELS, nextVariant } from "@/lib/variants";

export default function OptionToggle() {
  const { variant, setVariant } = useHomepageVariant();

  return (
    <button
      onClick={() => setVariant(nextVariant(variant))}
      aria-label="Switch homepage concept"
      className="flex items-center gap-2 text-ink-tertiary hover:text-ink-secondary transition-colors text-xs"
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 16V4M7 4L3 8M7 4l4 4" />
        <path d="M17 8v12M17 20l4-4M17 20l-4-4" />
      </svg>
      <span>{VARIANT_LABELS[variant]}</span>
    </button>
  );
}
