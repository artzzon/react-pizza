import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSort: { name: "популярности ↑", sortProperty: "rating" },
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSelectedSort(state, action) {
      state.selectedSort = action.payload;
    },
  },
});

export const { setSelectedSort } = sortSlice.actions;

export default sortSlice.reducer;
