import Image from 'next/image';
import Link from 'next/link';
import { SHOP } from '@/lib/data';
import FooterParallax from './FooterParallax';
import BackToTopButton from './BackToTopButton';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterParallax>
      <div className={`wrap ${styles.footerTop}`}>
        <div className={styles.footerBrand}>
          <Link href="#top" className="logo">
            <Image
              className={`logoImg ${styles.logoImgFooter}`}
              src="/images/logo.png"
              alt="Juan Auto Repair"
              width={900}
              height={349}
            />
          </Link>
          <p>
            Locally owned auto repair in Springtown, TX. Domestic and imported vehicles,
            diagnosed and fixed by the person who actually works on them.
          </p>
        </div>
        <div className={styles.footerCol}>
          <h4>Services</h4>
          <ul>
            <li>
              <a href="#services">Oil &amp; Fluid Service</a>
            </li>
            <li>
              <a href="#services">Engine Diagnostics</a>
            </li>
            <li>
              <a href="#services">AC Repair</a>
            </li>
            <li>
              <a href="#services">Brake Service</a>
            </li>
            <li>
              <a href="#services">Battery &amp; Charging</a>
            </li>
            <li>
              <a href="#services">Tire Service</a>
            </li>
            <li>
              <a href="#services">Suspension &amp; Steering</a>
            </li>
            <li>
              <a href="#services">Transmission Service</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#top">Home</a>
            </li>
            <li>
              <a href="#recent-work">Recent Work</a>
            </li>
            <li>
              <a href="#meet-juan">Meet Juan</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#book">Book a Service</a>
            </li>
            <li>
              <a href="#visit">Visit Us</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Contact</h4>
          <ul>
            <li>
              <a className={styles.mono} href={SHOP.phoneHref}>
                {SHOP.phone}
              </a>
            </li>
            <li>
              <a href="#visit">
                {SHOP.addressLine1}, {SHOP.addressLine2}
              </a>
            </li>
            <li>
              <a href="#book">Book online &rarr;</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`wrap ${styles.footerBottom}`}>
        <span>
          &copy; {year} Juan Auto Repair. Springtown, TX.{' '}
          <span className={styles.photoCredit}>Vehicle photos via Wikimedia Commons, CC BY-SA 4.0.</span>{' '}
          <a
            className={styles.designCredit}
            href="https://manideep.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designed &amp; Developed by Manideep.design (313-727-5006)
          </a>
        </span>
        <BackToTopButton />
      </div>
    </FooterParallax>
  );
}
