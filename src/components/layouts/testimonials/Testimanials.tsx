import { SliderTesimonials } from "./SliderTesimonials";

export const Testimanials = () => {
  return (
    <section className="wrap-secondary mb-[var(--64-120)] overflow-hidden">
      <div id="reviews" className="scroll-mt-16py-[var(--32-72)] py-9 !pr-0 md:scroll-mt-20 xl:py-12 2xl:py-20">
        <h2 data-fade className="text-center text-title text-white">
          Відгуки клієнтів
        </h2>
        <div className="mt-5 md:mt-8">
          <SliderTesimonials />
        </div>
      </div>
    </section>
  );
};
