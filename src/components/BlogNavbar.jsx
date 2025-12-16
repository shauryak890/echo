import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Work", href: "/#our-work" },
  { name: "How We Work", href: "/#how-we-work" },
  { name: "Blogs", href: "/blogs" },
  { name: "FAQ", href: "/#faq" },
];

const BlogNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      navigate(href.replace("/#", "/") + href.substring(1));
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
      <Link
        to="/"
        className={`
          xl:hidden fixed left-4 top-4 z-50 transition-all duration-700
          ${isScrolled ? "opacity-0 scale-0 pointer-events-none" : "opacity-100 scale-100"}
        `}
      >
        <img src="/Icon.png" alt="EchoPulse" className="w-10 h-10 rounded-lg object-contain" />
      </Link>

      {/* Mobile/Tablet: Hamburger in right corner */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`
          xl:hidden fixed right-4 top-4 z-50 text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-all duration-700 min-w-[44px] min-h-[44px] flex items-center justify-center
          ${isScrolled ? "opacity-0 scale-0 pointer-events-none" : "opacity-100 scale-100"}
        `}
        aria-label="Toggle menu"
      >
        <svg
          className={`w-7 h-7 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`}
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

      
      {/* Desktop Navigation */}
      <nav
        className={`
          hidden xl:block fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-out top-6
        `}
      >
        <div
          className="relative flex items-center justify-start gap-6 lg:gap-8 px-6 py-4 bg-white/95 backdrop-blur-xl border border-gray-200 shadow-lg rounded-full hover:scale-105 group transition-all duration-700 ease-out"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center relative z-10"
          >
            <img src="/Icon.png" alt="EchoPulse" className="w-10 h-10 rounded-lg object-contain" />
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-4 lg:gap-6 relative z-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-600 hover:text-orange-500 transition-colors duration-300 px-1 lg:px-2 relative group/link whitespace-nowrap text-sm lg:text-base inline-block pb-1"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 transition-[width] duration-300 group-hover/link:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
        fixed inset-x-3 top-16 z-40 xl:hidden transition-all duration-500 ease-out
        ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
      `}
      >
        <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-200 shadow-xl overflow-hidden">
          <div className="relative z-10 p-4 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleNavClick(e, link.href);
                }}
                className="block text-gray-600 hover:text-orange-500 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 min-h-[48px] flex items-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-medium">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 xl:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default BlogNavbar;
