import { Container, Reveal, RevealGroup, RevealItem, SectionHeading } from "./ui";

const slots = [1, 2, 3, 4, 5];

export function VideoResults() {
  return (
    <section className="py-24">
      <Container>
        <Reveal variant="fade">
          <SectionHeading
            eyebrow="Success stories"
            title="Résultats concrets en vidéo."
            description="Découvre les parcours de nos membres qui ont cassé leur plafond de verre et automatisé leur acquisition client."
          />
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5" stagger={0.06}>
          {slots.map((n) => (
            <RevealItem
              key={n}
              variant="scale"
              className="relative flex aspect-[9/16] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-indigo-dark"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-navy">
                ▶
              </span>
              <p className="absolute bottom-3 text-center text-[11px] text-white/60">
                Vidéo à ajouter
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
