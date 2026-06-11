import express from 'express';
const router = express.Router();
import Order from '../models/Order.js'; 
import { protect } from '../middleware/authMiddleware.js'; // 🔑 Auth checking middleware

router.post('/', protect, async (req, res) => {
  try {
    const {
      orderItems,
      shippingAddress,
      itemsPrice,
      shippingPrice,
      totalPrice,
      paymentMethod,
    } = req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: 'No order items registry found' });
    }

    // New Order Database Instance mapping
    const order = new Order({
      user: req.user._id, // Auth middleware se logged-in user ki ID extract hogi
      orderItems: orderItems.map((x) => ({
        ...x,
        product: x._id, // Schema logic verification mapping
        _id: undefined
      })),
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice,
      isPaid: paymentMethod === 'Cash On Delivery' ? false : true, // Simulated logic
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
    
  } catch (error) {
    console.error("Backend Order Error:", error);
    res.status(500).json({ message: 'Order compilation failed at backend server matrix', error: error.message });
  }
});

export default router;