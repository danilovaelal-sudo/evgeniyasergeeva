import { useState } from "react";
import { SITE_CONFIG } from "@/lib/config";
import { RevealSection } from "@/hooks/useScrollReveal";

const Contact = () => {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim()) { setError("Пожалуйста, укажите имя"); return; }
    if (!form.contact.trim()) { setError("Пожалуйста, укажите контакт для связи"); return; }
    if (!agreed) { setError("Необходимо согласие на обработку данных"); return; }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <RevealSection className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Запишитесь на консультацию
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Первый шаг — самый важный. Напишите мне, и мы найдём удобное время для встречи.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="flex flex-col gap-5">
            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:brightness-105 hover:shadow-lg transition-all"
            >
              Записаться на консультацию
            </a>
            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-semibold text-base hover:brightness-110 hover:shadow-lg transition-all"
            >
              Написать в Telegram
            </a>

            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <a href={`tel:${SITE_CONFIG.phoneClean}`} className="block hover:text-foreground transition-colors">
                {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="block hover:text-foreground transition-colors">
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Заявка отправлена</h3>
                <p className="text-muted-foreground text-sm">
                  Спасибо! Для быстрого ответа напишите мне в Telegram.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Имя</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Контакт для связи</label>
                  <input
                    type="text"
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Telegram, телефон или email"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Ваш запрос</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Кратко опишите, с чем вы хотели бы работать (необязательно)"
                  />
                </div>
                <label className="flex items-start gap-2 text-xs text-muted-foreground cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 rounded"
                  />
                  <span>
                    Я согласен(на) на обработку персональных данных в соответствии с{" "}
                    <a href="#privacy" className="underline hover:text-foreground">политикой конфиденциальности</a>
                  </span>
                </label>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-105 transition-all"
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </RevealSection>
    </section>
  );
};

export default Contact;
