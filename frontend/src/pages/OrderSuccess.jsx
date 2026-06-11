import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';

const OrderSuccess = () => {
  const navigate = useNavigate();

  // MongoDB simulation ke liye ek random Order ID generate kar lete hain
  const randomOrderId = "ORD" + Math.floor(100000 + Math.random() * 900000);

  return (
    <MainLayout>
      <div className="min-h-[75vh] bg-white w-full flex flex-col items-center justify-center text-center px-4 py-16">
        
        {/* 🎉 Big Animated Success Check Node */}
        <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-6 border border-emerald-100 animate-bounce">
          <CheckCircle className="w-12 h-12 text-emerald-500 stroke-[2]" />
        </div>

        {/* Success Typography */}
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">
          Order Placed Successfully!
        </h2>
        
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2">
          Receipt ID: <span className="text-gray-800">{randomOrderId}</span>
        </p>

        <p className="text-gray-500 text-xs sm:text-sm max-w-md mt-4 font-medium normal-case leading-relaxed">
          Thank you for shopping with CrunchCraft! Your premium snack curation has been registered in our database grid and is now preparing for flagship delivery.
        </p>

        {/* 🚀 Navigation Action Hub */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <button 
            onClick={() => navigate('/products')}
            className="w-full sm:w-auto bg-[#111111] hover:bg-amber-500 text-white font-black text-xs uppercase tracking-widest px-6 py-4 rounded-xl transition transform active:scale-95 shadow-md flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" /> Order More Snacks
          </button>
          
          <button 
            onClick={() => navigate('/')}
            className="w-full sm:w-auto bg-gray-50 hover:bg-gray-100 text-gray-700 font-black text-xs uppercase tracking-widest px-6 py-4 rounded-xl transition border border-gray-200 flex items-center justify-center gap-1"
          >
            Go To Home <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </MainLayout>
  );
};

export default OrderSuccess;