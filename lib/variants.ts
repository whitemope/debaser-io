/**
 * The three homepage concepts. These are NOT ranked versions — each is a
 * different pitch of Debaser at a different audience. The identifier is also
 * the URL slug (/music-rights-ai-rails, /catalogue-as-an-asset, ...) and the
 * content file suffix (content/homepage.<slug>.json).
 */
export type HomepageVariant =
  | "music-rights-ai-rails"
  | "catalogue-as-an-asset"
  | "global-music-economy";

export const HOMEPAGE_VARIANTS: HomepageVariant[] = [
  "music-rights-ai-rails",
  "catalogue-as-an-asset",
  "global-music-economy",
];

export const DEFAULT_VARIANT: HomepageVariant = "music-rights-ai-rails";

export const VARIANT_LABELS: Record<HomepageVariant, string> = {
  "music-rights-ai-rails": "Music Rights AI Rails",
  "catalogue-as-an-asset": "Catalogue as an Asset",
  "global-music-economy": "Global Music Economy",
};

export function isHomepageVariant(value: string): value is HomepageVariant {
  return (HOMEPAGE_VARIANTS as string[]).includes(value);
}

/** Cycles to the next concept, wrapping back to the first. */
export function nextVariant(current: HomepageVariant): HomepageVariant {
  const i = HOMEPAGE_VARIANTS.indexOf(current);
  return HOMEPAGE_VARIANTS[(i + 1) % HOMEPAGE_VARIANTS.length];
}
