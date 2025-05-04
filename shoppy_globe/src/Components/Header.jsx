import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.Products.items);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Top Header */}
      <header className="w-full bg-gradient-to-r from-indigo-100 via-white to-orange-100 shadow-md sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src="https://www.pngmart.com/files/12/Shopee-Logo-Transparent-Background.png"
              alt="ShoppyGlobe Logo"
              className="w-10 h-10"
            />
            <h1 className="text-2xl font-bold text-indigo-700 tracking-wide drop-shadow-sm">
              Shoppy<span className="text-orange-500">Globe</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-md font-semibold text-gray-700">
            {['/', '/products', '/checkout'].map((path, index) => {
              const labels = ['Home', 'Products', 'Checkout'];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `transition-all duration-200 hover:text-orange-500 ${
                      isActive ? 'text-orange-600 font-bold' : ''
                    }`
                  }
                >
                  {labels[index]}
                </NavLink>
              );
            })}
          </nav>

          {/* Cart & Hamburger */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <div className="relative text-xl text-gray-700 hover:text-indigo-600 transition">
              <button onClick={() => navigate('/cartItems')}>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full shadow-sm">
                {Math.max(0, cart.length)}
              </span>
            </div>

            {/* Mobile Nav Toggle */}
            <button
              className="text-2xl md:hidden text-gray-700 hover:text-indigo-700 transition"
              onClick={() => setIsNavVisible(!isNavVisible)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isNavVisible && (
        <div className="md:hidden fixed top-[76px] right-0 w-[75%] sm:w-[60%] bg-white/95 backdrop-blur-lg border-l border-orange-200 shadow-2xl p-6 space-y-4 transition-all duration-300 rounded-l-2xl z-40">
          {['/', '/products', '/checkout'].map((path, index) => {
            const labels = ['Home', 'Products', 'Checkout'];
            return (
              <NavLink
                key={path}
                to={path}
                className="block text-md font-semibold text-gray-800 hover:text-indigo-500 transition-all"
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
