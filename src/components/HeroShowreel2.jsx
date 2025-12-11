import React, { useState, useRef } from "react";
import century21Logo from '../logos/century 21.png';
import cirRealtyLogo from '../logos/CIR-REALTY_Logo_BLACK.jpg';
import expRealtyLogo from '../logos/exp realty.png';
import marcusMillichapLogo from '../logos/marcus and millichap.png';
import qualicoLogo from '../logos/qualico.jpg';
import remaxLogo from '../logos/remax.jpg';

const HeroShowreel2 = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setHasEnded(false);
    }
  };

  const handleVideoEnd = () => {
    setHasEnded(true);
  };

  return (
  <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-32 sm:px-6 sm:py-40 lg:px-8 overflow-hidden">
    {/* Animated gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/10 animate-pulse-slow" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,125,43,0.1),transparent_50%)]" />
    
    <div className="grid w-full max-w-7xl grid-cols-1 gap-8 sm:gap-12 lg:gap-20 lg:grid-cols-2 lg:items-center relative z-10">
      <div className="flex flex-col items-center lg:items-start gap-6 sm:gap-8 text-center lg:text-left w-full">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter text-white leading-[1.1] w-full pb-3">
          <span className="block">Make content that</span>
          <span className="block bg-gradient-to-r from-primary via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient mt-2 sm:mt-2 pb-2">
            actually converts
          </span>
        </h1>
        
        <p className="max-w-lg text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed mx-auto lg:mx-0 px-2 sm:px-0 -mt-9">
          We specialize in <span className="text-primary font-semibold">short-form content</span>, 
          creator coaching, and strategy to help you dominate social media.
        </p>
        
        <div className="flex justify-center w-full px-2 sm:px-0 mt-2">
          <a 
            href="#our-work"
            className="group relative rounded-xl bg-primary px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold text-white hover:text-white visited:text-white shadow-2xl shadow-primary/50 transition-all hover:scale-105 hover:shadow-primary/70 overflow-hidden min-h-[48px] flex items-center justify-center focus:outline-white focus-visible:outline-white focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <span className="relative z-10 text-white">View Our Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
      
      <div className="parallax-container w-full relative mt-16 sm:mt-20 lg:mt-0">
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-3xl blur-3xl opacity-50 animate-pulse-slow" />
        <div className="aspect-video w-full overflow-hidden rounded-xl sm:rounded-2xl glass-card glow parallax relative border border-white/10 shadow-2xl">
          <video 
            ref={videoRef}
            src="https://res.cloudinary.com/du6yx2h01/video/upload/f_mp4,q_auto/Main_3_jyv72n.mp4"
            poster="https://res.cloudinary.com/du6yx2h01/video/upload/so_0,f_jpg,q_auto,w_1200/Main_3_jyv72n.jpg"
            className="h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
          />
          
          {/* Video Controls */}
          <div className="absolute bottom-3 right-3 flex gap-2">
            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
          </div>

          {/* Replay Overlay */}
          {hasEnded && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
              <button
                onClick={handleReplay}
                className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Replay
              </button>
            </div>
          )}
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
                  className="group relative rounded-xl sm:rounded-2xl border border-white/10 bg-white backdrop-blur-sm p-3 sm:p-4 flex-shrink-0"
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
};

export default HeroShowreel2;
