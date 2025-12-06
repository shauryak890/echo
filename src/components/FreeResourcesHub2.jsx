import React from "react";

const FreeResourcesHub2 = () => (
  <section className="py-12">
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Free Resources</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Unlock your creative potential with our curated collection of free resources. From viral hook formulas to production checklists, we've got everything you need to elevate your content game.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
        {/* Example resource cards, replace with dynamic data as needed */}
        {["50 Viral Hooks", "IG Reel Shotlist Template", "Creator Production Checklist", "Podcast Studio Guide"].map((title, idx) => (
          <div key={title} className="group flex flex-col gap-4">
            <div className="relative w-full overflow-hidden rounded-xl">
              <img alt={title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAQNo1TwMmYEB8H_lBrXauE8Vy9JLv0F5_2fElQvTvhc00z0_2hq3U7fw9qS1XzPYEWKbtaBOoSoe0iGCfAm5CaWCnKbxoUUTEe03XvDZ8yPRlVQhDyIQTnlBkPDdKs1WxC138WLjahRD1dt77tlYChAuxfudzX2pvndbdv8JRUddYFoCWKsDT-RQt4rgIyM069iElryrhqDD4gOPRUGX75EG1vwUOqoUkRSE-6hAfLVMMsgoAFC4NiBZVn90-05Ekrsk6KZLLH5td" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Resource description here.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FreeResourcesHub2;
