import Image from 'next/image';
import { RECENT_REPAIRS } from '@/lib/data';
import styles from './RecentWork.module.css';

export default function RecentWork() {
  return (
    <section className="section" id="recent-work">
      <div className="wrap">
        <div className="sectionHead">
          <p className="eyebrow">From the Shop Floor</p>
          <h2>Recent work, explained.</h2>
          <p>
            A look at the kind of problems that come through our bay &mdash; what was wrong, and
            exactly how we fixed it.
          </p>
        </div>
        <div className={styles.repairGrid}>
          {RECENT_REPAIRS.map((repair) => (
            <article className={styles.repairCard} key={repair.id}>
              <div className={styles.repairVisual}>
                <Image
                  src={repair.image}
                  alt={repair.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ objectPosition: repair.imagePosition ?? 'center' }}
                  className={styles.repairImage}
                />
              </div>
              <div className={styles.repairBody}>
                <span className={styles.repairVehicle}>{repair.vehicle}</span>
                <h3>{repair.title}</h3>
                <p className={styles.repairLine}>
                  <b>The problem</b>
                  {repair.problem}
                </p>
                <p className={styles.repairLine}>
                  <b>The fix</b>
                  {repair.fix}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.placeholderNote}>
          These four are placeholder examples showing how this section reads &mdash; swap in
          Juan&apos;s real repair photos any time, the layout won&apos;t need to change.
        </p>
      </div>
    </section>
  );
}
