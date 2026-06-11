import express from 'express';
const router = express.Router();
import { createProductReview } from '../controllers/reviewController.js';

router.route('/:productId').post(createProductReview);
export default router;