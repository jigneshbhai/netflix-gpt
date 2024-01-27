import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies)

  return (
    <div className="bg-black">
      <div className="-mt-56 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie} />
        <MovieList title={"Trending"} movies={movies.TrendingMovie} />
        <MovieList title={"Popular"} movies={movies.popularMovie} />
        <MovieList title={"UpComing Movies"} movies={movies.UpcomingMovie} />
      </div>
    </div>
  );
}

export default SecondaryContainer