import React, { useEffect } from 'react';
import { createTimeline, stagger } from 'animejs';

const LandingPage: React.FC = () => {+
  useEffect(() => {
    //animation that handles the h1 animation
    const timeline =  createTimeline({ defaults: { duration: 800 } });
    timeline.label('start')
      .add('.letter', { y: ['1.1em', 0] ,z: 0, opacity: [0, 1], delay: stagger(50)}, 'start');
  }, []);

  const text = "Unique Threads, Unique You: Find Your Style at Crochet Couture!";
  const letters = text.split("");

  return (
    <div className="bg-secondaryBrown min-h-screen flex">
      <div className="container flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 my-4 text-center flex flex-wrap items-center justify-center flex-col">
          <div className="text-4xl md:text-5xl font-bold text-accentGold ml6">
            <h1>
              {letters.map((letter, index) => (
                <span key={`letter-${index}`} className="letter">{letter}</span>
              ))}
            </h1>
          </div>
          <p className="mt-10 text-xl text-accentGold">Wrap yourself in excellence and experience the warmth and comfort of handmade quality crochets.</p>
        </div>
        <div className="md:w-1/2 md:mt-0">
          <img alt="hero" className="w-full h-auto rounded-lg" src="/images/pexels-caiquethecreator-25311775.png" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;