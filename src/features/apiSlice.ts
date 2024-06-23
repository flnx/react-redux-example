import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { getProducts } from 'src/services/getProducts';

export const productsApiSlice = createApi({
  reducerPath: 'productsApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getProducts: builder.query({
      queryFn: async () => {
        try {
          const data = await getProducts();
          return { data };
        } catch (error: unknown) {
          const errMsg = error instanceof Error ? error.message : String(error);

          return { error: { status: 400, message: errMsg } };
        }
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;