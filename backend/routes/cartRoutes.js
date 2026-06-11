import express from 'express';
const router = express.Router();
import { getCart, addToCart } from '../controllers/cartController.js';

router.route('/').get(getCart).post(addToCart);
export default router;