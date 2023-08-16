import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.selectTitle} bg-gradient-to-r from-teal-200 to-lime-200 bg-clip-text text-transparent`}>مشاريع قمت ببرمجتها</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>GAMES</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>YOUTUBE</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  )
}

export default page
