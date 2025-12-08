import React, { useState } from "react";

// --- Checkmark icon component ---
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Star icon for ratings ---
const StarIcon = () => (
  <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// --- Microphone icon ---
const MicrophoneIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
  </svg>
);

// --- Enhanced pricing packages data ---
const packagesData = {
  "Clips only": [
    {
      name: "Essential",
      price: "99",
      description: "Perfect for creating social media clips from your episodes",
      features: [
        "Up to 5 short clips (30-60s)",
        "Basic audio clean-up",
        "Noise reduction",
        "Level balancing",
        "Vertical & horizontal formats",
        "48-hour turnaround"
      ],
      isPopular: false,
      bestFor: "Social Media",
    },
    {
      name: "Pro",
      price: "199",
      description: "Most chosen for engaging social content",
      features: [
        "Up to 10 short clips (30-90s)",
        "Everything in Essential, plus:",
        "Advanced editing & cuts",
        "Animated subtitles",
        "Custom graphics overlay",
        "Intro/outro integration",
        "24-hour turnaround"
      ],
      isPopular: true,
      bestFor: "Growing Channels",
    },
    {
      name: "Elite",
      price: "349",
      description: "Premium clips for maximum engagement",
      features: [
        "Up to 20 short clips (30-120s)",
        "Everything in Pro, plus:",
        "Premium editing & effects",
        "Custom thumbnails",
        "Multi-platform optimization",
        "Content strategy advice",
        "Same-day turnaround",
        "Priority support"
      ],
      isPopular: false,
      bestFor: "Content Creators",
    },
  ],
  "Full episode": [
    {
      name: "Essential",
      price: "199",
      description: "Perfect for beginners starting their podcast journey",
      features: [
        "Basic audio clean-up",
        "Noise reduction & echo removal",
        "Level balancing",
        "ID3 tagging & metadata",
        "48-hour turnaround",
        "Up to 60 minutes"
      ],
      isPopular: false,
      bestFor: "New Podcasters",
    },
    {
      name: "Pro",
      price: "399",
      description: "Most chosen by serious podcasters who want quality",
      features: [
        "Everything in Essential, plus:",
        "Advanced editing & cuts",
        "Crossfades and transitions",
        "Intro/outro integration",
        "Basic mixing & EQ",
        "24-hour turnaround",
        "Up to 90 minutes",
        "Show notes assistance"
      ],
      isPopular: true,
      bestFor: "Growing Shows",
    },
    {
      name: "Elite",
      price: "599",
      description: "Premium production for established podcast brands",
      features: [
        "Everything in Pro, plus:",
        "Premium editing & refinement",
        "Advanced mixing & mastering",
        "Sound design & effects",
        "Full production support",
        "Same-day turnaround",
        "Unlimited duration",
        "Dedicated producer",
        "Monthly strategy call"
      ],
      isPopular: false,
      bestFor: "Professional Brands",
    },
  ]
};

// --- Testimonials data ---
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Tech Talk Podcast",
    content: "The Pro package transformed our audio quality. Our listeners noticed immediately!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "Mike Chen",
    role: "Business Insights",
    content: "Elite package is worth every penny. The dedicated producer understands our brand perfectly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Minds",
    content: "Started with Essential, grew to Pro. The scalability is perfect for growing podcasts.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  }
];

const PodcastEditingPackages1 = () => {
  const [activePlan, setActivePlan] = useState("Full episode");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="pt-24 pb-24 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Enhanced Hero Section */}
        <div className="relative bg-[#201a18] rounded-3xl px-8 py-16 md:p-20 overflow-hidden mb-24 text-center md:text-left border border-white/10 shadow-2xl group">
          <div className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-700" style={{backgroundImage: "url('https://images.unsplash.com/photo-1616587993988-53cdef62f283?auto=format&fit=crop&w=1400&q=80')"}}></div>
          
          {/* Floating microphone icon */}
          <div className="absolute top-10 right-10 text-orange-500/20 animate-float">
            <MicrophoneIcon />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full mb-6 border border-orange-500/20">
              <MicrophoneIcon />
              <span className="text-orange-500 font-semibold text-sm">PROFESSIONAL PODCAST EDITING</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 animate-slide-up">
              Podcast Editing<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">That Sounds Pro</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Elevate your podcast with professional editing. We offer comprehensive services from basic cleanup to full production, ensuring your content sounds its best.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <button 
                onClick={() => {
                  const ourWorkSection = document.querySelector('#our-work');
                  if (ourWorkSection) {
                    ourWorkSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg transition-all hover:shadow-lg hover:shadow-orange-500/50 hover:-translate-y-0.5 group relative overflow-hidden"
              >
                <span className="relative z-10">View Samples</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-orange-500">1000+</div>
                <div className="text-sm text-white/60">Episodes Edited</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className="text-sm text-white/60">Happy Podcasters</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">4.9/5</div>
                <div className="text-sm text-white/60">Average Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced packages header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4 animate-slide-up">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-white/70 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Flexible packages designed to grow with your podcast
          </p>
          <div className="inline-flex bg-[#3a322f] rounded-full p-1.5 border border-white/10 shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={() => setActivePlan("Clips only")}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                activePlan === "Clips only"
                  ? "bg-gradient-to-r from-white to-gray-100 text-black shadow-md"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Clips only
            </button>
            <button
              onClick={() => setActivePlan("Full episode")}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                activePlan === "Full episode"
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md shadow-orange-500/50"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Full episode
            </button>
          </div>
        </div>

        {/* Enhanced pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packagesData[activePlan].map((pkg, index) => (
            <div
              key={pkg.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`rounded-2xl p-8 flex flex-col relative transition-all duration-500 animate-slide-up ${
                pkg.isPopular 
                  ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white scale-105 shadow-2xl shadow-orange-500/50" 
                  : "bg-[#3a322f] text-white/90 border border-white/10"
              } ${hoveredIndex === index && !pkg.isPopular ? "border-orange-500/50 -translate-y-2" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular badge */}
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-orange-500 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-lg">
                  ⭐ MOST POPULAR
                </div>
              )}
              
              {/* Best for badge */}
              <div className={`inline-flex self-start px-3 py-1 rounded-lg text-xs font-semibold mb-4 ${
                pkg.isPopular 
                  ? "bg-white/20 text-white" 
                  : "bg-orange-500/10 text-orange-500 border border-orange-500/20"
              }`}>
                {pkg.bestFor}
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className={`text-sm mb-4 ${pkg.isPopular ? "text-white/90" : "text-white/60"}`}>
                {pkg.description}
              </p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-extrabold">${pkg.price}</span>
                <span className={pkg.isPopular ? "text-white/70" : "text-white/50"}>/episode</span>
              </div>

              <button
                className={`w-full font-bold py-3 rounded-lg mb-8 transition-all group relative overflow-hidden ${
                  pkg.isPopular
                    ? "bg-white text-orange-500 hover:bg-gray-100 shadow-lg"
                    : "bg-[#4d403a] hover:bg-orange-500 text-white"
                }`}
              >
                <span className="relative z-10">Select Plan</span>
              </button>

              <ul className="space-y-3 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastEditingPackages1;