import v1 from "@/content/homepage.v1.json";
import v2 from "@/content/homepage.v2.json";

export type HomepageContent = typeof v1;

const content: Record<"v1" | "v2", HomepageContent> = { v1, v2 };

export function getHomepageContent(variant: "v1" | "v2"): HomepageContent {
  return content[variant];
}
