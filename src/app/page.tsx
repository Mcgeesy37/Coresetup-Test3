import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { TrustStrip } from "@/components/site/trust-strip";
import { Leistungen } from "@/components/site/leistungen";
import { Prozess } from "@/components/site/prozess";
import { Projekte } from "@/components/site/projekte";
import { Preise } from "@/components/site/preise";
import { Bewertungen } from "@/components/site/bewertungen";
import { TechMarquee } from "@/components/site/tech-marquee";
import { Faq } from "@/components/site/faq";
import { Kontakt } from "@/components/site/kontakt";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Leistungen />
        <Prozess />
        <Projekte />
        <Preise />
        <Bewertungen />
        <TechMarquee />
        <Faq />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
