import products from 'src/constants/products.json';

export const getProducts = async () => {

  await new Promise((res) => setTimeout(res, 1500));
  return products;
};
