import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const larken = localFont({
  src: "../fonts/Larken-Thin.ttf",
  variable: "--font-larken",
  weight: "100",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DIA — Développeur IA Academy",
  description:
    "DIA — Développeur IA Academy — formation premium pour devenir développeur IA freelance rentable, avec accompagnement à vie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${instrument.variable} ${larken.variable} antialiased`}>
      <body className="bg-white text-navy">{children}</body>
    </html>
  );
}
