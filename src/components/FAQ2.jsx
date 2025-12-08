import React, { useState } from "react";

// --- The data for the FAQ section ---
const faqData = [
  {
    question: "How long does it take to produce content?",
    answer: "Our standard turnaround time is 5-7 business days for most short-form content. For larger projects like podcast editing, timelines are discussed and agreed upon during the initial strategy call. We also offer expedited services for urgent requests."
  },
  {
    question: "What is your revision process?",
    answer: "We believe in a collaborative process. Each project includes two rounds of revisions to ensure you're 100% satisfied with the final product. We use a streamlined feedback tool that makes it easy to leave precise comments directly on the content."
  },
  {
    question: "What do you need from me to get started?",
    answer: "To start, we'll need your raw footage or audio files, a brief outlining your goals, any brand guidelines you have, and examples of content you like. Don't worry, we'll guide you through this with a simple onboarding questionnaire."
  },
  {
    question: "What file formats do you deliver?",
    answer: "We deliver in all standard formats optimized for social media platforms (e.g., MP4 for video, MP3 for audio). If you have specific requirements for your website or other platforms, just let us know, and we'll accommodate them."
  },
  {
    question: "Who owns the content once it's created?",
    answer: "You do! Upon final payment, you receive full ownership and rights to the content we create for you. You are free to use it however and wherever you see fit."
  }
];

const FAQ2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full mb-6 border border-orange-500/20">
            <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <span className="text-orange-500 font-semibold text-sm">FAQ</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 animate-slide-up">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/70 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Can't find the answer you're looking for? Reach out to our{' '}
            <a className="font-medium text-orange-500 hover:underline transition-colors" href="#">
              support team
            </a>.
          </p>
        </div>

        {/* Enhanced accordion */}
        <div className="space-y-4">
          {faqData.map(({ question, answer }, index) => (
            <div
              key={question}
              className={`rounded-xl bg-gradient-to-br from-[#3a322f] to-[#2a2320] border transition-all duration-500 animate-slide-up ${
                openIndex === index 
                  ? 'border-orange-500/50 shadow-lg shadow-orange-500/20' 
                  : 'border-white/10 hover:border-white/20'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => handleToggle(index)}
                className="flex items-center justify-between w-full p-6 text-left group"
              >
                <h3 className="text-lg font-medium text-white pr-4 group-hover:text-orange-500 transition-colors">
                  {question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-orange-500 rotate-45' 
                    : 'bg-white/10 group-hover:bg-white/20'
                }`}>
                  <span className="text-white text-xl font-light">+</span>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-white/70 border-t border-white/10 pt-4">{answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ2;