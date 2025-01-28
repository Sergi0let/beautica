import { BtnOrLink } from "@/components"
import Image from "next/image"

export const Hero = () => {
  return (
    <div className="wrap-primary min-h-screen">
      <div className="flex-center">
        <h1 className="title-hero" data-fade>
          <span>Тонке підкреслення Вашої </span>
          <span>природної краси</span>
        </h1>
      </div>
      <div className="mb-[var(--64-92)] grid grid-cols-2 grid-rows-[auto_1fr] gap-2 lg:grid-cols-3 lg:grid-rows-1 lg:gap-4">
        <Image
          data-delay-one
          data-fade
          className="size-full max-w-80 justify-self-end object-cover lg:h-auto lg:w-1/2 lg:justify-self-start"
          src="/hero/1.webp"
          width="248"
          height="192"
          alt="Face processing"
        />
        <div className="flex-center-col col-start-1 -col-end-1 row-start-1 mx-auto mb-8 w-[var(--240-395)] lg:col-span-1 lg:row-auto xl:-translate-x-6">
          <p
            data-fade
            data-delay-two
            className="mb-[var(--16-32)] text-balance text-center text-txt-hero lg:text-pretty lg:text-left"
          >
            Ми не змінюємо вашу природну красу — ми допомагаємо її розкрити та підкреслити! Завдяки сучасним методам і
            передовим косметологічним технологіям ви зможете виглядати впевнено, доглянуто та гармонійно.
          </p>
          <BtnOrLink anchor="#assign-form" title="Записатись на прийом" />
        </div>
        <Image
          data-fade
          data-delay-three
          className="size-full max-w-[530px] object-cover"
          src="/hero/2.webp"
          width="530"
          height="305"
          alt="Face processing"
        />
      </div>
    </div>
  );
};
