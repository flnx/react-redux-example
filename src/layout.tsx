import { Outlet } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Container } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Container maxW="8xl" py="4rem">
          <Outlet />
        </Container>
      </main>
    </>
  );
};
