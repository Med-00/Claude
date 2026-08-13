/**
 * Icon set — inline SVG, single consistent family.
 *
 * One stroke weight (1.6), one 24px grid, `currentColor` throughout, so icons
 * inherit type color and never need a second palette. Inline beats an icon
 * dependency here: ~30 glyphs ship as markup with no runtime, no font load,
 * and no layout shift.
 *
 * Decorative by default (`aria-hidden`) — the adjacent text is the label.
 * Pass a `title` only when an icon is the sole carrier of meaning.
 */

function Svg({ title, children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : 'true'}
      role={title ? 'img' : undefined}
      focusable="false"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

/* --- Brand ---------------------------------------------------------------- */

export function Logomark({ className = '', ...props }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false" {...props}>
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        d="M16 7.5c-1 2.6-2.6 4.2-5.2 5.2 2.6 1 4.2 2.6 5.2 5.2 1-2.6 2.6-4.2 5.2-5.2-2.6-1-4.2-2.6-5.2-5.2Z"
        fill="#fff"
      />
      <path d="M14.7 19.9h2.6v5.1h-2.6z" fill="#fff" opacity=".8" />
    </svg>
  );
}

/* --- Medical specialties -------------------------------------------------- */

export const Heart = (p) => (
  <Svg {...p}>
    <path d="M20.4 5.6a5 5 0 0 0-7.1 0l-1.3 1.3-1.3-1.3a5 5 0 1 0-7.1 7.1l8.4 8.4 8.4-8.4a5 5 0 0 0 0-7.1Z" />
  </Svg>
);

export const Brain = (p) => (
  <Svg {...p}>
    <path d="M12 5.5a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0-1.5 4.5A2.5 2.5 0 0 0 6 14.5a2.5 2.5 0 0 0 3 3.9 2.5 2.5 0 0 0 3 .1Z" />
    <path d="M12 5.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 1.5 4.5A2.5 2.5 0 0 1 18 14.5a2.5 2.5 0 0 1-3 3.9 2.5 2.5 0 0 1-3 .1Z" />
    <path d="M12 5.5v13" />
  </Svg>
);

export const Bone = (p) => (
  <Svg {...p}>
    <path d="M8.5 15.5 15.5 8.5" />
    <path d="M6.8 13.8a2.4 2.4 0 1 0-3-3 2.4 2.4 0 0 0 .6 3.6 2.4 2.4 0 0 0 3.6.6 2.4 2.4 0 0 0-1.2-1.2Z" />
    <path d="M17.2 10.2a2.4 2.4 0 1 0 3 3 2.4 2.4 0 0 0-.6-3.6 2.4 2.4 0 0 0-3.6-.6 2.4 2.4 0 0 0 1.2 1.2Z" />
  </Svg>
);

export const Baby = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="9" r="4.2" />
    <path d="M10.4 8.6h.01M13.6 8.6h.01" />
    <path d="M10.8 10.8a2 2 0 0 0 2.4 0" />
    <path d="M5.5 20.5a6.5 6.5 0 0 1 13 0" />
  </Svg>
);

export const Bloom = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="8.5" r="3.5" />
    <path d="M12 12v8.5M9.2 17.6h5.6" />
  </Svg>
);

export const Ambulance = (p) => (
  <Svg {...p}>
    <path d="M3 7.5h10.5v9H3z" />
    <path d="M13.5 10.5H18l3 3v3h-7.5z" />
    <circle cx="7" cy="18" r="1.8" />
    <circle cx="17" cy="18" r="1.8" />
    <path d="M8.2 12h2.6M9.5 10.7v2.6" />
  </Svg>
);

/* --- Value / trust -------------------------------------------------------- */

export const Stethoscope = (p) => (
  <Svg {...p}>
    <path d="M5.5 4v4.5a4 4 0 0 0 8 0V4" />
    <path d="M5.5 4h-1M13.5 4h1" />
    <path d="M9.5 12.5v2a5 5 0 0 0 10 0v-1" />
    <circle cx="19.5" cy="11" r="2" />
  </Svg>
);

export const Building = (p) => (
  <Svg {...p}>
    <path d="M4 20.5V6.2a1 1 0 0 1 .7-1l6-1.9a1 1 0 0 1 1.3 1v16.2" />
    <path d="M12 9.5h6.8a1 1 0 0 1 1 1v10H4" />
    <path d="M7 9h1.5M7 12.5h1.5M7 16h1.5M15 13.5h1.5M15 17h1.5" />
  </Svg>
);

export const Clock = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.2V12l3.2 2" />
  </Svg>
);

export const Wallet = (p) => (
  <Svg {...p}>
    <path d="M20 8.5H5.5A1.5 1.5 0 0 1 4 7v0a1.5 1.5 0 0 1 1.5-1.5H18" />
    <path d="M4 7v10.5a2 2 0 0 0 2 2h13a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1" />
    <circle cx="16.5" cy="13.5" r="1.2" />
  </Svg>
);

export const ShieldCheck = (p) => (
  <Svg {...p}>
    <path d="M12 3.5 5 6.2v5c0 4.3 2.9 8.1 7 9.3 4.1-1.2 7-5 7-9.3v-5Z" />
    <path d="m9.2 11.8 2 2 3.6-3.8" />
  </Svg>
);

export const Sparkle = (p) => (
  <Svg {...p}>
    <path d="M12 4.2c-.9 2.9-2.3 4.3-5.2 5.2 2.9.9 4.3 2.3 5.2 5.2.9-2.9 2.3-4.3 5.2-5.2-2.9-.9-4.3-2.3-5.2-5.2Z" />
    <path d="M18.4 15.2c-.4 1.3-1 1.9-2.3 2.3 1.3.4 1.9 1 2.3 2.3.4-1.3 1-1.9 2.3-2.3-1.3-.4-1.9-1-2.3-2.3Z" />
  </Svg>
);

