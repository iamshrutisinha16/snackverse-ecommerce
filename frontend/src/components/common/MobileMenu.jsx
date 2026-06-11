import React from "react";
import { createPortal } from "react-dom";
import { X, ShoppingBag, Heart, Home, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ isOpen, onClose }) => {
  const sidebarVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", damping: 25, stiffness: 200 } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } }
  };

  const menuContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex justify-end">
          {/* Backdrop - clicked to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer - Added min-h-screen to ensure height is always full */}
          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative h-screen w-[85%] max-w-[320px] bg-white shadow-2xl p-6 flex flex-col overflow-y-auto"
          >
            {/* Close Button */}
            <div className="flex justify-between items-center mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-amber-500">Menu</span>
              <button 
                onClick={onClose} 
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                style={{ zIndex: 100000 }} // Force high z-index
              >
                <X size={24} className="text-gray-900" />
              </button>
            </div>

            {/* Links List - Explicitly set styles */}
            <div className="flex flex-col gap-3">
              <Link to="/" onClick={onClose} className="flex items-center gap-4 py-4 px-4 text-gray-900 font-bold hover:bg-amber-50 rounded-xl transition-all border border-gray-100">
                <Home size={22} className="text-amber-500" /> Home
              </Link>
              <Link to="/products" onClick={onClose} className="flex items-center gap-4 py-4 px-4 text-gray-900 font-bold hover:bg-amber-50 rounded-xl transition-all border border-gray-100">
                <Package size={22} className="text-amber-500" /> All Snacks
              </Link>
              <Link to="/wishlist" onClick={onClose} className="flex items-center gap-4 py-4 px-4 text-gray-900 font-bold hover:bg-amber-50 rounded-xl transition-all border border-gray-100">
                <Heart size={22} className="text-amber-500" /> Wishlist
              </Link>
              <Link to="/cart" onClick={onClose} className="flex items-center gap-4 py-4 px-4 text-gray-900 font-bold hover:bg-amber-50 rounded-xl transition-all border border-gray-100">
                <ShoppingBag size={22} className="text-amber-500" /> My Cart
              </Link>
            </div>

            <div className="mt-auto pt-8 border-t border-gray-100 text-center">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">CrunchCraft © 2026</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(menuContent, document.body);
};

export default MobileMenu;