import {
  Box,
  Container,
  Flex,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

export const Navbar = () => {
  return (
    <Box
      as="header"
      bg={useColorModeValue('gray.50', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      py={{ base: 6 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.100', 'gray.900')}
    >
      <Container maxWidth="7xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Link href="/" fontWeight="800">
            Web App
          </Link>

          <Flex as="nav" gap="5">
            <Link href="/about" fontWeight="600">About</Link>
            <Link href="/discover" fontWeight="600">Discover</Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
