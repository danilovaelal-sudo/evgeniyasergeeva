import { useState } from "react";
import { RevealSection } from "@/hooks/useScrollReveal";

const TestSection = ({ onOpenTest }: { onOpenTest: () => void }) => {
  return (
    <section className="py-14 md:py-28 relative overflow-hidden">
      <div className="absolute top-10 right-0 w-72 h-72 blob-yellow rounded-full opacity-30" />
      <div className="absolute bottom-0 left-0 w-60 h-60 blob-blue rounded-full opacity-30" />
      <RevealSection className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 md:mb-4">
            Узнайте свой уровень стресса
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-lg mx-auto">
            Пройдите короткий тест из 10 вопросов, чтобы оценить своё эмоциональное состояние. Это займёт 2–3 минуты.
          </p>
          <p className="text-sm text-muted-foreground/70 mb-8">
            Тест основан на методиках оценки уровня стресса и эмоционального выгорания. По итогам вы получите персональную рекомендацию и сможете отправить результаты психологу.
          </p>
          <button
            onClick={onOpenTest}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:brightness-105 hover:shadow-lg transition-all"
          >
            Пройти тест
          </button>
        </div>
      </RevealSection>
    </section>
  );
};

export default TestSection;
