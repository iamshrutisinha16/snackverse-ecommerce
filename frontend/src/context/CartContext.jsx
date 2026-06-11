import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('crunchCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 🔥 Popup Active States Controller
  const [toast, setToast] = useState({ visible: false, message: '' });

  useEffect(() => {
    localStorage.setItem('crunchCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const isExist = prevItems.find((item) => item._id === product._id);
      if (isExist) {
        return prevItems.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    // 🔥 Trigger Premium Custom Popup instead of dirty native alerts
    setToast({ visible: true, message: `✨ Added ${product.name} to Stack!` });

    // Auto dismiss after 2.5 seconds loop execution
    setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, 2500);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.reduce((acc, item) => {
        if (item._id === productId) {
          if (item.quantity === 1) return acc;
          return [...acc, { ...item, quantity: item.quantity - 1 }];
        }
        return [...acc, item];
      }, [])
    );
  };

  // 🧹 Official Clear Cart Function (Added for full-stack completion)
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('crunchCart');
  };

  return (
    /* 🔥 FIX: value={...} ke andar clearCart aur setCartItems dono ko officially pass kar diya */
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, setCartItems, toast }}>
      {children}
      
      {/* 🚀 THE PREMIUM FLOATING POPUP ELEMENT TEMPLATE */}
      {toast.visible && (
        <div className="fixed top-24 right-6 z-[9999] animate-bounce-short">
          <div className="bg-gray-950 text-white text-xs font-black uppercase tracking-wider px-6 py-4 rounded-2xl shadow-2xl border border-gray-800 flex items-center space-x-3 backdrop-blur-md bg-opacity-95">
            <span className="bg-amber-500 p-1 rounded-full text-white text-[10px] w-4 h-4 flex items-center justify-center">✓</span>
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
};