import { useId } from 'react';
import { cx } from '../../lib/cx.js';
import { ChevronDown } from './Icons.jsx';

/**
 * Form field primitives.
 *
 * Every control is a real labelled form element. Labels are always rendered —
 * visually hidden where the design calls for a bare field — because a
 * placeholder is not a label: it disappears on input and is skipped by some
 * screen readers.
 *
 * Selects are native `<select>`. A custom listbox would cost JS, focus
 * management and keyboard wiring to land somewhere worse than the platform
 * control, which already handles mobile pickers and typeahead.
 */

const FIELD_BASE =
  'h-11 w-full rounded-md border bg-white px-3 text-[0.8125rem] text-ink ' +
  'transition-[border-color,box-shadow] duration-200 ease-out ' +
  'placeholder:text-muted';

const FIELD_TONE = {
  light: 'border-line-strong hover:border-brand-300 focus-visible:border-brand-600',
  onDark: 'border-white/15 bg-white/[0.06] text-white placeholder:text-white/45 hover:border-white/30',
};

/* Labels must follow the surface they sit on. `text-ink/70` on the navy
   appointment band rendered dark-on-dark and made every label invisible. */
const LABEL_TONE = {
  light: 'text-ink/70',
  onDark: 'text-white/75',
};

export function Field({ label, hint, hideLabel = false, children, className }) {
  return (
    <div className={cx('flex flex-col gap-1.5', className)}>
      <span
        className={cx(
          hideLabel ? 'sr-only' : 'text-[0.75rem] font-medium text-ink/70',
        )}
      >
        {label}
      </span>
      {children}
      {hint ? <span className="text-meta">{hint}</span> : null}
    </div>
  );
}

export function TextInput({ label, hideLabel = false, tone = 'light', hint, className, id, ...props }) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const hintId = hint ? `${fieldId}-hint` : undefined;

  return (
    <div className={cx('flex min-w-0 flex-col gap-1.5', className)}>
      <label
        htmlFor={fieldId}
        className={cx(
          hideLabel ? 'sr-only' : 'text-[0.75rem] font-medium',
          !hideLabel && LABEL_TONE[tone],
        )}
      >
        {label}
      </label>
      <input
        id={fieldId}
        aria-describedby={hintId}
        className={cx(FIELD_BASE, FIELD_TONE[tone])}
        {...props}
      />
      {hint ? (
        <span id={hintId} className="text-meta">
          {hint}
        </span>
      ) : null}
    </div>
  );
}

export function Select({ label, hideLabel = false, tone = 'light', options, className, id, ...props }) {
  const autoId = useId();
  const fieldId = id ?? autoId;

  return (
    <div className={cx('flex min-w-0 flex-col gap-1.5', className)}>
      <label
        htmlFor={fieldId}
        className={cx(
          hideLabel ? 'sr-only' : 'text-[0.75rem] font-medium',
          !hideLabel && LABEL_TONE[tone],
        )}
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={fieldId}
          className={cx(FIELD_BASE, FIELD_TONE[tone], 'cursor-pointer appearance-none pr-9')}
          {...props}
        >
          {options.map((option) => (
            <option
              key={option}
              value={option === options[0] ? '' : option}
              // Native option lists paint on an OS surface, not ours: white
              // text inherited from the dark field would be invisible there.
              className="bg-white text-ink"
            >
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          className={cx(
            'pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2',
            tone === 'onDark' ? 'text-white/50' : 'text-muted',
          )}
        />
      </div>
    </div>
  );
}
