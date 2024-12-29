"use client";

import { useEffect, useState } from "react";

export const useParallax = (maxTranslate: number = 10) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateTranslate = () => {
    const xPercentage = mousePosition.x / window.innerWidth;
    const yPercentage = mousePosition.y / window.innerHeight;
    const translateX = (xPercentage - 0.5) * maxTranslate * 2;
    const translateY = (yPercentage - 0.5) * maxTranslate * 2;
    return `translate(${translateX}px, ${translateY}px)`;
  };

  return calculateTranslate;
};
