import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/lib/config";

const QUESTIONS = [
  {
    q: "Как часто вы чувствуете внутреннее напряжение, которое трудно объяснить?",
    options: ["Почти никогда", "Иногда", "Часто", "Почти постоянно"],
  },
  {
    q: "Бывает ли вам сложно расслабиться, даже когда для этого есть время?",
    options: ["Нет, я легко расслабляюсь", "Иногда бывает", "Довольно часто", "Да, почти всегда"],
  },
  {
    q: "Как часто вы чувствуете усталость, даже после отдыха?",
    options: ["Редко", "Время от времени", "Регулярно", "Почти каждый день"],
  },
  {
    q: "Замечаете ли вы, что стали раздражительнее, чем раньше?",
    options: ["Нет", "Немного", "Заметно", "Значительно"],
  },
  {
    q: "Бывает ли вам трудно сосредоточиться на задачах?",
    options: ["Нет", "Иногда", "Часто", "Почти всегда"],
  },
  {
    q: "Как часто вы откладываете важные дела из-за нехватки сил или мотивации?",
    options: ["Редко", "Иногда", "Регулярно", "Постоянно"],
  },
  {
    q: "Чувствуете ли вы одиночество, даже когда рядом есть люди?",
    options: ["Нет", "Иногда", "Часто", "Да, это знакомое ощущение"],
  },
  {
    q: "Бывают ли у вас проблемы со сном (трудно заснуть, частые пробуждения)?",
    options: ["Нет", "Изредка", "Несколько раз в неделю", "Почти каждую ночь"],
  },
  {
    q: "Как часто вы чувствуете, что не справляетесь с жизнью?",
    options: ["Почти никогда", "В отдельные моменты", "Довольно часто", "Это постоянное ощущение"],
  },
  {
    q: "Замечаете ли вы у себя тревожные мысли, которые трудно остановить?",
    options: ["Нет", "Иногда", "Регулярно", "Они преследуют меня"],
  },
];

type Result = {
  level: string;
  color: string;
  description: string;
  recommendation: string;
};

function getResult(score: number): Result {
  if (score <= 10) {
    return {
      level: "Низкий уровень стресса",
      color: "text-green-600",
      description: "Ваше эмоциональное состояние в целом стабильно. Вы справляетесь с повседневными задачами и умеете восстанавливаться.",
      recommendation: "Продолжайте заботиться о себе. Профилактическая консультация поможет укрепить ваши ресурсы.",
    };
  }
  if (score <= 20) {
    return {
      level: "Умеренный уровень стресса",
      color: "text-yellow-600",
      description: "Вы испытываете заметное напряжение. Некоторые сферы жизни могут вызывать затруднения, но в целом вы справляетесь.",
      recommendation: "Стоит обратить внимание на своё состояние. Несколько сессий с психологом помогут разобраться в причинах напряжения и найти способы восстановления.",
    };
  }
  return {
    level: "Высокий уровень стресса",
    color: "text-red-600",
    description: "Вы переживаете значительное эмоциональное напряжение. Это может влиять на здоровье, отношения и качество жизни.",
    recommendation: "Рекомендую обратиться за профессиональной поддержкой. Работа с психологом поможет снизить напряжение, разобраться в его причинах и восстановить внутреннюю опору.",
  };
}

const TestPopup = () => {
  const [visible, setVisible] = useState(false);
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("test-popup-shown");
    if (alreadyShown) {
      setDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem("test-popup-shown", "1");
    }, 25000);

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.35) {
        setVisible(true);
        sessionStorage.setItem("test-popup-shown", "1");
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(timer);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setFinished(true);
    }
  };

  const handleClose = () => {
    setVisible(false);
    setDismissed(true);
  };

  const score = answers.reduce((sum, a) => sum + a, 0);
  const result = getResult(score);

  const buildTelegramMessage = () => {
    const lines = [
      `Результаты теста на уровень стресса`,
      ``,
      `Результат: ${result.level}`,
      `Баллы: ${score} из ${(QUESTIONS.length) * 3}`,
      ``,
      `${result.description}`,
      ``,
      `Ответы:`,
      ...answers.map((a, i) => `${i + 1}. ${QUESTIONS[i].q} — ${QUESTIONS[i].options[a]}`),
      ``,
      `Хочу записаться на консультацию.`,
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  if (dismissed && !visible) return null;
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4 bg-foreground/30 backdrop-blur-sm animate-note-overlay">
      <div className="relative w-full max-w-md bg-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-note-appear max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-cta px-5 sm:px-6 py-4 sm:py-5 shrink-0">
          <button
            onClick={handleClose}
            className="absolute top-3 right-4 text-primary-foreground/70 hover:text-primary-foreground text-xl leading-none transition-colors"
            aria-label="Закрыть"
          >
            ×
          </button>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-primary-foreground pr-6">
            {finished ? "Ваш результат" : started ? `Вопрос ${currentQ + 1} из ${QUESTIONS.length}` : "Узнайте свой уровень стресса"}
          </h3>
          {started && !finished && (
            <div className="mt-3 h-1.5 bg-primary-foreground/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-foreground/60 rounded-full transition-all duration-500"
                style={{ width: `${((currentQ) / QUESTIONS.length) * 100}%` }}
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="px-5 sm:px-6 py-5 sm:py-6 overflow-y-auto flex-1">
          {!started && !finished && (
            <div className="text-center">
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Пройдите короткий тест из 10 вопросов, чтобы оценить своё эмоциональное состояние. Это займёт 2-3 минуты.
              </p>
              <p className="text-xs text-muted-foreground/70 mb-6">
                Тест основан на методиках оценки уровня стресса и эмоционального выгорания. Результат не является диагнозом.
              </p>
              <button
                onClick={() => setStarted(true)}
                className="w-full py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-105 transition-all"
              >
                Начать тест
              </button>
              <button
                onClick={handleClose}
                className="mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Не сейчас
              </button>
            </div>
          )}

          {started && !finished && (
            <div>
              <p className="font-medium text-foreground text-sm sm:text-base leading-relaxed mb-4">
                {QUESTIONS[currentQ].q}
              </p>
              <div className="space-y-2">
                {QUESTIONS[currentQ].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className="w-full text-left px-4 py-3 rounded-xl border border-border text-sm text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 active:scale-[0.98]"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {finished && (
            <div>
              <div className="text-center mb-5">
                <p className={`text-lg font-bold font-serif ${result.color} mb-1`}>
                  {result.level}
                </p>
                <p className="text-xs text-muted-foreground">
                  {score} из {QUESTIONS.length * 3} баллов
                </p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {result.description}
              </p>
              <p className="text-sm text-foreground font-medium leading-relaxed mb-6">
                {result.recommendation}
              </p>

              <a
                href={`${SITE_CONFIG.telegramUrl}?text=${buildTelegramMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-105 transition-all mb-3"
              >
                Отправить результаты и записаться
              </a>
              <button
                onClick={handleClose}
                className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Закрыть
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestPopup;
