import { configureStore } from "@reduxjs/toolkit";
import { techNewsApi } from "./services/techNewsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [techNewsApi.reducerPath]: techNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(techNewsApi.middleware),
});
setupListeners(store.dispatch);
