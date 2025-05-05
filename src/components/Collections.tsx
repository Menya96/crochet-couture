import React from 'react';

const categories = [
  { name: "Bags", image: "./images/crochet-bag.webp" },
  { name: "Beanies", image: "./images/crochet-beanie.jpg" },
  { name: "Bikinis", image: "./images/crochet-bikini.jpg" },
  { name: "Kid's clothing", image: "./images/crochet-kid.jpg" },
  { name: "Dresses", image: "./images/crochet-dress.jpg" },
  { name: "Trousers", image: "./images/crochet-trousers.jpg" },
  { name: "Sweaters", image: "./images/crochet-sweater.jpg" },
  { name: "Tops", image: "./images/crochet-tops.webp" },
];
const Collections: React.FC = () => {

  return (
    <div className='bg-white min-h-screen flex w-screen flex-col items-center '>
      <div className=''>
        <h1 className='mt-4 md:text-5xl text-2xl font-bold text-center text-primaryGreen font-extrabold '>
          Unveil Your Unique Style with Crochet
        </h1>
        <p className="px-2 text-center text-primaryGreen mt-4 md:text-2xl font-bold">
          From intricate patterns to elegant designs, Explore our handcrafted crochet pieces.
        </p>
      </div>
      <div className='container grid grid-cols-1 md:grid-cols-4 gap-4 mt-8'>
        {categories.map(({ name, image }, i) => (
          <div key={i} className="card bg-gray-100 rounded-lg shadow-md p-4 flex flex-col items-center overflow-hidden hover:translate-y-[-5px] hover:rotate-[-1deg] transition duration-300 ease-in-out">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-primaryGreen capitalize">
             {name}
            </h3>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Collections;