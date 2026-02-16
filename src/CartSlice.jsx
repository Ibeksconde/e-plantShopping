import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Task 2.2: Add item to cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Task 2.2: Remove item from cart based on its name
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // Task 2.2: Update quantity based on name and amount in action.payload
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Task 3: Export action creators for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Task 3: Export reducer as default for store.js
export default CartSlice.reducer;
