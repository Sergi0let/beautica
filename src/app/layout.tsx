import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const robotoCondensed = localFont({
  src: [
    {
      path: "./fonts/RobotoCondensed/RobotoCondensed-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/RobotoCondensed/RobotoCondensed-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/RobotoCondensed/RobotoCondensed-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/RobotoCondensed/RobotoCondensed-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/RobotoCondensed/RobotoCondensed-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/RobotoCondensed/RobotoCondensed-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/RobotoCondensed/RobotoCondensed-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/RobotoCondensed/RobotoCondensed-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/RobotoCondensed/RobotoCondensed-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-roboto-condensed",
  display: "swap",
});

const sourceSerifPro = localFont({
  src: [
    {
      path: "./fonts/SourceSerifPro/SourceSerifPro-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/SourceSerifPro/SourceSerifPro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SourceSerifPro/SourceSerifPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SourceSerifPro/SourceSerifPro-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SourceSerifPro/SourceSerifPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/SourceSerifPro/SourceSerifPro-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-source-serif-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beautica",
  description: "About beauty and beautician",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk-UA" className="scroll-smooth">
      <body
        className={`${robotoCondensed.variable} ${sourceSerifPro.variable} relative flex min-h-screen flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
