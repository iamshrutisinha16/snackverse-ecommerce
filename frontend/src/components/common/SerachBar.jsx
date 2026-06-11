import React from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      {/* 🔍 Search Icon - Centered perfectly using translate-y */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-200 text-gray-400 group-focus-within:text-amber-500">
        <Search className="w-5 h-5" />
      </div>

      {/* ⌨️ Input Element */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Craving something tasty? Search roasted makhanas, premium dynamic crisps..."
        className="w-full bg-gray-50/80 text-gray-800 pl-14 pr-12 py-4 rounded-3xl border border-gray-200/80 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10 transition-all font-bold text-xs uppercase tracking-wider placeholder:normal-case placeholder:font-medium placeholder:text-sm placeholder:text-gray-400"
      />

      {/* ❌ Dynamic Clear Button - Sirf tab dikhega jab input mein text hoga */}
      {value && (
        <button
          onClick={() => onChange('')}
          type="button"
          className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 p-1 rounded-full transition-all duration-200 active:scale-90"
          title="Clear search"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;