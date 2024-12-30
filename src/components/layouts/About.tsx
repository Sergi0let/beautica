import { CertificateIcon, FlowerIcon, ParallaxMask, StarsIcon } from "@/components";
import Image from "next/image";

export const About = () => {
  return (
    <section className="wrap-secondary">
      <div className="relative pb-[var(--12-40)] pt-[var(--32-72)]">
        <div className="grid grid-cols-1 gap-3 md:-mb-16 md:grid-cols-3 md:gap-14">
          <div className="about-info">
            Nут велике фото та інфа про віку Lorem Ipsum is <i>siAs been the</i> industrys standard dummy text ever
            since ever <i>since as</i> been the industrys standard dummy text ever since
          </div>
          <div className="row-start-1 md:row-auto">
            <h2 id="about" className="scroll-mt-16 text-center text-title md:scroll-mt-20">
              Про мене
            </h2>
          </div>
        </div>
        <div className="hidden md:block md:h-[var(--180-590)]"></div>
        <div className="about-photo">
          <div className="relative">
            <Image src="/about/1.webp" alt="Photo Viki" width={488} height={688} className="relative z-10" />
            <ParallaxMask />
          </div>
        </div>
        <ul className="about-items">
          <li className="about-item">
            <CertificateIcon className="about-item-icon" />
            <p>Сертифікований спеціаліст із глибокими знаннями та практикою.</p>
          </li>
          <li className="about-item">
            <StarsIcon className="about-item-icon" />
            <p>Забезпечення безпеки та зручності кожної процедури.</p>
          </li>
          <li className="about-item">
            <FlowerIcon className="about-item-icon" />
            <p>Природний вигляд без зайвих змін, завдяки сучасним технікам.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
