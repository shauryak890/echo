import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { sanityClient, urlFor } from "../lib/sanityClient";
import BlogFooter from "../components/BlogFooter";
import CalendlyModal from "../components/CalendlyModal";

const BlogCard = ({ blog }) => {
  if (!blog) {
    return (
      <div className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-gray-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="aspect-video bg-gray-200 animate-pulse" />
        <div className="p-6">
          <div className="h-4 w-24 bg-gray-200 rounded mb-3 animate-pulse" />
          <div className="h-6 w-full bg-gray-200 rounded mb-2 animate-pulse" />
          <div className="h-6 w-3/4 bg-gray-200 rounded mb-4 animate-pulse" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/blogs/${blog.slug}`}
      className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-gray-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {blog.mainImage ? (
        <img
          src={urlFor(blog.mainImage).width(1200).height(675).fit("crop").url()}
          alt={blog.title}
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-50" />
      )}
      <div className="p-6">
        {blog.publishedAt && (
          <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
            {new Date(blog.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        )}
        <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
          {blog.title}
        </h3>
        {blog.excerpt && (
          <p className="text-gray-600 text-sm line-clamp-3">{blog.excerpt}</p>
        )}
        <div className="mt-4 flex items-center gap-2 text-orange-500 text-sm font-medium">
          <span>Read More</span>
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

const BlogsPage = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog"] | order(publishedAt desc) {
          title,
          "slug": slug.current,
          excerpt,
          publishedAt,
          mainImage
        }`
      )
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <BlogFooter />
      <div className="min-h-screen bg-gray-50 font-['Source_Serif_4',serif]">
        {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-6 border border-orange-200">
              <svg
                className="w-4 h-4 text-orange-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
              </svg>
              <span className="text-orange-600 font-semibold text-sm">
                BLOG
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              Insights & Resources
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert tips, industry insights, and strategies to help you elevate
              your brand's digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {isLoading || !blogs ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[...Array(6)].map((_, i) => (
                <BlogCard key={i} blog={null} />
              ))}
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-orange-100 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No posts yet
              </h3>
              <p className="text-gray-600">
                Check back soon for new content.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {blogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src="/Icon.png" alt="EchoPulse" className="w-10 h-10 rounded-lg object-contain" />
                <span className="text-xl font-bold text-white">EchoPulse</span>
              </Link>
              <p className="text-gray-400 text-sm mb-4">
                Amplify your brand with professional content creation
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/echopulse.media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7.177a4.823 4.823 0 100 9.646 4.823 4.823 0 000-9.646zm0 7.853a3.03 3.03 0 110-6.06 3.03 3.03 0 010 6.06zM20.538 6.323a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/echo-pulse-media/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077B5] transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">Home</Link></li>
                <li><Link to="/#our-work" className="text-gray-400 hover:text-orange-500 transition-colors">Our Work</Link></li>
                <li><Link to="/#how-we-work" className="text-gray-400 hover:text-orange-500 transition-colors">How We Work</Link></li>
                <li><Link to="/blogs" className="text-gray-400 hover:text-orange-500 transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/blogs" className="text-gray-400 hover:text-orange-500 transition-colors">Latest Articles</Link></li>
                <li><Link to="/#faq" className="text-gray-400 hover:text-orange-500 transition-colors">FAQ</Link></li>
                <li>
                  <button
                    onClick={() => {
                      const bookingHandler = window.bookCalendly;
                      if (bookingHandler) bookingHandler();
                    }}
                    className="text-gray-400 hover:text-orange-500 transition-colors bg-transparent border-none cursor-pointer p-0 text-sm"
                  >
                    Book a Call
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:hello@echopulse.com" className="text-gray-400 hover:text-orange-500 transition-colors">Email Us</a></li>
                <li><Link to="/#faq" className="text-gray-400 hover:text-orange-500 transition-colors">Support</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} EchoPulse. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/terms" className="text-gray-500 hover:text-orange-500 transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-500 hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
      </div>
      <BlogFooter />
      <CalendlyModal />
    </>
  );
};

export default BlogsPage;
