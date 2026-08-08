import { permanentRedirect } from "next/navigation";

// Features now lives under a version slug (/v1/features, /v2/features,
// /v3/features). Bare "/features" resolves to the default version.
export default function RootFeaturesPage() {
  permanentRedirect("/v1/features");
}
