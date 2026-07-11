"use client";

import { useState } from "react";
import { Container, Reveal, SectionHeading } from "./ui";

const faqs = [
  {
    q: "Le programme est-il fait pour les débutants ?",
    a: "DIA s'adresse aussi bien aux débutants motivés qu'aux freelances qui veulent se spécialiser en IA. Si tu postules, nous évaluons ensemble si le programme correspond à ton niveau.",
  },
  {
    q: "Combien de temps dure l'accompagnement ?",
    a: "La formation dure 1 mois. Durant ce mois tu as accès aux 15 formations (à l'unité ou en pack), aux sessions lives hebdomadaires et à un groupe privé de suivi. Une fois la formation terminée, tu restes accompagné à vie dans ce groupe.",
  },
  {
    q: "Qu'est-ce qui se passe après l'appel de qualification ?",
    a: "L'appel dure 30 minutes. Le fondateur analyse ton profil, tes objectifs et ton niveau. Si le programme correspond, il t'explique les prochaines étapes. Aucune vente forcée.",
  },
  {
    q: "Quelle est la différence avec les autres formations ?",
    a: "La plupart des formations te donnent du contenu et te laissent seul. Ici tu as une formation intensive sur 1 mois puis un accompagnement à vie, des sessions lives hebdomadaires et une communauté active de développeurs IA qui avancent dans la même direction.",
  },
  {
    q: "Est-ce que je vais avoir des résultats rapidement ?",
    a: "Les résultats dépendent de ton engagement. Certains élèves bookent leurs premiers appels de vente dès la première semaine. L'objectif est d'atteindre 20 000 000 FCFA par an minimum grâce à la méthode.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-cream py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Aide & Support"
            title="Questions Fréquentes."
            description="Tout ce que vous devez savoir sur l'accompagnement et la méthode DIA."
          />
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-2xl divide-y divide-navy/10 rounded-3xl bg-white">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="px-6">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left font-semibold text-navy"
                >
                  {item.q}
                  <span className="text-indigo-dark">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <p className="pb-5 text-sm text-navy/60">{item.a}</p>}
              </div>
            );
          })}
        </Reveal>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-8 text-sm text-navy/60">
          <span>Instagram · [ton compte Instagram]</span>
          <span>WhatsApp · [ton numéro WhatsApp]</span>
          <span>Email · [ton email de contact]</span>
        </div>
      </Container>
    </section>
  );
}
