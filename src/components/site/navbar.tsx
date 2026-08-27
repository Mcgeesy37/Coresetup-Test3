"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#prozess", label: "Vorgehen" },
  { href: "#projekte", label: "Projekte" },
  { href: "#preise", label: "Preise" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-100 h-[76px] transition-all duration-300",
          scrolled
            ? "border-b border-hairline bg-canvas/85 backdrop-blur-xl"
            : "border-b border-transparent bg-canvas/60 backdrop-blur-none"
        )}
      >
        <Container className="flex h-full items-center justify-between gap-4">
          <a
            href="#top"
            className="inline-flex items-center gap-2.5 text-[16px] tracking-tight text-ink"
          >
            <span className="inline-block h-[22px] w-[22px] rounded-[6px] bg-gradient-to-br from-gold to-gold-deep" />
            CoreSetup Studio
          </a>

          <nav
            aria-label="Hauptnavigation"
            className="hidden items-center gap-8 text-sm text-body md:flex"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#kontakt" className="hidden sm:block">
              <Button variant="outline" size="sm">
                Projekt anfragen
              </Button>
            </a>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-hairline text-ink md:hidden"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              aria-controls="mobileNav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </Container>
      </header>

      <div
        id="mobileNav"
        className={cn(
          "fixed inset-x-0 top-[76px] bottom-0 z-90 overflow-y-auto bg-canvas/98 backdrop-blur-md transition-all duration-200 md:hidden",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <nav
          aria-label="Mobile Navigation"
          className="flex flex-col gap-7 px-5 py-10 sm:px-8"
        >
          {[...LINKS, { href: "#kontakt", label: "Kontakt" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[22px] text-ink transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
