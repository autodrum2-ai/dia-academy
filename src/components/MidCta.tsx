import { Container, PrimaryButton, Reveal } from "./ui";

export function MidCta() {
  return (
    <section className="bg-indigo py-20">
      <Container className="text-center">
        <Reveal variant="fade">
          <h2 className="font-display text-3xl text-navy sm:text-4xl">
            Construis ton business de Développeur IA rentable à nos côtés.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy/70">
            Il est temps pour toi de devenir le développeur IA le plus rentable et le plus
            demandé de ton secteur.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton className="bg-navy text-white hover:bg-navy-light hover:text-white">
              Postuler pour rejoindre l&apos;académie
            </PrimaryButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
