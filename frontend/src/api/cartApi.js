import API from './axios';

export const fetchCart = async () => {
  const { data } = await API.get('/cart');
  return data;
};

export const addItemToCart = async (productId, quantity, price) => {
  const { data } = await API.post('/cart', { productId, quantity, price });
  return data;
};