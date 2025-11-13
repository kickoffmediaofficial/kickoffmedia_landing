"use client";
import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  TrendingUp,
  Users,
  MessageSquare,
  MousePointerClick,
  Play,
  Zap,
  Filter,
  BarChart3,
  Target,
} from "lucide-react";
import { MarketingCampaigns, MarketingCampaign } from "@/types/marketing";

const objectiveIcons = {
  "Messaging Conversations": MessageSquare,
  "Link Clicks": MousePointerClick,
  Engagement: Users,
  ThruPlays: Play,
};

const objectiveColors = {
  "Messaging Conversations": "from-blue-500 to-cyan-500",
  "Link Clicks": "from-green-500 to-emerald-500",
  Engagement: "from-purple-500 to-pink-500",
  ThruPlays: "from-orange-500 to-red-500",
};

export function MarketingPortfolio() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");
  const [selectedObjective, setSelectedObjective] = useState<string>("All");

  const industries = ["All", ...Array.from(new Set(MarketingCampaigns.map((c) => c.industry)))];
  const objectives = ["All", ...Array.from(new Set(MarketingCampaigns.map((c) => c.objective)))];

  const filteredCampaigns = MarketingCampaigns.filter((campaign) => {
    const industryMatch = selectedIndustry === "All" || campaign.industry === selectedIndustry;
    const objectiveMatch = selectedObjective === "All" || campaign.objective === selectedObjective;
    return industryMatch && objectiveMatch;
  });

  // Calculate aggregate stats
  const totalConversations = MarketingCampaigns.reduce(
    (sum, c) => sum + (c.objective === "Messaging Conversations" ? c.metrics.primaryMetric.value : 0),
    0
  );
  const totalReach = MarketingCampaigns.reduce((sum, c) => sum + c.metrics.reach, 0);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050B14] via-[#0A1628] to-[#0F2847] py-20">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-[#0F6EEA] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-[#4AA3FF] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#4AA3FF] text-sm uppercase tracking-wider">Marketing Results</span>
          </div>
          <h1 className="text-white mb-4 text-3xl md:text-4xl lg:text-5xl">
            Proven{" "}
            <span className="bg-gradient-to-r from-[#0F6EEA] via-[#4AA3FF] to-[#5BB4FF] bg-clip-text text-transparent">
              Campaign Success
            </span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] mx-auto mb-8 shadow-lg shadow-[#0F6EEA]/50"></div>
          <p className="text-white/80 max-w-3xl mx-auto text-base md:text-lg">
            Real results from real campaigns. See how we&apos;ve helped businesses achieve remarkable growth through
            data-driven digital marketing strategies.
          </p>
        </div>

        {/* Aggregate Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-[#0F6EEA]/20 to-[#4AA3FF]/10 backdrop-blur-sm border-[#4AA3FF]/30 p-6">
            <div className="flex items-center justify-between mb-4">
              <MessageSquare className="text-[#4AA3FF] w-8 h-8" />
              <TrendingUp className="text-green-400 w-5 h-5" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{formatNumber(totalConversations)}</div>
            <div className="text-white/70 text-sm">Total Conversations</div>
          </Card>

          <Card className="bg-gradient-to-br from-[#0F6EEA]/20 to-[#4AA3FF]/10 backdrop-blur-sm border-[#4AA3FF]/30 p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="text-[#4AA3FF] w-8 h-8" />
              <TrendingUp className="text-green-400 w-5 h-5" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{formatNumber(totalReach)}</div>
            <div className="text-white/70 text-sm">Total Reach</div>
          </Card>

          <Card className="bg-gradient-to-br from-[#0F6EEA]/20 to-[#4AA3FF]/10 backdrop-blur-sm border-[#4AA3FF]/30 p-6">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="text-[#4AA3FF] w-8 h-8" />
              <TrendingUp className="text-green-400 w-5 h-5" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{MarketingCampaigns.length}</div>
            <div className="text-white/70 text-sm">Successful Campaigns</div>
          </Card>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-6">
          {/* Industry Filter */}
          <Card className="bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/30 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="text-[#4AA3FF] w-5 h-5" />
              <h3 className="text-white font-semibold text-lg">Filter by Industry</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <Badge
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`cursor-pointer px-4 py-2 transition-all ${
                    selectedIndustry === industry
                      ? "bg-gradient-to-r from-[#0F6EEA] via-[#4AA3FF] to-[#5BB4FF] text-white shadow-lg shadow-[#0F6EEA]/40 border-0"
                      : "bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 text-white/80 hover:bg-[#4AA3FF]/20 border border-[#4AA3FF]/30 hover:border-[#4AA3FF]/50"
                  }`}
                >
                  {industry}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Objective Filter */}
          <Card className="bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/30 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Target className="text-[#4AA3FF] w-5 h-5" />
              <h3 className="text-white font-semibold text-lg">Filter by Campaign Objective</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {objectives.map((objective) => (
                <Badge
                  key={objective}
                  onClick={() => setSelectedObjective(objective)}
                  className={`cursor-pointer px-4 py-2 transition-all ${
                    selectedObjective === objective
                      ? "bg-gradient-to-r from-[#0F6EEA] via-[#4AA3FF] to-[#5BB4FF] text-white shadow-lg shadow-[#0F6EEA]/40 border-0"
                      : "bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 text-white/80 hover:bg-[#4AA3FF]/20 border border-[#4AA3FF]/30 hover:border-[#4AA3FF]/50"
                  }`}
                >
                  {objective}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-\ md:gap-8">
          {filteredCampaigns.map((campaign) => {
            const ObjectiveIcon = objectiveIcons[campaign.objective];
            const gradientClass = objectiveColors[campaign.objective];

            return (
              <Card
                key={campaign.id}
                className="gap-0 bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/30 overflow-hidden group hover:border-[#4AA3FF]/60 hover:shadow-2xl hover:shadow-[#0F6EEA]/20 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${gradientClass} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-2">
                          {campaign.industry}
                        </Badge>
                        <h3 className="text-white text-xl font-bold mb-1">{campaign.campaignName}</h3>
                        <p className="text-white/90 text-sm">{campaign.clientName}</p>
                      </div>
                      <ObjectiveIcon className="text-white w-10 h-10 opacity-80" />
                    </div>
                    <div className="flex items-center gap-4 text-white/90 text-sm">
                      <span className="flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        {campaign.duration}
                      </span>
                      <Badge
                        className={`${
                          campaign.status === "Active"
                            ? "bg-green-500/30 text-green-200 border-green-400/50"
                            : "bg-blue-500/30 text-blue-200 border-blue-400/50"
                        } border`}
                      >
                        {campaign.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="px-6 pb-6">
                  <p className="text-white/80 mb-6 text-sm">{campaign.description}</p>

                  {/* Primary Metric */}
                  <div className="mb-6 p-4 bg-gradient-to-br from-[#0F6EEA]/20 to-[#4AA3FF]/10 rounded-lg border border-[#4AA3FF]/20">
                    <div className="mb-2">
                      <span className="text-white/70 text-sm">{campaign.metrics.primaryMetric.label}</span>
                    </div>
                    <div className="text-3xl font-bold text-white">
                      {campaign.metrics.primaryMetric.value.toLocaleString()}
                    </div>
                  </div>

                  {/* Secondary Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-[#0A1628]/50 rounded-lg border border-[#4AA3FF]/10">
                      <div className="text-white/60 text-xs mb-1">Reach</div>
                      <div className="text-white font-semibold">{formatNumber(campaign.metrics.reach)}</div>
                    </div>
                    <div className="p-3 bg-[#0A1628]/50 rounded-lg border border-[#4AA3FF]/10">
                      <div className="text-white/60 text-xs mb-1">Impressions</div>
                      <div className="text-white font-semibold">{formatNumber(campaign.metrics.impressions)}</div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <Card
          style={{ marginTop: "24px" }}
          className="gap-0 bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/30 overflow-hidden group hover:border-[#4AA3FF]/60 hover:shadow-2xl hover:shadow-[#0F6EEA]/20 transition-all duration-300 hover:-translate-y-2"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-2">Get Started</Badge>
                  <h3 className="text-white text-xl font-bold mb-1">Ready to Achieve Similar Results?</h3>
                  <p className="text-white/90 text-sm">Let&apos;s discuss your marketing goals</p>
                </div>
                <TrendingUp className="text-white w-10 h-10 opacity-80" />
              </div>
              <div className="flex items-center gap-4 text-white/90 text-sm">
                <span className="flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  Free Consultation
                </span>
                <Badge className="bg-green-500/30 text-green-200 border-green-400/50 border">Available Now</Badge>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-white/80 mb-6 text-sm">
              Let&apos;s discuss how we can help your business grow with data-driven marketing strategies that deliver
              real results.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                onClick={() => {
                  window.location.href = "/#contact";
                }}
                className="bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] hover:from-[#0E63D5] hover:to-[#3A92E5] shadow-lg shadow-[#0F6EEA]/20 transition-all px-8 py-6 text-lg w-full md:w-auto"
              >
                Get Started Today
              </Button>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#4AA3FF]/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </Card>
      </div>
    </div>
  );
}
