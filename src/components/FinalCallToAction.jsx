import React from "react";

// --- Rocket icon ---
const RocketIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
  </svg>
);

// --- Check icon ---
const CheckIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const FinalCallToAction = ({ onBookCall }) => {
  const handleBookCall = () => {
    if (onBookCall) {
      onBookCall();
      // Scroll to booking section after a brief delay to allow it to render
      setTimeout(() => {
        document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/10 animate-gradient"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#3a322f] to-[#2a2320] rounded-3xl p-8 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full mb-6 border border-orange-500/20 animate-slide-up">
              <RocketIcon />
              <span className="text-orange-500 font-semibold text-sm">START YOUR JOURNEY</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Ready to build <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">authority</span>?
            </h2>
            
            {/* Description */}
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Let's turn your expertise into influence. We help you create compelling
              content that establishes you as a thought leader in your industry.
            </p>
            
            {/* Benefits list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-3 rounded-lg border border-white/10">
                <CheckIcon />
                <span className="text-white/80 text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-3 rounded-lg border border-white/10">
                <CheckIcon />
                <span className="text-white/80 text-sm">No Long-term Contracts</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-3 rounded-lg border border-white/10">
                <CheckIcon />
                <span className="text-white/80 text-sm">Money-back Guarantee</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={handleBookCall}
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:shadow-orange-500/50 hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="relative z-10">Get Started Now</span>
                <RocketIcon />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <a
                href="#our-work"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-8 py-4 text-base font-bold text-white border-2 border-white/20 hover:bg-white/20 transition-all"
              >
                <span>View Our Work</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            {/* Social proof */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-8 text-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div>
                <div className="text-2xl font-bold text-orange-500">500+</div>
                <div className="text-sm text-white/60">Projects Completed</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/20"></div>
              <div>
                <div className="text-2xl font-bold text-orange-500">98%</div>
                <div className="text-sm text-white/60">Client Satisfaction</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/20"></div>
              <div>
                <div className="text-2xl font-bold text-orange-500">10M+</div>
                <div className="text-sm text-white/60">Content Views</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCallToAction;