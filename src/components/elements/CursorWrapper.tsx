"use client";
import { useMediaQuery } from "react-responsive";
import { CustomCursor } from "./CustomCursor";

export const CursorWrapper = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  if (isMobile) {
    return null;
  }
  return (
    <div>
      <CustomCursor />
    </div>
  );
};
