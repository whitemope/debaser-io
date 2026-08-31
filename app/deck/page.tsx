import { redirect } from "next/navigation";

// Bare /deck has no single deck to show. Send visitors to the current default.
export default function DeckIndexPage() {
  redirect("/deck/music-rights-ai-rails");
}
