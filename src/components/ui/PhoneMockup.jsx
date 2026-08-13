import { Calendar, Check, Heart, Logomark } from './Icons.jsx';

/**
 * Phone mockup.
 *
 * A miniature of the product's own app interface, drawn in markup. Chosen over
 * a screenshot because it stays sharp at every density, adds no image request,
 * and can be updated when the app changes.
 *
 * Entirely decorative: the surrounding copy states what the app does, so the
 * whole tree is hidden from assistive technology rather than read out as a
 * meaningless list of fragments.
 */
export default function PhoneMockup() {
  return (
    <div
      aria-hidden="true"
      className="relative w-[190px] shrink-0 rounded-[26px] border border-white/15 bg-navy-950 p-2 shadow-[0_24px_60px_-20px_rgb(0_0_0/0.55)] sm:w-[210px]"
    >
      {/* Screen */}
      <div className="overflow-hidden rounded-[19px] bg-[#f7faf9]">
        {/* Status bar */}
        <div className="flex items-center justify-between px-3.5 pt-2.5 pb-1">
          <span className="text-[0.5rem] font-semibold text-ink/70">9:41</span>
          <div className="flex items-center gap-0.5">
            <span className="block h-1.5 w-1.5 rounded-full bg-ink/25" />
            <span className="block h-1.5 w-1.5 rounded-full bg-ink/25" />
            <span className="block h-1.5 w-3 rounded-[2px] bg-ink/40" />
          </div>
        </div>

        {/* App header */}
        <div className="flex items-center gap-1.5 px-3.5 pb-2.5">
          <Logomark className="size-4 text-brand-600" />
          <span className="text-[0.5625rem] font-bold text-ink">Meridian</span>
        </div>

        {/* Next appointment card */}
        <div className="mx-3 rounded-card bg-brand-600 p-2.5">
          <span className="text-[0.4375rem] font-medium tracking-wide text-white/60 uppercase">
            Next appointment
          </span>
          <p className="mt-1 text-[0.625rem] leading-tight font-semibold text-white">
            Dr. Amara Osei
          </p>
          <p className="text-[0.5rem] text-white/70">Cardiology · Tue 14:30</p>
          <div className="mt-2 flex items-center gap-1 rounded-xs bg-white/15 px-1.5 py-1">
            <Calendar className="size-2 text-white" />
            <span className="text-[0.4375rem] font-medium text-white">Reschedule</span>
          </div>
        </div>

        {/* Vitals row */}
        <div className="mt-2.5 grid grid-cols-2 gap-1.5 px-3">
          <div className="rounded-md border border-line bg-white p-2">
            <div className="flex items-center gap-1">
              <Heart className="size-2 text-brand-600" />
              <span className="text-[0.4375rem] text-muted">Heart rate</span>
            </div>
            <p className="tnum mt-0.5 text-[0.6875rem] font-bold text-ink">
              68<span className="text-[0.4375rem] font-medium text-muted"> bpm</span>
            </p>
          </div>
          <div className="rounded-md border border-line bg-white p-2">
            <span className="text-[0.4375rem] text-muted">Steps today</span>
            <p className="tnum mt-0.5 text-[0.6875rem] font-bold text-ink">7,412</p>
          </div>
        </div>

        {/* Reminders */}
        <div className="mt-2 px-3 pb-3">
          <span className="text-[0.4375rem] font-semibold tracking-wide text-muted uppercase">
            Today
          </span>
          <ul className="mt-1 flex flex-col gap-1">
            {['Take morning medication', 'Blood pressure reading'].map((task, i) => (
              <li
                key={task}
                className="flex items-center gap-1.5 rounded-sm border border-line bg-white px-1.5 py-1.5"
              >
                <span
                  className={
                    i === 0
                      ? 'inline-flex size-2.5 items-center justify-center rounded-full bg-brand-600 text-white'
                      : 'inline-flex size-2.5 rounded-full border border-line-strong'
                  }
                >
                  {i === 0 ? <Check className="size-1.5" /> : null}
                </span>
                <span
                  className={
                    i === 0
                      ? 'text-[0.5rem] text-muted line-through'
                      : 'text-[0.5rem] text-ink'
                  }
                >
                  {task}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
