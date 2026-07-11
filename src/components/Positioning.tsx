"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Eyebrow, Reveal } from "./ui";

const skills = [
  "Graphistes IA",
  "Développeurs Web",
  "Copywriters IA",
  "Automaticiens N8n",
  "Vibe Codeurs",
  "Experts SEO IA",
];

export function Positioning() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % skills.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20">
      <Container>
        <Reveal variant="fade" className="mx-auto max-w-3xl text-center">
          <Eyebrow>Notre positionnement</Eyebrow>

          <p className="mt-5 text-lg text-navy/60">
            Chez DIA, on ne t&apos;enferme pas dans une seule compétence IA.
          </p>

          <p className="mt-4 font-display text-3xl leading-snug text-navy sm:text-4xl md:text-5xl">
            On forme des{" "}
            <span className="relative inline-flex h-[1.3em] min-w-[9ch] items-center justify-center overflow-hidden align-bottom sm:min-w-[11ch]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={skills[index]}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute whitespace-nowrap text-indigo-dark"
                >
                  {skills[index]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            rentables.
          </p>

          <p className="mx-auto mt-5 max-w-xl text-lg text-navy/70">
            Automatisation, code, contenu, référencement : choisis ta voie ou cumule-les.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
