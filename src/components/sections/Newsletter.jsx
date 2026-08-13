import { useState } from 'react';
import { ArrowRight, CheckCircle, Mail } from '../ui/Icons.jsx';
import { Band } from '../ui/primitives.jsx';

/**
 * Newsletter.
 *
 * One field, one button, one promise about frequency. Every extra element in a
 * subscribe form costs conversions, so the illustration is the only decoration
 * and it is drawn in SVG rather than loaded as an image.
 *
 * The success state replaces the form in place and is announced via
 * `role="status"` — a polite live region, so it does not interrupt whatever a
 * screen reader user is currently hearing.
 */
export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // Demo only — no data leaves the browser.
    setSubscribed(true);
  }

  return (
    <Band tone="brand" aria-labelledby="newsletter-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-16 size-64 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
        <div className="flex w-full flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <h2 id="newsletter-title" className="heading-section text-white">
              Subscribe to Our Newsletter
            </h2>
            <p className="max-w-[44ch] text-[0.8125rem] text-white/70">
              Practical health guidance from our clinicians, once a month. No marketing, and you
              can unsubscribe in one click.
            </p>
          </div>

          {subscribed ? (
            <div
              role="status"
              className="flex items-center gap-2.5 rounded-md bg-white/12 px-3.5 py-3 ring-1 ring-white/20 ring-inset"
            >
              <CheckCircle className="size-4 shrink-0 text-white" />
              <p className="text-[0.8125rem] text-white">
                You’re subscribed. Look out for the next issue.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
              <div className="relative flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <Mail
                  className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-white/50"
                  aria-hidden="true"
                />
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="h-11 w-full rounded-md border border-white/20 bg-white/10 pr-3 pl-9 text-[0.8125rem] text-white transition-colors duration-200 ease-out placeholder:text-white/45 hover:border-white/35 focus-visible:border-white focus-visible:outline-none"
                />
              </div>
              <button
                type="submit"
                className="press inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-md bg-white px-5 text-[0.8125rem] font-semibold text-brand-700 transition-colors duration-200 ease-out hover:bg-brand-50"
              >
                Subscribe
                <ArrowRight className="size-3.5" />
              </button>
            </form>
          )}
        </div>

        <EnvelopeArt />
      </div>
    </Band>
  );
}

/** Decorative envelope. Drawn rather than loaded — no request, always crisp. */
function EnvelopeArt() {
  return (
    <svg
      viewBox="0 0 160 120"
      className="hidden w-36 shrink-0 sm:block lg:w-40"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="16" y="34" width="128" height="78" rx="8" fill="#ffffff" opacity="0.95" />
      <path d="M16 42 76 84a8 8 0 0 0 9 0l59-42" fill="none" stroke="#0a6350" strokeWidth="3" />
      <rect x="42" y="8" width="76" height="46" rx="6" fill="#eefaf5" stroke="#ade4cf" strokeWidth="2" />
      <path d="M54 24h52M54 34h34" stroke="#43b492" strokeWidth="3" strokeLinecap="round" />
      <circle cx="128" cy="26" r="13" fill="#0d7d61" />
      <path d="m122 26 4 4 8-8.5" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
