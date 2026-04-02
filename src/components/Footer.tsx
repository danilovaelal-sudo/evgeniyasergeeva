import { SITE_CONFIG } from "@/lib/config";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-10 md:py-12">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-background mb-2">{SITE_CONFIG.name}</h4>
            <p className="text-sm text-background/60">{SITE_CONFIG.title}</p>
          </div>
          <div className="space-y-2 text-sm">
            <a href={`tel:${SITE_CONFIG.phoneClean}`} className="block hover:text-background transition-colors">
              {SITE_CONFIG.phone}
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="block hover:text-background transition-colors">
              {SITE_CONFIG.email}
            </a>
            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-background transition-colors"
            >
              Telegram
            </a>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
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
        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-background/10 flex flex-col items-center gap-3 text-xs text-background/40">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. Все права защищены.</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link to="/privacy" className="hover:text-background/70 transition-colors">Политика конфиденциальности</Link>
            <Link to="/offer" className="hover:text-background/70 transition-colors">Публичная оферта</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
