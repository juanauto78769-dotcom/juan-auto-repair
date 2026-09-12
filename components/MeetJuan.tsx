import Image from 'next/image';
import { HOW_IT_WORKS } from '@/lib/data';
import styles from './MeetJuan.module.css';

export default function MeetJuan() {
  return (
    <section className="section bandRaised" id="meet-juan">
      <div className="wrap">
        <div className="sectionHead">
          <p className="eyebrow">Meet Juan</p>
          <h2>30 years, one guy who actually knows your car.</h2>
        </div>
        <div className={styles.aboutGrid}>
          <div className={styles.techCard}>
            <div className={styles.techBadgeWrap}>
              <Image
                src="/images/juan-portrait.jpg"
                alt="Juan, owner and lead technician, standing in the shop"
                width={900}
                height={900}
                className={styles.techBadgeImage}
              />
            </div>
            <div className={styles.techInfo}>
              <h3>Juan</h3>
              <span className={styles.role}>Owner &amp; Lead Technician</span>
              <p>
                Juan has spent 30 years working on domestic and imported vehicles, and runs Juan
                Auto Repair himself &mdash; every car that comes through the bay gets his hands on
                it. He can usually spot what&apos;s wrong faster than most shops can finish the
                write-up, and he&apos;ll tell you straight what actually needs fixing versus what
                can wait.
              </p>
            </div>
          </div>

          <div>
            <h3 className={styles.howItWorksHeading}>How it works</h3>
            <div className={styles.steps}>
              {HOW_IT_WORKS.map((step) => (
                <div className={styles.step} key={step.number}>
                  <span className={styles.stepNum}>{step.number}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
