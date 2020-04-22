import IntroSection from "../components/IntroSection"
import InstaSection from "../components/InstaSection"
import Footer from "../components/Footer"
import styles from "./index.module.scss"

export default function Site() {
  return (
    <div className={styles.container}>
      <IntroSection />
      <InstaSection />
      <Footer />
    </div>
  )
}
