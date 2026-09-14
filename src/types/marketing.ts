export interface MarketingCampaign {
  id: string;
  clientName: string;
  campaignName: string;
  industry: string;
  objective: "Messaging Conversations" | "Link Clicks" | "Engagement" | "ThruPlays" | "Traffic" | "Awareness";
  metrics: {
    primaryMetric: {
      value: number;
      label: string;
      costPerUnit: number;
    };
    amountSpent: number;
    dailyBudget: number;
    reach: number;
    impressions: number;
  };
  duration: string;
  status: "Active" | "Completed";
  description: string;
}

export const MarketingCampaigns: MarketingCampaign[] = [
  {
    id: "1",
    clientName: "E-Commerce Fashion Brand",
    campaignName: "Winter Sale Campaign",
    industry: "Fashion & Retail",
    objective: "Messaging Conversations",
    metrics: {
      primaryMetric: {
        value: 1680,
        label: "Messaging Conversations Started",
        costPerUnit: 4.27,
      },
      amountSpent: 7181.24,
      dailyBudget: 500,
      reach: 45236,
      impressions: 67681,
    },
    duration: "2 months",
    status: "Completed",
    description: "Successfully generated high-quality leads through strategic messaging campaigns targeting winter sale promotions.",
  },
  {
    id: "2",
    clientName: "Food & Restaurant Chain",
    campaignName: "Craving Special Offer",
    industry: "Food & Beverage",
    objective: "Messaging Conversations",
    metrics: {
      primaryMetric: {
        value: 845,
        label: "Messaging Conversations Started",
        costPerUnit: 6.62,
      },
      amountSpent: 5590.49,
      dailyBudget: 450,
      reach: 40585,
      impressions: 59007,
    },
    duration: "1.5 months",
    status: "Completed",
    description: "Drove customer engagement and inquiries through compelling food promotion campaigns with optimized ad spend.",
  },
  {
    id: "3",
    clientName: "E-Commerce Platform",
    campaignName: "Product Link Campaign",
    industry: "E-Commerce",
    objective: "Link Clicks",
    metrics: {
      primaryMetric: {
        value: 142,
        label: "Link Clicks",
        costPerUnit: 2.96,
      },
      amountSpent: 420.62,
      dailyBudget: 400,
      reach: 11020,
      impressions: 14994,
    },
    duration: "1 month",
    status: "Completed",
    description: "Achieved exceptional cost-per-click performance driving qualified traffic to product pages.",
  },
  {
    id: "4",
    clientName: "Fashion Retailer",
    campaignName: "Hello Winter Campaign",
    industry: "Fashion & Retail",
    objective: "ThruPlays",
    metrics: {
      primaryMetric: {
        value: 38552,
        label: "ThruPlays",
        costPerUnit: 0.60,
      },
      amountSpent: 23047.04,
      dailyBudget: 500,
      reach: 45236,
      impressions: 67681,
    },
    duration: "3 months",
    status: "Completed",
    description: "Massive video engagement campaign generating millions of views and brand awareness.",
  },
  {
    id: "5",
    clientName: "Food Delivery Service",
    campaignName: "Special Deal Promotion",
    industry: "Food & Beverage",
    objective: "Messaging Conversations",
    metrics: {
      primaryMetric: {
        value: 356,
        label: "Messaging Conversations Started",
        costPerUnit: 11.11,
      },
      amountSpent: 3953.86,
      dailyBudget: 300,
      reach: 17663,
      impressions: 28257,
    },
    duration: "1 month",
    status: "Completed",
    description: "Targeted campaign driving customer inquiries and order placements through strategic messaging.",
  },
  {
    id: "6",
    clientName: "Clothing Brand",
    campaignName: "Men's Chinos Promotion",
    industry: "Fashion & Retail",
    objective: "ThruPlays",
    metrics: {
      primaryMetric: {
        value: 3452,
        label: "ThruPlays",
        costPerUnit: 0.43,
      },
      amountSpent: 1485.38,
      dailyBudget: 400,
      reach: 11020,
      impressions: 14994,
    },
    duration: "1 month",
    status: "Completed",
    description: "High-performing video campaign showcasing product features with exceptional engagement rates.",
  },
  {
    id: "7",
    clientName: "Fashion E-Commerce",
    campaignName: "Post Engagement Campaign",
    industry: "Fashion & Retail",
    objective: "Engagement",
    metrics: {
      primaryMetric: {
        value: 10867,
        label: "Post Engagements",
        costPerUnit: 0.16,
      },
      amountSpent: 1687.22,
      dailyBudget: 300,
      reach: 17663,
      impressions: 28257,
    },
    duration: "1 month",
    status: "Completed",
    description: "Ultra-low cost engagement campaign maximizing social media interaction and brand visibility.",
  },
  {
    id: "8",
    clientName: "Restaurant Chain",
    campaignName: "New Post Campaign",
    industry: "Food & Beverage",
    objective: "ThruPlays",
    metrics: {
      primaryMetric: {
        value: 2134,
        label: "ThruPlays",
        costPerUnit: 0.34,
      },
      amountSpent: 735.46,
      dailyBudget: 300,
      reach: 11020,
      impressions: 14994,
    },
    duration: "2 weeks",
    status: "Active",
    description: "Ongoing campaign delivering exceptional video engagement at record-low costs.",
  },
  {
    id: "9",
    clientName: "Essential Hair Salon",
    campaignName: "Brand Awareness Campaign",
    industry: "Hair & Beauty",
    objective: "Awareness",
    metrics: {
      primaryMetric: {
        value: 12801,
        label: "People Reached",
        costPerUnit: 0.002,
      },
      amountSpent: 27.42,
      dailyBudget: 10,
      reach: 12801,
      impressions: 13449,
    },
    duration: "4 days",
    status: "Completed",
    description: "Hyper-efficient brand awareness campaign putting Essential Hair Salon in front of 12,800+ Kirkland locals at just $2.04 CPM.",
  },
  {
    id: "10",
    clientName: "Essential Hair Salon",
    campaignName: "Appointment Booking Campaign",
    industry: "Hair & Beauty",
    objective: "Traffic",
    metrics: {
      primaryMetric: {
        value: 95,
        label: "Appointment Page Views",
        costPerUnit: 0.63,
      },
      amountSpent: 59.92,
      dailyBudget: 15,
      reach: 7632,
      impressions: 8918,
    },
    duration: "4 days",
    status: "Completed",
    description: "Drove 95 appointment page views at $0.63 each, directly filling the salon's booking calendar with qualified local traffic.",
  },
  {
    id: "11",
    clientName: "Essential Hair Salon",
    campaignName: "Christmas Holiday Glow Campaign",
    industry: "Hair & Beauty",
    objective: "Messaging Conversations",
    metrics: {
      primaryMetric: {
        value: 29,
        label: "Messaging Conversations Started",
        costPerUnit: 4.39,
      },
      amountSpent: 127.36,
      dailyBudget: 10,
      reach: 3032,
      impressions: 4300,
    },
    duration: "2 weeks",
    status: "Completed",
    description: "Seasonal promotion driving 29 direct messaging leads for holiday hair appointments, with strong engagement from the local Kirkland community.",
  },
  {
    id: "12",
    clientName: "Essential Hair Salon",
    campaignName: "Instagram Growth Campaign",
    industry: "Hair & Beauty",
    objective: "Link Clicks",
    metrics: {
      primaryMetric: {
        value: 154,
        label: "Instagram Profile Visits",
        costPerUnit: 0.28,
      },
      amountSpent: 42.81,
      dailyBudget: 15,
      reach: 2386,
      impressions: 2937,
    },
    duration: "4 days",
    status: "Completed",
    description: "Targeted campaign driving 154 Instagram profile visits at just $0.28 each, rapidly growing the salon's Instagram following with qualified local audience.",
  },
  {
    id: "13",
    clientName: "Essential Hair Salon",
    campaignName: "Facebook Engagement Campaign",
    industry: "Hair & Beauty",
    objective: "Engagement",
    metrics: {
      primaryMetric: {
        value: 156,
        label: "Post Engagements",
        costPerUnit: 0.25,
      },
      amountSpent: 38.62,
      dailyBudget: 15,
      reach: 466,
      impressions: 547,
    },
    duration: "3 days",
    status: "Completed",
    description: "Hyper-efficient engagement campaign building social proof with 156 post engagements at $0.25 each, boosting the salon's Facebook page visibility in Kirkland.",
  },
  {
    id: "14",
    clientName: "Essential Hair Salon",
    campaignName: "Valentine's Glow Campaign",
    industry: "Hair & Beauty",
    objective: "Awareness",
    metrics: {
      primaryMetric: {
        value: 137,
        label: "Impressions",
        costPerUnit: 0.02,
      },
      amountSpent: 2.49,
      dailyBudget: 5,
      reach: 108,
      impressions: 137,
    },
    duration: "1 day",
    status: "Completed",
    description: "Quick Valentine's Day teaser campaign putting the salon's holiday glow offer in front of local Kirkland audience at ultra-low cost.",
  },
];


