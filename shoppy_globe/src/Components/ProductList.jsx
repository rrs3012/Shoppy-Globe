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
      <p className="text-red-500 text-center text-xl font-semibold mt-10">
        Something went wrong: {error}
      </p>
    );
  }

  // Show loading state
  if (loading) {
    return (
      <p className="text-5xl text-center font-bold text-slate-700 animate-pulse mt-20">
        Loading...
      </p>
    );
  }

  return (
    <>
      {/* 🔍 Search Field */}
      <div className="w-full flex justify-center mt-10 px-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="🔍 Search for a product..."
          className="w-full max-w-md border-2 border-orange-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-200 px-6 py-3 rounded-full text-lg transition-all duration-300 shadow-md placeholder:text-gray-400"
        />
      </div>

      {/* 🛒 Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mt-10 mb-20 animate-fade-in">
        {filteredResults.map((product) => (
          <ProductItem key={product.id} item={product} setText={setSearchTerm} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
