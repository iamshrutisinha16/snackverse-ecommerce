import React from 'react';

const FilterSidebar = ({ 
  selectedCategory, 
  setSelectedCategory, 
  categories = [],
  priceRange = 500, // Default max price slider
  setPriceRange,
  handleClearAll // Reset function trigger
}) => {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 space-y-6 sticky top-24 shadow-sm">
      
      {/* 🍕 SECTION 1: Categories */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight">
            Filter Categories
          </h3>
          {/* Clear Filters Quick Button */}
          <button 
            onClick={handleClearAll}
            className="text-[10px] font-black uppercase text-amber-600 hover:text-gray-900 tracking-wider transition"
          >
            Clear All
          </button>
        </div>
        
        <div className="space-y-2 max-h-60 overflow-y-auto pr-1 scrollbar-thin">
          {/* Default 'All' Trigger Button */}
          <button
            onClick={() => setSelectedCategory('All')}
            className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 ${
              selectedCategory === 'All' 
                ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20' 
                : 'text-gray-600 hover:bg-[#FFFBF0] hover:text-amber-600 font-semibold'
            }`}
          >
            All Categories
          </button>

          {/* Dynamic Categories */}
          {categories && categories.map((cat) => {
            if (!cat) return null;
            const categoryId = cat._id || cat.name;
            const isSelected = selectedCategory === categoryId;

            return (
              <button
                key={cat._id || cat.name}
                onClick={() => setSelectedCategory(categoryId)}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 ${
                  isSelected 
                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20' 
                    : 'text-gray-600 hover:bg-[#FFFBF0] hover:text-amber-600 font-semibold'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* 💰 SECTION 2: Price Range Slider */}
      {setPriceRange && (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight">
              Max Price
            </h3>
            <span className="text-xs font-black text-amber-600 bg-[#FFFBF0] px-2.5 py-1 rounded-lg border border-[#F3EFE4]">
              ₹{priceRange}
            </span>
          </div>
          
          <input 
            type="range" 
            min="0" 
            max="1000" 
            step="10"
            value={priceRange} 
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full accent-amber-500 bg-gray-100 h-1.5 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase">
            <span>₹0</span>
            <span>₹1000</span>
          </div>
        </div>
      )}

    </div>
  );
};

export default FilterSidebar;