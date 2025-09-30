import React from 'react';
import { Bus, Package, Users, Shield, Award, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Bus,
      title: 'Reliable Public Transport',
      description: 'Providing safe and reliable transport solutions for our passengers with comfortable buses and timely services.',
      color: 'bg-red-50 text-red-600',
      link: '#'
    },
    {
      icon: Package,
      title: 'Efficient Parcel Delivery',
      description: 'Our parcel services ensure fast, secure, and efficient delivery of packages to your desired destinations.',
      color: 'bg-green-50 text-green-600',
      link: '#'
    },
    {
      icon: Users,
      title: 'Responsible Drivers & Staff',
      description: 'Our well-trained and professional drivers and staff are committed to ensuring your safety and satisfaction.',
      color: 'bg-blue-50 text-blue-600',
      link: '#'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Safety is our top priority, ensuring that every passenger and parcel arrives securely at its destination.',
      color: 'bg-purple-50 text-purple-600',
      link: '#'
    },
    {
      icon: Award,
      title: 'Exceptional Customer Service',
      description: 'We prioritize excellent customer support, making sure your journey and experience with us is smooth and hassle-free.',
      color: 'bg-orange-50 text-orange-600',
      link: '#'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Our customer support team is available round the clock to assist you with any queries or concerns.',
      color: 'bg-teal-50 text-teal-600',
      link: '#'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We take pride in delivering top-notch public transport and parcel services with 
            responsible staff and excellent customer support. Book Accra tickets, Kumasi tickets, 
            Accra to Kumasi tickets, Kumasi to Accra tickets, Accra to Obuasi tickets, 
            Obuasi to Accra tickets, Kumasi to Takoradi tickets, and Takoradi to Kumasi tickets 
            with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <button className="text-red-600 font-medium hover:text-red-700 transition-colors flex items-center group">
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Travel with Us?</h3>
            <p className="text-xl mb-8 opacity-90">
              Experience comfort, safety, and reliability on every journey
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Your Trip Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;