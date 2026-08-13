import { APP_BADGES, APP_FEATURES } from '../../data/content.js';
import { Check } from '../ui/Icons.jsx';
import { Band } from '../ui/primitives.jsx';
import PhoneMockup from '../ui/PhoneMockup.jsx';
import Reveal from '../ui/Reveal.jsx';

/**
 * App promotion.
 *
 * The phone is drawn in markup rather than shown as a screenshot: it stays
 * sharp at any pixel density, costs no image request, and — unlike a stock
 * photo of a phone — shows this product's actual interface.
 */
export default function AppPromotion() {
  return (
    <Band tone="navy" aria-labelledby="app-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-brand-500/15 blur-3xl"
      />

      <div className="relative grid items-center gap-6 sm:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col gap-1.5">
            <h2 id="app-title" className="heading-section text-white">
              Your Health, In Your Hand
            </h2>
            <p className="text-[0.875rem] text-white/65">
              Everything from your last visit to your next appointment, in one app.
            </p>
          </div>

          <ul className="grid gap-1.5">
            {APP_FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-400/20 text-brand-300">
                  <Check className="size-2.5" />
                </span>
                <span className="text-[0.8125rem] text-white/80">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-1">
            {APP_BADGES.map((badge) => (
              <a
                key={badge.store}
                href="#app"
                className="press inline-flex items-center gap-2.5 rounded-md border border-white/15 bg-white/[0.07] px-3.5 py-2 no-underline transition-colors duration-200 ease-out hover:bg-white/[0.12]"
              >
                <StoreGlyph store={badge.store} />
                <span className="flex flex-col leading-none">
                  <span className="text-[0.5625rem] text-white/55">{badge.prefix}</span>
                  <span className="mt-0.5 text-[0.8125rem] font-semibold text-white">
                    {badge.store}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <Reveal className="flex justify-center sm:justify-end">
          <PhoneMockup />
        </Reveal>
      </div>
    </Band>
  );
}

function StoreGlyph({ store }) {
  if (store === 'App Store') {
    return (
      <svg viewBox="0 0 24 24" className="size-5 text-white" fill="currentColor" aria-hidden="true">
        <path d="M16.4 12.6c0-2 1.6-3 1.7-3-.9-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7s-1.6-.7-2.6-.7c-1.3 0-2.6.8-3.2 2-1.4 2.4-.4 6 1 8 .7 1 1.5 2 2.5 2s1.3-.6 2.5-.6 1.5.6 2.6.6 1.7-1 2.4-1.9c.7-1.1 1-2.2 1-2.2s-2-.8-2-3.3ZM14.5 6.3c.5-.7.9-1.6.8-2.6-.8 0-1.8.5-2.4 1.2-.5.6-1 1.6-.8 2.5.9.1 1.8-.4 2.4-1.1Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path d="M4.3 3.2c-.2.2-.3.5-.3.9v15.8c0 .4.1.7.3.9l8.4-8.8Z" fill="#4ade80" />
      <path d="m15.6 9-2.9 3 2.9 3 3.4-1.9c.7-.4.7-1.4 0-1.8Z" fill="#facc15" />
      <path d="m4.3 3.2 8.4 8.8 2.9-3-10.3-5.9c-.4-.2-.8-.2-1 .1Z" fill="#f87171" />
      <path d="m4.3 20.8 8.4-8.8 2.9 3-10.3 5.9c-.4.2-.8.2-1-.1Z" fill="#60a5fa" />
    </svg>
  );
}
