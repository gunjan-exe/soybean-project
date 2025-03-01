import React from 'react';
import '../style.css';
const HeroSection = () => {
  return (
    <section
      className="hero"
      // "text-center bg-cover bg-center py-20"
      // style={{
      //   backgroundImage: "url('https://media.istockphoto.com/id/1219163383/photo/green-leaves-for-background-and-wallpaper.jpg?s=1024x1024&w=is&k=20&c=JXuuP8emSSeird50EIpnd7IjQ9yYMgDL0iQ0cSK95OE=')", // Ensure the image path works
      // }}
    >
      {/* Title */}
      <h1 className="hero-title">
      {/* "text-5xl font-extrabold text-white" */}
        FARM<span >AID</span>
        {/* className="text-green-300" */}
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle">
      {/* "text-lg text-gray-200 mt-4 max-w-2xl mx-auto" */}
        We're your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our greenhouse to yours!
      </p>

      {/* Feature Card */}
      <div className="separate-hero">
      <div className="hero-card">
      {/* mt-8 bg-gray-900 bg-opacity-80 p-6 rounded-lg inline-block */}
        <img
          src="https://www.isaaa.org/kc/cropbiotechupdate/files/images/326202474146AM.jpg"
          alt="Soybean Cure"
          // className="w-32 h-32 mx-auto rounded-full"
        />
        <h3>Soybean Cure</h3>
        {/* className="text-xl text-green-300 font-bold mt-4" */}
        <p 
        // className="text-sm text-gray-300"
        >
          We aim to help users detect, prevent, and cure soybean diseases.
        </p>
      </div>

      {/* Button */}
      <div>
      <button className="hero-button">
      {/* "mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600" */}
        Diagnose Now
      </button>
      </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
