import { Plus } from "lucide-react";
import { Container } from "./container";
import { Reveal } from "@/components/ui/reveal";

const ITEMS = [
  {
    q: "Wie lange dauert die Umsetzung einer Website?",
    a: "Je nach Umfang zwischen zwei und sechs Wochen, von der Analyse bis zum Launch. Den genauen Rahmen legen wir vorab gemeinsam fest.",
  },
  {
    q: "Was ist im Hosting enthalten?",
    a: "Monitoring, automatische Backups, Sicherheitsupdates und Support. Du musst dich um nichts Technisches selbst kümmern.",
  },
  {
    q: 'Kann ich meine bestehende Website "retten" statt neu zu bauen?',
    a: "Oft ja. Wir prüfen zuerst, ob eine technische Stabilisierung reicht, bevor wir einen kompletten Neubau empfehlen.",
  },
  {
    q: "Wie läuft die Zusammenarbeit ab?",
    a: "Ein fester Ansprechpartner begleitet dein Projekt von der ersten Anfrage bis zum Support danach. Kein Wechsel der Kontaktperson.",
  },
  {
    q: "Bietet ihr eine kostenlose Analyse an?",
    a: "Ja. Schick uns deine bestehende Website oder dein Vorhaben, wir melden uns mit einer ehrlichen Einschätzung zurück.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-b border-hairline-soft py-20 md:py-28">
      <Container narrow>
        <Reveal className="mb-12">
          <h2 className="text-[2.1rem] leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.7rem] lg:text-[3.4rem]">
            Vor dem Anfragen beantwortet.
          </h2>
        </Reveal>

        <Reveal>
          <div className="border-t border-hairline">
            {ITEMS.map((item, i) => (
              <details
                key={item.q}
                open={i === 0}
                className="group border-b border-hairline py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2 text-[17px] text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <Plus
                    size={18}
                    className="shrink-0 text-gold transition-transform duration-200 group-open:rotate-45"
                  />
                </summary>
                <p className="max-w-[64ch] pb-1 pt-2 text-[15px] text-body-mid">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
