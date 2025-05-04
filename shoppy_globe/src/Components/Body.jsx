import React from 'react';
import { useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

const Body = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center px-4 bg-gray-50 text-gray-800">
      {/* ========== HERO SECTION ========== */}
      <section className="w-full text-center max-w-4xl mt-24 animate-fade-slide">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 leading-tight">
          EVERYTHING YOU WANT,<br />
          <span className="text-orange-500">ALL IN ONE PLACE</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
          Discover unbeatable deals, just a click away.
        </p>

        {/* Promo Image */}
        <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl animate-zoom-fade">
          <img
            src="https://watermark.lovepik.com/photo/40008/0007.jpg_wh1200.jpg"
            alt="Shopping Banner"
            className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <button
            onClick={() => navigate('/products')}
            className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 text-lg font-semibold"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="w-full py-12 mt-20 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img
                src="https://www.pngmart.com/files/12/Shopee-Logo-Transparent-Background.png"
                alt="Brand Logo"
                className="w-10 h-10"
              />
              <h2 className="text-2xl font-bold text-blue-800">ShoppyGlobe</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Your one-stop destination for the best online shopping experience.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Contact</h3>
            <p className="text-gray-700 flex items-center justify-center md:justify-start gap-2 mb-2">
              <LocalPhoneIcon className="text-orange-500" /> +91 72349 70151
            </p>
            <p className="text-gray-700 flex items-center justify-center md:justify-start gap-2">
              <AttachEmailIcon className="text-orange-500" /> radheyraman30122000@gmail.com
            </p>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-6 text-3xl">
              {[
                { icon: <InstagramIcon fontSize="inherit" />, href: '#' },
                { icon: <LocalPhoneIcon fontSize="inherit" />, href: '#' },
                { icon: <AttachEmailIcon fontSize="inherit" />, href: '#' }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="text-orange-500 hover:text-indigo-600 transition-transform transform hover:scale-110"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
          <span className="text-orange-500 font-bold">&copy;</span> 2025 ShoppyGlobe. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Body;