import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { sanityClient, urlFor, BLOG_POST_QUERY, RELATED_BLOGS_QUERY, type BlogPost } from "@/lib/sanity";
import TableOfContents from "@/components/TableOfContents";
import ShareButtons from "@/components/ShareButtons";
import BlogHeader from "@/components/BlogHeader";
import BlogCTA from "@/components/BlogCTA";
import StickyContainer from "@/components/StickyContainer";

// Revalidate every 60 seconds to fetch new content from Sanity
export const revalidate = 60;

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogPost(slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found | EchoPulse",
    };
  }

  return {
    title: `${blog.title} | EchoPulse Blog`,
    description: blog.excerpt || `Read ${blog.title} on the EchoPulse blog.`,
    openGraph: {
      title: blog.title,
      description: blog.excerpt || `Read ${blog.title} on the EchoPulse blog.`,
      type: "article",
      publishedTime: blog.publishedAt,
      authors: blog.author ? [blog.author] : undefined,
      images: blog.mainImage ? [urlFor(blog.mainImage).width(1200).height(630).url()] : undefined,
    },
  };
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    return await sanityClient.fetch(BLOG_POST_QUERY, { slug });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

async function getRelatedBlogs(slug: string): Promise<BlogPost[]> {
  try {
    return await sanityClient.fetch(RELATED_BLOGS_QUERY, { slug });
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return [];
  }
}

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractHeadings(content: any[]): TocItem[] {
  if (!content) return [];
  
  const headings: TocItem[] = [];
  
  content.forEach((block) => {
    if (block._type === "block" && ["h1", "h2", "h3"].includes(block.style)) {
      const text = block.children
        ?.map((child: { text?: string }) => child.text || "")
        .join("") || "";
      
      if (text) {
        headings.push({
          id: slugify(text),
          text,
          level: parseInt(block.style.replace("h", ""), 10),
        });
      }
    }
  });
  
  return headings;
}

