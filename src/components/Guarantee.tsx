import { Container, Reveal, SectionHeading } from "./ui";

export function Guarantee() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Garantie de réussite"
            title="On ne te lâche pas tant que tu n'as pas de résultats."
            description="Quand tu rejoins DIA, tu ne prends aucun risque. Soit tu multiplies ton investissement par 5, soit nous continuons de t'accompagner jusqu'aux résultats."
          />
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl rounded-3xl bg-cream p-10">
          <p className="text-navy/70">
            Voici notre engagement : si après ta formation d&apos;1 mois et 90
            jours d&apos;application tu n&apos;as pas fait au moins X5 de ton
            investissement, non seulement on continue de t&apos;accompagner à
            vie, mais on double le suivi.
          </p>
          <p className="mt-6 font-display text-xl text-navy">
            &ldquo;Deux fois plus de sessions. Deux fois plus de retours sur tes
            travaux. Deux fois plus d&apos;attention de notre part. Gratuitement,
            jusqu&apos;à ce que tu obtiennes les résultats.&rdquo;
          </p>
          <ul className="mt-6 space-y-2 text-sm text-navy/70">
            <li>✓ Deux fois plus de sessions lives</li>
            <li>✓ Deux fois plus de retours sur tes travaux</li>
            <li>✓ Gratuitement, jusqu&apos;à ce que ça marche</li>
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
