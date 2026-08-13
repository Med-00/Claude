import { SPECIALISTS } from '../../data/content.js';
import { LinkedIn, Mail } from '../ui/Icons.jsx';
import Image from '../ui/Image.jsx';
import { Band, MoreLink, Rating, SectionHeading } from '../ui/primitives.jsx';
import Reveal from '../ui/Reveal.jsx';

/**
 * Specialists.
 *
 * Four fictional clinicians. The photographs are stock models and the names,
 * specialties and ratings are demo content — see the notice in
 * `src/data/content.js`. Nothing here should be read as a real person.
 */
export default function Specialists() {
  return (
    <Band id="specialists" aria-labelledby="specialists-title" className="scroll-mt-4">
      <div className="flex flex-col gap-6">
        <SectionHeading
          eyebrow="Our team"
          id="specialists-title"
          title="Meet Our"
          accent="Specialists"
          support="Consultants who lead their departments and still run their own clinics."
        />

        <ul className="grid grid-cols-2 gap-2.5 xl:grid-cols-4">
          {SPECIALISTS.map((doctor, i) => (
            <Reveal as="li" key={doctor.name} delay={i * 50}>
              <article className="card-hover group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white">
                <Image
                  name={doctor.image}
                  ar="1/1"
                  sizes="(min-width: 1280px) 11vw, (min-width: 1024px) 22vw, 45vw"
                  imgClassName="object-top"
                />
                <div className="flex flex-1 flex-col gap-1.5 p-3">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-[0.875rem] leading-tight font-semibold text-ink">
                      {doctor.name}
                    </h3>
                    <p className="text-[0.75rem] text-brand-700">{doctor.specialty}</p>
                  </div>

                  <Rating value={doctor.rating} className="mt-auto pt-1" />

                  <div className="flex items-center gap-1 border-t border-line pt-2">
                    <a
                      href="#specialists"
                      aria-label={`${doctor.name} on LinkedIn`}
                      className="inline-flex size-7 items-center justify-center rounded-sm text-muted transition-colors duration-150 ease-out hover:bg-brand-50 hover:text-brand-700"
                    >
                      <LinkedIn className="size-3.5" />
                    </a>
                    <a
                      href="#appointment"
                      aria-label={`Contact ${doctor.name}`}
                      className="inline-flex size-7 items-center justify-center rounded-sm text-muted transition-colors duration-150 ease-out hover:bg-brand-50 hover:text-brand-700"
                    >
                      <Mail className="size-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <MoreLink href="#specialists">View All Doctors</MoreLink>
      </div>
    </Band>
  );
}
