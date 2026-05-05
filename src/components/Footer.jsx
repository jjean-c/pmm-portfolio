import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.name}>Jean Chanyapak</p>
        <div className={styles.links}>
          <a href="mailto:j.chanyapak@gmail.com" className={styles.link}>j.chanyapak@gmail.com</a>
          <span className={styles.dot}>·</span>
          <a href="https://www.linkedin.com/in/jeanchanyapak/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
          <span className={styles.dot}>·</span>
          <a href="https://x.com/misconceptionsu" target="_blank" rel="noopener noreferrer" className={styles.link}>X</a>
        </div>
        <p className={styles.location}>Based in San Francisco · Open to full-time roles</p>
      </div>
    </footer>
  )
}
