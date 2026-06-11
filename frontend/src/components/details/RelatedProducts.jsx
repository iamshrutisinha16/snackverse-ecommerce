import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import ProductCard from '../products/ProductCard';

const RelatedProducts = ({ currentId }) => {
  const { products } = useProducts();
  const relatable = products.filter(p => p._id !== currentId).slice(0, 3);

  return (
    <div className="mt-16 border-t border-gray-100 pt-12">
      <h3 className="text-xl font-black text-gray-900 mb-6">You Might Also Crave</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {relatable.map(p => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;