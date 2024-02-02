import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import sortSlice from "./slices/sortSlice";
import searchSlice from "./slices/searchSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    filterSlice,
    sortSlice,
    searchSlice,
    cartSlice,
  },
});
