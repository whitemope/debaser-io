"use client";
import { useRouter } from "next/navigation";
import PitchDeck from "@/components/deck/PitchDeck";

export default function DeckPage() {
  const router = useRouter();
  return <PitchDeck onClose={() => router.push("/")} />;
}
