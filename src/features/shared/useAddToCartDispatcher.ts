import type { TProduct } from 'src/features/products/ProductType';

import { useDispatch } from 'react-redux';
import { addToCart } from 'src/features/cart/cartSlice';

export const useAddToCartDispatcher = () => {
  const dispatch = useDispatch();

  const addToCartDispatcher = (product: TProduct) => {
    dispatch(addToCart(product));
  };

  return { addToCartDispatcher };
};
