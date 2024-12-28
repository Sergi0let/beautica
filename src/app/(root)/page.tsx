import { About, Faq, Hero, Partners } from "@/components";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <div className="flex-center h-32 border-b border-t border-gray-200">This is empty space for better layout</div>
      <Partners />
      <Faq />
    </main>
  );
}
