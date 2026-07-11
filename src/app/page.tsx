import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Positioning } from "@/components/Positioning";
import { Problems } from "@/components/Problems";
import { Solution } from "@/components/Solution";
import { ResultsTeaser } from "@/components/ResultsTeaser";
import { Mentorship } from "@/components/Mentorship";
import { Curriculum } from "@/components/Curriculum";
import { Bonuses } from "@/components/Bonuses";
import { Guarantee } from "@/components/Guarantee";
import { MidCta } from "@/components/MidCta";
import { Comparison } from "@/components/Comparison";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { VideoResults } from "@/components/VideoResults";
import { Expert } from "@/components/Expert";
import { BookCall } from "@/components/BookCall";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Positioning />
        <Problems />
        <Solution />
        <ResultsTeaser />
        <Mentorship />
        <Curriculum />
        <Bonuses />
        <Guarantee />
        <MidCta />
        <Comparison />
        <Pricing />
        <Testimonials />
        <VideoResults />
        <Expert />
        <BookCall />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
