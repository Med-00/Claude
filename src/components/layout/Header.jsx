import { useEffect, useId, useRef, useState } from 'react';
import { BRAND, NAV_LINKS } from '../../data/content.js';
import { cx } from '../../lib/cx.js';
import Button from '../ui/Button.jsx';
import { Close, Logomark, Menu, Phone } from '../ui/Icons.jsx';

/**
 * Header.
 *
 * Sits at the top of the left sheet, as in the reference — the navigation is
 * part of the left editorial stream rather than a bar floating above both.
 *
 * The mobile panel is an absolutely-positioned dropdown rather than an
 * in-flow expanding block: it animates on transform/opacity only (no layout
 * cost, no content below it jumping) and scales from the trigger, so it reads
 * as having come out of the menu button. It is a disclosure, not a modal —
 * no focus trap, but Escape closes it and focus returns to the trigger.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    function onPointerDown(event) {
      if (
        !panelRef.current?.contains(event.target) &&
        !triggerRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  return (
    <header className="relative z-30 border-b border-line bg-white">
      <div className="band flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2.5 no-underline"
          aria-label={`${BRAND.name} — home`}
        >
          <Logomark className="size-8 text-brand-600" />
          <span className="flex flex-col leading-none">
            <span className="text-[0.9375rem] font-bold tracking-[-0.02em] text-ink">
              {BRAND.name}
            </span>
            <span className="mt-0.5 text-[0.625rem] font-medium text-muted">{BRAND.tagline}</span>
          </span>
        </a>

        {/* Desktop navigation. Hidden below xl because the left sheet is only
            half the viewport — seven links plus a CTA do not fit honestly. */}
        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="rounded-sm px-2.5 py-2 text-[0.8125rem] font-medium text-body no-underline transition-colors duration-150 ease-out hover:text-brand-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={BRAND.emergencyPhoneHref}
            className="hidden items-center gap-1.5 rounded-sm px-1 py-1 text-[0.75rem] font-semibold text-ink no-underline transition-colors duration-150 ease-out hover:text-brand-700 lg:inline-flex"
          >
            <Phone className="size-3.5 text-brand-600" />
            <span className="tnum">{BRAND.emergencyPhone}</span>
          </a>

          {/* Hidden on the narrowest phones: the logo, CTA and menu button
              together overflow a 390px viewport. The sticky action bar and the
              in-menu button both carry this action there. */}
          <Button href="#appointment" size="sm" className="hidden min-[420px]:inline-flex">
            Book Appointment
          </Button>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="press inline-flex size-9 items-center justify-center rounded-md border border-line-strong text-ink transition-colors duration-150 ease-out hover:border-brand-300 xl:hidden"
          >
            {open ? <Close className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Dropdown panel. Kept mounted so the exit transition can play; made
          inert when closed so it is skipped by tab order and screen readers. */}
      <div
        ref={panelRef}
        id={panelId}
        inert={!open ? '' : undefined}
        className={cx(
          'absolute inset-x-0 top-full origin-top border-b border-line bg-white shadow-[var(--shadow-lift)] xl:hidden',
          'transition-[opacity,transform] duration-200 ease-out',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
        style={{
          transform: open ? 'translateY(0) scale(1)' : 'translateY(-6px) scale(0.98)',
        }}
      >
        <nav aria-label="Mobile" className="band py-4">
          <ul className="grid gap-0.5 sm:grid-cols-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-[0.875rem] font-medium text-ink no-underline transition-colors duration-150 ease-out hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex flex-col gap-2 border-t border-line pt-3 sm:flex-row">
            <Button href="#appointment" size="sm" block onClick={() => setOpen(false)}>
              Book Appointment
            </Button>
            <Button href={BRAND.emergencyPhoneHref} variant="outline" size="sm" block>
              <Phone className="size-4" />
              Emergency
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
