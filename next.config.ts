import type { NextConfig } from "next";

// Vercel builds always set NODE_ENV=production, even for preview deployments,
// so we can't use NODE_ENV to distinguish "preview" from "real production".
// VERCEL_ENV (only set on Vercel) tells them apart; locally it's undefined,
// which also means "allow editing".
const isProductionDeployment = process.env.VERCEL_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_ALLOW_CONTENT_EDIT: isProductionDeployment ? "false" : "true",
  },
};

export default nextConfig;
