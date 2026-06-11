import React from 'react';

const WhyChooseUs = () => {
  const coreFeatures = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      title: "Diet Friendly Treats",
      desc: "Masterfully air-baked snacks using clean, organic grains with absolutely zero artificial preservatives or compromises."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Lightning Safe Delivery",
      desc: "Super-fast ecosystem routing. Fresh, crunch packs dispatched directly from our ovens to your doorstep within hours."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.956 11.956 0 0112 2.714z" />
        </svg>
      ),
      title: "100% Secure Checkout",
      desc: "Fully encrypted transaction gateways integrated with safe checkout mechanics for a worry-free premium shopping ride."
    }
  ];

  return (
    <div className="py-16 bg-white w-full">
      
      {/* Top Header Section */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 px-4">
        <div className="inline-flex items-center space-x-2 bg-[#FDF5DC] border border-[#EEDCA5] text-[#9A7426] font-extrabold text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full">
          <span>★</span>
          <span>The CrunchCraft Promise</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
          Why Snacking Guilds Choose Us
        </h2>
        <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-lg mx-auto">
          We engineered an elite culinary layer where superior taste boundaries seamlessly fuse with daily health metrics.
        </p>
      </div>

      {/* 🚀 Flawless High-Contrast Grid: NO DARK GREY BOXES */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 sm:px-12">
        {coreFeatures.map((item, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col items-center text-center p-8 bg-[#FFFBF0] border border-[#F3EFE4] rounded-[24px] shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Bright Solid Amber Icon Circle */}
            <div className="bg-amber-500 text-white p-4 rounded-full mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            
            {/* Crisp Bold Black Title — 100% Visible */}
            <h4 className="font-black text-lg text-gray-900 tracking-wide mb-2 uppercase text-sm">
              {item.title}
            </h4>
            
            {/* Deep Slate Gray Readable Text — 100% Visible */}
            <p className="text-gray-600 text-sm font-medium leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default WhyChooseUs;