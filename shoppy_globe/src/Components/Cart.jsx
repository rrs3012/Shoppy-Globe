import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.Products.items);
  const navigate = useNavigate();

  const totalPrice = useMemo(() => {
    return Math.floor(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [cartItems]);

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      {cartItems.length > 0 ? (
        <>
          {/* 🛒 Header */}
          <h1 className="text-4xl font-bold text-center text-sky-700 mb-8">
            Your Shopping Cart
          </h1>

          {/* 🧾 Cart Items List */}
          <div className="w-full bg-white rounded-xl shadow-xl">
            {cartItems.map((item, index) => (
              <CartItem key={item.id} CartItems={item} index={index} />
            ))}
          </div>

          {/* 📦 Cart Summary */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 mb-8 bg-sky-100 p-6 rounded-xl shadow-md transition-all duration-300">
            <p className="text-xl font-semibold text-sky-800">
              🛍️ Total Items: {cartItems.length}
            </p>
            <p className="text-xl font-semibold text-cyan-700">
              💰 Total Amount: ${totalPrice}
            </p>
            <button
              onClick={() => navigate('/checkout')}
              className="mt-4 md:mt-0 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl font-bold shadow-md transition-all duration-300 hover:scale-95"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        // 🚫 Empty Cart
        <div className="h-[70vh] flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl font-extrabold text-sky-600 mb-6 animate-pulse">
            🛒 No Products in Cart
          </h2>
          <button
            onClick={() => navigate('/products')}
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-95"
          >
            Browse Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
