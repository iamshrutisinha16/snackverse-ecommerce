import React, { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import SearchBar from '../components/common/SerachBar';
import FilterSidebar from '../components/products/FilterSidebar';
import SortDropdown from '../components/products/SortDropdown';
import ProductGrid from '../components/products/ProductGrid';
import Loader from '../components/common/Loader';
import { useProducts } from '../hooks/useProducts';
import { fetchCategories } from '../api/categoryApi';

const Products = () => {
  const { products = [], loading } = useProducts(); 
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');
  
  // 🔌 1. Price Range Dynamic State Hook (Default Max Price: ₹1000)
  const [priceRange, setPriceRange] = useState(1000);

  useEffect(() => {
    fetchCategories()
      .then((data) => {
        setCategories(data || []);
      })
      .catch((err) => console.error("Error fetching data node streams:", err));
  }, []);

  // 🧹 2. Clear All Active Filters Handler Node
  const handleClearAll = () => {
    setSearch('');
    setSelectedCategory('All');
    setPriceRange(1000);
  };

  if (loading) return <MainLayout><Loader /></MainLayout>;

  // 🔥 Combined Search, Category & Dynamic Price Filter System
  let updatedList = products.filter(p => {
    if (!p) return false;

    // A. Search Input Match
    const matchesSearch = p.name ? p.name.toLowerCase().includes(search.toLowerCase()) : false;
    
    // B. Category Schema Dynamic Match
    const matchesCat = selectedCategory === 'All' || 
                       p.category?._id === selectedCategory || 
                       p.category === selectedCategory ||
                       p.category?.name === selectedCategory;
                       
    // C. Budget Constraint Price Range Match
    const matchesPrice = p.price !== undefined ? p.price <= priceRange : true;
                       
    return matchesSearch && matchesCat && matchesPrice;
  });

  // 📐 Structural Sort Mechanism Array Splicing Lookups safely
  let sortedList = [...updatedList];
  if (sortOrder === 'low-high') sortedList.sort((a, b) => a.price - b.price);
  if (sortOrder === 'high-low') sortedList.sort((a, b) => b.price - a.price);

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Search Parameter Capture */}
        <SearchBar value={search} onChange={setSearch} />
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* 👈 Pass completely operational control variables to Sidebar Component */}
          <div className="w-full md:w-1/4">
            <FilterSidebar 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory} 
              categories={categories} 
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              handleClearAll={handleClearAll}
            />
          </div>
          
          {/* Product Items Render Deck View Grid */}
          <div className="w-full md:w-3/4 space-y-4">
            <div className="flex justify-between items-center bg-gray-50/50 p-3 rounded-2xl border border-gray-100">
              <p className="text-xs font-black text-gray-400 uppercase tracking-wider">
                {sortedList.length} Snacks Found
              </p>
              <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
            </div>
            
            {/* Dynamic Product Grid Display */}
            <ProductGrid products={sortedList} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Products;