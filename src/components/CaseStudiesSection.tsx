"use client";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { TrendingUp, ShoppingCart, Users, DollarSign, Calendar, Target, ArrowUpRight } from "lucide-react";
import { CaseStudies } from "@/types/case-studies";

export function CaseStudiesSection() {
  const formatCurrency = (amount: number, currency: string = "AED") => {
    return `${currency} ${amount.toLocaleString()}`;
  };

  return (
    <div id="case-studies" className="py-20 relative">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-block mb-4">
          <span className="text-[#4AA3FF] text-sm uppercase tracking-wider">Case Studies</span>
        </div>
        <h2 className="text-white mb-4 text-3xl md:text-4xl lg:text-5xl">
          Real{" "}
          <span className="bg-gradient-to-r from-[#0F6EEA] via-[#4AA3FF] to-[#5BB4FF] bg-clip-text text-transparent">
            Client Results
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] mx-auto mb-8 shadow-lg shadow-[#0F6EEA]/50"></div>
        <p className="text-white/80 max-w-3xl mx-auto text-base md:text-lg">
          Discover how we&apos;ve transformed businesses through strategic testing, proper targeting, and data-driven
          optimization.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {CaseStudies.map((caseStudy) => (
          <Card
            key={caseStudy.id}
            className="bg-black/20 gap-0 from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/30 overflow-hidden group hover:border-[#4AA3FF]/60 hover:shadow-2xl hover:shadow-[#0F6EEA]/20 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Header with Pink/Magenta Background */}
            <div className="p-6 relative overflow-hidden">
              <div className="absolute inset-0 "></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-2">Case Study</Badge>
                    <h3 className="text-white text-xl font-bold mb-2">{caseStudy.title}</h3>
                    <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{caseStudy.dateRange}</span>
                    </div>
                  </div>
                  <Target className="text-white w-8 h-8 opacity-80" />
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="px-6 pb-4">
              <p className="text-white/80 text-sm leading-relaxed mb-4">{caseStudy.description}</p>
            </div>

            {/* Metrics Grid */}
            <div className="px-6 pb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-gradient-to-br from-[#0F6EEA]/20 to-[#4AA3FF]/10 rounded-lg border border-[#4AA3FF]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="text-[#4AA3FF] w-4 h-4" />
                    <span className="text-white/70 text-xs">Sessions</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{caseStudy.metrics.sessions}</div>
                </div>

                <div className="p-4 bg-gradient-to-br from-[#0F6EEA]/20 to-[#4AA3FF]/10 rounded-lg border border-[#4AA3FF]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <ShoppingCart className="text-[#4AA3FF] w-4 h-4" />
                    <span className="text-white/70 text-xs">Orders</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{caseStudy.metrics.orders}</div>
                </div>

                <div className="p-4 bg-gradient-to-br from-[#0F6EEA]/20 to-[#4AA3FF]/10 rounded-lg border border-[#4AA3FF]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="text-[#4AA3FF] w-4 h-4" />
                    <span className="text-white/70 text-xs">Total Sales</span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {formatCurrency(caseStudy.metrics.totalSales, caseStudy.metrics.currency)}
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-[#0F6EEA]/20 to-[#4AA3FF]/10 rounded-lg border border-[#4AA3FF]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="text-[#4AA3FF] w-4 h-4" />
                    <span className="text-white/70 text-xs">Conversion</span>
                  </div>
                  <div className="text-xl font-bold text-white">{caseStudy.metrics.conversionRate}%</div>
                </div>
              </div>

              {/* Additional Metrics */}
              {caseStudy.metrics.profit && (
                <div className="grid grid-cols-1 gap-4 mb-4">
                  {caseStudy.metrics.profit && (
                    <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                      <div className="text-green-400/80 text-xs mb-1">Profit</div>
                      <div className="text-green-400 font-semibold text-sm">
                        {formatCurrency(caseStudy.metrics.profit, caseStudy.metrics.currency)}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Results Section */}
              <div className="mt-4 p-4  border-white/20 text-white rounded-lg border">
                <div className="flex items-start gap-2">
                  <ArrowUpRight className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-semibold mb-1">Results</div>
                    <p className="text-white/90 text-sm">{caseStudy.results}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
