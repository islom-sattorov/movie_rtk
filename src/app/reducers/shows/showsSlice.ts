import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  show: [],
};

export const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    addShows: (state, { payload }) => {
      state.show = payload;
    },
  },
});

export const { addShows } = showSlice.actions;
export const allShow = (state: RootState) => state.show.show;
export const showReducer = showSlice.reducer;
