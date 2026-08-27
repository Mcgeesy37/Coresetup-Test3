import { Container } from "./container";
import { Eyebrow } from "./eyebrow";
import { Reveal } from "@/components/ui/reveal";

const STEPS = [
  {
    n: "01",
    title: "Analyse",
    body: "Wir sichten deine bestehende Website oder Anforderung und zeigen, wo die größten Hebel liegen.",
  },
  {
    n: "02",
    title: "Konzept & Design",
    body: "Struktur, Text und Design entstehen abgestimmt auf dein Angebot und deine Zielgruppe.",
  },
  {
    n: "03",
    title: "Entwicklung",
    body: "Umsetzung mit sauberem Code, Performance-Budget und SEO-Grundlage von Anfang an.",
  },
  {
    n: "04",
    title: "Launch & Support",
    body: "Übergabe, Monitoring und ein fester Ansprechpartner für alles, was danach kommt.",
  },
];

export function Prozess() {
  return (
    <section id="prozess" className="border-b border-hairline-soft py-20 md:py-28">
      <Container>
        <Reveal className="mb-12 max-w-[640px]">
          <Eyebrow>Vorgehen</Eyebrow>
          <h2 className="text-[2.1rem] leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.7rem] lg:text-[3.4rem]">
            So läuft die Zusammenarbeit ab.
          </h2>
        </Reveal>

        <Reveal>
          <div className="border-t border-hairline">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="grid grid-cols-[56px_1fr] gap-6 border-b border-hairline py-8 transition-colors duration-200 hover:bg-white/[0.015] sm:grid-cols-[64px_1fr] sm:gap-8"
              >
                <span className="pt-[3px] font-mono text-[13px] tracking-[1.2px] text-gold">
                  {s.n}
                </span>
                <div>
                  <h3 className="mb-1 text-[19px] font-normal text-ink">
                    {s.title}
                  </h3>
                  <p className="max-w-[56ch] text-[15px] text-body-mid">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
