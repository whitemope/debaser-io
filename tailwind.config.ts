import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "rgb(var(--canvas) / <alpha-value>)",
        "canvas-subtle": "rgb(var(--canvas-subtle) / <alpha-value>)",
        "canvas-card": "rgb(var(--canvas-card) / <alpha-value>)",
        "canvas-elevated": "rgb(var(--canvas-elevated) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        "ink-secondary": "rgb(var(--ink-secondary) / <alpha-value>)",
        "ink-tertiary": "rgb(var(--ink-tertiary) / <alpha-value>)",
        acid: "rgb(var(--acid) / <alpha-value>)",
        "acid-dim": "rgb(var(--acid) / 0.10)",
        "acid-border": "rgb(var(--acid) / 0.28)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.02em",
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(30,21,18,0.08) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "dot-sm": "24px 24px",
        "dot-md": "32px 32px",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        panel:
          "0 0 0 1px rgba(30,21,18,0.07), 0 24px 56px rgba(30,21,18,0.09), 0 8px 24px rgba(30,21,18,0.06)",
        card: "0 0 0 1px rgba(30,21,18,0.06), 0 4px 16px rgba(30,21,18,0.07)",
        "card-hover":
          "0 0 0 1px rgba(30,21,18,0.09), 0 8px 24px rgba(30,21,18,0.10)",
        "acid-glow": "0 0 32px rgba(144,19,254,0.22)",
      },
    },
  },
  plugins: [],
} satisfies Config;
