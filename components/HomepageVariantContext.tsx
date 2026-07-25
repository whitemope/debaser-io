"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type HomepageVariant = "v1" | "v2";

const HomepageVariantContext = createContext<{
  variant: HomepageVariant;
  setVariant: (variant: HomepageVariant) => void;
}>({
  variant: "v1",
  setVariant: () => {},
});

export function HomepageVariantProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [variant, setVariantState] = useState<HomepageVariant>("v1");

  useEffect(() => {
    const stored = localStorage.getItem("homepage-variant");
    if (stored === "v2") setVariantState("v2");
  }, []);

  const setVariant = (next: HomepageVariant) => {
    setVariantState(next);
    localStorage.setItem("homepage-variant", next);
  };

  return (
    <HomepageVariantContext.Provider value={{ variant, setVariant }}>
      {children}
    </HomepageVariantContext.Provider>
  );
}

export function useHomepageVariant() {
  return useContext(HomepageVariantContext);
}
