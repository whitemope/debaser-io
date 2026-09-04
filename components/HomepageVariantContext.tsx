"use client";

import { createContext, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  DEFAULT_VARIANT,
  isHomepageVariant,
  type HomepageVariant,
} from "@/lib/variants";

export type { HomepageVariant } from "@/lib/variants";
export {
  HOMEPAGE_VARIANTS,
  DEFAULT_VARIANT,
  VARIANT_LABELS,
  CONCEPT_SWITCHER_LABEL,
  conceptSwitcherLabel,
  conceptBasePath,
  nextVariant,
} from "@/lib/variants";

const HomepageVariantContext = createContext<{
  variant: HomepageVariant;
  setVariant: (variant: HomepageVariant) => void;
}>({
  variant: DEFAULT_VARIANT,
  setVariant: () => {},
});

/**
 * The concept is the URL, not client state. The default concept lives at the
 * root ("/", "/features"); the other two sit under their slug
 * ("/music-rights-ai-rails", "/global-music-economy/features", etc.). Pages
 * outside this tree (investors, decks, sign in) have no concept route, so they
 * fall back to the default here — none of them read this context for content,
 * it just keeps the hook safe to call.
 */
export function HomepageVariantProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  const hasSlug = first !== undefined && isHomepageVariant(first);
  const variant: HomepageVariant = hasSlug ? (first as HomepageVariant) : DEFAULT_VARIANT;

  // The concept switcher works on the homepage ("/") and features page
  // ("/features"), whether or not a slug is present. It stays inert on the
  // unrelated pages (investors, decks, sign in).
  const rest = hasSlug ? segments.slice(1) : segments;
  const onConceptRoute =
    hasSlug || pathname === "/" || pathname === "/features";

  const setVariant = (next: HomepageVariant) => {
    if (!onConceptRoute) return;
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const prefix = next === DEFAULT_VARIANT ? [] : [next];
    router.push(`/${[...prefix, ...rest].join("/")}${hash}`);
  };

  return (
    <HomepageVariantContext.Provider value={{ variant, setVariant }}>
      {children}
    </HomepageVariantContext.Provider>
  );
}

export function useHomepageVariant() {
  return useContext(HomepageVariantContext);
}
