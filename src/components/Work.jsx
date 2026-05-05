import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Work.module.css'

const PROJECTS = [
  {
    id: 'coral',
    company: 'Coral',
    role: 'New product category GTM',
    industry: 'Web3',
    headline: 'GTM for a first-of-kind NFT wallet in Thailand',
    metric: '$3.5M',
    metricLabel: 'first-year revenue',
    tags: ['Web3', '0→1 GTM', 'Wallet Launch'],
    type: 'case-study',
    color: '#7AAEC8',
    context: 'Coral was building the first NFT wallet for mainstream consumers in Thailand, a technically complex product in a category most people had never heard of.',
    myRole: 'Led end-to-end GTM: positioning, messaging, launch sequencing, and campaign execution across product and growth.',
    whatIDid: [
      'Defined positioning framework translating NFT/Web3 concepts for non-crypto audiences',
      'Built and executed launch playbook across owned, earned, and partnership channels',
      'Led multiple B2B2C campaigns with restaurants, events, and sports including the Port FC digital collectibles campaign',
    ],
    outcome: '10k NFTs minted. Established Coral as a unique collectible and loyalty platform.',
    caseStudyUrl: 'https://www.notion.so/Helping-Products-Find-Their-People-28bca4d4114e80b5a898edd7e7cc77fb',
    image: null,
  },
  {
    id: 'portfc',
    company: 'Port FC',
    role: 'Consumer campaign launch',
    industry: 'Web3 · Sports',
    headline: 'Digital collectibles campaign scaling to 6,000 fans',
    metric: '6,000',
    metricLabel: 'users acquired',
    tags: ['Campaign', 'Digital Collectibles', 'Community'],
    type: 'case-study',
    color: '#8AA88A',
    context: 'Thai Port FC wanted to deepen fan engagement and increase ticket sales through digital collectibles, a format their fanbase had never encountered before.',
    myRole: 'Owned campaign strategy and execution from concept through launch, working cross-functionally with product and Port FC marketing teams.',
    whatIDid: [
      'Reframed digital collectibles as fan identity, not crypto investment',
      'Designed tiered drop mechanics to drive scarcity and repeat engagement',
      'Coordinated launch across club social, stadium activations, and in-app moments',
    ],
    outcome: '6,000 users acquired within the campaign window. Highest single-campaign user acquisition for Coral.',
    caseStudyUrl: 'https://www.notion.so/Helping-Products-Find-Their-People-28bca4d4114e80b5a898edd7e7cc77fb',
    image: null,
  },
  {
    id: 'linewise',
    company: 'LineWise',
    role: 'First PMM, B2B SaaS',
    industry: 'AI / SaaS',
    headline: 'Website messaging reframe that moved the pipeline needle',
    metric: '+30%',
    metricLabel: 'inbound conversion',
    tags: ['Positioning', 'AI / SaaS', 'Messaging'],
    type: 'case-study',
    color: '#9B8EC4',
    context: 'LineWise (YC) had a strong product but messaging that buried the value prop in technical language, costing them B2B conversion.',
    myRole: 'First marketing hire, led positioning and full messaging reframe, working with the founders and the technical team.',
    whatIDid: [
      'Ran customer interviews to extract the language buyers actually used to describe their pain',
      'Rewrote homepage, product pages, and key CTAs around outcome-led positioning',
      'Built product and founder branding',
    ],
    outcome: '30% lift in inbound conversion rate.',
    caseStudyUrl: 'https://www.notion.so/PMM-Positioning-Experiment-Rollstack-328ca4d4114e802eac2dc117f6128638',
    image: null,
  },
  {
    id: 'tarang',
    company: 'Tarang',
    role: 'AI-assisted build',
    industry: 'Productivity',
    headline: 'A daily ritual for people who want their time to reflect what actually matters',
    metric: 'Live',
    metricLabel: 'product',
    tags: ['Vibe Coding', 'AI Build', 'Productivity'],
    type: 'build',
    color: '#7A2535',
    caseStudyUrl: '/work/tarang',
    context: 'A personal project exploring how AI can help people build daily routines aligned with their actual values — not just a to-do list.',
    myRole: 'Solo builder — concept, design, and development using AI-assisted coding tools.',
    whatIDid: [
      'Designed the product concept and user flow from scratch',
      'Built and deployed a working web app using AI coding tools',
      'Shipped to Netlify as a live, usable product',
    ],
    outcome: 'Live product. Demonstrates end-to-end ability to concept, build, and ship with AI tools.',
    liveUrl: 'https://tarang-time.vercel.app/login',
    image: null,
  },
]

