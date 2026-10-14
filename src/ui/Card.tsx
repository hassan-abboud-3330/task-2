import type { ReactNode } from "react"
import styles from "./Card.module.css"
interface cardProps {
  children: ReactNode
  className?: string
  shadowClr?: string
}
const Card = ({ children, className, shadowClr }: cardProps) => {
  return (
    <article className={`${styles.card} ${className}`}
      style={{ "--shadow-clr": shadowClr } as React.CSSProperties}
    >
      {children}
    </article>
  )
}
export default Card;