"use client";

import { useHomepageVariant } from "@/components/HomepageVariantContext";

export default function OptionToggle() {
  const { variant, setVariant } = useHomepageVariant();

  return (
    <button
      onClick={() => setVariant(variant === "v1" ? "v2" : "v1")}
      aria-label="Toggle homepage copy option"
      className="flex items-center gap-2 text-ink-tertiary hover:text-ink-secondary transition-colors text-xs"
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 16V4M7 4L3 8M7 4l4 4" />
        <path d="M17 8v12M17 20l4-4M17 20l-4-4" />
      </svg>
      <span>{variant === "v1" ? "Option 1" : "Option 2"}</span>
    </button>
  );
}
