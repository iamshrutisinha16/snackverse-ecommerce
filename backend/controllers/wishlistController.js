import Wishlist from '../models/Wishlist.js';

export const getWishlist = async (req, res, next) => {
  try {
    let wishlist = await Wishlist.findOne().populate('products');
    if (!wishlist) wishlist = await Wishlist.create({ products: [] });
    res.json(wishlist);
  } catch (error) { next(error); }
};

export const toggleWishlist = async (req, res, next) => {
  try {
    const { productId } = req.body;
    let wishlist = await Wishlist.findOne();
    if (!wishlist) wishlist = await Wishlist.create({ products: [] });

    if (wishlist.products.includes(productId)) {
      wishlist.products = wishlist.products.filter(id => id.toString() !== productId);
    } else {
      wishlist.products.push(productId);
    }
    await wishlist.save();
    res.status(200).json(wishlist);
  } catch (error) { next(error); }
};