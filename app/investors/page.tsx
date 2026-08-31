"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, signOut } from "@/lib/auth";
import BrandMark from "@/components/BrandMark";

type DeckMeta = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  slides: number;
  status: "ready" | "skeleton";
  /** Screenshot of the deck's own title slide, shown on the thumbnail. */
  thumbnail: string;
};

// Always reflects the current month/year. No manual date bumps between updates.
const DECK_DATE_SHORT = new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" });

const DECKS: DeckMeta[] = [
  {
    id: "june-2026",
    slug: "music-rights-ai-rails",
    title: "Debaser (Music Rights AI Rails)",
    subtitle: "Pre-seed · Investor presentation",
    date: DECK_DATE_SHORT,
    slides: 15,
    status: "ready",
    thumbnail: "/deck-thumbs/music-rights-ai-rails.png",
  },
  {
    id: "aug-2026-asset-class",
    slug: "catalogue-as-an-asset",
    title: "Debaser (Catalogue as an Asset)",
    subtitle: "Investor deck · Music IP mid-market",
    date: DECK_DATE_SHORT,
    slides: 7,
    status: "ready",
    thumbnail: "/deck-thumbs/catalogue-as-an-asset.png",
  },
  {
    id: "aug-2026-publishing",
    slug: "catalogue-as-an-asset-publishers",
    title: "Debaser (Catalogue as an Asset - Publishers)",
    subtitle: "Investor deck · Song rights mid-market",
    date: DECK_DATE_SHORT,
    slides: 7,
    status: "ready",
    thumbnail: "/deck-thumbs/catalogue-as-an-asset-publishers.png",
  },
  {
    id: "july-2026-harness",
    slug: "global-music-economy",
    title: "Debaser (Global Music Economy)",
    subtitle: "Pre-seed · Investor presentation",
    date: DECK_DATE_SHORT,
    slides: 16,
    status: "ready",
    thumbnail: "/deck-thumbs/global-music-economy.png",
  },
  { id: "sk1", slug: "", title: "", subtitle: "", date: "", slides: 0, status: "skeleton", thumbnail: "" },
  { id: "sk2", slug: "", title: "", subtitle: "", date: "", slides: 0, status: "skeleton", thumbnail: "" },
  { id: "sk3", slug: "", title: "", subtitle: "", date: "", slides: 0, status: "skeleton", thumbnail: "" },
  { id: "sk4", slug: "", title: "", subtitle: "", date: "", slides: 0, status: "skeleton", thumbnail: "" },
];

