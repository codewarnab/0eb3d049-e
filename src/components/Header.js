import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Header = ({ toggleCart }) => {
  const { cart } = useContext(CartContext);
  
  // Calculate total items in cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and site name */}
          <div className="flex items-center">
            <div className="text-blue-600 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M168,88a40,40,0,0,1-80,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
            </div>
            <span className="font-bold text-xl text-gray-800">ReactStore</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Deals</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a></li>
            </ul>
          </nav>
          
          {/* Search and cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center relative">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute left-2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="112" cy="112" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="168.57" y1="168.57" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              </div>
            </div>
            
            <button 
              onClick={toggleCart}
              className="relative flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="View cart"
            >
              <div className="text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M188,184H91.17a16,16,0,0,1-15.74-13.14L48.73,24H24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="92" cy="204" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="188" cy="204" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              </div>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            
            <button className="md:hidden text-gray-700" aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="24 180 68 164 108 180 148 164 188 180 232 164" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="24" y1="128" x2="232" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M208,172.73V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V171.27" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M48.2,92a8,8,0,0,1-7.83-10.29C49.49,53.24,85.26,32,128,32s78.52,21.25,87.63,49.73A8,8,0,0,1,207.8,92Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile search - only visible on small screens */}
      <div className="md:hidden px-4 pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="absolute left-2 top-2.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="112" cy="112" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="168.57" y1="168.57" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;