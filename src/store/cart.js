import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: {} },
  reducers: {
    addToCart(state, action) {
      const { userId, newItem } = action.payload;
      const existingUserCart = state.items[userId] || [];
      const existingItemIndex = existingUserCart.findIndex(
        (item) => item.itemId === newItem.itemId
      );

      if (existingItemIndex === -1) {
        existingUserCart.push({ ...newItem, quantity: 1 });
      } else {
        existingUserCart[existingItemIndex].quantity += 1;
      }

      state.items[userId] = existingUserCart;
    },
    removeFromCart(state, action) {
      const { userId, itemIdToRemove } = action.payload;

      console.log("Before removal - state:", state);

      if (state.items[userId]) {
        const updatedUserCart = state.items[userId].filter(
          (item) => item.itemId !== itemIdToRemove
        );

        console.log("Removed item:", itemIdToRemove);
        console.log("Updated user cart:", updatedUserCart);

        state.items[userId] = updatedUserCart;
      }

      console.log("After removal - state:", state);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