export const UserHeart = (p) => (
  <Svg {...p}>
    <circle cx="10" cy="8" r="3.6" />
    <path d="M3.8 20.2a6.2 6.2 0 0 1 10.3-4.6" />
    <path d="M18.2 21c1.6-1.1 3.3-2.5 3.3-4.2a1.9 1.9 0 0 0-3.3-1.3 1.9 1.9 0 0 0-3.3 1.3c0 1.7 1.7 3.1 3.3 4.2Z" />
  </Svg>
);

export const Microscope = (p) => (
  <Svg {...p}>
    <path d="M9.5 15.5 7 13l5-5 2.5 2.5a3.5 3.5 0 0 1-5 5Z" />
    <path d="m12.8 5.2 1.4-1.4 5.5 5.5-1.4 1.4" />
    <path d="M6 20.5h13M8.5 20.5A6 6 0 0 1 14 14" />
  </Svg>
);

/* --- Interface ------------------------------------------------------------ */

export const Check = (p) => (
  <Svg {...p}>
    <path d="m5.5 12.5 4 4 9-9" />
  </Svg>
);

export const CheckCircle = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m8.4 12.2 2.4 2.4 4.8-5" />
  </Svg>
);

export const ArrowRight = (p) => (
  <Svg {...p}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </Svg>
);

export const ChevronDown = (p) => (
  <Svg {...p}>
    <path d="m6 9.5 6 6 6-6" />
  </Svg>
);

export const Phone = (p) => (
  <Svg {...p}>
    <path d="M8.4 4.5H5.2a1.7 1.7 0 0 0-1.7 1.9c.6 5.6 4.6 11 10.1 12.9a1.7 1.7 0 0 0 2.2-1.6v-2.9l-3.4-1.2-1.5 1.8a12.6 12.6 0 0 1-4.6-5.4l1.9-1.4Z" />
  </Svg>
);

export const Mail = (p) => (
  <Svg {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="m3.6 7 7.4 5.4a1.7 1.7 0 0 0 2 0L20.4 7" />
  </Svg>
);

export const MapPin = (p) => (
  <Svg {...p}>
    <path d="M12 21c4-4.2 6-7.4 6-9.9a6 6 0 1 0-12 0C6 13.6 8 16.8 12 21Z" />
    <circle cx="12" cy="11" r="2.3" />
  </Svg>
);

export const Globe = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.6 12h16.8M12 3.5c2.2 2.4 3.3 5.3 3.3 8.5S14.2 18.1 12 20.5c-2.2-2.4-3.3-5.3-3.3-8.5S9.8 5.9 12 3.5Z" />
  </Svg>
);

export const Calendar = (p) => (
  <Svg {...p}>
    <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
    <path d="M3.5 10h17M8.5 3.5v4M15.5 3.5v4" />
  </Svg>
);

export const Menu = (p) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const Close = (p) => (
  <Svg {...p}>
    <path d="m6.5 6.5 11 11M17.5 6.5l-11 11" />
  </Svg>
);

export const Play = ({ className = '', ...p }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false" {...p}>
    <path d="M9 6.8a1 1 0 0 1 1.5-.87l7.2 4.2a1 1 0 0 1 0 1.74l-7.2 4.2A1 1 0 0 1 9 15.2Z" />
  </svg>
);

export const Star = ({ className = '', ...p }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false" {...p}>
    <path d="m12 3.6 2.6 5.3 5.9.85-4.25 4.15 1 5.85L12 17l-5.25 2.75 1-5.85L3.5 9.75l5.9-.85Z" />
  </svg>
);

export const Quote = ({ className = '', ...p }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false" {...p}>
    <path d="M9.4 5.5C6.3 7 4.5 9.7 4.5 13.2c0 3.2 1.8 5.3 4.3 5.3 2 0 3.6-1.5 3.6-3.5 0-1.9-1.3-3.3-3.1-3.3-.4 0-.8.05-1 .15.4-1.9 1.9-3.6 4-4.6Zm9.2 0c-3.1 1.5-4.9 4.2-4.9 7.7 0 3.2 1.8 5.3 4.3 5.3 2 0 3.6-1.5 3.6-3.5 0-1.9-1.3-3.3-3.1-3.3-.4 0-.8.05-1 .15.4-1.9 1.9-3.6 4-4.6Z" />
  </svg>
);

/* --- Social --------------------------------------------------------------- */

export const Facebook = ({ className = '', ...p }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false" {...p}>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3-.04-1.3-.13-2.45-.13-2.4 0-4.05 1.47-4.05 4.18V9.9H7.5V13h2.7v8Z" />
  </svg>
);

export const Twitter = ({ className = '', ...p }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false" {...p}>
    <path d="M17.2 3.8h2.9l-6.3 7.2 7.4 9.8h-5.8l-4.5-5.9-5.2 5.9H2.8l6.7-7.7L2.4 3.8h5.9l4.1 5.4Zm-1 14.6h1.6L7.9 5.4H6.2Z" />
  </svg>
);

export const Instagram = ({ className = '', ...p }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true" focusable="false" {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="3.8" />
    <circle cx="17.1" cy="6.9" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const LinkedIn = ({ className = '', ...p }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false" {...p}>
    <path d="M6.94 8.5H4.2V20h2.74ZM5.57 3.9a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM19.8 13.4c0-3-1.6-4.4-3.74-4.4a3.2 3.2 0 0 0-2.92 1.6V8.5H10.4V20h2.74v-6.1c0-1.6.3-3.16 2.3-3.16 1.96 0 1.98 1.84 1.98 3.26V20h2.74Z" />
  </svg>
);
