"use client";

import ThemeToggle from "@/components/ThemeToggle";
import OptionToggle from "@/components/OptionToggle";
import GhostMark from "@/components/GhostMark";
import { usePathname } from "next/navigation";
import { useHomepageVariant } from "@/components/HomepageVariantContext";
import { getHomepageContent } from "@/lib/homepage-content";
import Editable from "@/components/Editable";

export default function Footer() {
  const year = new Date().getFullYear();
  const { variant } = useHomepageVariant();
  const content = getHomepageContent(variant).footer;
  const pathname = usePathname();
  const homeBase = pathname === `/${variant}` ? "" : `/${variant}`;

  return (
    <footer className="border-t border-black/[0.05] bg-canvas py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <GhostMark className="w-5 h-5 text-ink" />
              <span className="text-ink font-semibold tracking-tight">
                debaser
              </span>
            </div>
            <Editable
              as="p"
              path="footer.tagline"
              value={content.tagline}
              className="text-ink-tertiary text-sm max-w-xs leading-relaxed block"
            />
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <a
              href={`${homeBase}#product`}
              className="text-ink-tertiary text-sm hover:text-ink-secondary transition-colors"
            >
              Product
            </a>
            <a
              href={`${homeBase}#agents`}
              className="text-ink-tertiary text-sm hover:text-ink-secondary transition-colors"
            >
              Agents
            </a>
            <a
              href={`${homeBase}#use-cases`}
              className="text-ink-tertiary text-sm hover:text-ink-secondary transition-colors"
            >
              Use cases
            </a>
            <a
              href={`${homeBase}#vision`}
              className="text-ink-tertiary text-sm hover:text-ink-secondary transition-colors"
            >
              Vision
            </a>
            <a
              href={`${homeBase}#access`}
              className="text-ink-tertiary text-sm hover:text-ink-secondary transition-colors"
            >
              Early access
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-ink-tertiary text-xs">
            © {year} Debaser. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <ThemeToggle />
            <div className="w-px h-3.5 bg-black/[0.08]" />
            <OptionToggle />
          </div>
          <Editable
            as="p"
            path="footer.principle"
            value={content.principle}
            className="text-ink-tertiary text-xs font-mono block"
          />
        </div>
      </div>
    </footer>
  );
}
