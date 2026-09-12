'use client';

import type { ReactNode } from 'react';
import { useParallax } from '@/hooks/useParallax';
import styles from './Footer.module.css';

/**
 * Thin client wrapper that owns just the scroll-linked background drift.
 * Everything else in the footer is static markup passed in as children from
 * the server component, so only this shell needs to ship JS.
 */
export default function FooterParallax({ children }: { children: ReactNode }) {
  const [sectionRef, bgRef] = useParallax('footer');

  return (
    <footer className={styles.siteFooter} ref={sectionRef}>
      <div
        className={styles.footerBg}
        ref={bgRef}
        style={{ backgroundImage: "url('/images/footer-bg.jpg')" }}
      />
      <div className={styles.footerOverlay} />
      <div className={styles.footerStripe} />
      {children}
    </footer>
  );
}
