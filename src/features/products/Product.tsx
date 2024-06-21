import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import type { TCartItem, TProduct } from './ProductType';
import { useDispatch } from 'react-redux';
import { addToCart } from './productsSlice';

export const Product = ({ productData }: { productData: TProduct | TCartItem }) => {
  const { description, imageUrl, name, price, inStock } = productData;
  const dispatch = useDispatch();
  const toast = useToast();

  const handleAddToCard = () => {
    dispatch(addToCart(productData));
    toast({
      title: name + " has been added to your cart",
      status: 'success',
      duration: 1500,
      isClosable: true,
      position: 'top'
    });
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageUrl}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </AspectRatio>
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${price.toLocaleString()}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex
          alignItems="center"
          gap="0.25rem"
          justifyContent="space-between"
          w="full"
        >
          <Button
            variant="solid"
            colorScheme="blue"
            isDisabled={inStock === 0}
            onClick={handleAddToCard}
          >
            Add to cart
          </Button>
          <Flex
            color={inStock > 0 ? 'green.500' : 'red.500'}
            fontSize="xs"
            fontWeight="600"
            ml="auto"
            alignItems="center"
            gap={{ base: '1', sm: '0', md: '1' }}
            flexDirection={{ sm: 'column', md: 'row' }}
          >
            <span>{inStock}</span>
            <span>in stock</span>
          </Flex>
        </Flex>
      </CardFooter>
    </Card>
  );
};
