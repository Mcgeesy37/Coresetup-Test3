import { Container } from "./container";
import {
  WordPressLogo,
  WebflowLogo,
  ShopifyLogo,
  CloudflareLogo,
  GoogleAnalyticsLogo,
  StripeLogo,
} from "./brand-logos";

const LOGOS = [
  { Cmp: WordPressLogo, label: "WordPress" },
  { Cmp: WebflowLogo, label: "Webflow" },
  { Cmp: ShopifyLogo, label: "Shopify" },
  { Cmp: CloudflareLogo, label: "Cloudflare" },
  { Cmp: GoogleAnalyticsLogo, label: "Google Analytics" },
  { Cmp: StripeLogo, label: "Stripe" },
];

export function TechMarquee() {
  const track = [...LOGOS, ...LOGOS];

  return (
    <section className="border-b border-hairline-soft py-14 text-center">
      <Container>
        <p className="text-sm text-body-mid">
          Technologien, mit denen wir arbeiten
        </p>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
          <div className="flex w-max items-center gap-16 animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:w-max">
            {track.map(({ Cmp, label }, i) => (
              <span
                key={`${label}-${i}`}
                role={i < LOGOS.length ? "img" : undefined}
                aria-label={i < LOGOS.length ? label : undefined}
                aria-hidden={i >= LOGOS.length || undefined}
                className="inline-flex shrink-0 text-gold opacity-55 transition-opacity duration-200 hover:opacity-100"
              >
                <Cmp width={26} height={26} />
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
