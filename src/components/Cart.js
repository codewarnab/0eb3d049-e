import React, { useContext } from 'react';
import CartItem from './CartItem';
import { CartContext } from '../context/CartContext';

const Cart = ({ toggleCart }) => {
  const { cart, clearCart } = useContext(CartContext);
  
  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
  
  // Format price to always show 2 decimal places
  const formatPrice = (price) => price.toFixed(2);
  
  return (
    <div className="flex flex-col h-full">
      {/* Cart Header */}
      <div className="border-b border-gray-200 px-4 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <div className="flex items-center">
          {cart.length > 0 && (
            <button 
              onClick={clearCart} 
              className="text-sm text-red-600 hover:text-red-800 mr-4"
            >
              Clear All
            </button>
          )}
          <button 
            onClick={toggleCart}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Cart Content */}
      <div className="flex-grow overflow-y-auto px-4 py-2">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="text-gray-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <button 
              onClick={toggleCart}
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="py-2 space-y-4">
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
      
      {/* Cart Footer */}
      {cart.length > 0 && (
        <div className="border-t border-gray-200 px-4 py-4">
          {/* Order summary */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
              <span>${formatPrice(cartTotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Tax</span>
              <span>${formatPrice(cartTotal * 0.1)}</span>
            </div>
            <div className="flex justify-between font-bold text-gray-900 pt-2 border-t">
              <span>Total</span>
              <span>${formatPrice(cartTotal * 1.1)}</span>
            </div>
          </div>
          
          {/* Checkout button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
            Proceed to Checkout
          </button>
          
          {/* Continue shopping button */}
          <button 
            className="w-full text-center mt-3 text-blue-600 hover:text-blue-800"
            onClick={toggleCart}
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;