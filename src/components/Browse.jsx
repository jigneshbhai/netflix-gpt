import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useTrendingMovie from "../hooks/useTrendingMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovie()
  useTrendingMovie()
  useUpcomingMovie()

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
