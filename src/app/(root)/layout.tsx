import { Footer, Header, ScrollTrace } from "@/components";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ScrollTrace />
      <Header />
      {children}
      <Footer />
    </>
  );
}
