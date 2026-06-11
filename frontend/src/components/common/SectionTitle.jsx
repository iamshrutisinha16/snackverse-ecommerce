import React from 'react';

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center space-y-2 mb-12">
    <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">{title}</h2>
    {subtitle && <p className="text-sm md:text-base text-gray-400 font-semibold">{subtitle}</p>}
    <div className="w-16 h-1.5 bg-amber-500 rounded-full mx-auto !mt-4"></div>
  </div>
);

export default SectionTitle;