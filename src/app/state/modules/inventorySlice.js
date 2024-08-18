import { getProductData } from "@/app/Backend/DataManager";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState, 
    reducers: {
        setInventory(state, action) {
            state.items = inventoryData;
        }
    }
});

export const {getInventory} = inventorySlice.actions;

export default inventorySlice.reducer;