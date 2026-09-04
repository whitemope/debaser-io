/**
 * The three homepage concepts. These are NOT ranked versions — each is a
 * different pitch of Debaser at a different audience.
 *
 * "catalogue-as-an-asset" is the primary concept and is served at the site
 * root ("/") with no slug. The other two live under their slug
 * (/music-rights-ai-rails, /global-music-economy). The identifier is also the
 * content file suffix (content/homepage.<slug>.json) for every concept.
 */
export type HomepageVariant =
  | "catalogue-as-an-asset"
  | "music-rights-ai-rails"
  | "global-music-economy";

export const HOMEPAGE_VARIANTS: HomepageVariant[] = [
  "catalogue-as-an-asset",
  "music-rights-ai-rails",
  "global-music-economy",
];

export const DEFAULT_VARIANT: HomepageVariant = "catalogue-as-an-asset";

/**
 * The nav/footer concept switcher label. The primary concept
 * (catalogue-as-an-asset) is pitched as the product, so its chip reads this;
 * the other two chips name their business concept — see conceptSwitcherLabel.
 */
export const CONCEPT_SWITCHER_LABEL = "AI Agents for Music IP";

export const VARIANT_LABELS: Record<HomepageVariant, string> = {
  "catalogue-as-an-asset": "Catalogue as an Asset",
  "music-rights-ai-rails": "Music Rights AI Rails",
  "global-music-economy": "Global Music Economy",
};

/** Text shown on the nav/footer concept switcher for the active concept. */
export function conceptSwitcherLabel(variant: HomepageVariant): string {
  return variant === DEFAULT_VARIANT
    ? CONCEPT_SWITCHER_LABEL
    : VARIANT_LABELS[variant];
}

export function isHomepageVariant(value: string): value is HomepageVariant {
  return (HOMEPAGE_VARIANTS as string[]).includes(value);
}

/**
 * URL prefix for a concept's pages. The default concept lives at the site
 * root, so it has no prefix; the others sit under their slug.
 */
export function conceptBasePath(variant: HomepageVariant): string {
  return variant === DEFAULT_VARIANT ? "" : `/${variant}`;
}

/** Cycles to the next concept, wrapping back to the first. */
export function nextVariant(current: HomepageVariant): HomepageVariant {
  const i = HOMEPAGE_VARIANTS.indexOf(current);
  return HOMEPAGE_VARIANTS[(i + 1) % HOMEPAGE_VARIANTS.length];
}
