import { configureStore } from "@reduxjs/toolkit";
import { techNewsApi } from "./services/techNewsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    // definir le slice techNewsApi et auto-générer des 'reducers'
    [techNewsApi.reducerPath]: techNewsApi.reducer,
  },
  //  par défaut, essentiel pour valider les données, auto-généré
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(techNewsApi.middleware),
});

// Gestion automatique de la cache, rafraîchissement des données, reconnection
setupListeners(store.dispatch);
export default store;