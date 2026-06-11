import Review from '../models/Review.js';
import Product from '../models/Product.js';

export const createProductReview = async (req, res, next) => {
  try {
    const { name, rating, comment } = req.body;
    const product = await Product.findById(req.params.productId);

    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }

    const review = await Review.create({ product: req.params.productId, name, rating, comment });

    // Recalculate product rating
    const reviews = await Review.find({ product: req.params.productId });
    product.numReviews = reviews.length;
    product.rating = reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;
    await product.save();

    res.status(201).json({ message: 'Review added', review });
  } catch (error) { next(error); }
};