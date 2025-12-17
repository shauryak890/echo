"use client";

import { useRouter } from "next/navigation";

export default function BlogCTA() {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to home page with a query param to trigger Calendly modal
    router.push("/?openCalendly=true");
  };

  return (
    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
      <p className="text-center text-gray-900 font-medium text-base leading-relaxed mb-5">
        Scale your most ambitious marketing strategies with EchoPulse
      </p>
      <button
        onClick={handleClick}
        className="block w-full py-3 px-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm text-center rounded-full transition-colors"
      >
        Get Started
      </button>
    </div>
  );
}
