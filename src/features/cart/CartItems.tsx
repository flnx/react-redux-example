import { useSelector } from 'react-redux';
import type { RootState } from 'src/store/store';
import { CartItem } from './CartItem';
import { Box, Divider, Flex, Text } from '@chakra-ui/react';

export const CartItems = () => {
  const cartItems = useSelector((state: RootState) => state.cart);

  if (cartItems.length === 0) {
    return (
      <Box>
        <Text fontSize="1.25rem" fontWeight={300}>Your cart is empty</Text>
      </Box>
    );
  }

  return (
    <Flex
      flexDirection="column"
      p="1.5rem"
      backgroundColor="white"
      rounded="xl"
      gap="1rem"
    >
      {cartItems.map((c, i) => (
        <div key={c.name}>
          <CartItem cartItem={c} />
          {cartItems.length - 1 !== i && <Divider mt="1rem" />}
        </div>
      ))}
    </Flex>
  );
};
