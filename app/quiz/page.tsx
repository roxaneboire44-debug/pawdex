"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Stat = "vitesse" | "odorat" | "intelligence" | "camouflage" | "charisme";

type Option = { label: string; points: Partial<Record<Stat, number>> };
type Question = { id: string; prompt: string; options: Option[] };

const QUESTIONS: Question[] = [
  {
    id: "q1",
    prompt: "Quand il/elle voit quelque chose de nouveau...",
    options: [
      { label: "Il/elle fonce dessus sans hésiter", points: { vitesse: 20, intelligence: 5 } },
      { label: "Il/elle observe longuement avant d'agir", points: { intelligence: 20 } },
      { label: "Il/elle l'ignore complètement", points: { camouflage: 10, charisme: -5 } },
    ],
  },
  {
    id: "q2",
    prompt: "Face à un bruit soudain...",
    options: [
      { label: "Il/elle disparaît en un éclair", points: { vitesse: 20, camouflage: 10 } },
      { label: "Il/elle reste calme, à peine surpris(e)", points: { intelligence: 10, charisme: 10 } },
      { label: "Il/elle aboie / réagit bruyamment", points: { charisme: 15 } },
    ],
  },
  {
    id: "q3",
    prompt: "Sa plus grande passion, c'est...",
    options: [
      { label: "Renifler absolument tout", points: { odorat: 25 } },
      { label: "Jouer avec tout ce qui bouge", points: { vitesse: 15, charisme: 10 } },
      { label: "Observer les gens depuis sa cachette", points: { camouflage: 15, intelligence: 10 } },
    ],
  },
  {
    id: "q4",
    prompt: "Pour se faire discret(ète)...",
    options: [
      { label: "Il/elle se fond littéralement dans le décor", points: { camouflage: 25 } },
      { label: "Il/elle trouve toujours la meilleure cachette", points: { camouflage: 15, intelligence: 10 } },
      { label: "Impossible, il/elle se fait toujours remarquer", points: { charisme: 20 } },
    ],
  },
  {
    id: "q5",
    prompt: "Avec les autres (humains ou animaux)...",
    options: [
      { label: "Le/la plus populaire du quartier", points: { charisme: 25 } },
      { label: "Réservé(e) mais très attaché(e) aux siens", points: { intelligence: 10, odorat: 10 } },
      { label: "Chef(fe) de meute, tout le monde le/la suit", points: { charisme: 15, vitesse: 10 } },
    ],
  },
];

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<Stat, number>>({
    vitesse: 30,
    odorat: 30,
    intelligence: 30,
    camouflage: 30,
    charisme: 30,
  });

  const question = QUESTIONS[step];
  const progress = Math.round((step / QUESTIONS.length) * 100);

  function answer(opt: Option) {
    const next = { ...scores };
    (Object.keys(opt.points) as Stat[]).forEach((k) => {
      next[k] = Math.max(5, Math.min(99, next[k] + (opt.points[k] ?? 0)));
    });

    if (step + 1 < QUESTIONS.length) {
      setScores(next);
      setStep(step + 1);
    } else {
      try {
        localStorage.setItem("pawdex_quiz", JSON.stringify(next));
      } catch {
        // localStorage indisponible : on continue quand même
      }
      router.push("/carte");
    }
  }

  return (
    <main className="min-h-screen px-6 py-12 flex items-center justify-center">
      <div className="max-w-xl w-full">
        <div className="mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint/20 text-ink text-sm font-semibold font-display mb-4">
            Étape 2 sur 3
          </span>
          <div className="h-2 rounded-full bg-ink/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-coral transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-ink/40 mt-2">
            Question {step + 1} sur {QUESTIONS.length}
          </p>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-8 text-center">
          {question.prompt}
        </h1>

        <div className="space-y-4">
          {question.options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => answer(opt)}
              className="w-full text-left px-6 py-4 rounded-2xl border-2 border-ink/10 bg-white hover:border-coral hover:bg-coral/5 transition-colors font-body text-ink"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
