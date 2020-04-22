// import profilePhoto from '../public/profile_photo.jpeg'
import styles from './IntroSection.module.scss'

export default function IntroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.whiteBox} />
      <div className={styles.purpleBox} />
      <div className={styles.introContainer} >
        {/* <img src={profilePhoto} alt='logo' /> */}
        <img alt='logo' />
        <div className={styles.nameHeading}>
          <h2>Kyle McAlpine</h2>
          <h4>Engineering &amp; Product</h4>
        </div>
      </div>
    </div>
  )
}
