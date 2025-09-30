import React from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle, Clock, Phone } from 'lucide-react';

const TermsOfService: React.FC = () => {
  const sections = [
    {
      icon: CheckCircle,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using 2M Express services, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.',
        'These terms apply to all visitors, users, and others who access or use the service.',
        'We reserve the right to update, change or replace any part of these Terms of Service by posting updates and changes to our website.',
        'Your continued use of or access to our website following the posting of any changes constitutes acceptance of those changes.'
      ]
    },
    {
      icon: Scale,
      title: 'Service Description',
      content: [
        '2M Express provides bus transportation services across Ghana, including routes between major cities.',
        'We offer passenger transport, parcel delivery, and related logistics services.',
        'All services are subject to availability and may be modified or discontinued at our discretion.',
        'We reserve the right to refuse service to anyone for any reason at any time.',
        'Service schedules and routes may be subject to change due to operational requirements or circumstances beyond our control.'
      ]
    },
    {
      icon: Clock,
      title: 'Booking and Payment Terms',
      content: [
        'All bookings are subject to availability and confirmation.',
        'Payment must be made in full at the time of booking unless otherwise specified.',
        'We accept various payment methods including mobile money, bank transfers, and cash payments.',
        'Cancellation policies vary by service type and timing. Please refer to specific cancellation terms.',
        'Refunds, when applicable, will be processed according to our refund policy.',
        'Prices are subject to change without notice, but confirmed bookings will be honored at the booked price.'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Passenger Responsibilities',
      content: [
        'Passengers must arrive at the designated departure point at least 15 minutes before scheduled departure.',
        'Valid identification may be required for travel.',
        'Passengers are responsible for their personal belongings and luggage.',
        'Disruptive behavior that affects other passengers or crew will not be tolerated.',
        'Passengers must comply with all safety instructions and regulations.',
        'Children under 12 must be accompanied by an adult.'
      ]
    },
    {
      icon: Scale,
      title: 'Limitation of Liability',
      content: [
        '2M Express shall not be liable for any indirect, incidental, special, consequential, or punitive damages.',
        'Our liability is limited to the amount paid for the specific service in question.',
        'We are not responsible for delays caused by weather, traffic, road conditions, or other circumstances beyond our control.',
        'Passengers travel at their own risk and should ensure they have appropriate travel insurance.',
        'We are not liable for loss or damage to personal belongings.',
        'Force majeure events may result in service suspension without liability.'
      ]
    },
    {
      icon: FileText,
      title: 'Prohibited Activities',
      content: [
        'Using our services for any unlawful purpose or to solicit others to perform unlawful acts.',
        'Violating any international, federal, provincial, or state regulations, rules, laws, or local ordinances.',
        'Transmitting or procuring the sending of any advertising or promotional material without our prior written consent.',
        'Impersonating another person or entity or otherwise misrepresenting your identity.',
        'Interfering with or disrupting our services or servers.',
        'Attempting to gain unauthorized access to any part of our services.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
              <FileText className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Please read these terms carefully before using our transportation services.
          </p>
          <p className="text-sm text-red-200 mt-4">
            Last updated: January 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            These Terms of Service ("Terms") govern your use of 2M Express Ltd's transportation services, 
            website, and related services (collectively, the "Service"). By accessing or using our Service, 
            you agree to be bound by these Terms.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you disagree with any part of these terms, then you may not access the Service. 
            These Terms apply to all visitors, users, and others who access or use the Service.
          </p>
        </div>

        {/* Terms Sections */}
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

        {/* Additional Terms */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Terms</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Governing Law</h4>
              <p className="text-gray-600">
                These Terms shall be interpreted and governed by the laws of Ghana, without regard to its conflict of law provisions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Dispute Resolution</h4>
              <p className="text-gray-600">
                Any disputes arising from these Terms or our services shall be resolved through arbitration in accordance with Ghanaian law.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Severability</h4>
              <p className="text-gray-600">
                If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Entire Agreement</h4>
              <p className="text-gray-600">
                These Terms constitute the entire agreement between you and 2M Express regarding the use of our services.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-8 text-white mt-12">
          <div className="flex items-center mb-4">
            <Phone className="h-6 w-6 mr-3" />
            <h3 className="text-2xl font-bold">Questions About These Terms?</h3>
          </div>
          <p className="text-lg mb-6 opacity-90">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="opacity-90">legal@2mexpress.com.com.gh</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Phone</h4>
              <p className="opacity-90">+233 593 860 860</p>
            </div>
          </div>
        </div>

        {/* Updates */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Terms Updates</h3>
          <p className="text-blue-700">
            We reserve the right to modify these Terms at any time. We will notify users of any material changes 
            by posting the new Terms on this page and updating the "Last updated" date. Your continued use of 
            our services after any such changes constitutes your acceptance of the new Terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
