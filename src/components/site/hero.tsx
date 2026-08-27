"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "./eyebrow";
import { Container } from "./container";

const EASE = [0.16, 1, 0.3, 1] as const;

const copyVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: 0.08 * i },
  }),
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pb-16 pt-[calc(76px+24px)] md:min-h-[92vh]"
    >
      <Container className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-8">
        <div className="relative z-10 max-w-[560px]">
          <motion.div
            custom={0}
            initial={reduceMotion ? undefined : "hidden"}
            animate={reduceMotion ? undefined : "visible"}
            variants={copyVariants}
          >
            <Eyebrow>CoreSetup Studio &middot; Berlin</Eyebrow>
          </motion.div>

          <motion.h1
            custom={1}
            initial={reduceMotion ? undefined : "hidden"}
            animate={reduceMotion ? undefined : "visible"}
            variants={copyVariants}
            className="text-[2.6rem] font-normal leading-[1.05] tracking-[-0.025em] text-ink sm:text-[3.4rem] lg:text-[4.1rem]"
          >
            Websites ohne Vergleich.
          </motion.h1>

          <motion.p
            custom={2}
            initial={reduceMotion ? undefined : "hidden"}
            animate={reduceMotion ? undefined : "visible"}
            variants={copyVariants}
            className="mt-6 max-w-[46ch] text-[1.1rem] leading-relaxed text-body sm:text-[1.25rem]"
          >
            Premium-Websites für Unternehmen, die den Unterschied sofort sehen
            wollen: Design, Hosting, Sicherheit und Support aus einer Hand.
          </motion.p>

          <motion.div
            custom={3}
            initial={reduceMotion ? undefined : "hidden"}
            animate={reduceMotion ? undefined : "visible"}
            variants={copyVariants}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#kontakt">
              <Button variant="primary">Projekt anfragen</Button>
            </a>
            <a href="#leistungen">
              <Button variant="outline">Leistungen ansehen</Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <Card className="relative aspect-square w-full overflow-hidden border-hairline bg-canvas-card/80 md:aspect-[4/5] lg:aspect-square">
            <Spotlight
              className="-top-20 left-0 md:-top-10 md:left-32"
              size={340}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(201_169_97_/_0.14),transparent_60%)]" />
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
