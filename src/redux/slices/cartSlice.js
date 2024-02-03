import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!findItem) {
        state.items.push(action.payload);
      } else {
        findItem.count++;
      }
      state.totalPrice = state.items.reduce(
        (total, item) => item.price * item.count + total,
        0
      );
      state.totalCount = state.items.reduce(
        (total, item) => item.count + total,
        0
      );
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
