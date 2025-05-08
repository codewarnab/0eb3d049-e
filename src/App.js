import React, { useState } from 'react';
import Header from './components/Header';
import ProductCatalog from './components/ProductCatalog';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header toggleCart={toggleCart} />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <ProductCatalog />
        </main>
        
        {/* Sliding cart panel */}
        <div 
          className={`fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <Cart toggleCart={toggleCart} />
        </div>
        
        {/* Overlay when cart is open */}
        {isCartOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleCart}
          />
        )}
        
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold">React Online Store</h3>
                <p className="text-gray-300 text-sm">Your one-stop shop for quality products</p>
              </div>
              
              <div className="flex space-x-4 text-sm">
                <a href="#" className="hover:text-blue-300">Terms</a>
                <a href="#" className="hover:text-blue-300">Privacy</a>
                <a href="#" className="hover:text-blue-300">Contact</a>
              </div>
            </div>
            <div className="mt-6 text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} React Online Store. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;