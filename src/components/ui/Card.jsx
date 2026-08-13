import { cx } from '../../lib/cx.js';

/**
 * Card — the repeating unit of both columns.
 *
 * Hairline border and near-flat rest state; depth arrives only on hover, and
 * only as border + shadow. Nothing translates, so text never resamples
 * mid-interaction and neighbouring cards never appear to shift.
 */
export default function Card({
  as: Tag = 'div',
  interactive = false,
  tone = 'plain',
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cx(
        'rounded-card border',
        tone === 'plain' && 'border-line bg-white',
        tone === 'mint' && 'border-brand-100 bg-brand-50/55',
        tone === 'navy' && 'border-white/10 bg-navy-900',
        interactive && 'card-hover',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
