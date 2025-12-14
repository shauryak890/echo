import React from "react";
import { InlineWidget } from "react-calendly";

const Booking = () => {
  return (
    <section id="book-call" className="min-h-screen flex items-center justify-center px-4 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      
      <div className="w-full max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 border border-orange-500/20">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span className="text-orange-500 font-semibold text-xs sm:text-sm">BOOK A CALL</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-4 sm:mb-6">
            Let's create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">amazing</span> together.
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Schedule a free strategy call to discuss how we can help you dominate social media with high-converting content.
          </p>
        </div>

        {/* Calendly Inline Widget */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 sm:p-6 lg:p-8 shadow-2xl">
          <InlineWidget
            url="https://calendly.com/echopulsemedia/new-meeting"
            styles={{
              height: '700px',
              minWidth: '100%'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Booking;