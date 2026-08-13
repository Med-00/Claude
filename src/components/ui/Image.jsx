import { cx } from '../../lib/cx.js';
import { img } from '../../lib/images.js';

/**
 * Image.
 *
 * Wraps the source registry so no component hand-writes a URL, and so every
 * photograph in the product gets the same treatment: a responsive srcset,
 * an explicit aspect-ratio box (the browser reserves space, so photos loading
 * in never shift the layout), lazy loading below the fold, and async decode.
 *
 * `priority` opts the hero out of lazy loading — the LCP image should start
 * downloading immediately, and `fetchPriority="high"` moves it up the queue.
 */
export default function Image({
  name,
  ar = '4/3',
  sizes = '(min-width: 1140px) 45vw, 100vw',
  className,
  imgClassName,
  priority = false,
  alt,
  q,
  ...props
}) {
  const source = img(name, { ar, sizes, q });

  return (
    <div
      className={cx('media-frame relative bg-brand-50', className)}
      style={{ aspectRatio: ar.replace('/', ' / ') }}
      {...props}
    >
      <img
        src={source.src}
        srcSet={source.srcSet}
        sizes={source.sizes}
        // An explicit empty alt marks the image decorative; anything else
        // must describe it. Never fall through to a filename.
        alt={alt ?? source.alt}
        width={source.width}
        height={source.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : undefined}
        className={cx('size-full object-cover', imgClassName)}
      />
    </div>
  );
}
