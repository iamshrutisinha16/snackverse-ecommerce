import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    // Clean luxury warm cream base matching your perfect screenshot layout
    <div className="relative bg-[#FFFBF0] rounded-[32px] overflow-hidden my-6 min-h-[500px] flex items-center border border-[#F3EFE4]">
      
      {/* 🥞 Organic Fluid Cream Shapes Shape 1 (Left Side Accent) */}
      <div className="absolute left-0 bottom-0 w-[300px] h-[260px] bg-[#F6EFE0] rounded-tr-[200px] pointer-events-none -z-0 opacity-80"></div>
      
      {/* Shape 2 (Right Side Big Circle Backdrop for Bowl) */}
      <div className="absolute right-[-50px] bottom-[-50px] w-[550px] h-[550px] bg-[#F6EFE0] rounded-full pointer-events-none -z-0 opacity-90 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-8 py-12 lg:py-16 sm:px-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full">
        
        {/* 📝 Left Content Core: Text Layout Alignment */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6 order-2 lg:order-1">
          
          {/* Premium Handcrafted Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#FDF5DC] border border-[#EEDCA5] text-[#9A7426] font-extrabold text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-full">
            <span className="text-amber-500">★</span>
            <span>Premium Handcrafted Crunch Mix</span>
          </div>
          
          {/* Main Massive Headline */}
          <h1 className="text-4xl sm:text-6xl font-black text-[#111111] leading-[1.1] tracking-tight">
            Gourmet Taste.<br />
            <span className="text-amber-500">Zero Guilt Added.</span>
          </h1>
          
          {/* Elegant Subtext Descriptor */}
          <p className="text-[#444444] text-base sm:text-lg font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Experience an explosion of taste profiles with our carefully baked & roasted premium snacks collection curated specially for active lifestyles.
          </p>

          {/* Premium Dark CTA Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link 
              to="/products" 
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#0A0D14] text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-500 transition-all transform active:scale-95 duration-200 shadow-lg"
            >
              <span className="tracking-wide">Explore Premium Menu</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

        </div>

        {/* 🥣 Right Content Core: Perfect Granola Bowl Real Assets Asset */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center transform hover:scale-102 transition duration-500">
            
            {/* The Delicious Clean Crisp Granola Bowl Image Grid Link */}
            <img 
              src="https://www.familyfoodonthetable.com/wp-content/uploads/2023/07/Healthy-kids-snacks-1200-square.jpg" 
              alt="Crisp Premium Granola Nuts and Seeds Rich Bowl Compilation" 
              className="w-[90%] h-[90%] object-cover rounded-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border-4 border-white/40" 
            />

          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;