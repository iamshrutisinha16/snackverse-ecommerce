import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ review }) => (
  <div className="border border-gray-100 rounded-2xl p-5 space-y-2 bg-white shadow-sm">
    <div className="flex justify-between items-center">
      <h4 className="font-bold text-gray-800 text-sm">{review.name}</h4>
      <div className="flex text-amber-400">
        {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
      </div>
    </div>
    <p className="text-xs text-gray-400 font-medium">{new Date(review.createdAt).toLocaleDateString()}</p>
    <p className="text-sm text-gray-500 leading-relaxed">{review.comment}</p>
  </div>
);

export default ReviewCard;