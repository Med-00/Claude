import { STATISTICS } from '../../data/content.js';
import { Band } from '../ui/primitives.jsx';
import Reveal from '../ui/Reveal.jsx';

/**
 * Statistics band.
 *
 * A full-bleed emerald block that punctuates the white stream — the same role
 * the navy appointment bar plays higher up. Its job is contrast and rhythm, so
 * it stays deliberately plain: four numbers, no icons, no cards.
 *
 * Figures are demo content and would need verification before publication.
 */
export default function Statistics() {
  return (
    <Band tone="brand" aria-labelledby="statistics-title">
      <h2 id="statistics-title" className="sr-only">
        Meridian Health by the numbers
      </h2>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
        {STATISTICS.map((stat, i) => (
          <Reveal as="li" key={stat.label} delay={i * 60} className="text-center">
            <span className="display-band tnum block text-white">{stat.value}</span>
            <span className="mt-1 block text-[0.75rem] font-medium text-white/70">{stat.label}</span>
          </Reveal>
        ))}
      </ul>
    </Band>
  );
}
