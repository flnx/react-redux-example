import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit/react';
import type { TCartItem } from './CartType';

type CartState = TCartItem[];
const initialState: CartState = [];

const cartSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<TCartItem, 'quantity'>>) => {
      const existingProduct = state.find((p) => p.name === action.payload.name);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteFromCart: (state, action: PayloadAction<TCartItem>) => {
      const payloadItem = action.payload;
      return state.filter((i) => i.name !== payloadItem.name);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, deleteFromCart } = cartSlice.actions;
