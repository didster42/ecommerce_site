import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './modules/cartSlice';
import inventoryReducer from './modules/inventorySlice'
 
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        inventory: inventoryReducer
    }
});

export default store;