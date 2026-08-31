import { permanentRedirect } from "next/navigation";
import { DEFAULT_VARIANT } from "@/lib/variants";

// The homepage lives under a concept slug (/music-rights-ai-rails,
// /catalogue-as-an-asset, /global-music-economy). Bare "/" always resolves
// to the default concept.
export default function RootPage() {
  permanentRedirect(`/${DEFAULT_VARIANT}`);
}
