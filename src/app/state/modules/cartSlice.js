import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalCost: 0,
    productIds: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState, 
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);

            if(existingItem) {
                existingItem.quantity++;
                state.totalQuantity++;
                state.totalCost += newItem.price;
            }

            else {
                state.items.push({
                    id: newItem.id,
                    image: newItem.image,
                    title: newItem.title,
                    quantity: 1,
                    price: newItem.price
                })
                state.totalQuantity++;
                state.productIds.push(newItem.id);
                state.totalCost += newItem.price;
            }
        },

        removeFromCart(state, action) {
            const itemId = action.payload;
            const existingItem = state.items.find((item) => item.id === itemId);

            existingItem.quantity--;
            state.totalQuantity--;
            state.totalCost-=existingItem.price;

            if(existingItem.quantity === 0) {
                const itemIndex = state.items.indexOf(existingItem);
                state.items.splice(itemIndex, 1);

                const index = state.productIds.indexOf(itemId);
                state.productIds.splice(index, 1);
            }
        },

        removeCartItem(state, action) {
            const itemId = action.payload;
            const existingItem = state.items.find((item) => item.id === itemId);
            const itemIndex = state.items.indexOf(existingItem);
            state.items.splice(itemIndex, 1);

            state.totalQuantity--;
            state.totalCost -= (existingItem.price * existingItem.quantity);
            const index = state.productIds.indexOf(itemId);
            state.productIds.splice(index, 1);
        },

        emptyCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.productIds = [];
            state.totalCost = 0;
        }
    }
});

export const {addToCart, removeFromCart, removeCartItem, emptyCart} = cartSlice.actions;

export default cartSlice.reducer;