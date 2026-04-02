import { SITE_CONFIG } from "@/lib/config";
import { Link } from "react-router-dom";

const Privacy = () => {
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
            Политика конфиденциальности
          </h1>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8 mb-3">1. Общие положения</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта {SITE_CONFIG.name} (далее — Оператор). Политика действует в отношении всех данных, которые Оператор может получить от пользователей сайта.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8 mb-3">2. Собираемые данные</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Оператор может собирать следующие данные: имя, контактный телефон, адрес электронной почты, Telegram-контакт, содержание обращения, а также иные данные, добровольно предоставленные пользователем через формы сайта или мессенджеры.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8 mb-3">3. Цели обработки</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Персональные данные обрабатываются исключительно в целях: обработки обращений пользователей, записи на консультацию, коммуникации с пользователем, улучшения качества сервиса.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8 mb-3">4. Правовые основания</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Обработка персональных данных осуществляется на основании Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и согласия субъекта персональных данных.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8 mb-3">5. Хранение и защита</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Оператор принимает необходимые организационные и технические меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Данные хранятся на защищённых серверах и обрабатываются с соблюдением требований законодательства РФ.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8 mb-3">6. Передача третьим лицам</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Персональные данные не передаются третьим лицам, за исключением случаев, предусмотренных законодательством Российской Федерации.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8 mb-3">7. Права пользователя</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Пользователь вправе: запросить информацию об обработке своих персональных данных; потребовать их изменения или удаления; отозвать согласие на обработку. Для этого направьте запрос на адрес: {SITE_CONFIG.email}.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8 mb-3">8. Файлы cookie</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Сайт может использовать технические файлы cookie для корректной работы. Cookie не содержат персональных данных и не используются для отслеживания пользователей.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8 mb-3">9. Изменение политики</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Оператор оставляет за собой право вносить изменения в настоящую Политику. Актуальная версия всегда размещена на данной странице.
          </p>

          <p className="text-muted-foreground leading-relaxed mt-8 text-sm">
            По вопросам обработки персональных данных обращайтесь: {SITE_CONFIG.email}
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

export default Privacy;
