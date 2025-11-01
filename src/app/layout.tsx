import type { Metadata } from "next";
import "./index.css";
import { GtagBody } from "@/components/tracking/Gtag";
import dynamic from "next/dynamic";
const GtagHead = dynamic(() => import("@/components/tracking/Gtag").then((mod) => mod.GtagHead));

export const metadata: Metadata = {
  metadataBase: new URL("https://kickoffmedia.co"),
  title: "KickOff Media - A digital marketing agency",
  description:
    "A leading digital marketing agency offering Social Media Marketing, SEO, Google Ads, Content Creation, Email Marketing, and Data-Driven Growth Strategies. Elevate your brand with our expert team and proven results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased flex-1`}>
        <GtagHead />
        <GtagBody />
        {children}
      </body>
    </html>
  );
}
