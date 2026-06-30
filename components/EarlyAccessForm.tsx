"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/animation";
import { useState } from "react";

type FormState = "idle" | "submitting" | "success";

const companyTypes = [
  "Label",
  "Publisher",
  "Distributor",
  "Label services",
  "Management company",
  "Catalogue owner / fund",
  "Neighbouring rights",
  "Other",
];

export default function EarlyAccessForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    companyType: "",
    problem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
  };

  return (
    <section
      id="access"
      className="py-28 md:py-36 bg-canvas-subtle relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(144,19,254,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-ink-tertiary text-xs font-mono uppercase tracking-[0.18em] mb-4">
              Early access
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.1] mb-6 text-balance">
              Royalties are too valuable to run blind.
            </h2>
            <p className="text-ink-secondary text-lg leading-relaxed mb-10">
              We are working with forward-thinking music companies to shape the
              future of royalty operations. If you are spending too long on
              statements, missing money or unexplained payments — we want to
              hear from you.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: "Exclusive early access",
                  text: "Work directly with the team during our private beta phase.",
                },
                {
                  title: "Shape the product",
                  text: "Your royalty problems directly influence what we build next.",
                },
                {
                  title: "Founding customer pricing",
                  text: "Early partners receive preferential terms that carry forward.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-5 h-5 rounded-full bg-acid-dim border border-acid-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-acid" />
                  </div>
                  <div>
                    <p className="text-ink text-sm font-semibold mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-ink-secondary text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            {formState === "success" ? (
              <div
                className="bg-canvas-card border border-black/[0.06] rounded-2xl p-10 text-center"
                style={{ boxShadow: "0 0 0 1px rgba(30,21,18,0.05)" }}
              >
                <div
                  className="w-14 h-14 rounded-full bg-acid/10 border border-acid/25 flex items-center justify-center mx-auto mb-6"
                  style={{ boxShadow: "0 0 24px rgba(144,19,254,0.12)" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    className="text-acid"
                  >
                    <path
                      d="M4 11l5 5 9-9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-ink text-2xl font-bold mb-3 tracking-tight">
                  Request received.
                </h3>
                <p className="text-ink-secondary leading-relaxed">
                  Thank you — we will be in touch shortly to learn more about
                  your royalty operations and how Debaser can help.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-canvas-card border border-black/[0.06] rounded-2xl p-7 space-y-4"
                style={{ boxShadow: "0 0 0 1px rgba(30,21,18,0.05)" }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    label="Role"
                    name="role"
                    type="text"
                    placeholder="Head of Royalties"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-ink-secondary text-xs font-mono uppercase tracking-[0.12em] mb-2">
                    Company type
                  </label>
                  <select
                    name="companyType"
                    value={formData.companyType}
                    onChange={handleChange}
                    required
                    className="w-full bg-canvas border border-black/[0.07] rounded-lg px-3 py-2.5 text-sm text-ink focus:outline-none focus:border-acid/40 transition-colors appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%235A5A52' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                    }}
                  >
                    <option value="" className="bg-canvas-card">
                      Select company type
                    </option>
                    {companyTypes.map((type) => (
                      <option key={type} value={type} className="bg-canvas-card">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-ink-secondary text-xs font-mono uppercase tracking-[0.12em] mb-2">
                    What royalty problem are you trying to solve?{" "}
                    <span className="text-ink-tertiary normal-case font-sans tracking-normal">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    name="problem"
                    value={formData.problem}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your current pain points..."
                    className="w-full bg-canvas border border-black/[0.07] rounded-lg px-3 py-2.5 text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-acid/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full bg-acid text-canvas font-semibold py-3 rounded-lg text-[15px] hover:bg-acid/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  style={
                    formState !== "submitting"
                      ? {}
                      : { cursor: "not-allowed" }
                  }
                >
                  {formState === "submitting"
                    ? "Submitting..."
                    : "Request early access"}
                </button>
                <p className="text-ink-tertiary text-xs text-center">
                  No spam. We will reach out directly to learn more about your
                  work.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-ink-secondary text-xs font-mono uppercase tracking-[0.12em] mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-canvas border border-black/[0.07] rounded-lg px-3 py-2.5 text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-acid/40 transition-colors"
      />
    </div>
  );
}
