import React from 'react';
import { useMousePosition } from './useMousePosition';

const MouseLight = ({ containerRef }) => {
  const { x, y } = useMousePosition();

  const containerRect = containerRef.current?.getBoundingClientRect();
  const adjustedX = x - (containerRect?.left || 0);
  const adjustedY = y - (containerRect?.top || 0);

  return (
    <div
      className="pointer-events-none absolute inset-0 transition duration-300"
      style={{
        zIndex: 0,
        background: `radial-gradient(600px at ${adjustedX}px ${adjustedY}px, rgba(255, 255, 255, 0.15), transparent 80%)`,
      }}
    ></div>
  );
};

export default MouseLight;