import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Bus, CreditCard, Phone, MapPin, Clock, Shield, Users } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      icon: Bus,
      title: 'Booking & Travel',
      color: 'bg-red-100 text-red-600',
      questions: [
        {
          question: 'How do I book a ticket with 2M Express?',
          answer: 'You can book tickets through our website, mobile app, or by calling our customer service at +233 593 860 860. Simply select your route, choose your travel date and time, provide passenger details, and complete payment.'
        },
        {
          question: 'Can I buy Accra to Kumasi tickets online?',
          answer: 'Yes! You can easily buy Accra to Kumasi tickets online through our website. We offer multiple daily departures with comfortable buses and competitive prices. Book in advance to secure your preferred departure time.'
        },
        {
          question: 'What routes do you cover?',
          answer: 'We cover major routes across Ghana including Accra to Kumasi, Kumasi to Accra, Accra to Obuasi, Obuasi to Accra, Kumasi to Takoradi, Takoradi to Kumasi, and many other intercity routes.'
        },
        {
          question: 'How far in advance can I book?',
          answer: 'You can book tickets up to 30 days in advance. We recommend booking early, especially during peak travel seasons, holidays, and weekends to secure your preferred seats.'
        },
        {
          question: 'Can I change my booking?',
          answer: 'Yes, you can modify your booking up to 2 hours before departure, subject to availability and applicable fees. Changes can be made through our website, app, or by contacting customer service.'
        }
      ]
    },
    {
      icon: CreditCard,
      title: 'Payment & Pricing',
      color: 'bg-green-100 text-green-600',
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept mobile money (MTN, Vodafone, AirtelTigo), bank transfers, credit/debit cards, and cash payments at our terminals. All online payments are processed securely.'
        },
        {
          question: 'Are there any booking fees?',
          answer: 'We strive to keep our prices transparent. There are no hidden booking fees for online reservations. The price displayed is the final amount you pay, including all applicable taxes.'
        },
        {
          question: 'Do you offer student discounts?',
          answer: 'Yes, we offer special discounts for students with valid student ID cards. Please present your student ID when booking or boarding the bus to avail of the discount.'
        },
        {
          question: 'Can I get a refund if I cancel?',
          answer: 'Refunds are available based on our cancellation policy. Full refunds are given for cancellations made 24 hours before departure. Partial refunds may apply for cancellations made closer to departure time.'
        },
        {
          question: 'Do you have group booking discounts?',
          answer: 'Yes, we offer special rates for group bookings of 10 or more passengers. Contact our group booking department for customized pricing and arrangements.'
        }
      ]
    },
    {
      icon: Phone,
      title: 'Customer Support',
      color: 'bg-blue-100 text-blue-600',
      questions: [
        {
          question: 'How can I contact customer support?',
          answer: 'You can reach our customer support team 24/7 by calling +233 593 860 860, emailing support@2mexpress.com.com.gh, or using the live chat feature on our website.'
        },
        {
          question: 'What if I miss my bus?',
          answer: 'If you miss your scheduled bus, contact our customer service immediately. We may be able to accommodate you on the next available departure, subject to seat availability and applicable fees.'
        },
        {
          question: 'How do I track my bus?',
          answer: 'You can track your bus in real-time through our website or mobile app using your booking reference number. We also send SMS updates about your journey status.'
        },
        {
          question: 'What if my bus is delayed?',
          answer: 'We strive to maintain our schedules, but delays can occur due to traffic or weather conditions. We will notify you via SMS and our tracking system if there are any significant delays.'
        },
        {
          question: 'Can I get travel insurance?',
          answer: 'We recommend purchasing travel insurance for your peace of mind. While we maintain comprehensive insurance for our operations, personal travel insurance covers additional scenarios.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Safety & Policies',
      color: 'bg-purple-100 text-purple-600',
      questions: [
        {
          question: 'What safety measures do you have in place?',
          answer: 'Safety is our top priority. All our buses undergo regular maintenance, our drivers are professionally trained and licensed, and we follow strict safety protocols. We also have 24/7 monitoring systems.'
        },
        {
          question: 'What is your luggage policy?',
          answer: 'Each passenger is allowed one carry-on bag and one checked bag (up to 20kg) free of charge. Additional luggage may incur extra fees. Valuable items should be kept as carry-on.'
        },
        {
          question: 'Are your buses air-conditioned?',
          answer: 'Yes, all our buses are fully air-conditioned and equipped with comfortable seating, entertainment systems, and charging ports for your convenience.'
        },
        {
          question: 'What if I have special needs?',
          answer: 'We accommodate passengers with special needs. Please inform us when booking so we can make appropriate arrangements. We have wheelchair-accessible buses available on request.'
        },
        {
          question: 'Can I bring pets on board?',
          answer: 'Unfortunately, we do not allow pets on our buses, except for certified service animals. Please contact us in advance if you need to travel with a service animal.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
              <HelpCircle className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Find answers to common questions about our bus transportation services in Ghana.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-red-600 mb-2">1M+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">Routes Covered</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
            <div className="text-gray-600">On-Time Performance</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-8">
                  <div className={`p-4 rounded-xl mr-4 ${category.color}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div key={faqIndex} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                        >
                          <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-8 text-white mt-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-xl mb-8 opacity-90">
              Our customer support team is here to help you 24/7
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-3" />
                <h4 className="font-semibold mb-2">Call Us</h4>
                <p className="opacity-90">+233 593 860 860</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-3" />
                <h4 className="font-semibold mb-2">Visit Us</h4>
                <p className="opacity-90">M9CC+J5P, Kumasi, Ghana</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-8 w-8 mb-3" />
                <h4 className="font-semibold mb-2">Support Hours</h4>
                <p className="opacity-90">24/7 Available</p>
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-4">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
