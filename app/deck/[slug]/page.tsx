"use client";

import { useParams, useRouter } from "next/navigation";
import PitchDeck from "@/components/deck/PitchDeck";
import PitchDeckHarness from "@/components/deck/PitchDeckHarness";
import PitchDeckAssetClass from "@/components/deck/PitchDeckAssetClass";
import PitchDeckPublishing from "@/components/deck/PitchDeckPublishing";

// Slug is kebab-case of the deck's display title (its "filename").
const SLUG_TO_DECK: Record<string, "v1" | "v2" | "asset-class" | "publishing"> = {
  "introducing-debaser-version-1": "v1",
  "introducing-debaser-version-2": "v2",
  "asset-class-concept": "asset-class",
  "publishing-concept": "publishing",
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
        <a href="/dashboard" className="text-acid text-sm hover:underline underline-offset-2">
          Back to dashboard
        </a>
      </div>
    );
  }

  const onClose = () => router.push("/dashboard");

  if (deck === "v1") return <PitchDeck onClose={onClose} />;
  if (deck === "v2") return <PitchDeckHarness onClose={onClose} />;
  if (deck === "asset-class") return <PitchDeckAssetClass onClose={onClose} />;
  return <PitchDeckPublishing onClose={onClose} />;
}
