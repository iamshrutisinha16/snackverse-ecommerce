import express from 'express';
const router = express.Router();
import { getWishlist, toggleWishlist } from '../controllers/wishlistController.js';

router.route('/').get(getWishlist).post(toggleWishlist);
export default router;