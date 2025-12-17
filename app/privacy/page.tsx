import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | EchoPulse",
  description: "Privacy Policy for EchoPulse - Learn how we collect, use, and protect your personal information when using our content creation services.",
  openGraph: {
    title: "Privacy Policy | EchoPulse",
    description: "Privacy Policy for EchoPulse - Learn how we protect your personal information.",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="min-h-screen bg-background-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2a2320] to-[#1a1410] py-20 sm:py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/70 mb-6">
              Last Updated: {currentDate}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
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
                At EchoPulse, we are committed to protecting your privacy and personal information. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 text-lg font-bold">
                  1
                </span>
                Information We Collect
              </h2>
              <div className="ml-0 sm:ml-13 space-y-4 text-white/70">
                <p>
                  <strong className="text-white">Personal Information:</strong> When you use our services, we may collect:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Business information (company name, website)</li>
                  <li>Payment information (processed securely through third-party processors)</li>
                  <li>Communication preferences and history</li>
                </ul>

                <p className="mt-4">
                  <strong className="text-white">Content Information:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Raw video, audio, and media files you submit for editing</li>
                  <li>Project specifications, briefs, and feedback</li>
                  <li>Final deliverables and associated metadata</li>
                </ul>

                <p className="mt-4">
                  <strong className="text-white">Usage Information:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Browser type and version</li>
                  <li>Device information and IP address</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referral sources and click patterns</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 text-lg font-bold">
                  2
                </span>
                How We Use Your Information
              </h2>
              <div className="ml-0 sm:ml-13 space-y-4 text-white/70">
                <p>We use the collected information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our content creation services</li>
                  <li>Process your orders and manage billing</li>
                  <li>Communicate with you about projects, updates, and promotions</li>
                  <li>Personalize your experience and deliver relevant content</li>
                  <li>Analyze usage patterns to enhance our services</li>
                  <li>Comply with legal obligations and resolve disputes</li>
                  <li>Prevent fraud and ensure platform security</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 text-lg font-bold">
                  3
                </span>
                Information Sharing
              </h2>
              <div className="ml-0 sm:ml-13 space-y-4 text-white/70">
                <p>We may share your information with:</p>

                <p className="mt-4">
                  <strong className="text-white">Service Providers:</strong> Trusted third parties who assist us in
                  operating our business (payment processors, hosting providers, analytics services). These parties
                  are contractually obligated to protect your information.
                </p>

                <p className="mt-4">
                  <strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition,
                  or sale of assets, your information may be transferred to the acquiring entity.
                </p>

                <p className="mt-4">
                  <strong className="text-white">Legal Requirements:</strong> When required by law, legal process, or
                  to protect our rights and safety.
                </p>

                <p className="mt-4 font-semibold text-white">
                  We do NOT sell your personal information to third parties.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 text-lg font-bold">
                  4
                </span>
                Data Security
              </h2>
              <div className="ml-0 sm:ml-13 space-y-4 text-white/70">
                <p>
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encrypted data transmission (SSL/TLS)</li>
                  <li>Secure cloud storage with access controls</li>
                  <li>Regular security audits and monitoring</li>
                  <li>Employee training on data protection</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission over the internet is 100% secure. While we strive to protect
                  your information, we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 text-lg font-bold">
                  5
                </span>
                Your Rights & Choices
              </h2>
              <div className="ml-0 sm:ml-13 space-y-4 text-white/70">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Access:</strong> Request a copy of your personal information</li>
                  <li><strong className="text-white">Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong className="text-white">Deletion:</strong> Request deletion of your personal data (subject to legal obligations)</li>
                  <li><strong className="text-white">Opt-Out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong className="text-white">Data Portability:</strong> Receive your data in a portable format</li>
                  <li><strong className="text-white">Object:</strong> Object to certain processing of your information</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:hello@echopulse.com" className="text-orange-500 hover:text-orange-400">
                    hello@echopulse.com
                  </a>
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 text-lg font-bold">
                  6
                </span>
                Data Retention
              </h2>
              <div className="ml-0 sm:ml-13 space-y-4 text-white/70">
                <p>
                  We retain your information for as long as necessary to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide our services and fulfill your requests</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Resolve disputes and enforce our agreements</li>
                  <li>Maintain business records for operational purposes</li>
                </ul>
                <p className="mt-4">
                  Project files are typically retained for 90 days after delivery, unless otherwise agreed. After
                  this period, files are securely deleted.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 text-lg font-bold">
                  7
                </span>
                Cookies & Tracking
              </h2>
              <div className="ml-0 sm:ml-13 space-y-4 text-white/70">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong className="text-white">Analytics Cookies:</strong> Help us understand usage patterns</li>
                  <li><strong className="text-white">Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your browser settings. However, disabling cookies may limit
                  some website functionality.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 text-lg font-bold">
                  8
                </span>
                Children&apos;s Privacy
              </h2>
              <div className="ml-0 sm:ml-13 space-y-4 text-white/70">
                <p>
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect
                  personal information from children. If you believe we have inadvertently collected such information,
                  please contact us immediately.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 text-lg font-bold">
                  9
                </span>
                International Data Transfers
              </h2>
              <div className="ml-0 sm:ml-13 space-y-4 text-white/70">
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure
                  appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 text-lg font-bold">
                  10
                </span>
                Changes to Privacy Policy
              </h2>
              <div className="ml-0 sm:ml-13 space-y-4 text-white/70">
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an
                  updated &quot;Last Updated&quot; date. We encourage you to review this policy periodically. Your continued
                  use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12 p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-2xl border border-orange-500/20">
              <h3 className="text-xl font-bold text-white mb-3">Privacy Questions or Concerns?</h3>
              <p className="text-white/70 mb-4">
                If you have questions about this Privacy Policy or how we handle your information, please contact us:
              </p>
              <div className="space-y-2 text-white/70 mb-4">
                <p>Email: <a href="mailto:hello@echopulse.com" className="text-orange-500 hover:text-orange-400">hello@echopulse.com</a></p>
              </div>
              <Link
                href="/#book-call"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
