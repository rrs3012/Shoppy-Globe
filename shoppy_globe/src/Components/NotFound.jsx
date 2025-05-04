// Components/NotFound.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate to another route

  return (
    // Full-screen container with center alignment and background gradient
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-orange-100 px-4">
      
      {/* Card-style container for the message */}
      <div className="text-center bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-lg border border-orange-200 max-w-lg">
        
        {/* Large 404 heading */}
        <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>

        {/* Subheading */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>

        {/* Description message */}
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>

        {/* Go Back button */}
        <button
          onClick={() => navigate("/")} // Navigates to homepage
          className="px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-xl shadow-md transition duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;

