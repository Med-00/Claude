import { SERVICES } from '../../data/content.js';
import { ArrowRight } from '../ui/Icons.jsx';
import { Band, IconTile, MoreLink, SectionHeading } from '../ui/primitives.jsx';
import Reveal from '../ui/Reveal.jsx';

/**
 * Medical services.
 *
 * Six cards in a 2-up grid. Each is a link — a department name is something a
 * user expects to click — so the whole card is one target rather than a card
 * with a small "read more" inside it.
 *
 * Hover moves the arrow, not the card. The card itself only changes border and
 * shadow, so a grid of six does not appear to ripple as the cursor crosses it.
 */
export default function Services() {
  return (
    <Band id="services" aria-labelledby="services-title" className="scroll-mt-4">
      <div className="flex flex-col gap-6">
        <SectionHeading
          eyebrow="What we do"
          id="services-title"
          title="Our Medical"
          accent="Services"
          support="Consultant-led departments covering everyday health and complex, specialist treatment."
        />

        <ul className="grid gap-2.5 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal as="li" key={service.name} delay={i * 50}>
              <a
                href="#appointment"
                className="card-hover group flex h-full flex-col gap-2.5 rounded-card border border-line bg-white p-4 no-underline"
              >
                <IconTile icon={service.icon} />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[0.9375rem] font-semibold text-ink">{service.name}</h3>
                  <p className="text-[0.8125rem] leading-relaxed text-body">{service.blurb}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-[0.75rem] font-semibold text-brand-700">
                  Learn more
                  <ArrowRight className="size-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <MoreLink href="#services">View All Services</MoreLink>
      </div>
    </Band>
  );
}
