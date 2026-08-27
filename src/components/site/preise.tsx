import { Check } from "lucide-react";
import { Container } from "./container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function List({ items, selected }: { items: string[]; selected?: boolean }) {
  return (
    <ul className="mb-6 grow space-y-2">
      {items.map((i) => (
        <li
          key={i}
          className={cn(
            "flex items-start gap-2 text-sm",
            selected ? "text-on-gold/85" : "text-body"
          )}
        >
          <Check
            size={14}
            strokeWidth={2.4}
            className={cn(
              "mt-[3px] shrink-0",
              selected ? "text-on-gold" : "text-gold"
            )}
          />
          {i}
        </li>
      ))}
    </ul>
  );
}

export function Preise() {
  return (
    <section id="preise" className="border-b border-hairline-soft py-20 md:py-28">
      <Container>
        <Reveal className="mb-12 max-w-[640px]">
          <h2 className="text-[2.1rem] leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.7rem] lg:text-[3.4rem]">
            Transparent kalkuliert.
          </h2>
          <p className="mt-3 text-[1.05rem] leading-relaxed text-body sm:text-[1.25rem]">
            Drei Pakete, keine versteckten Kosten.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid items-stretch gap-4 lg:grid-cols-[1.25fr_1fr]">
            <article className="relative flex flex-col justify-center rounded-lg border border-gold bg-gradient-to-br from-gold to-gold-bright p-8 text-on-gold shadow-[0_0_40px_rgb(201_169_97_/_0.14)] lg:p-10">
              <span className="absolute -top-3 left-8 rounded-full bg-on-gold px-3 py-[5px] font-mono text-[11px] uppercase tracking-[1.2px] text-gold-bright">
                Meistgewählt
              </span>
              <h3 className="mb-2 text-[20px] font-normal">Business</h3>
              <p className="mb-6 text-sm text-on-gold/72">
                Vollständige Unternehmenswebsite mit mehreren Seiten.
              </p>
              <p className="mb-6 text-[52px] font-normal leading-none tracking-[-0.02em]">
                1.999&nbsp;€
              </p>
              <List
                selected
                items={[
                  "Bis zu 8 Unterseiten",
                  "SEO-Grundstruktur",
                  "Individuelles Design",
                  "Security-Setup inklusive",
                ]}
              />
              <a href="#kontakt" className="w-full">
                <Button className="w-full bg-on-gold text-gold-bright hover:bg-[#241d10]">
                  Projekt anfragen
                </Button>
              </a>
            </article>

            <div className="flex flex-col gap-4">
              <article className="flex flex-1 flex-col rounded-lg border border-hairline bg-canvas-card p-6 transition-all duration-200 hover:-translate-y-[3px] hover:border-hairline-gold">
                <h3 className="mb-2 text-[17px] font-normal text-ink">
                  Starter
                </h3>
                <p className="mb-4 text-sm text-body-mid">
                  Landingpage für ein Angebot oder eine Kampagne.
                </p>
                <p className="mb-4 text-[34px] font-normal leading-none tracking-[-0.02em] text-ink">
                  349&nbsp;€
                </p>
                <List
                  items={["Eine Seite, klarer Aufbau", "Kontaktformular", "Mobile-optimiert"]}
                />
                <a href="#kontakt" className="mt-auto w-full">
                  <Button variant="outline" className="w-full">
                    Projekt anfragen
                  </Button>
                </a>
              </article>

              <article className="flex flex-1 flex-col rounded-lg border border-hairline bg-canvas-card p-6 transition-all duration-200 hover:-translate-y-[3px] hover:border-hairline-gold">
                <h3 className="mb-2 text-[17px] font-normal text-ink">
                  Premium
                </h3>
                <p className="mb-4 text-sm text-body-mid">
                  High-End-Entwicklung mit gehärteter Sicherheit.
                </p>
                <p className="mb-4 text-[34px] font-normal leading-none tracking-[-0.02em] text-ink">
                  3.999&nbsp;€
                </p>
                <List
                  items={[
                    "Umfangreiche Struktur & Funktionen",
                    "Security-Hardening",
                    "Priorisierte Umsetzung",
                  ]}
                />
                <a href="#kontakt" className="mt-auto w-full">
                  <Button variant="outline" className="w-full">
                    Projekt anfragen
                  </Button>
                </a>
              </article>
            </div>
          </div>

          <p className="mt-6 text-center text-[13px] text-body-mid">
            Optionales Managed Hosting: 29 bis 129 € pro Monat, je nach
            Umfang.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
