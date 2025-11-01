import { ReactNode } from 'react';
import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  title: 'KickOff Media - A digital marketing agency',
  description:
    'A leading digital marketing agency offering Social Media Marketing, SEO, Google Ads, Content Creation, Email Marketing, and Data-Driven Growth Strategies. Elevate your brand with our expert team and proven results.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
