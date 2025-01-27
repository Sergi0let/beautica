"use client";

import { BtnOrLink, BurgerIcon, Contacts, LogoIcon, Sheet, SheetContent, SheetTrigger, StarIcon } from "@/components";
import navbar from "@/data/navbar.json";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";

type MobMenuProps = {
  className?: string;
};

export const MobMenu = ({ className }: MobMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);
  return (
    <div className={className}>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <BurgerIcon className="h-4 w-6 transition hover:stroke-primary" />
        </SheetTrigger>
        <SheetContent className="flex w-80 flex-col overflow-auto bg-white">
          <DialogTitle className="flex-between mb-[6px] border-b border-secondary-75 pb-[14px]">
            <LogoIcon className="w-28" />
          </DialogTitle>
          <ul>
            {navbar.links.map(({ name, link }) => (
              <li key={link}>
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

          <Contacts type="primary" classsName="uppercase flex-1 flex-col-reverse py-[10px] gap-[10px]" />
          <BtnOrLink title="Записатись на прийом" className="mb-8 min-h-8" />
        </SheetContent>
      </Sheet>
    </div>
  );
};
