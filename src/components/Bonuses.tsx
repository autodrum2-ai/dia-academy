import { Container, PrimaryButton, Reveal, RevealGroup, RevealItem, SectionHeading } from "./ui";

const bonuses = [
  { n: "01", title: "Funnel Stack", value: "230 000 F", text: "21 templates de tunnels de vente à dupliquer pour vendre tes services et formations IA." },
  { n: "02", title: "Copy Stack", value: "150 000 F", text: "18 scripts testés au combat qui transforment tes pages en machines à conversion." },
  { n: "03", title: "Coffre-fort", value: "90 000 F", text: "Outils et templates secrets pour signer des clients en urgence." },
  { n: "04", title: "Emails Templates Pack", value: "70 000 F", text: "+150 emails pour chaque étape de tes séquences : bienvenue, nurturing, vente." },
  { n: "05", title: "La Banque des Titres", value: "50 000 F", text: "Plus de 500 titres qui arrêtent le scroll et forcent la lecture." },
  { n: "06", title: "La Boîte à Outils IA", value: "110 000 F", text: "Prompts avancés, agents configurés et modèles IA prêts à l'emploi." },
  { n: "07", title: "Le Plan des 20M", value: "190 000 F", text: "Les coulisses d'une collaboration client qui a généré plus de 20 000 000 FCFA en 7 mois." },
  { n: "08", title: "Lancement Décrypté", value: "190 000 F", text: "Comment générer plusieurs millions de FCFA sur un seul lancement de formation, décortiqué phase par phase." },
  { n: "09", title: "La Machine Organique", value: "150 000 F", text: "400 rendez-vous générés uniquement avec du contenu organique." },
  { n: "10", title: "Swipe Files IA", value: "40 000 F", text: "Une bibliothèque de prompts et d'automatisations qui ont déjà fait leurs preuves sur de vrais projets clients." },
  { n: "11", title: "Certifications", value: "110 000 F", text: "Une certification Développeur IA à réclamer pour chaque compétence transmise dans l'académie." },
  { n: "12", title: "Ateliers Pratiques", value: "210 000 F", text: "Des ateliers réguliers, parfois animés par des experts invités." },
  { n: "13", title: "Retours sur tes travaux", value: "160 000 F", text: "Des retours précis, directs et actionnables sur tes projets et automatisations." },
  { n: "14", title: "Accès à vie + Mises à jour", value: "140 000 F", text: "Tu paies une fois. Tu accèdes pour toujours." },
  { n: "15", title: "Replays des sessions", value: "160 000 F", text: "Accès illimité au replay de toutes les sessions passées et futures." },
];

export function Bonuses() {
  return (
    <section className="bg-navy py-24 text-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="L'arsenal complet"
            title={<span className="text-white">Mais ce n&apos;est pas tout...</span>}
            description={
              <span className="text-white/60">
                DIA a regroupé les meilleurs systèmes et ressources pour
                accélérer ta réussite de développeur IA freelance. Tout est
                inclus directement dans l&apos;académie.
              </span>
            }
          />
        </Reveal>

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {bonuses.map((b) => (
            <RevealItem key={b.n} variant="scale" className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo">
                  Bonus {b.n}
                </p>
                <span className="text-xs text-white/40">{b.value}</span>
              </div>
              <h3 className="mt-2 font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-white/60">{b.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-14 text-center">
          <p className="font-display text-2xl">Plus de 2 000 000 F de ressources offertes</p>
          <p className="mt-2 text-white/60">Accède à l&apos;arsenal complet aujourd&apos;hui.</p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton>Postuler pour rejoindre l&apos;académie</PrimaryButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
