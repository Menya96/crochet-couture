import React, { useState, useRef } from 'react';

interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
}

import './productcard.css'; // Import the CSS file
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
interface ProductCardProps {
 product: Product;
}
 
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL'>('S');
  const heartIconRef = useRef<SVGElement>(null);
  return (
    <div className='bg-accentGold min-h-screen flex flex-col pb-4'>
       <div className='flex flex-col md:flex-row border-b border-primaryGreen'>
          <div className='flex flex-col md:w-1/2 md:justify-center md:items-center px-4 md:mt-4 md:px-20'> 
            {/* Large image */}
            <img src={product.image} alt={product.name} className=" md:w-1/2 h-auto mt-4 object-cover" /> {/* Added responsive width */}

            {/* Container for smaller images */}
            <div className="flex flex-row justify-center  w-full md:w-1/2 mt-4"> {/* Added responsive width and margin */}
              {/* Smaller images */}
              <img src={product.image} alt={`${product.name} thumbnail 1`} className="w-1/4 h-auto object-cover mx-1" /> {/* Added responsive width and margin */}
              <img src={product.image} alt={`${product.name} thumbnail 2`} className="w-1/4 h-auto object-cover mx-1" />
              <img src={product.image} alt={`${product.name} thumbnail 3`} className="w-1/4 h-auto object-cover mx-1" />
            </div>
          </div>
          <div className='flex flex-col p-4 md:pt-12 md:w-1/2 md:px-20'>
            <h3 className='text-2xl font-bold mb-2 text-center md:text-left text-primaryGreen'>{product.name}</h3>
            <h3 className='mb-4 text-primaryGreen'>{product.description}</h3>
            <h3 className='mb-1 text-primaryGreen text-2xl font-bold'>KSh {product.price}</h3> {/* Make price dynamic if needed */}
            <div className="flex justify-between items-center">
              <h4 className='text-primaryGreen border-b inline-block pb-1'>
                Size: {
                  (() => {
                    switch (selectedSize) {
                      case 'S': return 'Small';
                      case 'M': return 'Medium';
                      case 'L': return 'Large';
                      case 'XL': return 'Extra Large';
                      default: return ''; // Or a default size
                    }
                  })()
                }
              </h4>
              <div className="relative group">
                <FaHeart
                  ref={heartIconRef} // Attach the ref here
                  className="text-primaryGreen text-3xl cursor-pointer mb-2"
                  onClick={() => {
                  console.log('Add to wishlist');
                  // Add and remove the class to trigger the animation
                  if (heartIconRef.current) {
                    heartIconRef.current.classList.add('pop-animation');
                    setTimeout(() => {
                    heartIconRef.current?.classList.remove('pop-animation');
                  }, 300); // Match the animation duration
                  }
                }}
               /> {/* Added heart icon with click handler */}

                <span className="absolute right-0 top-0 mt-8 mr-2 px-2 py-1 bg-neutralBrown text-primaryGreen text-xs rounded invisible group-hover:visible transition-opacity duration-300 opacity-0 group-hover:opacity-100">Add to Wishlist</span> {/* Added tooltip text */}
              </div>
            </div>
            <div className='mt-2'>
  
              <span
                className='border border-4 border-secondaryBrown p-1 text-primaryGreen mr-2 cursor-pointer'
                onClick={() => setSelectedSize('S')}>S</span>
              <span
                className='border border-4 border-secondaryBrown p-1 text-primaryGreen mr-2 cursor-pointer'
                onClick={() => setSelectedSize('M')}>M</span>
              <span
                className='border border-4 border-secondaryBrown p-1 text-primaryGreen mr-2 cursor-pointer'
                onClick={() => setSelectedSize('L')}>L</span>
              <span
                className='border border-4 border-secondaryBrown p-1 text-primaryGreen mr-2 cursor-pointer'
                onClick={() => setSelectedSize('XL')}>XL</span>       
            </div>
            
            <button
              className="mt-4 bg-primaryGreen text-accentGold hover:scale-105 py-2 px-4 rounded flex items-center justify-center hover:bg-secondaryBrown transition-all duration-300 ease-in-out"
              onClick={() => console.log('Add to cart')}
            >
              <FaShoppingCart className="mr-4" /> Add to Cart
            </button>
          </div>
       </div>
      <div>
        <div className='flex justify-between mx-4 md:mx-20'>
            <h4 className='text-xl md:text-2xl mt-2 font-bold text-primaryGreen '>Customer Feedback</h4>

        </div>
      </div>
    </div>
  );
};
export default ProductCard;


