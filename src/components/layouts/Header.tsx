import { Contacts, LogoIcon, MobMenu, Socials, StarIcon } from "@/components";
import navbar from "@/data/navbar.json";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 h-[60px] border-secondary/40 bg-white md:h-[80px] md:border-b">
      <div className="wrap-primary flex h-full items-center gap-4 overflow-hidden">
        <Link
          href={"/"}
          aria-label="На головну"
          className="w-full flex-1 min-[1400px]:max-w-[161px] min-[1400px]:flex-shrink-0"
        >
          <LogoIcon className="w-[113px] md:max-w-[161px]" />
        </Link>
        <ul className="hidden h-full flex-1 items-center justify-between gap-6 min-[1400px]:mr-4 min-[1400px]:flex">
          {navbar.links.map(({ name, link }) => (
            <li key={link} className="header-item flex-1">
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
        <Socials type="primary" className="" />
        <MobMenu className="min-[1400px]:hidden" />
      </div>
      <div className="line" />
    </header>
  );
};
