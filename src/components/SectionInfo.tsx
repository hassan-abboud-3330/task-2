import styles from "./SectionInfo.module.css"
interface SectionProps {
  intro: string
  title: string
  content: string
}
const SectionInfo = ({ intro, title, content }: SectionProps) => {
  return (
    <article className={styles.container}>
      <p className={styles.intro}>{intro}</p>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
    </article>
  )
}
export default SectionInfo;
