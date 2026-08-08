"use client";

import { useEffect, useRef, useState } from "react";

/** Adds the `v4-in` class once the element scrolls into view. Mirrors the
 * kind of scroll-reveal Odin uses throughout, without a full animation lib. */
export function useReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);

    // Safety net: a backgrounded tab, a slow device or an observer that
    // never fires shouldn't leave content permanently invisible.
    const fallback = setTimeout(() => setInView(true), 2500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [threshold]);

  return { ref, inView };
}
