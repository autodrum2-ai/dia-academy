import Link from "next/link";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 py-10">
      <Container className="flex flex-wrap items-center justify-between gap-4 text-sm text-navy/50">
        <Link href="#top" className="font-display text-lg text-navy">
          DIA<span className="text-indigo">.</span>
        </Link>
        <p>© 2026 DIA — Développeur IA Academy. Tous droits réservés.</p>
      </Container>
    </footer>
  );
}
