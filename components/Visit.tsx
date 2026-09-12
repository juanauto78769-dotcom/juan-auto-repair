import { SHOP } from '@/lib/data';
import { ArrowRightIcon } from './icons';
import styles from './Visit.module.css';

export default function Visit() {
  return (
    <section className="section" id="visit">
      <div className="wrap">
        <div className="sectionHead">
          <p className="eyebrow">Visit Our Shop</p>
          <h2>Springtown, Texas.</h2>
        </div>
        <div className={styles.visitPanel}>
          <div className={styles.visitCell}>
            <b className={styles.k}>Address</b>
            <p>
              {SHOP.addressLine1}
              <br />
              {SHOP.addressLine2}
            </p>
          </div>
          <div className={styles.visitCell}>
            <b className={styles.k}>Hours</b>
            <p>
              Mon&ndash;Fri: 8:00 AM&ndash;6:00 PM
              <br />
              (closed 1&ndash;2 PM for lunch)
              <br />
              Sat &amp; Sun: Closed
            </p>
          </div>
          <div className={styles.visitCell}>
            <b className={styles.k}>Phone</b>
            <p>
              <a href={SHOP.phoneHref} className={styles.phoneLink}>
                {SHOP.phone}
              </a>
            </p>
          </div>
          <div className={styles.visitCell}>
            <b className={styles.k}>Directions</b>
            <a className="btn btnOutline" href={SHOP.mapsHref} target="_blank" rel="noopener">
              Get Directions
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
