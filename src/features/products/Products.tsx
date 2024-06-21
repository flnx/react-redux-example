import { SimpleGrid } from '@chakra-ui/react';
import { Product } from './Product';
import { TCartItem, TProduct } from './ProductType';

type ProductsProps = {
  products: TProduct[] | TCartItem[];
};

export const Products = ({ products }: ProductsProps) => {

  return (
    <SimpleGrid
      gap="3"
      columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}
      justifyItems={{ base: 'center', sm: 'stretch' }}
    >
      {products.map((p) => (
        <Product productData={p} key={p.name + p.imageUrl} />
      ))}
    </SimpleGrid>
  );
};
