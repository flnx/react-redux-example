import { SimpleGrid } from '@chakra-ui/react';
import { Product } from './Product';

export const Products = () => {
  return (
    <SimpleGrid gap="3" columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </SimpleGrid>
  );
};
