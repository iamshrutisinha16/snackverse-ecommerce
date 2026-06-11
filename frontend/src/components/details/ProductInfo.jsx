import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { WishlistContext } from '../../context/WishlistContext';
import { ShoppingCart, Heart, Shield } from 'lucide-react';

const ProductInfo = ({ product }) => {
  const [qty, setQty] = useState(1);
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);

  const favorite = isInWishlist(product._id);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <span className="text-xs font-black text-amber-600 uppercase tracking-widest">{product.category?.name}</span>
        <h1 className="text-3xl md:text-4xl font-black text-gray-900">{product.name}</h1>
      </div>
      <p className="text-2xl font-black text-gray-900">₹{product.price}</p>
      <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>
      <hr className="border-gray-100" />
      
      {/* Dynamic Quantity Controller */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
          <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-4 py-2 hover:bg-gray-200 font-bold">-</button>
          <span className="px-4 py-2 font-bold text-sm text-gray-800">{qty}</span>
          <button onClick={() => setQty(q => q + 1)} className="px-4 py-2 hover:bg-gray-200 font-bold">+</button>
        </div>
        <button
          onClick={() => addToCart(product._id, qty, product.price)}
          className="flex-grow bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center space-x-2 transition shadow-md shadow-amber-500/10"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Add to Bag</span>
        </button>
        <button
          onClick={() => toggleWishlist(product._id)}
          className={`p-3 rounded-xl border transition ${favorite ? 'border-red-200 bg-red-50 text-red-500' : 'border-gray-200 text-gray-400 hover:text-gray-600'}`}
        >
          <Heart className="w-5 h-5 fill-current" />
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;