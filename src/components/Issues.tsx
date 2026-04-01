import { useState } from "react";
import { RevealSection } from "@/hooks/useScrollReveal";

const ISSUES = [
  {
    title: "Последствия психологической травмы",
    description: "Травматический опыт может оставлять глубокий след: навязчивые воспоминания, ночные кошмары, ощущение постоянной угрозы. В терапии мы бережно работаем с этими переживаниями, помогая восстановить чувство безопасности и вернуть контроль над своей жизнью.",
  },
  {
    title: "Тревога и внутреннее напряжение",
    description: "Постоянное беспокойство, невозможность расслабиться, ощущение что вот-вот случится что-то плохое. Терапия помогает понять корни тревоги, освоить способы саморегуляции и постепенно вернуть внутреннее спокойствие.",
  },
  {
    title: "Панические реакции",
    description: "Внезапные приступы страха, учащённое сердцебиение, ощущение потери контроля. Мы разбираемся с механизмами паники, учимся распознавать триггеры и находим способы справляться с приступами.",
  },
  {
    title: "Эмоциональное выгорание",
    description: "Истощение, потеря интереса, ощущение бессмысленности. Вместе мы исследуем, что привело к выгоранию, восстанавливаем связь с собственными потребностями и выстраиваем более устойчивый баланс.",
  },
  {
    title: "Сложные жизненные кризисы",
    description: "Развод, потеря близкого, смена жизненного уклада — кризис может выбить почву из-под ног. Терапия становится опорой в период перемен и помогает найти новые смыслы и ресурсы.",
  },
  {
    title: "Трудности в отношениях",
    description: "Повторяющиеся конфликты, сложности с доверием, страх близости или зависимость. Мы исследуем паттерны ваших отношений и находим более здоровые способы быть рядом с другими.",
  },
  {
    title: "Проблемы с границами",
    description: "Сложно сказать «нет», постоянное подстраивание под других, ощущение что вас используют. В терапии мы учимся распознавать свои границы и уверенно их отстаивать, сохраняя уважение к себе и другим.",
  },
  {
    title: "Чувство вины, стыда, беспомощности",
    description: "Эти тяжёлые чувства могут парализовать и мешать жить. Терапия помогает разобраться в их истоках, отделить реальную ответственность от навязанной и постепенно освободиться от их груза.",
  },
  {
    title: "Травматичный опыт прошлого",
    description: "То, что произошло давно, может продолжать влиять на настоящее. Мы аккуратно обращаемся к прошлому опыту, чтобы он перестал управлять вашими решениями и эмоциями сегодня.",
  },
  {
    title: "Потеря опоры, ощущение «я не справляюсь»",
    description: "Когда кажется, что сил больше нет и всё рушится. Терапия помогает найти внутренние ресурсы, восстановить ощущение собственной устойчивости и способности справляться с жизнью.",
  },
];

const Issues = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          {ISSUES.map((issue, i) => (
            <div key={i} className="relative">
              <button
                onClick={() => handleToggle(i)}
                className={`w-full bg-card rounded-xl p-5 border border-border card-hover flex items-center justify-center text-center cursor-pointer transition-all ${
                  openIndex === i ? "ring-2 ring-ring shadow-lg" : ""
                }`}
              >
                <span className="text-sm font-medium text-foreground leading-snug">
                  {issue.title}
                </span>
              </button>

              {openIndex === i && (
                <div
                  className="absolute z-20 top-full mt-2 left-1/2 -translate-x-1/2 w-72 sm:w-80 animate-fade-up"
                >
                  <div
                    className="relative bg-[hsl(var(--warm-white))] rounded-lg p-5 shadow-xl border border-border"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(transparent, transparent 27px, hsl(var(--border)) 28px)",
                      backgroundSize: "100% 28px",
                    }}
                  >
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-primary/30 rounded-t-lg" />
                    <h4 className="font-serif font-bold text-foreground text-sm mb-2 leading-snug">
                      {issue.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {issue.description}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenIndex(null);
                      }}
                      className="absolute top-2 right-3 text-muted-foreground hover:text-foreground text-sm transition-colors"
                      aria-label="Закрыть"
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
};

export default Issues;
