import { ServiceStage } from "@/types/common-types";

type ServesStagesProps = {
  stages: ServiceStage[];
};

export const ServesStages = ({ stages }: ServesStagesProps) => {
  return (
    <section className="wrap-secondary mb-10 md:mb-20">
      <div className="py-[40px] lg:py-[80px]">
        <div className="text-center md:translate-x-2">
          <h2 id="stages" className="scroll-mt-16 text-title leading-none md:scroll-mt-20">
            Етапи проведення
          </h2>
        </div>

        <div className="relative">
          <div className="stage-decor" />
          <ul className="stage-list">
            {stages.map((item, index) => (
              <li key={index} className="stage-item">
                <div>
                  <div className="stage-count_wrapper">
                    <div>
                      <span className="stage-count">0{index + 1}</span>
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                  <div className="grid grid-cols-[40px_1fr] gap-2 lg:block">
                    <div className="flex-center lg:hidden">
                      <div className="h-full w-[2px] bg-white" />
                    </div>
                    <p className="mt-[var(--8-16)] text-xs font-normal lg:text-base">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
