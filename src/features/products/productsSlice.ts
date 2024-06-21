import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit/react';
import type { TProduct, TCartItem } from './ProductType';
import productsData from 'src/constants/products.json';


type ProductsState = {
  products: TProduct[];
  cart: TCartItem[];
};

const initialState: ProductsState = {
  products: productsData,
  cart: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const existingProduct = state.cart.find(
        (p) => p.name === action.payload.name
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    // removeFromCart: () => {},
    // decreaseProductQuantity: () => {},
    // increaseProductQuantity: () => {},
  },
});

export const productsReducer = productsSlice.reducer;
export const { addToCart } = productsSlice.actions;