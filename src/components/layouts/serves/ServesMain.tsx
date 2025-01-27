import { BtnOrLink } from "@/components/elements";
import Image from "next/image";

type ServesMainProps = {
  name: string;
  description: string;
  imgUrl: string;
};

export const ServesMain = ({ name, description, imgUrl }: ServesMainProps) => {
  return (
    <div className="wrap-primary my-4 grid gap-4 md:my-5 md:grid-cols-2 md:gap-5 xl:min-h-[527px]">
      <div className="w-fit rounded-2xl bg-secondary-50 p-[var(--16-48)] md:rounded-[32px]">
        <div className="mb-6 text-center md:text-left">
          <div className="inline-flex flex-wrap items-center gap-[10px] rounded-[32px] border border-secondary-75 bg-white px-3 py-2 md:p-3">
            <div className="flex -space-x-2 overflow-hidden">
              {Array.from({ length: 4 }, (_, i) => (
                <Image
                  key={i}
                  src={`/clients/${i + 1}.jpeg`}
                  alt="Beautica Services"
                  className="size-[var(--32-48)] rounded-full object-cover"
                  width={100}
                  height={100}
                />
              ))}
            </div>
            <span className="text-sm uppercase md:text-base">124 клієнти задоволені</span>
          </div>
        </div>

        <h1 className="mb-2 text-txt-32-72 text-secondary md:mb-6">{name}</h1>
        <p className="text-center text-sm md:text-left md:text-base">{description}</p>
        <div className="mb-auto mt-4 text-center md:mt-12 md:text-left">
          <BtnOrLink to="#" title="Записатись на прийом" />
        </div>
      </div>
      <figure className="h-auto max-h-[638px] overflow-hidden rounded-2xl bg-secondary-50 md:rounded-[32px]">
        <Image src={imgUrl} alt={name} className="h-full w-full object-cover" width={770} height={538} />
      </figure>
    </div>
  );
};
