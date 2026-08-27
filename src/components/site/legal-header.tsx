import Link from "next/link";
import { Container } from "./container";
import { Button } from "@/components/ui/button";

export function LegalHeader() {
  return (
    <header className="h-[76px] border-b border-hairline bg-canvas/85 backdrop-blur-xl">
      <Container className="flex h-full items-center justify-between gap-4">
        <Link
          href="/#top"
          className="inline-flex items-center gap-2.5 text-[16px] tracking-tight text-ink"
        >
          <span className="inline-block h-[22px] w-[22px] rounded-[6px] bg-gradient-to-br from-gold to-gold-deep" />
          CoreSetup Studio
        </Link>
        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-8 text-sm text-body md:flex"
        >
          <Link href="/#leistungen" className="transition-colors hover:text-gold">
            Leistungen
          </Link>
          <Link href="/#preise" className="transition-colors hover:text-gold">
            Preise
          </Link>
          <Link href="/#kontakt" className="transition-colors hover:text-gold">
            Kontakt
          </Link>
        </nav>
        <Link href="/#kontakt">
          <Button variant="outline" size="sm">
            Projekt anfragen
          </Button>
        </Link>
      </Container>
    </header>
  );
}
