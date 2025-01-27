import { BtnInstagram, Contacts, LogoIcon, MobMenu, SelectServes, StarIcon } from "@/components";
import navbar from "@/data/navbar.json";
import { cn } from "@/lib/utils";
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
        <ul className="hidden h-full w-fit flex-1 items-center justify-start min-[1540px]:mr-4 min-[1540px]:flex">
          {navbar.links.map(({ name, link }) => (
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
