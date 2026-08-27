import type { Metadata } from "next";
import { LegalHeader } from "@/components/site/legal-header";
import { LegalFooter } from "@/components/site/legal-footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung - CoreSetup Studio",
  robots: { index: false, follow: false },
};

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-[8px] bg-gold/[0.14] px-[0.4em] py-[0.05em] text-[0.85em] text-gold-bright">
      {children}
    </span>
  );
}

export default function DatenschutzPage() {
  return (
    <>
      <LegalHeader />
      <main className="mx-auto max-w-[720px] px-5 pb-[6.5rem] pt-16 sm:px-8">
        <h1 className="text-[2.1rem] leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.7rem] lg:text-[3.4rem]">
          Datenschutzerklärung
        </h1>

        <h2 className="mb-3 mt-9 text-[21px] font-normal text-ink">
          1. Verantwortlicher
        </h2>
        <p className="text-[15px] leading-relaxed text-body">
          <Placeholder>
            [Platzhalter: vollständiger Name / Firmenname, Anschrift]
          </Placeholder>
          <br />
          E-Mail:{" "}
          <a
            href="mailto:info@coresetup.studio"
            className="text-gold underline"
          >
            info@coresetup.studio
          </a>
        </p>

        <h2 className="mb-3 mt-9 text-[21px] font-normal text-ink">2. Hosting</h2>
        <p className="text-[15px] leading-relaxed text-body">
          Diese Website wird bei{" "}
          <Placeholder>
            [Platzhalter: Hosting-Anbieter, z. B. Vercel, Hetzner, IONOS]
          </Placeholder>{" "}
          gehostet. Der Hosting-Anbieter erhebt in sogenannten
          Server-Logfiles automatisch Informationen, die dein Browser
          übermittelt, u. a. Browsertyp, verwendetes Betriebssystem,
          Referrer-URL, Hostname des zugreifenden Rechners und Uhrzeit der
          Serveranfrage.
        </p>

        <h2 className="mb-3 mt-9 text-[21px] font-normal text-ink">
          3. Kontaktformular
        </h2>
        <p className="text-[15px] leading-relaxed text-body">
          Wenn du uns über das Kontaktformular schreibst, werden die von dir
          angegebenen Daten (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung
          deiner Anfrage und für Rückfragen bei uns gespeichert.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
          Anfrage) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
          der Bearbeitung von Anfragen).
        </p>
        <p className="text-[13px] leading-relaxed text-body">
          Hinweis: Das Formular auf dieser Seite ist aktuell ein Platzhalter
          ohne angebundenes Backend. Sobald ein echter Formular-Dienst (z. B.
          Formspree, eigener Server) eingebunden ist, muss dieser Abschnitt
          entsprechend ergänzt werden (Auftragsverarbeiter, Speicherort,
          Löschfristen).
        </p>

        <h2 className="mb-3 mt-9 text-[21px] font-normal text-ink">
          4. Webanalyse
        </h2>
        <p className="text-[15px] leading-relaxed text-body">
          <Placeholder>
            [Platzhalter: Falls ein Analyse-Tool wie Google Analytics,
            Plausible oder Matomo eingesetzt wird, hier Anbieter, Zweck,
            Rechtsgrundlage und ggf. Cookie-Consent-Mechanismus ergänzen.]
          </Placeholder>
        </p>

        <h2 className="mb-3 mt-9 text-[21px] font-normal text-ink">
          5. Cookies
        </h2>
        <p className="text-[15px] leading-relaxed text-body">
          <Placeholder>
            [Platzhalter: Auflisten, welche Cookies tatsächlich gesetzt
            werden, technisch notwendige vs. optionale, und
            Consent-Banner-Verhalten beschreiben.]
          </Placeholder>
        </p>

        <h2 className="mb-3 mt-9 text-[21px] font-normal text-ink">
          6. Deine Rechte
        </h2>
        <p className="text-[15px] leading-relaxed text-body">
          Du hast jederzeit das Recht auf:
        </p>
        <ul className="mt-2 space-y-1.5">
          {[
            "Auskunft über die bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)",
            "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
            "Löschung deiner Daten (Art. 17 DSGVO)",
            "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
            "Datenübertragbarkeit (Art. 20 DSGVO)",
            "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
          ].map((li) => (
            <li
              key={li}
              className="relative pl-[1.1rem] text-[15px] leading-relaxed text-body before:absolute before:left-0 before:text-gold before:content-['-']"
            >
              {li}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[15px] leading-relaxed text-body">
          Zudem steht dir ein Beschwerderecht bei einer
          Datenschutz-Aufsichtsbehörde zu, etwa bei{" "}
          <Placeholder>
            [Platzhalter: zuständige Landesdatenschutzbehörde, z. B. Berliner
            Beauftragte für Datenschutz und Informationsfreiheit]
          </Placeholder>
          .
        </p>

        <p className="mt-10 text-[0.82rem] text-body-faint">
          Diese Datenschutzerklärung ist eine Vorlage und deckt noch nicht
          alle tatsächlich eingesetzten Dienste ab. Bitte alle mit{" "}
          <Placeholder>[Platzhalter]</Placeholder> markierten Stellen
          vervollständigen und im Zweifel rechtlich prüfen lassen, bevor die
          Website live geht.
        </p>
      </main>
      <LegalFooter />
    </>
  );
}
