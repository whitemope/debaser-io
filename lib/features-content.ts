import v1 from "@/content/features.v1.json";
import v2 from "@/content/features.v2.json";

export type FeaturesContent = typeof v1;

const content: Record<"v1" | "v2", FeaturesContent> = { v1, v2 };

export function getFeaturesContent(variant: "v1" | "v2"): FeaturesContent {
  return content[variant];
}
