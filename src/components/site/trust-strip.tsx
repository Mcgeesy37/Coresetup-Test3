import { Container } from "./container";

export function TrustStrip() {
  return (
    <section className="border-b border-hairline-soft py-8">
      <Container className="flex flex-wrap items-center justify-center gap-3 text-center">
        <span aria-hidden className="text-sm tracking-[2px] text-gold">
          ★★★★★
        </span>
        <p className="text-sm leading-relaxed text-body-mid">
          <strong className="font-normal text-gold">5.0 bei Google</strong>,
          aus 12 Bewertungen. Ein fester Ansprechpartner für Design, Hosting,
          Sicherheit und Support.
        </p>
      </Container>
    </section>
  );
}
