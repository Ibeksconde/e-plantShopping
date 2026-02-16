import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Task 5: Configure the Redux store
const store = configureStore({
    reducer: {
        // 'cart' is the name of the slice in the store, managed by cartReducer
        cart: cartReducer,
    },
});

// Task 5: Export the store for use in the application
export default store;
