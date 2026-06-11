import React from "react";
import { createPortal } from "react-dom";
import { X, ShoppingBag, Heart, Home, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ isOpen, onClose }) => {
  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", damping: 25, stiffness: 200 } },
    exit: { x: "100%", transition: { duration: 0.3 } }
  };

  const menuContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white border-l border-gray-100 shadow-2xl z-[10000] p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-amber-500">Menu</span>
              <button onClick={onClose} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <X size={24} className="text-gray-900" />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { name: "Home", path: "/", icon: Home },
                { name: "All Snacks", path: "/products", icon: Package },
                { name: "Wishlist", path: "/wishlist", icon: Heart },
                { name: "My Cart", path: "/cart", icon: ShoppingBag },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className="flex items-center gap-4 py-4 px-4 rounded-2xl hover:bg-amber-50 text-gray-900 hover:text-amber-600 transition-all font-black uppercase text-xs tracking-wider border border-transparent hover:border-amber-100"
                  >
                    {/* Icon ko force style diya hai */}
                    <span className="text-gray-900">
                      <Icon size={22} strokeWidth={2.5} />
                    </span>
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto pt-8 border-t border-gray-100 text-center">
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