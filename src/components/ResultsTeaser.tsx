import { Container, Reveal, RevealGroup, RevealItem, SectionHeading } from "./ui";

const quotes = [
  {
    title: "Premier client signé en un mois",
    quote:
      "Merci pour le suivi ! Il vient de faire le premier paiement. Le boulot maintenant c'est de lui livrer un résultat solide.",
    name: "Témoignage à venir",
    role: "Développeur IA Freelance",
  },
  {
    title: "De débutant à agence IA rentable",
    quote:
      "Je suis la preuve vivante que cet accompagnement fonctionne. Mon activité grandit, je ne travaille plus seul sur mes projets.",
    name: "Témoignage à venir",
    role: "Fondateur d'agence IA",
  },
];

export function ResultsTeaser() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <SectionHeading title="15 compétences, 15 systèmes, 15 potentielles sources de revenus pour ton business." />
          <p className="mx-auto mt-4 max-w-2xl text-center text-navy/60">
            Découvre plus de 15 systèmes éprouvés que tes concurrents ignorent pour scaler
            ton business de développeur IA tout en aidant tes clients à scaler.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <RevealItem key={i} variant={i % 2 === 0 ? "left" : "right"} className="rounded-3xl border border-navy/10 p-8">
              <p className="font-display text-xl text-navy">{q.title}</p>
              <p className="mt-4 text-navy/70">&ldquo;{q.quote}&rdquo;</p>
              <p className="mt-6 text-sm font-semibold text-navy">
                {q.name} <span className="text-navy/40">· {q.role}</span>
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
