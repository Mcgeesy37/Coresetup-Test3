import { Code2, Server, ShieldCheck, Gauge } from "lucide-react";
import { Container } from "./container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const TILES = [
  {
    icon: Code2,
    title: "Website-Entwicklung",
    body: "Moderne Unternehmensseiten mit sauberer SEO-Struktur und klarem Fokus auf Kundenanfragen, konzipiert und gebaut für Marken, die sich vom Wettbewerb abheben wollen.",
    wide: true,
  },
  {
    icon: Server,
    title: "Hosting & Betrieb",
    body: "Verwaltetes Hosting inklusive Monitoring, automatischen Backups und laufendem Support.",
  },
  {
    icon: ShieldCheck,
    title: "Security-Setup",
    body: "HTTPS, Security-Header und Schutzmaßnahmen gegen gängige Angriffe, direkt bei der Einrichtung.",
  },
  {
    icon: Gauge,
    title: "Technische Stabilisierung",
    body: "Performance-Optimierung für bestehende Websites, die langsam geworden sind oder Fehler zeigen.",
  },
];

export function Leistungen() {
  return (
    <section id="leistungen" className="border-b border-hairline-soft py-20 md:py-28">
      <Container>
        <Reveal className="mb-12 max-w-[640px]">
          <h2 className="text-[2.1rem] leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.7rem] lg:text-[3.4rem]">
            Vier Bereiche, ein Team.
          </h2>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:auto-rows-[180px]">
            {TILES.map((t) => (
              <article
                key={t.title}
                className={cn(
                  "group relative flex flex-col justify-end overflow-hidden rounded-lg border border-hairline bg-canvas-card p-6 transition-all duration-200 ease-out hover:-translate-y-[3px] hover:border-hairline-gold hover:bg-canvas-card-hover",
                  t.wide && "lg:col-span-2 lg:row-span-2"
                )}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/0 blur-2xl transition-colors duration-300 group-hover:bg-gold/10"
                />
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-hairline-gold text-gold">
                  <t.icon size={19} strokeWidth={1.6} />
                </span>
                <h3
                  className={cn(
                    "mb-2 font-normal text-ink",
                    t.wide ? "text-[21px]" : "text-[17px]"
                  )}
                >
                  {t.title}
                </h3>
                <p className="text-sm leading-relaxed text-body-mid">
                  {t.body}
                </p>
              </article>
            ))}

            <article className="flex flex-col justify-center rounded-lg border border-gold bg-gradient-to-br from-gold to-gold-bright p-6 text-on-gold">
              <h3 className="mb-2 font-normal text-[17px]">
                Ein Ansprechpartner.
              </h3>
              <p className="text-sm leading-relaxed text-on-gold/72">
                Von der ersten Idee bis zum Support danach bleibt die
                Ansprechperson dieselbe.
              </p>
            </article>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
