"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, isAuthenticated } from "@/lib/auth";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated()) router.replace("/dashboard");
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) { setError("Please fill in all fields."); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    signIn();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-canvas flex flex-col items-center justify-center px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-dot-grid opacity-50" />

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-10">
          <a href="/v1" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-acid rounded-lg flex items-center justify-center">
              <span className="text-canvas text-sm font-bold">d</span>
            </div>
            <span className="text-ink font-semibold tracking-tight text-lg">debaser</span>
          </a>
        </div>

        {/* Card */}
        <div
          className="bg-canvas-card border border-black/[0.06] rounded-2xl p-8"
          style={{ boxShadow: "0 0 0 1px rgba(16, 21, 133,0.05), 0 24px 48px rgba(16, 21, 133,0.07)" }}
        >
          <div className="mb-7">
            <h1 className="text-ink text-xl font-semibold tracking-tight mb-1">
              Sign in
            </h1>
            <p className="text-ink-secondary text-sm">
              Admin access only.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-ink-secondary text-xs font-mono tracking-wide mb-1.5">
                Email
              </label>
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full bg-canvas border border-black/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-acid/40 transition-colors"
              />
            </div>
            <div>
              <label className="block text-ink-secondary text-xs font-mono tracking-wide mb-1.5">
                Password
              </label>
              <input
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-canvas border border-black/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-acid/40 transition-colors"
              />
            </div>

            {error && (
              <p className="text-red-400 text-xs">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-btn-primary text-btn-primary-fg font-medium py-2.5 rounded-lg text-sm hover:bg-btn-primary/90 transition-all disabled:opacity-60 mt-2"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>

        <p className="text-center mt-6 text-ink-tertiary text-xs">
          <a href="/v1" className="hover:text-ink-secondary transition-colors">
            ← Back to debaser.io
          </a>
        </p>
      </div>
    </div>
  );
}
