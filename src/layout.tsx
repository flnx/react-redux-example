import { Outlet } from 'react-router-dom';
import { Navbar } from 'src/components/Navbar';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
