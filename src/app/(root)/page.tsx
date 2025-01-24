import { About, BeforeAfter, Faq, Hero, Partners, Sertification, Testimanials } from "@/components";

export default function Home() {
  return (
    <main className="relative flex-1">
      <Hero />
      <About />
      <BeforeAfter />
      <Testimanials />
      <Partners />
      <Sertification />
      <Faq />
      <div className="absolute left-[35%] top-0 h-full w-px bg-orange-700" />
    </main>
  );
}
