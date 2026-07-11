"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-dark">
      {children}
    </p>
  );
}

export function PrimaryButton({
  children,
  className = "",
  href = "#postuler",
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-indigo px-7 py-3.5 text-sm font-semibold text-navy transition hover:bg-indigo-dark hover:text-white ${className}`}
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}

export function GhostButton({
  children,
  className = "",
  href = "#postuler",
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 px-5 py-2.5 text-xs font-semibold text-navy transition hover:border-indigo hover:text-indigo-dark ${className}`}
    >
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-3xl leading-tight font-normal text-navy sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-lg text-navy/70">{description}</p>}
    </div>
  );
}

export function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 text-indigo" aria-label={`${count} étoiles`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

const avatarPalette = [
  { bg: "bg-navy", fg: "text-indigo" },
  { bg: "bg-indigo", fg: "text-navy" },
  { bg: "bg-cream", fg: "text-navy" },
];

export function Avatar({ index = 0, emoji = "🧑" }: { index?: number; emoji?: string }) {
  const palette = avatarPalette[index % avatarPalette.length];
  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg ${palette.bg} ${palette.fg}`}
    >
      {emoji}
    </span>
  );
}

export type RevealVariant = "up" | "fade" | "scale" | "left" | "right" | "rotate";

const easeOut = [0.22, 1, 0.36, 1] as const;

function variantMotion(variant: RevealVariant, distance: number) {
  switch (variant) {
    case "fade":
      return { hidden: { opacity: 0 }, show: { opacity: 1 } };
    case "scale":
      return { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } };
    case "left":
      return { hidden: { opacity: 0, x: -distance * 1.6 }, show: { opacity: 1, x: 0 } };
    case "right":
      return { hidden: { opacity: 0, x: distance * 1.6 }, show: { opacity: 1, x: 0 } };
    case "rotate":
      return {
        hidden: { opacity: 0, rotate: -3, y: distance * 0.6 },
        show: { opacity: 1, rotate: 0, y: 0 },
      };
    default:
      return { hidden: { opacity: 0, y: distance }, show: { opacity: 1, y: 0 } };
  }
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  variant?: RevealVariant;
}) {
  const { hidden, show } = variantMotion(variant, y);
  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={show}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className = "",
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ staggerChildren: stagger }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className = "",
  y = 20,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  variant?: RevealVariant;
}) {
  const { hidden, show } = variantMotion(variant, y);
  const variants: Variants = {
    hidden,
    show: { ...show, transition: { duration: 0.5, ease: easeOut } },
  };
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
