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
 * The concept is the URL, not client state: /music-rights-ai-rails,
 * /catalogue-as-an-asset/features, etc. Pages outside the [version] tree
 * (investors, decks, sign in) have no concept segment, so they fall back to
 * the default here — none of them actually read this context for content, it
 * just keeps the hook safe to call.
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
  const variant: HomepageVariant =
    first !== undefined && isHomepageVariant(first) ? first : DEFAULT_VARIANT;
  const onVersionedRoute = variant === first;

  const setVariant = (next: HomepageVariant) => {
    if (!onVersionedRoute) return;
    const rest = segments.slice(1);
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(`/${[next, ...rest].join("/")}${hash}`);
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
