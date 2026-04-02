import { SITE_CONFIG } from "@/lib/config";
import { RevealSection, RevealItem } from "@/hooks/useScrollReveal";

const SERVICES = [
  {
    title: "Индивидуальная сессия",
    desc: "Личная встреча онлайн или очно в кабинете, где мы работаем с вашим запросом в безопасном темпе.",
    forWhom: "Для тех, кому нужна персональная поддержка и внимание к своей ситуации.",
    benefits: ["Индивидуальный подход", "Онлайн или очно", "Конфиденциальность"],
    price: SITE_CONFIG.prices.session,
  },
  {
    title: "Пакет сессий",
    desc: "Серия встреч для глубокой последовательной работы с вашим запросом. Онлайн или очно.",
    forWhom: "Для тех, кто готов к системному процессу и хочет устойчивых изменений.",
    benefits: ["Выгоднее разовых сессий", "Последовательность работы", "Поддержка между встречами"],
    price: SITE_CONFIG.prices.package,
  },
  {
    title: "Групповая терапия",
    desc: "Терапевтическая группа, где участники получают поддержку и опыт взаимодействия в безопасной среде.",
    forWhom: "Для тех, кто хочет работать в группе и получать поддержку от других участников.",
    benefits: ["Опыт сообщества", "Новые перспективы", "Доступный формат"],
    price: SITE_CONFIG.prices.group,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-14 md:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 blob-yellow rounded-full opacity-50" />
      <RevealSection className="container relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 md:mb-4">
            Услуги
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            Выберите подходящий формат работы
          </p>
        </div>
      </RevealSection>
      <div className="container relative z-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {SERVICES.map((s, i) => (
            <RevealItem key={i} variant="fade-up" delay={i * 120}>
              <div className="bg-card rounded-2xl border border-border p-5 sm:p-6 md:p-8 flex flex-col card-hover h-full">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{s.title}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed mb-3 sm:mb-4">{s.desc}</p>
                <p className="text-sm font-medium text-secondary mb-3 sm:mb-4">{s.forWhom}</p>
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {s.benefits.map((b, j) => (
                    <li key={j} className="text-sm text-foreground/70 leading-relaxed flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <p className="text-sm sm:text-base font-semibold text-foreground mb-3 sm:mb-4">
                    {s.price ? s.price : "Стоимость уточняется при записи"}
                  </p>
                  <a
                    href={SITE_CONFIG.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-2.5 sm:py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-105 transition-all"
                  >
                    Записаться
                  </a>
                </div>
              </div>
            </RevealItem>
          ))}
        </div>

        <RevealItem variant="fade-up" delay={400}>
          <div className="mt-8 md:mt-10 bg-card rounded-2xl border border-border p-5 sm:p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="flex-1">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-2">
                  Очные консультации в Москве
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Помимо онлайн-формата, я провожу очные встречи в кабинетах в центре Москвы — рядом с метро Белорусская, Краснопресненская и в пределах Кольцевой линии. Выберите удобный для вас формат при записи.
                </p>
              </div>
              <a
                href={SITE_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:brightness-105 transition-all"
              >
                Записаться очно
              </a>
            </div>
          </div>
        </RevealItem>
      </div>
    </section>
  );
};

export default Services;
