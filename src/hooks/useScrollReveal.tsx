import { useEffect, useRef, ReactNode } from "react";

type RevealVariant = "fade-up" | "fade-left" | "fade-right" | "scale" | "fade-in";

export function useScrollReveal(variant: RevealVariant = "fade-up", delay = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, delay]);

  const baseClass = `reveal-${variant}`;
  return { ref, className: baseClass };
}

export function RevealSection({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
}) {
  const reveal = useScrollReveal(variant, delay);
  return (
    <div ref={reveal.ref} className={`${reveal.className} ${className}`}>
      {children}
    </div>
  );
}

export function RevealItem({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
}) {
  const reveal = useScrollReveal(variant, delay);
  return (
    <div ref={reveal.ref} className={`${reveal.className} ${className}`}>
      {children}
    </div>
  );
}
