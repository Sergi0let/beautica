import { SliderTesimonials } from "./SliderTesimonials";

export const Testimanials = () => {
  return (
    <section className="wrap-secondary mb-[var(--64-120)] overflow-hidden">
      <div className="py-[var(--32-72)] !pr-0">
        <h2 className="text-center text-title text-white">Відгуки клієнтів</h2>
        <div className="">
          <SliderTesimonials />
        </div>
      </div>
    </section>
  );
};
