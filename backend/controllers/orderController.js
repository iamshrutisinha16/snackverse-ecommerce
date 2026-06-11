import Order from '../models/Order.js';

export const createOrder = async (req, res, next) => {
  try {
    const { orderItems, shippingAddress, paymentMethod, itemsPrice, shippingPrice, totalPrice } = req.body;
    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error('No order items');
    }
    const order = new Order({ orderItems, shippingAddress, paymentMethod, itemsPrice, shippingPrice, totalPrice });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) { next(error); }
};

export const getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      res.status(404);
      throw new Error('Order not found');
    }
    res.json(order);
  } catch (error) { next(error); }
};