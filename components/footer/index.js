import React from "react"
import Link from "next/link"
import { FaPlayCircle } from "react-icons/fa"

import styles from "./styles.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://github.com/kursatsmsek" target="_blank">
        Kürşat Şimşek
      </Link>
    </footer>
  )
}

export default Footer
