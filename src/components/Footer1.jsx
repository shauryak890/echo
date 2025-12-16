import React from "react";

// --- ADDED: SVG Icons for Social Media ---
const IconTwitter = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);
const IconInstagram = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7.177a4.823 4.823 0 100 9.646 4.823 4.823 0 000-9.646zm0 7.853a3.03 3.03 0 110-6.06 3.03 3.03 0 010 6.06zM20.538 6.323a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" clipRule="evenodd" />
  </svg>
);
const IconLinkedIn = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);


const Footer1 = () => (
  <footer className="bg-gradient-to-b from-[#2a2320] to-[#1a1410] text-white/80 border-t border-white/10 relative overflow-hidden">
    {/* Decorative gradient */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
    
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Top section: Newsletter and Links */}
      <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8">
        
        {/* Branding + Social */}
        <div className="lg:col-span-2">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <img src="/Icon.png" alt="EchoPulse" className="w-8 h-8 rounded-lg object-contain" />
              <span className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                EchoPulse
              </span>
            </div>
            <p className="text-white/60 text-sm mb-4">
              Amplify your brand with professional content creation
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/echopulse.media?igsh=bnY4Z2Zza2k4Njgw" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 transition-all hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
              <a 
                href="https://www.linkedin.com/company/echo-pulse-media/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#0077B5] transition-all hover:scale-110 hover:shadow-lg hover:shadow-[#0077B5]/50"
                aria-label="LinkedIn"
              >
                <IconLinkedIn />
              </a>
            </div>
          </div>
        </div>

        {/* Links columns */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-base sm:text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
            <li><a className="text-white/60 hover:text-orange-500 transition-colors flex items-center gap-2 group py-1 min-h-[40px] sm:min-h-0" href="#our-work">
              <span className="w-0 group-hover:w-2 h-px bg-orange-500 transition-all"></span>
              Our Work
            </a></li>
            <li><a className="text-white/60 hover:text-orange-500 transition-colors flex items-center gap-2 group py-1 min-h-[40px] sm:min-h-0" href="#how-we-work">
              <span className="w-0 group-hover:w-2 h-px bg-orange-500 transition-all"></span>
              How We Work
            </a></li>
            <li><a className="text-white/60 hover:text-orange-500 transition-colors flex items-center gap-2 group py-1 min-h-[40px] sm:min-h-0" href="#resources">
              <span className="w-0 group-hover:w-2 h-px bg-orange-500 transition-all"></span>
              Resources
            </a></li>
            <li><a className="text-white/60 hover:text-orange-500 transition-colors flex items-center gap-2 group py-1 min-h-[40px] sm:min-h-0" href="#faq">
              <span className="w-0 group-hover:w-2 h-px bg-orange-500 transition-all"></span>
              FAQ
            </a></li>
            <li><button onClick={() => { const bookingHandler = window.bookCalendly; if (bookingHandler) bookingHandler(); }} className="text-white/60 hover:text-orange-500 transition-colors flex items-center gap-2 group py-1 min-h-[40px] sm:min-h-0 bg-transparent border-none cursor-pointer text-xs sm:text-sm p-0 text-left">
              <span className="w-0 group-hover:w-2 h-px bg-orange-500 transition-all"></span>
              Book a Call
            </button></li>
          </ul>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-base sm:text-lg font-semibold text-white">Contact</h3>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
            <li><a className="text-white/60 hover:text-orange-500 transition-colors flex items-center gap-2 group py-1 min-h-[40px] sm:min-h-0" href="mailto:hello@echopulse.com">
              <span className="w-0 group-hover:w-2 h-px bg-orange-500 transition-all"></span>
              Email Us
            </a></li>
            <li><a className="text-white/60 hover:text-orange-500 transition-colors flex items-center gap-2 group py-1 min-h-[40px] sm:min-h-0" href="#faq">
              <span className="w-0 group-hover:w-2 h-px bg-orange-500 transition-all"></span>
              Support
            </a></li>
            <li><a className="text-white/60 hover:text-orange-500 transition-colors flex items-center gap-2 group py-1 min-h-[40px] sm:min-h-0" href="/terms">
              <span className="w-0 group-hover:w-2 h-px bg-orange-500 transition-all"></span>
              Terms of Service
            </a></li>
            <li><a className="text-white/60 hover:text-orange-500 transition-colors flex items-center gap-2 group py-1 min-h-[40px] sm:min-h-0" href="/privacy">
              <span className="w-0 group-hover:w-2 h-px bg-orange-500 transition-all"></span>
              Privacy Policy
            </a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6 flex justify-center items-center">
        <p className="text-xs sm:text-sm text-white/60 text-center">
          {new Date().getFullYear()} EchoPulse. All rights reserved.
        </p>
      </div>
      
      {/* Legal links */}
      <div className="py-6 border-t border-white/10 text-center">
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm px-4">
          <a href="/terms" className="text-white/60 hover:text-orange-500 transition-colors min-h-[44px] flex items-center">Terms of Service</a>
          <span className="text-white/20 flex items-center">•</span>
          <a href="/privacy" className="text-white/60 hover:text-orange-500 transition-colors min-h-[44px] flex items-center">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer1;