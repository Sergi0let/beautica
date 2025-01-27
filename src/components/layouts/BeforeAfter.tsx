import { BeforeAfterTab } from "@/components";
import { beforAfterData } from "@/constants";

export const BeforeAfter = () => {
  return (
    <section className="wrap-tertiary pb-[var(--64-120)]">
      <div className="pt-6 md:pt-11">
        <h2
          data-fade
          id="before-after"
          className="scroll-mt-16 text-center text-title text-secondary md:scroll-mt-20 lg:flex lg:text-left"
        >
          <span className="hidden w-1/3 lg:block" />
          <span className="block lg:translate-x-4">До та після</span>
        </h2>
        <BeforeAfterTab data={beforAfterData} />
      </div>
    </section>
  );
};
