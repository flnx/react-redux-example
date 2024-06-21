import { Outlet } from 'react-router-dom';
import { Navbar } from 'src/components/Navbar';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Outlet />
      </main>
    </>
  );
};
