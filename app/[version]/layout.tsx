import { notFound } from "next/navigation";

const VALID_VERSIONS = ["v1", "v2", "v3"];

export function generateStaticParams() {
  return VALID_VERSIONS.map((version) => ({ version }));
}

export default async function VersionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ version: string }>;
}) {
  const { version } = await params;

  if (!VALID_VERSIONS.includes(version)) {
    notFound();
  }

  return <>{children}</>;
}
