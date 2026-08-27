import Image from "next/image";
import { Container } from "./container";
import { Reveal } from "@/components/ui/reveal";

const WORK = [
  {
    seed: "coresetup-kanzlei-gold",
    title: "Website-Relaunch, Kanzlei",
    body: "Neue Struktur, klare Leistungsseiten, Kontaktpfad in drei Klicks.",
    alt: "Website-Relaunch für eine Berliner Kanzlei",
  },
  {
    seed: "coresetup-zahnarzt-gold",
    title: "Praxis-Website, Zahnmedizin",
    body: "Terminanfrage direkt im ersten Bildschirm.",
    alt: "Website für eine Zahnarztpraxis",
  },
  {
    seed: "coresetup-handwerk-gold",
    title: "Landingpage, Handwerksbetrieb",
    body: "Ein Angebot, ein Formular, keine Ablenkung.",
    alt: "Landingpage für einen Handwerksbetrieb",
  },
  {
    seed: "coresetup-hotel-gold",
    title: "Website, Boutique-Hotel",
    body: "Buchungsanfragen statt nur schöner Bilder.",
    alt: "Website für ein Boutique-Hotel",
  },
];

export function Projekte() {
  return (
    <section id="projekte" className="border-b border-hairline-soft py-20 md:py-28">
      <Container>
        <Reveal className="mb-12 max-w-[640px]">
          <h2 className="text-[2.1rem] leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.7rem] lg:text-[3.4rem]">
            Referenzformate.
          </h2>
          <p className="mt-3 max-w-[46ch] text-[1.05rem] leading-relaxed text-body sm:text-[1.25rem]">
            Beispielhafte Projektformate. Echte Referenzen und Case Studies
            stellen wir auf Anfrage bereit.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid auto-cols-[min(78vw,320px)] grid-flow-col gap-4 overflow-x-auto pb-3 [scrollbar-color:var(--hairline-gold)_transparent] [scrollbar-width:thin] [scroll-snap-type:x_mandatory]">
            {WORK.map((w) => (
              <article key={w.seed} className="[scroll-snap-align:start]">
                <a
                  href="#kontakt"
                  className="mb-4 block aspect-square overflow-hidden rounded-lg border border-hairline bg-canvas-card"
                >
                  {/* Platzhalterbilder (picsum.photos) - vor Go-live durch
                      echte Projekt-Screenshots ersetzen. */}
                  <Image
                    src={`https://picsum.photos/seed/${w.seed}/700/700`}
                    alt={w.alt}
                    width={700}
                    height={700}
                    className="h-full w-full object-cover transition-transform duration-[420ms] ease-out hover:scale-[1.045]"
                    unoptimized
                  />
                </a>
                <h3 className="mb-1 text-[16px] font-normal text-ink">
                  {w.title}
                </h3>
                <p className="mb-3 text-sm text-body-mid">{w.body}</p>
                <a
                  href="#kontakt"
                  className="border-b border-transparent text-sm text-gold transition-colors hover:border-gold hover:text-gold-bright"
                >
                  Mehr erfahren
                </a>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
