import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-t from-sky-100 to-white px-4">
      {/* Card-style container */}
      <div className="text-center bg-white/90 backdrop-blur-sm p-12 rounded-2xl shadow-xl border border-sky-200 max-w-md animate-fade">
        {/* Decorative 404 with emoji */}
        <h1 className="text-7xl font-bold text-teal-500 mb-6 animate-pulse">404 🚫</h1>

        {/* Subheading */}
        <h2 className="text-3xl font-bold text-blue-900 mb-3">Page Not Found</h2>

        {/* Description message */}
        <p className="text-lg text-blue-800 mb-8 font-medium max-w-sm">
          Sorry, the page you are looking for does not exist.
        </p>

        {/* Go Back button */}
        <button
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-sky-600 text-white font-medium rounded-full shadow-md hover:bg-sky-700 transition-all duration-300 animate-bounce"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;