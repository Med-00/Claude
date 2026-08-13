import { useState } from 'react';
import {
  DEPARTMENTS,
  DOCTORS_BY_DEPARTMENT,
  TIME_SLOTS,
} from '../../data/content.js';
import Button from '../ui/Button.jsx';
import { Select, TextInput } from '../ui/Field.jsx';
import { Calendar, CheckCircle } from '../ui/Icons.jsx';

/**
 * Appointment booking.
 *
 * The highest-value interaction on the page, so it gets the strongest surface:
 * a navy band that interrupts the white stream and cannot be scrolled past.
 *
 * Conversion decisions:
 * - Four fields, all optional to complete out of order. Every extra required
 *   field costs bookings; the rest can be collected on the confirmation step.
 * - The doctor list is filtered by department, so the choice is never wrong.
 * - `min` on the date field prevents choosing a date in the past, which is the
 *   most common form error in a booking flow.
 * - Success is announced in place, not in a toast that disappears. A booking
 *   confirmation is exactly the kind of message that must persist.
 */
export default function AppointmentBooking() {
  const [department, setDepartment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const doctorOptions = DOCTORS_BY_DEPARTMENT[department] ?? DOCTORS_BY_DEPARTMENT[''];
  const today = new Date().toISOString().slice(0, 10);

  function handleSubmit(event) {
    event.preventDefault();
    // Demo only — no data leaves the browser. Wire to the scheduling API here.
    setSubmitted(true);
  }

  return (
    <section
      id="appointment"
      aria-labelledby="appointment-title"
      className="band band-y scroll-mt-4 bg-navy-900"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 id="appointment-title" className="heading-section text-white">
            Book Your Appointment
          </h2>
          <p className="text-[0.8125rem] text-white/60">
            Choose a department and time that suits you. We confirm within one working hour.
          </p>
        </div>

        {submitted ? (
          // Replaces the form rather than sitting above it: the task is done,
          // so the fields are no longer the point. `role="status"` announces
          // it without stealing focus.
          <div
            role="status"
            className="flex items-start gap-3 rounded-card border border-brand-400/30 bg-brand-400/10 px-4 py-4"
          >
            <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-300" />
            <div className="flex flex-col gap-1">
              <p className="text-[0.875rem] font-semibold text-white">Request received</p>
              <p className="text-[0.8125rem] text-white/65">
                A scheduling coordinator will call you within one working hour to confirm.
                For anything urgent, call our 24/7 line instead.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-1 self-start rounded-sm text-[0.8125rem] font-semibold text-brand-300 underline underline-offset-4 transition-colors duration-150 ease-out hover:text-brand-200"
              >
                Book another appointment
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {/* Two-up until there is genuinely room for four: in a half-width
                column a 4-across row truncates "Select department" mid-word. */}
            <div className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-4">
              <Select
                label="Department"
                tone="onDark"
                options={DEPARTMENTS}
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
              />
              <Select
                label="Doctor"
                tone="onDark"
                options={doctorOptions}
                // Re-keyed so the browser resets the selection when the
                // department changes — otherwise a stale doctor stays chosen.
                key={department}
              />
              <TextInput label="Preferred date" tone="onDark" type="date" min={today} />
              <Select label="Preferred time" tone="onDark" options={TIME_SLOTS} />
            </div>

            <div className="flex flex-col items-start gap-2.5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[0.75rem] text-white/45">
                No payment needed to book. Demo form — nothing is submitted.
              </p>
              <Button type="submit" size="md" className="w-full sm:w-auto">
                <Calendar className="size-4" />
                Book Now
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
