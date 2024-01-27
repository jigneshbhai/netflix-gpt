import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,
    trailerVideo: null,
    popularMovie: null,
    TrendingMovie: null,
    UpcomingMovie: null
  },
  reducers: {
    addNowMoviePlaying: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTrendingMovie: (state, action) => {
      state.TrendingMovie = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.UpcomingMovie = action.payload;
    },
  },
});

export const {
  addNowMoviePlaying,
  addMovieTrailer,
  addPopularMovie,
  addTrendingMovie,
  addUpcomingMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
