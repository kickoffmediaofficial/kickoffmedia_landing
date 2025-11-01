import type { Metadata } from "next";
import "./index.css";

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
      <body className={`antialiased flex-1`}>{children}</body>
    </html>
  );
}
