"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Stat = "vitesse" | "odorat" | "intelligence" | "camouflage" | "charisme";

const SPECIES_EMOJI: Record<string, string> = {
  chat: "🐱",
  chien: "🐶",
  lapin: "🐰",
  oiseau: "🦜",
  hamster: "🐹",
  autre: "🐾",
};

const COLOR_HEX: Record<string, string> = {
  roux: "#E38B4A",
  noir: "#2B2B2B",
  blanc: "#F4F1EA",
  gris: "#9AA0A6",
  "tacheté": "#C98A5E",
  tricolore: "#7A5230",
};

const DETAIL_EMOJI: Record<string, string> = {
  lunettes: "🕶️",
  noeud: "🎀",
  chapeau: "🎩",
  collier: "🔔",
  aucun: "",
};

const STAT_LABELS: Record<Stat, string> = {
  vitesse: "Vitesse",
  odorat: "Odorat",
  intelligence: "Intelligence",
  camouflage: "Camouflage",
  charisme: "Charisme",
};

const STAT_COLORS: Record<Stat, string> = {
  vitesse: "#FF6B57",
  odorat: "#3FBF9F",
  intelligence: "#FFC857",
  camouflage: "#1B2A2F",
  charisme: "#C86BFF",
};

function rankFromScore(avg: number) {
  if (avg >= 80) return { rank: "S", label: "Légendaire", color: "#FFC857" };
  if (avg >= 65) return { rank: "A", label: "Rare", color: "#FF6B57" };
  if (avg >= 50) return { rank: "B", label: "Peu commun", color: "#3FBF9F" };
  if (avg >= 35) return { rank: "C", label: "Commun", color: "#9AA0A6" };
  return { rank: "D", label: "Débutant", color: "#B8AFA3" };
}

type Avatar = { name: string; species: string; color: string; detail: string };
type Scores = Record<Stat, number>;

export default function SuccesPage() {
  const [avatar, setAvatar] = useState<Avatar | null>(null);
  const [scores, setScores] = useState<Scores | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const a = localStorage.getItem("pawdex_avatar");
      const s = localStorage.getItem("pawdex_quiz");
      if (a) setAvatar(JSON.parse(a));
      if (s) setScores(JSON.parse(s));
    } catch {
      // rien de grave si indisponible
    }
  }, []);

  function copyShareText() {
    if (!avatar || !scores) return;
    const text = `Bats la carte de ${avatar.name} si tu peux ! 🐾 Crée la carte de ton animal sur PawDex : https://pawdex-beta.vercel.app`;
    try {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // presse-papier indisponible
    }
  }

  const statKeys = scores ? (Object.keys(scores) as Stat[]) : [];
  const avg = scores
    ? statKeys.reduce((sum, k) => sum + scores[k], 0) / statKeys.length
    : 0;
  const { rank, label, color: rankColor } = rankFromScore(avg);
  const colorHex = avatar ? COLOR_HEX[avatar.color] ?? "#9AA0A6" : "#9AA0A6";

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-md mx-auto text-center">
        <div className="text-5xl mb-3">🎉</div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-2">
          Paiement réussi !
        </h1>
        <p className="text-ink/60 mb-8">
          La carte HD de {avatar?.name ?? "ton compagnon"} est débloquée.
        </p>

        {avatar && scores && (
          <>
            <div className="rounded-3xl bg-white border-4 border-sun shadow-xl p-6 text-left">
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-bold text-ink text-lg truncate">
                  {avatar.name}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold font-display text-white shrink-0"
                  style={{ backgroundColor: rankColor }}
                >
                  RANG {rank}
                </span>
              </div>
              <div
                className="aspect-square rounded-2xl flex items-center justify-center text-7xl mb-5 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colorHex}33, ${colorHex}11)`,
                }}
              >
                <span>{SPECIES_EMOJI[avatar.species] ?? "🐾"}</span>
                {avatar.detail !== "aucun" && (
                  <span className="absolute bottom-4 right-4 text-3xl">
                    {DETAIL_EMOJI[avatar.detail]}
                  </span>
                )}
                <span className="absolute top-4 left-4 px-2 py-1 rounded-full bg-ink text-white text-[10px] font-bold font-display">
                  HD
                </span>
              </div>
              <p className="text-center text-sm text-ink/50 mb-4">{label}</p>
              <div className="space-y-3">
                {statKeys.map((k) => (
                  <div key={k} className="flex items-center gap-3">
                    <span className="w-24 text-sm font-medium text-ink/70">
                      {STAT_LABELS[k]}
                    </span>
                    <div className="flex-1 h-3 rounded-full bg-ink/10 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${Math.round(scores[k])}%`,
                          backgroundColor: STAT_COLORS[k],
                        }}
                      />
                    </div>
                    <span className="w-8 text-right text-xs text-ink/40">
                      {Math.round(scores[k])}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={copyShareText}
              className="mt-6 w-full px-8 py-4 rounded-2xl bg-ink text-white font-display font-semibold text-lg hover:scale-[1.02] transition-transform"
            >
              {copied ? "Copié !" : "📋 Copier le lien à partager"}
            </button>
          </>
        )}

        <Link
          href="/creer"
          className="block mt-4 text-center text-sm text-ink/40 hover:text-ink/60"
        >
          Créer une autre carte
        </Link>
      </div>
    </main>
  );
}
