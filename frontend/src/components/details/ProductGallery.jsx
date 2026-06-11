import React from 'react';

const ProductGallery = ({ image, name }) => (
  <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex items-center justify-center min-h-[350px]">
    <img src={image} alt={name} className="max-h-80 w-auto object-contain drop-shadow-xl hover:scale-105 transition duration-300" />
  </div>
);

export default ProductGallery;