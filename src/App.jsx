import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import BlogsPage from './pages/BlogsPage';
import BlogPost from './pages/BlogPost';


// Global mouse glow effect component
function GlobalMouseGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(247, 125, 43, 0.08), transparent 80%)`,
      }}
    />
  );
}

// Home Page Component
function HomePage() {
  const [showBooking, setShowBooking] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleOpenCalendly = () => {
      setShowBooking(true);
      setTimeout(() => {
        document
          .getElementById('book-call')
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    };

    window.addEventListener('openCalendly', handleOpenCalendly);

    return () => {
      window.removeEventListener('openCalendly', handleOpenCalendly);
    };
  }, []);

  // Handle hash scroll after navigation
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <HeroShowreel2 />
      <CaseStudiesGrid />
      <ProcessHowWeWork />
      {/* <FreeResourcesHub1 /> */}
      {showBooking && <Booking />}
      <FAQ2 />
      <FinalCallToAction
        onBookCall={() => {
          setShowBooking(true);
          setTimeout(() => {
            document
              .getElementById('book-call')
              ?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      />
    </>
  );
}

function App() {
  // Global booking setup
  useEffect(() => {
    window.bookCalendly = () => {
      const event = new CustomEvent('openCalendly');
      window.dispatchEvent(event);
    };
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blogs');

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen relative overflow-x-hidden">
      {/* Global mouse glow effect */}
      <GlobalMouseGlow />

      {/* Bottom blur effect - only on non-blog pages */}
      {!isBlogPage && (
        <GradualBlur
          preset="page-footer"
          strength={0.5}
          height="4rem"
          style={{ bottom: '200px' }}
        />
      )}

      {/* Navbar - only on non-blog pages (blog pages have their own) */}
      {!isBlogPage && <Navbar />}

      <main className="w-full max-w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
        </Routes>
      </main>

      {/* Footer - only on non-blog pages (blog pages have their own) */}
      {!isBlogPage && <Footer1 />}
    </div>
  );
}

export default App;
