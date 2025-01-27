import { BtnOrLink, StarReview } from "@/components";
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
            <div className="flex gap-1 overflow-hidden">
              {Array.from({ length: 4 }, (_, i) => (
                <StarReview key={i} className="size-4" id={i + 1} />
              ))}
            </div>
            <span className="text-sm uppercase md:text-base">124 клієнти задоволені</span>
          </div>
        </div>

        <h1 id="procedure" className="mb-2 scroll-mt-16 text-txt-32-72 text-secondary md:mb-6 md:scroll-mt-20">
          {name}
        </h1>
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
