import arrow from "/src/assets/imgs/arrow-right.png";
import styles from "./TopBanner.module.css"
const TopBannr = () => {
  return (
    <div className={styles.banner}>
      <button>Admission is Open, Grab your seat now</button>
      <span><img src={arrow} alt="icon" /></span>
      <div className={styles.leftShape}></div>
      <div className={styles.rightShape}></div>
      <div className={styles.leftCircle}></div>
      <div className={styles.rightCircle}></div>
    </div>
  )
}

export default TopBannr;