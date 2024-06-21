import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  ButtonGroup,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

import type { TCartItem } from './CartType';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from './cartSlice';
import { useState } from 'react';

export const CartItem = ({ cartItem }: { cartItem: TCartItem }) => {
  const { description, imageUrl, inStock, name, price, quantity } = cartItem;
  const [newQ, setNewQ] = useState(quantity);
  const dispatch = useDispatch();

  const deleteFromCartHandler = () => {
    dispatch(deleteFromCart(cartItem));
  };

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      border="none"
      alignItems={'center'}
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%' }}
        width={{ sm: '120px', md: '250px', lg: '250px' }}
        height={{ base: '200px', sm: '120px', md: 'auto' }}
        aspectRatio={{ base: '16 / 9', md: '4 / 3' }}
        src={imageUrl}
        alt="Caffe Latte"
        rounded="xl"
      />

      <Stack width="100%">
        <CardBody>
          <Heading size="md">{name}</Heading>

          <Text py={{ lg: 2 }}>{description}</Text>
        </CardBody>

        <CardFooter justifyContent="space-between" gap="0.5rem">
          <ButtonGroup>
            <Button variant="solid" colorScheme="blue">
              Buy
            </Button>

            <Button
              variant="solid"
              colorScheme="red"
              onClick={deleteFromCartHandler}
            >
              Remove
            </Button>
          </ButtonGroup>
          <NumberInput size="md" maxW={24} value={newQ} min={0} onChange={(val) => {
            setNewQ(+val)
          }}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </CardFooter>
      </Stack>
    </Card>
  );
};
