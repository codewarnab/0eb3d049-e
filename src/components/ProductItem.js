import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const ProductItem = ({ product, inCart }) => {
  const { addToCart } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);
  
  const { id, name, price, description, image, category, inStock, rating } = product;
  
  // Format price to always show 2 decimal places
  const formattedPrice = price.toFixed(2);
  
  // Handle add to cart
  const handleAddToCart = () => {
    if (inStock) {
      addToCart(product);
    }
  };
  
  // Generate stars for rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`star-${i}`} className="text-yellow-400">★</span>
      );
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className="text-yellow-400">★</span>
      );
    }
    
    // Empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">★</span>
      );
    }
    
    return stars;
  };
  
  return (
    <div 
      className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-full object-cover object-center transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Category badge */}
        <div className="absolute top-2 left-2">
          <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-md uppercase tracking-wide">
            {category}
          </span>
        </div>
        
        {/* Out of stock overlay */}
        {!inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-600 text-white px-3 py-1 rounded-md font-semibold uppercase tracking-wide text-sm">
              Out of Stock
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="mb-2 text-sm">{renderStars()}</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg text-gray-900">${formattedPrice}</span>
          
          <button 
            onClick={handleAddToCart}
            disabled={!inStock || inCart}
            className={`px-3 py-1.5 rounded-md text-sm font-medium ${
              inCart 
                ? 'bg-green-100 text-green-800 cursor-default' 
                : inStock 
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {inCart ? 'Added' : inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;