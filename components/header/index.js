import React from "react"
import Link from "next/link"
import { FaPlayCircle } from "react-icons/fa"

import styles from "./styles.module.css"

function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          <FaPlayCircle /> CULTFILMS
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="https://www.github.com/kursatsmsek/next13-cult-films">
            Star Me ❤️
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
