"use client";

import { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";

export default function CalendlyModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenCalendly = () => {
      setIsOpen(true);
    };

    window.addEventListener("openCalendly", handleOpenCalendly);
    return () => window.removeEventListener("openCalendly", handleOpenCalendly);
  }, []);

  useEffect(() => {
    // Check for openCalendly query param on mount (client-side only)
    const params = new URLSearchParams(window.location.search);
    if (params.get("openCalendly") === "true") {
      setIsOpen(true);
      // Clean up the URL without triggering a navigation
      window.history.replaceState({}, "", "/");
    }
  }, []);

  useEffect(() => {
    // Set up global booking function
    (window as Window & { bookCalendly?: () => void }).bookCalendly = () => {
      const event = new CustomEvent('openCalendly');
      window.dispatchEvent(event);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Book a Strategy Call</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Calendly Widget */}
        <div className="overflow-y-auto" style={{ height: "70vh" }}>
          <InlineWidget
            url="https://calendly.com/echopulsemedia/new-meeting"
            styles={{
              height: "100%",
              minWidth: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
