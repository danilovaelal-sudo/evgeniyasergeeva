import { useEffect, useRef, useState } from "react";
import { RevealSection } from "@/hooks/useScrollReveal";

const STATS = [
  { value: 10, suffix: "+", label: "лет практики" },
  { value: 2000, suffix: "+", label: "проведённых сессий" },
  { value: 500, suffix: "+", label: "клиентов" },
  { value: 94, suffix: "%", label: "продолжают терапию" },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const steps = 40;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count.toLocaleString("ru-RU")}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cta opacity-10" />
      <RevealSection className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-foreground mb-1 md:mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
};

export default Stats;
