import { MarketingCampaigns } from "@/types/marketing";

/**
 * Shared compact formatter so the homepage and /marketing never drift apart.
 * Lifted out of MarketingPortfolio, which used to keep its own copy.
 */
export function formatCompactNumber(num: number) {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toLocaleString();
}

/**
 * Aggregates derived from MarketingCampaigns.
 *
 * `reach` is the sum of per-campaign reach, so audiences touched by more than
 * one campaign are counted more than once. Always label it as reach *across
 * campaigns* — it is not a unique-people figure.
 */
export const MARKETING_TOTALS = {
  campaigns: MarketingCampaigns.length,
  conversations: MarketingCampaigns.reduce(
    (sum, c) =>
      sum +
      (c.objective === "Messaging Conversations"
        ? c.metrics.primaryMetric.value
        : 0),
    0,
  ),
  reach: MarketingCampaigns.reduce((sum, c) => sum + c.metrics.reach, 0),
  impressions: MarketingCampaigns.reduce(
    (sum, c) => sum + c.metrics.impressions,
    0,
  ),
  spend: MarketingCampaigns.reduce((sum, c) => sum + c.metrics.amountSpent, 0),
};
