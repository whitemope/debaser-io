import { permanentRedirect } from "next/navigation";

// The homepage now lives under a version slug (/v1, /v2, /v3). Bare "/"
// always resolves to the default version.
export default function RootPage() {
  permanentRedirect("/v1");
}
