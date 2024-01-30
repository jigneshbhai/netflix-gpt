import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the styles
import lang from "../utils/langConstatnt";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { json } from "react-router-dom";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //search movie from TMDB

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    try {
      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      console.log(gptResults.choices);

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

      const promisArray = gptMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promisArray);

      console.log(tmdbResults);

      dispatch(
        addGptMovieResult({ movieName: gptMovies, movieResult: tmdbResults })
      );
    } catch (error) {
      console.error("Error fetching GPT results:", error);

      toast.error("Something went wrong. Please try again.", {
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="col-span-3 m-4 py-2 px-4 bg-rose-700 text-white rounded-lg"
        >
          {lang[langKey]?.search}
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default GptSearchBar;
