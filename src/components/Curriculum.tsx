import { Container, PrimaryButton, Reveal, RevealGroup, RevealItem, SectionHeading } from "./ui";

const formations = [
  {
    n: "01",
    title: "Mental Mastery",
    value: "100 000 F",
    text: "Change ton état d'esprit et adopte un nouveau paradigme favorable à ta réussite : apprends à penser comme un millionnaire.",
  },
  {
    n: "02",
    title: "Growth Marketing",
    value: "130 000 F",
    text: "Pense comme un vrai stratège de croissance : identifie les vrais leviers d'un business IA et active-les avec précision.",
  },
  {
    n: "03",
    title: "Copywriting & Vente de Solutions IA",
    value: "160 000 F",
    text: "Comprends ce qui se passe dans la tête de tes clients et écris des messages qui vendent tes solutions IA sans effort.",
  },
  {
    n: "04",
    title: "Génération d'Images & Design IA",
    value: "150 000 F",
    text: "Maîtrise Midjourney, Flux et les outils de génération d'images pour produire des visuels et créatifs qui vendent, sans compétence en design au départ.",
  },
  {
    n: "05",
    title: "Développement Web avec l'IA",
    value: "170 000 F",
    text: "Conçois et livre des sites et applications web complets à tes clients en utilisant l'IA comme copilote, du prototype au déploiement.",
  },
  {
    n: "06",
    title: "Vibe Coding",
    value: "180 000 F",
    text: "Code des produits fonctionnels en dialoguant avec l'IA (Cursor, Claude Code) : passe de l'idée au projet livré sans écrire chaque ligne toi-même.",
  },
  {
    n: "07",
    title: "Automatisation & Systèmes N8n",
    value: "160 000 F",
    text: "Construis des automatisations puissantes avec n8n, Make et Zapier qui font gagner un temps fou à tes clients, de l'idée à la mise en prod.",
  },
  {
    n: "08",
    title: "SEO & Référencement IA",
    value: "140 000 F",
    text: "Utilise l'IA pour analyser, structurer et scaler le référencement de tes clients : mots-clés, contenu optimisé et suivi de positions.",
  },
  {
    n: "09",
    title: "Prompt Engineering & Agents IA",
    value: "190 000 F",
    text: "Maîtrise la conception d'agents IA et de prompts avancés pour livrer des solutions qui impressionnent réellement tes clients.",
  },
  {
    n: "10",
    title: "Webinaires à Haute Conversion",
    value: "150 000 F",
    text: "La feuille de route étape par étape pour concevoir des webinaires qui vendent tes formations et services IA.",
  },
  {
    n: "11",
    title: "VSL à Haute Conversion",
    value: "140 000 F",
    text: "Crée des VSL qui convertissent réellement, de la rédaction du script au lancement du système.",
  },
  {
    n: "12",
    title: "Gestion de Projet Client",
    value: "90 000 F",
    text: "Structure tes projets IA, pose un cadre professionnel et construis des relations solides avec tes clients.",
  },
  {
    n: "13",
    title: "Lancer son Agence IA",
    value: "110 000 F",
    text: "Passe de développeur solo à une agence IA organisée et rentable grâce à des process et modèles internes prêts à l'emploi.",
  },
  {
    n: "14",
    title: "Systèmes d'Acquisition Clients",
    value: "220 000 F",
    text: "Tous les systèmes dont tu as besoin pour que ton activité de développeur IA ne soit jamais à court de clients.",
  },
  {
    n: "15",
    title: "Personal Branding Développeur IA",
    value: "120 000 F",
    text: "Attire naturellement tes clients de rêve grâce au contenu, au positionnement et à la preuve de compétence technique.",
  },
];

export function Curriculum() {
  return (
    <section id="formations" className="py-24">
      <Container>
        <Reveal variant="scale">
          <SectionHeading
            eyebrow="Les formations"
            title="Rejoindre DIA, c'est débloquer l'accès à une tonne de formations."
            description="Choisis une formation à l'unité avec « Obtenir l'accès », ou prends le pack complet plus bas."
          />
        </Reveal>

        <RevealGroup className="mt-14 space-y-6" stagger={0.06}>
          {formations.map((f, i) => (
            <RevealItem
              key={f.n}
              variant={i % 2 === 0 ? "left" : "right"}
              className="grid gap-8 rounded-3xl border border-navy/10 p-8 md:grid-cols-2 md:items-center"
            >
              <div className="order-2 md:order-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-dark">
                  Formation {f.n}
                </p>
                <h3 className="mt-2 font-display text-2xl text-navy">{f.title}</h3>
                <span className="mt-3 inline-block rounded-full bg-cream px-4 py-1 text-xs font-semibold text-navy/70">
                  Prix : {f.value}
                </span>
                <p className="mt-4 text-sm text-navy/60">{f.text}</p>
                <PrimaryButton className="mt-5 !py-2.5 !px-5 text-xs">
                  Obtenir l&apos;accès
                </PrimaryButton>
              </div>
              <div className="order-1 flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-navy md:order-2">
                <p className="font-display text-6xl text-indigo">{f.n}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-12 flex justify-center">
          <PrimaryButton>Obtenir le pack complet</PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
