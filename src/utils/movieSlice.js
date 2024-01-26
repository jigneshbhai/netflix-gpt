import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,
  },
  reducers: {
    addNowMoviePlaying: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
  },
});

export const { addNowMoviePlaying } = movieSlice.actions;

export default movieSlice.reducer;
