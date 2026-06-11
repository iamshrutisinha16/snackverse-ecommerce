import Cart from '../models/Cart.js';

export const getCart = async (req, res, next) => {
  try {
    let cart = await Cart.findOne().populate('items.product');
    if (!cart) {
      cart = await Cart.create({ items: [], totalPrice: 0 });
    }
    res.json(cart);
  } catch (error) { next(error); }
};

export const addToCart = async (req, res, next) => {
  try {
    const { productId, quantity, price } = req.body;
    let cart = await Cart.findOne();
    if (!cart) cart = await Cart.create({ items: [], totalPrice: 0 });

    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += Number(quantity);
    } else {
      cart.items.push({ product: productId, quantity });
    }
    cart.totalPrice += price * quantity;
    await cart.save();
    res.status(200).json(cart);
  } catch (error) { next(error); }
};