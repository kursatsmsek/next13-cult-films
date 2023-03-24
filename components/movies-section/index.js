import React from "react"
import Link from "next/link"
import Image from "next/image"

import styles from "./styles.module.css"

function MoviesSection({ title, movies }) {
  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <Link href={`/movie/${movie.title}`}>
              <Image fill unoptimized alt={movie.title} src={movie.photoUrl} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export { MoviesSection }
