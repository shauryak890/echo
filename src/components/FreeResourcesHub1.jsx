import React, { useRef, useState } from "react";
import MouseLight from '../hooks/MouseLight'; 

// --- Download icon ---
const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

// --- File icon ---
const FileIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const resources = [
  {
    title: "50 Viral Hooks",
    description: "Craft captivating content with our curated list of viral hooks.",
    imageUrl: "https://images.pexels.com/photos/7689531/pexels-photo-7689531.jpeg?auto=compress&cs=tinysrgb&w=800",
    aspectRatio: "aspect-square",
    bgColor: "bg-[#2a2320]",
    downloads: "2.5k",
    category: "Content Creation",
    fileType: "PDF",
  },
  {
    title: "IG Reel Shotlist Template",
    description: "Plan your next Instagram Reel with our easy-to-follow shotlist template.",
    imageUrl: "https://images.pexels.com/photos/7175438/pexels-photo-7175438.jpeg?auto=compress&cs=tinysrgb&w=800",
    aspectRatio: "aspect-square",
    bgColor: "bg-gray-100",
    downloads: "3.2k",
    category: "Social Media",
    fileType: "Google Sheets",
  },
  {
    title: "Creator Production Checklist",
    description: "Streamline your content creation process with our comprehensive checklist.",
    imageUrl: "https://images.pexels.com/photos/6613838/pexels-photo-6613838.jpeg?auto=compress&cs=tinysrgb&w=800",
    aspectRatio: "aspect-[4/3]",
    bgColor: "bg-orange-100",
    downloads: "1.8k",
    category: "Workflow",
    fileType: "PDF",
  },
  {
    title: "Podcast Studio Guide",
    description: "Set up your podcast studio for success with our expert guide.",
    imageUrl: "https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=800",
    aspectRatio: "aspect-[4/3]",
    bgColor: "bg-zinc-800",
    downloads: "1.5k",
    category: "Podcast",
    fileType: "PDF",
  },
  {
    title: "Content Calendar Template",
    description: "Stay organized with our monthly content planning template.",
    imageUrl: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800",
    aspectRatio: "aspect-square",
    bgColor: "bg-blue-100",
    downloads: "4.1k",
    category: "Planning",
    fileType: "Google Sheets",
  },
  {
    title: "Video Editing Shortcuts",
    description: "Speed up your editing workflow with essential keyboard shortcuts.",
    imageUrl: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800",
    aspectRatio: "aspect-square",
    bgColor: "bg-purple-100",
    downloads: "2.9k",
    category: "Editing",
    fileType: "PDF",
  },
];

const FreeResourcesHub1 = () => {
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = ["All", "Content Creation", "Social Media", "Workflow", "Podcast", "Planning", "Editing"];
  
  const filteredResources = selectedCategory === "All" 
    ? resources 
    : resources.filter(r => r.category === selectedCategory);

  return (
    <section id="resources" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full mb-6 border border-orange-500/20">
                <FileIcon />
                <span className="text-orange-500 font-semibold text-sm">FREE DOWNLOADS</span>
              </div>
              
              <h1 className="text-5xl font-extrabold tracking-tight text-white mb-4 animate-slide-up">
                Free Resources
              </h1>
              <p className="text-lg text-white/70 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Unlock your creative potential with our exclusive resources.
                Download guides, templates, and checklists to elevate your
                content creation journey.
              </p>
              
              {/* Category filters */}
              <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-sm font-semibold text-white/50 mb-3">FILTER BY CATEGORY</div>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg transition-all ${
                      selectedCategory === category
                        ? "bg-orange-500 text-white font-semibold"
                        : "bg-[#3a322f] text-white/70 hover:bg-[#4d403a] hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Stats */}
              <div className="mt-8 p-6 bg-gradient-to-br from-[#3a322f] to-[#2a2320] rounded-2xl border border-white/10">
                <div className="text-3xl font-bold text-orange-500 mb-1">{resources.length}</div>
                <div className="text-sm text-white/60">Free resources available</div>
              </div>
            </div>
          </div>
          
          {/* Resources grid */}
          <div ref={containerRef} className="lg:col-span-2 relative">
            <MouseLight containerRef={containerRef} />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {filteredResources.map((resource, index) => (
                <div
                  key={resource.title}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative group bg-[#3a322f]/50 rounded-2xl h-full border transition-all duration-500 animate-slide-up hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/20"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    borderColor: hoveredIndex === index ? 'rgba(247, 125, 43, 0.5)' : 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="flex flex-col h-full w-full">
                    {/* Image container */}
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <div className={`w-full flex items-center justify-center p-8 ${resource.aspectRatio} ${resource.bgColor} transition-transform duration-500 ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}>
                        <img
                          src={resource.imageUrl}
                          alt={resource.title}
                          className="max-h-full w-auto rounded-lg object-contain shadow-lg"
                        />
                      </div>
                      
                      {/* Category badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                        {resource.category}
                      </div>
                      
                      {/* Download overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-6 transition-opacity duration-300 ${
                        hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <button className="px-6 py-2.5 bg-orange-500 text-white font-bold rounded-lg flex items-center gap-2 hover:bg-orange-600 transition-all transform hover:scale-105">
                          <DownloadIcon />
                          Download {resource.fileType}
                        </button>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-white/70 mb-4 flex-grow">
                        {resource.description}
                      </p>
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs text-white/50 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-1">
                          <DownloadIcon />
                          <span>{resource.downloads} downloads</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FileIcon />
                          <span>{resource.fileType}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Show message if no resources in category */}
            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <p className="text-white/50">No resources found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeResourcesHub1;

