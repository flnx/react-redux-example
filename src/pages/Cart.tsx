import { Box, Container, Heading } from '@chakra-ui/react';
import { CartItems } from 'src/features/cart/CartItems';

export const Cart = () => {
  return (
    <Box backgroundColor="gray.200" rounded="md" p="1.5rem">
      <Container maxW="5xl">
        <Heading pb="1.5rem">Your cart</Heading>

        <CartItems />
      </Container>
    </Box>
  );
};
