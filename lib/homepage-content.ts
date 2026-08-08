import v1 from "@/content/homepage.v1.json";
import v2 from "@/content/homepage.v2.json";
import v3 from "@/content/homepage.v3.json";
import type { HomepageVariant } from "@/components/HomepageVariantContext";

export type HomepageContent = typeof v1;

const content: Record<HomepageVariant, HomepageContent> = { v1, v2, v3 };

export function getHomepageContent(variant: HomepageVariant): HomepageContent {
  return content[variant];
}
