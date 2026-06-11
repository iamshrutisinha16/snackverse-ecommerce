import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'; 
import { WishlistContext } from '../../context/WishlistContext'; // 👈 Wishlist context link kiya

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext); // 👈 Methods pull kiye
  const navigate = useNavigate();

  // ⚡ Click event control function for details redirect
  const handleCardClick = () => {
    navigate(`/product/${product._id}`);
  };

  // ❤️ Real-time check: Kya ye item wishlist mein already added hai?
  const isFavorite = isInWishlist(product._id);

  return (
    <div className="bg-white border border-gray-100 rounded-[24px] p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between max-w-[280px] relative">
      
      {/* 🔴 Clickable Group Container (Image + Details Text) */}
      <div onClick={handleCardClick} className="cursor-pointer group flex-1 flex flex-col">
        
        {/* Product Image Asset Block */}
        <div className="w-full aspect-square rounded-2xl bg-gray-50 overflow-hidden mb-4 relative flex items-center justify-center">
          <img 
            src={product.image || 'https://placehold.co/300x300?text=Snack+Craft'} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* ❤️ FLOATING WISHLIST TRIGGER BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // 👈 CRITICAL: Details page par jaane se rokega
              toggleWishlist(product); // 👈 Context array toggler activate karega
            }}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-md border border-gray-100/60 shadow-sm transition-all duration-300 hover:scale-110 active:scale-90 z-20 group/heart"
            title={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              strokeWidth="2.5" 
              stroke="currentColor" 
              className={`w-4 h-4 transition-all duration-300 ${
                isFavorite 
                  ? 'fill-rose-500 stroke-rose-500 scale-110' 
                  : 'fill-transparent text-gray-400 group-hover/heart:text-rose-400 group-hover/heart:scale-105'
              }`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>
        </div>

        {/* Meta Text Info */}
        <div className="space-y-1 mb-4 flex-1">
          <span className="text-[10px] font-black text-amber-600 uppercase tracking-wider block">
            {product.category?.name || 'Healthy Snacks'}
          </span>
          <h3 className="font-black text-sm text-gray-900 tracking-tight leading-tight min-h-[36px] group-hover:text-amber-500 transition-colors">
            {product.name}
          </h3>
          <p className="text-[11px] text-gray-400 font-medium line-clamp-2">
            {product.description}
          </p>
        </div>

      </div>

      {/* Bottom Actions Layout — Price + Orange Action Button Node */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100/80 mt-auto">
        <div>
          <span className="text-[10px] font-bold text-gray-400 block uppercase">M.R.P.</span>
          <span className="text-base font-black text-gray-900">₹{product.price}</span>
        </div>

        {/* 🛒 The Real Animated Orange Trigger Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation(); // 👈 CRITICAL: Card click block logic
            addToCart(product); 
          }}
          className="bg-amber-500 hover:bg-gray-950 text-white p-3 rounded-xl transition-all duration-200 transform active:scale-90 shadow-md shadow-amber-500/10 flex items-center justify-center group z-10"
          title="Add to premium stack"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2.5" 
            stroke="currentColor" 
            className="w-4 h-4 transform group-hover:scale-110 transition-transform"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375 .375 0 11-.75 0 .375 .375 0 01.75 0zm7.5 0a.375 .375 0 11-.75 0 .375 .375 0 01.75 0z" />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default ProductCard;