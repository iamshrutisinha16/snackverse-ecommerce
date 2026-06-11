import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion'; // 👈 Motion for premium feel

const Testimonials = () => {
  const reviews = [
    { name: "Rohit K.", text: "The Peri Peri Makhana completely replaced my late night oil chips routine. Absolutely brilliant texture!", rating: 5 },
    { name: "Ananya M.", text: "Extremely secure transactional layout. Delivery was fast, trackable and packs arrived in clean shape.", rating: 5 },
    { name: "Vikram S.", text: "Perfect balance of sweet salt profile setups. Highly recommended for macro tracking lifestyles.", rating: 5 }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50/50 via-transparent to-transparent -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Sparkle Icon */}
        <div className="text-center mb-20 space-y-4">
          <motion.div 
            initial={{ scale: 0 }} whileInView={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-amber-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-amber-500/20"
          >
            <Sparkles className="w-3 h-3" /> Community Feedback
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">
            Crunchers Love Us
          </h2>
        </div>

        {/* Animated Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((rev, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative bg-white border border-gray-100 p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
            >
              {/* Quote Icon with Floating Effect */}
              <Quote className="absolute right-8 top-8 w-10 h-10 text-amber-500/10 group-hover:rotate-12 transition-transform duration-500" />

              <div className="space-y-6">
                <div className="flex space-x-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 stroke-none" />
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm font-medium leading-relaxed italic relative z-10">
                  “{rev.text}”
                </p>
              </div>

              {/* Enhanced Footer */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-gray-200">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="text-xs font-black text-gray-900 uppercase tracking-wider">{rev.name}</h4>
                  <p className="text-[10px] font-bold text-amber-500 uppercase">Verified Muncher</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;