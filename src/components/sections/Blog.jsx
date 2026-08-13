import { ARTICLES } from '../../data/content.js';
import { ArrowRight } from '../ui/Icons.jsx';
import Image from '../ui/Image.jsx';
import { Band, MoreLink, SectionHeading } from '../ui/primitives.jsx';
import Reveal from '../ui/Reveal.jsx';

/**
 * Latest health tips & news.
 *
 * Editorial cards: image, category, title, date, reading time. "Read More" is
 * an arrow that moves on hover — the classic link-affordance cue — while the
 * whole title is the link so the target is generous and the exact URL is
 * announced by screen readers.
 *
 * Article topics are general health guidance. This is demo content and is not
 * medical advice; the description in `index.html` should not imply otherwise.
 */
export default function Blog() {
  return (
    <Band id="blog" aria-labelledby="blog-title" className="scroll-mt-4">
      <div className="flex flex-col gap-6">
        <SectionHeading
          eyebrow="From the journal"
          id="blog-title"
          title="Latest Health Tips"
          accent="& News"
          support="Plain-language guidance from our clinicians. Updated weekly."
        />

        <ul className="grid gap-2.5 sm:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <Reveal as="li" key={article.title} delay={i * 60}>
              <article className="card-hover flex h-full flex-col overflow-hidden rounded-card border border-line bg-white">
                <Image
                  name={article.image}
                  ar="4/3"
                  sizes="(min-width: 1024px) 15vw, (min-width: 640px) 30vw, 90vw"
                />
                <div className="flex flex-1 flex-col gap-2 p-3.5">
                  <span className="text-[0.625rem] font-semibold tracking-[0.06em] text-brand-700 uppercase">
                    {article.category}
                  </span>
                  <h3 className="heading-card">
                    <a
                      href="#blog"
                      className="text-ink no-underline transition-colors duration-150 ease-out hover:text-brand-700"
                    >
                      {article.title}
                    </a>
                  </h3>
                  <div className="mt-auto flex items-center gap-2 pt-1">
                    <span className="text-meta">{article.dateLabel}</span>
                    <span aria-hidden="true" className="size-0.5 rounded-full bg-line-strong" />
                    <span className="text-meta">{article.readingTime}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <MoreLink href="#blog">View All Articles</MoreLink>
      </div>
    </Band>
  );
}
