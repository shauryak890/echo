import React from "react";

const PodcastEditingPackages2 = () => (
  <section className="py-20">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">Podcast Editing Packages</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Choose the perfect plan for your podcasting needs.
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <div className="flex rounded-full bg-black/20 p-1 backdrop-blur-sm">
          <label className="relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white">
            <input className="peer sr-only" name="pricing-toggle" type="radio" />
            <span className="relative z-10">Clips only</span>
            <div className="absolute inset-0 rounded-full bg-primary opacity-0 shadow-sm transition-all duration-300 peer-checked:opacity-100"></div>
          </label>
          <label className="relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-white">
            <input checked className="peer sr-only" name="pricing-toggle" type="radio" />
            <span className="relative z-10">Full episode</span>
            <div className="absolute inset-0 rounded-full bg-primary opacity-0 shadow-sm transition-all duration-300 peer-checked:opacity-100"></div>
          </label>
        </div>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Example package cards, replace with dynamic data as needed */}
        {["Essential", "Pro", "Elite"].map((plan, idx) => (
          <div key={plan} className={`glassmorphism flex flex-col rounded-xl p-8 ${idx === 1 ? 'border-2 border-primary/50 shadow-2xl' : ''}`}>
            <h3 className="text-lg font-bold text-white">{plan}</h3>
            <p className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-black tracking-tight text-white">${[199,399,599][idx]}</span>
              <span className="text-sm font-semibold text-gray-300">/episode</span>
            </p>
            <button className={`mt-6 w-full rounded-full ${idx === 1 ? 'bg-primary text-white' : 'bg-white/10 text-white'} py-2 text-sm font-bold transition hover:bg-white/20`}>Select</button>
            <ul className="mt-8 space-y-4 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                {idx === 0 ? 'Basic audio cleanup' : idx === 1 ? 'Everything in Essential, plus:' : 'Everything in Pro, plus:'}
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                {idx === 0 ? 'Noise reduction' : idx === 1 ? 'Advanced editing' : 'Premium editing'}
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                {idx === 0 ? 'Level balancing' : idx === 1 ? 'Crossfades and transitions' : 'Advanced mixing and mastering'}
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                {idx === 0 ? 'ID3 tagging' : idx === 1 ? 'Intro/outro integration' : 'Sound design'}
              </li>
              {idx === 1 && (
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  Basic mixing
                </li>
              )}
              {idx === 2 && (
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  Full production support
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <button className="flex min-w-[200px] items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-bold text-white shadow-lg transition hover:bg-primary/90">
          Upload Brief
        </button>
        <button className="flex min-w-[200px] items-center justify-center rounded-full border border-gray-600 bg-transparent px-6 py-3 text-base font-bold text-gray-200 transition hover:bg-gray-800">
          Book a Producer Call
        </button>
      </div>
    </div>
  </section>
);

export default PodcastEditingPackages2;
