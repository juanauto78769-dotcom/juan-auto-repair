'use client';

import { ArrowUpIcon } from './icons';
import styles from './Footer.module.css';

export default function BackToTopButton() {
  return (
    <button
      className={styles.backToTop}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'auto'
            : 'smooth',
        })
      }
    >
      <ArrowUpIcon />
      Back to Top
    </button>
  );
}
