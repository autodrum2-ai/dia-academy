import Image from "next/image";
import { Container, PrimaryButton, Reveal } from "./ui";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-10">
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.14),_transparent_65%)]" />

      <Container className="relative text-center">
        <Reveal variant="up">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-dark">
            L&apos;élite des développeurs IA
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl text-5xl leading-[1.05] font-normal text-navy sm:text-6xl md:text-7xl">
            DÉVELOPPEUR <span className="text-indigo">IA</span>
            <br />
            ACADEMY
          </h1>
        </Reveal>
      </Container>

      <Reveal variant="scale" delay={0.15} className="relative -mt-8 w-full sm:-mt-14 md:-mt-20">
        {/* ground shadow */}
        <div className="absolute bottom-4 left-1/2 h-8 w-1/3 -translate-x-1/2 rounded-full bg-navy/25 blur-2xl" />

        {/* floating badge: agents IA */}
        <div className="absolute left-4 top-[10%] z-10 hidden w-24 rounded-2xl bg-white p-3 text-left shadow-lg shadow-navy/10 sm:block sm:left-8 md:left-16">
          <span className="text-xl">🤖</span>
          <p className="mt-1 text-[10px] font-semibold uppercase leading-tight text-navy/70">
            Agents IA
          </p>
        </div>

        {/* floating badge: idées */}
        <div className="absolute right-4 top-0 z-10 hidden w-20 rounded-2xl bg-white p-3 text-left shadow-lg shadow-navy/10 sm:block sm:right-8 md:right-16">
          <span className="text-xl">💡</span>
          <p className="mt-1 text-[10px] font-semibold uppercase leading-tight text-navy/70">
            Idées
          </p>
        </div>

        <Image
          src="/images/founder-dia-cutout.png"
          alt="DIA — Développeur IA Academy"
          width={1254}
          height={742}
          className="relative z-0 block h-auto w-full object-cover"
          preload
        />

        {/* stats — mobile (static) */}
        <div className="mt-4 flex items-center justify-center gap-8 md:hidden">
          <div>
            <p className="font-display text-2xl text-navy">20+</p>
            <p className="text-[10px] uppercase tracking-wide text-navy/60">Freelances</p>
          </div>
          <div className="h-8 w-px bg-navy/10" />
          <div>
            <p className="font-display text-2xl text-navy">7 ans</p>
            <p className="text-[10px] uppercase tracking-wide text-navy/60">Expérience</p>
          </div>
        </div>

        {/* stats — desktop (overlapping bottom-left) */}
        <div className="absolute bottom-6 left-4 z-10 hidden gap-6 sm:left-8 md:left-16 md:flex">
          <div>
            <p className="text-[10px] uppercase tracking-wide text-navy/50">Freelances</p>
            <p className="font-display text-3xl text-navy">20+</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wide text-navy/50">Expérience</p>
            <p className="font-display text-3xl text-indigo">7 ans</p>
          </div>
        </div>

        {/* income promise + CTA — desktop (overlapping bottom-right) */}
        <div className="absolute bottom-6 right-4 z-10 hidden items-center gap-3 sm:right-8 md:right-16 md:flex">
          <p className="max-w-[9rem] text-right text-xs text-navy/70">
            Ne gagne plus jamais moins de{" "}
            <span className="font-semibold text-navy">20 000 000 FCFA/an</span>
          </p>
          <PrimaryButton className="!h-12 !w-12 !gap-0 !rounded-full !p-0">{null}</PrimaryButton>
        </div>
      </Reveal>

      <Container className="mt-8 flex justify-center md:mt-4">
        <PrimaryButton>Postuler pour l&apos;académie</PrimaryButton>
      </Container>
    </section>
  );
}
