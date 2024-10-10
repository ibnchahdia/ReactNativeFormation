// store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

// Combine reducers if you have more slices in the future
const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for Reactotron
    }),
  devTools: __DEV__, 
});

export default store;
