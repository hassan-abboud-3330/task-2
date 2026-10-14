import { facebook, twitter, linkedin } from "../../assets/icons/icons";
import styles from "./Terms.module.css"

const Terms = ({ className }: { className?: string }) => {
  return (
    <div className={`${styles.terms} ${className}`}>
      <div className={styles.links}>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy </p>
      </div>
      <div className={styles.social}>
        <div className={styles.icon}><img src={facebook} alt="icon" /></div>
        <div className={styles.icon}><img src={twitter} alt="icon" /></div>
        <div className={styles.icon}><img src={linkedin} alt="icon" /></div>
      </div>
    </div>
  )
}

export default Terms;