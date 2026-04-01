import { SITE_CONFIG } from "@/lib/config";
import { RevealSection } from "@/hooks/useScrollReveal";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <RevealSection className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Обо мне
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Меня зовут <strong className="text-foreground">Евгения Сергеева</strong>. Я — психолог
              и травма-терапевт. Моя специализация — работа с последствиями
              психологической травмы, тревогой и эмоциональными трудностями.
            </p>
            <p>
              Я верю, что каждый человек способен восстановиться, если рядом есть
              безопасное пространство и бережная поддержка. Именно это я создаю
              в своей практике.
            </p>
            <p>
              Для меня важно идти в вашем темпе, уважать ваши границы и помогать
              находить внутреннюю опору — без давления и поспешных решений.
              Конфиденциальность и экологичность процесса — основа моей работы.
            </p>
          </div>
        </div>
      </RevealSection>
    </section>
  );
};

export default About;
