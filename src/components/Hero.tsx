import { SITE_CONFIG } from "@/lib/config";
import heroPhoto from "@/assets/photo-hero.jpeg";
import { Send, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 blob-yellow rounded-full" />
      <div className="absolute bottom-10 -right-24 w-80 h-80 blob-blue rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 blob-yellow rounded-full opacity-60" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="animate-fade-up">
            <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-4">
              {SITE_CONFIG.title}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-foreground mb-6">
              Вы заслуживаете жизни,{" "}
              <span className="text-gradient">в которой не нужно выживать</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Помогаю справиться с последствиями травмы, тревогой, внутренним напряжением
              и вернуть ощущение опоры — бережно и в вашем темпе.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SITE_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:brightness-105 hover:shadow-lg transition-all"
              >
                <Calendar size={18} />
                Записаться на консультацию
              </a>
              <a
                href={SITE_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-semibold text-base hover:brightness-110 hover:shadow-lg transition-all"
              >
                <Send size={18} />
                Связаться в Telegram
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="relative animate-fade-in flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] rotate-3" />
              <img
                src={heroPhoto}
                alt={SITE_CONFIG.name}
                className="relative rounded-[2rem] w-full max-w-md object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
