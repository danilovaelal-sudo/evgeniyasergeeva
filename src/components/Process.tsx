import { RevealSection } from "@/hooks/useScrollReveal";
import { MessageSquare, CalendarCheck, Video, ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: MessageSquare,
    title: "Обращение",
    desc: "Вы пишете мне в Telegram или оставляете заявку. Я отвечаю в течение дня.",
  },
  {
    icon: CalendarCheck,
    title: "Согласование времени",
    desc: "Мы выбираем удобное время для первой встречи и обсуждаем формат.",
  },
  {
    icon: Video,
    title: "Видеоконсультация",
    desc: "Встреча проходит онлайн в видеоформате. Вам нужен только интернет и комфортное место.",
  },
  {
    icon: ArrowRight,
    title: "Дальнейшая работа",
    desc: "Мы определяем план и продолжаем работу в подходящем для вас формате и ритме.",
  },
];

const Process = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <RevealSection className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Как проходит работа
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Простой и понятный путь к первой консультации
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div key={i} className="relative text-center">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon size={24} className="text-secondary" />
              </div>
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-xs font-bold text-primary">
                {i + 1}
              </span>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
};

export default Process;
