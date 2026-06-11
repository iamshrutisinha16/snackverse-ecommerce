import React, { useState, useEffect } from 'react';
import { fetchCategories } from '../../api/categoryApi';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then((data) => setCategories(data || []))
      .catch((err) => console.error("Error loading frontend structural classes:", err));
  }, []);

  return (
    <div className="py-16 bg-white w-full overflow-hidden space-y-10">
      
      {/* 注入 Inbuilt CSS Animation Block - No tailwind.config needed */}
      <style>{`
        @keyframes inlineMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-inline-marquee {
          display: flex;
          width: max-content;
          animation: inlineMarquee 25s linear infinite;
        }
        .animate-inline-marquee:hover {
          animation-play-state: paused; /* User jab cursor layega toh premium look ke liye scroll ruk jayega */
        }
      `}</style>
      
      {/* 🌟 PREMIUM TITLES & HEADER SECTION */}
      <div className="text-center space-y-2 px-4 max-w-3xl mx-auto">
        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-amber-500 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100/60">
          EXPLORE OUR MENU
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">
          Browse Premium Collections
        </h2>
        <p className="text-gray-400 text-xs md:text-sm font-medium max-w-md mx-auto normal-case">
          Select a structural blend tailored to satisfy your current active crunch database.
        </p>
      </div>

      {/* 🚀 SMOOTH MARQUEE CONTAINER */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Track Container with Inbuilt Pure Animation */}
        <div className="animate-inline-marquee space-x-6">
          
          {/* Double array map to loop and stitch images seamlessly */}
          {[...categories, ...categories, ...categories, ...categories].map((cat, index) => {
            if (!cat) return null;
            return (
              <div 
                key={`${cat._id}-${index}`}
                className="relative inline-block w-64 h-80 rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-md group cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex-shrink-0"
              >
                {/* 🖼️ Full Card Background Image */}
                <img 
                  src={cat.image || 'https://placehold.co/300x400'} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* 🎴 Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* 📝 Content Inside Card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end space-y-1 z-10 whitespace-normal">
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest opacity-80">
                    Snack Category
                  </span>
                  <h4 className="font-black text-white text-lg md:text-xl uppercase tracking-wide leading-tight group-hover:text-amber-300 transition-colors duration-200">
                    {cat.name}
                  </h4>
                </div>

                {/* ⚡ Top Glow Accent Line Effect */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Categories;