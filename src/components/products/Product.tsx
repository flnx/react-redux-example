import {
  AspectRatio,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import type { Product as TProduct } from '../../types/Product';

export const Product = ({ productData }: { productData: TProduct }) => {
  const { description, imageUrl, name, price, quantity } = productData;

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
            isDisabled={quantity === 0}
          >
            Add to cart
          </Button>
          <Text
            color={quantity > 0 ? 'green.500' : 'red.500'}
            fontSize="xs"
            fontWeight="600"
            ml="auto"
          >
            {quantity} in stock
          </Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};
