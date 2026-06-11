import React from 'react';

const Loader = () => (
  <div className="flex flex-col items-center justify-center min-h-[45vh] space-y-3">
    <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
    <span className="text-xs uppercase font-black tracking-widest text-gray-400">Loading Content Assets...</span>
  </div>
);

export default Loader;