import { About, BeforeAfter, Faq, Hero, Partners, Sertification, Services, Testimanials } from "@/components";

export default function Home() {
  return (
    <main className="relative flex-1">
      <Hero />
      <About />
      <Services />
      <BeforeAfter />
      <Testimanials />
      <Partners />
      <Sertification />
      <Faq />
    </main>
  );
}
