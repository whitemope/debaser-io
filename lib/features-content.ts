import musicRightsAiRails from "@/content/features.music-rights-ai-rails.json";
import catalogueAsAnAsset from "@/content/features.catalogue-as-an-asset.json";
import type { HomepageVariant } from "@/lib/variants";

export type FeaturesContent = typeof musicRightsAiRails;

// The features page only has copy for two concepts today — "global-music-economy"
// reuses the "music-rights-ai-rails" copy rather than needing its own file.
export function getFeaturesContent(variant: HomepageVariant): FeaturesContent {
  return variant === "catalogue-as-an-asset" ? catalogueAsAnAsset : musicRightsAiRails;
}
