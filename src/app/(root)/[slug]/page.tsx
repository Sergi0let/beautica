import { BeforeAfter, Faq, Sertification, ServesMain, ServesStages, ServiseTable, Testimanials } from "@/components";
import { servicesData } from "@/constants";
export default async function PageServes({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  const data = servicesData.find((item) => item.pageUrl === slug);

  return (
    <main className="relative">
      <ServesMain name={data?.name || ""} description={data?.description || ""} imgUrl={data?.imgUrl || ""} />
      <ServesStages stages={data?.stages || []} />
      <ServiseTable priceTable={data?.priceTable || []} name={data?.name || ""} />
      <BeforeAfter />
      <Testimanials />
      <Sertification />
      <Faq />
    </main>
  );
}

// The only change is the name of the function.
