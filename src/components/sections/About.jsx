import { TRUST_POINTS } from '../../data/content.js';
import Button from '../ui/Button.jsx';
import { ArrowRight, Clock } from '../ui/Icons.jsx';
import Image from '../ui/Image.jsx';
import { Band, SectionHeading } from '../ui/primitives.jsx';
import Reveal from '../ui/Reveal.jsx';

/**
 * About / trust.
 *
 * Left-aligned rather than centered: this is prose that needs a reading edge,
 * and the alternation between centered and left-aligned headings is what keeps
 * a long column from reading as one uniform template.
 */
export default function About() {
  return (
    <Band id="about" tone="mint" aria-labelledby="about-title" className="scroll-mt-4">
      <div className="grid items-center gap-6 md:grid-cols-2">
        <Reveal className="relative">
          <Image
            name="careTeam"
            ar="4/3"
            sizes="(min-width: 1024px) 24vw, (min-width: 768px) 45vw, 90vw"
            className="rounded-panel"
          />
          <div className="absolute -right-2 -bottom-3 flex items-center gap-2 rounded-card border border-line bg-white px-3 py-2 shadow-[var(--shadow-float)]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-brand-500 opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-brand-600" />
            </span>
            <span className="text-[0.75rem] font-semibold text-ink">24/7 Emergency Care</span>
          </div>
        </Reveal>

        <div className="flex flex-col items-start gap-4">
          <SectionHeading
            eyebrow="About Meridian"
            id="about-title"
            title="Trusted Care for a"
            accent="Healthier Tomorrow"
            align="start"
          />

          <p className="text-[0.875rem] leading-relaxed text-body">
            Three decades of treating this community has taught us that outcomes follow attention.
            Our consultants work in small teams around each patient, so the person who explains your
            diagnosis is the person who follows your recovery.
          </p>

          <ul className="grid w-full gap-2 sm:grid-cols-2">
            {TRUST_POINTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-white text-brand-700 ring-1 ring-brand-100 ring-inset">
                  <Icon className="size-3.5" />
                </span>
                <span className="text-[0.8125rem] font-medium text-ink">{label}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button href="#specialists">
              Learn More
              <ArrowRight className="size-4" />
            </Button>
            <span className="inline-flex items-center gap-1.5 text-[0.75rem] font-medium text-body">
              <Clock className="size-3.5 text-brand-600" />
              Average wait under 15 minutes
            </span>
          </div>
        </div>
      </div>
    </Band>
  );
}
