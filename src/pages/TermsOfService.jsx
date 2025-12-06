import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2a2320] to-[#1a1410] py-20 sm:py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-white/70 mb-6">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <a 
              href="/" 
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-orange max-w-none">
            
            {/* Introduction */}
            <div className="mb-12 p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-2xl border border-orange-500/20">
              <p className="text-white/80 text-base leading-relaxed mb-0">
                Welcome to EchoPulse! By accessing or using our services, you agree to be bound by these Terms of Service. 
                Please read them carefully before using our platform.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 text-lg font-bold">
                  1
                </span>
                Services Overview
              </h2>
              <div className="ml-0 sm:ml-13 space-y-4 text-white/70">
                <p>
                  EchoPulse provides professional content creation services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Short-form video content creation and editing</li>
                  <li>Podcast production and editing services</li>
                  <li>Social media content packages</li>
                  <li>1:1 content strategy consultations</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time 
                  with or without notice.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 text-lg font-bold">
                  2
                </span>
                User Responsibilities
              </h2>
              <div className="ml-0 sm:ml-13 space-y-4 text-white/70">
                <p>As a user of our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information when booking services</li>
                  <li>Own or have proper rights to all content you submit to us for editing</li>
                  <li>Use our services in compliance with all applicable laws and regulations</li>
                  <li>Not use our services for any illegal or unauthorized purpose</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 text-lg font-bold">
                  3
                </span>
                Intellectual Property
              </h2>
              <div className="ml-0 sm:ml-13 space-y-4 text-white/70">
                <p>
                  <strong className="text-white">Your Content:</strong> You retain all ownership rights to the raw content 
                  you provide to us. By submitting content, you grant us a limited license to edit, modify, and process 
                  your content for the purpose of delivering our services.
                </p>
                <p>
                  <strong className="text-white">Our Work:</strong> Upon full payment, you receive full rights to the 
                  final edited content we deliver. However, we reserve the right to showcase your project in our 
                  portfolio unless otherwise agreed in writing.
                </p>
                <p>
                  <strong className="text-white">Our Platform:</strong> All content on our website, including text, 
                  graphics, logos, and software, is the property of EchoPulse and protected by intellectual property laws.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 text-lg font-bold">
                  4
                </span>
                Payment Terms
              </h2>
              <div className="ml-0 sm:ml-13 space-y-4 text-white/70">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment is required before work begins unless otherwise agreed</li>
                  <li>All prices are in the currency specified on our website</li>
                  <li>We accept payment through our designated payment processors</li>
                  <li>Refunds are subject to our refund policy as outlined in your service agreement</li>
                  <li>Late payments may result in project delays or suspension of services</li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 text-lg font-bold">
                  5
                </span>
                Delivery & Revisions
              </h2>
              <div className="ml-0 sm:ml-13 space-y-4 text-white/70">
                <p>
                  We strive to deliver all projects within the agreed timeframe. Each package includes a specified 
                  number of revision rounds. Additional revisions may incur extra charges.
                </p>
                <p>
                  Delivery timelines may be extended if:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Client feedback or required materials are delayed</li>
                  <li>Project scope changes after initiation</li>
                  <li>Unforeseen technical difficulties arise</li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 text-lg font-bold">
                  6
                </span>
                Limitation of Liability
              </h2>
              <div className="ml-0 sm:ml-13 space-y-4 text-white/70">
                <p>
                  EchoPulse shall not be liable for any indirect, incidental, special, consequential, or punitive 
                  damages resulting from your use or inability to use our services. Our total liability shall not 
                  exceed the amount paid for the specific service in question.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 text-lg font-bold">
                  7
                </span>
                Termination
              </h2>
              <div className="ml-0 sm:ml-13 space-y-4 text-white/70">
                <p>
                  We reserve the right to terminate or suspend access to our services immediately, without prior 
                  notice, for any reason, including breach of these Terms of Service.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 text-lg font-bold">
                  8
                </span>
                Changes to Terms
              </h2>
              <div className="ml-0 sm:ml-13 space-y-4 text-white/70">
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                  posting to our website. Your continued use of our services after changes constitutes acceptance of 
                  the new terms.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12 p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-2xl border border-orange-500/20">
              <h3 className="text-xl font-bold text-white mb-3">Questions About Our Terms?</h3>
              <p className="text-white/70 mb-4">
                If you have any questions about these Terms of Service, please don't hesitate to contact us.
              </p>
              <a 
                href="/#book-call" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
