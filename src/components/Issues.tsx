import { RevealSection } from "@/hooks/useScrollReveal";
import {
  ShieldAlert, Brain, Flame, HeartCrack, Waypoints,
  Users, ShieldCheck, Frown, Clock, HelpCircle,
} from "lucide-react";

const ISSUES = [
  { icon: ShieldAlert, title: "Последствия психологической травмы" },
  { icon: Brain, title: "Тревога и внутреннее напряжение" },
  { icon: Flame, title: "Панические реакции" },
  { icon: HeartCrack, title: "Эмоциональное выгорание" },
  { icon: Waypoints, title: "Сложные жизненные кризисы" },
  { icon: Users, title: "Трудности в отношениях" },
  { icon: ShieldCheck, title: "Проблемы с границами" },
  { icon: Frown, title: "Чувство вины, стыда, беспомощности" },
  { icon: Clock, title: "Травматичный опыт прошлого" },
  { icon: HelpCircle, title: "Потеря опоры, ощущение «я не справляюсь»" },
];

const Issues = () => {
  return (
    <section id="issues" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 blob-blue rounded-full opacity-40" />
      <RevealSection className="container relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            С чем я работаю
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Если вы узнаёте себя хотя бы в одном из этих пунктов — я могу помочь
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {ISSUES.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-5 border border-border card-hover flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-yellow-soft flex items-center justify-center">
                <item.icon size={22} className="text-secondary" />
              </div>
              <span className="text-sm font-medium text-foreground leading-snug">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
};

export default Issues;
