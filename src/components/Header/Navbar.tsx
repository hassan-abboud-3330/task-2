import { useState } from "react";
import burger from "/src/assets/imgs/burger.png"
import logo from "/src/assets/imgs/logo.png"
import styles from "./Navbar.module.css"

const links = ["Home", "About Us", "Academics", "Admissions", "Student Life", "Contact"];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <ul className={styles.links}>
          {links.map((item, i) =>
            <li
              className={`${styles.link} ${item.toLowerCase() === 'home' && styles.home}`}
              key={i}>
              <a href="#">{item}</a>
            </li>)}
        </ul>
        <div className={styles.burger} onClick={() => setIsOpen(prev => !prev)}>
          <button ><img src={burger} alt="links menu" />
          </button>
        </div>
      </nav>
      {isOpen && <ul className={styles["mobile-links"]}>
        {links.map((item, i) =>
          <li
            className={styles.link}
            onClick={() => { setIsOpen(prev => !prev) }}
            key={i}>
            <a href="#">{item}</a>
          </li>)}
      </ul>}
    </div>


  )
}

export default Navbar;