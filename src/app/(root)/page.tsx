import { About, BeforeAfter, Faq, Hero, Partners, Sertification, Testimanials } from "@/components";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <BeforeAfter />
      <Testimanials />
      <Partners />
      <Sertification />
      <Faq />
    </main>
  );
}
