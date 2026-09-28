"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SPECIES = [
  { id: "chat", label: "Chat", emoji: "🐱" },
  { id: "chien", label: "Chien", emoji: "🐶" },
  { id: "lapin", label: "Lapin", emoji: "🐰" },
  { id: "oiseau", label: "Oiseau", emoji: "🦜" },
  { id: "hamster", label: "Hamster", emoji: "🐹" },
  { id: "autre", label: "Autre", emoji: "🐾" },
];

const COLORS = [
  { id: "roux", label: "Roux", hex: "#E38B4A" },
  { id: "noir", label: "Noir", hex: "#2B2B2B" },
  { id: "blanc", label: "Blanc", hex: "#F4F1EA" },
  { id: "gris", label: "Gris", hex: "#9AA0A6" },
  { id: "tacheté", label: "Tacheté", hex: "#C98A5E" },
  { id: "tricolore", label: "Tricolore", hex: "#7A5230" },
];

const DETAILS = [
  { id: "lunettes", label: "Lunettes", emoji: "🕶️" },
  { id: "noeud", label: "Nœud papillon", emoji: "🎀" },
  { id: "chapeau", label: "Chapeau", emoji: "🎩" },
  { id: "collier", label: "Collier à clochette", emoji: "🔔" },
  { id: "aucun", label: "Aucun", emoji: "✨" },
];

export default function Creer() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [species, setSpecies] = useState(SPECIES[0].id);
  const [color, setColor] = useState(COLORS[0].id);
  const [detail, setDetail] = useState(DETAILS[4].id);

  const speciesObj = SPECIES.find((s) => s.id === species)!;
  const colorObj = COLORS.find((c) => c.id === color)!;
  const detailObj = DETAILS.find((d) => d.id === detail)!;

  function handleNext() {
    const payload = { name: name.trim() || "Mon compagnon", species, color, detail };
    try {
      localStorage.setItem("pawdex_avatar", JSON.stringify(payload));
    } catch {
      // localStorage indisponible : on continue quand même
    }
    router.push("/quiz");
  }

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint/20 text-ink text-sm font-semibold font-display mb-4">
            Étape 1 sur 3
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink">
            Compose ton compagnon
          </h1>
          <p className="mt-3 text-ink/60">
            Pas besoin de photo — choisis simplement à quoi il ressemble.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-10 items-start">
          {/* Preview card */}
          <div className="sm:sticky sm:top-12">
            <div className="max-w-sm mx-auto rounded-3xl bg-white border-4 border-ink/10 shadow-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-bold text-ink truncate">
                  {name.trim() || "Ton compagnon"}
                </span>
                <span className="px-3 py-1 rounded-full bg-sun text-ink text-xs font-bold font-display shrink-0">
                  ???
                </span>
              </div>
              <div
                className="aspect-square rounded-2xl flex items-center justify-center text-7xl mb-4 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colorObj.hex}33, ${colorObj.hex}11)`,
                }}
              >
                <span>{speciesObj.emoji}</span>
                {detail !== "aucun" && (
                  <span className="absolute bottom-4 right-4 text-3xl">
                    {detailObj.emoji}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-ink/60">
                <span
                  className="w-3 h-3 rounded-full border border-ink/10"
                  style={{ backgroundColor: colorObj.hex }}
                />
                {speciesObj.label} · {colorObj.label}
              </div>
            </div>
            <p className="text-center text-ink/40 text-xs mt-3">
              Ses vraies stats seront révélées après le quiz
            </p>
          </div>

          {/* Form */}
          <div className="space-y-8">
            <div>
              <label className="block font-display font-semibold text-ink mb-2">
                Son prénom
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex : Réglisse"
                maxLength={24}
                className="w-full px-4 py-3 rounded-xl border-2 border-ink/10 bg-white focus:border-mint outline-none font-body"
              />
            </div>

            <div>
              <label className="block font-display font-semibold text-ink mb-3">
                Son espèce
              </label>
              <div className="grid grid-cols-3 gap-3">
                {SPECIES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSpecies(s.id)}
                    className={`flex flex-col items-center gap-1 py-3 rounded-xl border-2 transition-colors ${
                      species === s.id
                        ? "border-coral bg-coral/10"
                        : "border-ink/10 bg-white hover:border-ink/20"
                    }`}
                  >
                    <span className="text-2xl">{s.emoji}</span>
                    <span className="text-xs font-medium text-ink/80">
                      {s.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-display font-semibold text-ink mb-3">
                Sa couleur dominante
              </label>
              <div className="flex flex-wrap gap-3">
                {COLORS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setColor(c.id)}
                    title={c.label}
                    className={`w-11 h-11 rounded-full border-2 transition-transform ${
                      color === c.id
                        ? "border-coral scale-110"
                        : "border-ink/10 hover:scale-105"
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block font-display font-semibold text-ink mb-3">
                Un petit détail (facultatif)
              </label>
              <div className="flex flex-wrap gap-3">
                {DETAILS.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setDetail(d.id)}
                    className={`px-4 py-2 rounded-xl border-2 flex items-center gap-2 transition-colors ${
                      detail === d.id
                        ? "border-coral bg-coral/10"
                        : "border-ink/10 bg-white hover:border-ink/20"
                    }`}
                  >
                    <span>{d.emoji}</span>
                    <span className="text-sm font-medium text-ink/80">
                      {d.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full px-8 py-4 rounded-2xl bg-coral text-white font-display font-semibold text-lg shadow-lg shadow-coral/30 hover:scale-[1.02] transition-transform"
            >
              Continuer vers le quiz →
            </button>
            <Link
              href="/"
              className="block text-center text-sm text-ink/40 hover:text-ink/60"
            >
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
