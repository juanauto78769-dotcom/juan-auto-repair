import { SHOP } from '@/lib/data';
import { PhoneIcon } from './icons';
import BookingForm from './BookingForm';
import styles from './BookingSection.module.css';

export default function BookingSection() {
  return (
    <section className="section bandRaised" id="book">
      <div className="wrap">
        <div className="sectionHead">
          <p className="eyebrow">Book a Service</p>
          <h2>Tell us what&apos;s going on.</h2>
          <p>
            Fill out the form and Juan will get back to you &mdash; or just call if you&apos;d
            rather talk it through first.
          </p>
        </div>

        <div className={styles.bookGrid}>
          <div className={styles.bookInfo}>
            <div>
              <h3>Talk to us directly</h3>
              <a className={styles.callNow} href={SHOP.phoneHref}>
                <PhoneIcon />
                {SHOP.phone}
              </a>
            </div>
            <div className={styles.bookFact}>
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
                <path d="M12 6v6l4 2" />
              </svg>
              <div>
                <b>We respond within minutes</b>
                <span>During normal shop hours, most calls and requests get an answer fast.</span>
              </div>
            </div>
            <div className={styles.bookFact}>
              <PhoneIcon />
              <div>
                <b>Call anytime</b>
                <span>
                  Reach us at {SHOP.phone} &mdash; after hours, leave a message and we&apos;ll
                  call first thing.
                </span>
              </div>
            </div>
            <div className={styles.bookFact}>
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
                <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <b>{SHOP.addressLine1}</b>
                <span>{SHOP.addressLine2}</span>
              </div>
            </div>
          </div>

          <div className={styles.bookFormPanel}>
            <p className={styles.lede}>
              Every field marked <strong style={{ color: 'var(--text)' }}>required</strong> is
              needed to get you booked &mdash; the rest just helps Juan prep before you arrive.
            </p>
            <BookingForm idPrefix="book" />
          </div>
        </div>
      </div>
    </section>
  );
}
