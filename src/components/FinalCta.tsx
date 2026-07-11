import { Container, PrimaryButton, Reveal } from "./ui";

export function FinalCta() {
  return (
    <section id="postuler" className="bg-navy py-24 text-white">
      <Container className="text-center">
        <Reveal variant="fade">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo">
            Opportunité exclusive
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl sm:text-5xl">
            Arrête de stagner.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Rejoins DIA et deviens le développeur IA avec qui les entrepreneurs à succès
            veulent travailler.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton>Postuler à l&apos;académie</PrimaryButton>
          </div>
          <p className="mt-4 text-xs uppercase tracking-wide text-white/40">
            Paiement unique · Accès à vie · Garantie résultats
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
