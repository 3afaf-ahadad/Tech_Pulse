import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const techNewsApi = createApi({
  reducerPath: "techNewsApi",
  //  l'URL Basic du API
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.to/api/",
  }),
  // les URL specifique pour chaque page/élement dans l'API
  endpoints: (builder) => ({
    getRecentTechNews: builder.query({
      // method GET
      query: () => "articles", // l'URL du endpoint
    }),
  }),
});

// une hook auto-généré par RTK
export const { useGetRecentTechNewsQuery } = techNewsApi;
