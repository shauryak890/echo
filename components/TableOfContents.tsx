"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TocItem[];
}

const MAX_VISIBLE_ITEMS = 7;

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldCollapse = headings.length > MAX_VISIBLE_ITEMS;
  const visibleHeadings = isExpanded ? headings : headings.slice(0, MAX_VISIBLE_ITEMS);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -80% 0px",
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className="w-full">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Table of Contents
      </h3>
      <div className="relative">
        <ul className="space-y-1 text-sm">
          {visibleHeadings.map((heading) => {
            const isActive = activeId === heading.id;
            const isHovered = hoveredId === heading.id;
            const showOrange = isActive || isHovered;

            return (
              <li key={heading.id} className="relative">
                <div
                  className={`absolute left-0 top-0 bottom-0 w-0.5 transition-colors duration-200 ${
                    showOrange ? "bg-orange-500" : "bg-gray-200"
                  }`}
                />
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleClick(e, heading.id)}
                  onMouseEnter={() => setHoveredId(heading.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`block py-1.5 pl-4 leading-snug transition-colors duration-200 ${
                    heading.level === 3 ? "pl-6" : "pl-4"
                  } ${
                    isActive
                      ? "text-gray-900 font-medium"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {heading.level === 3 ? `- ${heading.text}` : heading.text}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Expand/Collapse button with blur effect */}
        {shouldCollapse && !isExpanded && (
          <div className="relative mt-1">
            <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            <button
              onClick={() => setIsExpanded(true)}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors pl-4 py-1"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <span>Show {headings.length - MAX_VISIBLE_ITEMS} more</span>
            </button>
          </div>
        )}

        {/* Collapse button when expanded */}
        {shouldCollapse && isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors pl-4 py-1 mt-1"
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span>Show less</span>
          </button>
        )}
      </div>
    </nav>
  );
}
