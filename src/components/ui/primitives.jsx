import { cx } from '../../lib/cx.js';
import { Star } from './Icons.jsx';
import Reveal from './Reveal.jsx';

/* -------------------------------------------------------------------------
   Section scaffolding
   Every band in both columns uses these, which is what keeps the vertical
   rhythm identical across two independently-flowing streams.
   ------------------------------------------------------------------------- */

/**
 * A full-width band inside a sheet. `tone` paints the band; the padding scale
 * is fixed so no section can invent its own spacing.
 */
export function Band({
  as: Tag = 'section',
  tone = 'white',
  flush = false,
  grow = false,
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cx(
        'band',
        !flush && 'band-y',
        // Absorbs leftover height so both column sheets end flush.
        grow && 'lg:flex-1',
        tone === 'white' && 'bg-white',
        tone === 'mint' && 'bg-brand-50/70',
        tone === 'field' && 'bg-[#f7f9f8]',
        tone === 'navy' && 'bg-navy-900 text-white/80',
        tone === 'brand' && 'bg-brand-700 text-white/85',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

/**
 * Centered section heading with optional eyebrow and supporting line.
 * `align="start"` for the editorial bands that read left-aligned.
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  support,
  align = 'center',
  id,
  className,
  headingClassName,
}) {
  const centered = align === 'center';
  return (
    <Reveal
      className={cx('flex flex-col gap-1.5', centered ? 'items-center text-center' : 'items-start', className)}
    >
      {eyebrow ? <span className="text-eyebrow text-brand-700">{eyebrow}</span> : null}
      <h2 id={id} className={cx('heading-section text-ink', headingClassName)}>
        {title}
        {accent ? <span className="text-brand-600"> {accent}</span> : null}
      </h2>
      {support ? (
        <p className={cx('text-support max-w-[46ch]', centered && 'mx-auto')}>{support}</p>
      ) : null}
    </Reveal>
  );
}

/* -------------------------------------------------------------------------
   Small display pieces
   ------------------------------------------------------------------------- */

/** Pill badge — trust marks, categories, "Most popular". */
export function Badge({ tone = 'mint', className, children, ...props }) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold',
        tone === 'mint' && 'bg-brand-50 text-brand-700 ring-1 ring-brand-100 ring-inset',
        tone === 'white' && 'bg-white/90 text-navy-900 shadow-[var(--shadow-card)]',
        tone === 'solid' && 'bg-brand-600 text-white',
        tone === 'navy' && 'bg-navy-900 text-white',
        tone === 'urgent' && 'bg-urgent-600/10 text-urgent-600 ring-1 ring-urgent-600/20 ring-inset',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

/**
 * Icon in a soft tile. The one place brand-50 is used as a fill, which keeps
 * the icon language consistent across services, benefits and trust points.
 */
export function IconTile({ icon: Icon, size = 'md', tone = 'mint', className }) {
  const box = size === 'sm' ? 'size-8' : size === 'lg' ? 'size-12' : 'size-10';
  const glyph = size === 'sm' ? 'size-4' : size === 'lg' ? 'size-6' : 'size-5';
  return (
    <span
      className={cx(
        'inline-flex shrink-0 items-center justify-center rounded-md',
        box,
        tone === 'mint' && 'bg-brand-50 text-brand-700',
        tone === 'ring' && 'rounded-full border border-brand-200 bg-white text-brand-700',
        tone === 'solid' && 'bg-brand-600 text-white',
        tone === 'onDark' && 'bg-white/10 text-white',
        tone === 'urgent' && 'bg-urgent-600/10 text-urgent-600',
        className,
      )}
    >
      <Icon className={glyph} />
    </span>
  );
}

/**
 * Star rating. The number is the accessible value; the stars are decorative,
 * so screen readers get "4.9 out of 5" once instead of five list items.
 */
export function Rating({ value, count, className }) {
  const filled = Math.round(value);
  return (
    <span className={cx('inline-flex items-center gap-1.5', className)}>
      <span className="inline-flex" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className={cx('size-3.5', i < filled ? 'text-star' : 'text-line-strong')} />
        ))}
      </span>
      <span className="text-meta tnum">
        <span className="sr-only">Rated </span>
        {value.toFixed(1)}
        <span className="sr-only"> out of 5</span>
        {count ? <span className="text-muted"> ({count})</span> : null}
      </span>
    </span>
  );
}

/** A single checkmark trust point. */
export function TrustPoint({ icon: Icon, children, className }) {
  return (
    <li className={cx('flex items-start gap-2.5', className)}>
      <Icon className="mt-0.5 size-4 shrink-0 text-brand-600" />
      <span className="text-[0.8125rem] leading-relaxed text-ink/85">{children}</span>
    </li>
  );
}

/** Centered "see everything" action that closes a listing band. */
export function MoreLink({ href = '#', children }) {
  return (
    <Reveal className="flex justify-center pt-1">
      <a
        href={href}
        className="press inline-flex items-center gap-1.5 rounded-md bg-brand-600 px-4 py-2.5 text-[0.8125rem] font-semibold text-white no-underline transition-colors duration-200 ease-out hover:bg-brand-700"
      >
        {children}
      </a>
    </Reveal>
  );
}
