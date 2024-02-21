import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: {} },
  reducers: {
    addToCart: (state, action) => {
      const { userIdToAdd, newItem } = action.payload;
      state.items[userIdToAdd] = state.items[userIdToAdd]
        ? [...state.items[userIdToAdd], newItem]
        : [newItem];
    },
    removeFromCart: (state, action) => {
      const { userIdToRemove, itemIdToRemove } = action.payload;
      if (state.items[userIdToRemove]) {
        const itemIndexToRemove = state.items[userIdToRemove].findIndex(
          (item) => item.id === itemIdToRemove
        );
        if (itemIndexToRemove !== -1) {
          state.items[userIdToRemove].splice(itemIndexToRemove, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
