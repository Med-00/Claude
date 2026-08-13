import { PLANS } from '../../data/content.js';
import Button from '../ui/Button.jsx';
import { Check } from '../ui/Icons.jsx';
import { Band, SectionHeading } from '../ui/primitives.jsx';
import Reveal from '../ui/Reveal.jsx';

/**
 * Healthcare plans.
 *
 * Kept away from SaaS pricing-table conventions: no strikethrough anchoring,
 * no countdown, no "save 20%" flash. In healthcare the persuasive move is
 * legibility — a clear price, what is included, and nothing that implies the
 * user should hurry a decision about their own care.
 *
 * The featured plan is raised with a border and a label rather than by scaling
 * it up: a taller middle card would break the row's baseline and make the two
 * outer plans read as diminished rather than simply different.
 */
export default function Pricing() {
  return (
    <Band id="pricing" tone="mint" aria-labelledby="pricing-title" className="scroll-mt-4">
      <div className="flex flex-col gap-6">
        <SectionHeading
          eyebrow="Membership"
          id="pricing-title"
          title="Flexible & Transparent"
          accent="Pricing"
          support="Choose the plan that suits your healthcare needs. Cancel any time."
        />

        <ul className="grid gap-2.5 sm:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal as="li" key={plan.name} delay={i * 60} className="flex">
              <article
                className={
                  plan.featured
                    ? 'relative flex w-full flex-col gap-3 rounded-card border-2 border-brand-600 bg-white p-4 pt-6 shadow-[var(--shadow-lift)]'
                    : 'card-hover relative flex w-full flex-col gap-3 rounded-card border border-line bg-white p-4 pt-6'
                }
              >
                {plan.badge ? (
                  <span className="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-sm bg-brand-600 px-3 py-1 text-[0.625rem] font-semibold tracking-wide text-white uppercase">
                    {plan.badge}
                  </span>
                ) : null}

                <div className="flex flex-col gap-1 text-center">
                  <h3 className="text-[0.875rem] font-semibold text-ink">{plan.name}</h3>
                  <p className="flex items-baseline justify-center gap-0.5">
                    <span className="text-[0.9375rem] font-semibold text-brand-700">$</span>
                    <span className="tnum text-[1.75rem] leading-none font-bold tracking-[-0.03em] text-brand-700">
                      {plan.price}
                    </span>
                    <span className="text-[0.75rem] font-medium text-muted">/mo</span>
                  </p>
                  <p className="text-[0.6875rem] leading-relaxed text-muted">{plan.summary}</p>
                </div>

                <ul className="flex flex-1 flex-col gap-1.5 border-t border-line pt-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-1.5">
                      <span className="mt-0.5 inline-flex size-3.5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                        <Check className="size-2.5" />
                      </span>
                      <span className="text-[0.75rem] leading-snug text-body">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#appointment"
                  variant={plan.featured ? 'primary' : 'outline'}
                  size="sm"
                  block
                >
                  {plan.cta}
                </Button>
              </article>
            </Reveal>
          ))}
        </ul>

        <p className="text-meta text-center">
          Illustrative pricing for this demo. Emergency treatment is never gated behind a plan.
        </p>
      </div>
    </Band>
  );
}
