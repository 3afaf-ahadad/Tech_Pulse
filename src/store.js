import { configureStore } from "@reduxjs/toolkit";
import { techNewsApi } from "./services/techNewsApi";


export const store = configureStore({
    reducer : {
        [techNewsApi.reducerPath] : techNewsApi.reducer,
    },
    middleware : (getDefaultMiddleware) => get
})
