"use client";

import { useState } from "react";
import { useEditMode } from "@/components/EditModeContext";
import { useHomepageVariant } from "@/components/HomepageVariantContext";
import { useRefreshLiveContent } from "@/lib/live-content";

export default function Editable({
  path,
  value,
  as: Tag = "span",
  className,
  doc = "homepage",
}: {
  path: string;
  value: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
  doc?: "homepage" | "features";
}) {
  const { editMode } = useEditMode();
  const { variant } = useHomepageVariant();
  const { refreshHomepage, refreshFeatures } = useRefreshLiveContent();
  const [status, setStatus] = useState<"idle" | "saving" | "committed" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!editMode) {
    return <Tag className={className}>{value}</Tag>;
  }

  const handleBlur = async (e: React.FocusEvent<HTMLElement>) => {
    const next = e.currentTarget.textContent ?? "";
    if (next === value) return;
    setStatus("saving");
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ doc, variant, path, value: next }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error ?? "save failed");
      // Pull the fresh copy back in immediately rather than waiting for the
      // next natural fetch — this is what makes the edit show up right away.
      if (doc === "features") refreshFeatures(variant);
      else refreshHomepage(variant);
      if (result.mode === "commit") {
        setStatus("committed");
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("idle");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to save.");
    }
  };

  return (
    <Tag
      title={
        status === "committed"
          ? "Saved — live now"
          : status === "error"
            ? errorMessage
            : undefined
      }
      className={`${className ?? ""} outline-dashed outline-1 outline-offset-2 outline-acid/40 hover:bg-acid/5 focus:bg-acid/10 focus:outline-acid rounded-[2px] transition-colors cursor-text ${
        status === "saving" ? "opacity-60" : ""
      } ${status === "committed" ? "outline-blue-400" : ""} ${
        status === "error" ? "outline-red-500" : ""
      }`}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
    >
      {value}
    </Tag>
  );
}
