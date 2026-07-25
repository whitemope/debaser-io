"use client";

import { useState } from "react";
import { useEditMode } from "@/components/EditModeContext";
import { useHomepageVariant } from "@/components/HomepageVariantContext";

export default function Editable({
  path,
  value,
  as: Tag = "span",
  className,
}: {
  path: string;
  value: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
}) {
  const { editMode } = useEditMode();
  const { variant } = useHomepageVariant();
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
        body: JSON.stringify({ variant, path, value: next }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error ?? "save failed");
      if (result.mode === "commit") {
        setStatus("committed");
        setTimeout(() => setStatus("idle"), 6000);
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
          ? "Committed to GitHub — redeploying, refresh this page in about a minute"
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
