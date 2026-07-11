import Image from "next/image";
import { Container, Reveal } from "./ui";

const stats = [
  { value: "20+", label: "Freelances accompagnés" },
  { value: "7+", label: "Ans d'expérience" },
  { value: "20M F", label: "Objectif annuel min." },
  { value: "1", label: "Seule méthode : DIA" },
];

export function Expert() {
  return (
    <section id="expertise" className="bg-navy py-24 text-white">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center">
        <Reveal variant="left" className="overflow-hidden rounded-3xl">
          <Image
            src="/images/founder-dia.jpg"
            alt="Fondateur de DIA"
            width={900}
            height={1100}
            className="h-full w-full object-cover"
          />
        </Reveal>
        <Reveal delay={0.15} variant="right">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo">
            L&apos;expertise
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            L&apos;expert derrière les développeurs IA qui percent.
          </h2>
          <p className="mt-5 text-white/70">
            Avec plus de 7 ans d&apos;expérience, j&apos;aide les freelances et
            futurs développeurs à percer dans l&apos;IA grâce à des méthodes
            concrètes et un accompagnement à vie. Après avoir accompagné plus
            de 20 freelances vers des résultats réels, je transmets
            aujourd&apos;hui, avec DIA, une méthode complète pour former des
            développeurs IA performants, recherchés et capables de ne plus
            jamais gagner moins de 20 000 000 FCFA par an.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-indigo">{s.value}</p>
                <p className="text-xs uppercase tracking-wide text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
