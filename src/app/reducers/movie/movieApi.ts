import { apiSlice } from "../../api/apiSlice";

export const movieApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getMovies: build.query<
      any,
      { apiKey: string; s: string; type: string; page: number }
    >({
      query: (arg) => {
        const { apiKey, s, type, page } = arg;
        return {
          url: ``,
          params: { apiKey, s, type, page },
        };
      },
      providesTags: ["Movie"],
    }),
  }),
});

export const { useGetMoviesQuery, useLazyGetMoviesQuery } = movieApi;

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
