import { apiSlice } from "../../api/apiSlice";

export const detailApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getDetail: build.query<any, { apiKey: string; i: any; plot: string }>({
      query: (arg) => {
        const { apiKey, i, plot } = arg;
        return {
          url: ``,
          params: { apiKey, i, plot },
        };
      },
      providesTags: ["Detail"],
    }),
  }),
});

export const { useGetDetailQuery } = detailApi;
