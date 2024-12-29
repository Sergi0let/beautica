import { BeforeAfterTab } from "@/components";

export const BeforeAfter = () => {
  return (
    <section className="wrap-tertiary pb-[var(--64-120)]">
      <div className="pt-[var(--32-72)]">
        <h2 className="text-center text-title text-secondary">До та після</h2>
        <BeforeAfterTab />
      </div>
    </section>
  );
};
