import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Our Work", href: "#our-work" },
  { name: "How We Work", href: "#how-we-work" },
  { name: "Blogs", href: "/blogs" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile/Tablet: Logo in left corner */}
      <a 
        href="/" 
        className={`
          xl:hidden fixed left-4 top-4 z-50 transition-all duration-700
          ${isScrolled ? 'opacity-0 scale-0 pointer-events-none' : 'opacity-100 scale-100'}
        `}
      >
        <img src="/Icon.png" alt="EchoPulse" className="w-10 h-10 rounded-lg object-contain" />
      </a>

      {/* Mobile/Tablet: Hamburger in right corner */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`
          xl:hidden fixed right-4 top-4 z-50 text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-700 min-w-[44px] min-h-[44px] flex items-center justify-center
          ${isScrolled ? 'opacity-0 scale-0 pointer-events-none' : 'opacity-100 scale-100'}
        `}
        aria-label="Toggle menu"
      >
        <svg 
          className={`w-7 h-7 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isMobileMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16m-16 6h16" />
          )}
        </svg>
      </button>

      {/* Mobile: Scrolled CTA */}
      <div 
        className={`
          xl:hidden fixed left-1/2 -translate-x-1/2 top-2 z-50 transition-all duration-700
          ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}
        `}
      >
        <button 
          onClick={() => {
            const bookingHandler = window.bookCalendly;
            if (bookingHandler) bookingHandler();
          }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-orange-600 rounded-full shadow-2xl shadow-primary/40 ring-1 ring-white/20"
        >
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-white font-bold text-lg">Book Call</span>
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav 
        className={`
          hidden xl:block fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-out
          ${isScrolled ? 'top-6' : 'top-6'}
        `}
      >
        <div className={`
          relative flex items-center transition-all duration-700 ease-out rounded-full
          ${isScrolled 
            ? 'justify-center px-8 py-3.5 bg-gradient-to-r from-primary to-orange-600 shadow-2xl shadow-primary/40 border-transparent ring-1 ring-white/20 backdrop-blur-md' 
            : 'justify-start gap-6 lg:gap-8 px-6 py-4 bg-gradient-to-r from-[#2a2320]/90 via-[#1a1410]/90 to-[#2a2320]/90 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50'
          }
          border hover:scale-105 group
        `}>
          {/* Logo */}
          <a 
            href="/" 
            className={`
              flex items-center relative z-10 transition-all duration-700
              ${isScrolled ? 'opacity-0 scale-0 w-0 overflow-hidden' : 'opacity-100 scale-100'}
            `}
          >
            <img src="/Icon.png" alt="EchoPulse" className="w-10 h-10 rounded-lg object-contain" />
          </a>
          
          {/* Nav Links */}
          <div className={`
            flex items-center gap-4 lg:gap-6 relative z-10 transition-all duration-700
            ${isScrolled ? 'opacity-0 scale-0 w-0 overflow-hidden pointer-events-none' : 'opacity-100 scale-100'}
          `}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white/70 hover:text-white transition-colors duration-300 px-1 lg:px-2 relative group/link whitespace-nowrap text-sm lg:text-base inline-block pb-1"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-orange-400 transition-[width] duration-300 group-hover/link:w-full" />
              </a>
            ))}
            <button 
              onClick={() => {
                const bookingHandler = window.bookCalendly;
                if (bookingHandler) bookingHandler();
              }}
              className="group relative px-4 lg:px-6 py-2 lg:py-2.5 bg-gradient-to-r from-primary to-orange-600 hover:from-orange-600 hover:to-primary text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-primary/50 hover:shadow-primary/70 hover:scale-105 overflow-hidden whitespace-nowrap text-sm lg:text-base"
            >
              <span className="relative z-10">Book a Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Scrolled CTA */}
          <div className={`
            flex items-center justify-center transition-all duration-700 whitespace-nowrap
            ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute pointer-events-none'}
          `}>
            <button 
              onClick={() => {
                const bookingHandler = window.bookCalendly;
                if (bookingHandler) bookingHandler();
              }}
              className="flex items-center gap-2 relative z-10 min-h-[44px] bg-transparent border-none cursor-pointer"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-white font-extrabold text-base">Book Strategy Call</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`
        fixed inset-x-3 top-16 z-40 xl:hidden transition-all duration-500 ease-out
        ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
      `}>
        <div className="rounded-2xl bg-gradient-to-br from-[#2a2320]/95 to-[#1a1410]/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 pointer-events-none" />
          
          <div className="relative z-10 p-4 space-y-2">
            {navLinks.map((link, index) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleNavClick(e, link.href);
                }}
                className="block text-white/70 hover:text-white transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 min-h-[48px] flex items-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
            
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                const bookingHandler = window.bookCalendly;
                if (bookingHandler) bookingHandler();
              }}
              className="block w-full text-center px-6 py-4 bg-gradient-to-r from-primary to-orange-600 text-white font-bold rounded-xl shadow-lg shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transition-all duration-300 mt-4 min-h-[52px]"
            >
              Book Strategy Call
            </button>
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 xl:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;