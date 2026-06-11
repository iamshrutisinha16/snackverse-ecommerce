import React from 'react';
import { useNavigate } from 'react-router-dom';

const PromoBanner = () => {
  const navigate = useNavigate();

  return (
    // 🔥 Tightened 'my-4' instead of 'my-16' to drastically reduce spacing issues
    <div className="max-w-7xl mx-auto px-4 my-4 sm:px-6 lg:px-8 w-full">
      {/* High-Contrast Dynamic Luxury Orange Gradient Container */}
      <div className="relative bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] rounded-[32px] p-6 md:p-10 text-white flex flex-col md:flex-row justify-between items-center shadow-xl shadow-orange-600/5 overflow-hidden group border border-orange-500/30">
        
        {/* Visual Luxury Accents */}
        <div className="absolute -right-10 -top-10 w-44 h-44 bg-white/10 rounded-full blur-xl group-hover:scale-120 transition-transform duration-700 pointer-events-none"></div>
        <div className="absolute left-1/3 bottom-[-50px] w-64 h-64 bg-amber-400/20 rounded-full blur-2xl pointer-events-none"></div>

        {/* Left Side Content */}
        <div className="space-y-3 text-center md:text-left z-10 max-w-xl">
          <div className="inline-flex items-center space-x-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 animate-ping"></span>
            <span className="text-[10px] font-black tracking-widest uppercase text-white">Limited Weekend Drop</span>
          </div>
          
          <h3 className="text-xl sm:text-3xl font-black tracking-tight leading-tight">
            Weekend Cravings, Handled Sweet & Crunchy.
          </h3>
          
          <p className="text-amber-50 text-xs sm:text-sm font-medium opacity-95 max-w-md leading-relaxed">
            Use code <span className="bg-white/20 px-2 py-0.5 rounded-md font-bold text-yellow-200 tracking-wide">CRUNCH25</span> at checkout for an instant sitewide feast discount.
          </p>
        </div>

        {/* Right Side Content Button */}
        <div className="mt-6 md:mt-0 z-10 flex-shrink-0 w-full md:w-auto text-center">
          <button 
            onClick={() => navigate('/products')}
            className="w-full md:w-auto inline-flex items-center justify-center space-x-3 bg-white text-[#EA580C] font-black text-xs uppercase tracking-wider px-6 py-4 rounded-xl shadow-md hover:bg-gray-50 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-300 group-hover:shadow-lg"
          >
            <span>Claim 25% Off</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default PromoBanner;