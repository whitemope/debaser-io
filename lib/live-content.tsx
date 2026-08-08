"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { HomepageVariant } from "@/components/HomepageVariantContext";
import { getHomepageContent, type HomepageContent } from "@/lib/homepage-content";
import { getFeaturesContent, type FeaturesContent } from "@/lib/features-content";

type Doc = "homepage" | "features";

type LiveContentState = {
  homepage: Partial<Record<HomepageVariant, HomepageContent>>;
  features: Partial<Record<HomepageVariant, FeaturesContent>>;
};

type LiveContentContextValue = {
  state: LiveContentState;
  /** Fetch a doc/variant if it hasn't been loaded yet this session. Safe to call from render. */
  ensureLoaded: (doc: Doc, variant: HomepageVariant) => void;
  /** Force a fresh fetch, bypassing the "already loaded" guard — used right after a save. */
  refresh: (doc: Doc, variant: HomepageVariant) => void;
};

const LiveContentContext = createContext<LiveContentContextValue | null>(null);

async function fetchDoc(doc: Doc, variant: HomepageVariant): Promise<unknown | null> {
  try {
    const res = await fetch(`/api/content?doc=${doc}&variant=${variant}`, { cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    return json.ok ? json.data : null;
  } catch {
    return null;
  }
}

/**
 * Content is loaded twice: the build-time JSON import paints instantly (and
 * is what's server-rendered), then this fetches the live copy from source
 * (GitHub on Vercel, the filesystem locally) and swaps it in if it changed.
 * That's what lets a saved edit show up within seconds instead of waiting
 * on the next production rebuild.
 */
export function LiveContentProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<LiveContentState>({ homepage: {}, features: {} });
  const inFlight = useRef<Set<string>>(new Set());

  const load = useCallback((doc: Doc, variant: HomepageVariant) => {
    const key = `${doc}:${variant}`;
    if (inFlight.current.has(key)) return;
    inFlight.current.add(key);
    fetchDoc(doc, variant).then((data) => {
      inFlight.current.delete(key);
      if (!data) return;
      setState((prev) => {
        const bucket = prev[doc] as Record<string, unknown>;
        // Skip the render if the fetch just confirms nothing changed.
        if (JSON.stringify(bucket[variant]) === JSON.stringify(data)) return prev;
        return { ...prev, [doc]: { ...bucket, [variant]: data } };
      });
    });
  }, []);

  const ensureLoaded = useCallback(
    (doc: Doc, variant: HomepageVariant) => {
      const key = `${doc}:${variant}`;
      if (state[doc][variant] !== undefined || inFlight.current.has(key)) return;
      load(doc, variant);
    },
    [state, load]
  );

  const refresh = useCallback((doc: Doc, variant: HomepageVariant) => load(doc, variant), [load]);

  return (
    <LiveContentContext.Provider value={{ state, ensureLoaded, refresh }}>
      {children}
    </LiveContentContext.Provider>
  );
}

export function useHomepageContentLive(variant: HomepageVariant): HomepageContent {
  const ctx = useContext(LiveContentContext);

  useEffect(() => {
    ctx?.ensureLoaded("homepage", variant);
  }, [ctx, variant]);

  return ctx?.state.homepage[variant] ?? getHomepageContent(variant);
}

export function useFeaturesContentLive(variant: HomepageVariant): FeaturesContent {
  const ctx = useContext(LiveContentContext);

  useEffect(() => {
    ctx?.ensureLoaded("features", variant);
  }, [ctx, variant]);

  return ctx?.state.features[variant] ?? getFeaturesContent(variant);
}

/** Called by Editable right after a successful save, so the edit the user
 * just made shows up immediately instead of on their next page load. */
export function useRefreshLiveContent() {
  const ctx = useContext(LiveContentContext);
  return {
    refreshHomepage: (variant: HomepageVariant) => ctx?.refresh("homepage", variant),
    refreshFeatures: (variant: HomepageVariant) => ctx?.refresh("features", variant),
  };
}
