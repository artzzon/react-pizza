import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async ({ selectedSort, currentPage, activeCategory, searchValue }) => {
    const { data } = await axios.get(
      `https://e68369cd08c98611.mokky.dev/items?sortBy=${selectedSort}&page=${currentPage}&limit=4
      ${activeCategory !== 0 ? "&category=" + activeCategory : ""}
      ${searchValue.length !== 0 ? `&title=*${searchValue}` : ""}`
    );

    return data;
    // setPizzas(res.data.items);
    // setPaginationMeta(res.data.meta);
    // isLoading(false);
  }
);

const initialState = {
  pizzas: [],
  paginationMeta: {},
  status: "loading",
};

const fetchSlice = createSlice({
  name: "fetchPizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = "loading";
        state.pizzas = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.pizzas = action.payload.items;
        state.paginationMeta = action.payload.meta;
        state.status = "succes";
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = "error";
        state.pizzas = [];
      });
  },
});

export default fetchSlice.reducer;
