'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrolled } from '@/hooks/useScrolled';
import { SHOP, NAV_LINKS } from '@/lib/data';
import { PhoneIcon, MenuIcon } from './icons';
import styles from './Header.module.css';

export default function Header() {
  const scrolled = useScrolled();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <a className="skipLink" href="#top">
        Skip to main content
      </a>
      <header className={`${styles.siteHeader} ${scrolled ? styles.isScrolled : ''}`}>
        <div className={`wrap ${styles.headerRow}`}>
          <Link href="#top" className="logo">
            <Image
              className="logoImg"
              src="/images/logo.png"
              alt="Juan Auto Repair — home"
              width={900}
              height={349}
              priority
            />
          </Link>

          <nav className={`${styles.mainNav} ${navOpen ? styles.isOpen : ''}`} id="main-nav">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setNavOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#book" className="btn btnRed" style={{ marginLeft: 6 }} onClick={() => setNavOpen(false)}>
              Book a Service
            </a>
          </nav>

          <div className={styles.headerActions}>
            <a className={styles.headerPhone} href={SHOP.phoneHref}>
              <PhoneIcon className={styles.phoneIcon} />
              {SHOP.phone}
            </a>
            <button
              className={styles.navToggle}
              aria-label="Toggle menu"
              aria-expanded={navOpen}
              aria-controls="main-nav"
              onClick={() => setNavOpen((open) => !open)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
