import type { ReactNode } from "react";
import styles from "./MainLayout.module.css"

type layoutProps = {
  children: ReactNode
}

const MainLayout = ({ children }: layoutProps) => {
  return <div className={styles.layout}>
    {children}
  </div>
}

export default MainLayout;