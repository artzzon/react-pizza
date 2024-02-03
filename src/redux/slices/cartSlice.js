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
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.type === action.payload.type
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push(action.payload);
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
    minusItem(state, action) {
      const findItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.type === action.payload.type
      );
      if (findItem) {
        findItem.count--;
        state.totalCount--;
        state.totalPrice -= action.payload.price;
      }
      if (findItem.count < 1) {
        state.items = state.items.filter((item) => item.count >= 1);
      }
    },
    plusItem(state, action) {
      const findItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.type === action.payload.type
      );

      if (findItem) {
        findItem.count++;
        state.totalCount++;
        state.totalPrice += action.payload.price;
      }
    },
    removeItem(state, action) {
      const cartItemId = action.payload.id;
      const cartItemType = action.payload.type;
      const cartItemSize = action.payload.size;
      state.items = state.items.filter(
        (item) =>
          item.id !== cartItemId ||
          item.type !== cartItemType ||
          item.size !== cartItemSize
      );
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

export const { addItem, minusItem, plusItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
