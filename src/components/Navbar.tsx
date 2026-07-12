import Link from "next/link";
import { PrimaryButton, Reveal } from "./ui";

const links = [
  { label: "Programme", href: "#programme" },
  { label: "Formations", href: "#formations" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "À propos", href: "#expertise" },
];

export function Navbar() {
  return (
    <header className="sticky top-4 z-50">
      <Reveal variant="fade" y={0}>
        <div className="mx-auto w-full max-w-6xl px-3 sm:px-6">
          <div className="flex items-center justify-between rounded-full border border-navy/10 bg-white/90 px-4 py-3 shadow-sm backdrop-blur sm:px-5">
            <Link href="#top" className="font-display text-xl tracking-tight text-navy">
              DIA<span className="text-indigo">.</span>
            </Link>
            <nav className="hidden items-center gap-8 text-sm font-medium text-navy/70 md:flex">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-navy">
                  {link.label}
                </Link>
              ))}
            </nav>
            <PrimaryButton className="!py-2.5 !px-5 text-xs">Postuler</PrimaryButton>
          </div>
        </div>
      </Reveal>
    </header>
  );
}
