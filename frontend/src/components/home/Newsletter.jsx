import React, { useState } from 'react';
import { Mail, Sparkles, Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert("✨ Welcome to the Guild! Exclusive offers are on the way.");
      setEmail('');
    }
  };

  return (
    // 🌍 FIX: 'my-12' hataya aur 'py-20' lagaya, background color stretch karne ke liye
    <section className="relative w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#FFFBF0] via-[#FAF6EC] to-[#F3EFE4] rounded-[2.5rem] border border-[#EBE8E0] p-8 md:p-16 shadow-xl shadow-amber-500/[0.05] relative overflow-hidden">
        
        {/* Decorative background glows */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md border border-amber-200/50 text-amber-800 font-black text-[10px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>The Inside Circle</span>
          </div>
          
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">
              Join the Healthy Guild
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-medium max-w-md mx-auto leading-relaxed">
              Get early access to secret micro-batches, limited edition crunch recipes, and insider member-only drops.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="pt-4 max-w-md mx-auto w-full">
            <div className="flex flex-col sm:flex-row items-center gap-3 bg-white p-2 rounded-2xl border border-[#EBE8E0] shadow-sm focus-within:ring-4 focus-within:ring-amber-500/10 transition-all w-full">
              
              <div className="flex items-center space-x-3 flex-grow w-full px-4 py-2">
                <Mail className="w-5 h-5 text-gray-300" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="w-full bg-transparent font-medium text-gray-800 placeholder-gray-400 focus:outline-none text-sm"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gray-900 hover:bg-amber-500 text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 active:scale-95"
              >
                <span>Subscribe</span>
                <Send className="w-3 h-3" />
              </button>
            </div>
          </form>

          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pt-2">
            🔒 Zero Spam. Unsubscribe anytime.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;