import React, { useState, useEffect } from 'react';

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Lead Designer",
    description: "With over a decade of experience in crochet, Jane leads our design team with her innovative ideas.",
    image: "/images/crochety-femme.webp"
  },
  {
    name: "John Smith",
    role: "Master Artisan",
    description: "John is our master artisan, ensuring every stitch is perfect and every piece is crafted with care.",
    image: "/images/crochety homme2.jpg",
  },
  {
    name: "Alice Johnson",
    role: "Community Manager",
    description: "Alice manages our community outreach, connecting with local artisans and promoting sustainable practices.",
    image: "/images/crochety femme3.webp",
  },
];

const AboutUs = () => {
  const [currentMember, setCurrentMember] = useState(0);
  const [isStoryVisible, setIsStoryVisible] = useState(false);
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const storyRef = React.useRef(null);
  const teamRef = React.useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMember((currentMember + 1) % teamMembers.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentMember]);

  const handleNext = () => {
 setCurrentMember((currentMember + 1) % teamMembers.length);
  };

  const handlePrev = () => {
 setCurrentMember((currentMember - 1 + teamMembers.length) % teamMembers.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === storyRef.current && entry.isIntersecting) setIsStoryVisible(true);
          if (entry.target === teamRef.current && entry.isIntersecting) setIsTeamVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    if (storyRef.current) observer.observe(storyRef.current);
    if (teamRef.current) observer.observe(teamRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-us-section bg-neutralBrown">
      <div className="container mx-auto flex items-center justfiy-center flex-col">
       {/* About Us text*/}
        <div ref={storyRef} className={`md:px-12 px-4 pt-4 transition-opacity duration-1000 ${isStoryVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primaryGreen my-6">
            Our Story: Weaving Dreams, One Stitch at a Time
          </h2>
            {/*<p className="text-lg text-gray-700 text-center">
              It all began with three friends who shared a deep passion for crocheting. We spent countless hours together, our hands busily crafting beautiful pieces while sharing laughter and stories. Over time, our shared love for this craft evolved from a simple hobby into something much more profound. We realized that our unique creations were not just items, but expressions of our individual creativity and bond. This realization ignited a spark within us to share our passion with the world, and so, our journey began. We carefully developed our brand and meticulously crafted each piece with the same love and care that brought us together. 
            </p>*/}
            <p className='text-lg text-accentGold text-left'>
            Welcome to Crochet Couture, where fashion meets artistry in the heart of Nairobi. Our passion for crochet transcends mere clothing; it’s a celebration of creativity, culture, and craftsmanship. Each piece we create is a unique blend of traditional techniques and contemporary design, tailored for the modern individual who values style and sustainability.
            </p>
            <p className='text-lg text-accentGold text-left pt-4'>
            At Crochet Couture, we believe that clothing should tell a story. Our collections are inspired by the vibrant colors and rich textures of our surroundings, reflecting the spirit of Nairobi and the beauty of its people. We work closely with local artisans, ensuring that every stitch is infused with love and dedication, making our garments not just fashion statements, but wearable art.
            </p>
            <p className='text-lg text-accentGold text-left pt-4'>
            Our mission is to empower individuals through fashion that is not only beautiful but also ethical. We are committed to sustainable practices, using eco-friendly materials and supporting local communities. When you wear Crochet Couture, you’re not just making a style choice; you’re joining a movement towards a more conscious and connected world.
            </p>
            <p className='text-lg text-accentGold text-left pt-4'>
            Join us on this journey of creativity and self-expression. Explore our collections and discover the perfect piece that resonates with your unique style.
            </p>
        </div>
        {/* Carousel */}
        <div ref={teamRef} className={`bg-secondaryBrown mx-4 md:mx-24 w-full md:w-3/4 mt-8 mb-4 h-auto p-6 rounded-lg shadow-lg flex flex-col items-center transition-opacity duration-1000 ${isTeamVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold text-primaryGreen mb-4 md:mb-6">Meet the Team</h2>
          {/* Team Member Carousel Content */}
          <div className="flex items-center justify-around w-full">
          {/* Previous Button */}
          <button onClick={handlePrev} className="text-accentGold text-3xl md:text-5xl focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110">
            &#8249; {/* Left arrow */}
          </button>

          {/* Team Member Info */}
          <div className="text-center md:text-left flex flex-col md:flex-row items-center">
            <img
              src={teamMembers[currentMember].image}
              alt={teamMembers[currentMember].name}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-primaryGreen mb-2">
                {teamMembers[currentMember].name}
              </h3>
              <p className="text-xl text-accentGold mb-3">{teamMembers[currentMember].role}</p>
              <p className="text-lg text-gray-700">{teamMembers[currentMember].description}</p>
            </div>
          </div>
          {/* Next Button */}
          <button onClick={handleNext} className="text-accentGold text-3xl md:text-5xl focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110">&#8250; {/* Right arrow */}</button>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default AboutUs;