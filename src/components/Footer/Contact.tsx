import { mail, phone, location } from "../../assets/icons/icons";
import styles from "./Contact.module.css"

const Contact = ({ className }: { className?: string }) => {
  return (
    <div className={`${styles.contact} ${className}`}>
      <div>
        <div className={styles.icon}><img src={mail} alt="icon" /></div>
        <p>hello@littlelearners.com</p>
      </div>
      <div>
        <div className={styles.icon}><img src={phone} alt="icon" /></div>
        <p>+91 91813 23 2309</p>
      </div>
      <div>
        <div className={styles.icon}><img src={location} alt="icon" /></div>
        <p>Somewhere in the World</p>
      </div>
    </div>
  )
}

export default Contact;