import { Container, PrimaryButton, Reveal, RevealGroup, RevealItem, SectionHeading } from "./ui";

const mindset = [
  {
    title: "Syndrome de l'imposteur face à l'IA",
    text: "De nouveaux outils sortent chaque semaine et tu as l'impression de ne jamais être assez à jour pour vendre tes compétences.",
  },
  {
    title: "La peur d'être remplacé",
    text: "Tu as peur que l'IA remplace ton métier avant même que tu aies eu le temps d'en profiter.",
  },
  {
    title: "La peur de la technique",
    text: "Tu penses qu'il faut être un développeur senior ou un génie du code pour vivre de l'IA en freelance.",
  },
  {
    title: "Plafond de verre",
    text: "Tu penses qu'il est impossible de dépasser 20 000 000 FCFA par an en freelance IA en 2026.",
  },
];

const business = [
  {
    title: "Offre floue",
    text: "Tu proposes « des services IA » en général, sans offre précise que le client comprend et achète tout de suite.",
  },
  {
    title: "Acquisition instable",
    text: "Tu enchaînes les périodes d'abondance et de famine. Un mois tu as des clients, le mois suivant plus rien.",
  },
  {
    title: "Sous-facturation",
    text: "Tu factures des heures d'utilisation d'outils IA au lieu de facturer les résultats que ça produit chez le client.",
  },
  {
    title: "Livraison artisanale",
    text: "Chaque projet repart de zéro : pas de process, pas de tunnel de vente, pas de système reproductible.",
  },
];

function Column({
  label,
  intro,
  items,
}: {
  label: string;
  intro: string;
  items: { title: string; text: string }[];
}) {
  return (
    <div className="rounded-3xl bg-cream p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-navy/50">{intro}</p>
      <h3 className="mt-1 font-display text-2xl text-navy">{label}</h3>
      <ul className="mt-6 space-y-5">
        {items.map((item) => (
          <li key={item.title} className="border-t border-navy/10 pt-5 first:border-t-0 first:pt-0">
            <p className="font-semibold text-navy">{item.title}</p>
            <p className="mt-1 text-sm text-navy/60">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Problems() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Le diagnostic"
            title="Pourquoi 95% des freelances IA stagnent indéfiniment."
            description="Ces problèmes ne sont pas des fatalités, mais des symptômes d'un manque de système."
          />
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2">
          <RevealItem>
            <Column label="Blocages de Mindset" intro="Ce qui se passe dans ta tête" items={mindset} />
          </RevealItem>
          <RevealItem>
            <Column label="Rouages du Business" intro="Tes systèmes actuels" items={business} />
          </RevealItem>
        </RevealGroup>

        <Reveal className="mt-10 rounded-3xl bg-navy p-10 text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo">
            Solution immédiate
          </p>
          <h3 className="mx-auto mt-4 max-w-2xl font-display text-2xl sm:text-3xl">
            Dans DIA, nous te donnons tout ce dont tu as besoin pour en
            finir avec ces problèmes une bonne fois pour toutes.
          </h3>
          <div className="mt-8 flex justify-center">
            <PrimaryButton>Postuler pour rejoindre l&apos;académie</PrimaryButton>
          </div>
          <p className="mt-4 text-xs uppercase tracking-wide text-white/50">
            Places limitées · Session 2026
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
