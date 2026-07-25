"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/animation";
import { useState } from "react";
import { useHomepageVariant } from "@/components/HomepageVariantContext";
import { getHomepageContent } from "@/lib/homepage-content";
import Editable from "@/components/Editable";

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
  const { variant } = useHomepageVariant();
  const content = getHomepageContent(variant).earlyAccess;
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
      className="py-28 md:py-36 bg-canvas-subtle relative overflow-hidden scroll-mt-16"
    >
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
            <Editable
              path="earlyAccess.eyebrow"
              value={content.eyebrow}
              className="text-ink-tertiary text-xs font-mono tracking-wide mb-4 block"
            />
            <Editable
              as="h2"
              path="earlyAccess.headline"
              value={content.headline}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.1] mb-6 text-balance block"
            />
            <Editable
              as="p"
              path="earlyAccess.body"
              value={content.body}
              className="text-ink-secondary text-lg leading-relaxed mb-10 block"
            />

            <div className="space-y-5">
              {content.valueProps.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-5 h-5 rounded-full bg-acid-dim border border-acid-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-acid" />
                  </div>
                  <div>
                    <Editable
                      as="p"
                      path={`earlyAccess.valueProps.${i}.title`}
                      value={item.title}
                      className="text-ink text-sm font-semibold mb-0.5 block"
                    />
                    <Editable
                      as="p"
                      path={`earlyAccess.valueProps.${i}.text`}
                      value={item.text}
                      className="text-ink-secondary text-sm block"
                    />
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
                style={{ boxShadow: "0 0 0 1px rgba(16, 21, 133,0.05)" }}
              >
                <div
                  className="w-14 h-14 rounded-full bg-acid/10 border border-acid/25 flex items-center justify-center mx-auto mb-6"
                  style={{ boxShadow: "0 0 24px rgba(76, 175, 80,0.12)" }}
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
                <Editable
                  as="h3"
                  path="earlyAccess.successHeadline"
                  value={content.successHeadline}
                  className="text-ink text-2xl font-bold mb-3 tracking-tight block"
                />
                <Editable
                  as="p"
                  path="earlyAccess.successBody"
                  value={content.successBody}
                  className="text-ink-secondary leading-relaxed block"
                />
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-canvas-card border border-black/[0.06] rounded-2xl p-7 space-y-4"
                style={{ boxShadow: "0 0 0 1px rgba(16, 21, 133,0.05)" }}
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
                  <label className="block text-ink-secondary text-xs font-mono tracking-wide mb-2">
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
                  <label className="block text-ink-secondary text-xs font-mono tracking-wide mb-2">
                    <Editable
                      path="earlyAccess.problemLabel"
                      value={content.problemLabel}
                    />{" "}
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
                  className="w-full bg-btn-primary text-btn-primary-fg font-medium py-3 rounded-lg text-[15px] hover:bg-btn-primary/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  style={
                    formState !== "submitting"
                      ? {}
                      : { cursor: "not-allowed" }
                  }
                >
                  {formState === "submitting" ? (
                    "Submitting..."
                  ) : (
                    <Editable path="earlyAccess.cta" value={content.cta} />
                  )}
                </button>
                <Editable
                  as="p"
                  path="earlyAccess.disclaimer"
                  value={content.disclaimer}
                  className="text-ink-tertiary text-xs text-center block"
                />
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
        className="block text-ink-secondary text-xs font-mono tracking-wide mb-2"
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
