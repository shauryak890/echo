import React, { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { sanityClient, urlFor } from "../lib/sanityClient";
import { PortableText } from "@portabletext/react";
import BlogFooter from "../components/BlogFooter";
import CalendlyModal from "../components/CalendlyModal";

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

const portableTextComponents = {
  block: {
    h1: ({ children }) => {
      const id = slugify(children?.toString() || "");
      return <h1 id={id} className="text-3xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">{children}</h1>;
    },
    h2: ({ children }) => {
      const id = slugify(children?.toString() || "");
      return <h2 id={id} className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">{children}</h2>;
    },
    h3: ({ children }) => {
      const id = slugify(children?.toString() || "");
      return <h3 id={id} className="text-xl font-bold text-gray-900 mt-6 mb-3 scroll-mt-24">{children}</h3>;
    },
    h4: ({ children }) => <h4 className="text-lg font-bold text-gray-900 mt-4 mb-2">{children}</h4>,
    normal: ({ children }) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-orange-500 pl-4 my-6 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside mb-4 text-gray-700 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-500 hover:text-orange-400 underline"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || ""}
            className="w-full rounded-xl border border-gray-200 shadow-md"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    video: ({ value }) => {
      if (!value?.url) return null;
      
      // Convert YouTube/Vimeo URLs to embed URLs
      let embedUrl = value.url;
      
      // YouTube
      if (value.url.includes("youtube.com/watch")) {
        const videoId = new URL(value.url).searchParams.get("v");
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      } else if (value.url.includes("youtu.be/")) {
        const videoId = value.url.split("youtu.be/")[1]?.split("?")[0];
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
      // Vimeo
      else if (value.url.includes("vimeo.com/")) {
        const videoId = value.url.split("vimeo.com/")[1]?.split("?")[0];
        embedUrl = `https://player.vimeo.com/video/${videoId}`;
      }

      return (
        <figure className="my-8">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-md">
            <iframe
              src={embedUrl}
              title={value.caption || "Video"}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [sidebarStyle, setSidebarStyle] = useState("fixed");
  const leftSidebarRef = React.useRef(null);
  const rightSidebarRef = React.useRef(null);

  // Handle sidebar position when scrolling past article
  useEffect(() => {
    const handleScroll = () => {
      const moreArticlesSection = document.getElementById("more-articles");
      if (!moreArticlesSection) return;

      const sectionTop = moreArticlesSection.getBoundingClientRect().top;
      const threshold = 150; // Distance from top when sidebars should stop

      if (sectionTop <= threshold) {
        setSidebarStyle("hidden");
      } else {
        setSidebarStyle("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tableOfContents = useMemo(() => {
    if (!blog?.content) return [];
    
    return blog.content
      .filter((block) => block._type === "block" && ["h2", "h3"].includes(block.style))
      .map((block) => {
        const text = block.children?.map((child) => child.text).join("") || "";
        return {
          id: slugify(text),
          text,
          level: block.style,
        };
      });
  }, [blog?.content]);

  useEffect(() => {
    if (tableOfContents.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66%" }
    );

    tableOfContents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tableOfContents]);

  useEffect(() => {
    if (!slug) return;

    sanityClient
      .fetch(
        `*[_type == "blog" && slug.current == $slug][0] {
          title,
          "slug": slug.current,
          excerpt,
          publishedAt,
          author,
          readTime,
          content,
          mainImage
        }`,
        { slug }
      )
      .then((data) => {
        setBlog(data);
        setIsLoading(false);
        
        // Fetch related blogs (4 random articles excluding current)
        sanityClient
          .fetch(
            `*[_type == "blog" && slug.current != $slug] | order(publishedAt desc) [0...4] {
              title,
              "slug": slug.current,
              excerpt,
              publishedAt,
              mainImage
            }`,
            { slug }
          )
          .then((related) => setRelatedBlogs(related || []))
          .catch((err) => console.error("Error fetching related blogs:", err));
      })
      .catch((err) => {
        console.error("Error fetching blog post:", err);
        setIsLoading(false);
      });
  }, [slug]);

  const renderContent = () => {
    if (isLoading || !blog) {
      return (
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse" />
          <div className="h-8" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
        </div>
      );
    }

    if (blog.content) {
      return (
        <div className="prose prose-orange max-w-none">
          <PortableText value={blog.content} components={portableTextComponents} />
        </div>
      );
    }

    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Content not available.</p>
      </div>
    );
  };

  return (
    <>
      <BlogFooter />
      <div className="min-h-screen bg-white font-['Source_Serif_4',serif]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8">
            <div className="inline-flex items-center gap-3">
              <Link
                to="/blogs"
                className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              >
                All Articles
              </Link>
              <span className="text-gray-400 text-lg">/</span>
              <span className="text-sm font-medium text-orange-500">
                {blog?.title ? (blog.title.length > 35 ? blog.title.substring(0, 35) + "..." : blog.title) : "Loading..."}
              </span>
            </div>
          </nav>

          {/* Title & Meta */}
          {isLoading || !blog ? (
            <div className="space-y-4">
              <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
              <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-10 w-4/5 bg-gray-200 rounded animate-pulse" />
              <div className="h-5 w-48 bg-gray-200 rounded animate-pulse mt-6" />
            </div>
          ) : (
            <>
              {blog.category && (
                <div className="inline-flex items-center gap-2 bg-orange-100 px-3 py-1.5 rounded-full mb-4 border border-orange-200">
                  <span className="text-orange-600 font-semibold text-xs uppercase tracking-wider">
                    {blog.category}
                  </span>
                </div>
              )}

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                {blog.title || "Untitled Post"}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                {blog.publishedAt && (
                  <span>
                    {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                )}
                {blog.author && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span>By {blog.author}</span>
                  </>
                )}
                {blog.readTime && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span>{blog.readTime} min read</span>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Featured Image */}
      {(isLoading || blog?.mainImage) && (
        <section className="relative z-10">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {isLoading || !blog ? (
              <div className="aspect-video w-full bg-gray-200 rounded-2xl animate-pulse" />
            ) : blog.mainImage ? (
              <img
                src={urlFor(blog.mainImage).width(1200).height(675).fit("crop").url()}
                alt={blog.title}
                className="aspect-video w-full object-cover rounded-2xl border border-gray-200 shadow-lg"
              />
            ) : null}
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Sidebar - Fixed (Hidden on mobile, visible on lg+) */}
            <aside className={`hidden lg:block fixed left-6 top-28 w-64 z-40 space-y-4 transition-opacity duration-300 ${sidebarStyle === "hidden" ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
              {/* Table of Contents */}
              {tableOfContents.length > 0 && (
                <nav className="bg-white rounded-xl p-5 border border-gray-200 shadow-lg max-h-[calc(100vh-20rem)] overflow-y-auto">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 text-center">
                    Table of Contents
                  </h4>
                  <ul className="space-y-1">
                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className={`block text-sm py-1.5 transition-colors border-l-2 ${
                            item.level === "h3" ? "pl-6" : "pl-3"
                          } ${
                            activeSection === item.id
                              ? "text-orange-500 font-medium border-orange-500 bg-orange-50"
                              : "text-gray-600 hover:text-orange-500 border-transparent hover:border-gray-300"
                          }`}
                        >
                          {item.level === "h3" ? `- ${item.text}` : item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              {/* Share Section */}
              <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-lg">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 text-center">
                  Share
                </h4>
                <div className="flex items-center justify-center gap-2">
                  {/* X (Twitter) */}
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog?.title || "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all"
                    aria-label="Share on X"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1877F2] hover:text-white transition-all"
                    aria-label="Share on Facebook"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0077B5] hover:text-white transition-all"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  {/* Reddit */}
                  <a
                    href={`https://reddit.com/submit?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog?.title || "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#FF4500] hover:text-white transition-all"
                    aria-label="Share on Reddit"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                    </svg>
                  </a>
                  {/* Copy Link */}
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Link copied to clipboard!");
                    }}
                    className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition-all"
                    aria-label="Copy link"
                  >
                    <span className="text-sm font-bold">🔗</span>
                  </button>
                </div>
              </div>
            </aside>

            {/* Fixed CTA Box - Right side */}
            <div className={`hidden lg:block fixed right-6 top-28 w-72 z-40 transition-opacity duration-300 ${sidebarStyle === "hidden" ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
              <div className="bg-gray-100 rounded-2xl p-6 text-center">
                <p className="text-gray-900 font-semibold text-lg mb-4 leading-snug">
                  Ready to amplify your brand's digital presence?
                </p>
                <button
                  onClick={() => {
                    const bookingHandler = window.bookCalendly;
                    if (bookingHandler) bookingHandler();
                  }}
                  className="w-full px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-colors"
                >
                  Book a Strategy Call
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="max-w-3xl mx-auto">
              <article className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {renderContent()}
              </article>

              {/* Tags */}
              {blog?.tags && blog.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Section - Mobile Only */}
              <div className="lg:hidden mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 text-center">
                  Share this article
                </h4>
                <div className="flex items-center justify-center gap-3">
                  {/* X (Twitter) */}
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog?.title || "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all"
                    aria-label="Share on X"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1877F2] hover:text-white transition-all"
                    aria-label="Share on Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0077B5] hover:text-white transition-all"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  {/* Reddit */}
                  <a
                    href={`https://reddit.com/submit?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog?.title || "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#FF4500] hover:text-white transition-all"
                    aria-label="Share on Reddit"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                    </svg>
                  </a>
                  {/* Copy Link */}
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Link copied to clipboard!");
                    }}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition-all"
                    aria-label="Copy link"
                  >
                    <span className="text-base">🔗</span>
                  </button>
                </div>

                {/* Book a Strategy Call - Mobile */}
                <div className="mt-6 p-4 bg-gray-100 rounded-xl text-center">
                  <p className="text-gray-900 font-medium text-sm mb-3">
                    Ready to amplify your brand's digital presence?
                  </p>
                  <button
                    onClick={() => {
                      const bookingHandler = window.bookCalendly;
                      if (bookingHandler) bookingHandler();
                    }}
                    className="w-full px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-colors text-sm"
                  >
                    Book a Strategy Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More from EchoPulse Section */}
      {relatedBlogs.length > 0 && (
        <section id="more-articles" className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              More from EchoPulse
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.slug}
                  to={`/blogs/${relatedBlog.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  {relatedBlog.mainImage ? (
                    <img
                      src={urlFor(relatedBlog.mainImage).width(1200).height(675).fit("crop").url()}
                      alt={relatedBlog.title}
                      className="w-full aspect-video object-cover"
                    />
                  ) : (
                    <div className="w-full aspect-video bg-gradient-to-br from-orange-100 to-orange-50" />
                  )}
                  <div className="p-4">
                    {relatedBlog.publishedAt && (
                      <span className="text-xs text-gray-500">
                        {new Date(relatedBlog.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    )}
                    <h3 className="text-sm font-semibold text-gray-900 mt-1 group-hover:text-orange-500 transition-colors line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-colors"
              >
                More Articles
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

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

export default BlogPost;
