"use client";

import { useEffect, useRef, useState } from "react";

interface StickyContainerProps {
  children: React.ReactNode;
  boundaryId: string;
  offsetTop?: number;
  className?: string;
}

export default function StickyContainer({ 
  children, 
  boundaryId, 
  offsetTop = 112,
  className = "",
}: StickyContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isAbsolute, setIsAbsolute] = useState(false);
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      const boundary = document.getElementById(boundaryId);
      const placeholder = placeholderRef.current;
      const container = containerRef.current;
      
      if (!boundary || !placeholder || !container) return;

      const boundaryRect = boundary.getBoundingClientRect();
      const placeholderRect = placeholder.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      
      // Set width to match placeholder
      setWidth(placeholderRect.width);
      
      // Check if we've scrolled past the start point
      const shouldBeFixed = placeholderRect.top <= offsetTop;
      
      // Check if we've scrolled past the boundary
      const shouldBeAbsolute = boundaryRect.bottom <= containerHeight + offsetTop;
      
      if (shouldBeAbsolute) {
        setIsFixed(false);
        setIsAbsolute(true);
      } else if (shouldBeFixed) {
        setIsFixed(true);
        setIsAbsolute(false);
      } else {
        setIsFixed(false);
        setIsAbsolute(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [boundaryId, offsetTop]);

  return (
    <>
      <div ref={placeholderRef} className={className} style={{ visibility: isFixed || isAbsolute ? "hidden" : "visible" }}>
        <div ref={containerRef}>
          {children}
        </div>
      </div>
      {(isFixed || isAbsolute) && (
        <div
          className={className}
          style={{
            position: isFixed ? "fixed" : "absolute",
            top: isFixed ? `${offsetTop}px` : "auto",
            bottom: isAbsolute ? "0" : "auto",
            width: width,
          }}
        >
          {children}
        </div>
      )}
    </>
  );
}
