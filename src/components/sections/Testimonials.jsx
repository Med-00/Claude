import { TESTIMONIALS } from '../../data/content.js';
import { Quote } from '../ui/Icons.jsx';
import Image from '../ui/Image.jsx';
import { Band, Rating, SectionHeading } from '../ui/primitives.jsx';
import Reveal from '../ui/Reveal.jsx';

/**
 * Patient testimonials.
 *
 * A static stack, not a carousel. Three quotes fit; a carousel would hide two
 * thirds of the proof behind an interaction most visitors never perform, and
 * auto-advancing text moves content the user is mid-sentence through.
 *
 * All quotes, names and portraits are demo content — see `src/data/content.js`.
 */
export default function Testimonials() {
  return (
    <Band tone="mint" aria-labelledby="testimonials-title" grow>
      <div className="flex flex-col gap-6">
        <SectionHeading
          eyebrow="Patient voices"
          id="testimonials-title"
          title="What Our"
          accent="Patients Say"
          support="Feedback collected through our post-treatment care survey."
        />

        <ul className="grid gap-2.5 sm:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <Reveal as="li" key={item.name} delay={i * 60}>
              <figure className="flex h-full flex-col gap-3 rounded-card border border-line bg-white p-4">
                <Quote className="size-5 text-brand-200" />
                <blockquote className="flex-1 text-[0.8125rem] leading-relaxed text-body">
                  {item.quote}
                </blockquote>
                <Rating value={item.rating} />
                <figcaption className="flex items-center gap-2.5 border-t border-line pt-3">
                  <Image
                    name={item.avatar}
                    ar="1/1"
                    sizes="72px"
                    className="size-9 shrink-0 rounded-full"
                  />
                  <span className="flex flex-col">
                    <span className="text-[0.8125rem] leading-tight font-semibold text-ink">
                      {item.name}
                    </span>
                    <span className="text-[0.6875rem] text-muted">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </Band>
  );
}
