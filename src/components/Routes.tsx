import React from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import type { Route } from '../types';

const Routes: React.FC = () => {
  const popularRoutes: Route[] = [
    {
      id: '1',
      from: 'Accra',
      to: 'Kumasi',
      duration: '5 hours',
      price: 110,
      image: 'https://ama.gov.gh/img/fade-slider/accra-4.jpg',
      popular: true
    },
    {
      id: '2',
      from: 'Kumasi',
      to: 'Takoradi',
      duration: '7 hours',
      price: 130,
      image: 'https://wayoeltd.com/wp-content/uploads/2023/08/TMC-1024x731.jpg'
    },
    {
      id: '3',
      from: 'Obuasi',
      to: 'Accra',
      duration: '6 hours',
      price: 120,
      image: 'https://pix10.agoda.net/property/70062549/0/a06990c7eba4fa8a6bcadb928cc77d86.jpeg?ce=2&s=702x392'
    },
    {
      id: '4',
      from: 'Kumasi',
      to: 'Cape Coast',
      duration: '4 hours',
      price: 80,
      image: 'https://i0.wp.com/www.gbcghanaonline.com/wp-content/uploads/2024/09/cape-coast-castle.jpg'
    }
  ];

  const handleRouteSelect = () => {
    // This could scroll to booking form and pre-fill the route
    const bookingSection = document.querySelector('#home');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="routes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#020065', color: 'white' }}>
            Most Traveled Routes
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Most Traveled Routes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most popular destinations with comfortable buses, 
            professional drivers, and unbeatable prices across Ghana. Buy Accra tickets, 
            Kumasi tickets, Accra to Kumasi tickets, Kumasi to Accra tickets, 
            Accra to Obuasi tickets, Obuasi to Accra tickets, Kumasi to Takoradi tickets, 
            and Takoradi to Kumasi tickets at the best rates.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularRoutes.map((route) => (
            <div 
              key={route.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={handleRouteSelect}
            >
              {/* Route Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={route.image}
                  alt={`${route.from} to ${route.to}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Popular Badge */}
                {route.popular && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}

                {/* Route Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span className="font-semibold">{route.from}</span>
                    </div>
                    <ArrowRight className="h-4 w-4" />
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span className="font-semibold">{route.to}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Route Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{route.duration}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Starting from</div>
                    <div className="text-2xl font-bold text-red-600">
                      GH₵ {route.price.toLocaleString()}
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gray-100 hover:bg-red-600 hover:text-white text-gray-700 font-semibold py-3 px-4 rounded-lg transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                  Book This Route
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* View All Routes CTA */}
        <div className="text-center mt-12">
          <button className="text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center space-x-2 hover:opacity-90" style={{ backgroundColor: '#020065' }}>
            <span>View All Routes</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Route Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-blue-600">10+</div>
            <div className="text-gray-600">Active Routes</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-green-600">15</div>
            <div className="text-gray-600">Countries Covered</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-purple-600">200+</div>
            <div className="text-gray-600">Daily Departures</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-red-600">24/7</div>
            <div className="text-gray-600">Booking Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Routes;