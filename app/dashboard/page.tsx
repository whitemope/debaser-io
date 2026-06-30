"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, signOut } from "@/lib/auth";
import PitchDeck from "@/components/deck/PitchDeck";
import GhostMark from "@/components/GhostMark";

type DeckMeta = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  slides: number;
  status: "ready" | "skeleton";
};

const DECKS: DeckMeta[] = [
  {
    id: "june-2026",
    title: "June 2026 Pitch Deck",
    subtitle: "Series Seed · Investor presentation",
    date: "Jun 2026",
    slides: 16,
    status: "ready",
  },
  { id: "sk1", title: "", subtitle: "", date: "", slides: 0, status: "skeleton" },
  { id: "sk2", title: "", subtitle: "", date: "", slides: 0, status: "skeleton" },
  { id: "sk3", title: "", subtitle: "", date: "", slides: 0, status: "skeleton" },
  { id: "sk4", title: "", subtitle: "", date: "", slides: 0, status: "skeleton" },
  { id: "sk5", title: "", subtitle: "", date: "", slides: 0, status: "skeleton" },
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
      {/* Preview thumbnail */}
      <div className="relative overflow-hidden" style={{ height: "144px" }}>
        <img
          src="/deck-thumb.png"
          alt="Deck cover"
          className="w-full h-full object-cover object-top"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
          <div className="bg-acid text-canvas text-xs font-semibold px-4 py-1.5 rounded-full">
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

export default function Dashboard() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [deckOpen, setDeckOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/signin");
    } else {
      setChecked(true);
    }
  }, [router]);

  const handleSignOut = () => {
    signOut();
    router.push("/signin");
  };

  if (!checked) return null;

  return (
    <>
      <div className="min-h-screen bg-canvas">
        {/* Header */}
        <header className="border-b border-black/[0.05] bg-canvas/80 backdrop-blur-md sticky top-0 z-30">
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <GhostMark className="w-5 h-5 text-acid" />
              <span className="text-ink font-semibold tracking-tight text-sm">debaser</span>
              <div className="w-px h-3.5 bg-black/[0.08] ml-1" />
              <span className="text-ink-tertiary text-xs font-mono ml-1">admin</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-acid/10 border border-acid/20 flex items-center justify-center">
                  <span className="text-acid text-[10px] font-bold">D</span>
                </div>
                <span className="text-ink-secondary text-xs">David Rennick</span>
              </div>
              <button
                onClick={handleSignOut}
                className="text-ink-tertiary text-xs hover:text-ink-secondary transition-colors"
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
            <h1 className="text-ink text-2xl font-bold tracking-tight mb-1">
              Admin
            </h1>
            <p className="text-ink-secondary text-sm">Manage your decks and content.</p>
          </div>

          {/* Decks section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-ink text-base font-semibold tracking-tight">Decks</h2>
                <p className="text-ink-tertiary text-xs mt-0.5">Investor presentations and pitch materials</p>
              </div>
              <button className="flex items-center gap-1.5 text-xs text-ink-secondary border border-black/[0.07] rounded-lg px-3 py-1.5 hover:border-black/[0.14] hover:text-ink transition-all">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                New deck
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {DECKS.map((deck) => (
                <DeckCard
                  key={deck.id}
                  deck={deck}
                  onClick={deck.status === "ready" ? () => setDeckOpen(true) : undefined}
                />
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Deck modal */}
      {deckOpen && <PitchDeck onClose={() => setDeckOpen(false)} />}
    </>
  );
}
