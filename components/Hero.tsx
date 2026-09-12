'use client';

import { useParallax } from '@/hooks/useParallax';
import { SHOP } from '@/lib/data';
import { PhoneIcon } from './icons';
import styles from './Hero.module.css';

const STATS = [
  { value: '30', label: 'Years in the Trade' },
  { value: '2', label: 'Domestic + Import' },
  { value: '1', label: 'Owner on the Tools' },
];

export default function Hero() {
  const [sectionRef, bgRef] = useParallax('hero');

  return (
    <section className={styles.hero} ref={sectionRef} aria-labelledby="hero-heading">
      <div
        className={styles.heroBg}
        ref={bgRef}
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className={styles.heroOverlay} />
      <div className={`wrap ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <p className="eyebrow">Springtown, TX &middot; Domestic &amp; Import Specialists</p>
          <h1 id="hero-heading">
            Your car, fixed right &mdash; by <em>someone local.</em>
          </h1>
          <p>
            30 years turning wrenches in Springtown. Juan Auto Repair handles everything from oil
            changes to full engine diagnostics on domestic and imported vehicles &mdash; no
            dealership markup, no guesswork, no surprise bill.
          </p>
          <div className={styles.heroCtas}>
            <a href="#book" className="btn btnRed">
              Book a Service
            </a>
            <a href={SHOP.phoneHref} className="btn btnOutline">
              <PhoneIcon />
              {SHOP.phone}
            </a>
          </div>
          <div className={styles.heroStats}>
            {STATS.map((stat) => (
              <div className={styles.heroStat} key={stat.label}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
