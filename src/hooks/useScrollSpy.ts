import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        {
          rootMargin: `-${offset}px 0px -60% 0px`,
          threshold: 0.1,
        }
      );

      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [ids, offset]);

  return activeId;
}
