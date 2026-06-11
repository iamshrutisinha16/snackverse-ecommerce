import React from 'react';

const Footer = () => (
  <footer className="bg-gray-950 text-gray-400 border-t border-gray-900 mt-20">
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="space-y-4">
        <h3 className="text-white text-xl font-black tracking-tighter">CRUNCHCRAFT</h3>
        <p className="text-sm leading-relaxed text-gray-400">Gourmet roasted snacks made for mindful organic eating. No added preservatives, 100% premium quality control.</p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest text-amber-500">Quick Navigation</h4>
        <ul className="space-y-3 text-sm">
          <li><a href="/products" className="hover:text-white transition">Browse Menu</a></li>
          <li><a href="/cart" className="hover:text-white transition">My Shopping Basket</a></li>
          <li><a href="/wishlist" className="hover:text-white transition">Your Favourites</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest text-amber-500">Brand Trust Guarantee</h4>
        <p className="text-sm text-gray-400">Premium Packaging. Direct contactless automated factory shipping network systems.</p>
      </div>
    </div>
    <div className="border-t border-gray-900 py-6 text-center text-xs text-gray-600">
      &copy; {new Date().getFullYear()} CrunchCraft Premium Inc. Assignment Live Build Node.
    </div>
  </footer>
);

export default Footer;