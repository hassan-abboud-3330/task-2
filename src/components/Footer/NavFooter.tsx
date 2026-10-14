import styles from "./NavFooter.module.css"

const NavFooter = ({ className }: { className?: string }) => {
  return (
    <ul className={`${styles.grid} ${className}`} >
      <ul className={styles.box}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Features </a></li>
        <li><a href="#">Our Testimonials</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
      <ul className={styles.box}>
        <li><a href="#">Academic</a></li>
        <li><a href="#">Special Features</a></li>
        <li><a href="#">Gallery</a></li>
      </ul>
      <ul className={styles.box}>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Our Mission</a></li>
        <li><a href="#">Our Vission</a></li>
        <li><a href="#">Awards and Recognitions</a></li>
        <li><a href="#">History</a></li>
        <li><a href="#">Teachers</a></li>
      </ul>
      <ul className={styles.box}>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Information</a></li>
        <li><a href="#">Map & Direction</a></li>
      </ul>
    </ul>
  )
}

export default NavFooter;
