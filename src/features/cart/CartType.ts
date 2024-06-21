import type { TProduct } from '../products/ProductType';
export type TCartItem = TProduct & { quantity: number };