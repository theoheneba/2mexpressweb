import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Joseph Obeng',
      role: 'Frequent Traveler',
      rating: 5,
      text: 'Booking Accra to Kumasi tickets with 2M Express has been so easy! The buses are always on time, and the service is top-notch. I travel with them regularly and have never been disappointed.',
      image: '/logo.png'
    },
    {
      name: 'Mark Tawiah',
      role: 'Business Owner',
      text: 'I\'ve been using their Kumasi to Takoradi ticket service for months, and it\'s always fast and reliable. My packages reach their destinations on time and in perfect condition. Highly recommended!',
      rating: 5,
      image: '/logo.png'
    },
    {
      name: 'Fred Antwi',
      role: 'Satisfied Customer',
      text: 'The customer service team is always ready to assist. They helped me quickly resolve an issue with my Obuasi to Accra ticket booking, and I really appreciated their professionalism and promptness.',
      rating: 5,
      image: '/logo.png'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Are Saying</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We take pride in delivering great experiences with our bus booking and parcel delivery services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-red-200">
                <Quote className="h-8 w-8" />
              </div>
              
              {/* Rating Stars */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>
              
              {/* Customer Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-red-600">1M+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-blue-600">10+</div>
            <div className="text-gray-600">Routes Covered</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-green-600">99%</div>
            <div className="text-gray-600">On-Time Performance</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-purple-600">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;