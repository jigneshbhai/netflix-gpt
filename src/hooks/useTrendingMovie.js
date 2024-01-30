import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrendingMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovie = () => {
  const dispatch = useDispatch();
  const TrendingMovie = useSelector((store) => store.movies.TrendingMovie);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addTrendingMovie(json.results));
  };

  useEffect(() => {
    !TrendingMovie && getNowPlayingMovies();
  }, []);
};

export default useTrendingMovie;
