import { FetchArgs } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "../../api/apiSlice";

export const movieApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getMovies: build.query<
      FetchArgs,
      { apiKey: string; s: string; type: string }
    >({
      query: (arg) => {
        const { apiKey, s, type } = arg;
        return {
          url: ``,
          params: { apiKey, s, type },
        };
      },
      providesTags: ["Movie"],
    }),
  }),
});

export const { useGetMoviesQuery } = movieApi;

// export const movieApi = apiSlice.injectEndpoints({
//     endpoints: (build) => ({
//       getMovies: build.query({
//         query: (apiKey, movieText) => ({
//   url: `?apiKey=${apiKey}&s=${movieText}`,
// })
//         },
//         providesTags: ["Movie"],
//       }),
//     }),
//   });

//   export const { useGetMoviesQuery } = movieApi;
