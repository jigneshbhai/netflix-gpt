import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovie = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addUpcomingMovie(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useUpcomingMovie;
