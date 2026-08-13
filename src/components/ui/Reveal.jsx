import { useEffect, useRef, useState } from 'react';

/**
 * Scroll reveal.
 *
 * Fires once, on entry, via IntersectionObserver — no scroll listener, no
 * animation library, no work after the element has been seen. The motion
 * itself is a CSS transition declared in the stylesheet (`[data-reveal]`), so
 * a fast scroll retargets it smoothly instead of restarting from zero, and
 * `prefers-reduced-motion` drops the movement while keeping the fade.
 *
 * This is a marketing surface, which is the only place a scroll reveal
 * belongs: it would be wrong on functional UI a user visits daily.
 *
 * @param {number} delay  Stagger offset in ms. Keep groups within 30–80ms
 *                        steps — longer reads as sluggish.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className, children, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // No IntersectionObserver (or a very old browser): show the content.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-visible={visible ? '' : undefined}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
}
