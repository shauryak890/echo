import React from "react";
import century21Logo from '../logos/century 21.png';
import cirRealtyLogo from '../logos/CIR-REALTY_Logo_BLACK.jpg';
import expRealtyLogo from '../logos/exp realty.png';
import marcusMillichapLogo from '../logos/marcus and millichap.png';
import qualicoLogo from '../logos/qualico.jpg';
import remaxLogo from '../logos/remax.jpg';

const HeroShowreel2 = () => (
  <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-32 sm:px-6 sm:py-40 lg:px-8 overflow-hidden">
    {/* Animated gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/10 animate-pulse-slow" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,125,43,0.1),transparent_50%)]" />
    
    <div className="grid w-full max-w-7xl grid-cols-1 gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2 lg:items-start relative z-10">
      <div className="flex flex-col items-center lg:items-start gap-6 sm:gap-8 text-center lg:text-left w-full lg:pt-0">
        <div className="w-full flex justify-center lg:justify-start">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-primary border border-primary/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="whitespace-nowrap">Premium Content Production</span>
          </span>
        </div>
        
        <h1 className="text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter text-white leading-[1.1] w-full mb-2 sm:mb-0">
          Make content that 
          <span className="block bg-gradient-to-r from-primary via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient mt-2 sm:mt-2">
            actually converts
          </span>
        </h1>
        
        <p className="max-w-lg text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed mx-auto lg:mx-0 px-2 sm:px-0 mt-4">
          We specialize in <span className="text-primary font-semibold">short-form content</span>, 
          creator coaching, and strategy to help you dominate social media.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0 mt-2">
          <a 
            href="#our-work"
            className="group relative rounded-xl bg-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white hover:text-white visited:text-white shadow-2xl shadow-primary/50 transition-all hover:scale-105 hover:shadow-primary/70 overflow-hidden w-full sm:w-auto min-h-[48px] flex items-center justify-center focus:outline-white focus-visible:outline-white focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <span className="relative z-10 text-white">View Our Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <button className="group rounded-xl border-2 border-white/20 bg-white/5 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40 w-full sm:w-auto min-h-[48px] focus:outline-white focus-visible:outline-white focus-visible:outline-2 focus-visible:outline-offset-2">
            Watch Showreel →
          </button>
        </div>
      </div>
      
      <div className="parallax-container w-full relative mt-16 sm:mt-20 lg:mt-0 lg:pt-24">
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-3xl blur-3xl opacity-50 animate-pulse-slow" />
        <div className="aspect-video w-full overflow-hidden rounded-xl sm:rounded-2xl glass-card glow parallax relative border border-white/10 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=675&fit=crop"
            alt="Content Creation Studio"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6">
            <div className="flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs sm:text-sm font-semibold text-white truncate">Watch Our Latest Work</div>
                <div className="text-[10px] sm:text-xs text-white/60">2.5M views in 7 days</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats - Below Showreel */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full mt-6 sm:mt-8">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-primary">500+</div>
            <div className="text-xs sm:text-sm text-white/60 mt-1">Videos Created</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-primary">10M+</div>
            <div className="text-xs sm:text-sm text-white/60 mt-1">Total Views</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-primary">98%</div>
            <div className="text-xs sm:text-sm text-white/60 mt-1">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mt-16 sm:mt-20 lg:mt-24 w-full relative z-10">
      <h3 className="mb-6 sm:mb-8 text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-white/40 px-4 sm:px-0">
        Trusted by Leading Brands
      </h3>
      <div className="relative overflow-hidden py-4">
        <style>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll-left 40s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="flex animate-scroll" style={{ width: 'max-content' }}>
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-12 sm:gap-16 lg:gap-20 pr-12 sm:pr-16 lg:pr-20">
              {[
                { name: 'Century 21', logo: century21Logo },
                { name: 'CIR Realty', logo: cirRealtyLogo },
                { name: 'EXP Realty', logo: expRealtyLogo },
                { name: 'Marcus & Millichap', logo: marcusMillichapLogo },
                { name: 'Qualico', logo: qualicoLogo },
                { name: 'RE/MAX', logo: remaxLogo }
              ].map((company, index) => (
                <div 
                  key={`${setIndex}-${index}`} 
                  className="group relative rounded-xl sm:rounded-2xl border border-white/10 bg-white backdrop-blur-sm p-3 sm:p-4 transition-all hover:bg-white/95 hover:border-primary/50 hover:scale-105 cursor-pointer flex-shrink-0"
                  style={{ width: '200px', height: '120px' }}
                >
                  <div className="flex items-center justify-center h-full w-full">
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="object-contain"
                      style={{ maxHeight: '95%', maxWidth: '95%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </main>
);

export default HeroShowreel2;
