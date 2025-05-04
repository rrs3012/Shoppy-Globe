import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

const Body = () => {
  const navigate = useNavigate();

  // Handle browser back/forward navigation to ensure proper rendering
  useEffect(() => {
    const handlePopstate = () => {
      // Force re-render or redirect to current route if needed
      window.location.reload(); // Simple fix for fresher; can be optimized later
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-t from-sky-100 to-white text-blue-900 px-4">
      {/* ========== HERO SECTION ========== */}
      <section className="w-full max-w-7xl mt-12 text-center animate-fade-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-snug tracking-wide">
          Unleash Your <br />
          <span className="text-sky-600">Shopping Adventure!</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-blue-800 mb-10 max-w-2xl mx-auto font-medium">
          Dive into epic deals with effortless style, all just a click away.
        </p>

        {/* Promo Image */}
        <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl sky-blue-overlay">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
            alt="Shopping Banner"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button
            onClick={() => navigate('/products')}
            className="bg-sky-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-sky-700 transition-all duration-300 text-xl font-medium animate-slide-in"
          >
            Explore Now
          </button>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="w-full py-12 mt-16 bg-blue-800 text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="bg-blue-900 bg-opacity-50 p-6 rounded-xl hover:bg-opacity-70 transition-all duration-300">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
              <img
                src="https://www.pngmart.com/files/12/Shopee-Logo-Transparent-Background.png"
                alt="Brand Logo"
                className="w-10 h-10"
              />
              <h2 className="text-2xl font-bold">ShoppyGlobe</h2>
            </div>
            <p className="text-white text-sm max-w-xs mx-auto sm:mx-0">
              Your go-to hub for a thrilling shopping spree!
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-blue-900 bg-opacity-50 p-6 rounded-xl hover:bg-opacity-70 transition-all duration-300">
            <h3 className="text-lg font-medium mb-3">Connect With Us</h3>
            <p className="text-white flex items-center justify-center sm:justify-start gap-2 mb-2 text-sm">
              <LocalPhoneIcon className="text-teal-500" fontSize="small" />
              +91 72349 70151
            </p>
            <p className="text-white flex items-center justify-center sm:justify-start gap-2 text-sm">
              <AttachEmailIcon className="text-teal-500" fontSize="small" />
              radheyraman30122000@gmail.com
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="bg-blue-900 bg-opacity-50 p-6 rounded-xl hover:bg-opacity-70 transition-all duration-300">
            <h3 className="text-lg font-medium mb-3">Join Our Vibe</h3>
            <div className="flex justify-center sm:justify-start gap-4">
              {[
                {
                  icon: <InstagramIcon />,
                  href: 'https://www.instagram.com/atharvasingh8958/?hl=en',
                },
                { icon: <LocalPhoneIcon />, href: '#' },
                { icon: <AttachEmailIcon />, href: '#' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:text-teal-400 bg-white bg-opacity-10 p-2 rounded-full transition-all duration-200 hover:scale-105"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="mt-10 border-t border-sky-600 pt-4 text-center text-sm text-gray-200">
          © 2025 <span className="text-teal-500 font-medium">ShoppyGlobe</span>. Crafted with ❤️ for shoppers everywhere.
        </div>
      </footer>
    </div>
  );
};

export default Body;