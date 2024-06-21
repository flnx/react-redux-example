import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from 'src/features/cart/cartSlice';

import { productsApiSlice } from 'src/features/products/productsApiSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
