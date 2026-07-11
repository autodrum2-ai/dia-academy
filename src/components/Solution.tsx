import { Container, PrimaryButton, Reveal, RevealGroup, RevealItem, SectionHeading } from "./ui";

const pillars = [
  {
    n: "01",
    title: "1 mois de formation intensive",
    text: "Sessions lives, ateliers pratiques et un plan d'action clair pour maîtriser le développement IA rapidement.",
  },
  {
    n: "02",
    title: "15 formations complètes",
    text: "+60 modules couvrant le développement IA, l'automatisation, la vente et l'acquisition sur-mesure.",
  },
  {
    n: "03",
    title: "Accompagnement à vie",
    text: "Groupe privé de suivi où tu es accompagné à vie, jamais seul face à un blocage.",
  },
];

export function Solution() {
  return (
    <section id="programme" className="bg-navy py-24 text-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="La solution"
            title={
              <span className="text-white">
                Un système architecturé pour ta croissance.
              </span>
            }
            description={
              <span className="text-white/70">
                Rejoins DIA et dépasse la barre des 20 000 000 FCFA par an pour de
                bon.
              </span>
            }
          />

          <p className="mx-auto mt-8 max-w-3xl text-center text-white/60">
            DIA n&apos;est pas une formation de code isolée. Ce n&apos;est pas
            non plus une simple formation en prompt engineering. DIA,
            c&apos;est l&apos;académie qui forme la nouvelle génération de
            développeurs IA capables de construire, vendre et livrer des
            solutions IA rentables.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <RevealItem key={p.n} variant="scale" className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="font-display text-4xl text-indigo">{p.n}</p>
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-white/60">{p.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-14 text-center">
          <p className="font-display text-2xl">Fini les informations fragmentées…</p>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Enfin, un programme complet qui te donne toutes les compétences et les
            ressources au même endroit.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton>Postuler pour rejoindre l&apos;académie</PrimaryButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
