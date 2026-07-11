import { Container, PrimaryButton, Reveal } from "./ui";

const items = [
  { title: "15 formations complètes incluses", text: "Des heures de contenu pour te transmettre tout ce que nous savons sur le développement IA, l'automatisation et l'acquisition clients." },
  { title: "Ateliers pratiques réguliers", text: "Sessions lives, ateliers techniques, Q&A et retours sur tes projets." },
  { title: "Groupe privé de suivi à vie", text: "Une communauté active de développeurs IA où 90% des membres sont engagés." },
  { title: "Suivi personnalisé et retours", text: "Tu ne travailles jamais seul. Tu reçois des retours précis et actionnables." },
  { title: "Création de tunnels de vente inclus", text: "On construit avec toi les tunnels de vente qui présentent et vendent tes services." },
  { title: "Approche Dev + IA", text: "Apprends à piloter l'IA et à construire des solutions qui convertissent vraiment." },
  { title: "Certifications incluses", text: "Pour chaque compétence maîtrisée, réclame une certification officielle." },
  { title: "Accès à vie + mises à jour", text: "Tu paies une fois. Tu accèdes pour toujours." },
  { title: "15 Bonus exclusifs inclus", text: "Templates, scripts, swipe files, études de cas réels et boîte à outils IA." },
  { title: "Garantie Résultats X5", text: "Si après ta formation tu n'as pas fait X5 ton investissement, on double le suivi gratuitement." },
];

export function Pricing() {
  return (
    <section className="py-24">
      <Container>
        <Reveal variant="scale" className="mx-auto max-w-2xl rounded-3xl border border-navy/10 p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-dark">
            L&apos;investissement
          </p>
          <h2 className="mt-3 font-display text-3xl text-navy">
            Rejoindre DIA
          </h2>
          <p className="mt-6 text-sm text-navy/40 line-through">
            Valeur réelle : 4 950 000 FCFA
          </p>
          <p className="font-display text-5xl text-navy">290 000 FCFA</p>
          <p className="mt-2 text-sm text-navy/50">Paiement unique · Accès à vie.</p>

          <ul className="mt-8 space-y-4 text-left">
            {items.map((item, i) => (
              <li key={item.title} className="flex gap-4 border-t border-navy/10 pt-4 first:border-t-0 first:pt-0">
                <span className="font-display text-indigo-dark">{i + 1}</span>
                <div>
                  <p className="font-semibold text-navy">{item.title}</p>
                  <p className="mt-1 text-sm text-navy/60">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center">
            <PrimaryButton>Postuler pour rejoindre l&apos;académie</PrimaryButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
