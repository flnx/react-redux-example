import { useGetProductsQuery } from 'src/features/products/productsApiSlice';

import { SimpleGrid } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';

import { Product } from './Product';

export const Products = () => {
  const { isLoading, data, error } = useGetProductsQuery('');

  if (isLoading) return <Spinner />;

  if (error) {
    return <div>Something went wrong...</div>;
  }

  const products = data || [];

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
