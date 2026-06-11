import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MainLayout = ({ children }) => (
  // 🔥 Base background ko ekdam clean slate white kiya taaki text dube na
  <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-amber-100">
    <Navbar />
    {/* Layout core padding constraints */}
    <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      {children}
    </main>
    <Footer />
  </div>
);

export default MainLayout;