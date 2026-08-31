import musicRightsAiRails from "@/content/homepage.music-rights-ai-rails.json";
import catalogueAsAnAsset from "@/content/homepage.catalogue-as-an-asset.json";
import globalMusicEconomy from "@/content/homepage.global-music-economy.json";
import type { HomepageVariant } from "@/lib/variants";

export type HomepageContent = typeof musicRightsAiRails;

const content: Record<HomepageVariant, HomepageContent> = {
  "music-rights-ai-rails": musicRightsAiRails,
  "catalogue-as-an-asset": catalogueAsAnAsset,
  "global-music-economy": globalMusicEconomy,
};

export function getHomepageContent(variant: HomepageVariant): HomepageContent {
  return content[variant];
}
