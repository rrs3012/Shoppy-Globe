import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AddCartItem } from '../utlies/productSlice';

const ProductDetails = () => {
  const allProducts = useSelector((state) => state.Products.fullItems);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Find product based on ID from URL params
  const product = allProducts.find((item) => item.id === Number(id));

  const handleAddToCart = () => {
    dispatch(AddCartItem(product));
  };

  if (!product) {
    return <div className="text-center mt-10 text-xl text-red-500">Product not found.</div>;
  }

  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-to-t from-sky-100 to-white">
      {/* ⬅ Back Button */}
      <div className="flex justify-start mb-8">
        <button
          onClick={() => navigate('/products')}
          className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-3 rounded-full shadow-md transition-all duration-300 animate-bounce"
        >
          ⬅ Go Back
        </button>
      </div>

      {/* 🧾 Product Card */}
      <div className="max-w-6xl mx-auto bg-white border border-sky-200 rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8 transition-transform duration-300 hover:scale-[1.01] animate-fade">
        {/* 🖼️ Product Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full max-w-md object-contain rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* 📋 Product Info */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold text-blue-900 text-center md:text-left animate-pulse">
            {product.title}
          </h1>

          <div className="space-y-4 text-lg text-blue-800">
            <p><span className="font-medium text-teal-500">Category:</span> {product.category}</p>
            <p><span className="font-medium text-teal-500">Description:</span> {product.description}</p>
            <p><span className="font-medium text-teal-500">Return Policy:</span> {product.returnPolicy || 'Available within 7 days'}</p>
            <p><span className="font-medium text-teal-500">Shipping Info:</span> {product.shippingInformation || 'Delivered within 3-5 days'}</p>
            <p><span className="font-medium text-teal-500">Stock:</span> {product.stock}</p>
            <p><span className="font-medium text-teal-500">Warranty:</span> {product.warrantyInformation || '1 Year'}</p>
            <p><span className="font-medium text-teal-500">Brand:</span> {product.brand}</p>
          </div>

          {/* 💰 Price + Add to Cart */}
          <div className="flex items-center justify-between mt-8">
            <p className="text-3xl font-bold text-teal-500">${product.price}</p>
            <button
              onClick={handleAddToCart}
              className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-3 rounded-full shadow-md transition-all duration-300 animate-bounce"
            >
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;