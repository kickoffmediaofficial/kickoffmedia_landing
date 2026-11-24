export interface CaseStudyMetric {
  label: string;
  value: string;
  icon?: "users" | "cart" | "dollar" | "trending" | "eye" | "message" | "click" | "megaphone" | "search" | "globe";
}

export interface CaseStudyMetrics {
  sessions: number;
  totalSales: number;
  orders: number;
  conversionRate: number;
  spending?: number;
  profit?: number;
  currency?: string;
  custom?: CaseStudyMetric[];
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  results: string;
  dateRange: string;
  metrics: CaseStudyMetrics;
  dashboardImage?: string; // URL or path to dashboard screenshot
}

export const CaseStudies: CaseStudy[] = [
  {
    id: "essential-salon",
    title: "Essential Hair Salon — Full Digital Growth",
    description:
      "Executed a full-stack digital marketing strategy for Essential Hair Salon in Kirkland, WA — combining SEO content marketing, Meta Ads campaigns, and website optimization. Grew Google Search visibility from 60 to 2,800+ daily impressions, published high-ranking blog content capturing competitive keywords, and ran hyper-efficient paid campaigns totaling just $298 in ad spend.",
    results:
      "Achieved 310K+ Google Search impressions with 3,900+ organic clicks, ranking #1 for branded terms and top 5 for competitive local queries like \"hair salon kirkland.\" Blog content like 'Partial Foil vs Balayage' alone generated 34K+ impressions. Meta Ads reached 26,685 people driving 95 appointment page views and 29 direct leads. Website attracted 204 unique users from Google, Facebook, Instagram, and AI assistants like ChatGPT — all on under $300 total ad spend.",
    dateRange: "November 2025 — September 2026",
    metrics: {
      sessions: 415,
      totalSales: 0,
      orders: 0,
      conversionRate: 0,
      spending: 298.62,
      currency: "USD",
      custom: [
        { label: "Search Impressions", value: "310K+", icon: "search" },
        { label: "Organic Clicks", value: "3,900+", icon: "click" },
        { label: "Impression Growth", value: "40x", icon: "trending" },
        { label: "People Reached (Ads)", value: "26,685", icon: "users" },
        { label: "Keywords Ranked", value: "1,000+", icon: "megaphone" },
        { label: "Total Ad Spend", value: "$298.62", icon: "dollar" },
      ],
    },
  },
  {
    id: "apparel-meta-scaling",
    title: "Apparel Brand — Scaling Meta Ads Profitably",
    description:
      "Took over Meta Ads for an apparel brand selling jackets and restructured the sales campaign around the strongest creatives and audiences. Instead of scaling by simply raising budget, we scaled in steps while protecting return on ad spend, so more spend brought proportionally more revenue.",
    results:
      "Month over month, ad spend grew 3.4x while revenue grew 4.7x, from $2,868 in September to $13,382 in the first 24 days of October. ROAS improved from 2.33x to 3.20x during the scale-up, and peaked at 3.92x in the first half of October.",
    dateRange: "September — October 2023",
    metrics: {
      sessions: 0,
      totalSales: 13381.57,
      orders: 0,
      conversionRate: 0,
      spending: 4183.4,
      currency: "USD",
      custom: [
        { label: "Revenue (24 days)", value: "$13.4K", icon: "dollar" },
        { label: "ROAS", value: "3.20x", icon: "trending" },
        { label: "Revenue Growth", value: "4.7x", icon: "cart" },
        { label: "ROAS Lift", value: "+37%", icon: "megaphone" },
      ],
    },
  },
  {
    id: "leather-pmax-scaling",
    title: "Leather Jacket Store — Google Performance Max",
    description:
      "Launched and scaled a Google Performance Max campaign for a premium leather jacket store. Once cost per conversion was stable, we pushed volume hard in the last third of the month, and later raised the daily budget from $900 to $1,500.",
    results:
      "Clicks grew 2.7x (4.9K → 13.1K) and conversions roughly doubled between the first and last 10 days of the month, while cost per conversion held steady at $115–120 and CPC dropped 20% ($0.80 → $0.64). The month ended with 22.9K clicks, 2.7M impressions and 132 conversions.",
    dateRange: "October 2024",
    metrics: {
      sessions: 0,
      totalSales: 0,
      orders: 132,
      conversionRate: 0,
      spending: 15400,
      currency: "USD",
      custom: [
        { label: "Clicks", value: "22.9K", icon: "click" },
        { label: "Impressions", value: "2.7M", icon: "eye" },
        { label: "Conversions", value: "132", icon: "cart" },
        { label: "Avg. CPC", value: "$0.67", icon: "dollar" },
      ],
    },
  },
  {
    id: "accessories-pmax-longterm",
    title: "Accessories Brand — 9 Months of Google Ads",
    description:
      "Managed an always-on Google Performance Max campaign for a fashion accessories brand for 9 months, keeping the account at a 100% optimization score through ongoing asset testing, headline refreshes and budget pacing.",
    results:
      "Delivered 13.6M impressions and 103K clicks on $67.7K of managed spend, at an average CPC of just $0.66 across the whole period.",
    dateRange: "May 2024 — February 2025",
    metrics: {
      sessions: 0,
      totalSales: 0,
      orders: 0,
      conversionRate: 0,
      spending: 67700,
      currency: "USD",
      custom: [
        { label: "Impressions", value: "13.6M", icon: "eye" },
        { label: "Clicks", value: "103K", icon: "click" },
        { label: "Avg. CPC", value: "$0.66", icon: "dollar" },
        { label: "Optimization Score", value: "100%", icon: "trending" },
      ],
    },
  },
  {
    id: "accessories-meta-roas",
    title: "Accessories Store — Consistent Meta ROAS",
    description:
      "Ran Meta sales campaigns for an online accessories store, splitting budget between a new-arrivals ad and an evergreen sales ad so each could be optimized on its own.",
    results:
      "Generated $19.2K in tracked purchase revenue from $8.5K in ad spend over about two months. ROAS stayed steady at 2.2–2.3x month to month, and improved from 2.21x to 2.31x.",
    dateRange: "September — October 2023",
    metrics: {
      sessions: 0,
      totalSales: 19223.73,
      orders: 0,
      conversionRate: 0,
      spending: 8515.25,
      currency: "USD",
      custom: [
        { label: "Revenue", value: "$19.2K", icon: "dollar" },
        { label: "Blended ROAS", value: "2.26x", icon: "trending" },
        { label: "Ad Spend", value: "$8.5K", icon: "megaphone" },
        { label: "ROAS Trend", value: "2.21→2.31x", icon: "cart" },
      ],
    },
  },
  {
    id: "high-volume-google",
    title: "High-Volume Google Ads Management",
    description:
      "Ran a large Google Ads account with 67 campaigns across search, shopping and video, managing bids, products and landing pages to keep traffic costs low at high volume.",
    results:
      "Managed $92.5K in spend that delivered 17.9M impressions at an average CPC of $0.51. From July to October alone, the account drove 51.8K clicks, 313 conversions and $71.7K in conversion value.",
    dateRange: "February — October 2023",
    metrics: {
      sessions: 0,
      totalSales: 71700,
      orders: 313,
      conversionRate: 0.74,
      spending: 92500,
      currency: "USD",
      custom: [
        { label: "Managed Spend", value: "$92.5K", icon: "dollar" },
        { label: "Impressions", value: "17.9M", icon: "eye" },
        { label: "Avg. CPC", value: "$0.51", icon: "click" },
        { label: "Campaigns", value: "67", icon: "megaphone" },
      ],
    },
  },
  {
    id: "1",
    title: "E-Commerce Store Performance",
    description: "So these are the results on 16 September, 2025. 3 orders in 67 sessions.",
    results: "Achieved 3 orders from 67 sessions with a conversion rate of 4.47% and total sales of AED 271.",
    dateRange: "September 16, 2025",
    metrics: {
      sessions: 67,
      totalSales: 271,
      orders: 3,
      conversionRate: 4.47,
      spending: 4100,
      currency: "AED",
    },
  },
  {
    id: "2",
    title: "6-Day Sales Campaign",
    description:
      "So these are the results from last 6 days, DHS 1000 in sales and a great profit margin. This happens when you do proper testing and right targeting.",
    results:
      "Generated AED 1,000 in total sales from 578 sessions with 14 orders and a 2.4% conversion rate over 6 days.",
    dateRange: "September 14-19, 2025",
    metrics: {
      sessions: 578,
      totalSales: 1000,
      orders: 14,
      conversionRate: 2.4,
      currency: "AED",
    },
  },
  {
    id: "3",
    title: "New Client Onboarding Success",
    description:
      "On boarded this client on 12 September, 2025. They were facing issues of irrelevant audience and very low but fake orders, I did complete audit of their ad account and highlighted some mistakes. So, after starting the testing phase, we got good results from one adset and the creative was good also. We are also trying to get one more winner before getting this store to scaling.",
    results:
      "On day 2, we have total 6 orders in UAE MARKET, and the client is in profit of almost 62 DHS (EXCLUDING AD SPEND).",
    dateRange: "September 14-15, 2025",
    metrics: {
      sessions: 91,
      totalSales: 273,
      orders: 6,
      conversionRate: 6.59,
      spending: 3767,
      currency: "AED",
    },
  },
];
