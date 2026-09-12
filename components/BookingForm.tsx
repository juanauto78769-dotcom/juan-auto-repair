'use client';

import { useMemo, useRef, useState, type FormEvent } from 'react';
import { SERVICE_OPTIONS, VEHICLE_MAKES } from '@/lib/data';
import styles from './BookingForm.module.css';

type FieldKey = 'name' | 'phone' | 'service' | 'contact-method' | 'email' | 'consent';

const NAME_TO_FIELD_KEY: Record<string, FieldKey> = {
  name: 'name',
  phone: 'phone',
  service: 'service',
  preferred_contact: 'contact-method',
  email: 'email',
  consent: 'consent',
};

// Formspree form targeted at juanauto78769@gmail.com. Overridable via
// NEXT_PUBLIC_FORMSPREE_FORM_ID (see .env.local.example) if the shop ever
// moves to a different Formspree account.
const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? 'mzebwqjy';
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORM_ID}`;

function validate(form: HTMLFormElement): Partial<Record<FieldKey, boolean>> {
  const data = new FormData(form);
  const errors: Partial<Record<FieldKey, boolean>> = {};

  const name = String(data.get('name') ?? '').trim();
  if (!name) errors.name = true;

  const phoneDigits = String(data.get('phone') ?? '').replace(/\D/g, '');
  if (phoneDigits.length < 7) errors.phone = true;

  if (!data.get('service')) errors.service = true;

  const email = String(data.get('email') ?? '').trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = true;

  if (!data.get('preferred_contact')) errors['contact-method'] = true;

  if (!data.get('consent')) errors.consent = true;

  return errors;
}

/**
 * Booking form. Rendered once inline in the "Book a Service" section and
 * once inside the mobile modal — `idPrefix` keeps the two instances' element
 * ids unique so labels/inputs don't collide in the DOM.
 *
 * The original hand-built page submitted via a classic redirect to
 * Formspree (a hidden `_next` field pointed back at the page with
 * `?booked=1`, and a bit of JS looked for that query param on load to show
 * the success banner). Here the same request goes out with `fetch` and
 * Formspree's `Accept: application/json` response, so success is just
 * component state — no redirect round trip or URL cleanup needed.
 */
export default function BookingForm({ idPrefix = 'booking' }: { idPrefix?: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [showSummaryError, setShowSummaryError] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const yearOptions = useMemo(() => {
    const thisYear = new Date().getFullYear();
    const years: number[] = [];
    for (let y = thisYear + 1; y >= 1985; y--) years.push(y);
    return years;
  }, []);

  function clearFieldError(name: string) {
    const key = NAME_TO_FIELD_KEY[name];
    if (key && errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      setShowSummaryError(true);
      const firstErrorField = form.querySelector<HTMLElement>(
        '[data-has-error="true"] input, [data-has-error="true"] select, [data-has-error="true"] textarea',
      );
      firstErrorField?.focus();
      return;
    }

    setErrors({});
    setShowSummaryError(false);
    setSubmitError(false);
    setSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  const id = (name: string) => `${idPrefix}-${name}`;
  const hasError = (key: FieldKey) => Boolean(errors[key]);

  return (
    <>
      {success && (
        <div className={`${styles.successBanner} ${styles.isVisible}`} role="status">
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span>
            Request sent &mdash; thanks! Juan will reach out shortly. Prefer to talk now? Call
            (817) 677-2009.
          </span>
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        onChange={(e) => clearFieldError((e.target as HTMLInputElement).name)}
        noValidate
      >
        {showSummaryError && (
          <div className={`${styles.formSummaryError} ${styles.isVisible}`} role="alert">
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>Please fix the highlighted fields below.</span>
          </div>
        )}

        {submitError && (
          <div className={`${styles.formSummaryError} ${styles.isVisible}`} role="alert">
            <span>
              Something went wrong sending that. Please try again, or call (817) 677-2009 directly.
            </span>
          </div>
        )}

        <div className={styles.formRow}>
          <div className={styles.field} data-has-error={hasError('name')}>
            <label htmlFor={id('name')}>
              Full Name <span className={styles.opt}>(required)</span>
            </label>
            <input type="text" id={id('name')} name="name" autoComplete="name" required />
            {hasError('name') && <span className={styles.fieldError}>Enter your name.</span>}
          </div>
          <div className={styles.field} data-has-error={hasError('phone')}>
            <label htmlFor={id('phone')}>
              Phone <span className={styles.opt}>(required)</span>
            </label>
            <input type="tel" id={id('phone')} name="phone" autoComplete="tel" required />
            {hasError('phone') && (
              <span className={styles.fieldError}>Enter a valid phone number.</span>
            )}
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.field} data-has-error={hasError('service')}>
            <label htmlFor={id('service')}>
              Service Needed <span className={styles.opt}>(required)</span>
            </label>
            <select id={id('service')} name="service" required defaultValue="">
              <option value="">Choose a service&hellip;</option>
              {SERVICE_OPTIONS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            {hasError('service') && <span className={styles.fieldError}>Choose a service.</span>}
          </div>
          <div className={styles.field} data-has-error={hasError('contact-method')}>
            <label>
              Preferred Contact <span className={styles.opt}>(required)</span>
            </label>
            <div className={styles.radioRow} style={{ paddingTop: 11 }}>
              <label className={styles.radioOpt}>
                <input type="radio" name="preferred_contact" value="Phone Call" required /> Phone
                Call
              </label>
              <label className={styles.radioOpt}>
                <input type="radio" name="preferred_contact" value="Text Message" /> Text Message
              </label>
            </div>
            {hasError('contact-method') && (
              <span className={styles.fieldError}>Pick how we should reach you.</span>
            )}
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.field} data-has-error={hasError('email')}>
            <label htmlFor={id('email')}>
              Email <span className={styles.opt}>(optional)</span>
            </label>
            <input type="email" id={id('email')} name="email" autoComplete="email" />
            {hasError('email') && (
              <span className={styles.fieldError}>Enter a valid email address.</span>
            )}
          </div>
          <div className={styles.field}>
            <label htmlFor={id('make')}>
              Vehicle Make <span className={styles.opt}>(optional)</span>
            </label>
            <input
              type="text"
              id={id('make')}
              name="vehicle_make"
              list={id('vehicle-makes')}
              placeholder="e.g. Honda"
            />
            <datalist id={id('vehicle-makes')}>
              {VEHICLE_MAKES.map((make) => (
                <option value={make} key={make} />
              ))}
            </datalist>
          </div>
        </div>

        <div className={`${styles.formRow} ${styles.thirds}`}>
          <div className={styles.field}>
            <label htmlFor={id('model')}>
              Vehicle Model <span className={styles.opt}>(optional)</span>
            </label>
            <input type="text" id={id('model')} name="vehicle_model" placeholder="e.g. Accord" />
          </div>
          <div className={styles.field}>
            <label htmlFor={id('year')}>
              Year <span className={styles.opt}>(optional)</span>
            </label>
            <select id={id('year')} name="vehicle_year" defaultValue="">
              <option value="">Year&hellip;</option>
              {yearOptions.map((year) => (
                <option value={year} key={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.field} style={{ justifyContent: 'flex-end' }}>
            <label className={styles.radioOpt} style={{ paddingBottom: 12, color: 'var(--text-dim)' }}>
              <input type="checkbox" name="year_unsure" value="Not sure" /> Not sure
            </label>
          </div>
        </div>

        <div className={`${styles.formRow} ${styles.single}`}>
          <div className={styles.field}>
            <label htmlFor={id('comments')}>
              Problem or Comments <span className={styles.opt}>(optional)</span>
            </label>
            <textarea
              id={id('comments')}
              name="comments"
              placeholder="Tell us what's going on with the vehicle&hellip;"
            />
          </div>
        </div>

        <div className={styles.consentRow}>
          <input type="checkbox" id={id('consent')} name="consent" value="Agreed" required />
          <label htmlFor={id('consent')}>
            I agree that Juan Auto Repair may contact me by phone or text about this request.
          </label>
        </div>
        {hasError('consent') && (
          <span className={styles.fieldError} style={{ display: 'block', margin: '-16px 0 16px' }}>
            Please check this box so we can follow up with you.
          </span>
        )}

        <input type="hidden" name="_subject" value="New booking request — Juan Auto Repair" />
        {/* Honeypot: real visitors never see or fill this field; bots that
            auto-fill every input trip it, and Formspree drops the submission. */}
        <input
          type="text"
          name="_gotcha"
          style={{ position: 'absolute', left: -9999, top: 'auto' }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <button type="submit" className="btn btnRed btnBlock" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send My Request'}
        </button>
      </form>
    </>
  );
}
