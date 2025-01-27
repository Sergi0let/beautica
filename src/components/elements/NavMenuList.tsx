"use client";

import { navMenuList } from "@/constants";

import { cn } from "@/lib/utils";
import { NavMenuItemType } from "@/types/common-types";
import { usePathname } from "next/navigation";
import { StarIcon } from "../icons";

export const NavMenuList = () => {
  const pathname = usePathname();
  const segment = pathname.split("/")[1] ? "servesPage" : "mainPage";
  const menuData: NavMenuItemType[] = navMenuList[segment];
  return (
    <nav className="hidden h-full w-full justify-center min-[1540px]:flex">
      <ul className="h-full w-fit flex-1 items-center justify-center min-[1540px]:mr-4 min-[1540px]:flex">
        {menuData.map(({ name, link }) => (
          <li key={link} className="header-item">
            <a href={link} className="header-link group">
              {link === "/cosmetics" && <StarIcon className="header-link-icon" />}
              <span
                className={cn(
                  "header-link-text",
                  link === "/cosmetics" && "ml-1 !text-secondary group-hover:text-primary",
                )}
              >
                {name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
