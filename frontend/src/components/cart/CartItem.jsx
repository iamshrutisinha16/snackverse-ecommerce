import React from 'react';
import { Trash2 } from 'lucide-react';

const CartItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between border border-gray-100 rounded-3xl p-4 bg-white shadow-sm">
      <div className="flex items-center space-x-4">
        <img src={item.product?.image} alt={item.product?.name} className="w-16 h-16 object-contain bg-gray-50 rounded-2xl p-2" />
        <div>
          <h4 className="font-bold text-gray-900 text-sm md:text-base line-clamp-1">{item.product?.name}</h4>
          <p className="text-xs text-gray-400 font-semibold">Price: ₹{item.product?.price}</p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <span className="text-sm font-black text-gray-700">Qty: {item.quantity}</span>
        <button className="text-gray-400 hover:text-red-500 transition">
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;