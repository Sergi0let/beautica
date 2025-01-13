import { CertificateIcon, FlowerIcon, ParallaxMask, StarsIcon } from "@/components";
import Image from "next/image";

export const About = () => {
  return (
    <section className="wrap-secondary">
      <div className="relative pb-[var(--12-40)] pt-[var(--32-72)]">
        <div className="absolute grid w-fit grid-cols-1 gap-3 md:-mb-16 md:grid-cols-[3fr_2fr_3fr] md:gap-4">
          <div data-fade className="about-info">
            Всім привіт! Мене звати Вікторія! Я Ваш персональний інструктор і консультант по{" "}
            <i>красі та здоровʼї Вашої</i> шкіри. Маю медичну та Вищу фармацевтичну освіту! Діючий тренер{" "}
            <i>Alma lesers Ukraine</i>. Працюю в косметології вже більше <i>10 років</i>, точно знаю як підкреслити Вашу{" "}
            <i>природну красу</i>, та саме головне зберегти її на довгі роки
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
