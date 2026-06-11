import React from 'react';

const SortDropdown = ({ sortOrder, setSortOrder }) => (
  <div className="flex items-center space-x-2">
    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Sort:</span>
    <select
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      className="bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-700 px-3 py-2 rounded-xl focus:outline-none focus:border-amber-500"
    >
      <option value="default">Featured Selection</option>
      <option value="low-high">Price: Low to High</option>
      <option value="high-low">Price: High to Low</option>
    </select>
  </div>
);

export default SortDropdown;