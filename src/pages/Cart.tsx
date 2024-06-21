import { useSelector } from "react-redux";
import { Products } from "src/features/products/Products";
import type { RootState } from 'src/store/store';

export const Cart = () => {
  const products = useSelector((state: RootState) => state.products.cart);

  return (
    <section>
      <h1>Cart Page</h1>

      <Products products={products}/>
    </section>
  );
};
