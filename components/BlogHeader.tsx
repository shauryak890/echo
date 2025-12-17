"use client";

import { useState } from "react";
import Link from "next/link";

export default function BlogHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/Icon.png" alt="EchoPulse" className="w-8 h-8 rounded-lg object-contain" />
            <span className="text-lg font-bold text-gray-900 hidden sm:block">EchoPulse</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
            <Link href="/#our-work" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Our Work</Link>
            <Link href="/#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQ</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Back to Home</Link>
            <Link href="/blogs" className="px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full transition-colors">
              All Articles
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto max-w-7xl px-4 py-4 space-y-3">
            <Link 
              href="/" 
              className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/#our-work" 
              className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Work
            </Link>
            <Link 
              href="/#faq" 
              className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/blogs" 
              className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              All Articles
            </Link>
            <Link 
              href="/" 
              className="block w-full text-center py-3 mt-2 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Back to Home
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
