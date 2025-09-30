import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen" style={{ backgroundColor: 'rgba(2, 0, 101, 0.3)' }}>
      {/* Background Image */}
      <div className="absolute inset-0 bg-black/10">
        <img 
          src="https://cms.forbesafrica.com/wp-content/uploads/2024/08/LEADING-IMAGE-COVER-GHANA-scaled.jpg" 
          alt="Beautiful Ghana landscape representing our travel destinations" 
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex items-center justify-center min-h-[80vh]">
          {/* Centered Content */}
          <div className="text-white text-center space-y-8 max-w-4xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-sm font-medium">Your Comfort Our Priority</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Travel, Enjoy &
                <span className="text-red-400"> Live</span>
                <br />
                a New Life
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                We are an outstanding brand in the transport & logistics sphere with 
                remarkable visibility across Ghana, providing safe, 
                comfortable, and efficient travel solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button className="text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg hover:opacity-90" style={{ backgroundColor: '#020065' }}>
                Book Your Trip
              </button>
              <button className="border-2 border-white text-white hover:bg-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg hover:text-[#020065]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;