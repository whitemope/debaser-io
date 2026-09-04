import type { NextConfig } from "next";

// Old numbered slugs (/v1, /v2, /v3) are kept working so previously shared
// links don't break. The concepts aren't ranked versions, so the numbers are
// gone from the site itself. /v2 (catalogue-as-an-asset) now points at the
// site root — see the explicit rule below.
const LEGACY_SLUGS: Record<string, string> = {
  v1: "music-rights-ai-rails",
  v3: "global-music-economy",
};

// Deck slugs used to carry version numbers and old working titles. They now
// mirror the homepage concept each deck pitches; old links still resolve.
const LEGACY_DECK_SLUGS: Record<string, string> = {
  "introducing-debaser-version-1": "music-rights-ai-rails",
  "introducing-debaser-version-2": "global-music-economy",
  "asset-class-concept": "catalogue-as-an-asset",
  "publishing-concept": "catalogue-as-an-asset-publishers",
};

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // "catalogue-as-an-asset" is now the primary concept and lives at the
      // site root. Its old slug (and anything under it) redirects to the root.
      {
        source: "/catalogue-as-an-asset",
        destination: "/",
        permanent: true,
      },
      {
        source: "/catalogue-as-an-asset/:path*",
        destination: "/:path*",
        permanent: true,
      },
      { source: "/v2", destination: "/", permanent: true },
      { source: "/v2/:path*", destination: "/:path*", permanent: true },
      ...Object.entries(LEGACY_SLUGS).flatMap(([oldSlug, newSlug]) => [
        { source: `/${oldSlug}`, destination: `/${newSlug}`, permanent: true },
        {
          source: `/${oldSlug}/:path*`,
          destination: `/${newSlug}/:path*`,
          permanent: true,
        },
      ]),
      ...Object.entries(LEGACY_DECK_SLUGS).map(([oldSlug, newSlug]) => ({
        source: `/deck/${oldSlug}`,
        destination: `/deck/${newSlug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
