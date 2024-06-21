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
} from '@chakra-ui/react';

import type { TCartItem } from './CartType';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from './cartSlice';

export const CartItem = ({ cartItem }: { cartItem: TCartItem }) => {
  const { description, imageUrl, inStock, name, price, quantity } = cartItem;
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
        width={{ sm: '160px', md: '250px', lg: '250px' }}
        height={{ sm: '160px', md: 'auto' }}
        aspectRatio={{ base: '16 / 9', md: '4 / 4' }}
        src={imageUrl}
        alt="Caffe Latte"
        rounded="xl"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{name}</Heading>

          <Text py={{ lg: 2 }}>{description}</Text>
        </CardBody>

        <CardFooter>
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
        </CardFooter>
      </Stack>
    </Card>
  );
};
