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

// --- Sparkle icon for popular badge ---
const SparkleIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0l3.708 7.513 8.292 1.205-6 5.847 1.416 8.26L12 18.513l-7.416 3.897 1.416-8.26-6-5.847 8.292-1.205z" />
  </svg>
);

// --- Enhanced pricing packages data ---
const packages = [
  {
    name: "Starter",
    tag: "Best for Beginners",
    price: "499",
    description: "Perfect for small businesses starting their social media journey",
    features: [
      "Content Calendar Planning",
      "5 Posts per Week",
      "Basic Analytics Dashboard",
      "2 Social Platforms",
      "Email Support"
    ],
    isPopular: false,
    savings: null,
  },
  {
    name: "Growth",
    tag: "Most Popular",
    price: "999",
    description: "Ideal for growing businesses ready to scale their presence",
    features: [
      "Everything in Starter, plus:",
      "10 Posts per Week",
      "Advanced Analytics & Reporting",
      "Community Management",
      "4 Social Platforms",
      "Priority Support",
      "Monthly Strategy Call"
    ],
    isPopular: true,
    savings: "Save $200/mo",
  },
  {
    name: "Authority",
    tag: "For Brands",
    price: "1499",
    description: "Complete solution for established brands seeking dominance",
    features: [
      "Everything in Growth, plus:",
      "Unlimited Posts",
      "Dedicated Account Manager",
      "Influencer Outreach Campaign",
      "All Social Platforms",
      "24/7 Support",
      "Quarterly Brand Workshops",
      "Custom Reporting Dashboard"
    ],
    isPopular: false,
    savings: "Save $500/mo",
  },
];

const PackagesSocialMediaOffers = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="packages" className="pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent animate-gradient"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 border border-orange-500/20">
            <SparkleIcon />
            <span className="text-orange-500 font-semibold text-xs sm:text-sm">PRICING PLANS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4 animate-slide-up px-2">
            Social Media Packages
          </h1>
          <p className="text-base sm:text-lg text-white/70 animate-slide-up px-4 sm:px-0" style={{ animationDelay: '0.1s' }}>
            Elevate your online presence with our tailored social media packages.
            From content creation to strategy, we've got you covered.
          </p>
        </div>

        {/* Pricing cards with enhanced animations */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() => setHoveredIndex(index)}
              className={`
                relative rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-500
                ${pkg.isPopular ? "bg-[#3a322f] scale-100 sm:scale-105 md:scale-110 shadow-2xl" : "bg-[#3a322f]"}
                ${hoveredIndex === index ? "transform -translate-y-2" : ""}
                animate-slide-up
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated gradient border for all cards on hover */}
              <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 -z-10 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-2xl animate-gradient"></div>
              </div>
              
              {/* Permanent gradient border for popular plan */}
              {pkg.isPopular && (
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl -z-20 animate-pulse-slow"></div>
              )}
              
              {/* Popular badge */}
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-1 rounded-full">
                  <div className="flex items-center gap-2">
                    <SparkleIcon />
                    <span className="text-white font-bold text-xs uppercase tracking-wider">Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="flex w-full justify-between items-start mb-2">
                <span className="text-xl sm:text-2xl font-bold text-white">{pkg.name}</span>
                {pkg.savings && (
                  <span className="px-2 py-1 rounded-lg text-[10px] sm:text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30 whitespace-nowrap">
                    {pkg.savings}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-white/60 mb-4 sm:mb-6">{pkg.description}</p>

              <div className="flex items-baseline gap-1 mb-4 sm:mb-6">
                <span className="text-4xl sm:text-5xl font-extrabold text-white">${pkg.price}</span>
                <span className="text-sm sm:text-base font-medium text-white/50">/month</span>
              </div>

              <ul className="space-y-2 sm:space-y-3 text-white/80 mb-6 sm:mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckIcon />
                    <span className="text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full font-bold py-3 sm:py-3.5 rounded-lg mt-auto transition-all duration-300 group relative overflow-hidden min-h-[48px] text-sm sm:text-base ${
                  pkg.isPopular
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-[#4d403a] text-white/90 hover:bg-orange-500"
                }`}
              >
                <span className="relative z-10">Choose Plan</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-12 sm:mb-16 text-center px-4">
          <div className="flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1">14-Day</div>
            <div className="text-xs sm:text-sm text-white/60">Money-Back Guarantee</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/20"></div>
          <div className="flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1">Cancel</div>
            <div className="text-xs sm:text-sm text-white/60">Anytime, No Questions</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/20"></div>
          <div className="flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1">24/7</div>
            <div className="text-xs sm:text-sm text-white/60">Customer Support</div>
          </div>
        </div>

        {/* Enhanced Custom Quote section */}
        <div className="max-w-2xl mx-auto text-center mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
            Need a Custom Quote?
          </h2>
          <p className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8 px-4">
            Let's discuss your specific needs and create a custom package just for
            you. We're here to help you grow.
          </p>
          <form className="space-y-4 sm:space-y-6 text-left bg-[#3a322f] p-6 sm:p-8 rounded-2xl border border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="text-xs sm:text-sm font-medium text-white/80 mb-2 block">Name</label>
                <input type="text" id="name" className="w-full rounded-lg px-4 py-3 bg-[#2a2320] text-white border border-transparent focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm sm:text-base min-h-[48px]" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="text-xs sm:text-sm font-medium text-white/80 mb-2 block">Email</label>
                <input type="email" id="email" className="w-full rounded-lg px-4 py-3 bg-[#2a2320] text-white border border-transparent focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm sm:text-base min-h-[48px]" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-xs sm:text-sm font-medium text-white/80 mb-2 block">Message</label>
              <textarea id="message" rows={5} className="w-full rounded-lg px-4 py-3 bg-[#2a2320] text-white border border-transparent focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all resize-none text-sm sm:text-base" placeholder="Tell us about your project..."></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 sm:py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-orange-500/50 hover:-translate-y-0.5 group relative overflow-hidden min-h-[48px] text-sm sm:text-base"
            >
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PackagesSocialMediaOffers;