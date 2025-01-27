import { BtnInstagram, Contacts, LogoIcon, MobMenu, NavMenuList, SelectServes } from "@/components";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 h-[60px] border-secondary/40 bg-white md:h-[80px] md:border-b">
      <div className="wrap-primary flex h-full items-center justify-between">
        <div className="flex h-full flex-1 items-center justify-start">
          <Link href={"/"} aria-label="На головну" className="mr-10">
            <LogoIcon className="w-[113px] md:w-[161px]" />
          </Link>
          <div className="relative mr-[47px] hidden h-full min-w-[155px] border-l border-r border-secondary-75 lg:block">
            <SelectServes />
          </div>
        </div>
        <NavMenuList />
        <div className="hidden md:flex">
          <Contacts type="primary" classsName="flex-row-reverse uppercase text-sm" />
        </div>
        <div className="ml-6">
          <BtnInstagram />
        </div>
        <MobMenu className="ml-3 min-[1540px]:hidden" />
      </div>
      <div className="line" />
    </header>
  );
};
