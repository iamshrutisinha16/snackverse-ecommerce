import API from './axios';

export const addProductReview = async (productId, reviewData) => {
  // reviewData mein name, rating, aur comment hoga
  const { data } = await API.post(`/reviews/${productId}`, reviewData);
  return data;
};