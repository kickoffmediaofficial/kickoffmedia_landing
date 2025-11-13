"use client";
import { MarketingPortfolio } from "@/components/MarketingPortfolio";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Header />
      <MarketingPortfolio />
      <Footer />
      <Toaster />
    </div>
  );
}


