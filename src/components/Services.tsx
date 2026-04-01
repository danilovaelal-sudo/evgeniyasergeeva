import { SITE_CONFIG } from "@/lib/config";
import { RevealSection } from "@/hooks/useScrollReveal";
import { User, Package, Users } from "lucide-react";

const SERVICES = [
  {
    icon: User,
    title: "Индивидуальная сессия",
    desc: "Личная встреча в видеоформате, где мы работаем с вашим запросом в безопасном темпе.",
    forWhom: "Для тех, кому нужна персональная поддержка и внимание к своей ситуации.",
    benefits: ["Индивидуальный подход", "Гибкое расписание", "Конфиденциальность"],
    price: SITE_CONFIG.prices.session,
  },
  {
    icon: Package,
    title: "Пакет сессий",
    desc: "Серия встреч для глубокой последовательной работы с вашим запросом.",
    forWhom: "Для тех, кто готов к системному процессу и хочет устойчивых изменений.",
    benefits: ["Выгоднее разовых сессий", "Последовательность работы", "Поддержка между встречами"],
    price: SITE_CONFIG.prices.package,
  },
  {
    icon: Users,
    title: "Групповая терапия",
    desc: "Терапевтическая группа, где участники получают поддержку и опыт взаимодействия в безопасной среде.",
    forWhom: "Для тех, кто хочет работать в группе и получать поддержку от других участников.",
    benefits: ["Опыт сообщества", "Новые перспективы", "Доступный формат"],
    price: SITE_CONFIG.prices.group,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 blob-yellow rounded-full opacity-50" />
      <RevealSection className="container relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Услуги
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Выберите подходящий формат работы
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl border border-border p-6 md:p-8 flex flex-col card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-soft flex items-center justify-center mb-5">
                <s.icon size={22} className="text-secondary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <p className="text-xs font-medium text-secondary mb-3">{s.forWhom}</p>
              <ul className="space-y-1 mb-6">
                {s.benefits.map((b, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <p className="text-sm text-muted-foreground mb-4">
                  {s.price ? s.price : "Стоимость уточняется при записи"}
                </p>
                <a
                  href={SITE_CONFIG.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-105 transition-all"
                >
                  Записаться
                </a>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
};

export default Services;
