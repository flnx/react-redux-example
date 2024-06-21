import { useSelector } from 'react-redux';
import { Products } from 'src/features/products/Products';
import type { RootState } from 'src/store/store';

export const HomePage = () => {
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <section>
      <Products products={products} />
    </section>
  );
};
