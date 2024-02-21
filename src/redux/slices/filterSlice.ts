import { createSlice } from "@reduxjs/toolkit";

interface FilterSliceState {
  activeCategory: number;
}

const initialState: FilterSliceState = {
  activeCategory: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
  },
});

export const { setActiveCategory } = filterSlice.actions;

export default filterSlice.reducer;
