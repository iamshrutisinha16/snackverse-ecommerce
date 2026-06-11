import React from 'react';

const Badge = ({ count }) => {
  if (count === 0) return null;
  return (
    <span className="absolute -top-1 -right-1 bg-amber-500 text-white font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-md animate-pulse">
      {count}
    </span>
  );
};

export default Badge;