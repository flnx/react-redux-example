import {
  AspectRatio,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
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
        <ButtonGroup spacing="2">
          {quantity > 0 ? (
            <>
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </>
          ) : (
            <Button variant="solid" colorScheme="blue" isDisabled={true}>
              Out of stock
            </Button>
          )}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
