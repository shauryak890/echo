import React, { useState, useEffect } from "react";

const navLinks = [
  { name: "Our Work", href: "#our-work" },
  { name: "How We Work", href: "#how-we-work" },
  { name: "Resources", href: "#resources" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Start transitioning earlier for smoother effect, lower threshold for mobile
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`
          fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-out
          ${isScrolled 
            ? 'top-2 sm:top-6 w-auto' 
            : 'top-4 sm:top-6 w-[calc(100%-1.5rem)] sm:w-full max-w-4xl px-0 sm:px-4'
          }
        `}
      >
        <div className={`
          relative flex items-center transition-all duration-700 ease-out rounded-full
          ${isScrolled 
            ? 'justify-center px-0 sm:px-8 py-1.5 sm:py-3.5 bg-gradient-to-r from-primary to-orange-600 shadow-2xl shadow-primary/40 scale-100 border-transparent ring-1 ring-white/20 backdrop-blur-md' 
            : 'justify-between px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-[#2a2320]/90 via-[#1a1410]/90 to-[#2a2320]/90 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50'
          }
          border
          hover:scale-105
          group
        `}>
          {/* Background Gradient Overlay - Only show when not scrolled */}
          <div className={`
            absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-full transition-opacity duration-700
            ${isScrolled ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}
          `} />
          
          {/* Logo - Fade out when scrolled */}
          <a 
            href="/" 
            className={`
              flex items-center gap-0.5 relative z-10 transition-all duration-700
              ${isScrolled ? 'opacity-0 scale-0 w-0 overflow-hidden hidden' : 'opacity-100 scale-100'}
            `}
          >
            <img src="/Icon.png" alt="EchoPulse" className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg shadow-lg shadow-primary/50 flex-shrink-0 object-contain" />
            <span className="text-base sm:text-xl text-white font-bold whitespace-nowrap">
              EchoPulse
            </span>
          </a>
          
          {/* Desktop Navigation - Fade out when scrolled */}
          <div className={`
            hidden md:flex items-center gap-4 lg:gap-6 relative z-10 transition-all duration-700
            ${isScrolled ? 'opacity-0 scale-0 w-0 overflow-hidden pointer-events-none' : 'opacity-100 scale-100'}
          `}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
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

          {/* Scrolled State - Transform entire navbar into CTA button */}
          <div className={`
            hidden md:flex items-center justify-center transition-all duration-700 whitespace-nowrap
            ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute pointer-events-none'}
          `}>
            <button 
              onClick={() => {
                const bookingHandler = window.bookCalendly;
                if (bookingHandler) bookingHandler();
              }}
              className="flex items-center gap-1.5 sm:gap-2 relative z-10 min-h-[44px] bg-transparent border-none cursor-pointer"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-white font-extrabold text-sm sm:text-base">Book Strategy Call</span>
            </button>
          </div>

          {/* Mobile Menu Button - Hide when scrolled and show CTA */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`
              md:hidden text-white relative z-10 p-2 rounded-lg hover:bg-white/10 transition-all duration-700 min-w-[36px] min-h-[36px] flex items-center justify-center
              ${isScrolled ? 'hidden' : 'opacity-100 scale-100'}
            `}
            aria-label="Toggle menu"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
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

          {/* Mobile CTA when scrolled */}
          <button 
            onClick={() => {
              const bookingHandler = window.bookCalendly;
              if (bookingHandler) bookingHandler();
            }}
            className={`
              md:hidden flex items-center gap-1 transition-all duration-700 bg-transparent border-none cursor-pointer
              ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute pointer-events-none'}
            `}
          >
            <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-white font-bold text-sm whitespace-nowrap">Book Call</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`
        fixed inset-x-3 sm:inset-x-4 top-[4.5rem] sm:top-24 z-40 md:hidden transition-all duration-500 ease-out
        ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
      `}>
        <div className="rounded-2xl bg-gradient-to-br from-[#2a2320]/95 to-[#1a1410]/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 pointer-events-none" />
          
          <div className="relative z-10 p-4 sm:p-6 space-y-2 sm:space-y-4">
            {navLinks.map((link, index) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
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
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;