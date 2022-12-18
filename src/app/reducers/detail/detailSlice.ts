import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState: any = {
  detail: [],
};

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    addDetail: (state, { payload }) => {
      state.detail = payload;
    },
    removeDetail: (state, { payload }) => {
      state.detail = [];
    },
  },
});

export const { addDetail, removeDetail } = detailSlice.actions;

export const detailReducer = detailSlice.reducer;

export const allDetail = (state: RootState) => state.detail.detail;
