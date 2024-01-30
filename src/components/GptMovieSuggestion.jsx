import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieResult, movieName } = useSelector((store) => store.gpt);
  if (!movieName) return null;

  return (
    <div className="p-4 m-4 text-white bg-black bg-opacity-70">
      <div>
        {movieName.map((movieName, index) => {
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResult[index]}
          />;
        })}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
