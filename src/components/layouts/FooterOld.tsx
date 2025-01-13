import { BtnInstagram, BtnOrLink, Contacts, GearSmIcon, LogoFooterIcon } from "@/components";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="wrap-secondary mb-6">
      <div>
        <div className="pb-[var(--64-109)] pt-[var(--64-120)] text-center text-title-footer leading-none">
          <div className="relative">
            <h2 data-fade>
              Підкресліть <span className="relative z-10 mt-2 block sm:mt-0 sm:inline">свою</span>
            </h2>
            <div className="relative z-10 mt-[var(--8-43)] flex items-center justify-center gap-2 font-sourceSerifPro">
              <GearSmIcon className="size-[var(--24-65)]" />
              чарівність
              <GearSmIcon className="size-[var(--24-65)]" />
            </div>
            <Image className="img-footer" src="/footer/1.webp" alt="Girl in front" width={169} height={207} />
          </div>
          <BtnOrLink title="Записатись на прийом" className="mt-[var(--32-28)]" to="/" />
        </div>
        <hr className="bg-white opacity-50" />
      </div>
      <div className="flex flex-col py-6 md:flex-row md:items-center md:justify-between">
        <Link href="/" aria-label="На головну сторінку">
          <LogoFooterIcon className="w-[var(--131-161)]" />
        </Link>

        <nav className="flex flex-col space-y-3 md:flex-row md:gap-4 md:space-y-0">
          <Contacts
            type="secondary"
            classsName="mt-5 space-y-3 md:space-y-0 uppercase md:mt-0 flex-col md:flex-row font-normal md:font-semibold"
          />
          <div className="flex items-center space-x-2">
            <BtnInstagram />
            <span className="md:hidden">INSTAGRAM</span>
          </div>
        </nav>
      </div>
    </footer>
  );
};
