import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Heading,
  Img,
  Spinner,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from 'src/features/cart/cartSlice';
import { useGetProductsQuery } from 'src/features/products/productsApiSlice';

export const ProductPage = () => {
  const { itemId } = useParams();
  const { isLoading, data, error } = useGetProductsQuery('');
  const dispatch = useDispatch();
  const toast = useToast();
  const boxShadow = useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan');

  if (isLoading) return <Spinner />;

  if (error) {
    return <div>Something went wrong...</div>;
  }

  const product = data?.find((p) => p.name === itemId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCartHandler = () => {
    toast({
      title: 'A new product has been added to your cart',
      status: 'success',
      duration: 1500,
      isClosable: true,
      position: 'top',
    });
    dispatch(addToCart(product));
  };

  const { description, imageUrl, inStock, name, price } = product;

  return (
    <Container maxW="7xl">
      <Center py={6}>
        <Box
          w="lg"
          rounded={'sm'}
          my={5}
          mx={[0, 5]}
          overflow={'hidden'}
          bg="white"
          border={'1px'}
          borderColor="black"
          boxShadow={boxShadow}
        >
          <Box borderBottom={'1px'} borderColor="black">
            <Img
              src={imageUrl}
              roundedTop={'sm'}
              objectFit="cover"
              h="full"
              w="full"
              alt={'Blog Image'}
              aspectRatio={4 / 3}
            />
          </Box>
          <Box p={4}>
            <Box
              bg="black"
              display={'inline-block'}
              px={2}
              py={1}
              color="white"
              mb={2}
            >
              <Text fontSize={'xs'} fontWeight="medium">
                {price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </Text>
            </Box>
            <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
              {name}
            </Heading>
            <Text color={'gray.500'} noOfLines={4}>
              {description}
            </Text>
          </Box>
          <HStack borderTop={'1px'} color="black">
            <Flex
              p={4}
              alignItems="center"
              justifyContent={'space-between'}
              roundedBottom={'sm'}
              cursor={'pointer'}
              w="full"
              onClick={addToCartHandler}
            >
              <Text fontSize={'md'} fontWeight={'semibold'}>
                Add in Cart
              </Text>
              <ArrowIcon />
            </Flex>
            <Flex
              p={4}
              alignItems="center"
              justifyContent={'center'}
              roundedBottom={'sm'}
              borderLeft={'1px'}
              cursor="pointer"
            >
              {inStock} left
            </Flex>
          </HStack>
        </Box>
      </Center>
    </Container>
  );
};

const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
      height="18px"
      width="18px"
      version="1.1"
      id="Layer_1"
      viewBox="0 0 330.001 330.001"
      xmlSpace="preserve"
    >
      <path
        id="XMLID_25_"
        d="M325.607,79.395l-75-75c-4.29-4.291-10.742-5.574-16.347-3.252c-5.605,2.322-9.26,7.792-9.26,13.858v60h-210  c-8.284,0-15,6.716-15,15v225c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-210h195v60c0,6.067,3.655,11.537,9.26,13.858  c1.856,0.769,3.805,1.142,5.737,1.142c3.904,0,7.741-1.524,10.61-4.394l75-75C331.465,94.749,331.465,85.252,325.607,79.395z   M255.001,128.788V51.214l38.787,38.787L255.001,128.788z"
      />
    </svg>
  );
};