const portableTextComponents = {
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => {
      const id = slugify(String(children || ""));
      return <h1 id={id} className="text-3xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">{children}</h1>;
    },
    h2: ({ children }: { children?: React.ReactNode }) => {
      const id = slugify(String(children || ""));
      return <h2 id={id} className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">{children}</h2>;
    },
    h3: ({ children }: { children?: React.ReactNode }) => {
      const id = slugify(String(children || ""));
      return <h3 id={id} className="text-xl font-bold text-gray-900 mt-6 mb-3 scroll-mt-24">{children}</h3>;
    },
    h4: ({ children }: { children?: React.ReactNode }) => <h4 className="text-lg font-bold text-gray-900 mt-4 mb-2">{children}</h4>,
    normal: ({ children }: { children?: React.ReactNode }) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-orange-500 pl-4 my-6 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">{children}</ul>,
    number: ({ children }: { children?: React.ReactNode }) => <ol className="list-decimal list-inside mb-4 text-gray-700 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => <li>{children}</li>,
    number: ({ children }: { children?: React.ReactNode }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
    link: ({ value, children }: { value?: { href?: string }; children?: React.ReactNode }) => (
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
    image: ({ value }: { value?: { asset?: unknown; alt?: string; caption?: string } }) => {
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
    video: ({ value }: { value?: { url?: string; title?: string } }) => {
      if (!value?.url) return null;
      return (
        <div className="my-8 aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-md">
          <video
            src={value.url}
            controls
            className="w-full h-full object-cover"
            title={value.title || "Video"}
          />
        </div>
      );
    },
  },
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogPost(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = await getRelatedBlogs(slug);
  const headings = extractHeadings(blog.content || []);

  return (
    <div className="min-h-screen bg-white">
      {/* Blog Header/Navbar */}
      <BlogHeader />

      {/* Main Article Section with 3-column layout */}
      <section id="article-container" className="relative bg-white pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 items-start">
            {/* Left Column - Table of Contents (Desktop) */}
            <div className="hidden lg:block w-56 shrink-0">
              <StickyContainer boundaryId="article-container" offsetTop={112} className="max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-hide">
                {headings.length > 0 && <TableOfContents headings={headings} />}
              </StickyContainer>
            </div>

            {/* Center Column - Main Content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              {/* Breadcrumb Navigation */}
              <nav className="mb-8">
                <div className="inline-flex items-center gap-3">
                  <Link
                    href="/blogs"
                    className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    All Articles
                  </Link>
                  <span className="text-gray-400 text-lg">/</span>
                  <span className="text-sm font-medium text-orange-500">
                    {blog.title.length > 35 ? blog.title.substring(0, 35) + "..." : blog.title}
                  </span>
                </div>
              </nav>

              {/* Title & Meta */}
              {blog.category && (
                <div className="inline-flex items-center gap-2 bg-orange-100 px-3 py-1.5 rounded-full mb-4 border border-orange-200">
                  <span className="text-orange-600 font-semibold text-xs uppercase tracking-wider">
                    {blog.category}
                  </span>
                </div>
              )}

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                {blog.title}
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

              {/* Share Buttons */}
              <div className="mt-6 mb-10">
                <ShareButtons 
                  url={`https://echopulse.media/blogs/${slug}`} 
                  title={blog.title} 
                />
              </div>

              {/* Featured Image */}
              {blog.mainImage && (
                <div className="mb-10">
                  <Image
                    src={urlFor(blog.mainImage).width(1200).height(675).fit("crop").url()}
                    alt={blog.title}
                    width={1200}
                    height={675}
                    className="aspect-video w-full object-cover rounded-2xl border border-gray-200 shadow-lg"
                    priority
                  />
                </div>
              )}

              {/* Article Content */}
              <article className="prose prose-orange max-w-none text-gray-700 text-base sm:text-lg leading-relaxed">
                {blog.content ? (
                  <PortableText value={blog.content} components={portableTextComponents} />
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">Content not available.</p>
                  </div>
                )}
              </article>

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
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

              {/* Mobile CTA - shown after article on mobile/tablet */}
              <div className="lg:hidden mt-10">
                <BlogCTA />
              </div>
            </div>

            {/* Right Column - CTA (Desktop) */}
            <div className="hidden lg:block w-64 shrink-0">
              <StickyContainer boundaryId="article-container" offsetTop={112}>
                <BlogCTA />
              </StickyContainer>
            </div>
          </div>
        </div>
      </section>

      {/* More from EchoPulse Section */}
      {relatedBlogs.length > 0 && (
        <section id="more-articles" className="py-16 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              More from EchoPulse
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.slug}
                  href={`/blogs/${relatedBlog.slug}`}
                  className="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-all hover:border-gray-300"
                >
                  {relatedBlog.category && (
                    <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                      {relatedBlog.category}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mt-3 mb-4 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {relatedBlog.title}
                  </h3>
                  {relatedBlog.excerpt && (
                    <p className="text-base text-gray-600 line-clamp-2 leading-relaxed">
                      {relatedBlog.excerpt}
                    </p>
                  )}
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/blogs"
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <img src="/Icon.png" alt="EchoPulse" className="w-10 h-10 rounded-lg object-contain" />
                <span className="text-xl font-bold text-white">EchoPulse</span>
              </Link>
              <p className="text-gray-400 text-sm mb-4">
                Amplify your brand with professional content creation
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/echopulse.media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 transition-all"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/echo-pulse-media/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0077B5] transition-all"
                  aria-label="LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors">Home</Link></li>
                <li><Link href="/#our-work" className="text-gray-400 hover:text-orange-500 transition-colors">Our Work</Link></li>
                <li><Link href="/blogs" className="text-gray-400 hover:text-orange-500 transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blogs" className="text-gray-400 hover:text-orange-500 transition-colors">Latest Articles</Link></li>
                <li><Link href="/#faq" className="text-gray-400 hover:text-orange-500 transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:hello@echopulse.com" className="text-gray-400 hover:text-orange-500 transition-colors">Email Us</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} EchoPulse. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/terms" className="text-gray-500 hover:text-orange-500 transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-orange-500 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
