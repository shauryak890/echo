import React from "react";

const resources = [
  {
    title: "50 Viral Hooks",
    description: "Craft captivating content with our curated list of viral hooks.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3C_NzVM_tL9hwC8QGtmdAkDLJp_hrCJ2c7bR__Q0HLwKGwzT6R0NUU-Ark0bHI6-PzwGZREzrctkAEx26Yaj4pIc49BpZQ9fZhfOeNxdXHwDwiC1ZptwdNIWxVtdKUsqR6d_cVTzjQQFCnfV_-XIWNRzScfNI7E_QWJ2gaD-0Ldw9-xmtp61S_glu-Ow1xebUqe6u6Etf2V4eUT0A88NyCTmGheDaEf_CPraAdhN4JvcfbiFhkRD9CvQxYKA7FaltBOFzQETqabbY"
  },
  {
    title: "IG Reel Shotlist Template",
    description: "Plan your next Instagram Reel with our easy-to-follow shotlist template.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm-UYKNcXVtKHKekMsCpnx0_SXjG49KPE7gAXD7VEX5MvwGRxxPqMT0qr0bTMZxReu7FKI4YCSSJEtzQLeWPFTC6t_61ASaLI2OFUBiGwEa56UCIf0fVq0XlKk9kEt9i5L3Kql2qogdOwN9lYgXn30X4kldAjgeieeBH7lkaQQjG3GQx5CgtMmf8nyQ8U65AGxw9DqDj7I43a7KnvraVEE5dkmBdQ8iMAT3a67kFYE_7w2bGk2oK2yMOHlCHXYeXJ1czuF2js9S602"
  },
  {
    title: "Creator Production Checklist",
    description: "Streamline your content creation process with our comprehensive checklist.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBk_-cwJboO1RYeo-meDxIuKUk5cg03jPND0HOx52TDEc0JjSmGpCmGhte8tDV4I3vZv6i-k_3Fh4-_ar4MobLUuutJ9Pk-8gVtdLXAMcomZQfhVm4ITL8zIwfHSXn3kFDPfx7f6DjFEg2tIxknF3nGaaMgfG372SYwYWIPkD5LSf8mHe2KzKwjfLWC9_WYUU2-NaQVlHce2n2jtl5tJ8eoh90ajR1na2tpbkCcridvqGTa-55502HuVb7qjjM93Zcg_s7dM7BbjE03"
  },
  {
    title: "Podcast Studio Guide",
    description: "Set up your podcast studio for success with our expert guide.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDD-UXWwfiDEjUBQ8hJ2w4W2O05OF3V4j5fWkZnG-nIN6OXP7t2VRQO9fBCg_yGReVN-OqSaesmTlxAIPB6-h3GeQp-LXCqIwN5sSHIiWOvEXLBlN38a9UJpa8mpNGoyghDs8xPC0ABISz6Yeg6A8ucZPwRLGM5VOQFu_b786Jet9vjTmsnKRR0KgtljiMz5QgGE9Ah7T5yIJZPRtOjXER_2ENiJ844xjGgFxoS2cWOrqj-VVPME0nxewrWQFsPimtSIV0zJPMjtJkf"
  }
];

const FreeResourcesHub = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="sticky top-28">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Free Resources
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Unlock your creative potential with our exclusive resources. Download guides, templates, and checklists to elevate your content creation journey.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {resources.map((resource) => (
              <div 
                key={resource.title} 
                className="group relative flex flex-col rounded-xl border border-background-dark/10 dark:border-background-light/10 transition-all hover:shadow-lg dark:hover:shadow-primary/20 overflow-hidden"
              >
                <div 
                  className="aspect-[4/3] w-full bg-cover bg-center" 
                  style={{ backgroundImage: `url("${resource.image}")` }}
                />
                <div className="flex flex-1 flex-col p-6 bg-background-light dark:bg-background-dark">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {resource.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeResourcesHub;