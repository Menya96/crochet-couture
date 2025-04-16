// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold font-caveat">
          Logo
        </div>

        {/* Search Bar */}
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Navigation Links */}
        <div>
          <div className="flex items-center">
            {/* Icons */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500">User</a>
              <a href="#" className="hover:text-blue-500">Wishlist</a>
              <a href="#" className="hover:text-blue-500">Cart</a>
            </div>
          </div>
          {/* Links */}
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-500">Collections</a>
            <a href="#" className="hover:text-blue-500">About Us</a>
            <a href="#" className="hover:text-blue-500">Contact Us</a>
            <a href="#" className="hover:text-blue-500">FAQ</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;