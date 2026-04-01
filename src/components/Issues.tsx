import { RevealSection } from "@/hooks/useScrollReveal";

const ISSUES = [
  "Последствия психологической травмы",
  "Тревога и внутреннее напряжение",
  "Панические реакции",
  "Эмоциональное выгорание",
  "Сложные жизненные кризисы",
  "Трудности в отношениях",
  "Проблемы с границами",
  "Чувство вины, стыда, беспомощности",
  "Травматичный опыт прошлого",
  "Потеря опоры, ощущение «я не справляюсь»",
];

const Issues = () => {
  return (
    <section id="issues" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 blob-blue rounded-full opacity-40" />
      <RevealSection className="container relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            С чем я работаю
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Если вы узнаёте себя хотя бы в одном из этих пунктов — я могу помочь
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {ISSUES.map((title, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-5 border border-border card-hover flex items-center justify-center text-center"
            >
              <span className="text-sm font-medium text-foreground leading-snug">
                {title}
              </span>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
};

export default Issues;
