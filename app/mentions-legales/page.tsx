export default function MentionsLegales() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-2xl mx-auto prose">
        <h1 className="font-display text-3xl font-bold text-ink mb-8">
          Mentions légales
        </h1>

        <h2 className="font-display font-semibold text-ink text-xl mt-8 mb-3">
          Éditeur du site
        </h2>
        <p className="text-ink/70 leading-relaxed">
          Le site PawDex est édité par Roxane Boire, entrepreneur individuel
          en cours d&apos;immatriculation (auto-entrepreneur).
          <br />
          Contact : roxane.boire44@gmail.com
        </p>

        <h2 className="font-display font-semibold text-ink text-xl mt-8 mb-3">
          Hébergement
        </h2>
        <p className="text-ink/70 leading-relaxed">
          Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
          Covina, CA 91723, États-Unis.
        </p>

        <h2 className="font-display font-semibold text-ink text-xl mt-8 mb-3">
          Propriété intellectuelle
        </h2>
        <p className="text-ink/70 leading-relaxed">
          L&apos;ensemble des contenus présents sur PawDex (textes, visuels,
          concept, code) sont la propriété de l&apos;éditeur, sauf mention
          contraire. Toute reproduction sans autorisation est interdite.
        </p>

        <h2 className="font-display font-semibold text-ink text-xl mt-8 mb-3">
          Responsabilité
        </h2>
        <p className="text-ink/70 leading-relaxed">
          Les cartes générées par PawDex sont un contenu ludique basé sur les
          réponses fournies par l&apos;utilisateur. Elles n&apos;ont aucune
          valeur scientifique ou vétérinaire.
        </p>

        <p className="text-ink/40 text-sm mt-12">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>
      </div>
    </main>
  );
}
