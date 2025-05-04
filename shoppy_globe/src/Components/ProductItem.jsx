import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddCartItem } from '../utlies/productSlice';

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.Products.items);

  return (
    <div className="bg-white border border-sky-200 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden animate-fade">
      {/* Product Image */}
      <img
        src={item.images?.[0] || '/placeholder.png'}
        alt={item.title || 'Product Image'}
        className="w-full h-56 object-cover rounded-t-xl hover:scale-110 transition-transform duration-300"
      />

      {/* Product Info */}
      <div className="p-4 flex flex-col justify-between flex-grow space-y-3">
        <h2 className="text-xl font-bold text-blue-900 text-center animate-pulse">
          {item.title}
        </h2>
        <p className="text-sm text-blue-800 text-center line-clamp-2 font-medium">
          {item.description}
        </p>

        <div className="flex justify-between items-center mt-auto">
          {/* Price & Rating */}
          <div className="flex flex-col text-left">
            <p className="text-lg font-bold text-teal-500">${item.price}</p>
            <p className="text-sm text-teal-500">{item.rating} ⭐</p>
          </div>

          {/* Action Button */}
          <NavLink to={`/product/${item.id}`}>
            <button className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-4 py-2 rounded-full shadow-md transition-all duration-300 animate-bounce">
              View Details
            </button>
          </NavLink>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => dispatch(AddCartItem(item))}
          className="mt-3 bg-teal-500 hover:bg-teal-600 text-white font-medium px-4 py-2 rounded-full shadow-md transition-all duration-300 animate-bounce"
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;