import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li>Resumè</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <p>Site built and designed by me.</p>
      <p>Frontend source <a href='https://github.com/kylejm/kylejm-web-app'>here</a>.</p>
      <p>Backend source <a href='https://github.com/kylejm/kylejm-backend'>here</a>.</p>
    </div>
  )
}
