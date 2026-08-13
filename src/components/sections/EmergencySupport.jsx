import { BRAND } from '../../data/content.js';
import { Ambulance, ArrowRight, Clock, Phone } from '../ui/Icons.jsx';
import Image from '../ui/Image.jsx';
import { Band } from '../ui/primitives.jsx';

/**
 * Emergency support.
 *
 * Urgency without alarm. The section reads as calm and certain — a number, a
 * promise about wait time, and a direct line — because a person actually in an
 * emergency needs to find the number fast, not be sold to.
 *
 * Deliberate choices:
 * - The phone number is the largest text and is itself the link, so it is
 *   tappable on a phone and readable across a room.
 * - No scroll reveal on this band. Someone in a hurry may scroll fast enough
 *   to outrun a fade, and this is the one section that must never be missing.
 * - The urgent accent is used once, on the badge, and nowhere else on the page.
 */
export default function EmergencySupport() {
  return (
    <Band tone="navy" aria-labelledby="emergency-title" className="relative overflow-hidden">
      {/* Photograph sits behind the panel at low opacity — atmosphere, not
          information, so it never competes with the number. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          name="emergencyEntrance"
          ar="16/9"
          alt=""
          sizes="50vw"
          className="size-full opacity-[0.13]"
          imgClassName="object-cover"
        />
        <span className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/92 to-navy-900/60" />
      </div>

      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col items-start gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[0.6875rem] font-semibold text-white ring-1 ring-white/15 ring-inset">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full rounded-full bg-red-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex size-1.5 rounded-full bg-red-400" />
            </span>
            Open now · 24/7
          </span>

          <div className="flex flex-col gap-1.5">
            <h2 id="emergency-title" className="heading-section text-white">
              Need Immediate Assistance?
            </h2>
            <p className="max-w-[42ch] text-[0.8125rem] leading-relaxed text-white/65">
              Our emergency department is consultant-led and open every hour of the year. Call
              ahead and our team will be ready before you arrive.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <span className="inline-flex items-center gap-1.5 text-[0.75rem] text-white/60">
              <Clock className="size-3.5 text-brand-300" />
              Average triage under 15 minutes
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.75rem] text-white/60">
              <Ambulance className="size-3.5 text-brand-300" />
              Ambulance dispatch available
            </span>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-start gap-2 rounded-panel border border-white/12 bg-white/[0.06] p-4 backdrop-blur-sm sm:items-center sm:text-center">
          <span className="text-[0.6875rem] font-medium tracking-wide text-white/50 uppercase">
            Emergency line
          </span>
          <a
            href={BRAND.emergencyPhoneHref}
            className="tnum press text-[1.375rem] leading-none font-bold tracking-[-0.02em] text-white no-underline transition-colors duration-200 ease-out hover:text-brand-300"
          >
            {BRAND.emergencyPhone}
          </a>
          <a
            href={BRAND.emergencyPhoneHref}
            className="press mt-1 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-white px-4 text-[0.8125rem] font-semibold text-navy-900 no-underline transition-colors duration-200 ease-out hover:bg-brand-50"
          >
            <Phone className="size-4" />
            Call Emergency
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-[0.75rem] font-medium text-white/60 no-underline transition-colors duration-150 ease-out hover:text-white"
          >
            Non-urgent enquiry
            <ArrowRight className="size-3" />
          </a>
        </div>
      </div>
    </Band>
  );
}
