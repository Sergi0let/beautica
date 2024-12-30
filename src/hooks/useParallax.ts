"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useParallax = (maxTranslate: number = 10) => {
  const [translate, setTranslate] = useState("translate(0px, 0px)");
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const xPercentage = clientX / window.innerWidth;
      const yPercentage = clientY / window.innerHeight;
      const translateX = (xPercentage - 0.5) * maxTranslate * 2;
      const translateY = (yPercentage - 0.5) * maxTranslate * 2;
      setTranslate(`translate(${translateX}px, ${translateY}px)`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [maxTranslate]);

  return isDesktop ? translate : "translate(-3px, -2px)";
};
