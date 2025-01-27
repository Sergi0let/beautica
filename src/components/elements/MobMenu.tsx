"use client";

import { BtnOrLink, BurgerIcon, Contacts, LogoIcon, Sheet, SheetContent, SheetTrigger, StarIcon } from "@/components";
import { navMenuList, servesTitle } from "@/constants";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type MobMenuProps = {
  className?: string;
};

export const MobMenu = ({ className }: MobMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectData = Object.entries(servesTitle);
  const pathname = usePathname();
  const linkData = navMenuList[pathname.split("/")[1] ? "servesPage" : "mainPage"];

  const closeSheet = () => setIsOpen(false);

  return (
    <div className={className}>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <BurgerIcon className="h-4 w-6 transition hover:stroke-primary" />
        </SheetTrigger>
        <SheetContent className="flex w-80 flex-col overflow-auto bg-white">
          <DialogTitle className="flex-between border-b border-secondary-75 pb-[14px]">
            <LogoIcon className="w-28" />
          </DialogTitle>
          <div>
            {selectData
              .filter((elem) => !elem.includes(pathname.split("/")[1]))
              .map(([link, serve], index) => (
                <Link
                  onClick={closeSheet}
                  href={`/${link.toLowerCase()}`}
                  key={index}
                  className="group flex cursor-pointer items-center py-[10px]"
                >
                  <span className="flex-1 font-medium uppercase text-primary transition group-hover:text-secondary">
                    {serve}
                  </span>
                  <ChevronRight size={18} className="text-secondary" />
                </Link>
              ))}
          </div>
          <ul className="border-b border-t border-secondary-75 py-4">
            {linkData.map(({ link, name }, index) => (
              <li key={index}>
                <a
                  href={link}
                  onClick={closeSheet}
                  type="button"
                  className="group flex cursor-pointer items-center py-[10px]"
                >
                  {link === "/cosmetics" && (
                    <StarIcon className="size-5 fill-secondary transition group-hover:fill-primary" />
                  )}
                  <span
                    className={cn(
                      "font-medium uppercase text-primary transition group-hover:text-secondary",
                      link === "/cosmetics" && "ml-1 text-secondary group-hover:text-primary",
                    )}
                  >
                    {name}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <Contacts
            type="primary"
            classsName="uppercase flex-1 border-b border-secondary-75 flex-col-reverse pt-[10px] pb-6 gap-[10px]"
          />
          <BtnOrLink title="Записатись на прийом" className="mb-8 min-h-8" />
        </SheetContent>
      </Sheet>
    </div>
  );
};
