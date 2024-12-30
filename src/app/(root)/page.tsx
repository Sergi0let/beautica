import { About, BeforeAfter, Faq, Hero, Partners, Testimanials } from "@/components";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <BeforeAfter />
      <Testimanials />
      <Partners />
      <Faq />
    </main>
  );
}
