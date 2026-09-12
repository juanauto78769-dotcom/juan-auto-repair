import { FAQS } from '@/lib/data';
import styles from './Faq.module.css';

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="sectionHead">
          <p className="eyebrow">Common Questions</p>
          <h2>Before you call.</h2>
        </div>
        <div className={styles.faqList}>
          {FAQS.map((faq) => (
            <details className={styles.faqItem} key={faq.id} open={faq.defaultOpen}>
              <summary className={styles.faqQ}>
                <span>{faq.question}</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </summary>
              <div className={styles.faqA}>{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
