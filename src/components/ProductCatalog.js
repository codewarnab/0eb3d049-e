import React, { useState, useEffect, useContext } from 'react';
import ProductItem from './ProductItem';
import FilterPanel from './FilterPanel';
import { CartContext } from '../context/CartContext';
import products from '../data/products';

const ProductCatalog = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: { min: 0, max: 1000 },
    inStock: false,
    searchQuery: '',
    sortBy: 'default'
  });
  const { cart } = useContext(CartContext);

  useEffect(() => {
    // Apply filters to the products
    let result = [...products];
    
    // Filter by category
    if (filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category);
    }
    
    // Filter by price range
    result = result.filter(product => 
      product.price >= filters.priceRange.min && 
      product.price <= filters.priceRange.max
    );
    
    // Filter by stock
    if (filters.inStock) {
      result = result.filter(product => product.inStock);
    }
    
    // Filter by search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    }
    
    // Sort products
    switch (filters.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Keep original order by id
        result.sort((a, b) => a.id - b.id);
    }
    
    setFilteredProducts(result);
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Filter sidebar */}
      <aside className="md:w-1/4 lg:w-1/5">
        <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
      </aside>
      
      {/* Product grid */}
      <div className="flex-1">
        {/* Results summary and sort controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            {filteredProducts.length} Products
            {filters.category !== 'all' && ` in ${filters.category}`}
            {filters.searchQuery && ` matching "${filters.searchQuery}"`}
          </h2>
          
          <div className="mt-2 sm:mt-0">
            <select 
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.sortBy}
              onChange={(e) => handleFilterChange({ sortBy: e.target.value })}
            >
              <option value="default">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
        
        {/* No results message */}
        {filteredProducts.length === 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-md p-6 text-center">
            <div className="text-blue-500 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none"/>
                <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <circle cx="128" cy="180" r="12"/>
                <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">No products found</h3>
            <p className="text-gray-600">
              Try adjusting your filters or search query to find what you're looking for.
            </p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => setFilters({
                category: 'all',
                priceRange: { min: 0, max: 1000 },
                inStock: false,
                searchQuery: '',
                sortBy: 'default'
              })}
            >
              Reset Filters
            </button>
          </div>
        )}
        
        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductItem 
              key={product.id} 
              product={product} 
              inCart={cart.some(item => item.id === product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;