"use client";
import React, { useEffect, useState } from "react";
export default function MouseMove() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleMouseMove = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mousePosition, scrollPosition]);
  return (
    <div
      className="pointer"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${
          mousePosition.y + scrollPosition
        }px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    ></div>
  );
}
