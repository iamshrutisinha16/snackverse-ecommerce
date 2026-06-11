import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import Wishlist from '../pages/Wishlist';
import Checkout from '../pages/Checkout';
import OrderSuccess from '../pages/OrderSuccess';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile'; 
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* 🏡 Home Gateway */}
      <Route path="/" element={<Home />} />
      
      {/* 🍿 Full Shop Inventory */}
      <Route path="/products" element={<Products />} />
      
      {/* 🎯 FIXED: Dynamic Single Product Path aligned to /product/:id */}
      <Route path="/product/:id" element={<ProductDetails />} />
      
      {/* 🛒 Cart & Wishlist Nodes */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      
      {/* 🔑 Guest Authentications */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      {/* 🛡️ Secure Auth Protected Routes */}
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
      <Route path="/checkout" element={
        <ProtectedRoute>
          <Checkout />
        </ProtectedRoute>
      } />
      <Route path="/order-success" element={
        <ProtectedRoute>
          <OrderSuccess />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

export default AppRoutes;