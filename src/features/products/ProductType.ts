export type TProduct = {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: number;
};

export type TCartItem = TProduct & { quantity: number };