function DeckCard({ deck, onClick }: { deck: DeckMeta; onClick?: () => void }) {
  if (deck.status === "skeleton") {
    return (
      <div className="border border-dashed border-black/[0.1] rounded-2xl h-52 flex flex-col items-center justify-center gap-2 text-ink-tertiary/50">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
        <span className="text-[10px] font-mono">New deck</span>
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className="group bg-canvas-card border border-black/[0.05] rounded-2xl overflow-hidden text-left hover:border-black/[0.12] transition-all duration-300 hover:shadow-panel"
    >
      {/* Preview thumbnail — screenshot of the deck's own title slide */}
      <div className="relative overflow-hidden bg-canvas" style={{ height: "144px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={deck.thumbnail}
          alt={`${deck.title} title slide`}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
          <div className="bg-btn-primary text-btn-primary-fg text-xs font-medium px-4 py-1.5 rounded-full">
            Open deck
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-ink text-sm font-semibold tracking-tight mb-1 group-hover:text-acid transition-colors">
          {deck.title}
        </h3>
        <p className="text-ink-tertiary text-xs">{deck.subtitle}</p>
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-black/[0.05]">
          <span className="text-ink-tertiary text-[10px] font-mono">{deck.date}</span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-acid" />
            <span className="text-acid text-[10px] font-mono">Ready</span>
          </div>
        </div>
      </div>
    </button>
  );
}

function StatTile({
  label,
  labelWidth = "w-16",
  valueWidth = "w-20",
  deltaWidth = "w-12",
}: {
  label: string;
  labelWidth?: string;
  valueWidth?: string;
  deltaWidth?: string;
}) {
  // Numbers are skeletoned out rather than shown — this is placeholder
  // data, not live figures. `label` is kept for the tile's aria-label only.
  return (
    <div className="rounded-xl bg-canvas-elevated border border-black/[0.05] px-4 py-3.5" aria-label={label}>
      <div className={`h-2.5 ${labelWidth} rounded bg-ink/[0.10] mb-2.5`} />
      <div className={`h-5 ${valueWidth} rounded bg-ink/[0.16] mb-2`} />
      <div className={`h-2.5 ${deltaWidth} rounded bg-acid/[0.25]`} />
    </div>
  );
}

// Fake monthly figures — placeholder data for the metrics preview, not real numbers.
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const BOOKINGS_K = [58, 96, 47, 110, 65, 134, 72, 121, 84, 145, 91, 128];
const TARGET_K = [70, 62, 84, 74, 96, 80, 104, 88, 110, 92, 116, 100];

function MetricsChart() {
  const width = 960;
  const height = 280;
  const padL = 40;
  const padR = 12;
  const padT = 16;
  const padB = 28;
  const plotW = width - padL - padR;
  const plotH = height - padT - padB;

  const maxVal = Math.max(...BOOKINGS_K, ...TARGET_K) * 1.12;
  const slot = plotW / BOOKINGS_K.length;
  const barW = slot * 0.5;

  const yFor = (v: number) => padT + plotH - (v / maxVal) * plotH;
  const xFor = (i: number) => padL + i * slot + slot / 2;

  const gridFractions = [0, 0.25, 0.5, 0.75, 1];
  const linePoints = TARGET_K.map((v, i) => `${xFor(i)},${yFor(v)}`).join(" ");

  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto min-w-[560px]"
        role="img"
        aria-label="Monthly bookings against target, in thousands of dollars"
      >
        {gridFractions.map((f) => {
          const y = padT + plotH * (1 - f);
          return (
            <g key={f}>
              <line x1={padL} x2={width - padR} y1={y} y2={y} className="stroke-ink/[0.07]" strokeWidth="1" />
              {/* Skeleton block standing in for the axis value label */}
              <rect x={padL - 30} y={y - 4} width="20" height="8" rx="2" className="fill-ink/[0.10]" />
            </g>
          );
        })}

        {BOOKINGS_K.map((v, i) => {
          const x = xFor(i) - barW / 2;
          const y = yFor(v);
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={barW}
              height={padT + plotH - y}
              rx="3"
              className="fill-ink/[0.18]"
            />
          );
        })}

        <polyline
          points={linePoints}
          fill="none"
          className="stroke-acid"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {TARGET_K.map((v, i) => (
          <circle key={i} cx={xFor(i)} cy={yFor(v)} r="2.5" className="fill-acid" />
        ))}

        {MONTHS.map((m, i) => (
          // Skeleton block standing in for the month label
          <rect
            key={m}
            x={xFor(i) - 9}
            y={height - 16}
            width="18"
            height="8"
            rx="2"
            className="fill-ink/[0.10]"
          />
        ))}
      </svg>
    </div>
  );
}

export default function InvestorDashboard() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // Login gate skipped for now — nav links jump straight here.
    // Restore the isAuthenticated() check below to require sign-in again.
    // if (!isAuthenticated()) {
    //   router.replace("/signin");
    // } else {
    //   setChecked(true);
    // }
    setChecked(true);
  }, [router]);

  const handleSignOut = () => {
    signOut();
    // Skip the login page for now — straight back to the main site.
    router.push("/");
  };

  if (!checked) return null;

  return (
    <div className="min-h-screen bg-canvas-subtle">
      {/* Header — same shell/classes as the main site Nav so it never jumps */}
      <header className="sticky top-0 z-30 bg-canvas">
        <div className="relative max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BrandMark href="/" />
          </div>

          {/* Absolutely centered on the bar itself, so it stays dead-center
              regardless of how wide the flanking left/right groups are. */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="text-sm font-medium text-ink">Investor Dashboard</span>
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-acid/10 border border-acid/20 flex items-center justify-center">
                <span className="text-acid text-xs font-bold">D</span>
              </div>
              <span className="text-ink-secondary text-sm">David Rennick</span>
            </div>
            <button
              onClick={handleSignOut}
              className="text-ink-tertiary text-sm hover:text-ink-secondary transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Page title */}
        <div className="mb-10">
          <h1 className="text-ink text-2xl font-bold tracking-tight">
            Investor Dashboard
          </h1>
        </div>

        {/* Decks section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-ink text-base font-semibold tracking-tight">Decks</h2>
            <button className="flex items-center gap-1.5 text-xs text-ink-secondary border border-black/[0.07] rounded-lg px-3 py-1.5 hover:border-black/[0.14] hover:text-ink transition-all">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              New deck
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {DECKS.map((deck) => (
              <DeckCard
                key={deck.id}
                deck={deck}
                onClick={deck.status === "ready" ? () => router.push(`/deck/${deck.slug}`) : undefined}
              />
            ))}
          </div>
        </section>

        {/* Metrics section — placeholder data, not live figures */}
        <section className="mt-12">
          <div className="mb-6">
            <h2 className="text-ink text-base font-semibold tracking-tight">Metrics</h2>
          </div>

          <div className="bg-canvas-card border border-black/[0.05] rounded-2xl p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <StatTile label="ARR run rate" labelWidth="w-20" valueWidth="w-16" deltaWidth="w-14" />
              <StatTile label="Pipeline" labelWidth="w-14" valueWidth="w-14" deltaWidth="w-12" />
              <StatTile label="Win rate" labelWidth="w-16" valueWidth="w-10" deltaWidth="w-10" />
              <StatTile label="Sales cycle" labelWidth="w-20" valueWidth="w-16" deltaWidth="w-16" />
            </div>

            <div className="flex items-center gap-5 mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-ink/[0.18] flex-shrink-0" />
                {/* Skeleton block standing in for the legend label */}
                <span className="h-2.5 w-16 rounded bg-ink/[0.10]" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-acid flex-shrink-0" />
                <span className="h-2.5 w-12 rounded bg-ink/[0.10]" />
              </div>
            </div>

            <MetricsChart />
          </div>
        </section>
      </main>
    </div>
  );
}
