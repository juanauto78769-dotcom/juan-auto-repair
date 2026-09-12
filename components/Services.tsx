import { SERVICES } from '@/lib/data';
import styles from './Services.module.css';

const ICON_PATHS: Record<string, React.ReactNode> = {
  'oil-fluid': (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  diagnostics: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  'ac-repair': (
    <>
      <path d="M20 17.5A2.5 2.5 0 0 1 17.5 20H6.5A2.5 2.5 0 0 1 4 17.5v-1.9a2 2 0 0 1 .59-1.42L7 11.6V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4.6l2.41 2.58c.38.38.59.9.59 1.42z" />
      <path d="M9 22v-3M15 22v-3" />
    </>
  ),
  brakes: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M17.7 6.3l-2.1 2.1M8.4 15.6l-2.1 2.1" />
    </>
  ),
  battery: (
    <>
      <rect x="3" y="8" width="15" height="9" rx="1.5" />
      <path d="M18 11h2.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H18" />
      <path d="M7 8v-1.5M11 8v-1.5" />
    </>
  ),
  tires: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.9 6.9l1.4 1.4M15.7 15.7l1.4 1.4M17.1 6.9l-1.4 1.4M8.3 15.7l-1.4 1.4" />
    </>
  ),
  suspension: (
    <>
      <path d="M12 3v4M12 17v4M5 7l3 2M16 15l3 2M5 17l3-2M16 9l3-2" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  'scheduled-maintenance': (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 9h18M8 4v3M16 4v3" />
      <path d="m9 14 2 2 4-4" />
    </>
  ),
  transmission: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
    </>
  ),
};

export default function Services() {
  return (
    <section className="section bandRaised" id="services">
      <div className="wrap">
        <div className="sectionHead">
          <p className="eyebrow">What We Fix</p>
          <h2>Full-service repair, one bay.</h2>
          <p>
            From routine maintenance to check-engine-light mysteries &mdash; domestic and
            imported, we&apos;ve got the diagnostic tools and the years behind the wheel to
            handle it.
          </p>
        </div>
      </div>
      <div className="wrap">
        <div className={styles.serviceGrid}>
          {SERVICES.map((service) => (
            <div className={styles.serviceCard} key={service.id}>
              <div className={styles.serviceIcon}>
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
                  {ICON_PATHS[service.id]}
                </svg>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
