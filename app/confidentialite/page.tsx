export default function Confidentialite() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-2xl mx-auto prose">
        <h1 className="font-display text-3xl font-bold text-ink mb-8">
          Politique de confidentialité
        </h1>

        <h2 className="font-display font-semibold text-ink text-xl mt-8 mb-3">
          Données collectées
        </h2>
        <p className="text-ink/70 leading-relaxed">
          PawDex ne demande ni compte, ni photo, ni donnée personnelle
          sensible pour générer une carte. Les choix effectués dans le
          configurateur et les réponses au quiz sont stockés uniquement dans
          votre navigateur (localStorage), et ne sont jamais envoyés à nos
          serveurs.
        </p>

        <h2 className="font-display font-semibold text-ink text-xl mt-8 mb-3">
          Paiement
        </h2>
        <p className="text-ink/70 leading-relaxed">
          Le paiement est traité directement par Stripe. Votre adresse email
          et vos informations de paiement sont gérées par Stripe selon sa
          propre politique de confidentialité, disponible sur stripe.com/fr/privacy.
        </p>

        <h2 className="font-display font-semibold text-ink text-xl mt-8 mb-3">
          Cookies
        </h2>
        <p className="text-ink/70 leading-relaxed">
          PawDex n&apos;utilise pas de cookies de tracking ou publicitaires.
        </p>

        <h2 className="font-display font-semibold text-ink text-xl mt-8 mb-3">
          Contact
        </h2>
        <p className="text-ink/70 leading-relaxed">
          Pour toute question relative à vos données, contactez
          roxane.boire44@gmail.com.
        </p>

        <p className="text-ink/40 text-sm mt-12">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>
      </div>
    </main>
  );
}
