import { RevealSection, RevealItem } from "@/hooks/useScrollReveal";

const STEPS = [
  {
    title: "Обращение",
    desc: "Вы пишете мне в Telegram или оставляете заявку. Я отвечаю в течение дня.",
  },
  {
    title: "Согласование времени",
    desc: "Мы выбираем удобное время для первой встречи и обсуждаем формат.",
  },
  {
    title: "Видеоконсультация",
    desc: "Встреча проходит онлайн в видеоформате. Вам нужен только интернет и комфортное место.",
  },
  {
    title: "Дальнейшая работа",
    desc: "Мы определяем план и продолжаем работу в подходящем для вас формате и ритме.",
  },
];

const Process = () => {
  return (
    <section className="py-14 md:py-28 bg-card">
      <RevealSection className="container">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 md:mb-4">
            Как проходит работа
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            Простой и понятный путь к первой консультации
          </p>
        </div>
      </RevealSection>
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STEPS.map((step, i) => (
            <RevealItem key={i} variant="fade-up" delay={i * 150}>
              <div className="relative text-center">
                <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-3 sm:mb-4">
                  {i + 1}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
