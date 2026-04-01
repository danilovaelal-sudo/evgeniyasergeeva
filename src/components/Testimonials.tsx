import { RevealSection } from "@/hooks/useScrollReveal";

const REVIEWS = [
  {
    text: "Я долго не решалась обратиться к психологу. С Евгенией я впервые почувствовала, что меня слышат и не осуждают. Это стало началом важных изменений.",
    name: "Анна",
    note: "Работа с тревогой",
  },
  {
    text: "Мне было важно найти специалиста, который понимает, что такое травма. Евгения работает очень бережно — в моём темпе, без давления.",
    name: "Мария",
    note: "Работа с последствиями травмы",
  },
  {
    text: "Благодаря терапии я научилась замечать свои границы и говорить о своих потребностях. Впервые за долгое время чувствую опору внутри себя.",
    name: "Ольга",
    note: "Работа с отношениями",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-60 h-60 blob-yellow rounded-full opacity-40" />
      <RevealSection className="container relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Истории тех, кто уже прошёл этот путь
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl border border-border p-6 md:p-8 card-hover"
            >
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                «{r.text}»
              </p>
              <div>
                <p className="font-semibold text-foreground text-sm">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.note}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
};

export default Testimonials;
