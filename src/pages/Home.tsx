import { Products } from 'src/features/products/Products';
import { Container } from '@chakra-ui/react';

export const HomePage = () => {
  return (
    <Container maxW="8xl" py="4rem">
      <section>
        <Products />
      </section>
    </Container>
  );
};
