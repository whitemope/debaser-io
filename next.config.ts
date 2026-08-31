import type { NextConfig } from "next";

// Old numbered slugs (/v1, /v2, /v3) are kept working so previously shared
// links don't break. The concepts aren't ranked versions, so the numbers are
// gone from the site itself.
const LEGACY_SLUGS: Record<string, string> = {
  v1: "music-rights-ai-rails",
  v2: "catalogue-as-an-asset",
  v3: "global-music-economy",
};

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return Object.entries(LEGACY_SLUGS).flatMap(([oldSlug, newSlug]) => [
      { source: `/${oldSlug}`, destination: `/${newSlug}`, permanent: true },
      {
        source: `/${oldSlug}/:path*`,
        destination: `/${newSlug}/:path*`,
        permanent: true,
      },
    ]);
  },
};

export default nextConfig;
