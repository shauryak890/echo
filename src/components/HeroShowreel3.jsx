import React, { useState } from "react";

const workItems = [
  {
    img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=800&fit=crop",
    title: "Nike x Creator Campaign",
    category: "Reels",
    views: "2.5M",
    engagement: "12.5%"
  },
  {
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=800&fit=crop",
    title: "Tech Startup Launch",
    category: "Case Studies",
    views: "1.2M",
    engagement: "8.3%"
  },
  {
    img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=800&fit=crop",
    title: "Podcast Series - Ep 15",
    category: "Podcast",
    views: "850K",
    engagement: "15.2%"
  },
  {
    img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=800&fit=crop",
    title: "Brand Story Series",
    category: "Reels",
    views: "3.1M",
    engagement: "18.7%"
  },
  {
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=800&fit=crop",
    title: "Music Festival Recap",
    category: "Reels",
    views: "4.2M",
    engagement: "22.1%"
  },
  {
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
    title: "Product Launch Campaign",
    category: "Case Studies",
    views: "1.8M",
    engagement: "14.3%"
  },
  {
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=800&fit=crop",
    title: "Creator Interview Series",
    category: "Podcast",
    views: "920K",
    engagement: "11.8%"
  },
  {
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=800&fit=crop",
    title: "Travel Content Series",
    category: "Reels",
    views: "5.3M",
    engagement: "25.4%"
  },
];

const filters = ["All", "Reels", "Podcast", "Case Studies"];

const HeroShowreel3 = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredItems = activeFilter === "All" 
    ? workItems 
    : workItems.filter(item => item.category === activeFilter);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pt-20 pb-16 sm:px-8 sm:pt-32 sm:pb-24">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
          Portfolio Showcase
        </span>
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          Our Work
        </h1>
        <p className="max-w-2xl text-xl text-white/60 leading-relaxed">
          Explore our portfolio of <span className="text-primary font-semibold">high-converting content</span>. See how we've helped creators and brands achieve millions of views.
        </p>
      </div>

      {/* Enhanced Filter Tabs */}
      <div className="flex items-center justify-center gap-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-2 mb-16 max-w-2xl mx-auto">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`relative flex-1 rounded-xl px-6 py-3 text-sm font-bold transition-all duration-300 ${
              activeFilter === filter
                ? "bg-primary text-white shadow-lg shadow-primary/50 scale-105"
                : "text-white/50 hover:text-white hover:bg-white/5"
            }`}
          >
            {filter}
            {activeFilter === filter && (
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Interactive Grid with Hover Effects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`group relative rounded-2xl overflow-hidden bg-zinc-900 aspect-square cursor-pointer transform transition-all duration-500 ${
              hoveredIndex === i ? 'scale-105 z-10' : 'scale-100'
            }`}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className={`h-full w-full object-cover transition-all duration-700 ${
                hoveredIndex === i ? 'scale-110 brightness-75' : 'scale-100'
              }`}
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 ${
              hoveredIndex === i ? 'opacity-100' : 'opacity-0'
            }`} />
            
            {/* Content Overlay */}
            <div className={`absolute inset-0 p-6 flex flex-col justify-end transition-all duration-500 ${
              hoveredIndex === i ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <span className="inline-block mb-2 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-white text-xs font-bold w-fit">
                {item.category}
              </span>
              <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                {item.title}
              </h3>
              <div className="flex items-center gap-4 text-white/80 text-sm">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold">{item.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
                  </svg>
                  <span className="font-semibold">{item.engagement}</span>
                </div>
              </div>
            </div>

            {/* Play Button Overlay */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
              hoveredIndex === i ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}>
              <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>

            {/* Border Glow on Hover */}
            <div className={`absolute inset-0 rounded-2xl border-2 border-primary transition-opacity duration-500 pointer-events-none ${
              hoveredIndex === i ? 'opacity-100' : 'opacity-0'
            }`} />
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-16">
        <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-orange-600 text-white font-bold text-lg shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all hover:scale-105">
          View Full Portfolio
          <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </main>
  );
};

export default HeroShowreel3;