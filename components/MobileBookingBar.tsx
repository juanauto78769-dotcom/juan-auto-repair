'use client';

import { useEffect, useState } from 'react';
import { SHOP } from '@/lib/data';
import { PhoneIcon, CalendarIcon, CloseIcon } from './icons';
import BookingForm from './BookingForm';
import styles from './MobileBookingBar.module.css';

/**
 * Fixed call/book bar shown only on phones (see the max-width:640px rule in
 * the module CSS), plus the modal it opens. The original page physically
 * moved the single booking form's DOM node into the modal and back; here the
 * modal just renders its own <BookingForm> instance instead, which sidesteps
 * that DOM-shuffling entirely and is the more idiomatic React approach.
 */
export default function MobileBookingBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <>
      <div className={styles.mobileCta}>
        <a className={styles.call} href={SHOP.phoneHref}>
          <PhoneIcon />
          Call Now
        </a>
        <button className={styles.book} type="button" onClick={() => setOpen(true)}>
          <CalendarIcon />
          Book a Service
        </button>
      </div>

      {open && (
        <div
          className={`${styles.modalOverlay} ${styles.isOpen}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            className={styles.modalPanel}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-booking-title"
          >
            <button
              className={styles.modalClose}
              aria-label="Close booking form"
              onClick={() => setOpen(false)}
            >
              <CloseIcon style={{ width: 16, height: 16 }} />
            </button>
            <h3 className={styles.modalTitle} id="mobile-booking-title">
              Book a Service
            </h3>
            <div style={{ marginTop: 16 }}>
              <BookingForm idPrefix="book-mobile" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
