"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { Container } from "./container";
import { Eyebrow } from "./eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2c-5.523 0-10 4.477-10 10 0 1.766.462 3.482 1.34 5L2 22l5.146-1.35A9.96 9.96 0 0 0 12.04 22c5.523 0 10-4.477 10-10s-4.477-10-10-10Zm5.85 14.2c-.245.687-1.42 1.313-1.96 1.395-.502.075-1.137.107-1.833-.115a16.7 16.7 0 0 1-1.667-.617c-2.94-1.27-4.86-4.223-5.006-4.42-.146-.196-1.196-1.59-1.196-3.033 0-1.442.757-2.152 1.026-2.446.27-.294.586-.368.782-.368.196 0 .392.002.563.01.18.008.422-.068.66.503.245.588.833 2.03.905 2.178.073.147.122.319.024.515-.098.196-.147.319-.293.49-.147.172-.309.383-.44.515-.147.147-.3.306-.13.6.171.294.76 1.253 1.632 2.03 1.121.999 2.066 1.308 2.36 1.455.294.147.466.123.637-.074.171-.196.734-.856.93-1.15.196-.294.392-.245.66-.147.269.098 1.71.807 2.004.954.294.147.49.22.563.343.073.123.073.711-.172 1.398Z" />
    </svg>
  );
}

export function Kontakt() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSent(false), 3200);
    }, 500);
  }

  return (
    <section id="kontakt" className="py-20 md:py-28">
      <Container>
        <Reveal className="mb-12 max-w-[640px]">
          <Eyebrow>Kontakt</Eyebrow>
          <h2 className="text-[2.1rem] leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.7rem] lg:text-[3.4rem]">
            Projekt anfragen.
          </h2>
          <p className="mt-3 text-[1.05rem] leading-relaxed text-body sm:text-[1.25rem]">
            Erzähl uns kurz, worum es geht.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid gap-12 md:gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-6 text-[15px] leading-relaxed text-body">
                Wir melden uns in der Regel innerhalb von 48 Stunden mit einer
                ehrlichen Einschätzung.
              </p>
              <div className="flex flex-col items-start gap-3">
                <a
                  href="mailto:info@coresetup.studio"
                  className="inline-flex items-center gap-2 border-b border-transparent text-[15px] text-gold transition-colors hover:border-gold hover:text-gold-bright"
                >
                  <Mail size={16} /> info@coresetup.studio
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-b border-transparent text-[15px] text-gold transition-colors hover:border-gold hover:text-gold-bright"
                >
                  <WhatsAppIcon width={16} height={16} /> Direkt per WhatsApp
                  schreiben
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="mb-2 block text-[13px] text-body-mid"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-[8px] border border-hairline bg-canvas-soft px-4 py-[13px] text-[15px] text-ink transition-colors focus:border-gold focus:bg-canvas-elevated focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-2 block text-[13px] text-body-mid"
                >
                  E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-[8px] border border-hairline bg-canvas-soft px-4 py-[13px] text-[15px] text-ink transition-colors focus:border-gold focus:bg-canvas-elevated focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="mb-2 block text-[13px] text-body-mid"
                >
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-y rounded-[8px] border border-hairline bg-canvas-soft px-4 py-[13px] text-[15px] text-ink transition-colors focus:border-gold focus:bg-canvas-elevated focus:outline-none"
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full"
              >
                {sent ? "Danke, wir melden uns." : "Projekt anfragen"}
              </Button>
              <p className="mt-4 text-[12px] text-body-faint">
                Dieses Formular ist ein Platzhalter. Bitte an ein echtes
                Formular-Backend (z. B. Formspree, eigenes API-Endpoint)
                anbinden.
              </p>
            </form>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
