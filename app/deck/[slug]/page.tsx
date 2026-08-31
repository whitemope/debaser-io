"use client";

import { useParams, useRouter } from "next/navigation";
import PitchDeck from "@/components/deck/PitchDeck";
import PitchDeckHarness from "@/components/deck/PitchDeckHarness";
import PitchDeckAssetClass from "@/components/deck/PitchDeckAssetClass";
import PitchDeckPublishing from "@/components/deck/PitchDeckPublishing";

// Deck slugs mirror the homepage concept they pitch.
const SLUG_TO_DECK: Record<
  string,
  "original" | "harness" | "asset-class" | "publishing"
> = {
  "music-rights-ai-rails": "original",
  "global-music-economy": "harness",
  "catalogue-as-an-asset": "asset-class",
  "catalogue-as-an-asset-publishers": "publishing",
};

export default function DeckSlugPage() {
  const router = useRouter();
  const params = useParams<{ slug: string }>();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const deck = SLUG_TO_DECK[slug];

  if (!deck) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-6">
        <p className="text-ink text-lg font-semibold">Deck not found.</p>
        <a href="/investors" className="text-acid text-sm hover:underline underline-offset-2">
          Back to dashboard
        </a>
      </div>
    );
  }

  const onClose = () => router.push("/investors");

  if (deck === "original") return <PitchDeck onClose={onClose} />;
  if (deck === "harness") return <PitchDeckHarness onClose={onClose} />;
  if (deck === "asset-class") return <PitchDeckAssetClass onClose={onClose} />;
  return <PitchDeckPublishing onClose={onClose} />;
}
