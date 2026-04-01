import { RevealSection } from "@/hooks/useScrollReveal";

const METHODS = [
  {
    title: "Травма-ориентированный подход",
    desc: "Работа с последствиями травматического опыта с учётом особенностей нервной системы и темпа клиента.",
  },
  {
    title: "Бережная разговорная терапия",
    desc: "Пространство, где можно безопасно говорить о том, что важно — без оценки и давления.",
  },
  {
    title: "Техники стабилизации",
    desc: "Методы саморегуляции, помогающие вернуть ощущение контроля и внутреннего равновесия.",
  },
  {
    title: "Работа с эмоциями и телом",
    desc: "Внимание к телесным реакциям и эмоциональным процессам для более глубокого восстановления.",
  },
  {
    title: "Исследование паттернов",
    desc: "Осознание привычных моделей мышления и поведения, которые поддерживают страдание.",
  },
];

const Methods = () => {
  return (
    <section id="methods" className="py-20 md:py-28 bg-card">
      <RevealSection className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Методы терапии
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Подходы, которые я использую в работе
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {METHODS.map((m, i) => (
            <div
              key={i}
              className="rounded-xl border border-border p-6 card-hover bg-background"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {m.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
};

export default Methods;
