import React, { useState } from 'react';
import { Star, User, MessageSquare, Award } from 'lucide-react';

const CustomerReviews = ({ reviews = [] }) => {
  // 📊 1. Math Analytics: Average Rating Calculation
  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0 
    ? (reviews.reduce((acc, item) => acc + item.rating, 0) / totalReviews).toFixed(1)
    : 0;

  return (
    <div className="max-w-4xl mx-auto bg-[#FFFBF0]/40 border border-[#F3EFE4] p-6 md:p-8 rounded-3xl mt-12 space-y-8">
      
      {/* 🌟 REVIEW METRICS HEADER BLOCK */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-gray-200/60 pb-6">
        
        <div className="md:col-span-4 text-center md:text-left space-y-1">
          <h3 className="font-black text-sm uppercase tracking-widest text-gray-400">Customer Matrix</h3>
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Reviews Feed</h2>
        </div>

        {/* Aggregate Ratings Score */}
        <div className="md:col-span-8 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-6">
          <div className="text-center bg-white border border-gray-100 px-6 py-4 rounded-2xl shadow-sm">
            <p className="text-3xl font-black text-amber-500">{averageRating}</p>
            <div className="flex justify-center my-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3.5 h-3.5 ${i < Math.round(averageRating) ? 'text-amber-500 fill-amber-500' : 'text-gray-200'}`} 
                />
              ))}
            </div>
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-wider">{totalReviews} Global Ratings</p>
          </div>
        </div>

      </div>

      {/* 📦 2. REVIEWS CONDITIONAL RENDERING GRID LOOP */}
      {totalReviews === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-dashed space-y-1">
          <MessageSquare className="w-6 h-6 text-gray-300 mx-auto" />
          <p className="text-xs font-black uppercase text-gray-400 tracking-wider">No Reviews Registry Found</p>
          <p className="text-[10px] text-gray-400 font-medium normal-case">Be the first to test and audit this snack batch item.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div 
              key={review._id || review.id} 
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3 transition-all duration-200 hover:border-amber-200/60"
            >
              {/* User Meta Row */}
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-100 p-2 rounded-full text-gray-500 border border-gray-200/40">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-tight text-gray-900">{review.name || 'Verified Customer'}</h4>
                    <p className="text-[9px] font-bold text-gray-400 uppercase">
                      {review.createdAt ? new Date(review.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : 'Recent Purchase'}
                    </p>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="flex items-center bg-amber-50 border border-amber-100 px-2 py-1 rounded-lg">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-200'}`} 
                    />
                  ))}
                </div>
              </div>

              {/* Review Comment Node */}
              <div className="pl-1">
                <p className="text-xs text-gray-600 font-medium normal-case leading-relaxed">
                  {review.comment || 'No textual feedback provided. Product telemetry metrics logged successfully.'}
                </p>
              </div>

              {/* Verified Purchase Tag */}
              <div className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 w-fit px-2 py-0.5 rounded-md">
                <Award className="w-3 h-3" /> Verified Snack Tester
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default CustomerReviews;