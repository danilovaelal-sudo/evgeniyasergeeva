import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/lib/config";

const NAV_ITEMS = [
  { label: "Обо мне", href: "#about" },
  { label: "Направления", href: "#issues" },
  { label: "Методы", href: "#methods" },
  { label: "Услуги", href: "#services" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-14 md:h-20">
        <a href="#" className="font-serif text-base md:text-lg font-semibold text-foreground">
          {SITE_CONFIG.name}
        </a>

        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={SITE_CONFIG.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:brightness-105 transition-all"
          >
            Записаться
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Меню"
        >
          <span className="text-2xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 top-14 bg-card/98 backdrop-blur-md animate-fade-in z-40">
          <div className="container py-6 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-foreground py-3 border-b border-border/50"
              >
                {item.label}
              </a>
            ))}
            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold text-center"
            >
              Записаться
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
