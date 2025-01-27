"use client";

import { servesTitle } from "@/constants";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ServesIcon } from "../icons";

export const SelectServes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectData = Object.entries(servesTitle);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!selectData) return null;

  return (
    <div
      className="flex-center group relative h-full"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      ref={dropdownRef}
    >
      <div className="flex h-full cursor-pointer items-center justify-center" onClick={handleToggle}>
        <ServesIcon className="mr-2 size-5" />
        <span className="mr-1 text-sm font-medium uppercase">Послуги</span>
        <ChevronDown className={`text-secondary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </div>
      <div
        className={`absolute left-5 top-5 z-10 w-[300px] border border-secondary-75 bg-white p-1 transition-all duration-300 ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        {selectData
          .filter((elem) => !elem.includes(pathname.split("/")[1]))
          .map(([link, serve], index) => (
            <Link
              href={`/${link.toLowerCase()}`}
              key={index}
              className="group flex cursor-pointer items-center rounded-sm p-2 transition-colors duration-700 hover:bg-secondary-75"
            >
              <span className="flex-1 text-sm font-medium uppercase">{serve}</span>
              <ChevronRight size={18} className="text-secondary" />
            </Link>
          ))}
      </div>
    </div>
  );
};
