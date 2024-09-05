import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import storiesModalSlice from "./reducers/StoriesModalSlice";
import favouritePageSlice from "./reducers/FavouritePageSlice";
import LayoutSlice from "./reducers/LayoutSlice";
import ShowMorePostSlice from "./reducers/ShowMorePostSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    storiesModalSlice,
    favouritePageSlice,
    LayoutSlice,
    ShowMorePostSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
