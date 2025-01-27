"use client";

import { beforAfterDataType, ServicesRoute } from "@/types/common-types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { StarIcon } from "../icons";
import { BeforeAfterList } from "./BeforeAfterList";

type Tab = {
  id: string;
  label: string;
  content: string;
};

const tabs: Tab[] = [
  { id: "all", label: "ВСі послуги", content: "This is the Blog content. ВСі послуги" },
  {
    id: ServicesRoute.Biorevitalizatsiya,
    label: "біоревіталізація",
    content: "Here you can find all the documentation.",
  },
  { id: ServicesRoute.Botulinoterapia, label: "Ботулінотерапія", content: "View the source code here." },
  { id: ServicesRoute.KonturnaPlastikaGubu, label: "Контурна пластика губ", content: "View the source code here." },
  { id: ServicesRoute.Mezoterapia, label: "мезотерапія", content: "View the source code here." },
  {
    id: ServicesRoute.KonturnaPlastikaOblicha,
    label: "Контурна пластика обличчя",
    content: "View the source code here.",
  },
];

export function BeforeAfterTab({ data }: { data: beforAfterDataType[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [filteredData, setFilteredData] = useState(data);
  const pathname = usePathname();

  useEffect(() => {
    if (activeTab === "all" && pathname === "/") {
      setFilteredData(data?.filter((item) => item.mainView === true));
    } else {
      setFilteredData(
        data?.filter((item) => {
          if (pathname === "/") {
            return item.slug === activeTab;
          } else {
            return item.slug === pathname.split("/")[1];
          }
        }),
      );
    }
  }, [activeTab, data, pathname]);

  return (
    <div>
      {pathname === "/" && (
        <div className="tab-list">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              data-fade
              onClick={() => setActiveTab(tab.id)}
              className={`tab-trigger ${activeTab === tab.id ? "" : ""}`}
            >
              <StarIcon
                className={`size-4 transition duration-700 ${activeTab === tab.id ? "fill-secondary" : "fill-primary-50"}`}
              />
              <span className={`transition duration-700 ${activeTab === tab.id ? "text-primary" : "text-primary-50"}`}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      )}

      <BeforeAfterList data={filteredData} slug={pathname.split("/")[1]} />

      {/* <Separator className="my-4" /> */}
      {/* <div className="bg-muted mt-4 rounded-md p-4">{tabs.find((tab) => tab.id === activeTab)?.content}</div> */}
    </div>
  );
}
