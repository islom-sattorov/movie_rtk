import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieAPI = "https://www.omdbapi.com";
export const movieAPIKEY = "ae80e808";

// http://www.omdbapi.com/?apikey=[yourkey]&
// http://img.omdbapi.com/?apikey=[yourkey]&

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${movieAPI}` }),
  tagTypes: ["Movie", "Series", "Detail"],
  keepUnusedDataFor: 30,
  endpoints: (build) => ({}),
});
