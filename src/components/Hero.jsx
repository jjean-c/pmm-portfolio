import { Link } from 'react-router-dom'
import styles from './Hero.module.css'
import jeanPhoto from '../assets/jean-profile.jpg'

const INDUSTRIES = ['Fintech', 'Web3', 'AI / SaaS']

const TILES = [
  { id: 'coral',    company: 'Coral',    role: 'New product category GTM', metric: '$3.5M', metricLabel: 'first-year revenue', color: '#7AAEC8' },
  { id: 'portfc',   company: 'Port FC',  role: 'Consumer campaign launch',  metric: '6,000', metricLabel: 'users acquired',     color: '#8AA88A' },
  { id: 'linewise', company: 'LineWise', role: 'First PMM, B2B SaaS',       metric: '+30%',  metricLabel: 'inbound conversion', color: '#9B8EC4' },
]

function scrollToCard(id) {
  setTimeout(() => {
    const card = document.getElementById('card-' + id)
    if (!card) return
    document.querySelectorAll('[data-open="true"]').forEach(c => c.setAttribute('data-open', 'false'))
    card.scrollIntoView({ behavior: 'smooth', block: 'center' })
    card.dispatchEvent(new CustomEvent('expand', { bubbles: true }))
  }, 300)
}

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={`${styles.industryRow} animate-fade-up delay-1`}>
            {INDUSTRIES.map(ind => (
              <span key={ind} className={`tag tag--blue ${styles.industryTag}`}>{ind}</span>
            ))}
          </div>

          <div className={`${styles.nameBlock} animate-fade-up delay-2`}>
            <span className={`label ${styles.helloLabel}`}>Hello, I'm</span>
            <h1 className={styles.name}>Jean<br />Chanyapak</h1>
            <span className={styles.roleSubtitle}>Product Marketing Manager</span>
          </div>

          <p className={`${styles.tagline} animate-fade-up delay-3`}>
            Turning technically complex products into clear market narratives,
            and building the GTM foundation to back them up.
          </p>

          {/* Project tiles */}
          <div className={`${styles.projectTiles} animate-fade-up delay-4`}>
            {TILES.map(t => (
              <a
                key={t.id}
                className={styles.tile}
                href="#work"
                style={{ '--accent': t.color }}
                onClick={(e) => { e.preventDefault(); scrollToCard(t.id) }}
              >
                <div className={styles.tileIdentity}>
                  <div className={styles.tileDot} style={{ background: t.color }} />
                  <span className={styles.tileCompany}>{t.company}</span>
                </div>
                <span className={styles.tileRole}>{t.role}</span>
                <div className={styles.tileBottom}>
                  <span className={styles.tileMetric}>{t.metric}</span>
                  <span className={styles.tileMetricLabel}>{t.metricLabel}</span>
                </div>
              </a>
            ))}
          </div>

          <div className={`${styles.ctaRow} animate-fade-up delay-5`}>
            <a href="#work" className="btn btn--primary">
              View Work
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1v12M1 7l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://file.notion.so/f/f/858564f7-6b31-4943-b09b-baa2e8bc24a0/ddcb5862-ea6c-40fd-967e-a9b19eea9acb/Jean_Chanyapak_Resume_02_26_x.pdf"
              target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
              Resume
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className={`${styles.contactRow} animate-fade-up delay-5`}>
            <a href="mailto:j.chanyapak@gmail.com" className={styles.contactLink}>j.chanyapak@gmail.com</a>
            <span className={styles.contactDot}>·</span>
            <a href="https://www.linkedin.com/in/jeanchanyapak/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>LinkedIn</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className={`${styles.right} animate-fade-in delay-2`}>
          <div className={styles.photoZone}>
            <svg className={`${styles.doodle} ${styles.doodleStarLg}`} viewBox="0 0 34 34" fill="none">
              <path d="M17 2C17 2 18.2 10.5 26 17C18.2 23.5 17 32 17 32C17 32 15.8 23.5 8 17C15.8 10.5 17 2 17 2Z" stroke="#7AAEC8" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <svg className={`${styles.doodle} ${styles.doodleStarSm}`} viewBox="0 0 20 20" fill="none">
              <path d="M10 1C10 1 11 7 16 10C11 13 10 19 10 19C10 19 9 13 4 10C9 7 10 1 10 1Z" stroke="#7A2535" strokeWidth="1.4" strokeLinejoin="round"/>
            </svg>
            <svg className={`${styles.doodle} ${styles.doodleStarXs}`} viewBox="0 0 12 12" fill="none">
              <path d="M6 1C6 1 6.6 4.2 9.5 6C6.6 7.8 6 11 6 11C6 11 5.4 7.8 2.5 6C5.4 4.2 6 1 6 1Z" stroke="#7A2535" strokeWidth="1.3" strokeLinejoin="round"/>
            </svg>
            <svg className={`${styles.doodle} ${styles.doodleWriggle}`} viewBox="0 0 64 28" fill="none">
              <path d="M4 14 C8 6 14 22 20 14 C26 6 32 22 38 14 C44 6 50 22 56 14 C58 11 60 13 62 14" stroke="#7AAEC8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className={styles.photoFrame}>
              <div className={styles.photoAccent} />
              <img src={jeanPhoto} alt="Jean Chanyapak" className={styles.photo} />
              <div className={styles.roleBadge}>
                <span className={styles.roleBadgeText}>PMM · GTM · Positioning</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>scroll</span>
      </div>
    </section>
  )
}
