"use client";

import { beforAfterDataType } from "@/types/common-types";
import { DialogTitle } from "@radix-ui/react-dialog";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";

export const BeforeAfterList = ({ data, slug }: { data: beforAfterDataType[]; slug: string }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dialogRefs = useRef<(HTMLDialogElement | null)[]>([]);

  const refList = useRef<HTMLUListElement>(null);
  const isTabletOrLarger = useMediaQuery({ minWidth: 1024 });
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const handleMouseEnter = (index: number) => {
    if (isMobile) return;

    setHoveredIndex(index);
    const dialog = dialogRefs.current[index];
    if (dialog) {
      gsap.fromTo(dialog, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleMouseLeave = (index: number) => {
    if (isMobile) return;
    const dialog = dialogRefs.current[index];
    if (dialog) {
      gsap.to(dialog, {
        opacity: 0,
        scale: 0,
        duration: 0,
        ease: "power2.in",
        onComplete: () => setHoveredIndex(null),
      });
    } else {
      setHoveredIndex(null);
    }
  };

  useEffect(() => {
    if (refList.current) {
      const items = refList.current.children;

      gsap.killTweensOf(items);

      gsap.fromTo(
        items,
        { y: 20, rotateZ: -10, opacity: 0 },
        { y: 0, rotateZ: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
      );
    }
  }, [data]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative">
      <ul className="before-list" ref={refList}>
        {data?.map(({ name, imgUrl }, index) => {
          if ((index === 4 || index === 10) && isDesktop) {
            return <li key={index} className="before-list-item w-fit" />;
          }
          return (
            <li
              key={index}
              className="before-list-item w-[140px]"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {isTabletOrLarger ? (
                <div className="group relative">
                  <div className="before-group-image-container hover:opacity-50">
                    <Image src={`/${imgUrl}`} className="size-full object-cover" width={140} height={140} alt={name} />
                  </div>
                  {slug === "/" && <p className="before-text-caption">{name}</p>}
                </div>
              ) : (
                <Drawer>
                  <DrawerTrigger className="text-center">
                    <div className="before-drawer-trigger group">
                      <Image
                        src={`/${imgUrl}`}
                        className="size-full object-cover"
                        width={140}
                        height={140}
                        alt={name}
                      />
                    </div>
                    {slug === "/" && <p className="text-xs font-medium uppercase">{name}</p>}
                  </DrawerTrigger>

                  <DrawerContent className="px-5">
                    <div className="mx-auto">
                      <div className="md:max-w-[40vh] lg:max-w-max">
                        <Image
                          src={`/${imgUrl}`}
                          className="size-full object-cover"
                          width={280}
                          height={280}
                          alt={name}
                        />
                      </div>
                      <DialogTitle className="pb-5 pt-2 text-center font-robotoCondensed text-2xl font-medium uppercase">
                        {slug === "/" && name}
                      </DialogTitle>
                    </div>
                  </DrawerContent>
                </Drawer>
              )}
            </li>
          );
        })}
      </ul>

      {data.map((item, index) => (
        <dialog
          open={index === hoveredIndex}
          key={index}
          className="pointer-events-none absolute left-0 top-1/2 z-10 -translate-y-1/2"
          ref={(el) => {
            dialogRefs.current[index] = el;
          }}
        >
          <figure className="relative bg-white p-4 lg:w-[32vw] xl:w-[22vw]">
            <div className="w-full">
              <Image
                src={`/${item.imgUrl}`}
                alt={item.name}
                className="size-full object-cover"
                width={320}
                height={320}
              />
            </div>
            {slug === "/" && (
              <figcaption className="text-muted-foreground mt-4 text-center text-sm">{item.name}</figcaption>
            )}
          </figure>
        </dialog>
      ))}
    </div>
  );
};
