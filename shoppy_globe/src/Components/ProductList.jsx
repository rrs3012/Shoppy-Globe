import React, { useEffect, useState } from 'react';
import UseFetch from '../utlies/useFetch';
import ProductItem from './ProductItem';
import { useDispatch } from 'react-redux';
import { SetFullData } from '../utlies/productSlice';

const ProductList = () => {
  // Local state
  const [allProducts, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch API data using custom hook
  const { data, error, loading } = UseFetch('https://dummyjson.com/products');
  const dispatch = useDispatch();

  // On successful fetch, populate products and Redux state
  useEffect(() => {
    if (data) {
      setAllProducts(data.products);
      dispatch(SetFullData(data.products));
    }
  }, [data, dispatch]);

  // Filter logic for search input
  const filteredResults = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Show error if fetch fails
  if (error) {
    return (
      <p className="text-red-500 text-center text-2xl font-bold mt-12 animate-pulse">
        Something went wrong: {error}
      </p>
    );
  }

  // Show loading state
  if (loading) {
    return (
      <p className="text-6xl text-center font-bold text-teal-500 animate-bounce mt-20">
        Loading...
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-t from-sky-100 to-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* 🔍 Search Field */}
        <div className="w-full flex justify-center mt-8 px-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="🔍 Search for a product..."
            className="w-full max-w-lg border-2 border-sky-600 focus:border-sky-700 focus:ring-4 focus:ring-sky-200 px-6 py-3 rounded-full text-lg transition-all duration-300 shadow-md placeholder:text-teal-500 font-medium"
          />
        </div>

        {/* 🛒 Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-10 mb-20 animate-fade">
          {filteredResults.map((product) => (
            <ProductItem key={product.id} item={product} setText={setSearchTerm} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;