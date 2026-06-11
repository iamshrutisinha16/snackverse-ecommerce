import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import ProductCard from '../products/ProductCard';
import Loader from '../common/Loader';
import SectionTitle from '../common/SectionTitle';

const FeaturedProducts = () => {
  const { products, loading } = useProducts();
  const featured = products.filter(p => p.isFeatured).slice(0, 4);

  if (loading) return <Loader />;

  return (
    <div className="py-16 max-w-7xl mx-auto px-4">
      <SectionTitle title="Weekly Top Sellers" subtitle="Handpicked premium low calorie dynamics" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {featured.map(prod => (
          <ProductCard key={prod._id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;