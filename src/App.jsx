import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroShowreel2 from './components/HeroShowreel2';
import CaseStudiesGrid from './components/CaseStudiesGrid';
import ProcessHowWeWork from './components/ProcessHowWeWork';
import FreeResourcesHub1 from './components/FreeResourcesHub1';
import FAQ2 from './components/FAQ2';
import Booking from './components/Booking';
import FinalCallToAction from './components/FinalCallToAction';
import Footer1 from './components/Footer1';
import GradualBlur from './components/GradualBlur';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Home Page Component
function HomePage() {
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const handleOpenCalendly = () => {
      setShowBooking(true);
      setTimeout(() => {
        document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    };

    // Listen for the custom event
    window.addEventListener('openCalendly', handleOpenCalendly);
    
    // Cleanup
    return () => {
      window.removeEventListener('openCalendly', handleOpenCalendly);
    };
  }, []);

  return (
    <>
      <HeroShowreel2 />
      <CaseStudiesGrid />
      <ProcessHowWeWork />
      <FreeResourcesHub1 />
      {showBooking && <Booking />}
      <FAQ2 />
      <FinalCallToAction onBookCall={() => {
        setShowBooking(true);
        setTimeout(() => {
          document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }} />
    </>
  );
}

function App() {
  useEffect(() => {
    // Set up global booking function at app level
    window.bookCalendly = () => {
      const event = new CustomEvent('openCalendly');
      window.dispatchEvent(event);
    };
  }, []);

  return (
    <Router>
      <div className="bg-background-light dark:bg-background-dark min-h-screen relative overflow-x-hidden">
        {/* The header blur has been removed */}
        {/* The footer blur is now barely visible */}
        <GradualBlur preset="page-footer" strength={0.5} height="4rem" />

        <Navbar />
        <main className="w-full max-w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer1 />
      </div>
    </Router>
  );
}

export default App;

