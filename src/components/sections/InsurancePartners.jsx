import { INSURERS } from '../../data/content.js';
import { Band, SectionHeading } from '../ui/primitives.jsx';
import Reveal from '../ui/Reveal.jsx';

/**
 * Insurance partners.
 *
 * Kept intentionally quiet: uniform grey wordmarks with a small monogram
 * instead of logos, because fabricated "logos" for fictional insurers would
 * look more like the real thing than we want, and because a strip of busy,
 * colourful logos would fight the palette. A hospital's partner strip should
 * recede.
 *
 * Insurers are fictional — invented names for demo purposes.
 */
export default function InsurancePartners() {
  return (
    <Band tone="field" aria-labelledby="insurers-title">
      <div className="flex flex-col gap-5">
        <SectionHeading
          eyebrow="Accepted insurance"
          id="insurers-title"
          title="Working With Your"
          accent="Insurance"
          support="We work directly with major insurers so you rarely handle a claim yourself."
        />

        <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {INSURERS.map((insurer, i) => (
            <Reveal
              as="li"
              key={insurer.name}
              delay={i * 40}
              className="flex items-center justify-center gap-2 rounded-md border border-line bg-white px-3 py-3"
            >
              <span
                aria-hidden="true"
                className="inline-flex size-6 items-center justify-center rounded-sm bg-brand-50 text-[0.6875rem] font-bold text-brand-700"
              >
                {insurer.mark}
              </span>
              <span className="text-[0.8125rem] font-semibold text-ink/75">{insurer.name}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </Band>
  );
}
