import React from 'react';
import { Shield, Eye, Lock, Database, Users, Mail } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        'Personal Information: When you book tickets or use our services, we collect information such as your name, email address, phone number, and travel preferences.',
        'Payment Information: We securely process payment information through trusted third-party payment processors. We do not store your complete payment details.',
        'Travel Data: We collect information about your travel bookings, routes, dates, and preferences to provide better service.',
        'Device Information: We may collect information about your device, browser, and IP address to improve our website functionality.',
        'Communication Records: We keep records of our communications with you for customer service purposes.'
      ]
    },
    {
      icon: Database,
      title: 'How We Use Your Information',
      content: [
        'Service Delivery: To process bookings, provide transportation services, and manage your account.',
        'Communication: To send booking confirmations, updates, and important service notifications.',
        'Customer Support: To respond to your inquiries and provide technical support.',
        'Service Improvement: To analyze usage patterns and improve our services and website.',
        'Legal Compliance: To comply with applicable laws and regulations.',
        'Marketing: With your consent, to send promotional offers and newsletters about our services.'
      ]
    },
    {
      icon: Lock,
      title: 'Information Security',
      content: [
        'Data Encryption: We use industry-standard encryption to protect your personal information during transmission.',
        'Secure Storage: Your data is stored on secure servers with restricted access.',
        'Regular Audits: We conduct regular security audits to ensure the safety of your information.',
        'Staff Training: Our staff are trained on data protection and privacy best practices.',
        'Third-Party Security: We only work with trusted third-party service providers who meet our security standards.'
      ]
    },
    {
      icon: Users,
      title: 'Information Sharing',
      content: [
        'Service Providers: We may share information with trusted third-party service providers who help us operate our business.',
        'Legal Requirements: We may disclose information when required by law or to protect our rights.',
        'Business Transfers: In case of a merger or acquisition, your information may be transferred to the new entity.',
        'Consent: We will not share your personal information with third parties without your explicit consent.',
        'Anonymized Data: We may share aggregated, anonymized data that cannot identify you personally.'
      ]
    },
    {
      icon: Shield,
      title: 'Your Rights',
      content: [
        'Access: You have the right to request access to your personal information.',
        'Correction: You can request correction of inaccurate or incomplete information.',
        'Deletion: You can request deletion of your personal information, subject to legal requirements.',
        'Portability: You can request a copy of your data in a portable format.',
        'Objection: You can object to certain processing of your personal information.',
        'Withdraw Consent: You can withdraw consent for marketing communications at any time.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-blue-200 mt-4">
            Last updated: January 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At 2M Express Ltd, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
            transportation services, visit our website, or interact with us.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By using our services, you agree to the collection and use of information in accordance with this policy. 
            If you do not agree with our policies and practices, please do not use our services.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-600 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-8 text-white mt-12">
          <div className="flex items-center mb-4">
            <Mail className="h-6 w-6 mr-3" />
            <h3 className="text-2xl font-bold">Questions About This Policy?</h3>
          </div>
          <p className="text-lg mb-6 opacity-90">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="opacity-90">privacy@2mexpress.com.com.gh</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Phone</h4>
              <p className="opacity-90">+233 593 860 860</p>
            </div>
          </div>
        </div>

        {/* Updates */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mt-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Policy Updates</h3>
          <p className="text-yellow-700">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
            Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy 
            Policy periodically for any changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
