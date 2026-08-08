"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success";

export default function V4AccessForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    await new Promise((r) => setTimeout(r, 1000));
    setState("success");
  };

  return (
    <section id="access" className="px-6 py-20 sm:py-28 scroll-mt-24">
      <div className="max-w-xl mx-auto text-center">
        <p className="v4-eyebrow mb-4">Early access</p>
        <h2 className="v4-heading text-3xl sm:text-4xl md:text-5xl text-balance mb-5">
          Too much money moves through here to run it on infrastructure this old.
        </h2>
        <p className="text-sm sm:text-base text-[color:var(--v4-ink-secondary)] mb-10 text-balance">
          We&rsquo;re working with a small group of labels, publishers and catalogue owners done
          waiting for the old system to modernise itself. Talk to us.
        </p>

        {state === "success" ? (
          <div className="rounded-3xl p-10" style={{ background: "var(--v4-bg-soft)" }}>
            <p className="v4-heading text-xl mb-2">Request received.</p>
            <p className="text-sm text-[color:var(--v4-ink-secondary)]">
              Thanks — we&rsquo;ll be in touch shortly to learn about your royalty operations.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-left">
            <input
              required
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-full px-5 py-3.5 text-sm bg-white border outline-none focus:border-[color:var(--v4-ink)] transition-colors"
              style={{ borderColor: "var(--v4-line)" }}
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Work email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-full px-5 py-3.5 text-sm bg-white border outline-none focus:border-[color:var(--v4-ink)] transition-colors"
              style={{ borderColor: "var(--v4-line)" }}
            />
            <input
              required
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
              className="w-full rounded-full px-5 py-3.5 text-sm bg-white border outline-none focus:border-[color:var(--v4-ink)] transition-colors"
              style={{ borderColor: "var(--v4-line)" }}
            />
            <button
              type="submit"
              disabled={state === "submitting"}
              className="v4-btn v4-btn-dark justify-center mt-2 disabled:opacity-60"
            >
              {state === "submitting" ? "Sending..." : "Request early access"}
            </button>
            <p className="text-xs text-center mt-1" style={{ color: "var(--v4-ink-tertiary)" }}>
              No spam. We&rsquo;ll reach out directly, one human to another.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
