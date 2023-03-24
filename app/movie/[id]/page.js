import React from "react"
import Movies from "@/mocks/movies.json"
import { MovieContainer } from "@/containers/movie"

import { notFound } from "next/navigation"
import { getAdvicedMovies, getCultMovies } from "@/services/apiCalls"

async function MoviePage({ params, searchParams }) {
  const cultMoviesPromise = getCultMovies()
  const advicedMoviesPromise = getAdvicedMovies()

  const [cultMovies, advicedMovies] = await Promise.all([
    cultMoviesPromise,
    advicedMoviesPromise,
  ])

  let movieDetail = cultMovies.find(
    (movie) => movie.title === decodeURIComponent(params.id)
  )

  if (movieDetail === undefined) {
    movieDetail = advicedMovies.find(
      (movie) => movie.title === decodeURIComponent(params.id)
    )
  }

  if (!movieDetail) {
    notFound()
  }

  if (searchParams.error === "true") {
    throw new Error("Something went wrong!")
  }

  return <MovieContainer movie={movieDetail} />
}

export default MoviePage
