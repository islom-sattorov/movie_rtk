import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  movie: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      state.movie = payload;
    },
  },
});

export const movieReducer = movieSlice.reducer;
export const { addMovie } = movieSlice.actions;
export const allMovie = (state: RootState) => state.movie.movie;
