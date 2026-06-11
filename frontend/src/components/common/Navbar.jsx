import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useCart } from '../../hooks/useCart';
import { useWishlist } from '../../hooks/useWishlist';
import { ShoppingBag, Heart, LogOut, Menu, X, Sparkles } from 'lucide-react';
import Badge from './Badge';

const Navbar = () => {
  const authContextValues = useContext(AuthContext) || {};
  const user = authContextValues.user || null;
  const logout = authContextValues.logout || (() => {});
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartItems = cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0;
  const totalWishlistItems = wishlist?.products?.length || 0;

  return (
    // 🔥 Solid White Background with Border to guarantee 100% text isolation
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-gray-100 shadow-md py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Brand Logo Node */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-amber-500 text-white p-2 rounded-xl shadow-md transform group-hover:rotate-6 transition duration-200">
              <Sparkles className="w-5 h-5 fill-current" />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              CRUNCH<span className="text-amber-500 font-black">CRAFT</span>
            </span>
          </Link>

          {/* Desktop Links — High Contrast Slate Black Text */}
          <div className="hidden md:flex items-center space-x-12 font-black text-sm tracking-wide">
            <Link to="/" className="text-slate-900 hover:text-amber-500 transition-colors py-2">
              HOME
            </Link>
            <Link to="/products" className="text-slate-900 hover:text-amber-500 transition-colors py-2">
              ALL SNACKS
            </Link>
          </div>

          {/* Control Utility Core Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/wishlist" className="p-2 text-slate-800 hover:text-red-500 transition relative">
              <Heart className="w-6 h-6 stroke-[2.5]" />
              <Badge count={totalWishlistItems} />
            </Link>

            <Link to="/cart" className="p-2 text-slate-800 hover:text-amber-500 transition relative">
              <ShoppingBag className="w-6 h-6 stroke-[2.5]" />
              <Badge count={totalCartItems} />
            </Link>

            <span className="h-6 w-0.5 bg-gray-200"></span>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl transition border border-slate-200">
                  <div className="w-6 h-6 bg-amber-500 text-white font-black text-xs rounded-full flex items-center justify-center">
                    {user.name ? user.name[0].toUpperCase() : 'U'}
                  </div>
                  <span className="text-sm font-black text-slate-900">{user.name.split(' ')[0]}</span>
                </Link>
                <button onClick={logout} className="p-2 text-slate-400 hover:text-red-500 transition rounded-xl">
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => navigate('/login')}
                className="bg-amber-500 text-white font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl hover:bg-slate-900 shadow-md transform active:scale-95 transition duration-200"
              >
                Login Account
              </button>
            )}
          </div>

          {/* Mobile Actions Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-900 focus:outline-none">
              {mobileMenuOpen ? <X className="w-6 h-6 stroke-[3]" /> : <Menu className="w-6 h-6 stroke-[3]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Sidebar Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-3 shadow-xl">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block font-black text-slate-950 px-4 py-2.5 hover:bg-amber-50 rounded-xl">HOME</Link>
          <Link to="/products" onClick={() => setMobileMenuOpen(false)} className="block font-black text-slate-950 px-4 py-2.5 hover:bg-amber-50 rounded-xl">ALL SNACKS</Link>
          <hr className="border-gray-100" />
          {user ? (
            <button onClick={() => { logout(); setMobileMenuOpen(false); }} className="w-full bg-red-500 text-white font-black py-3 rounded-xl">LOGOUT</button>
          ) : (
            <button onClick={() => { navigate('/login'); setMobileMenuOpen(false); }} className="w-full bg-slate-950 text-white font-black py-3 rounded-xl">LOGIN ACCOUNT</button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;