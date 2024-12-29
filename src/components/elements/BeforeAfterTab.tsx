"use client";

import { useState } from "react";
import { StarIcon } from "../icons";
import { BeforeAfterList } from "./BeforeAfterList";

type Tab = {
  id: string;
  label: string;
  content: string;
};

const tabs: Tab[] = [
  { id: "tab1", label: "ВСі послуги", content: "This is the Blog content. ВСі послуги" },
  { id: "tab2", label: "біоревіталізація", content: "Here you can find all the documentation." },
  { id: "tab3", label: "Ботулінотерапія", content: "View the source code here." },
  { id: "tab4", label: "Контурна пластика губ", content: "View the source code here." },
  { id: "tab5", label: "мезотерапія", content: "View the source code here." },
  { id: "tab6", label: "Контурна пластика обличчя", content: "View the source code here." },
];

export function BeforeAfterTab() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="">
      <div className="tab-list">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-trigger ${activeTab === tab.id ? "" : ""}`}
          >
            <StarIcon
              className={`duration-400 size-4 transition ${activeTab === tab.id ? "fill-secondary" : "fill-primary-50"}`}
            />
            <span className={`duration-400 transition ${activeTab === tab.id ? "text-primary" : "text-primary-50"}`}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>
      <BeforeAfterList />
      {/* <Separator className="my-4" /> */}
      {/* <div className="bg-muted mt-4 rounded-md p-4">{tabs.find((tab) => tab.id === activeTab)?.content}</div> */}
    </div>
  );
}
