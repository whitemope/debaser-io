"use client";

import { createContext, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";

export type HomepageVariant = "v1" | "v2" | "v3";

const VALID_VARIANTS: HomepageVariant[] = ["v1", "v2", "v3"];

const HomepageVariantContext = createContext<{
  variant: HomepageVariant;
  setVariant: (variant: HomepageVariant) => void;
}>({
  variant: "v1",
  setVariant: () => {},
});

/**
 * The version is the URL, not client state: /v1, /v1/features, /v2, etc.
 * Pages outside the [version] tree (dashboard, decks, sign in) have no
 * version segment, so they fall back to "v1" here — none of them actually
 * read this context for content, it just keeps the hook safe to call.
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
  const onVersionedRoute = VALID_VARIANTS.includes(first as HomepageVariant);
  const variant: HomepageVariant = onVersionedRoute
    ? (first as HomepageVariant)
    : "v1";

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
