import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array to hold cart items
  },
  reducers: {
    // Add an item to the cart
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // If item already exists, increment the quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add the new item with a quantity of 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Update the quantity of an existing item in the cart
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
        if (existingItem.quantity <= 0) {
          // If quantity is zero or less, remove the item
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    },
    // Remove an item from the cart
    removeItem: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
    // Clear all items from the cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export the actions to be used in components
export const { addItem, updateQuantity, removeItem, clearCart } = cartSlice.actions;

// Export the reducer to be added to the store
export default cartSlice.reducer;
