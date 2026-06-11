import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Loader from '../components/common/Loader';
import ProductGallery from '../components/details/ProductGallery';
import ProductInfo from '../components/details/ProductInfo';
import RelatedProducts from '../components/details/RelatedProducts';
import ReviewCard from '../components/details/ReviewCard';
import { useProducts } from '../hooks/useProducts';
import { addProductReview } from '../api/reviewApi';

const ProductDetails = () => {
  const { id } = useParams();
  
  // 🔌 Fetch single product safely using hook
  const { product, loading, error } = useProducts(id);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (product?.reviews) {
      setReviews(product.reviews);
    }
  }, [product]);

  if (loading) return <MainLayout><Loader /></MainLayout>;
  
  // 🚨 Dynamic Error UI handling wrapper
  if (error || !product) {
    return (
      <MainLayout>
        <div className="text-center text-red-500 font-black py-20 uppercase tracking-wider text-sm">
          {error || "Product session database link broken."}
        </div>
      </MainLayout>
    );
  }

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addProductReview(id, { name: "Verified Buyer", rating, comment });
      // Backend structured append handling safely
      if (res && res.review) {
        setReviews([...reviews, res.review]);
      } else {
        // Fallback layout setup
        setReviews([...reviews, { name: "Verified Buyer", rating, comment, createdAt: new Date() }]);
      }
      setComment('');
      setRating(5);
    } catch (err) {
      console.error("Error submitting dynamic client review node:", err);
    }
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-16">
        
        {/* 🍿 TOP LAYER: Gallery and Purchase Analytics Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white p-6 md:p-10 rounded-[3rem] border border-gray-100/80 shadow-sm">
          <ProductGallery image={product?.image} name={product?.name} />
          <ProductInfo product={product} />
        </div>
        
        {/* ⭐ MIDDLE LAYER: Customer Feedback & Review Management */}
        <div className="border-t border-gray-100 pt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          
          {/* Active Reviews Container Feed */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">
              Customer Reviews ({reviews.length})
            </h3>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
              {reviews.length === 0 ? (
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider bg-gray-50 p-6 rounded-2xl border border-dashed text-center">
                  No reviews yet. Be the first to share your crunch experience!
                </p>
              ) : (
                reviews.map((r, i) => <ReviewCard key={r._id || i} review={r} />)
              )}
            </div>
          </div>
          
          {/* Write Review Interactive Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleReviewSubmit} className="bg-gray-50/60 border border-gray-100 p-6 rounded-3xl space-y-4 shadow-inner">
              <h4 className="font-black text-gray-800 text-xs uppercase tracking-wider">
                Share Your Snack Feedback
              </h4>
              
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400">Rating</label>
                <select 
                  value={rating} 
                  onChange={(e) => setRating(Number(e.target.value))} 
                  className="w-full bg-white border border-gray-200 rounded-xl p-3 text-xs font-bold text-gray-700 focus:outline-none focus:border-amber-500 transition-all cursor-pointer"
                >
                  <option value="5">⭐⭐⭐⭐⭐ 5 - Delicious</option>
                  <option value="4">⭐⭐⭐⭐ 4 - Very Tasty</option>
                  <option value="3">⭐⭐⭐ 3 - Good/Average</option>
                  <option value="2">⭐⭐ 2 - Not My Flavor</option>
                  <option value="1">⭐ 1 - Poor Quality</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400">Your Experience</label>
                <textarea 
                  rows="3" 
                  required 
                  placeholder="How's the crunch? Talk about spice, salt, freshness..." 
                  value={comment} 
                  onChange={(e) => setComment(e.target.value)} 
                  className="w-full bg-white border border-gray-200 rounded-xl p-4 text-xs font-semibold text-gray-700 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/5 transition-all resize-none" 
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-gray-900 hover:bg-amber-500 text-white font-black py-3 px-4 rounded-xl text-xs uppercase tracking-widest shadow-sm active:scale-95 transition-all duration-200"
              >
                Submit Review
              </button>
            </form>
          </div>

        </div>

        {/* 🔄 BOTTOM LAYER: Cross-Reference Carousel Recommendation Engine */}
        {product?._id && (
          <div className="border-t border-gray-100 pt-12">
            <RelatedProducts currentId={product._id} />
          </div>
        )}

      </div>
    </MainLayout>
  );
};

export default ProductDetails;