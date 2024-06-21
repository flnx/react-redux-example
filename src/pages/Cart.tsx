import { Box, Container, Heading } from '@chakra-ui/react';
import { CartItems } from 'src/features/cart/CartItems';

export const CartPage = () => {
  return (
    <Box
      backgroundColor="gray.200"
      rounded="md"
      p={{ md: '1.5rem' }}
      minH="100vh"
    >
      <Container maxW="5xl">
        <Heading pb="1.5rem" style={{ textAlign: 'center', marginTop: "1rem" }}>
          Cart
        </Heading>
        <CartItems />
      </Container>
    </Box>
  );
};
