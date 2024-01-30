import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACK_LOGO } from "../utils/constant";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BACK_LOGO} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GPTSearch;
