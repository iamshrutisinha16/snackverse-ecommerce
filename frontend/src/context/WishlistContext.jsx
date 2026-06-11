import React, { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  // Page refresh par data na udde, isliye localStorage use karenge
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem('crunch_wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('crunch_wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // ❤️ Toggle Wishlist (Add bhi yahi karega aur Remove bhi!)
  const toggleWishlist = (product) => {
    setWishlistItems((prevItems) => {
      const isExist = prevItems.find((item) => item._id === product._id);
      if (isExist) {
        // Agar pehle se hai toh remove kar do
        return prevItems.filter((item) => item._id !== product._id);
      } else {
        // Agar nahi hai toh add kar do
        return [...prevItems, product];
      }
    });
  };

  // 🔍 Check if item is in wishlist (Dil laal dikhane ke liye)
  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item._id === productId);
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};