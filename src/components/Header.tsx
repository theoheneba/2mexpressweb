import React, { useState } from 'react';
import { Menu, X, Bus, User, UserPlus } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="2M Express - Safe and comfortable bus transportation services in Ghana" 
              className="h-16 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="bg-red-600 p-3 rounded-lg hidden">
              <Bus className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Services</a>
            <a href="#routes" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Routes</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact Us</a>
          </nav>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/signin"
              className="flex items-center space-x-2 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </a>
            <a 
              href="/signup"
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <UserPlus className="h-4 w-4" />
              <span>Sign Up</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-red-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-red-600">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-red-600">Services</a>
              <a href="#routes" className="block px-3 py-2 text-gray-700 hover:text-red-600">Routes</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-red-600">Contact Us</a>

              {/* Auth Buttons (Mobile) */}
              <div className="pt-4 pb-2 border-t border-gray-200">
                <div className="flex flex-col space-y-2">
                  <a 
                    href="/signin"
                    className="flex items-center justify-center space-x-2 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg"
                  >
                    <User className="h-4 w-4" />
                    <span>Sign In</span>
                  </a>
                  <a 
                    href="/signup"
                    className="flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg"
                  >
                    <UserPlus className="h-4 w-4" />
                    <span>Sign Up</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
