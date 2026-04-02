import { SITE_CONFIG } from "@/lib/config";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-card/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container flex items-center h-14 md:h-20">
          <Link to="/" className="font-serif text-base md:text-lg font-semibold text-foreground">
            {SITE_CONFIG.name}
          </Link>
        </div>
      </nav>
      <main className="container py-12 md:py-20">
        <div className="max-w-3xl mx-auto prose prose-sm md:prose-base">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8">
            Публичная оферта
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Настоящий документ является публичной офертой {SITE_CONFIG.name} (далее — Исполнитель) и определяет условия оказания психологических консультационных услуг.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8 mb-3">1. Предмет оферты</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Исполнитель оказывает услуги психологического консультирования в формате индивидуальных онлайн-сессий, пакетов сессий и групповой терапии. Оплата услуги является акцептом настоящей оферты.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8 mb-3">2. Описание услуг</h2>
          <p className="text-muted-foreground leading-relaxed mb-2">Исполнитель предоставляет следующие услуги:</p>
          <ul className="text-muted-foreground leading-relaxed mb-4 list-disc pl-6 space-y-1">
            <li>Индивидуальная консультация — {SITE_CONFIG.prices.session}</li>
            <li>Пакет сессий — {SITE_CONFIG.prices.package}</li>
            <li>Групповая терапия — {SITE_CONFIG.prices.group}</li>
          </ul>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8 mb-3">3. Порядок оказания услуг</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Консультации проводятся онлайн в видеоформате в согласованное время. Запись осуществляется через Telegram ({SITE_CONFIG.telegramUrl}), формы на сайте или по электронной почте ({SITE_CONFIG.email}).
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8 mb-3">4. Оплата</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Оплата производится до начала сессии способом, согласованным с Исполнителем. Стоимость услуг указана на сайте и может быть изменена Исполнителем с предварительным уведомлением.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8 mb-3">5. Перенос и отмена</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Клиент может перенести сессию, уведомив Исполнителя не менее чем за 24 часа до назначенного времени. При отмене менее чем за 24 часа сессия считается проведённой. При неявке без предупреждения оплата не возвращается.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8 mb-3">6. Конфиденциальность</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Исполнитель гарантирует полную конфиденциальность содержания сессий. Информация, полученная в ходе консультаций, не передаётся третьим лицам, за исключением случаев, предусмотренных законодательством РФ.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8 mb-3">7. Ограничения</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Психологическая консультация не является медицинской услугой и не заменяет лечение у врача-психиатра или другого медицинского специалиста. Исполнитель не ставит диагнозы и не назначает медикаментозное лечение.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8 mb-3">8. Ответственность</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Исполнитель не несёт ответственности за решения, принятые Клиентом на основании консультаций. Клиент самостоятельно несёт ответственность за применение полученных рекомендаций.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8 mb-3">9. Срок действия</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Настоящая оферта действует бессрочно. Исполнитель вправе изменять условия оферты, публикуя актуальную версию на данной странице.
          </p>

          <p className="text-muted-foreground leading-relaxed mt-8 text-sm">
            Контактные данные: {SITE_CONFIG.email}, {SITE_CONFIG.phone}
          </p>

          <div className="mt-12">
            <Link to="/" className="text-secondary hover:text-secondary/80 font-medium transition-colors">
              ← Вернуться на главную
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Offer;
