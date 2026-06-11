import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import MainLayout from '../layouts/MainLayout'; // 👈 Layout link kiya
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Real-time Total Core Calculation engine
  const subtotal = cartItems ? cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0) : 0;

  // 🥣 CONDITION 1: Beautiful Empty State Layout
  if (!cartItems || cartItems.length === 0) {
    return (
      <MainLayout>
        <div className="min-h-[70vh] bg-white w-full flex flex-col items-center justify-center text-center px-4 py-12">
          <div className="w-24 h-24 bg-[#FFFBF0] rounded-full flex items-center justify-center mb-6 border border-[#F3EFE4]">
            <span className="text-4xl">🥣</span>
          </div>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Your Snack Stack is Empty</h2>
          <p className="text-gray-400 text-xs max-w-sm mt-2 font-medium normal-case">
            Looks like you haven't added any premium dynamic crunch blends to your active database collection yet.
          </p>
          <button 
            onClick={() => navigate('/products')}
            className="mt-6 bg-[#111111] hover:bg-amber-500 text-white font-black text-xs uppercase tracking-widest px-6 py-4 rounded-xl transition transform active:scale-95 shadow-md"
          >
            Explore Snacks Menu
          </button>
        </div>
      </MainLayout>
    );
  }

  // 🛒 CONDITION 2: Active Cart Component UI Layer
  return (
    <MainLayout>
      <div className="min-h-screen bg-white w-full py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-6">
          
          <div className="flex items-center justify-between border-b pb-4">
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight uppercase">
              Your Selected Menu ({cartItems.length})
            </h1>
            <button 
              onClick={clearCart}
              className="text-[10px] font-black uppercase text-gray-400 hover:text-red-500 tracking-wider transition-colors flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" /> Clear Stack
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Items Map Matrix */}
            <div className="lg:col-span-8 space-y-4">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center justify-between p-4 bg-[#FFFBF0] border border-[#F3EFE4] rounded-2xl shadow-sm transition hover:shadow-md duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-xl overflow-hidden border border-gray-100 p-1 flex-shrink-0 shadow-inner">
                      <img src={item.image || 'https://placehold.co/150x150'} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div>
                      <h3 className="font-black text-sm text-gray-900 max-w-[160px] sm:max-w-xs truncate uppercase tracking-tight">{item.name}</h3>
                      <span className="text-xs font-black text-amber-600">₹{item.price}</span>
                    </div>
                  </div>

                  {/* Incrementor Buttons Framework */}
                  <div className="flex items-center space-x-3 bg-white border border-gray-200/60 rounded-xl p-1.5 shadow-sm">
                    <button onClick={() => removeFromCart(item._id)} className="w-6 h-6 rounded-lg hover:bg-gray-50 flex items-center justify-center font-black text-gray-500 hover:text-red-500 transition-colors">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-black text-gray-900 w-4 text-center">{item.quantity}</span>
                    <button onClick={() => addToCart(item)} className="w-6 h-6 rounded-lg hover:bg-gray-50 flex items-center justify-center font-black text-gray-500 hover:text-amber-500 transition-colors">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Order Summary Calculation Card */}
            <div className="lg:col-span-4 bg-[#FFFBF0] border border-[#F3EFE4] p-6 rounded-3xl h-fit space-y-5 shadow-sm">
              <h3 className="font-black text-xs uppercase tracking-widest text-gray-900">Order Summary</h3>
              <div className="flex justify-between border-t border-b py-4 border-gray-200/60">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Subtotal</span>
                <span className="text-xl font-black text-gray-900">₹{subtotal}</span>
              </div>
              
              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-[#111111] hover:bg-amber-500 text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl shadow-md transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" /> Proceed to Checkout
              </button>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;