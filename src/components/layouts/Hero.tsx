import { BtnOrLink } from "@/components";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="wrap-primary">
      <div className="flex-center">
        <h1 className="title-hero" aria-label="Тонке підкреслення Вашої природної краси"></h1>
      </div>
      <div className="grid-rows-[auto, 1fr] mb-[var(--64-92)] grid grid-cols-2 gap-2 lg:grid-cols-3 lg:grid-rows-1 lg:gap-4">
        <Image
          className="h-full w-full object-cover lg:h-auto lg:w-1/2"
          src="/hero/1.webp"
          width="248"
          height="192"
          alt="Face processing"
        />
        <div className="flex-center-col col-start-1 -col-end-1 row-start-1 mx-auto mb-8 w-[var(--240-395)] lg:col-span-1 lg:row-auto">
          <p className="text-txt-hero mb-[var(--16-32)] text-center text-secondary-100">
            Про салон шо тут робиться Lorem Ipsum is siAs been the industrys standard dummy text ever since ever since
            as been the industrys standard
          </p>
          <BtnOrLink to="#" title="Записатись на прийом" />
        </div>
        <Image
          className="h-full w-full object-cover"
          src="/hero/2.webp"
          width="496"
          height="285"
          alt="Face processing"
        />
      </div>
    </div>
  );
};
