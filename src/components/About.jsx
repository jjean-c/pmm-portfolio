import styles from './About.module.css'

const TOOLS_PROFICIENT = ['GA4', 'Figma', 'Claude']
const TOOLS_WORKING = ['Python', 'R', 'Looker', 'Tableau']

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">

        <div className={styles.header}>
          <span className={styles.sectionLabel}>Skills &amp; Tools</span>
        </div>

        <div className={styles.inner}>

          <div className={styles.toolsBlock}>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Proficient</span>
              <div className={styles.tags}>
                {TOOLS_PROFICIENT.map(t => (
                  <span key={t} className={`${styles.toolTag} ${styles.proficient}`}>{t}</span>
                ))}
              </div>
            </div>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Working knowledge</span>
              <div className={styles.tags}>
                {TOOLS_WORKING.map(t => (
                  <span key={t} className={styles.toolTag}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.row}>
            <span className={styles.rowLabel}>Outside work</span>
            <p className={styles.outsideText}>
              Outside work, I enjoy film photography, crochet, and baking, small creatively structured goals. A seasoned Arsenal fan and newbie F1 fan 🤍
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
