import Link from "next/link";

function StatBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-24 text-sm font-medium text-ink/70">{label}</span>
      <div className="flex-1 h-3 rounded-full bg-ink/10 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-mint/20 blur-3xl" />
        <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-coral/15 blur-3xl" />

        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sun/30 text-ink text-sm font-semibold font-display mb-6">
            🐾 Nouveau
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-ink leading-tight">
            Ton animal a des <span className="text-coral">super-pouvoirs</span>.
            <br />
            Découvre-les.
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-xl mx-auto">
            Crée en 2 minutes la carte de collection unique de ton chat, ton
            chien ou n&apos;importe quel compagnon — vitesse, odorat,
            intelligence, camouflage, et son rang de rareté.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/creer"
              className="px-8 py-4 rounded-2xl bg-coral text-white font-display font-semibold text-lg shadow-lg shadow-coral/30 hover:scale-105 transition-transform"
            >
              Créer la carte de mon animal
            </Link>
            <span className="text-sm text-ink/50">
              Sans montrer sa photo · dès 8€
            </span>
          </div>
        </div>
      </section>

      {/* Example card preview */}
      <section className="px-6 pb-20">
        <div className="max-w-md mx-auto rounded-3xl bg-white border-4 border-ink/10 shadow-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-display font-bold text-ink">Réglisse</span>
            <span className="px-3 py-1 rounded-full bg-sun text-ink text-xs font-bold font-display">
              RANG A
            </span>
          </div>
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-mint/30 to-coral/20 flex items-center justify-center text-6xl mb-5">
            🐱
          </div>
          <div className="space-y-3">
            <StatBar label="Vitesse" value={78} color="#FF6B57" />
            <StatBar label="Odorat" value={92} color="#3FBF9F" />
            <StatBar label="Intelligence" value={65} color="#FFC857" />
            <StatBar label="Camouflage" value={88} color="#1B2A2F" />
          </div>
        </div>
        <p className="text-center text-ink/50 text-sm mt-4">
          Exemple de carte générée par PawDex
        </p>
      </section>

      {/* How it works */}
      <section className="px-6 pb-24 bg-ink/[0.02]">
        <div className="max-w-4xl mx-auto pt-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center text-ink mb-12">
            Comment ça marche
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                emoji: "🎨",
                title: "1. Compose ton animal",
                desc: "Choisis son espèce, sa couleur, ses petits détails — sans photo, juste pour le fun.",
              },
              {
                emoji: "🧠",
                title: "2. Réponds à 5 questions",
                desc: "Sur son caractère et ses habitudes. On en déduit ses vraies stats biologiques.",
              },
              {
                emoji: "🃏",
                title: "3. Reçois sa carte",
                desc: "Illustrée, avec rareté et stats. Partage-la et défie tes amis.",
              },
            ].map((s) => (
              <div key={s.title} className="text-center">
                <div className="text-4xl mb-3">{s.emoji}</div>
                <h3 className="font-display font-semibold text-ink mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-ink/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA footer */}
      <section className="px-6 py-20 text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4">
          Prêt à découvrir le rang de ton compagnon ?
        </h2>
        <Link
          href="/creer"
          className="inline-block mt-4 px-8 py-4 rounded-2xl bg-ink text-white font-display font-semibold text-lg hover:scale-105 transition-transform"
        >
          Je crée ma carte
        </Link>
      </section>

      <footer className="px-6 py-8 text-center text-xs text-ink/40">
        © {new Date().getFullYear()} PawDex — Fait avec 🐾
      </footer>
    </main>
  );
}
