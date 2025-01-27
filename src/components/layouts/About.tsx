import { CertificateIcon, FlowerIcon, ParallaxMask, StarsIcon } from "@/components";
import Image from "next/image";

export const About = () => {
  return (
    <section className="wrap-secondary mb-10 md:mb-20">
      <div className="relative pb-[var(--12-40)] pt-[var(--32-72)]">
        <div className="absolute grid w-fit grid-cols-1 gap-3 md:-mb-16 md:grid-cols-3 md:gap-4">
          <div data-fade className="about-info">
            <p className="max-w-[456px]">
              Я - Вікторія, консультант з краси й здоров’я твоєї шкіри. Здобула{" "}
              <i>медичну та вищу фармацевтичну освіту</i>. Тренер <i>Alma lesers Ukraine</i>.{" "}
            </p>
            <p className="mt-5 max-w-[456px]">
              Працюю в косметології <i>понад 10 років</i>, тому знаю, як підкреслити твою вроду та зберегти її на довгі
              роки.
            </p>
          </div>
          <div className="row-start-1 md:row-auto">
            <h2 id="about" data-fade className="scroll-mt-16 text-center text-title md:scroll-mt-20">
              Про мене
            </h2>
          </div>
        </div>
        <div className="block h-[460px] md:h-[var(--430-588)]"></div>
        <div className="about-photo">
          <div data-fade className="relative">
            <Image src="/about/1.webp" alt="Photo Viki" width={398} height={703} className="relative z-10" />
            <ParallaxMask />
          </div>
        </div>
        <ul data-fade className="about-items">
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
