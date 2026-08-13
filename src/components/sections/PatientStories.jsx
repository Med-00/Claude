import { STORIES } from '../../data/content.js';
import Image from '../ui/Image.jsx';
import { Band, SectionHeading } from '../ui/primitives.jsx';
import Reveal from '../ui/Reveal.jsx';

/**
 * Patient stories.
 *
 * The play control is a real `<button>`, not a decorative overlay on an image:
 * it is the only interactive thing in the card, it announces which story it
 * plays, and it is reachable by keyboard.
 *
 * No video is embedded. Loading three players — each pulling an iframe, its
 * own JS and a cookie — to sit unwatched below the fold is the single most
 * expensive thing a page like this can do. The real implementation should
 * mount a player into the card on click (façade pattern).
 *
 * Stories, names and portraits are demo content — see `src/data/content.js`.
 */
export default function PatientStories() {
  return (
    <Band aria-labelledby="stories-title">
      <div className="flex flex-col gap-6">
        <SectionHeading
          eyebrow="Patient stories"
          id="stories-title"
          title="Stories of"
          accent="Healing & Trust"
          support="Recovery told by the people who lived it."
        />

        <ul className="grid gap-2.5 sm:grid-cols-3">
          {STORIES.map((story, i) => (
            <Reveal as="li" key={story.name} delay={i * 60}>
              <article className="card-hover group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white">
                <div className="relative">
                  <Image
                    name={story.image}
                    ar="4/3"
                    sizes="(min-width: 1024px) 15vw, (min-width: 640px) 30vw, 90vw"
                  />
                  {/* Scrim: keeps the white control legible over any frame. */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/45 via-navy-950/5 to-transparent"
                  />
                  <button
                    type="button"
                    aria-label={`Play ${story.name}'s story, ${story.duration}`}
                    // Parked bottom-left rather than dead-centre: these frames
                    // are face-cropped portraits, and a centred control lands
                    // squarely on the subject's face.
                    className="group/play press absolute bottom-2.5 left-2.5 inline-flex size-12 items-center justify-center rounded-full"
                  >
                    {/* Soft halo, so the control reads as lit rather than
                        pasted on, and stays legible over any frame. */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-[2px] transition-transform duration-300 ease-out group-hover/play:scale-110"
                    />
                    {/* The control itself. */}
                    <span
                      aria-hidden="true"
                      className="relative inline-flex size-9 items-center justify-center rounded-full bg-white shadow-[0_6px_16px_-4px_rgb(7_30_49/0.45)] transition-colors duration-200 ease-out group-hover/play:bg-brand-600"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="size-[13px] translate-x-[1px] text-brand-700 transition-colors duration-200 ease-out group-hover/play:text-white"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        {/* Rounded joins — a hard-cornered triangle is what
                            makes a play glyph read as clip-art. */}
                        <path
                          d="M8.4 5.6v12.8a1.2 1.2 0 0 0 1.83 1.02l10.1-6.4a1.2 1.2 0 0 0 0-2.04l-10.1-6.4A1.2 1.2 0 0 0 8.4 5.6Z"
                          strokeWidth="2.4"
                          stroke="currentColor"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <span className="tnum absolute right-2 bottom-2 rounded-xs bg-navy-950/70 px-1.5 py-0.5 text-[0.625rem] font-medium text-white">
                    {story.duration}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-2 p-3">
                  <p className="flex-1 text-[0.75rem] leading-relaxed text-body">
                    “{story.quote}”
                  </p>
                  <div className="border-t border-line pt-2">
                    <p className="text-[0.8125rem] leading-tight font-semibold text-ink">
                      {story.name}
                    </p>
                    <p className="text-[0.6875rem] text-brand-700">{story.type}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </Band>
  );
}
