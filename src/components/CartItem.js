import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateCartItemQuantity, removeFromCart } = useContext(CartContext);
  const { id, name, price, image, quantity } = item;
  
  // Format price to always show 2 decimal places
  const formatPrice = (price) => price.toFixed(2);
  
  // Handle quantity change
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) {
      return;
    }
    updateCartItemQuantity(id, newQuantity);
  };
  
  // Handle remove item
  const handleRemoveItem = () => {
    removeFromCart(id);
  };
  
  return (
    <div className="flex border-b border-gray-200 pb-4">
      {/* Product image */}
      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Product details */}
      <div className="ml-4 flex-grow">
        <div className="flex justify-between">
          <h3 className="text-sm font-medium text-gray-800">{name}</h3>
          <p className="font-medium text-gray-900">${formatPrice(price * quantity)}</p>
        </div>
        
        <p className="text-xs text-gray-500 mt-1">${formatPrice(price)} each</p>
        
        <div className="flex items-center justify-between mt-2">
          {/* Quantity controls */}
          <div className="flex items-center border border-gray-300 rounded-md">
            <button 
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
              className={`px-2 py-1 text-gray-600 ${quantity <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
              aria-label="Decrease quantity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
            
            <span className="px-2 py-1 text-sm min-w-[30px] text-center">
              {quantity}
            </span>
            
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
              aria-label="Increase quantity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Remove button */}
          <button 
            onClick={handleRemoveItem}
            className="text-xs text-red-600 hover:text-red-800 transition-colors"
            aria-label="Remove item"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;