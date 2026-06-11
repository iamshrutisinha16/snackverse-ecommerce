import React from "react";
import { createPortal } from "react-dom";
import { X, ShoppingBag, Heart, Home, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // 👈 Install: npm install framer-motion

const MobileMenu = ({ isOpen, onClose }) => {
  // Animation Variants for smooth sliding
  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", damping: 25, stiffness: 200 } },
    exit: { x: "100%", transition: { duration: 0.3 } }
  };

  const menuContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 1. Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* 2. Slide-in Drawer */}
          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white border-l border-gray-100 shadow-2xl z-[10000] p-6 flex flex-col"
          >
            {/* Header: Close Button & Brand Tag */}
            <div className="flex justify-between items-center mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-amber-500">Menu</span>
              <button onClick={onClose} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <X size={20} className="text-gray-900" />
              </button>
            </div>

            {/* Links List with Icons */}
            <div className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/", icon: Home },
                { name: "All Snacks", path: "/products", icon: Package },
                { name: "Wishlist", path: "/wishlist", icon: Heart },
                { name: "My Cart", path: "/cart", icon: ShoppingBag },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className="flex items-center gap-4 py-4 px-4 rounded-2xl hover:bg-amber-50 text-gray-700 hover:text-amber-600 transition-all font-black uppercase text-xs tracking-wider"
                >
                  <link.icon size={18} />
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Footer Tagline */}
            <div className="mt-auto pt-8 border-t border-gray-50 text-center">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">CrunchCraft © 2026</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(menuContent, document.getElementById("portal-root") || document.body);
};

export default MobileMenu;