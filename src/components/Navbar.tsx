// src/components/Navbar.tsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faUser, faHeart, faShoppingCart, faArchive, faUsers, faQuestionCircle, faAddressCard } from '@fortawesome/free-solid-svg-icons';


  
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primaryGreen text-accentGold py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold font-caveat ">
          Logo
        </Link>

        {/* Search Bar */}
        <div className="md:w-1/2 relative hidden md:block">
            <input
              type="search"
              placeholder="Search Here"
              className="w-full pl-10 pr-4 py-2 border-2 border-solid border-accentGold rounded-md focus:outline-none focus:ring-1 focus:border-secondaryBrown focus:ring-secondaryBrown bg-primaryGreen placeholder-accentGold"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-accentGold focus-within:text-secondaryBrown" />
            </div>
          </div>

        {/* Navigation Links - Mobile */}
        <div
          className={`md:hidden absolute top-full right-0 bg-primaryGreen text-accentGold w-64 h-screen transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out shadow-lg`}
        >
           {/* Search Bar - Mobile */}
          <div className="relative p-4">
            <input
              type="search"
              placeholder="Search Here"
              className="w-full pl-10 pr-4 py-2 border-2 border-solid border-accentGold rounded-md focus:outline-none focus:ring-1 focus:border-secondaryBrown focus:ring-secondaryBrown bg-primaryGreen placeholder-accentGold text-sm"
            />
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-accentGold text-sm focus-within:text-secondaryBrown" />
            </div>
          </div>
          <ul className="flex flex-col items-start py-4 pl-24">
          {[
            { icon: faUser, text: 'User' },
            { icon: faHeart, text: 'Wishlist' },
            { icon: faArchive, text: 'Collections' },
            { icon: faUsers, text: 'About Us' },
            { icon: faAddressCard, text: 'Contact Us' },
            { icon: faQuestionCircle, text: 'FAQ' },
          ].map((item, index) => (
            <li key={index} className="mb-4 flex items-start ">
              <a href="#" className="hover:text-secondaryBrown flex items-center hover:scale-125 transform transition-transform ease-out duration-200">
                <FontAwesomeIcon icon={item.icon} className="mr-2" /> {item.text}
              </a>
            </li>
          ))}
          </ul>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex flex-col items-start space-y-2">
          <div className="flex space-x-6">
            <a href="#" className="group relative hover:text-secondaryBrown">
              <FontAwesomeIcon icon={faUser} className="text-accentGold text-xl transform transition-transform ease-out duration-300 group-hover:translate-y-[-20px] group-hover:scale-0" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-accentGold opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-300">
                User
              </span>
            </a>
            <a href="#" className="group relative hover:text-secondaryBrown">
              <FontAwesomeIcon icon={faHeart} className="text-accentGold text-xl transform transition-transform ease-out duration-300 group-hover:translate-y-[-20px] group-hover:scale-0" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-accentGold opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-300">
                Wishlist
              </span>
            </a>
            <a href="#" className="group relative hover:text-secondaryBrown">
              <FontAwesomeIcon icon={faShoppingCart} className="text-accentGold text-xl transform transition-transform ease-out duration-300 group-hover:translate-y-[-20px] group-hover:scale-0" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-accentGold opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-300">
                Cart
              </span>
            </a>
          </div>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-lg hover:text-secondaryBrown hover:scale-110 transform transition-transform ease-out duration-200">Collections</a>
            <a href="#" className="text-lg hover:text-secondaryBrown hover:scale-110 transform transition-transform ease-out duration-200">About Us</a>
            <a href="#" className="text-lg hover:text-secondaryBrown hover:scale-110 transform transition-transform ease-out duration-200">Contact Us</a>
            <a href="#" className="text-lg hover:text-secondaryBrown hover:scale-110 transform transition-transform ease-out duration-200">FAQ</a>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center mx-10">
          <button onClick={() => setIsOpen(!isOpen)} className="text-accentGold focus:outline-none flex items-center text-sm">
            <span className="mr-2">{isOpen ? 'CLOSE' : 'MENU'}</span><FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-sm" />
          </button>
        </div>

         {/* Sticky Cart Icon - Mobile */}
         <div className="md:hidden absolute top-0 right-2 z-10 flex items-center h-full">
          <a href="#" className="text-accentGold hover:text-secondaryBrown">
            <FontAwesomeIcon icon={faShoppingCart} className="text-sm" />
          </a>
        </div>
        </div>
    </nav >
  );
};
export default Navbar;