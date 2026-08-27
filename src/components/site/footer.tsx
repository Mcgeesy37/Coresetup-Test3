import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="py-16 pb-8 md:py-20">
      <Container>
        <div className="mb-12 grid gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-[1.2px] text-body-mid">
              CoreSetup Studio
            </h4>
            <span className="text-sm text-body">
              Premium Websites, Hosting, Sicherheit und Support für
              Unternehmen in Berlin.
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-[1.2px] text-body-mid">
              Navigation
            </h4>
            <a href="#leistungen" className="text-sm text-body transition-colors hover:text-gold">
              Leistungen
            </a>
            <a href="#projekte" className="text-sm text-body transition-colors hover:text-gold">
              Projekte
            </a>
            <a href="#preise" className="text-sm text-body transition-colors hover:text-gold">
              Preise
            </a>
            <a href="#kontakt" className="text-sm text-body transition-colors hover:text-gold">
              Kontakt
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-[1.2px] text-body-mid">
              Kontakt
            </h4>
            <a
              href="mailto:info@coresetup.studio"
              className="text-sm text-body transition-colors hover:text-gold"
            >
              info@coresetup.studio
            </a>
            <span className="text-sm text-body">Berlin, Deutschland</span>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-[1.2px] text-body-mid">
              Rechtliches
            </h4>
            <Link href="/impressum" className="text-sm text-body transition-colors hover:text-gold">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-sm text-body transition-colors hover:text-gold">
              Datenschutz
            </Link>
          </div>
        </div>
        <div className="border-t border-hairline pt-8 text-[13px] text-body-faint">
          © {new Date().getFullYear()} CoreSetup Studio
        </div>
      </Container>
    </footer>
  );
}
