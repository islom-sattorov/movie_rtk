import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieAPI = "http://www.omdbapi.com";
export const movieAPIKEY = "945c363a";

// http://www.omdbapi.com/?apikey=[yourkey]&
// http://img.omdbapi.com/?apikey=[yourkey]&

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${movieAPI}` }),
  tagTypes: ["Movie"],
  endpoints: (build) => ({}),
});
