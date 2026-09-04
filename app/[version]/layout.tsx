import { notFound, redirect } from "next/navigation";
import { HOMEPAGE_VARIANTS, DEFAULT_VARIANT } from "@/lib/variants";

// The default concept is served slugless at the site root, so it gets no
// route of its own here.
export function generateStaticParams() {
  return HOMEPAGE_VARIANTS.filter((version) => version !== DEFAULT_VARIANT).map(
    (version) => ({ version })
  );
}

export default async function VersionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ version: string }>;
}) {
  const { version } = await params;

  if (!(HOMEPAGE_VARIANTS as string[]).includes(version)) {
    notFound();
  }

  // The default concept only lives at the root; its old slug redirects there.
  // (next.config.ts also handles this at the edge — this is the fallback.)
  if (version === DEFAULT_VARIANT) {
    redirect("/");
  }

  return <>{children}</>;
}
