import { Avatar, Container, PrimaryButton, Reveal, RevealGroup, RevealItem, SectionHeading, Stars } from "./ui";

const testimonials = [
  {
    quote: "Meilleur accompagnement, j'ai juré ! Le suivi y est vraiment. C'est ma première fois de voir qu'on me met la pression pour avoir des résultats. C'est énorme ce que vous faites.",
    name: "Témoignage à venir",
    role: "Développeur IA Freelance",
    emoji: "🧑🏽",
  },
  {
    quote: "Premier client signé juste après la formation. J'ai déjà envoyé le document de l'offre, le contrat sera envoyé demain.",
    name: "Témoignage à venir",
    role: "Automaticien No-Code",
    emoji: "🧑🏻",
  },
  {
    quote: "Je viens de booker 2 rendez-vous cette semaine grâce à la méthode. J'attends signature du contrat d'ici vendredi.",
    name: "Témoignage à venir",
    role: "Freelance IA",
    emoji: "🧑🏾",
  },
  {
    quote: "Le contenu est juste impeccable. Ça m'a retourné le cerveau. J'ai pris du plaisir à consommer chaque leçon plusieurs fois.",
    name: "Témoignage à venir",
    role: "Consultant IA",
    emoji: "🧑🏿",
  },
];

export function Testimonials() {
  return (
    <section id="temoignages" className="bg-cream py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Retours d'expérience" title="Voici ce que disent nos étudiants :" />
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <RevealItem key={i} variant="scale" className="rounded-3xl bg-white p-8">
              <Stars />
              <p className="mt-4 text-navy/70">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar index={i} emoji={t.emoji} />
                <div>
                  <p className="font-semibold text-navy">{t.name}</p>
                  <p className="text-sm text-navy/40">{t.role}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-12 flex justify-center">
          <PrimaryButton>Postuler pour rejoindre l&apos;académie</PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
