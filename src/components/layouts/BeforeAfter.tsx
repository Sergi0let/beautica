import { BeforeAfterTab } from "@/components";

export const BeforeAfter = () => {
  return (
    <section className="wrap-tertiary pb-[var(--64-120)]">
      <div className="pt-[var(--32-72)]">
        <h2 data-fade id="before-after" className="scroll-mt-16 text-center text-title text-secondary md:scroll-mt-20">
          <span className="block xl:-translate-x-16">До та після</span>
        </h2>
        <BeforeAfterTab />
      </div>
    </section>
  );
};
