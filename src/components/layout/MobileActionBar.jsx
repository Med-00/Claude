import { useEffect, useState } from 'react';
import { BRAND } from '../../data/content.js';
import { cx } from '../../lib/cx.js';
import { Calendar, Phone } from '../ui/Icons.jsx';

/**
 * Mobile action bar.
 *
 * On a phone the two primary healthcare actions — book, and call emergency —
 * are otherwise thousands of pixels apart in a single-column stack. This pins
 * both to the bottom of the viewport once the hero has scrolled away.
 *
 * It appears on scroll rather than on load so it never competes with the
 * hero's own CTAs, and it is `position: fixed` with `translateY` motion only.
 * Mobile-only: on desktop the header CTA is always within reach.
 */
export default function MobileActionBar() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById('hero-cta-anchor');
    if (!sentinel || typeof IntersectionObserver === 'undefined') return undefined;

    // Show the bar exactly when the hero's own buttons leave the viewport,
    // so there is never a moment with two competing sets of primary actions.
    const observer = new IntersectionObserver(
      ([entry]) => setShown(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cx(
        'fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur-md md:hidden',
        'transition-transform duration-300 ease-out',
        'pb-[env(safe-area-inset-bottom)]',
        shown ? 'translate-y-0' : 'translate-y-full',
      )}
      // Hidden from assistive tech while off-screen; the same actions remain
      // reachable in the header and in the page body regardless.
      inert={!shown ? '' : undefined}
    >
      <div className="flex items-center gap-2 px-4 py-2.5">
        <a
          href="#appointment"
          className="press inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md bg-brand-600 text-[0.875rem] font-semibold text-white no-underline"
        >
          <Calendar className="size-4" />
          Book Appointment
        </a>
        <a
          href={BRAND.emergencyPhoneHref}
          aria-label={`Call emergency, ${BRAND.emergencyPhone}`}
          className="press inline-flex size-11 items-center justify-center rounded-md border border-urgent-600/25 bg-urgent-600/10 text-urgent-600 no-underline"
        >
          <Phone className="size-5" />
        </a>
      </div>
    </div>
  );
}
