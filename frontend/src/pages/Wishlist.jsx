import React, { useContext } from 'react';
import MainLayout from '../layouts/MainLayout';
import ProductCard from '../components/products/ProductCard';
import { WishlistContext } from '../context/WishlistContext';
import { Heart, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const { wishlistItems } = useContext(WishlistContext);
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-12 min-h-[60vh] space-y-10">
        
        {/* Header Block */}
        <div className="text-center space-y-2 max-w-md mx-auto">
          <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center mx-auto border border-rose-100">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">
            Your Favourites Stack
          </h2>
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
            {wishlistItems.length} Saved Curations
          </p>
        </div>

        {/* Conditional Layout Switching */}
        {wishlistItems.length === 0 ? (
          <div className="text-center py-16 bg-gray-50/50 rounded-[2.5rem] border border-dashed border-gray-200/80 max-w-xl mx-auto p-8 space-y-6">
            <p className="text-sm text-gray-400 font-bold uppercase tracking-wide">
              Your crunch registry is completely empty! No heart nodes active.
            </p>
            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-amber-500 text-white font-black text-xs uppercase tracking-widest py-3.5 px-6 rounded-xl transition shadow-md"
            >
              <ShoppingBag className="w-4 h-4" /> Explore Shop Menu
            </button>
          </div>
        ) : (
          /* Dynamic Inventory Card Grid */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {wishlistItems.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}

      </div>
    </MainLayout>
  );
};

export default Wishlist;