import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to hold cart items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action to add a product to the cart
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (!existingItem) {
        state.items.push({ ...product, quantity: 1 });
      } else {
        existingItem.quantity += 1;
      }
    },
    // Action to remove a product from the cart
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
    },
    // Action to clear the cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
