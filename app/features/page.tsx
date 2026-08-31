import { permanentRedirect } from "next/navigation";
import { DEFAULT_VARIANT } from "@/lib/variants";

// Features lives under a concept slug (/music-rights-ai-rails/features, etc.).
// Bare "/features" resolves to the default concept.
export default function RootFeaturesPage() {
  permanentRedirect(`/${DEFAULT_VARIANT}/features`);
}
