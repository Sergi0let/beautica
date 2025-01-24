import { StarIcon } from "@/components/icons";
import { sertificateData } from "@/constants";
import { SliderSertification } from "./SliderSertification";

const Sertification = () => {
  return (
    <section>
      <div className="wrap-primary mb-[var(--64-80)]">
        <div className="flex w-full items-center justify-center">
          <h2 className="title-sertification">
            Кожен сертифікат та диплом є підтвердженням моєї кваліфікації та відданості вашій природній красі
          </h2>
        </div>
        <div className="relative mx-auto flex flex-col-reverse sm:mr-0 md:flex-row md:pr-4">
          <ul className="relative md:z-10 md:w-2/12 md:bg-white">
            {sertificateData.amouts.map(({ id, value, name }) => (
              <li key={id} className="">
                <span className="relative font-sourceSerifPro text-[64px] leading-none text-secondary md:text-[140px]">
                  {value} <StarIcon className="absolute -right-10 top-4 size-6 md:size-10" />
                </span>
                <span className="block text-xs md:text-xl">{name}</span>
              </li>
            ))}
          </ul>
          <SliderSertification />
        </div>
      </div>
    </section>
  );
};

export { Sertification };
