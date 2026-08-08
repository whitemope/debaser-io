import v1 from "@/content/features.v1.json";
import v2 from "@/content/features.v2.json";
import type { HomepageVariant } from "@/components/HomepageVariantContext";

export type FeaturesContent = typeof v1;

const content: Record<"v1" | "v2", FeaturesContent> = { v1, v2 };

// The features page only has v1/v2 copy today — homepage Version 3 reuses
// the v1 features content rather than needing its own variant.
export function getFeaturesContent(variant: HomepageVariant): FeaturesContent {
  return content[variant === "v2" ? "v2" : "v1"];
}
