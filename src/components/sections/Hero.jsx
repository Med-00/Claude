import { BRAND, HERO_STATS, HERO_VALUES } from '../../data/content.js';
import Button from '../ui/Button.jsx';
import { ArrowRight, Calendar, ShieldCheck } from '../ui/Icons.jsx';
import Image from '../ui/Image.jsx';
import { Badge } from '../ui/primitives.jsx';
import Reveal from '../ui/Reveal.jsx';

/**
 * Hero.
 *
 * The one section that does not use `Reveal` for its headline: the LCP text
 * must paint immediately, not fade in after an observer fires. Revealing the
 * primary headline would delay the largest contentful paint and make the page
 * feel slower than it is — for no gain, since the user is already looking at it.
 *
 * The floating stat card is a real element in the flow, positioned against the
 * portrait. It does not float on a loop: continuous ambient motion next to the
 * primary CTA competes for attention with the thing we want clicked.
 */
export default function Hero() {
  return (
    <section className="band band-y relative overflow-hidden bg-white" aria-labelledby="hero-title">
      {/* Soft brand wash behind the portrait. Decorative, so it is hidden from
          assistive tech and never carries meaning. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 -z-0 h-[380px] w-[62%] rounded-bl-[120px] bg-gradient-to-b from-brand-50 to-brand-50/0"
      />

      <div className="relative grid items-center gap-6 md:grid-cols-[1.05fr_0.95fr] md:gap-4">
        <div className="flex flex-col items-start gap-5">
          <Badge>
            <ShieldCheck className="size-3.5" />
            Trusted healthcare since {BRAND.since}
          </Badge>

          <h1 id="hero-title" className="display-hero text-ink">
            Better Health.
            <br />
            <span className="text-brand-600">Better Life.</span>
          </h1>

          <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-body">
            Compassionate care, advanced technology and a patient-first approach — brought together
            in one place, so you and your family are looked after for the long term.
          </p>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {HERO_VALUES.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="size-4 text-brand-600" />
                <span className="text-[0.8125rem] font-medium text-ink">{label}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-2.5">
            <Button href="#appointment" size="lg">
              <Calendar className="size-4" />
              Book Appointment
            </Button>
            <Button href="#services" variant="outline" size="lg">
              Explore Services
              <ArrowRight className="size-4" />
            </Button>
          </div>
          {/* Sentinel: the mobile action bar appears once these scroll away. */}
          <span id="hero-cta-anchor" aria-hidden="true" className="block h-px w-px" />
        </div>

        <div className="relative">
          <Image
            name="heroClinician"
            ar="4/5"
            priority
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 40vw, 90vw"
            className="rounded-sheet"
            imgClassName="object-top"
          />

          <div className="absolute -bottom-3 -left-3 flex items-center gap-3 rounded-card border border-line bg-white/95 px-3.5 py-2.5 shadow-[var(--shadow-float)] backdrop-blur-sm sm:-left-5">
            <span className="display-band tnum text-brand-600">98%</span>
            <span className="text-[0.75rem] leading-tight font-medium text-ink">
              Patient
              <br />
              satisfaction
            </span>
          </div>
        </div>
      </div>

      {/* Headline statistics. Revealed as a group with a short stagger — they
          sit below the fold on most viewports, so the motion is affordable. */}
      <ul className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {HERO_STATS.map((stat, i) => (
          <Reveal
            as="li"
            key={stat.label}
            delay={i * 60}
            className="rounded-card border border-line bg-white px-3 py-3.5 text-center"
          >
            <span className="display-band tnum block text-ink">{stat.value}</span>
            <span className="text-meta mt-0.5 block">{stat.label}</span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
