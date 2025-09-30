import React from 'react';
import { Cookie, Settings, BarChart, Shield, Eye, Database } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  const cookieTypes = [
    {
      icon: Settings,
      title: 'Essential Cookies',
      color: 'bg-green-100 text-green-600',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: [
        'Authentication cookies to keep you logged in',
        'Security cookies to protect against fraud',
        'Session cookies to maintain your booking session',
        'Load balancing cookies to ensure website stability'
      ]
    },
    {
      icon: BarChart,
      title: 'Analytics Cookies',
      color: 'bg-blue-100 text-blue-600',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: [
        'Google Analytics to track website usage',
        'Page view tracking to improve user experience',
        'Traffic source analysis to optimize marketing',
        'User behavior patterns to enhance website design'
      ]
    },
    {
      icon: Eye,
      title: 'Marketing Cookies',
      color: 'bg-purple-100 text-purple-600',
      description: 'These cookies are used to deliver relevant advertisements and marketing content.',
      examples: [
        'Social media advertising cookies',
        'Retargeting cookies for personalized ads',
        'Email marketing tracking cookies',
        'Campaign performance measurement cookies'
      ]
    },
    {
      icon: Database,
      title: 'Preference Cookies',
      color: 'bg-orange-100 text-orange-600',
      description: 'These cookies remember your choices and preferences to personalize your experience.',
      examples: [
        'Language preference cookies',
        'Theme and display settings cookies',
        'Location preference cookies',
        'Booking history and preferences cookies'
      ]
    }
  ];

  const cookieDetails = [
    {
      title: 'What Are Cookies?',
      content: [
        'Cookies are small text files that are stored on your device when you visit our website.',
        'They help us provide you with a better experience by remembering your preferences and settings.',
        'Cookies can be "session cookies" (temporary) or "persistent cookies" (stored for longer periods).',
        'They contain information that is transferred to your device\'s hard drive.'
      ]
    },
    {
      title: 'How We Use Cookies',
      content: [
        'To ensure our website functions properly and securely.',
        'To remember your preferences and settings for future visits.',
        'To analyze how our website is used and improve its performance.',
        'To provide personalized content and advertisements.',
        'To track the effectiveness of our marketing campaigns.'
      ]
    },
    {
      title: 'Managing Your Cookie Preferences',
      content: [
        'You can control and manage cookies through your browser settings.',
        'Most browsers allow you to refuse cookies or delete existing ones.',
        'You can use our cookie preference center to manage specific cookie types.',
        'Disabling certain cookies may affect the functionality of our website.',
        'You can opt out of marketing cookies while keeping essential cookies enabled.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
              <Cookie className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Learn about how we use cookies to enhance your experience on our website.
          </p>
          <p className="text-sm text-purple-200 mt-4">
            Last updated: January 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Policy Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This Cookie Policy explains how 2M Express Ltd ("we", "us", or "our") uses cookies and similar 
            technologies when you visit our website or use our services. It explains what these technologies 
            are and why we use them, as well as your rights to control our use of them.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By continuing to use our website, you consent to our use of cookies in accordance with this policy. 
            If you do not agree to our use of cookies, you should disable cookies in your browser settings.
          </p>
        </div>

        {/* Cookie Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookieTypes.map((cookie, index) => {
              const IconComponent = cookie.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg mr-4 ${cookie.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{cookie.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{cookie.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Examples:</h4>
                    {cookie.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-gray-600">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cookie Details */}
        <div className="space-y-8">
          {cookieDetails.map((detail, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{detail.title}</h3>
              <div className="space-y-4">
                {detail.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cookie Management */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white mt-12">
          <div className="flex items-center mb-4">
            <Settings className="h-6 w-6 mr-3" />
            <h3 className="text-2xl font-bold">Manage Your Cookie Preferences</h3>
          </div>
          <p className="text-lg mb-6 opacity-90">
            You have control over the cookies we use. You can manage your preferences using the options below:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Browser Settings</h4>
              <p className="opacity-90 text-sm">
                Most browsers allow you to control cookies through their settings. You can usually find these 
                in the "Privacy" or "Security" section of your browser settings.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Cookie Preference Center</h4>
              <p className="opacity-90 text-sm">
                Use our cookie preference center to manage specific types of cookies while keeping essential 
                cookies enabled for website functionality.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Manage Cookie Preferences
            </button>
          </div>
        </div>

        {/* Third-Party Cookies */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Cookies</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Some cookies on our website are set by third-party services that we use to enhance functionality 
            and analyze usage. These include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Google Analytics</h4>
              <p className="text-gray-600 text-sm">
                We use Google Analytics to understand how visitors use our website. 
                <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline ml-1">
                  Learn more about Google's privacy practices
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Social Media</h4>
              <p className="text-gray-600 text-sm">
                Social media platforms may set cookies when you interact with their content on our website.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mt-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Questions About Cookies?</h3>
          <p className="text-yellow-700">
            If you have any questions about our use of cookies, please contact us at 
            <a href="mailto:privacy@2mexpress.com.com.gh" className="text-yellow-800 hover:underline ml-1">
              privacy@2mexpress.com.com.gh
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
