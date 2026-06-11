import React, { useState } from 'react';

const CouponInput = () => {
  const [code, setCode] = useState('');
  return (
    <div className="flex space-x-2 bg-white p-2 border rounded-2xl shadow-sm">
      <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Promo Configuration Code" className="w-full text-xs font-semibold uppercase px-3 focus:outline-none" />
      <button className="bg-gray-100 hover:bg-amber-500 hover:text-white text-gray-800 text-xs font-bold px-4 py-2.5 rounded-xl transition">Apply</button>
    </div>
  );
};

export default CouponInput;