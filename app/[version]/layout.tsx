import { notFound } from "next/navigation";
import { HOMEPAGE_VARIANTS } from "@/lib/variants";

export function generateStaticParams() {
  return HOMEPAGE_VARIANTS.map((version) => ({ version }));
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

  return <>{children}</>;
}
