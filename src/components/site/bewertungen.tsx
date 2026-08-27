import { Container } from "./container";
import { Eyebrow } from "./eyebrow";
import { Reveal } from "@/components/ui/reveal";

const REVIEWS = [
  {
    quote:
      "„Von der ersten Beratung bis zum Go-live sehr strukturiert. Die Website wirkt hochwertig und lädt spürbar schneller als unsere alte Seite.“",
    name: "Andreas Fux",
  },
  {
    quote:
      "„Klare Kommunikation, keine unnötigen Extras, dafür ein Ergebnis, das genau zu uns passt. Kann ich uneingeschränkt weiterempfehlen.“",
    name: "Sven Appelt",
  },
  {
    quote:
      "„Termine wurden eingehalten, Rückfragen kamen schnell zurück. Genau die Zuverlässigkeit, die man sich bei so einem Projekt wünscht.“",
    name: "Max Mustermann",
  },
];

/* Drei Kundenstimmen. Zum Bearbeiten: REVIEWS-Array oben anpassen
   (quote, name, role). "role" ist bewusst ein Platzhalter und sollte
   vor dem Go-live durch die echte Rolle/Unternehmen jedes Kunden
   ersetzt werden. */

export function Bewertungen() {
  return (
    <section id="bewertungen" className="border-b border-hairline-soft py-20 md:py-28">
      <Container>
        <Reveal className="mb-12 max-w-[640px]">
          <Eyebrow>Kundenstimmen</Eyebrow>
          <h2 className="text-[2.1rem] leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.7rem] lg:text-[3.4rem]">
            Was Kunden über die Zusammenarbeit sagen
          </h2>
        </Reveal>

        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <article
                key={r.name}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-hairline bg-canvas-card p-6 transition-all duration-200 ease-out hover:-translate-y-[3px] hover:border-hairline-gold hover:bg-canvas-card-hover"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold/0 blur-2xl transition-colors duration-300 group-hover:bg-gold/10"
                />
                <span
                  data-stars="5"
                  aria-label="5 von 5 Sternen"
                  className="mb-4 block text-[15px] tracking-[3px] text-gold"
                >
                  ★★★★★
                </span>
                <blockquote className="mb-6 grow text-[15px] leading-relaxed text-body">
                  {r.quote}
                </blockquote>
                <p className="mb-0.5 text-[15px] text-ink">{r.name}</p>
                <p className="text-[13px] italic text-body-mid">
                  — Rolle/Unternehmen hier ergänzen —
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
