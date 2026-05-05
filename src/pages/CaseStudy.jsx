import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { CASE_STUDIES } from '../data/caseStudies'
import styles from './CaseStudy.module.css'

export default function CaseStudy() {
  const { id } = useParams()
  const cs = CASE_STUDIES[id]
  useEffect(() => { window.scrollTo(0, 0) }, [id])
  if (!cs) return <Navigate to="/" replace />

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.back}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </Link>
        <div className={styles.navMeta}>
          <span className={styles.navCompany} style={{ color: cs.color }}>{cs.company}</span>
          <span className={styles.navDot}>·</span>
          <span className={styles.navYear}>{cs.year}</span>
        </div>
      </nav>

      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadges}>
            {cs.tags.map(t => <span key={t} className={styles.badge}>{t}</span>)}
          </div>
          <h1 className={styles.headline}>{cs.title}</h1>
          <div className={styles.metaRow}>
            <p className={styles.subheading} style={{ color: cs.color }}>{cs.subheading}</p>
            <div className={styles.metricBlock}>
              <span className={styles.metricVal} style={{ color: cs.color }}>{cs.metric}</span>
              <span className={styles.metricLbl}>{cs.metricLabel}</span>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.content}>
        {/* Two-col: image + intro */}
        <div className={styles.twoCol}>
          <div className={styles.imgCol}>
            <img src={cs.image} alt={cs.imageAlt} className={styles.img} />
          </div>
          <div className={styles.introCol}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle} style={{ color: cs.color }}>The Product</h2>
              <p className={styles.body}>{cs.product}</p>
            </div>
            <div className={styles.divider} />
            <div className={styles.section}>
              <h2 className={styles.sectionTitle} style={{ color: cs.color }}>My Role</h2>
              <p className={styles.body}>{cs.myRole}</p>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle} style={{ color: cs.color }}>What I Did</h2>
          <ul className={styles.list}>
            {cs.whatIDid.map((item, i) => (
              <li key={i} className={styles.listItem}>
                <span className={styles.dash} style={{ color: cs.color }}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Campaigns — Coral only */}
        {cs.campaigns && (
          <>
            <div className={styles.divider} />
            <div className={styles.section}>
              <h2 className={styles.sectionTitle} style={{ color: cs.color }}>Campaigns</h2>
              <div className={styles.campaigns}>
                {cs.campaigns.map((c, i) => (
                  <div key={i} className={styles.campaign} style={{ borderLeftColor: cs.color }}>
                    <div className={styles.campaignLabel}>
                      {c.link
                        ? <Link to={c.link} className={styles.campaignLink} style={{ color: cs.color }}>{c.label} →</Link>
                        : <span>{c.label}</span>}
                    </div>
                    <p className={styles.campaignDesc}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Second image — full width */}
        {cs.secondImage && (
          <div className={styles.fullImg}>
            <img src={cs.secondImage} alt={cs.secondImageAlt} className={styles.fullImgEl} />
            {cs.secondImageCaption && <p className={styles.caption}>{cs.secondImageCaption}</p>}
          </div>
        )}

        {/* Third image — Tarang only */}
        {cs.thirdImage && (
          <div className={styles.fullImg}>
            <img src={cs.thirdImage} alt={cs.thirdImageAlt} className={styles.fullImgEl} />
            {cs.thirdImageCaption && <p className={styles.caption}>{cs.thirdImageCaption}</p>}
          </div>
        )}

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle} style={{ color: cs.color }}>Outcome</h2>
          <p className={`${styles.body} ${styles.outcome}`}>{cs.outcome}</p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle} style={{ color: cs.color }}>What I Learned</h2>
          <p className={styles.body}>{cs.learned}</p>
        </div>

        <div className={styles.ctaRow}>
          {cs.liveUrl && (
            <a href={cs.liveUrl} target="_blank" rel="noopener noreferrer"
               className={styles.ctaPrimary} style={{ background: cs.color, borderColor: cs.color }}>
              View Live Product ↗
            </a>
          )}
          <Link to="/" className={styles.ctaSecondary}>← Back to all work</Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p className={styles.footerName}>Jean Chanyapak</p>
          <div className={styles.footerLinks}>
            <a href="mailto:j.chanyapak@gmail.com" className={styles.footerLink}>j.chanyapak@gmail.com</a>
            <span className={styles.footerDot}>·</span>
            <a href="https://www.linkedin.com/in/jeanchanyapak/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
