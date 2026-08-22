import GhostMark from "@/components/GhostMark";

/**
 * The "debaser" wordmark used in every top bar across the site (main nav
 * and the investor dashboard). Kept as one component with fixed classes so
 * the logo never shifts size/spacing when navigating between sections.
 */
export default function BrandMark({ href = "/" }: { href?: string }) {
  return (
    <a href={href} className="flex items-center gap-2 group">
      <GhostMark className="w-6 h-6 text-ink flex-shrink-0" />
      <span className="text-ink font-semibold tracking-tight text-base">
        debaser
      </span>
    </a>
  );
}
