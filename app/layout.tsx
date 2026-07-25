import type { Metadata } from "next";
import { Inter, Hanken_Grotesk } from "next/font/google";
import { HomepageVariantProvider } from "@/components/HomepageVariantContext";
import { EditModeProvider } from "@/components/EditModeContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Debaser — The AI Operating System for Music Royalties",
  description:
    "Debaser helps labels, publishers and catalogue owners ingest statements, understand contracts, detect missing income, and explain every royalty payment with source-backed confidence.",
  keywords: [
    "music royalties",
    "royalty operations",
    "AI music platform",
    "royalty management",
    "music publishing",
    "label services",
    "catalogue management",
    "rights management",
  ],
  openGraph: {
    title: "Debaser — The AI Operating System for Music Royalties",
    description:
      "Find missing money. Explain every payment. Royalty operations rebuilt for the AI era.",
    type: "website",
    url: "https://debaser.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Debaser — The AI Operating System for Music Royalties",
    description:
      "Find missing money. Explain every payment. Royalty operations rebuilt for the AI era.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${hankenGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent flash of wrong theme by reading localStorage before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-canvas text-ink antialiased">
        <HomepageVariantProvider>
          <EditModeProvider>{children}</EditModeProvider>
        </HomepageVariantProvider>
      </body>
    </html>
  );
}
