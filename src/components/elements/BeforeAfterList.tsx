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
    <ul className="grid grid-cols-2 gap-4 border-t border-secondary-75 pt-[var(--20-60)] md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <li key={index} className="relative justify-items-center md:justify-items-stretch">
          {isTabletOrLarger ? (
            <div
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-[140px] w-[140px] transition-all duration-300 ease-in-out group-hover:opacity-0">
                <Image
                  src="/before-after/1.jpg"
                  className="h-full w-full object-cover brightness-75"
                  width={140}
                  height={140}
                  alt="before"
                />
                <div className="patter-img absolute inset-0 h-full w-full overflow-hidden mix-blend-multiply" />
              </div>
              <p className="mt-2 text-xs font-medium uppercase transition-all duration-300 ease-in-out group-hover:opacity-0">
                біоревіталізація
              </p>

              <div className="absolute left-0 top-0 z-10 h-auto w-full scale-0 transform border border-secondary bg-white p-3 opacity-0 shadow-lg transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-100 lg:p-5">
                <figure>
                  <Image
                    src="/before-after/1.jpg"
                    className="h-full w-full object-cover"
                    width={280}
                    height={280}
                    alt="before"
                  />
                  <figcaption className="pt-2 text-center text-sm font-medium uppercase lg:text-2xl">
                    біоревіталізація
                  </figcaption>
                </figure>
              </div>
            </div>
          ) : (
            <Drawer>
              <DrawerTrigger>
                <div className="group relative h-[140px] w-[140px] brightness-90">
                  <Image
                    src="/before-after/1.jpg"
                    className="h-full w-full object-cover"
                    width={140}
                    height={140}
                    alt="before"
                  />
                  <div className="patter-img absolute inset-0 h-full w-full overflow-hidden mix-blend-multiply" />
                </div>
                <p className="mt-2 text-xs font-medium uppercase">біоревіталізація</p>
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
