import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import the cartReducer from CartSlice

// Configure the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Associate the cartReducer with the 'cart' key
    // Add other reducers here if needed
  },
});

export default store;
