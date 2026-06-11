import React from 'react';

const PaymentSummary = ({ total, onPlaceOrder, loading }) => (
  <div className="bg-gray-900 text-white p-6 rounded-3xl space-y-4 shadow-xl">
    <h3 className="font-black text-lg tracking-wide">Secure Transaction Execution</h3>
    <div className="flex justify-between text-sm text-gray-400 font-medium">
      <span>Payload Net Cost</span><span className="text-white font-bold">₹{total}</span>
    </div>
    <div className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-xl p-3">
      Default gateway configured to: Cash On Delivery / Stripe Local Node Emulator.
    </div>
    <button
      onClick={onPlaceOrder}
      disabled={loading}
      className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-gray-700 text-white font-black py-4 rounded-2xl shadow-lg transition duration-200"
    >
      {loading ? 'Processing State Pipeline...' : `Authorize Transaction — ₹${total}`}
    </button>
  </div>
);

export default PaymentSummary;