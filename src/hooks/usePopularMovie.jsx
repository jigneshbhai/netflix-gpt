import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store)=>store.movies.popularMovies)

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addPopularMovie(json.results));
  };

  useEffect(() => {
    !popularMovies && getNowPlayingMovies();
  }, []);
};

export default usePopularMovie;
