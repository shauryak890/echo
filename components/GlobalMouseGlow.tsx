"use client";

import { useEffect, useState } from "react";

export default function GlobalMouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          background: "radial-gradient(circle, rgba(247, 125, 43, 0.15) 0%, rgba(247, 125, 43, 0.05) 40%, transparent 70%)",
          filter: "blur(40px)",
          transform: "translate3d(0, 0, 0)",
          willChange: "left, top",
        }}
      />
    </div>
  );
}
