import express from 'express';
const router = express.Router();
import { getProducts, getProductById, createProduct } from '../controllers/productController.js';

router.route('/').get(getProducts).post(createProduct);
router.route('/:id').get(getProductById);
export default router;