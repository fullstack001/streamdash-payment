// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Menu and close icons

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 md:px-24 bg-white shadow-md relative">
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="istreamdash logo"
            className="h-8 w-auto mr-2 md:mr-8"
          />
        </Link>
        <nav className="hidden md:flex space-x-16 font-bold text-xl pt-2">
          <Link to="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link to="/products" className="text-gray-600 hover:text-blue-600">
            Products
          </Link>
          <Link to="/pricing" className="text-gray-600 hover:text-blue-600">
            Pricing
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </Link>
        </nav>
      </div>
      <Link
        to="/login"
        className="hidden md:block bg-blue-600 font-bold text-white px-4 py-2 rounded-xl hover:bg-blue-500"
      >
        Login
      </Link>

      {/* Mobile Menu Toggle Button */}
      <button className="md:hidden text-gray-600" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute z-50 top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-6 space-y-4 font-bold text-lg md:hidden">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-600"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-gray-600 hover:text-blue-600"
            onClick={toggleMobileMenu}
          >
            Products
          </Link>
          <Link
            to="/pricing"
            className="text-gray-600 hover:text-blue-600"
            onClick={toggleMobileMenu}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-blue-600"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-500 w-full text-center"
            onClick={toggleMobileMenu}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
