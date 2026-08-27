import type { Metadata } from "next";
import { LegalHeader } from "@/components/site/legal-header";
import { LegalFooter } from "@/components/site/legal-footer";

export const metadata: Metadata = {
  title: "Impressum - CoreSetup Studio",
  robots: { index: false, follow: false },
};

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-[8px] bg-gold/[0.14] px-[0.4em] py-[0.05em] text-[0.85em] text-gold-bright">
      {children}
    </span>
  );
}

export default function ImpressumPage() {
  return (
    <>
      <LegalHeader />
      <main className="mx-auto max-w-[720px] px-5 pb-[6.5rem] pt-16 sm:px-8">
        <h1 className="text-[2.1rem] leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.7rem] lg:text-[3.4rem]">
          Impressum
        </h1>

        <h2 className="mb-3 mt-9 text-[21px] font-normal text-ink">
          Angaben gemäß § 5 TMG
        </h2>
        <p className="text-[15px] leading-relaxed text-body">
          <Placeholder>[Platzhalter: vollständiger Name / Firmenname]</Placeholder>
          <br />
          <Placeholder>[Platzhalter: Straße und Hausnummer]</Placeholder>
          <br />
          <Placeholder>[Platzhalter: PLZ und Ort]</Placeholder>
        </p>

        <h2 className="mb-3 mt-9 text-[21px] font-normal text-ink">Kontakt</h2>
        <p className="text-[15px] leading-relaxed text-body">
          E-Mail:{" "}
          <a
            href="mailto:info@coresetup.studio"
            className="text-gold underline"
          >
            info@coresetup.studio
          </a>
          <br />
          Telefon: <Placeholder>[Platzhalter: Telefonnummer]</Placeholder>
        </p>

        <h2 className="mb-3 mt-9 text-[21px] font-normal text-ink">
          Vertreten durch
        </h2>
        <p className="text-[15px] leading-relaxed text-body">
          <Placeholder>[Platzhalter: vertretungsberechtigte Person]</Placeholder>
        </p>

        <h2 className="mb-3 mt-9 text-[21px] font-normal text-ink">
          Registereintrag
        </h2>
        <p className="text-[15px] leading-relaxed text-body">
          Sofern zutreffend:
          <br />
          Registergericht: <Placeholder>[Platzhalter]</Placeholder>
          <br />
          Registernummer: <Placeholder>[Platzhalter]</Placeholder>
        </p>

        <h2 className="mb-3 mt-9 text-[21px] font-normal text-ink">
          Umsatzsteuer-ID
        </h2>
        <p className="text-[15px] leading-relaxed text-body">
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:{" "}
          <Placeholder>[Platzhalter: USt-IdNr., falls vorhanden]</Placeholder>
        </p>

        <h2 className="mb-3 mt-9 text-[21px] font-normal text-ink">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p className="text-[15px] leading-relaxed text-body">
          <Placeholder>[Platzhalter: Name, Anschrift wie oben]</Placeholder>
        </p>

        <h2 className="mb-3 mt-9 text-[21px] font-normal text-ink">
          Streitschlichtung
        </h2>
        <p className="text-[15px] leading-relaxed text-body">
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            ec.europa.eu/consumers/odr
          </a>
          . Wir sind nicht verpflichtet und nicht bereit, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen, sofern hier nicht anders angegeben.
        </p>

        <p className="mt-10 text-[0.82rem] text-body-faint">
          Dieses Impressum ist eine Vorlage und noch nicht rechtsverbindlich.
          Bitte alle mit <Placeholder>[Platzhalter]</Placeholder> markierten
          Angaben durch die echten Unternehmensdaten ersetzen, im Zweifel
          rechtlich prüfen lassen.
        </p>
      </main>
      <LegalFooter />
    </>
  );
}
