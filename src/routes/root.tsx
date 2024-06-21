import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';

import { HomePage } from 'src/pages/Home';
import { Cart } from 'src/pages/Create';
import { Layout } from 'src/layout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      errorElement={<div>Something went wrong</div>}
    >
      <Route index element={<HomePage />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);
