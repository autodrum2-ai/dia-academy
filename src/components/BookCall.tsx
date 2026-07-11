import { Container, PrimaryButton, Reveal } from "./ui";

export function BookCall() {
  return (
    <section className="py-24">
      <Reveal variant="scale">
        <Container className="rounded-3xl bg-indigo p-12 text-center">
          <h2 className="font-display text-3xl text-navy sm:text-4xl">
            Prêt à devenir développeur IA ?
          </h2>
          <p className="mt-3 text-navy/70">
            Deviens le développeur IA le plus rentable de ton secteur.
          </p>
          <p className="mx-auto mt-6 max-w-md text-sm text-navy/70">
            Un appel de 30 min pour savoir si le programme est fait pour toi.
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-navy/50">
            Gratuit · Sans engagement
          </p>
          <div className="mt-6 flex justify-center">
            <PrimaryButton className="bg-navy text-white hover:bg-navy-light hover:text-white">
              Réserver mon appel
            </PrimaryButton>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
