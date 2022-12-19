import { apiSlice } from "../../api/apiSlice";

export const showApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getShows: build.query<
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
      providesTags: ["Series"],
    }),
  }),
});

export const { useGetShowsQuery, useLazyGetShowsQuery } = showApi;

// https://www.omdbapi.com/?apiKey=ae80e808&s=Harry&type=Movie&page=1
// https://www.omdbapi.com/?apiKey=ae80e808?s=Harry&type=Movie&page=1
