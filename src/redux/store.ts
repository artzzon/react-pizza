import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import sortSlice from "./slices/sortSlice";
import searchSlice from "./slices/searchSlice";
import cartSlice from "./slices/cartSlice";
import fetchSlice from "./slices/fetchSlice";

export const store = configureStore({
  reducer: {
    filterSlice,
    sortSlice,
    searchSlice,
    cartSlice,
    fetchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
