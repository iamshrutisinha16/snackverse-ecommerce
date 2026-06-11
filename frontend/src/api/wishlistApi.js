import API from './axios';

export const fetchWishlist = async () => {
  const { data } = await API.get('/wishlist');
  return data;
};

export const toggleWishlistItem = async (productId) => {
  const { data } = await API.post('/wishlist', { productId });
  return data;
};