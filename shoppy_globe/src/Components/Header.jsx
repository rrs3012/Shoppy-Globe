import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  // Access cart items from Redux store
  const cart = useSelector((state) => state.Products.items);

  // State for showing/hiding mobile navigation menu
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Navigation hook
  const navigate = useNavigate();

  return (
    <>
      {/* Main Top Header */}
      <header className="w-full bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src="https://www.pngmart.com/files/12/Shopee-Logo-Transparent-Background.png"
              alt="ShoppyGlobe Logo"
              className="w-10 h-10"
            />
            <h1 className="text-2xl font-extrabold text-indigo-700 tracking-wide">ShoppyGlobe</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-lg font-medium text-gray-700">
            {['/', '/products', '/checkout'].map((path, index) => {
              const labels = ['Home', 'Products', 'Checkout'];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `transition hover:text-orange-400 ${isActive ? 'text-orange-500' : ''}`
                  }
                >
                  {labels[index]}
                </NavLink>
              );
            })}
          </nav>

          {/* Cart & Hamburger Menu */}
          <div className="flex items-center gap-4">
            {/* Cart Icon with Badge */}
            <div className="relative text-2xl text-gray-700 hover:text-indigo-600 transition">
              <button onClick={() => navigate('/cartItems')}>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                {Math.max(0, cart.length)}
              </span>
            </div>

            {/* Hamburger Button (Mobile Nav) */}
            <button
              className="text-2xl md:hidden text-gray-700 hover:text-indigo-700 transition"
              onClick={() => setIsNavVisible(!isNavVisible)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isNavVisible && (
        <div className="md:hidden fixed top-[76px] right-0 w-[75%] sm:w-[60%] bg-white border-l border-gray-200 shadow-xl p-6 space-y-4 transition-all duration-300 rounded-l-2xl z-40">
          {['/', '/products', '/checkout'].map((path, index) => {
            const labels = ['Home', 'Products', 'Checkout'];
            return (
              <NavLink
                key={path}
                to={path}
                className="block text-lg font-semibold text-gray-700 hover:text-indigo-600 transition"
                onClick={() => setIsNavVisible(false)}
              >
                {labels[index]}
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Header;
