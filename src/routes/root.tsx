import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom';

import { HomePage } from 'src/pages/Home';
import { CartPage } from 'src/pages/Cart';
import { Layout } from 'src/layout';
import { ProductPage } from 'src/pages/Product';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      errorElement={<div>Page not found</div>}
    >
      <Route index element={<HomePage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="items/:itemId" element={<ProductPage />} />
    </Route>
  )
);
