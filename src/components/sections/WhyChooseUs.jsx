import { BENEFITS } from '../../data/content.js';
import { Band, IconTile, SectionHeading } from '../ui/primitives.jsx';
import Reveal from '../ui/Reveal.jsx';

/**
 * Why choose us.
 *
 * Opens the right column. Deliberately the lightest section on the page — no
 * cards, no borders, just four icon-led points — so the right stream starts
 * quietly and lets the pricing table below it carry the visual weight.
 */
export default function WhyChooseUs() {
  return (
    <Band aria-labelledby="why-title">
      <div className="flex flex-col gap-6">
        <SectionHeading
          eyebrow="Why Meridian"
          id="why-title"
          title="Why Choose Our"
          accent="Hospital?"
          support="The reasons families in this region have trusted us for three decades."
        />

        <ul className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4">
          {BENEFITS.map((benefit, i) => (
            <Reveal
              as="li"
              key={benefit.title}
              delay={i * 50}
              className="flex flex-col items-center gap-2 text-center"
            >
              <IconTile icon={benefit.icon} tone="ring" size="lg" />
              <h3 className="text-[0.875rem] font-semibold text-ink">{benefit.title}</h3>
              <p className="text-[0.75rem] leading-relaxed text-body">{benefit.blurb}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Band>
  );
}