export default function Work() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId(prev => prev === id ? null : id)

  return (
    <section className={styles.work} id="work">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionLabel}>Selected Work</span>
          <h2 className={styles.sectionTitle}>What I've built</h2>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((p) => {
            const isOpen = openId === p.id
            const isBuild = p.type === 'build'

            return (
              <article
                key={p.id}
                className={`${styles.card} ${isOpen ? styles.cardOpen : ''} ${isBuild ? styles.cardBuild : ''}`}
                style={{ '--accent': p.color }}
              >
                {/* Collapsed */}
                <button
                  className={styles.cardBtn}
                  onClick={() => toggle(p.id)}
                  aria-expanded={isOpen}
                >
                  <div className={styles.cardMeta}>
                    <div className={styles.cardDot} style={{ background: p.color }} />
                    <span className={styles.cardIndustry}>{p.industry}</span>
                    {isBuild && <span className={styles.aiBadge}>Built with AI</span>}
                  </div>
                  <div className={styles.cardMain}>
                    <div className={styles.cardLeft}>
                      <div className={styles.cardCompany}>{p.company}</div>
                      <div className={styles.cardRoleLabel}>{p.role}</div>
                      <p className={styles.cardHeadline}>{p.headline}</p>
                      <div className={styles.cardTags}>
                        {p.tags.map(t => <span key={t} className={styles.cardTag}>{t}</span>)}
                      </div>
                    </div>
                    <div className={styles.cardRight}>
                      <span className={styles.cardMetric}>{p.metric}</span>
                      <span className={styles.cardMetricLabel}>{p.metricLabel}</span>
                      <div className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>
                        <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                          <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded */}
                <div className={`${styles.cardBody} ${isOpen ? styles.cardBodyOpen : ''}`}>
                  <div className={styles.cardBodyInner}>

                    {/* Image slot — renders when image is provided */}
                    {p.image && (
                      <div className={styles.imageSlot}>
                        <img src={p.image} alt={`${p.company} asset`} className={styles.projectImage} />
                      </div>
                    )}

                    <div className={styles.expandGrid}>
                      <div>
                        <span className={styles.expandLabel} style={{ color: p.color }}>Context</span>
                        <p className={styles.expandText}>{p.context}</p>
                      </div>
                      <div>
                        <span className={styles.expandLabel} style={{ color: p.color }}>My Role</span>
                        <p className={styles.expandText}>{p.myRole}</p>
                      </div>
                    </div>

                    <div>
                      <span className={styles.expandLabel} style={{ color: p.color }}>What I Did</span>
                      <ul className={styles.expandList}>
                        {p.whatIDid.map((item, i) => (
                          <li key={i} className={styles.expandListItem}>
                            <span className={styles.expandDash} style={{ color: p.color }}>—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className={styles.expandLabel} style={{ color: p.color }}>Outcome</span>
                      <p className={styles.outcomeText}>{p.outcome}</p>
                    </div>

                    <div className={styles.expandCta}>
                      {isBuild ? (
                        <>
                          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                            View Live ↗
                          </a>
                          {p.caseStudyUrl && (
                            <Link to={p.caseStudyUrl} className="btn btn--secondary">
                              Case Study →
                            </Link>
                          )}
                        </>
                      ) : (
                        <Link to={`/work/${p.id}`} className="btn btn--secondary">
                          Read Case Study →
                        </Link>
                      )}
                    </div>

                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
