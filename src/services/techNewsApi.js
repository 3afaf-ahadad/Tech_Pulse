import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const techNewsApi = createApi({
  reducerPath: "techNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dev.to/api/" }),
  endpoints: (builder) => ({
    getRecentTechNews: builder.query({
      query: () => "articles?tag=technology&per_page=10",
    }),
  }),
});
export const { useGetRecentTechNewsQuery } = techNewsApi;
