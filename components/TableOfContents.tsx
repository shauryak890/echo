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

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
      <ul className="space-y-1 text-sm">
        {headings.map((heading) => {
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
    </nav>
  );
}
