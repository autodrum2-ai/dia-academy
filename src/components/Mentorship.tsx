import { Container, PrimaryButton, Reveal } from "./ui";

const included = [
  "Sessions lives hebdomadaires",
  "Plan d'action personnalisé",
  "Ateliers pratiques",
  "Suivi personnalisé",
  "Groupe privé de suivi à vie",
  "Formation intensive sur 1 mois",
  "Création de tunnels de vente clé en main",
  "Garantie de résultats",
];

export function Mentorship() {
  return (
    <section className="bg-cream py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-navy/50">
            C&apos;est bien beau tout ça mais…
          </p>
          <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">
            Que contient DIA ?
          </h2>
        </Reveal>

        <Reveal delay={0.1} variant="rotate" className="mx-auto mt-12 max-w-3xl rounded-3xl bg-navy p-10 text-white">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo">
            Session 2026 ouverte
          </p>
          <h3 className="mt-3 font-display text-3xl">Le Bootcamp DIA</h3>
          <p className="mt-3 text-white/60">
            &ldquo;Le bootcamp conçu pour transformer ton talent brut en une
            expertise de développeur IA hautement rémunérée par les meilleurs
            clients.&rdquo;
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                <span className="text-indigo">✓</span> {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-white/50">
                Une valeur réelle de
              </p>
              <p className="font-display text-2xl text-indigo">690 000 F</p>
            </div>
            <PrimaryButton>Postuler pour rejoindre l&apos;académie</PrimaryButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
