import React, { useEffect } from 'react';
import { createTimeline } from 'animejs';
import './landingpage.css'

const LandingPage: React.FC = () => {+
  useEffect(() => {
    // animation that handles the h1 animation
    const timeline = createTimeline({ defaults: { duration: 2000 } });
    timeline.label('start')
      .add('.word', { y: ['1.1em', 0], z: 0, opacity: [0, 1], delay: (el, i) => i * 200 }, 'start')
      .add('.p',{x: ['-100%', '0'], opacity: [0, 1], easing: 'easeInOutExpo'}, '-=1500')
      .add('.button',{
        clipPath: ['circle(0% at 50% 50%)', 'circle(150% at 50% 50%)'], 
        opacity: [0, 1],
        easing: 'easeInOutQuad'
        }, '-=1000')
        .add('.button2',{
        clipPath: ['circle(0% at 50% 50%)', 'circle(150% at 50% 50%)'], 
        opacity: [0, 1],
        easing: 'easeInOutQuad'
        }, '-=800')
        ;
      ;
  }, []);

  const text = "Unique Threads, Unique You: Find Your Style at Crochet Couture!";
  const words = text.split(" ");

  return (
    <div className="bg-secondaryBrown min-h-[550px] md:flex">
      <div className="container flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 my-3 md:pl-20 text-center flex items-center justify-center flex-col">
          <div className="text-2xl md:text-5xl font-bold text-accentGold text-center">
            <h1 >
              {words.map((word, index) => (
                <span key={`word-${index}`} className="word">{word}&nbsp;</span>
              ))}
            </h1>
          </div>
          <p className="p mt-2 md:mt-10 md:text-2xl md:px-20 text-center text-accentGold px-4">Wrap yourself in excellence and experience the warmth and comfort of handmade quality crochets.</p>
          <div className="flex flex-row mt-4 md:mt-12">
            <button className="button bg-accentGold text-primaryGreen font-bold md:mr-12 py-2 px-4 rounded-lg m-4 hover:scale-105 hover:shadow-lg hover:shadow-accentGold hover:translate-y-[-5px] transition-transform">Browse Collection</button>
            <button className="button2 bg-accentGold text-primaryGreen font-bold md:ml-12 py-2 px-4 rounded-lg m-4 hover:scale-105 hover:shadow-lg hover:shadow-accentGold hover:translate-y-[-5px] transition-transform">Request Custom Order</button>
          </div>
        </div>
        <div className="md:w-1/2 md:mt-0 md:pl-40">
          {/*<img alt="hero" className="md:w-128 w-full md:h-96 h-auto rounded-sm" src="/images/pexels-caiquethecreator-25311775.png" />*/}
          <div className='container flex items-center justify-center'>
              <div className='cube mt-8'>
                <div className="face front"><img src="/images/pexels-caiquethecreator-25311775.png" alt='img2'/></div>
                <div className="face back"><img src="/images/crochety-femme.webp" alt='img3'/></div>
                <div className="face right"><img src="/images/crochety femme2.webp" alt='img4'/></div>
                <div className="face left"><img src="/images/crochety femme3.webp" alt='img5'/></div>
                <div className="face top"><img src="/images/crochety homme3.jpg" alt='img5'/></div>
                <div className="face bottom"><img src="/images/crochety femme2.webp" alt='img5'/></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
            