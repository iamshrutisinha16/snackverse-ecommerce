import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartSummary = ({ total }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 border rounded-3xl p-6 space-y-4 sticky top-24">
      <h3 className="font-black text-gray-900 text-lg">Billing Architecture</h3>
      <div className="space-y-2 text-sm font-semibold text-gray-600">
        <div className="flex justify-between"><span>Items Subtotal</span><span className="text-gray-900">₹{total}</span></div>
        <div className="flex justify-between"><span>Shipping Logs</span><span className="text-green-600">FREE</span></div>
      </div>
      <hr />
      <div className="flex justify-between font-black text-lg text-gray-900">
        <span>Grand Total</span><span>₹{total}</span>
      </div>
      <button
        onClick={() => navigate('/checkout')}
        className="w-full bg-gray-900 hover:bg-amber-500 text-white font-bold py-3.5 rounded-2xl shadow-lg transition duration-200"
      >
        Proceed to Verification
      </button>
    </div>
  );
};

export default CartSummary;