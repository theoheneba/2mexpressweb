import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Routes from './components/Routes';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import FAQ from './components/FAQ';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash === 'privacy-policy') {
        setCurrentPage('privacy-policy');
      } else if (hash === 'terms-of-service') {
        setCurrentPage('terms-of-service');
      } else if (hash === 'cookie-policy') {
        setCurrentPage('cookie-policy');
      } else if (hash === 'faq') {
        setCurrentPage('faq');
      } else {
        setCurrentPage('home');
      }
    };

    // Handle initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy-policy':
        return <PrivacyPolicy />;
      case 'terms-of-service':
        return <TermsOfService />;
      case 'cookie-policy':
        return <CookiePolicy />;
      case 'faq':
        return <FAQ />;
      default:
        return (
          <>
            <Hero />
            <Routes />
            <Services />
            <Testimonials />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;