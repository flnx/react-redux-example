import {
  Box,
  Container,
  Flex,
  Link as CLink,
  useColorModeValue,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Box
      as="header"
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      py={{ base: 6 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.100', 'gray.900')}
    >
      <Container maxWidth="8xl">
        <Flex justifyContent="space-between" alignItems="center">
          <CLink to="/" fontWeight="800" as={Link}>
            Web App
          </CLink>

          <Flex as="nav" gap="5">
            <CLink to="/create" fontWeight="600" as={Link}>
              Create
            </CLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
