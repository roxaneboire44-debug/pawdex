export default function CGV() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-2xl mx-auto prose">
        <h1 className="font-display text-3xl font-bold text-ink mb-8">
          Conditions générales de vente
        </h1>

        <h2 className="font-display font-semibold text-ink text-xl mt-8 mb-3">
          Objet
        </h2>
        <p className="text-ink/70 leading-relaxed">
          PawDex propose la création et la vente d&apos;une carte numérique
          illustrée personnalisée ("carte PawDex"), générée à partir des
          informations fournies par l&apos;utilisateur (configuration
          d&apos;avatar et réponses à un quiz).
        </p>

        <h2 className="font-display font-semibold text-ink text-xl mt-8 mb-3">
          Prix et paiement
        </h2>
        <p className="text-ink/70 leading-relaxed">
          La carte PawDex HD est proposée au prix de 9€ TTC, en paiement
          unique. Le paiement est traité de façon sécurisée par notre
          prestataire Stripe. PawDex ne stocke aucune donnée bancaire.
        </p>

        <h2 className="font-display font-semibold text-ink text-xl mt-8 mb-3">
          Livraison
        </h2>
        <p className="text-ink/70 leading-relaxed">
          La carte est délivrée immédiatement après le paiement, sous forme
          numérique, sur la page de confirmation de votre navigateur.
        </p>

        <h2 className="font-display font-semibold text-ink text-xl mt-8 mb-3">
          Droit de rétractation
        </h2>
        <p className="text-ink/70 leading-relaxed">
          Conformément à l&apos;article L221-28 du Code de la consommation,
          le droit de rétractation ne peut pas être exercé pour les contenus
          numériques fournis immédiatement après accord exprès du client à
          renoncer à ce droit, ce qui est le cas ici : la carte est générée et
          délivrée instantanément.
        </p>

        <h2 className="font-display font-semibold text-ink text-xl mt-8 mb-3">
          Réclamations
        </h2>
        <p className="text-ink/70 leading-relaxed">
          Pour toute question ou réclamation, contactez-nous à
          roxane.boire44@gmail.com.
        </p>

        <p className="text-ink/40 text-sm mt-12">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>
      </div>
    </main>
  );
}
