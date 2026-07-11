import { Container, PrimaryButton, Reveal, RevealGroup, RevealItem, SectionHeading } from "./ui";

const rows = [
  {
    dia: "Te forme sur plusieurs compétences IA à la fois pour que tu ne dépendes jamais d'une seule qui peut devenir obsolète.",
    others: "T'enferment dans une seule compétence IA, souvent dépassée quelques mois plus tard.",
  },
  {
    dia: "Inclut la création de tes tunnels de vente : tu sais aussi vendre ce que tu sais faire.",
    others: "T'apprennent une compétence technique sans jamais t'apprendre à la vendre.",
  },
  {
    dia: "Accompagnement à vie dans un groupe privé, même après la fin de la formation.",
    others: "Te laissent seul dès que le programme d'1 mois est terminé.",
  },
  {
    dia: "Mise à jour à chaque nouvel outil IA qui sort sur le marché.",
    others: "Contenu figé, enregistré une fois et jamais retouché.",
  },
  {
    dia: "Formé par un praticien actif qui livre encore de vrais projets clients.",
    others: "Formateurs qui vendent des formations sans avoir de clients réels.",
  },
];

export function Comparison() {
  return (
    <section className="bg-cream py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Analyse comparative"
            title="Pourquoi DIA est plus rentable que n'importe quelle autre formation ?"
          />
        </Reveal>

        <RevealGroup className="mt-14 overflow-hidden rounded-3xl border border-navy/10" stagger={0.04}>
          <div className="grid grid-cols-2 bg-navy text-white">
            <p className="p-4 text-sm font-semibold">DIA</p>
            <p className="p-4 text-sm font-semibold text-white/60">Les autres formations</p>
          </div>
          {rows.map((row, i) => (
            <RevealItem key={i} variant="left" className="grid grid-cols-2 border-t border-navy/10 bg-white" y={12}>
              <p className="p-4 text-sm text-navy">
                <span className="mr-2 text-indigo-dark">✓</span>
                {row.dia}
              </p>
              <p className="p-4 text-sm text-navy/50">
                <span className="mr-2">✕</span>
                {row.others}
              </p>
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
