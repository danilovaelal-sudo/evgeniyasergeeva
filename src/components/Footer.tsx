import { useState } from "react";
import { SITE_CONFIG } from "@/lib/config";
import { Send, Phone, Mail } from "lucide-react";

const LegalModal = ({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-card rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 md:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-xl font-bold text-foreground">{title}</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground text-2xl leading-none">&times;</button>
        </div>
        <div className="prose prose-sm max-w-none text-muted-foreground">{children}</div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [modal, setModal] = useState<string | null>(null);

  return (
    <>
      <footer className="bg-foreground text-background/80 py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-serif text-lg font-bold text-background mb-2">{SITE_CONFIG.name}</h4>
              <p className="text-sm text-background/60">{SITE_CONFIG.title}</p>
            </div>
            <div className="space-y-2 text-sm">
              <a href={`tel:${SITE_CONFIG.phoneClean}`} className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone size={14} /> {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 hover:text-background transition-colors">
                <Mail size={14} /> {SITE_CONFIG.email}
              </a>
              <a
                href={SITE_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-background transition-colors"
              >
                <Send size={14} /> Telegram
              </a>
            </div>
            <div>
              <a
                href={SITE_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-105 transition-all"
              >
                Записаться на консультацию
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/40">
            <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. Все права защищены.</p>
            <div className="flex gap-4">
              <button onClick={() => setModal("privacy")} className="hover:text-background/70 transition-colors">Политика конфиденциальности</button>
              <button onClick={() => setModal("consent")} className="hover:text-background/70 transition-colors">Согласие на обработку данных</button>
              <button onClick={() => setModal("terms")} className="hover:text-background/70 transition-colors">Пользовательское соглашение</button>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal open={modal === "privacy"} onClose={() => setModal(null)} title="Политика конфиденциальности">
        <h4>1. Общие положения</h4>
        <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта {SITE_CONFIG.name} (далее — Оператор).</p>
        <h4>2. Собираемые данные</h4>
        <p>Оператор может собирать следующие данные: имя, контактный телефон, адрес электронной почты, содержание обращения, а также иные данные, добровольно предоставленные пользователем через формы сайта или мессенджеры.</p>
        <h4>3. Цели обработки</h4>
        <p>Персональные данные обрабатываются исключительно в целях: обработки обращений пользователей, записи на консультацию, коммуникации с пользователем, улучшения качества сервиса.</p>
        <h4>4. Хранение и защита</h4>
        <p>Оператор принимает необходимые организационные и технические меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.</p>
        <h4>5. Передача третьим лицам</h4>
        <p>Персональные данные не передаются третьим лицам, за исключением случаев, предусмотренных законодательством Российской Федерации.</p>
        <h4>6. Права пользователя</h4>
        <p>Пользователь вправе запросить информацию об обработке своих персональных данных, потребовать их изменения или удаления, направив запрос на адрес: {SITE_CONFIG.email}.</p>
        <h4>7. Изменение политики</h4>
        <p>Оператор оставляет за собой право вносить изменения в настоящую Политику. Актуальная версия размещается на сайте.</p>
      </LegalModal>

      <LegalModal open={modal === "consent"} onClose={() => setModal(null)} title="Согласие на обработку персональных данных">
        <p>Отправляя свои данные через формы на сайте или в мессенджерах, вы даёте согласие {SITE_CONFIG.name} (далее — Оператор) на обработку ваших персональных данных в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».</p>
        <h4>Перечень данных</h4>
        <p>Имя, контактный телефон, адрес электронной почты, Telegram-контакт, содержание обращения.</p>
        <h4>Цели обработки</h4>
        <p>Обработка обращений, запись на консультацию, обратная связь.</p>
        <h4>Способы обработки</h4>
        <p>Сбор, запись, систематизация, хранение, уточнение, использование, удаление персональных данных.</p>
        <h4>Срок действия согласия</h4>
        <p>Согласие действует до момента отзыва. Отзыв может быть направлен на адрес: {SITE_CONFIG.email}.</p>
      </LegalModal>

      <LegalModal open={modal === "terms"} onClose={() => setModal(null)} title="Пользовательское соглашение">
        <h4>1. Общие положения</h4>
        <p>Настоящее соглашение регулирует использование сайта {SITE_CONFIG.name}. Использование сайта означает согласие с условиями данного соглашения.</p>
        <h4>2. Услуги</h4>
        <p>Сайт предоставляет информацию об услугах психолога и возможность записи на консультацию. Сайт не является медицинским учреждением и не предоставляет медицинских услуг.</p>
        <h4>3. Ответственность</h4>
        <p>Оператор не несёт ответственности за решения, принятые пользователем на основании информации, размещённой на сайте. Психологическая консультация не является заменой медицинской помощи.</p>
        <h4>4. Интеллектуальная собственность</h4>
        <p>Все материалы сайта (тексты, изображения, дизайн) являются интеллектуальной собственностью оператора и защищены законодательством РФ.</p>
        <h4>5. Изменение условий</h4>
        <p>Оператор вправе изменять условия соглашения. Актуальная версия размещается на сайте.</p>
        <h4>6. Контакты</h4>
        <p>По вопросам, связанным с соглашением, обращайтесь: {SITE_CONFIG.email}.</p>
      </LegalModal>
    </>
  );
};

export default Footer;
