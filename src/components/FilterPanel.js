import React, { useState } from 'react';

const FilterPanel = ({ filters, onFilterChange }) => {
  const [expanded, setExpanded] = useState({
    categories: true,
    price: true,
    availability: true
  });

  // Available categories for the filter
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'books', name: 'Books' },
    { id: 'home', name: 'Home & Kitchen' },
    { id: 'beauty', name: 'Beauty & Personal Care' }
  ];

  // Price range handler
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({
      priceRange: {
        ...filters.priceRange,
        [name]: parseInt(value, 10)
      }
    });
  };

  // Category selection handler
  const handleCategoryChange = (categoryId) => {
    onFilterChange({ category: categoryId });
  };

  // In stock toggle handler
  const handleInStockChange = () => {
    onFilterChange({ inStock: !filters.inStock });
  };

  // Search query handler
  const handleSearchChange = (e) => {
    onFilterChange({ searchQuery: e.target.value });
  };

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Reset all filters
  const resetFilters = () => {
    onFilterChange({
      category: 'all',
      priceRange: { min: 0, max: 1000 },
      inStock: false,
      searchQuery: '',
      sortBy: 'default'
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sticky top-20">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Filters</h2>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={filters.searchQuery}
            onChange={handleSearchChange}
          />
          <div className="absolute left-2 top-2.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        <button
          onClick={resetFilters}
          className="mt-3 w-full text-sm text-blue-600 hover:text-blue-800 transition-colors"
        >
          Reset all filters
        </button>
      </div>
      
      {/* Categories Section */}
      <div className="mb-6 border-t border-gray-200 pt-4">
        <div 
          className="flex justify-between items-center mb-2 cursor-pointer"
          onClick={() => toggleSection('categories')}
        >
          <h3 className="font-semibold text-gray-700">Categories</h3>
          <button className="text-gray-500">
            {expanded.categories ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
        
        {expanded.categories && (
          <div className="space-y-2 ml-1">
            {categories.map(category => (
              <div key={category.id} className="flex items-center">
                <input
                  type="radio"
                  id={`category-${category.id}`}
                  name="category"
                  checked={filters.category === category.id}
                  onChange={() => handleCategoryChange(category.id)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor={`category-${category.id}`} className="ml-2 text-sm text-gray-700">
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Price Range Section */}
      <div className="mb-6 border-t border-gray-200 pt-4">
        <div 
          className="flex justify-between items-center mb-2 cursor-pointer"
          onClick={() => toggleSection('price')}
        >
          <h3 className="font-semibold text-gray-700">Price Range</h3>
          <button className="text-gray-500">
            {expanded.price ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
        
        {expanded.price && (
          <div className="space-y-3">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>${filters.priceRange.min}</span>
              <span>${filters.priceRange.max}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="min-price" className="block text-sm text-gray-600 mb-1">Min</label>
                <input
                  type="number"
                  id="min-price"
                  name="min"
                  min="0"
                  max={filters.priceRange.max}
                  value={filters.priceRange.min}
                  onChange={handlePriceChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="max-price" className="block text-sm text-gray-600 mb-1">Max</label>
                <input
                  type="number"
                  id="max-price"
                  name="max"
                  min={filters.priceRange.min}
                  value={filters.priceRange.max}
                  onChange={handlePriceChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Availability Section */}
      <div className="border-t border-gray-200 pt-4">
        <div 
          className="flex justify-between items-center mb-2 cursor-pointer"
          onClick={() => toggleSection('availability')}
        >
          <h3 className="font-semibold text-gray-700">Availability</h3>
          <button className="text-gray-500">
            {expanded.availability ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
        
        {expanded.availability && (
          <div className="flex items-center">
            <input
              type="checkbox"
              id="in-stock"
              checked={filters.inStock}
              onChange={handleInStockChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="in-stock" className="ml-2 text-sm text-gray-700">
              In Stock Only
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterPanel;