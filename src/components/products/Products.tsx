import { SimpleGrid } from '@chakra-ui/react';
import { Product } from './Product';
import products from 'src/constants/products.json';

export const Products = () => {
  return (
    <SimpleGrid gap="3" columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}>
      {products.map((p) => (
        <Product productData={p} key={p.name + p.imageUrl} />
      ))}
    </SimpleGrid>
  );
};