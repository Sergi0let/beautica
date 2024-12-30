"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";

export const BeforeAfterList = () => {
  const [, setHoveredIndex] = useState<number | null>(null);
  const isTabletOrLarger = useMediaQuery({ minWidth: 768 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ul className="before-list">
      {Array.from({ length: 10 }).map((_, index) => (
        <li key={index} className="before-list-item">
          {isTabletOrLarger ? (
            <div
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="before-group-image-container">
                <Image
                  src="/before-after/1.jpg"
                  className="h-full w-full object-cover brightness-75"
                  width={140}
                  height={140}
                  alt="before"
                />
                <div className="patter-img absolute inset-0 h-full w-full overflow-hidden mix-blend-multiply" />
              </div>
              <p className="before-text-caption">біоревіталізація</p>

              <div className="before-group-hover-content">
                <figure>
                  <Image
                    src="/before-after/1.jpg"
                    className="h-full w-full object-cover"
                    width={280}
                    height={280}
                    alt="before"
                  />
                  <figcaption className="before-figure-caption">біоревіталізація</figcaption>
                </figure>
              </div>
            </div>
          ) : (
            <Drawer>
              <DrawerTrigger>
                <div className="before-drawer-trigger group">
                  <Image
                    src="/before-after/1.jpg"
                    className="h-full w-full object-cover"
                    width={140}
                    height={140}
                    alt="before"
                  />
                  <div className="patter-img absolute inset-0 h-full w-full overflow-hidden mix-blend-multiply" />
                </div>
                <p className="text-xs font-medium uppercase">біоревіталізація</p>
              </DrawerTrigger>

              <DrawerContent className="px-5">
                <figure>
                  <Image
                    src="/before-after/1.jpg"
                    className="h-full w-full object-cover"
                    width={280}
                    height={280}
                    alt="before"
                  />
                  <figcaption className="pb-5 pt-2 text-center text-2xl font-medium uppercase">
                    біоревіталізація
                  </figcaption>
                </figure>
              </DrawerContent>
            </Drawer>
          )}
        </li>
      ))}
    </ul>
  );
};
