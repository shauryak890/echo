"use client";

import { useState } from "react";

const IconDiscovery = () => (
  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
  </svg>
);

const IconStrategy = () => (
  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <path d="M208,24H48A16,16,0,0,0,32,40V216a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V40A16,16,0,0,0,208,24Zm-88,92a12,12,0,1,1-12-12A12,12,0,0,1,120,116Zm-44,0a12,12,0,1,1-12-12A12,12,0,0,1,76,116Zm88,40a12,12,0,1,1,12-12A12,12,0,0,1,164,156Zm-44,0a12,12,0,1,1-12-12A12,12,0,0,1,120,156Z"></path>
  </svg>
);

const IconProduction = () => (
  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <path d="M232,88a8,8,0,0,0-10.83-5.17l-29.42,12.61A80,80,0,1,0,88,232a8,8,0,0,0,0-16,64,64,0,1,1,61.13-86.83l29.42-12.61A8,8,0,0,0,232,88ZM88,200a48,48,0,1,0-48-48A48.05,48.05,0,0,0,88,200Z"></path>
  </svg>
);

const IconScale = () => (
  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <path d="M229.66,218.34,179.59,168.27a8,8,0,0,0-11.32,0l-16,16a8,8,0,0,0,0,11.31l16,16a8,8,0,0,0,11.32,0l50.07-50.07a8,8,0,0,0,0-11.31ZM184.41,200.41l-10.83-10.82,10.83-10.83,10.83,10.83ZM104,32a72,72,0,1,0,72,72A72.08,72.08,0,0,0,104,32Zm0,128a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,160Z"></path>
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
  </svg>
);

const steps = [
  {
    icon: <IconDiscovery />,
    number: "01.",
    title: "Discovery Call",
    desc: "We'll dive deep into your brand, objectives, and audience to understand your unique needs and lay the foundation for a successful partnership.",
    duration: "30-45 min",
    deliverables: ["Brand audit", "Goal worksheet", "Audience analysis"]
  },
  {
    icon: <IconStrategy />,
    number: "02.",
    title: "Strategy & Planning",
    desc: "Based on our discovery, we'll craft a comprehensive content strategy and a detailed production roadmap tailored to your goals.",
    duration: "1-2 days",
    deliverables: ["Content calendar", "Style guide", "Production timeline"]
  },
  {
    icon: <IconProduction />,
    number: "03.",
    title: "Content Production",
    desc: "Our expert team gets to work, producing high-quality, engaging content that's optimized for your target platforms and audience.",
    duration: "Ongoing",
    deliverables: ["Edited videos", "Graphics", "Distribution plan"]
  },
  {
    icon: <IconScale />,
    number: "04.",
    title: "Scale & Optimize",
    desc: "We analyze performance, gather insights, and refine our strategy to scale your content efforts and maximize your long-term impact.",
    duration: "Monthly",
    deliverables: ["Analytics reports", "Optimization plan", "Strategy updates"]
  },
];

export default function ProcessHowWeWork() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="how-we-work" className="py-12 sm:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 px-4 py-2 mb-6 border border-orange-500/20" style={{ borderRadius: '9999px' }}>
            <ClockIcon />
            <span className="text-orange-500 font-semibold text-sm">HOW WE WORK</span>
          </div>
          <h2 className="text-5xl font-extrabold text-white tracking-tight mb-4 animate-slide-up">
            Our Proven Process
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            From initial consultation to scaling your content, we&apos;ve got you covered every step of the way. Our structured approach ensures quality and results.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-orange-500 via-orange-600 to-orange-500 md:hidden"></div>

          {steps.map((step, i) => (
            <div
              key={step.title}
              onMouseEnter={() => setHoveredStep(i)}
              onMouseLeave={() => setHoveredStep(null)}
              className={`relative flex items-start md:items-center mb-16 md:mb-24 animate-slide-up ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-full md:w-5/12 ml-16 md:ml-0">
                <div style={{ borderRadius: '24px' }} className={`bg-gradient-to-br from-[#3a322f] to-[#2a2320] p-8 border transition-all duration-500 group ${
                  hoveredStep === i
                    ? "border-orange-500/50 shadow-lg shadow-orange-500/20 -translate-y-1"
                    : "border-white/10"
                } ${i % 2 !== 0 ? "md:text-right" : "text-left"}`}>
                  <div className={`flex items-center gap-3 mb-4 ${i % 2 !== 0 ? "md:flex-row-reverse md:justify-end" : ""}`}>
                    <span className="text-5xl font-extrabold text-orange-500/30">{step.number}</span>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>

                  <p className="text-white/70 mb-6">{step.desc}</p>

                  <div className={`space-y-3 ${i % 2 !== 0 ? "md:flex md:flex-col md:items-end" : ""}`}>
                    <div className="flex items-center gap-2 text-sm">
                      <ClockIcon />
                      <span className="text-orange-500 font-semibold">{step.duration}</span>
                    </div>

                    <div className={`overflow-hidden transition-all duration-500 ${
                      hoveredStep === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      <div className={`pt-3 border-t border-white/10 ${i % 2 !== 0 ? "md:text-right" : ""}`}>
                        <div className="text-xs text-white/50 mb-2 font-semibold uppercase">Deliverables</div>
                        <ul className="space-y-1 text-sm text-white/70">
                          {step.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              {i % 2 === 0 ? (
                                <>
                                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                  <span>{item}</span>
                                </>
                              ) : (
                                <>
                                  <span className="md:order-2">{item}</span>
                                  <span className="md:order-1 w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block md:w-2/12"></div>

              <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-0 md:-translate-y-1/2">
                <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center z-10 shadow-lg transition-all duration-500 ${
                  hoveredStep === i ? "scale-110 shadow-orange-500/50" : ""
                }`}>
                  {step.icon}
                  {hoveredStep === i && (
                    <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-75"></div>
                  )}
                </div>
              </div>

              {i < steps.length - 1 && (
                <div aria-hidden="true" className="hidden md:block absolute top-1/2 left-1/2 w-[2px] h-full">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 2 200"
                    preserveAspectRatio="none"
                    className="absolute -top-16"
                    style={{ transform: i % 2 === 0 ? "translate(-50%, 50%)" : "translate(-50%, 50%) scaleX(-1)", overflow: "visible" }}
                  >
                    <defs>
                      <linearGradient id={`gradient-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f77d2b" stopOpacity="0.5" />
                        <stop offset="50%" stopColor="#f77d2b" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#f77d2b" stopOpacity="0.5" />
                      </linearGradient>
                    </defs>
                    <path d="M 1 0 V 80 C 1 100, 50 120, 1 140 V 220" stroke={`url(#gradient-${i})`} strokeWidth="2" fill="none" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
