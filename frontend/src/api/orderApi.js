import API from './axios';

export const createOrder = async (orderData) => {
  /* orderData structure: 
     { orderItems, shippingAddress, paymentMethod, itemsPrice, shippingPrice, totalPrice } 
  */
  const { data } = await API.post('/orders', orderData);
  return data;
};

export const fetchOrderDetails = async (orderId) => {
  const { data } = await API.get(`/orders/${orderId}`);
  return data;
};