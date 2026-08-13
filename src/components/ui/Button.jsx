import { cx } from '../../lib/cx.js';

/**
 * Button — the product's single pressable surface.
 *
 * Renders as `<a>` when given `href`, `<button>` otherwise, so a navigation
 * target is always a link and an action is always a button. Every variant
 * carries the same press feedback (`scale(0.97)`, 160ms) — the interface
 * confirming it heard the user is not a per-variant decision.
 */

const VARIANTS = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-[0_1px_2px_rgb(11_34_51/0.10)]',
  navy: 'bg-navy-900 text-white hover:bg-navy-800',
  outline: 'bg-white text-ink border border-line-strong hover:border-brand-300 hover:text-brand-700',
  ghost: 'bg-transparent text-brand-700 hover:bg-brand-50',
  onDark: 'bg-white text-navy-900 hover:bg-brand-50',
  urgent: 'bg-urgent-600 text-white hover:brightness-110',
};

const SIZES = {
  sm: 'h-9 px-3.5 text-[0.8125rem] gap-1.5',
  md: 'h-11 px-5 text-[0.875rem] gap-2',
  lg: 'h-12 px-6 text-[0.9375rem] gap-2',
};

export default function Button({
  as,
  href,
  variant = 'primary',
  size = 'md',
  block = false,
  className,
  children,
  ...props
}) {
  const Tag = as ?? (href ? 'a' : 'button');

  return (
    <Tag
      href={href}
      // A bare <button> defaults to type="submit" inside a form, which
      // submits by accident. Only opt in explicitly.
      type={Tag === 'button' ? (props.type ?? 'button') : undefined}
      className={cx(
        'press inline-flex items-center justify-center rounded-md font-semibold whitespace-nowrap',
        'transition-[background-color,border-color,color,filter] duration-200 ease-out',
        'no-underline select-none',
        VARIANTS[variant],
        SIZES[size],
        block && 'w-full',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
