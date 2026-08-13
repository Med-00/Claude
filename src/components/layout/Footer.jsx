import { BRAND, FOOTER_LINKS } from '../../data/content.js';
import { Facebook, Instagram, LinkedIn, Logomark, Mail, MapPin, Phone, Twitter } from '../ui/Icons.jsx';

const SOCIALS = [
  { label: 'Facebook', href: '#contact', icon: Facebook },
  { label: 'Twitter', href: '#contact', icon: Twitter },
  { label: 'Instagram', href: '#contact', icon: Instagram },
  { label: 'LinkedIn', href: '#contact', icon: LinkedIn },
];

/**
 * Footer.
 *
 * The darkest surface on the page, closing the right sheet. Dense but
 * structured: identity + contact on one edge, two link columns on the other.
 * Interactive elements pick up a light green tint on hover so the footer
 * stays legible without inventing a second accent.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" aria-labelledby="footer-title" className="bg-navy-950 text-white/70">
      <h2 id="footer-title" className="sr-only">
        Contact and quick links
      </h2>

      <div className="band band-y grid gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
        {/* Identity */}
        <div className="flex flex-col gap-4">
          <a href="#top" className="flex items-center gap-2.5 no-underline" aria-label="Meridian Health — back to top">
            <Logomark className="size-8 text-brand-500" />
            <span className="flex flex-col leading-none">
              <span className="text-[0.9375rem] font-bold tracking-[-0.02em] text-white">
                {BRAND.name}
              </span>
              <span className="mt-0.5 text-[0.625rem] font-medium text-white/40">{BRAND.tagline}</span>
            </span>
          </a>

          <p className="max-w-[30ch] text-[0.8125rem] leading-relaxed text-white/55">
            {BRAND.tagline.charAt(0).toUpperCase() + BRAND.tagline.slice(1)} — a
            full-service hospital serving the Bay Area since {BRAND.since}.
          </p>

          <ul className="flex items-center gap-2">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="inline-flex size-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/70 transition-colors duration-200 ease-out hover:border-brand-500/40 hover:bg-brand-500/10 hover:text-brand-300"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <nav key={heading} aria-label={heading}>
            <h3 className="text-[0.75rem] font-semibold tracking-wide text-white uppercase">
              {heading}
            </h3>
            <ul className="mt-3.5 flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-block rounded-xs text-[0.8125rem] text-white/60 no-underline transition-colors duration-150 ease-out hover:text-brand-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Contact */}
        <div className="flex flex-col gap-3.5">
          <h3 className="text-[0.75rem] font-semibold tracking-wide text-white uppercase">
            Contact
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-400" />
              <span className="text-[0.8125rem] leading-relaxed text-white/60">
                {BRAND.address[0]}
                <br />
                {BRAND.address[1]}
              </span>
            </li>
            <li>
              <a
                href={BRAND.phoneHref}
                className="flex items-center gap-2.5 rounded-xs text-[0.8125rem] text-white/60 no-underline transition-colors duration-150 ease-out hover:text-brand-300"
              >
                <Phone className="size-4 shrink-0 text-brand-400" />
                <span className="tnum">{BRAND.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2.5 rounded-xs text-[0.8125rem] text-white/60 no-underline transition-colors duration-150 ease-out hover:text-brand-300"
              >
                <Mail className="size-4 shrink-0 text-brand-400" />
                {BRAND.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="inline-flex size-4 shrink-0 items-center justify-center text-brand-400">
                <GlobeDot />
              </span>
              <span className="text-[0.8125rem] text-white/60">{BRAND.website}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="band flex flex-col items-start justify-between gap-1 py-5 sm:flex-row sm:items-center">
          <p className="text-[0.75rem] text-white/40">
            © {year} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-[0.6875rem] text-white/30">
            Demo site — all content is fictional.
          </p>
        </div>
      </div>
    </footer>
  );
}

function GlobeDot() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-4" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.6 12h16.8M12 3.5c2.2 2.4 3.3 5.3 3.3 8.5s-1.1 6.1-3.3 8.5c-2.2-2.4-3.3-5.3-3.3-8.5S9.8 5.9 12 3.5Z" />
    </svg>
  );
}
