import React from "react";

const FAQ1 = () => (
  <section className="py-16 sm:py-24">
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Can't find the answer you're looking for? Reach out to our customer support team.</p>
      </div>
      <div className="mt-12 space-y-4">
        {/* Example FAQ items, replace with dynamic data as needed */}
        {[
          {
            q: "How long does it take to produce content?",
            a: "Our standard turnaround time is 5-7 business days for short-form content. For larger projects like podcast editing or 1:1 coaching prep, timelines are discussed and agreed upon during the initial strategy call to ensure we meet your specific needs."
          },
          {
            q: "What is your revision process?",
            a: "We offer up to two rounds of revisions for each piece of content. We value collaboration and want to ensure you're completely satisfied with the final product. Feedback is submitted through our client portal for streamlined communication."
          },
          {
            q: "What do you need from me to get started?",
            a: "To kick things off, we'll need your raw footage or audio files, any branding guidelines (logos, color palettes), and a clear brief outlining your goals and target audience. We have a simple onboarding process to collect all this information efficiently."
          },
          {
            q: "What file formats do you deliver?",
            a: "We deliver content in the most common, platform-optimized formats. Typically, this means MP4 for video and MP3 for audio. If you have specific file format requirements, please let us know, and we'll be happy to accommodate them."
          },
          {
            q: "Who owns the content once it's created?",
            a: "You do! Upon final payment, you receive full ownership and rights to all the content we create for you. You are free to use it however you see fit across all your platforms."
          }
        ].map(({q, a}, idx) => (
          <details key={q} className="group rounded-lg border border-gray-500/30 bg-background-light p-6 dark:bg-background-dark">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-medium text-gray-900 dark:text-white">{q}</span>
              <span className="text-gray-500 transition-transform group-open:rotate-180 dark:text-gray-400">▼</span>
            </summary>
            <div className="mt-4 text-gray-700 dark:text-gray-300">{a}</div>
          </details>
        ))}
      </div>
      <div className="mt-16 flex justify-center">
        <button className="flex h-12 items-center justify-center rounded-lg border border-primary/50 bg-primary/20 px-6 text-sm font-bold text-primary transition-colors hover:bg-primary/30 dark:bg-primary/20 dark:hover:bg-primary/30">
          Back to Services
        </button>
      </div>
    </div>
  </section>
);

export default FAQ1;
