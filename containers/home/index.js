import FeaturedMovie from "@/components/featured-movie"
import Categories from "@/components/categories"
import React from "react"
import Movies from "@/mocks/movies.json"
import Genres from "@/mocks/genres.json"
import { MoviesSection } from "@/components/movies-section"

async function HomeContainer({ cultMovies, advicedMovies }) {
  return (
    <div>
      <FeaturedMovie movie={cultMovies[Math.floor(Math.random() * 4) + 1]} />
      {/* <Categories categories={Genres.genres.slice(0, 5)} /> */}
      {/* {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            Genres.genres.find(
              (genre) => genre.id.toString() === selectedCategory.id
            ).name
          }
          movies={selectedCategory.movies}
        />
      )} */}
      <MoviesSection title="Cult Films" movies={cultMovies} />
      <MoviesSection title="Developer Advices" movies={advicedMovies} />
    </div>
  )
}

export default HomeContainer
