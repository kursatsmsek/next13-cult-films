import HomeContainer from "@/containers/home"
import Movies from "@/mocks/movies.json"
import { getCultMovies, getAdvicedMovies } from "@/services/apiCalls"

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function Home({ params }) {
  await delay(1000)

  const cultMoviesPromise = getCultMovies()
  const advicedMoviesPromise = getAdvicedMovies()

  const [cultMovies, advicedMovies] = await Promise.all([
    cultMoviesPromise,
    advicedMoviesPromise,
  ])

  return <HomeContainer cultMovies={cultMovies} advicedMovies={advicedMovies} />
}

export default Home
