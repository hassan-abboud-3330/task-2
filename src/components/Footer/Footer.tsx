import Card from "../../ui/Card";
import Contact from "./Contact";
import NavFooter from "./NavFooter";
import Terms from "./Terms";
import { logo } from "../../assets/icons/icons";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <Card className={styles.footer}>
      <div className={styles.footer__head}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" draggable={false} />
          <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination. </p>
        </div>
        <Contact className={styles.footer__contact} />
      </div>
      <NavFooter className={styles.footer__nav} />
      <Terms className={styles.footer__terms} />
      <p className={styles.rights}>Copyright © [2023] Little Learners Academy. All rights reserved.</p>
    </Card>
  )
}

export default Footer;