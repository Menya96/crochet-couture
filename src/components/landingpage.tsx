
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-secondaryBrown min-h-screen flex items-center justify-center">
      <div className="container flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 my-4 text-center flex flex items-center justify-center flex-col bg-blue-300">
          <h1 className="text-5xl font-bold text-accentGold">Unique Threads, Unique You:Find your style at Crochet Couture!</h1>
          <p className="mt-4 text-2xl text-accentGold">Wrap yourself in excellence and experience the warmth and comfort of handmade quality crochets.</p>
        </div>
        <div className="md:w-1/2 md:mt-0">
          <img alt="hero" className="w-full h-auto rounded-lg" src="/images/pexels-caiquethecreator-25311775.png" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;